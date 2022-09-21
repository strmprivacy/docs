---
title: Schemas and Contracts
hide_table_of_contents: false
---

# Schemas and contracts

All events sent to STRM Privacy adhere to the following:

*Serialization Schema*  
This is the blueprint of the data that is sent, hence, this is about the
**shape** of the data.

*Event Contract*  
This defines the **content** that is sent, and is composed of the
verifications that should be done for the received content.

## Serialization Schemas

In order to guarantee the integrity of the data that is sent to STRM
Privacy, all events must conform to a *serialization schema*. These
schemas are easy to add and register with STRM Privacy, hence they are
simple to adapt to your use case.

The serialization schema defines how an event is turned into bytes and
vice versa.

Currently, STRM Privacy supports [Apache Avro](http://avro.apache.org/)
and [Json Schema](https://json-schema.org/), however other serialization
formats may be added in the future.

Each serialization schema **must include** a section with STRM Privacy
meta information. See [the strmMeta documentation](/02-concepts/02-data-contracts/03-strm-meta.md) for
details.

### Simple Schemas

*Simple Schemas* are a STRM Privacy defined format that is used to
create compatible Avro schemas without needing to understand the
complexity of Avro or Json-schema schemas. Through regular Json or even
YAML, you can define the shape of your data, while we interpret and
abstract away the complexities for translating to the underlying Avro
format we use. We estimate that the vast majority of usecases will
prefer these over manual Avro or Json-Schema creation.

Simple Schema *can not be used* in the following cases:

-   you already have a Kafka infrastructure with Avro or Json-Schema
    integration (such as [Confluent](https://confluent.io)).

-   you aim to use Avro or Json-Schema schemas with complexities that
    are outside the scope of Simple Schema. These complexities are
    mostly the `union` types. These Union types cannot be defined as PII
    or masked fields in any case.

See [here](/02-concepts/02-data-contracts/02-simple-schemas.md) for details on how Simple Schema works.

## Event Contracts

In order to guarantee that data that is sent to STRM Privacy adheres to
the rules defined by your organization, events must conform to an *event
contract*. Contracts determine the behavior of validations, which fields
are encrypted, and how events are tied together (hence, they get the
same encryption key).

An example event contract version is listed below.

A single version of a contract is linked to one, and only one
serialization schema. The inverse is not necessary, one schema can be
referred to by 0 or more event contracts.

**strmprivacy/clickstream/1.0.0**

```json
{
  "ref": {  
    "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0"
  },
  "schemaRef": { 
    "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0"
  },
  "isPublic": true, 
  "keyField": "producerSessionId", 
  "piiFields": { 
    "customer/id": 0,
    "producerSessionId": 1
  },
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
  ]
}
```

-   the reference to the event contract. In this case equal to the
    schema, but this is not necessary.

-   the serialization schema reference, which includes the organization
    name, schema name and schema version.

-   a schema or event contract can be public, in which case all STRM
    Privacy customers can use it, or it can belong to a certain
    organization, and require organization credentials to use it.

-   the name of the field in the serialization schema that is used to
    "tie" events together. Typically, this is what determines an end
    user (i.e. your users) session.

-   the fields whose content in an event should be considered sensitive
    (i.e. personally identifiable information), and should be encrypted
    by STRM Privacy.

-   the validations that should be performed on the content of specific
    fields in an event.

These contracts are very versatile to use, and a use case that STRM
Privacy foresees, is that a single serialization schema could
potentially have many contracts (i.e. same shape of the data, but
different rules apply to it).

The validations that are performed on the data that is received by
Stream Machine currently only support [Regular
Expressions](https://regex101.com/). We aim to extend the validation
mechanisms based on customer use cases.

Next, an example for the validations follows:

> Assume an attribute of your event, say 'user/customer_id' in your organization
> has to consist of 9 digits not starting with a zero, you could easily have
> this as a validation rule in the event contract, implemented with a regex.

This is the mechanism that STRM Privacy provides to increase the
*quality* of your event data: validate before acceptance, and let the
data processing teams define the rules instead of the data generating
teams. An example of a validation can be seen (and tried) in
[Sending and receiving an event by hand](/03-quickstart/01-streaming/sending-curl.md)

## Schema and Event Contract states
As both *schemas* and **event contracts** are fundamental to describe data, give insight into what data goes where,
but are also used for describing actual events that flow through the system, state management is important.

It's not safe to just allow modifications or removals on *schemas* and **event contracts** as it might impact either
the workings of the streams, but it also hinders traceability.

Both *schemas* and **event contracts** can be in one of 3 states. See the image below:

<img class="schema-event-contract-states" alt="Schema and Event Contract states" src="/img/entity_states.svg"/>

See below a description of each state.

### DRAFT
This entity is still in development and can thus still be modified.
It has not yet been accepted by someone responsible. And because of this, it cannot yet be used for processing events.

### ACTIVE
This entity has been accepted and from now on, its properties are frozen; it cannot be modified anymore.
From now on, it can be used for processing events.

### ARCHIVED
This entity has reached its end-of-life state and is not used anymore.
It cannot be used for processing *new* events, but since it is not physically deleted, it can still be referenced,
for example by in-flight events.
It can also still be viewed, for example for traceability purposes. If needed, it can be reactivated.

:::note
At the moment, entities can be archived and reactivated freely, so in a way, archival is just a convenience.
This may change in the future though.
:::

## Difference between `keyField` and `keyLink`

It is important to note the difference between `keyField` and `keyLink`,
as they are related to each other, but are fundamentally different:

1.  `keyField` is part of the **event contract** and `keyLink` is part
    of the [strmMeta section](/02-concepts/02-data-contracts/03-strm-meta.md) of the *serialization
    schema*

2.  `keyField` determines which field in the **serialization schema** is
    used for considering whether events belong to the same sequence (for
    example a session)

3.  `keyLink` *links* a single event to an encryption key

4.  The value for `keyField` is determined by you

5.  The value for `keyLink` is determined by STRM Privacy

6.  The value of `keyField` is used when creating a `keyLink`

As you can see, the two have a strong relationship, but they are
different.
