---
title: Data Contracts
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To act as a gatekeeper and maintain high quality data, STRM Privacy enforces Data Contracts on data that is processed.
This article covers what a Data Contract is, and how it is used by STRM Privacy.

# The Data Contract {#data-contract}

The Data Contract defines:

- **Schema**. This is the blueprint of the data that is sent, hence, this is about the
  **shape** of the data.

- **Contract details**. This defines the **content** that is sent, and is composed of the
  verifications that should be done for the received content.

A Data Contract is composed
of [various elements](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L762)
,
of which a few are of key importance:

- [`schema`](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L774):
  the schema used when serializing and deserializing data.
- [`key_field`](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L768):
  the name of the data field used for determining which events [belong to the same sequence](#contracts).
- [`field_metadata`](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L777):
  a list of metadata including field names, personal data configuration specifying the fields that should be considered
  as PII data and as Quasi-Identifier data and the
  purpose level that it belongs to.

Other elements are discussed later in this article, but the three mentioned above are of crucial importance for STRM
Privacy to apply the Privacy Algorithm.

:::info
In the past, STRM Privacy offered Event Contracts. They share similarity with the current Data Contract, however,
they differ from Data Contracts in sense that Event Contracts were separated from the Schema, which is not the case
for Data Contracts. Data Contracts are tightly coupled with the Schema, which is why the Schema is embedded in the Data
Contract.
Event Contracts will be removed in a future API version.
:::

## Schema

In order to guarantee the integrity of the data that is sent to STRM
Privacy, all events must conform to a *serialization schema*. These
schemas are easy to add and register with STRM Privacy, hence they are
simple to adapt to your use case.

The serialization schema defines how an event is turned into bytes and
vice versa.

Currently, STRM Privacy supports [Apache Avro](http://avro.apache.org/)
and [JSON Schema](https://json-schema.org/) and [Simple Schema](#simpleschema), however other serialization
formats may be added in the future.

Each serialization schema **must include** a section with STRM Privacy
meta information. See [the `strmMeta` documentation](docs/02-concepts/02-data-contracts/02-strm-meta.md) for
details.

:::note
If another serialization format, such as Protobuf, is a requirement for you,
please [contact us](docs/05-contact/index.md).
:::

### Simple Schemas {#simpleschema}

*Simple Schemas* is a format defined at STRM Privacy, that is used to
create compatible Avro schemas without needing to understand the
complexity of Avro or JSON-schema schemas. Through regular JSON or
YAML, you can define the shape of your data, while
the complexities are abstracted away. The Simple Schema is translated
into Avro, which is the default format used at STRM Privacy.
The estimate is, that the vast majority of use cases will
prefer these over manual Avro or JSON-schema creation.

Simple Schema *cannot be used* in the following cases:

- you already have a Kafka infrastructure with Avro or JSON-schema
  integration (such as [Confluent](https://confluent.io)).
- you aim to use Avro or JSON-schema schemas with complexities that
  are outside the scope of Simple Schema. These complexities are
  mostly the `union` types.

See [here](docs/02-concepts/02-data-contracts/01-simple-schemas.md) for details on how Simple Schema works.

## Data Contracts {#contracts}

In order to guarantee that data that is sent to STRM Privacy adheres to
the rules defined by your organization, events must conform to a *data
contract*. Contracts determine the behavior of validations, which fields
are encrypted, and how events are tied together (hence, they get the
same encryption key).

:::info
A single version of a contract is linked to one, and only one
serialization schema.
:::

An example data contract, with Data Contract reference `strmprivacy/clickstream/1.0.0`, is listed below.

<Tabs>
<TabItem value="contract" label="Data Contract (schema shown separately for brevity)">

:::tip
View this Data Contract with the [CLI](https://github.com/strmprivacy/cli)
using: `strm get data-contract strmprivacy/clickstream/1.0.0 -ojson`
:::

```json showLineNumbers
{
  // callout-1
  "ref": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0" },
  // callout-2
  "schemaRef": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0" },
  // callout-3
  "state": "ACTIVE",
  // callout-4
  "isPublic": true,
  // callout-5
  "keyField": "producerSessionId",
  // callout-6
  "piiFields": {}
  // callout-7
  "fieldMetadata": [
    {
      "fieldName": "customer/id",
      "personalDataConfig": {
        "isPii": true,
        "isQuasiId": false,
        "purposeLevel": 0
      }
    },
    {
      "fieldName": "producerSessionId",
      "personalDataConfig": {
        "isPii": true,
        "isQuasiId": false,
        "purposeLevel": 1
      }
    }
  ], 
  // callout-8
  "validations": [
    {
      "field": "customer/id",
      "type": "regex",
      "value": "^.+$"
    },
    {
      "field": "url",
      "type": "regex",
      "value": "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"
    }
  ],
  // callout-9
  "dataSubjectField": "customer/id",
  "schema": {
    "ref": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0", "schemaType": "AVRO" },
    "state": "ACTIVE",
    "isPublic": true,
    "definition": ... shown in separate tab for brevity ...,
    "fingerprint": "4415394156950015060",
    "metadata": { ... omitted ... }
  },
  "id": "9cad95b7-b2bd-49e9-b5e3-d61b2da4f8ff",
  "metadata": { ... omitted ... }
}
```

</TabItem>

<TabItem value="schema" label="Schema Definition (Avro representation)">

:::tip
View this Data Contract with the [CLI](https://github.com/strmprivacy/cli)
using: `strm get data-contract strmprivacy/clickstream/1.0.0 -ojson | jq '.dataContract.schema.definition | fromjson'`
:::

```json showLineNumbers
{
  "name": "ClickstreamEvent",
  "type": "record",
  "namespace": "io.strmprivacy.schemas.clickstream",
  "strmSchemaId": "clickstream",
  "fields": [
    {
      "name": "strmMeta",
      "type": {
        "type": "record",
        "name": "StrmMeta",
        "fields": [
          { "name": "eventContractRef", "type": "string" },
          { "name": "nonce", "type": [ "null", "int" ], "default": null },
          { "name": "timestamp", "type": [ "null", "long" ], "default": null },
          { "name": "keyLink", "type": [ "null", "string" ], "default": null },
          { "name": "billingId", "type": [ "null", "string" ], "default": null },
          { "name": "consentLevels", "type": { "type": "array", "items": "int" } }
        ]
      }
    },
    { "name": "producerSessionId", "type": "string" },
    { "name": "url", "type": "string" },
    { "name": "eventType", "type": "string" },
    { "name": "referrer", "type": "string" },
    { "name": "userAgent", "type": "string" },
    { "name": "conversion", "type": "int" },
    { "name": "abTests", "type": { "type": "array", "items": "string" } },
    {
      "name": "customer",
      "type": {
        "name": "Customer",
        "type": "record",
        "fields": [ { "name": "id", "type": "string" } ]
      }
    }
  ]
}
```

</TabItem>
</Tabs>

1. `ref`: the reference to the data contract, comprised of a `handle` (globally unique, chosen by you / your
   organization), `name`, and a [semantic](https://semver.org/) `version`.
2. `schemaRef`: the serialization schema reference, that follows the same `handle`, `name`, and `version`.
3. `state`: whether the data contract is active and ready to be used
   in [data pipelines](docs/02-concepts/01-data-processing/03-data-pipelines.md). More on states [here](#states).
4. `isPublic`: a data contract can be public, in which case all STRM
   Privacy customers can use it, or it can belong to a certain
   organization, and require organization credentials to use it.
5. `keyField`: the name of the field in the serialization schema that is used to
   _tie_ events together. Typically, this is what determines a data
   subject's (i.e. your users) session. If multiple events contain the same value for
   the field that was specified as `keyField`, then
   the [same encryption key and `keyLink`](docs/02-concepts/01-data-processing/01-pii-field-encryption.md) will be used
   to
   encrypt the PII data.
6. `piiFields`: deprecated in favor of `fieldMetadata`
7. `fieldMetadata`: description of the fields that should either be considered non-sensitive, QI or PII with
   corresponding purpose level. This field identifies if a field should be encrypted. 
8. `validations`: the validations that should be performed on the content of specific
   fields in an event.
9. `dataSubjectField`: the name of the field in the serialization schema that is used to distinguish
   data subjects from each other. Typically, this is a _customer id_ or a _user id_. This is used by the Data Subjects
   API to keep [facilitate an interface](./04-data-subjects.md) that allows for easy retrieval of used `keyLink`s for a
   specific data subject.

These contracts are very versatile, which makes it possible to use them for nearly any data structure.

:::note
`fieldMetadata` is the replacement of deprecated `piiFields`. In case both are filled, `fieldMetadata` takes precedence.
:::

### Validations

The validations that are performed on the data that is received by
STRM Privacy currently only support [Regular
Expressions](https://regex101.com/).

:::note
More validation mechanisms will be added in the future. Please [contact us](docs/05-contact/index.md) if you have
a specific validation need.
:::

Below is an example for a validation:

> Assume an attribute of your event, say 'user/customer_id' in your organization
> has to consist of 9 digits not starting with a zero, you could have
> this as a validation rule in the data contract, implemented with a regex.

This is the mechanism that STRM Privacy provides to increase the
*quality* of your event data: validate before acceptance, and let the
data processing teams define the rules instead of the data generating
teams. An example of a validation can be seen (and tried) in the quickstart
[Sending and receiving manually](docs/03-quickstart/01-streaming/03-sending-data/02-sending-curl.md).

### Limitations

Data Contracts currently are limited in the following ways:

- `fieldMetadata`
  - specified field names should be present in the corresponding schema
  - specified pii fields should be (optional) string or list of string.
- `keyField`
  - specified field name should be present in the corresponding schema
  - specified field should be an (optional) string
  - note that the Event Gateway requires that the key field of an event is not empty in order to accept it.

<!--
  look in events-core for `validPiiFieldTypes` and the method `validateContract()`
-->
:::note
Technically it is possible to lift some of these limitations. Please [contact us](docs/05-contact/index.md) if you are
interested in this.
:::

### Difference between `keyField` and `keyLink` {#difference-keyfield-keylink}

It is important to note the difference between `keyField` and `keyLink`,
as they are related to each other, but are fundamentally different:

1. `keyField` is part of the **data contract** and `keyLink` is part
   of the [strmMeta section](docs/02-concepts/02-data-contracts/02-strm-meta.md) of the *serialization
   schema*
2. `keyField` determines which field in the **serialization schema** is
   used for considering whether events belong to the same sequence (for
   example a session)
3. `keyLink` *links* a single event to an encryption key
4. The value for `keyField` is determined by you
5. The value for `keyLink` is determined by STRM Privacy
6. The value of `keyField` is used when creating a `keyLink`

As you can see, the two have a strong relationship, but they are
different.

## Data Contract states {#states}

As data contracts are fundamental to describe data and give insight into what data goes where, state management is
important.

It's not safe to allow modifications or removals on data contracts as it might impact either
the workings of the streams, but it also hinders traceability.

Data contracts can be in one of three states. See the image below:

<img class="data-contract-states" alt="Data Contract states" src="/img/entity_states.svg"/>

### DRAFT

This entity is still in development and thus can still be modified.
It has not yet been accepted yet, and because of this, it cannot yet be used for processing events.

### ACTIVE

This entity has been accepted and from now on, its properties are frozen; it cannot be modified anymore (except for the
metadata). From now on, it can be used for processing events.

### ARCHIVED

This entity has reached its end-of-life state and is not used anymore.
It cannot be used for processing *new* events, but since it is not physically deleted, it can still be referenced,
for example by in-flight events.
It can also still be viewed, for example for traceability purposes. If needed, it can be reactivated.

:::note
At the moment, entities can be archived and reactivated freely, so in a way, archival is just a convenience.
This may change in the future though.
:::
