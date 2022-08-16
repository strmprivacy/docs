---
title: Batch Exporter
hide_table_of_contents: false
---

# Exporting data to S3, Gcloud or Azure

If you want to export stream data to AWS S3 or other storage solutions like
Google Cloud Storage or Azure Blob Storage, you first need to create a
`Data Connector` pointing to a specific instance thereof (the *target storage*).
See [Data Connectors](./data-connectors/index.md) for details for each of the supported cloud storage platforms.


## Creating a data connector

### 1. Preparation



You can list all your data connectors with `strm list data-connectors`.


```bash
$ strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": {
        "name": "my-s3",
        "projectId": "30fcd008-9696-...."
      },
      "s3Bucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    },
    {
      "ref": {
        "name": "my-s3",
        "projectId": "30fcd008-9696-...."
      },
      "s3Bucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    },
    {
      "ref": {
        "name": "my-gcs",
        "projectId": "30fcd008-9696-...."
      },
      "googleCloudStorageBucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    },
    {
      "ref": {
        "name": "azure",
        "projectId": "30fcd008-9696-...."
      },
      "azureBlobStorageContainer": {
        "storageAccountUri": "https://foo.blob.core.windows.net",
        "containerName": "strmprivacy-export-demo"
      }
    }
  ]
}
```

## Create a batch exporter

A `batch exporter` is the STRM Privacy component that reads your input
stream, and writes its events in batches to the target storage configured
by your data connector.

Let’s create an exporter on the `demo` stream (make sure to create this
first). The below example uses a data connector named `s3`. The type
of connector is not of importance when creating a batch exporter. Just
provide the name of the existing data connector you want to use. Here
we also provide a path prefix `events`, meaning that the batch exporter
will prepend file names with this prefix.

```bash
strm create batch-exporter demo --data-connector s3 --path-prefix events
{
  "ref": { #(1)
    "name": "s3-demo" ,
    "projectId": "30fcd008-9696-...."
  }, 
  "streamRef": { #(2)
    "name": "demo" ,
    "projectId": "30fcd008-9696-...."
  }, 
  "dataConnectorRef": { #(3)
    "name": "s3" ,
    "projectId": "30fcd008-9696-...."
  }, 
  "interval": "60s",
  "pathPrefix": "events"
}
```

1. the reference of the batch exporter
2. the reference to the stream that feeds the exporter
3. the reference to the data connector

Note that a default name has been given to the batch exporter. Alternatively,
a name can be set with the `--name` flag.

We’re sending batches every 60 seconds. This can be configured with the
`--interval` flag.

Also note that the `--path-prefix` argument is optional. Make sure it
matches your bucket structure and permissions.

## Using the results (AWS S3)

Everything has been set up and if you are already sending events to the stream,
you should start seeing data in your bucket after the configured interval has
elapsed. If you aren't sending data yet, you could simulate some random events
with `strm simulate random-events <stream name>`.

The below examples are for an S3 bucket, but the files/blobs will have the same
contents for other types of data connectors.

```bash
$ aws s3 ls strmprivacy-export-demo/events/
```

Output:

    2021-03-26 10:56:31      79296 2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl
    2021-03-26 10:57:01     275726 2021-03-26T09:57:00-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl
    2021-03-26 10:57:31     277399 2021-03-26T09:57:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl

:::note
In a future version, these filenames will show the *stream name*,
instead of a uuid that we use internally.
:::

And having a look inside one of the files.

```bash
$ aws s3 cp s3://strmprivacy-export-demo/encrypted-events/2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl - | head -1
```

Output:

```json
{
  "strmMeta": {
    "schemaId": "clickstream",
    "nonce": 1009145850,
    "timestamp": 1625820808909,
    "keyLink": "04d243ba-2cc9-4def-b406-7241d4fce7d1",
    "consentLevels": [
      0,
      1
    ]
  },
  "producerSessionId": "ATqVzbsw2qN3XDj+3D0SABPPVjb2nIqCcdFcG1irE6w=",
  "url": "https://www.strmprivacy.io/rules",
  "eventType": "",
  "referrer": "",
  "userAgent": "",
  "conversion": 0,
  "customer": {
    "id": "ATqVzbsKWvI9GH/rTwcI78Behpe5zo30EJMXGyEbP+u0FEZcBRwdP+A="
  },
  "abTests": []
}
```

## About the filenames

The last part of the filenames identifies the partitions being processed
by the Kafka consumers that are doing the actual exports. When under a
high event rate, we need more than 1 Kafka consumer, we would see a
division of partitions over multiple filenames. In this example, the
topic has 5 partitions, and all of them are processed by one Kafka
consumer.

With manual offset management in the Kafka consumer, we’re fairly
confident there will be *no duplicate nor missing data* in your bucket.

## Important considerations for consumers

A data connector is a very generic building block, which integrates with
most architectures, making it very usable.

Still, there are some things to be aware of:

### Empty files

When there are no events, a batch exporter does not write any files to
the data connector, so no empty files will be written.

However, when the batch exporter is created or (re)started, we write an
empty JSONL file to validate the configuration (does the storage destination
referred to by the data connector exist
and do the credentials grant the required access?). This results
in *some* empty files, so your downstream code needs to be able to
handle these.

### Handling credentials securily

STRM Privacy stores the provided data connector credentials in a secure and encrypted
manner. Nevertheless, we suggest creating
dedicated users/credentials for each data connector and/or purpose.
Grant only the minimum required permissions on only the necessary resources,
as [shown above](#creds).

This way, you can easily revoke/change the credentials, and create a new data connector
and batch exporter configuration without impacting other applications.

## Tearing down

Delete a batch exporter with the `delete` command:

```bash
$ strm delete batch-exporter <batch exporter name>
Batch Exporter has been deleted
```

To delete a data connector, any dependent batch exporter needs to be deleted first.
It can then be deleted as follows:

```bash
$ strm delete data-connector <data connector name>
Data Connector has been deleted
```

Alternatively, you can remove the data connector with all linked batch exporters in one go:

```bash
$ strm delete data-connector <data connector name> --recursive
Data Connector and dependent entities have been deleted
```

:::note
You’re not required to delete a data connector when deleting a batch exporter.
After all, it's only a configuration item that doesn't do anything by itself.
:::
