---
title: Exporting to AWS S3
hide_table_of_contents: false
---

# Exporting to S3

If you want to export stream data to AWS S3, you first need to create a
`Sink` pointing to the S3 bucket.

- Depending on the situation, you might already have a bucket and the
    credentials. In that case, you can skip the [1. Create the bucket](bucket) and go
    directly to [2. Create the sink](create-sink).

- Or you don’t yet have the bucket and credentials, but you can create
    them yourself. In that case, you can follow along from the 
    [Preparation](Preparation).

- Or you need someone else to set this up for you in your AWS account.
    In that case, you can forward this document to them, so they know
    what to do.

## Preparation: Set up S3 bucket and credentials {#Preparation}

Before creating a sink, you need:

-   An S3 bucket ([1. Create the bucket](bucket))

-   An IAM user with the correct permissions to write in this bucket
    ([2. Create the necessary credentials](creds))

You first need to create an AWS credentials file that gives STRM Privacy
write access to a specific bucket/prefix.

To do so, follow the steps below:

### 1. Create the bucket {#bucket}

Create a bucket using the command below, using your own bucket name:

```bash
$ aws s3 mb s3://<your-bucket-name>
```

### 2. Create the necessary credentials {#creds}

Create a file with the policy document below and save it in the current
directory. This file contains the permissions STRM Privacy needs.

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetBucketLocation"
            ],
            "Resource": "arn:aws:s3:::<your-bucket-name>" //(1)
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:PutObject"
            ],
            "Resource":
            "arn:aws:s3:::<your-bucket-name>/<optional-prefix>/*.jsonl" //(2)
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
by STRM Privacy. We use these as follows:

-   [GetBucketLocation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html):
    This is an unfortunate necessity, because the AWS SDK requires us to
    connect to the same region as from where the bucket has originally
    been created. STRM Privacy cannot know this in advance, so we need
    to query it using this operation.

-   [PutObject](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html):
    STRM Privacy only writes `*.jsonl` files to the specified location
    (bucket + prefix).

We don’t need more permissions than these, and we also prefer to have as
few permissions as possible.

:::note
STRM Privacy validates the configuration by writing an empty JSONL file
(file name: `.strm_test_<random UUID>.jsonl`) to the specified
bucket/prefix, using the provided credentials.
:::

STRM Privacy needs access to the bucket you’ve just created, so there
needs to be an IAM user which has the policy of [2. Create the necessary credentials](creds)) (This
example uses the name `strm-export-demo`, but we recommend you use a
more descriptive name for your organization).

First create the user

```bash
aws iam create-user --user-name strm-export-demo
```

Then attach the policy of [2. Create the necessary credentials](creds)). This listing assumes the policy
document is in the same directory. Replace the file name
`strm-policy.json` with the correct file name.

```bash
aws iam put-user-policy --user-name strm-export-demo \
  --policy-name strm-bucket-write-access \
  --policy-document file://strm-policy.json
```

Finally, create the access key for this user and download the
credentials: (keep these safe, as they provide access to the bucket)

```bash
aws iam create-access-key --user-name strm-export-demo > s3.json
````

## Create a Sink

### 1. Preparation 

First, make sure you have a file, called `s3.json` in your current
directory, with the following contents:

```json
{
    "AccessKey": {
        "UserName": "<strm-export-demo>",
        "AccessKeyId": "<your access key>",
        "Status": "Active",
        "SecretAccessKey": "<your secret access key>",
        "CreateDate": "2021-04-08T08:19:33+00:00" // The actual date might differ
    }
}
```

:::note
This is the same JSON as returned by `aws iam create-access-key`.
:::

### 2. Create the sink {#create-sink}

When you have the correct AWS credentials in a file `s3.json`, you can
create the sink using the command below:

:::note
In this example we assume the bucket name is: `strmprivacy-export-demo`
and the prefix is `events`.
:::

```bash
strm create sink s3 strmprivacy-export-demo --credentials-file=s3.json
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "s3"
  },
  "sinkType": "S3",
  "bucket": {
    "bucketName": "strmprivacy-export-demo",
    "credentials": "<the credentials as shown above>"
  }
}
```

Based on the structure of the credentials file, we automatically set the
type to S3 or Google Cloud Storage.

You can see all your sinks with `strm list sinks`.

```bash
$ strm list sinks
{
  "sinks": [
    {
      "sink": {
        "ref": {
          "billingId": "demo8542234275",
          "name": "s3"
        },
        "sinkType": "S3",
        "bucket": {
          "bucketName": "jankees-mybucket"
        }
      }
    }
  ]
}
```

## Create a batch exporter

An `batch exporter` is the STRM Privacy component that reads your
stream, and sends its events in batches to the sink (in this case an S3
bucket).

Let’s create an exporter on the `demo` stream (make sure to create this
first). Batch exporter names are unique per connected stream, so you
could always call them *s3* for instance.

```bash
strm create batch-exporter demo --sink s3 --path-prefix events
{
  //highlight-next-line
  "ref": { "billingId": "demo8542234275", "name": "s3-demo" }, 
  //highlight-next-line
  "streamRef": { "billingId": "demo8542234275", "name": "demo" }, 
  "interval": "60s",
  //highlight-next-line
  "sinkName": "s3", 
  "pathPrefix": "events"
}
```

1. the reference to the batch exporter
2. the reference to the stream that feeds the exporter 
3. the name of the sink

Note that we’re sending data on the stream `demo` and a default name has
been given to the batch exporter.

We’re sending batches every 60 seconds. This can be configured through
the CLI.

Also note that the `--path-prefix` argument is optional. Make sure it
matches your bucket structure and permissions.

## Using the results

Everything has been set up and after &lt;interval&gt; number of seconds,
you should start seeing data in your bucket.

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
    "consentLevels": [0,1]
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

The S3 exporter is a very generic building block, which integrates into
most architectures, making it very usable.

Still, there are some things to be aware of:

### Empty files

When there are no events, the S3 exporter will not write any files to
the bucket, so you won’t be seeing many empty files.

However, when the batch exporter is created or (re)started, we write an
empty JSONL file to validate the configuration (does the bucket exist
and does Stream Machine have the appropriate permissions?). This results
in *some* empty files, so your downstream code needs to be able to
handle these.

### IAM user credentials

STRM Privacy stores the provided IAM credentials in an encrypted
storage, which is highly secured. Nevertheless, it might be wise to
create a dedicated STRM Privacy user, which is used for connecting to
the S3 bucket.

This user should only have the necessary permissions ([2. Create the necessary credentials](creds)),
only on the necessary resources (bucket  
optional prefix + `.jsonl` suffix).

This way, you can easily revoke/change the credentials, and re-upload
these using our CLI (`strm create sink` is also used to update the sink)
without impacting other applications.

## Tearing down

Tearing down a sink requires to first remove the batch exporter, and
only then remove the sink. You’re not required to remove the sink at
all, it’s just a configuration item.

```bash
$ strm delete batch-exporter s3-strmprivacy
{}
```

You can remove the sink as follows.

```bash
$ strm delete sink s3
{}
```

Or you can remove the sink with all linked batch exporters in one
command:

```bash
$ strm delete sink s3 --recursive
{}
```