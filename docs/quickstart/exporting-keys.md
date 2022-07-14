---
title: Exporting Keys
hide_table_of_contents: false
---

# Exporting encryption keys

The [output streams](creating-streams.md#outputStreams) feature
manages the decryption of data for you. The keys exist only within the
STRM Privacy keys database, for a duration a little longer than the keys
rotation period [^1]. The output streams have a default retention of 7
days, so if you don’t have the keys, and don’t consume or export the
output streams within 7 days, you lose the capability to decrypt the
personal data attributes.

Assuming your company decides that it wants to have the actual
encryption keys [^2], you need to configure STRM Privacy to provide you
with the keys. A pre-requisite is that your account is enabled for this
capability. If not the features below will be *forbidden* to you.

:::important
Exporting keys is only permitted if your account allows this. There is
currently no way to enable this setting from the customer console.
Contact us if you need this feature.
:::

## The Encryption Keys

We use [Google Tink](https://developers.google.com/tink) as an
abstraction library for standard AES-256 encryption with a synthetic
initialization vector. The SIV means that for a certain plain-text
value, the corresponding cypher text will be identical (for a certain
encryption key).

## Have a data connector ready

We’re using a data connector named `demo`, which we created with:

```bash
strm create data-connector gcs demo strm-demo --credentials-file gcloud.json
```

It allows us to connect to a Google Cloud Storage bucket called `strm-demo`
using service account credentials created via the [the Google Cloud
console](https://console.cloud.google.com/iam-admin/serviceaccounts/create).

When using an AWS S3 data connector, the mechanism is similar and described
[here](/quickstart/batch-exporter.md).

The bucket's contents can be accessed with the [aws cli
tool](https://aws.amazon.com/cli/) for S3 or the [gsutil Google Cloud
cli tool](https://cloud.google.com/storage/docs/gsutil) for Google
Cloud, or their respective cloud consoles.

## Creating an exporter

Currently, we only provide batch exporters for the encryption keys, that
work very similar to the [events batch exporters](/quickstart/batch-exporter.md).
So you need the same mechanism with authenticated and authorized IAM
users.

```bash
$ strm create batch-exporter --help

Usage:
  dstrm create batch-exporter [stream-name] [flags]

Flags:
      --data-connector string     name of the data connector - optional if you own only one data connector
      --export-keys               Do we want to export the keys stream
  -h, --help                      help for batch-exporter
      --include-existing-events   Do we want to include all existing events
      --interval int              Interval in seconds between batches (default 60)
      --name string               optional batch exporter name
      --path-prefix string        path prefix on bucket
```

We’re looking for the `--export-keys` option. Provided key exporting is
enabled for your account, you can do the following:

```bash
strm create batch-exporter demo --export-keys \
  --interval 30 --path-prefix demo-keys --data-connector demo
{
  "ref": { #(1)
    "name": "demo-demo-keys",
    "projectId": "30fcd008-9696-...."
  },
  "keyStreamRef": { #(2)
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "dataConnectorRef": { #(3)
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "interval": "30s",
  "pathPrefix": "demo-keys" #(4)
}
```

1. the reference to the batch-exporter
2. the reference to the key stream
3. the reference to the data connector to use
4. a directory to use in the bucket for storing keys

:::note
If you have more than one data-connector defined, you *must* provide its name.
If you have only one, it is chosen as the default option.
:::

:::note
The current implementation (released on `04 May 2021`) of this key
export mechanism does not export keys that were created more than 7 days
earlier [^3].
:::

## Exported keys in the bucket

:::note
We have been running `strm sim run-random demo` for a while in another
terminal, so there are keys data.
:::

You can have a look at the output:
```bash
gsutil ls gs://strm-demo/demo-keys/

gs://strm-demo/demo-keys/2021-08-18T12:09:00-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl
gs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl

gsutil cat gs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl | tail -1
{
  "keyLink": "d478e24c-d12d-466e-80dd-055736bba704",
  "tinkKey": {
    "primaryKeyId": 2140201303,
    "key": [
      {
        "keyData": {
          "typeUrl": "type.googleapis.com/google.crypto.tink.AesSivKey",
          "keyMaterialType": "SYMMETRIC",
          "value": "EkAho6Jgghn8m//At...."
        },
        "outputPrefixType": "TINK",
        "keyId": 2140201303,
        "status": "ENABLED"
      }
    ]
  }
}
```
You can do exactly the same for an AWS S3 bucket. Inspect the keys like so:
```bash
aws s3 ls strmprivacy-export-demo/perf-test-keys/
2021-05-04 15:41:37          0 .strm_test...95-dfec21be8251.jsonl #(1)
2021-05-04 16:13:01     166008 2021-05-04T14:13:00-keys-e1...-7-8-9.jsonl #(2)
2021-05-04 16:13:31     701824 2021-05-04T14:13:30-keys-e1...-7-8-9.jsonl

aws s3 cp \
  s3://strmprivacy-export-demo/perf-test-keys/2021-05-04T14:13:00-keys-e1...-7-8-9.jsonl \
  - | head -1

{ "keyLink": "44861053-6a95-4ec6-8b33-96fd1f748402", #(3)
  "tinkKey": {"primaryKeyId":84683988,"key":[
    {"keyData":{"typeUrl":"type.googleapis.com/google.crypto.tink.AesSivKey",
    "keyMaterialType":"SYMMETRIC",
      "value":"EkDzauIHozdnF.....WkpB8Xu"}, #(4)
      "outputPrefixType":"TINK","keyId":84683988,"status":"ENABLED"}]}
}
```
1. This is a test file created by STRM Privacy to verify that we can
    actually write in this bucket. Because it starts with a `.` it is
    ignored by most tools.
2. Because the interval is 30 seconds, we’ll have a file every 30
    seconds. Each file contains json lines with one key per line. The
    line contains both a `keyLink` attribute, with the key link of the
    events, and a `tinkKey` attribute that contains the serialized Tink
    key. The format is described in [this protobuf file](https://github.com/google/tink/blob/master/proto/tink.proto).
    The `keyLink` value is the same value you’ll find in the
    [`strmMeta/keyLink`](/concepts/strm-meta.md) field of each event.
3. the key link that exists on all STRM Privacy events.
4. the actual AES-256 encryption key.

[^1]: default 24 hours
[^2]: with the associated security and personal data hassles!
[^3]: the retention period of the keys Kafka topic
