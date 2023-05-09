---
title: Definitions
hide_table_of_contents: false
---

[//]: # (This essentially is a glossary, for which a Docusaurus plugin exists: https://gitlab.grnet.gr/terminology/docusaurus-terminology)

[//]: # (That didn't fully meet the requirements, as it required a separate definition page for every term)

With privacy engineering, many new and unknown definitions arise. This page aims at summarizing these definitions.
This list is by no means complete, but it will be kept up to date.

:::important
Missing a definition or need more information on a definition, [let us know](docs/05-contact/index.md)!
:::

# List of definitions

**GDPR**  
The General Data Protection Regulation defines an official set of definitions, which you can find on the
[official GDPR page](https://gdpr-info.eu/art-4-gdpr/). It aims at protecting an individual's privacy and
ensuring that individuals have various rights regarding their data and data collection where they are the
data subject

**Data Pipeline**  
A data collection configuration, existing of either streams or batch jobs, that allow for data collection and
processing. This basically takes care of the [ETL/ELT](https://en.wikipedia.org/wiki/Extract,_transform,_load) process.

**Stream**  
An input or output continuous collection of data.

**Input Stream / Source Stream / Encrypted Stream**  
All of the above mean the same. This is the stream to which data is sent (the input), and from which data
that is encrypted can be read.

**Derived Stream**
A stream that is based on the encrypted stream, however, with data modifications applied. These data modifications
can entail encryption and masking, among others.

**Field masking**
The process of hashing the contents of a data field, to make it unreadable, without using encryption. The goal here
is to prevent the reverse process, i.e. finding the raw unhashed value.

**Schema**  
Structure of the data that is sent to STRM Privacy. Also named
*serialization schema* See [data contracts](docs/02-concepts/02-data-contracts/index.md) for details.

**Data Contract**  
A contract that specifies which fields are sensitive (and possibly [Personally Identifiable
Information (PII)](https://en.wikipedia.org/wiki/Personal_data)), which
validations should be applied to events, etc. See [data
contracts](docs/02-concepts/02-data-contracts/index.md) for details.

**Purpose**
The goal or purpose for which certain data is collected, and (legally) allowed to be used. E.g. functional or marketing. 

**Data Subject**  
A data subject is the individual that the personal data applies to. A data subject is the owner of the data that is
collected on this individual.

**Data Subject Consent**  
The set of purposes for which the data subject (your customer) has given consent to use
sensitive data (typically PII). This is used both in the events, and
in the configuration of a decrypted stream.

**Data Subject**  
A data subject is the individual that the personal data applies to. A data subject is the owner of the data that is
collected on this individual.

**Encryption**  
Data that is scrambled and cannot be read without the encryption key.

**Batch Exporter**  
STRM Privacy component that writes batches of events to a `Data Connector`.

**Data Connector**  
STRM Privacy component that allows you to connect to blob storage, for both
reading and writing purposes.

**Personally Identifiable Information (PII)**  
Information that can be used to identify a person, directly (e.g. social security number,
name) or indirectly (e.g. IP address), or belongs to an identifiable
person (e.g. gender, interests).

**Quasi Identifier (QI)** 
Information that on itself cannot be used to identify a person (e.g. zipcode), but in combination with other
information (e.g. zipcode and house number) can be used to identify a single person.

**Serialization Format**  
This defines the way that an event is converted to and from bytes,
so that they can be transported and/or stored.
