---
title: Exporting Keys
hide_table_of_contents: false
---

[policies]: ../../../02-concepts/01-data-processing/05-policies.md
It is possible to export encryption keys and move the decryption of events to a later point in time.
This has various benefits:
1. decoupling of encrypted data and encryption keys (no persistence of decrypted data)
2. views can be created to create the idea of working with raw data
3. permissions can be enforced on encryption keys to prevent arbitrary access
[//]: # (TODO add link to blog post / docs)

# Exporting encryption keys

The [derived streams](docs/03-quickstart/01-streaming/01-creating-streams.md#creating-decrypted-streams) feature
manages the decryption of data for you. The keys exist only within the
STRM Privacy keys database, for a duration a little longer than the keys
rotation period [^1]. The derived streams have a default retention of 7
days, so if you don’t have the keys, and don’t consume or export the
derived streams within 7 days, you lose the capability to decrypt the
fields marked as PII.

Assuming your company decides that it wants to have the actual
encryption keys [^2], you need to configure STRM Privacy to provide you
with the keys. A pre-requisite is that your account is enabled for this
capability. The free subscription does not allow to export keys.

:::important
Exporting keys is only permitted if your account allows this. There is
currently no way to enable this setting from the customer console.
Please [contact us](docs/05-contact/index.md) if you are interested in this.
:::

## Prepare a data connector

In this quickstart, a data connector named `demo` is used, which can be created with:

```bash
$ strm create data-connector gcs demo strm-demo --credentials-file gcloud.json
```

It allows a connection to a Google Cloud Storage bucket called `strm-demo`
using service account credentials created via [the Google Cloud
console](https://console.cloud.google.com/iam-admin/serviceaccounts/create).

When using an AWS S3 data connector, the mechanism is similar and described
[here](docs/03-quickstart/01-streaming/04-receiving-data/01-batch-export.md).

The bucket's contents can be accessed with the [aws cli
tool](https://aws.amazon.com/cli/) for S3 or the [gsutil Google Cloud
cli tool](https://cloud.google.com/storage/docs/gsutil) for Google
Cloud, or their respective cloud consoles.

## Create an exporter

Currently, only batch exporters can be used to export the encryption keys, that
work very similar to the [event batch exporters](docs/03-quickstart/01-streaming/04-receiving-data/01-batch-export.md).
So you need the same mechanism with authenticated and authorized IAM users.

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

To export encryption keys, look for the `--export-keys` option. Provided key exporting is
enabled for your account, you can do the following:

```bash showLineNumbers
$ strm create batch-exporter demo --export-keys \
  --interval 30 --path-prefix demo-keys --data-connector demo
{
  "ref": {
    "name": "demo-demo-keys",
    "projectId": "30fcd008-9696-...."
  },
  "keyStreamRef": {
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "dataConnectorRef": {
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "interval": "30s",
  "pathPrefix": "demo-keys"
}
```

1. `ref`: the reference to the batch-exporter
2. `keyStreamRef`: the reference to the key stream
3. `dataConnectorRef`: the reference to the data connector to use
4. `pathPrefix`: a directory to use in the bucket for storing keys

:::tip
If you have more than one data-connector defined, you *must* provide its name.
If you have only one, it is chosen as the default option.
:::

:::note
The current implementation of this key
export mechanism does not export keys that were created more than 7 days
earlier [^3].
:::

## Exported keys in the bucket

:::note
The keys csv files have 2 more columns related to the pipeline Policies. See [the Policies concept][policies]
:::

:::note
For this quickstart, `strm simulate random-events demo` for a while, to ensure events, and thus encryption keys
are present.
:::

You can have a look at the output:
```bash
$ gsutil ls gs://strm-demo/demo-keys/

gs://strm-demo/demo-keys/2021-08-18T12:09:00-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.csv
gs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.csv

$ gsutil cat gs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.csv | tail -1

"b15bca55-3a4c-4e49-b8ab-f702de632c06","{""primaryKeyId"":79082719,""key"":[{""keyData"":{""typeUrl"":""type.googleapis.com/google.crypto.tink.AesSivKey"",""value"":""EkDZZDHV5UnICX/N6G..."",""keyMaterialType"":""SYMMETRIC""},""status"":""ENABLED"",""keyId"":79082719,""outputPrefixType"":""TINK""}]}
```

You can do exactly the same for an AWS S3 bucket. Inspect the keys like so:
```bash
$ aws s3 ls strmprivacy-export-demo/perf-test-keys/

2021-05-04 15:41:37          0 .strm_test...95-dfec21be8251.jsonl
2021-05-04 16:13:01     166008 2021-05-04T14:13:00-keys-e1...-7-8-9.csv
2021-05-04 16:13:31     701824 2021-05-04T14:13:30-keys-e1...-7-8-9.csv

$ aws s3 cp s3://strmprivacy-export-demo/perf-test-keys/2021-05-04T14:13:00-keys-e1...-7-8-9.csv - | tail -1

"b15bca55-3a4c-4e49-b8ab-f702de632c06","{""primaryKeyId"":79082719,""key"":[{""keyData"":{""typeUrl"":""type.googleapis.com/google.crypto.tink.AesSivKey"",""value"":""EkDZZDHV5UnICX..."",""keyMaterialType"":""SYMMETRIC""},""status"":""ENABLED"",""keyId"":79082719,""outputPrefixType"":""TINK""}]}
```
1. `.strm_test...95-dfec21be8251.jsonl`: This is a test file created by STRM Privacy to verify that the exporter can
    actually write in this bucket. Because it starts with a `.` it is
    ignored by most tools.
2. `2021-05-04T14:13:00-keys-e1...-7-8-9.csv`: Because the interval is 30 seconds, a file is written every 30
    seconds. Each file contains JSONL with one key per line. The
    line contains both a `keyLink` attribute, with the key link of the
    events, and a `tinkKey` attribute that contains the serialized Tink
    key. The format is described in [this protobuf definition](https://github.com/google/tink/blob/master/proto/tink.proto).
    The `keyLink` value is the same value you’ll find in the
    [`strmMeta/keyLink`](docs/02-concepts/02-data-contracts/02-strm-meta.md) field of each event.
3. `"b15bca55-3a4c-4e49-b8ab-f702de632c06"`: a `keyLink` that exists in all STRM Privacy events.
4. `"{""primaryKeyId""...`: the actual AES-256 encryption key.

[^1]: default 24 hours, depending on the [privacy algorithm](docs/01-overview/01-principles.md#5-deterministic-privacy-algorithms-privacy-algorithms)
[^2]: with the associated security challenges
[^3]: the retention period of the keys Kafka topic
