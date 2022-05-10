---
title: Batch Jobs
hide_table_of_contents: false
---

This page describes the most important concepts to understand when using
Batch Jobs.

# Batch Job Concepts

## A Batch Job

STRM supports batch processing through Batch Jobs. One Batch Job
represents the processing of one data file: encryption, decrypion,
masking and exporting the results. This means that a Batch Job has a
finite lifetime after it starts. It either succeeds or it fails, it’s
not a continuously running process, like a Kafka consumer or a Batch
Exporter.

Processing multiple files thus requires multiple Batch Jobs and a Batch
Job cannot be reinstantiated for a second run.

## Encryption

A lot in STRM processing, both batch and streaming, revolves around
encryption of data. While most of it is the same, there are subtle
differences between how data is encrypted between the two, mostly
related to timing.

### Encryption keys

When using streams, encryption keys are generated on-the-fly when there
is no existing key for the given key field value. These encryption keys
then have a lifetime of 24 hours, after which a new encryption key is
generated when an event comes in.

So this process relies on the current time.

When relying on the current time while processing a batch of data, two
things can happen:

-   A big batch of data contains records that are more than 24 hours
    apart. This causes too much data to be encrypted using the same
    encryption key, which is undesirable.

-   A batch contains data with records that are less than 24 hours
    apart. This causes encryption keys to be rotated too often, making
    it hard to "link" associated data, like a user session.

These two statements assume that a Batch Job takes less than 24 hours,
which is the common case.

In either case, the current time is not usable with batch processing.

### The importance of timestamps

Because we cannot use the current time, and the timestamp is mandatory,
we require a timestamp to be present in every record.

This timestamp can then be used to determine which encryption key is
used when encrypting the PII fields in this record.

For determining the encryption key, we persistently store all encryption
keys in a database, along with a time window in which the key is valid.
Just as with streaming, this window is 24 hours.

### Batch Job Groups

Batch Jobs can be configured to be part of the same "group". This means
that these Batch Jobs use the same set of encryption keys. This can be
very helpful when the same dataset is split across multiple files and/or
you’d like to have a fluent transition at time window boundaries.

## Data Connectors

A Batch Job reads data from and sends data to a [Data Connector](/concepts/data-connectors.md),
which provides read and/or write access to e.g. an AWS S3 or GCS bucket.

For a Batch Job, three or more Data Connectors need to be specified,
for:

-   The location of the source data (from where is the unencrypted data
    read?).

-   The location of the encrypted data (where is the encrypted data
    stored?).

-   The location of the encryption keys (where are the encrypted keys
    stored?).

-   Zero or more locations for the derived data (where is every file
    with derived data stored?)

Having separate Data Connectors for each piece of input/output data
makes it possible to create data pipelines that are inherently safe,
because consumers only see the data they’re allowed to see. But of
course it’s also possible to reuse the same Data Connector.

## Consent

Just like with streaming, a lot of our processing relies on consent; the
consent of the end user (i.e. the visitor on the website) and the
consent we’d like to have decrypted.

For this, we need every record or event to have the consent of the end
user. Without consent, we can only use encrypted PII fields.

To fit into as many environments as possible, we provide a mechanism to
extract the consent from the source data.

First you need to specify which field contains the consent.

-   Then you can create a mapping to translate between your terminology
    and our consent levels, which are integer arrays. A mapping could
    be: Map "analytics" to "\[1,2\]".

-   If no mapping is specified, we try to parse the data as an int
    array, like this: "\[1,2\]" or as an int, like this: "1".

-   If there is no mapping, the data is not an int or int array, or if
    there is another error while parsing, the provided default is used.
    Typically this is an empty list, meaning "no consent" or "unknown".

We’re planning on more ways to extract consent, like user-provided code,
but this is not planned for the near future.

## Batch Job states

Success flow:

1.  The Batch Job has a finite lifetime. When created, it has the
    status: "PENDING". This means it has been successfully created and
    will be started soon.

2.  When the Batch Job is started it gets the status: "STARTED". This
    means all Data Connectors have been initialized, and it is about to
    read the source data.

3.  While the Batch Job is running, it has the status: "RUNNING" every
    10 seconds.

4.  When it’s done and all files have been uploaded to the respective
    Data Connectors, it has the status "FINISHED".

Error states:

1.  When there is an error starting the Batch Job, it gets the status:
    "ERROR\_STARTING". We retry restarting it for three times, after
    which we consider it an unrecoverable error, and we stop trying.

2.  When there is an error while running the Batch Job, for example,
    while processing a CSV or writing to a Data Connector, it gets the
    status: "ERROR". We consider this an unrecoverable error, and we
    don’t retry.
