---
title: Batch Exporter
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

# Exporting data to S3 and other common storage solutions

If you want to export stream data to AWS S3 or other storage solutions like
Google Cloud Storage or Azure Blob Storage, you first need to create a
`Data Connector` pointing to a specific instance thereof (the *target storage*).

- If you already have a target storage and credentials, you can skip the [preparation](#Preparation)
  and directly [create the data connector](#create-data-connector).

- If you don't have a target storage and/or credentials yet, but are able to create
  them yourself, you can start from the [preparation](#Preparation).

- If you need someone else to set this up for you,
  you can forward this documentation to them, so they know what to do.

## Preparation: creating target storage and credentials {#Preparation}

In this section, you will create the target storage (e.g. an AWS S3 bucket)
and set up credentials with the required access.

### 1. Create the target storage {#bucket}

<Tabs groupId="data-connector-type">
<TabItem value="s3" label="AWS S3">

Create an S3 bucket using the command below, using your own bucket name
(or do so in the AWS console):

```bash
$ aws s3 mb s3://<your-bucket-name>
```

</TabItem>
<TabItem value="s3v4" label="S3 Compatible">

S3 has evolved into a protocol, instead of just an Amazon product. It is possible to use our s3 data connector with
a non-AWS storage solution, as long as it provides an S3 compatible API. For example [min.io](https://min.io).

In this quickstart however, we will use a regular Google Cloud Storage bucket and connect using HMAC credentials. You can
substitute our examples with your own storage solution.

Create a GCS bucket in the [Google Cloud Console](https://console.cloud.google.com/storage/create-bucket),
or with the `gsutil` CLI tool:

```bash
$ gsutil mb gs://<your-bucket-name>
```

</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

Create a GCS bucket in the [Google Cloud Console](https://console.cloud.google.com/storage/create-bucket),
or with the `gsutil` CLI tool:

```bash
$ gsutil mb gs://<your-bucket-name>
```

</TabItem>
<TabItem value="azure-blob" label="Azure Blob Storage">

First, create a new Blob Storage Container from the [Azure Portal](https://portal.azure.com/)
or [using the Azure CLI](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-cli).

</TabItem>

</Tabs>

### 2. Create the necessary credentials {#creds}

<Tabs groupId="data-connector-type">
<TabItem value="s3" label="AWS S3">

Create a file with the policy document below and save it in the current
directory. This file contains the permissions the data connector needs.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation"
      ],
      "Resource": "arn:aws:s3:::<your-bucket-name>"
      //(1)
    },
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::<your-bucket-name>/<optional-prefix>/*.jsonl"
      //(2)
    }
  ]
}
```

1. fill in your bucket name
2. fill in your bucket name **and** an optional path prefix

:::important
Make sure you replace both occurrences of `<your-bucket-name>` with the
actual name of your S3 bucket and replace the `<optional-prefix>` with
the prefix in which STRM Privacy should put the files. If there is no
prefix, also leave out the last slash (as a double slash will not work).
:::

The provided policy document shows the minimal set of permissions needed
by the data connector. They are used as follows:

- [GetBucketLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html):
  This is an unfortunate necessity, because the AWS SDK requires us to
  connect to the same region as from where the bucket has originally
  been created. STRM Privacy cannot know this in advance, so we need
  to query it using this operation.

- [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html):
  the data connector will only be able to write `*.jsonl` files to the specified location
  (bucket + prefix).

We don’t need more permissions than these, and we also prefer to have as
few permissions as possible.

Now we need to create an IAM user which adheres to this policy. (This
example uses the username `strm-export-demo`, but we recommend you use a
more descriptive name for your organization).

First create the user:

```bash
aws iam create-user --user-name strm-export-demo
```

Then attach the above policy. This example assumes the policy
document is in the same directory. Replace the file name
`strm-policy.json` with the correct file name.

```bash
aws iam put-user-policy --user-name strm-export-demo \
  --policy-name strm-bucket-write-access \
  --policy-document file://strm-policy.json
```

Finally, create the access key for this user and download the
credentials (keep these safe, as they provide access to the bucket):

```bash
aws iam create-access-key --user-name strm-export-demo > s3.json
````

:::note
STRM Privacy validates the user & credentials configuration by writing an empty JSONL file
(file name: `.strm_test_<random UUID>.jsonl`) to the specified
bucket/prefix upon creation of the batch exporter.
:::

</TabItem>
<TabItem value="s3v4" label="S3 Compatible">

1. First, create a new service account, for example in
   the [Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Then grant write permissions on the bucket to this service account. You can do this under the
   `PERMISSIONS` tab on the bucket's details page. Choose for example `Storage Legacy Bucket Writer`
   as role and the newly created service account as principal.
3. Create HMAC credentials: `gsutil hmac create <service-account-name>`. Put the secrets in a JSON file, named for 
   example `s3.json`:
   ```json
   {
     "url": "https://storage.googleapis.com",
     "accessKey": "<access-key>",
     "secretKey": "<secret-key>",
     "api": "s3v4",
     "path": "auto"
   }
   ```
   
</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

1. First, create a new service account, for example in
   the [Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Then grant write permissions on the bucket to this service account. You can do this under the
   `PERMISSIONS` tab on the bucket's details page. Choose for example `Storage Legacy Bucket Writer`
   as role and the newly created service account as principal.
3. On the details page of the service account, under the `KEYS` tab, select `ADD KEY`, `Create new key`
   and choose key type `JSON`. After creation, the JSON credentials file is downloaded. These are the
   credentials required when creating the data connector in the next section.

</TabItem>
<TabItem value="azure-blob" label="Azure Blob Storage">

The STRM Privacy data connector for Azure Blob Storage currently supports Client Secret Credentials.
We recommend [creating a new Application with Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal),
*including a client secret*.

Next, assign the `Storage Blob Data Contributor` role to this service principal, specifically for
the container created earlier. You can do that for example from the `Access Control (IAM)` menu 
of the container in the Azure Portal.

</TabItem>

</Tabs>

## Creating a data connector

### 1. Preparation

<Tabs groupId="data-connector-type">
<TabItem value="s3" label="AWS S3">

First, make sure you have a file named `s3.json` in your current
directory, with the following contents:

```json
{
  "AccessKey": {
    "UserName": "<your user name>",
    "AccessKeyId": "<your access key>",
    "Status": "Active",
    "SecretAccessKey": "<your secret access key>",
    "CreateDate": "<the creation date>"
  }
}
```

:::note
This is the same JSON as returned by `aws iam create-access-key`.
:::

</TabItem>
<TabItem value="s3v4" label="S3 Compatible">

If you created a JSON file with the HMAC credentials in te previous step, you are ready to create a data connector.
If not, create one now.

</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

First, make sure you have a file named `gcs.json` in your current directory,
containing the service account credentials of the service account to use
for writing to the bucket.

The contents should look something like:

```json
{
  "type": "service_account",
  "project_id": "***",
  "private_key_id": "***",
  "private_key": "-----BEGIN PRIVATE KEY-----\n***\n-----END PRIVATE KEY-----\n",
  "client_email": "***@***.iam.gserviceaccount.com",
  "client_id": "***",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/***.iam.gserviceaccount.com"
}
```

</TabItem>
<TabItem value="azure-blob" label="Azure Blob Storage">

To create a data connector for your Blob Storage Container, you will need the following details:

1. The **full URI** of your storage account (excluding container name), for example `https://foo.blob.core.windows.net`.
2. Your **tenant ID**.
3. The **client (application) ID** of the Azure AD application used to access the container.
4. The **client secret** of the service principal used to authenticate with the AAD application.

</TabItem>

</Tabs>

### 2. Create the data connector {#create-data-connector}

<Tabs groupId="data-connector-type">
<TabItem value="s3" label="AWS S3">

With the AWS credentials in a file `s3.json`, you can
create the data connector using the command below:

```bash
$ strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "my-s3"
  },
  "s3Bucket": {
    "bucketName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `my-s3` for the bucket `strmprivacy-export-demo`,
using the provided credentials. Specify the actual name of your bucket, and any name for the
data connector itself.

</TabItem>
<TabItem value="s3v4" label="S3 Compatible">

With the credentials file (`s3.json` in our example), create the data connector using
the command below:

```bash
$ strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "my-s3"
  },
  "s3Bucket": {
    "bucketName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `my-s3` for the bucket `strmprivacy-export-demo`,
using the provided credentials. Specify the actual name of your bucket, and any name for the
data connector itself.

</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

You can create the data connector with the following command, pointing to the
credentials file:

```bash
$ strm create data-connector gcs my-gcs strmprivacy-export-demo --credentials-file=gcs.json
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "my-gcs"
  },
  "googleCloudStorageBucket": {
    "bucketName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `my-gcs` for the bucket `strmprivacy-export-demo`,
using the provided credentials.

</TabItem>
<TabItem value="azure-blob" label="Azure Blob Storage">

You can create the data connector with the following command, providing a name, the
container name, and the other required flags:

```bash
$ strm create data-connector azure-blob-storage azure strmprivacy-export-demo --storage-account-uri "https://foo.blob.core.windows.net" --tenant-id "<your tenant ID>" --client-id "<the app client ID>" --client-secret "<the service principal's secret>"
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "azure"
  },
  "azureBlobStorageContainer": {
    "storageAccountUri": "https://foo.blob.core.windows.net",
    "containerName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `azure` for the container `strmprivacy-export-demo`,
using the provided client secret credentials.

</TabItem>

</Tabs>

You can list all your data connectors with `strm list data-connectors`.

<Tabs groupId="data-connector-type">
<TabItem value="s3" label="AWS S3">

```bash
$ strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": {
        "billingId": "demo8542234275",
        "name": "my-s3"
      },
      "s3Bucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    }
  ]
}
```

</TabItem>
<TabItem value="s3v4" label="S3 Compatible">

```bash
$ strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": {
        "billingId": "demo8542234275",
        "name": "my-s3"
      },
      "s3Bucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    }
  ]
}
```

</TabItem>
<TabItem value="gcs" label="Google Cloud Storage">

```bash
$ strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": {
        "billingId": "demo8542234275",
        "name": "my-gcs"
      },
      "googleCloudStorageBucket": {
        "bucketName": "strmprivacy-export-demo"
      }
    }
  ]
}
```

</TabItem>
<TabItem value="azure-blob" label="Azure Blob Storage">

```bash
$ strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": {
        "billingId": "demo8542234275",
        "name": "azure"
      },
      "azureBlobStorageContainer": {
        "storageAccountUri": "https://foo.blob.core.windows.net",
        "containerName": "strmprivacy-export-demo"
      }
    }
  ]
}
```

</TabItem>

</Tabs>

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
    "billingId": "demo8542234275", 
    "name": "s3-demo" 
  }, 
  "streamRef": { #(2)
    "billingId": "demo8542234275", 
    "name": "demo" 
  }, 
  "dataConnectorRef": { #(3)
    "billingId": "demo8542234275", 
    "name": "s3" 
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
    "billingId": "demo8542234275",
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
