---
title: Batch Jobs
hide_table_of_contents: false
---
[purpose-maps]: docs/02-concepts/06-purpose-maps.md

With the differences between [Batch and Stream](./02-batch-vs-streaming.md) processing covered,
you have already encountered Batch Jobs. This article covers how batch jobs work.

# Batch Job Concepts

STRM Privacy supports batch processing through Batch Jobs. A Batch Job
represents the processing of one file: encryption, decryption,
masking and exporting the results. This means that a Batch Job has a
finite lifetime after it starts. It either succeeds or it fails, it’s
not a continuously running process, unlike a Kafka Consumer or a Batch
Exporter.

Processing multiple files thus requires multiple Batch Jobs and a Batch
Job cannot be reinstantiated for a second run.

:::note
Batch Jobs currently support one file per job, but could be extended to support multiple files per job.
Please [contact us](docs/05-contact/index.md) if you are interested in this.
:::

# Encryption

A lot in STRM Privacy data processing, both batch and streaming, revolves around
encryption of data. While most of it is the same, there are subtle
differences between how data is encrypted between the two, mostly
related to timing.

## Encryption keys

When using streams, encryption keys are generated on-the-fly when there
is no existing key for the given key field value. These encryption keys
then have a [lifetime of 24 hours](./01-pii-field-encryption.md#algorithm), after which a new encryption key is
generated when an event comes in. So this process relies on the current time.

When relying on the current time while processing a batch of data, two
things can happen:

- A big batch of data contains records that are more than 24 hours
  apart. This causes too much data to be encrypted using the same
  encryption key, which is undesirable.

- A batch contains data with records that are less than 24 hours
  apart. This causes encryption keys to be rotated too often, making
  it hard to "link" associated data, like a user session.

:::info
These two statements assume that a Batch Job takes less than 24 hours,
which is the common case and thus a valid assumption.
:::

:::note
In either case, the current time is not usable with batch processing.
:::

## The importance of timestamps

Because we cannot use the current time, and the timestamp is mandatory,
we require a timestamp to be present in every record.

This timestamp can then be used to determine which encryption key is
used when encrypting the PII fields in this record.

For determining the encryption key, we persistently store all encryption
keys in a database, along with a time window in which the key is valid.
Just as with streaming, this window is 24 hours.

:::info
Persisting encryption keys is a crucial responsibility. What needs to happen with the encryption keys,
after batch jobs have been executed greatly depends on the use case. Currently, no APIs exist that allow
for the management of the encryption keys. Please [contact us](docs/05-contact/index.md) if you are
interested in this.
:::

## Batch Job Groups

Batch Jobs can be configured to be part of the same _group_. This means
that these Batch Jobs use the same set of encryption keys. This can be
very helpful when the same dataset is split across multiple files and/or
you’d like to have a fluent transition at time window boundaries.

# Data Connectors

A Batch Job reads data from and sends data to a [Data Connector](docs/02-concepts/04-data-connectors.md),
which provides read and/or write access to e.g. an AWS S3 or GCS bucket.

For a Batch Job, three or more Data Connectors need to be specified,
for:

- **Location of the source data**. from which location is the unencrypted/raw data read?
- **Location of the encrypted data**. where will the encrypted data be stored?
- **Location of the encryption keys**. where will the encrypted keys be stored?
- **Zero or more locations for the derived data**. where will every file with derived data be stored?

Having separate Data Connectors for each piece of input/output data
makes it possible to create data pipelines that are inherently safe,
because consumers only see the data they’re allowed to see. But of
course it’s also possible to reuse the same Data Connector.

# Consent

Just like with stream processing, a lot of data processing relies on consent; the
consent of the data subject (i.e. the visitor on the website) and the
consent that needs to be decrypted.

For this, every record or event needs to have the consent of the end
user. Without consent, only encrypted PII fields can be used (_missing consent_ equals _no consent_).

To fit into as many environments as possible, a mechanism is provided to
extract the consent from the source data:

1. Specify the field that contains the consent
2. Specify a mapping to translate your terminology to purposes from your [purpose maps][purpose-maps].
   Provide the integer values ("levels") of the applicable purposes.
   A mapping in pseudo-code could be:
   ```
   functional -> [0]
   personalized-ads -> [1]
   analytics -> [1,2]
   marketing -> [1,2,3]
   ```
3. If no mapping is specified, an attempt is made to parse the data as an integer
   array, as follows: `"\[1,2\]"` or as an int, as follows: `"1"`.
4. If no mapping is specified, and the data is not an integer or integer array, or if
   there is another error while parsing, the provided default is used.
   Typically, this is an empty list, meaning _no consent_ or _unknown_.

:::note
There are more ways to extract consent than a fixed mapping, like User Defined Functions (UDFs). This is not planned
in the near future, but please [contact us](docs/05-contact/index.md) if you are interested in this.
:::

# Batch Job states

Batch Jobs progress through a series of states in case of success:

1. The Batch Job has a finite lifetime. When created, it has the
   status: `PENDING`. This means it has been successfully created and
   will be started soon.
2. When the Batch Job is started it gets the status: `STARTED`. This
   means all Data Connectors have been initialized, and it is about to
   read the source data.
3. While the Batch Job is running, it has the status: `RUNNING` every
   10 seconds.
4. When it’s done and all files have been uploaded to the respective
   Data Connectors, it has the status `FINISHED`.

In case of errors, Batch Jobs progress through the following states:

1. When there is an error starting the Batch Job, it gets the status:
   `ERROR_STARTING`. We retry restarting it for three times, after
   which we consider it an unrecoverable error, and we stop trying.
2. When there is an error while running the Batch Job, for example,
   while processing a CSV or writing to a Data Connector, it gets the
   status: `ERROR`. We consider this an unrecoverable error, and we
   don’t retry.
