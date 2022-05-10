---
title: High Level Architecture
hide_table_of_contents: false
---

# Architecture

This section shows the high level architecture of STRM Privacy. It shows
how data is processed, before it is exposed to an application consuming
the data.

## Overview

When sending data or receiving data to/from STRM Privacy, your
application must identify itself using client credentials. These
credentials are provided through the self-service console or via the
`strm` command line interface.

All events that are being sent to STRM Privacy have schema reference (in
a http header) that defines the structure and contents of the event.

The STRM Privacy *Event Gateway* will verify that the data:

1.  …is of the correct serialization format, as specified in schema
    reference

2.  …is a valid serialized message

3.  …complies to the pre-defined validation rules, as specified in the
    Event Contract

![High Level Architecture](images/hla.svg)

Upon accepting an event, the *Event Gateway* will use the *Encrypter* to
encrypt **all** defined Personally Identifiable Information (PII)
attributes of the event. Which fields are PII is defined in the event
contract, for example [the media personalization event
contract](https://strmprivacy.io/schemas/dpg/nps_unified/5.0.0/). The
schema can have multiple levels of PII attributes but all of them are
encrypted with the same encryption key that is linked to the session.
This key is rotated every 24 hours.

You *can* [^1] create decrypted streams that contain a subset of the
encrypted stream, with only those PII fields decrypted that you have
requested.

The algorithm is as follows:

-   we define a derived stream where for example we request to receive
    events that provide consent for levels 1, 3 and 8.

-   the decrypter will inspect every event, and will ignore all events
    that don’t have *at least* these 3 levels set in their
    `consentLevels` [meta-data](/concepts/strm-meta.md).

-   the events that are accepted by the decrypter will then be partially
    decrypted; only the attributes with PII levels 1, 3 and 8 will be
    decrypted. This means that assuming a customer has given consent for
    a couple more PII levels, fields with those consent levels will
    **not be decrypted**. This is the mechanism that STRM Privacy uses
    to adhere to [article 6 of the
    GDPR](https://gdpr-info.eu/art-6-gdpr/). A data processing unit in a
    company receives only those events that the end-user has consented
    to, with only those PII data that it needs.

## Outputs

STRM Privacy provides multiple ways to output data.

### Batch Exporters

Batch Exporters process batches of events from encrypted or derived streams, 
and write these as JSON to common storage solutions using 
[Data Connectors](/concepts/data-connectors.md).
See [this quickstart](/quickstart/batch-exporter.md) for an example.

### Kafka Consumer

STRM Privacy is built on [Apache
Kafka](https://kafka.apache.org/powered-by), which provides it with very
good scalability, fault-tolerance and decoupling of event producers and
consumers. See [here](/quickstart/exporting-kafka.md) for an
introduction on how to consume input or derived streams from our Kafka
cluster.

### Encryption Keys

It is possible to move the decryption of events to the customer's own
environment. In that case the client will receive the encryption keys
(in [tink](https://developers.google.com/tink) format) via a batch
exporter mechanism. See [the Exporting
Keys](/quickstart/exporting-keys.md) documentation for some details.

In case the customer choose to receive and use the decryption keys to
decrypt personal data attributes, the responsibility for correctly
dealing with privacy compliance moves to the customer teams and
processes.

[^1] but don’t have to
