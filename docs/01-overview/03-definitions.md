---
title: Definitions
hide_table_of_contents: false
---

# Commonly used definitions

GDPR defines an official set of definitions, which you can find on the
[official GDPR page](https://gdpr-info.eu/art-4-gdpr/).

Below you can find our short summary of the definitions used by STRM
Privacy.

Stream  
An input or output continuous collection of data.

Schema  
Structure of the data that is sent to STRM Privacy. Also named
*serialization schema* See [schemas and
contracts](/02-concepts/02-data-contracts/01-schemas-and-contracts.md) for details.

Event Contract  
A contract, that contains which fields are [Personally Identifiable
Information (PII)](https://en.wikipedia.org/wiki/Personal_data), which
validations should be applied to events, etc. See [schemas and
contracts](/02-concepts/02-data-contracts/01-schemas-and-contracts.md) for details.

Consent level  
The level of consent, given by the data owner (your customer), to use
certain information (typically PII). This is used both in the events, as
well as in the configuration of a decrypted output stream.

Encryption  
Data that is scrambled and cannot be read without the encryption key.

Batch Exporter  
STRM Privacy component that writes batches of events to a `Data Connector`.

Data Connector  
STRM Privacy component that allows you to connect to (file) storage, for both
reading and writing purposes. Currently, AWS S3, Google Cloud Storage and
Azure Blob Storage are supported.

Personally Identifiable Information (PII)  
Information that can be used to identify a person, directly (e.g. SSN,
name) or indirectly (e.g. IP address), or belongs to an identifiable
person (e.g. gender, interests).

Serialization Format  
Currently, we support `Avro Binary`, `Avro JSON` and `JSON` serialized
data. This defines the way that an event is converted to and from bytes,
so that they can be transported and/or stored.
