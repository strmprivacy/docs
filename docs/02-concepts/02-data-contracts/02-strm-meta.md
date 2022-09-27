---
title: The strmMeta section
hide_table_of_contents: false
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To allow STRM Privacy to manage privacy transformations, each schema needs to contain a specific section with meta
information that enables this. This article describes the details of the `strmMeta` section.

:::note
Most of the content of this article refers to stream processing as examples, though `strmMeta` is also applicable
and of relevance to batch processing.
:::

# Every schema needs an `strmMeta` section

**Every** schema in STRM Privacy has a section called `strmMeta`. Why
is this? And why does even a private schema, created by you require it?

The `strmMeta` section exists because it provides a link to the rules that need to
be applied to an event, once it has been deserialized by the STRM
Privacy Event Gateway. The serialization schema defines the shape of the
event, and is the first way that STRM Privacy helps in maintaining the
quality of event data.

Once deserialized, STRM Privacy needs to [apply rules to](docs/02-concepts/01-data-processing/01-pii-field-encryption.md):

1. validate event attribute contents
2. apply encryption to personal data attributes
3. determine if events belong to the same data owner

In order to be able to do that, events are assigned a data contract,
and the data contract defines the rules.

## An event example

The fields outside the `strmMeta` section can be used for anything as your organization
requires (as long as the event fields conform to the schema). However, the `strmMeta` must
exist, and it will also end up in your persistent storage. This way, the Data Contract that
was applied to the event, the consent that was provided by the data subject, the link to the
encryption key (among others), are still known, even when data is at rest in your persistent storage.
Below is an example event, based on the schema that is shown in the tabs, as convenience.

<Tabs>
<TabItem value="event" label="Single Event Example">

```json showLineNumbers
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": 15082564,
    "timestamp": 1629192833072,
    "keyLink": "55c2f72b-cff8-4814-ae33-e125c77e50f9",
    "billingId": "demo8542234275",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "unique-14",
  "consistentValue": "session-740",
  "someSensitiveValue": "ASB9bJrnYjxjNF5Txc+Wc2k1zvzFAmE03SYK499WK5Du",
  "notSensitiveValue": "not-sensitive-39"
}
```

</TabItem>

<TabItem value="schema" label="Schema Definition">

:::tip
View this schema definition with the [CLI](https://github.com/strmprivacy/cli)
using: `strm get data-contract strmprivacy/example/1.3.0 -ojson | jq '.dataContract.schema.definition | fromjson'`
:::

```json showLineNumbers
{
  "type": "record",
  "name": "DemoEvent",
  "namespace": "io.strmprivacy.schemas.demo.v1",
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
    { 
      "name": "uniqueIdentifier", "type": [ "null", "string" ], "default": null,
      "doc": "any value. For illustration purposes: use a value that is consistent over time like a customer or device ID."
    },
    {
      "name": "consistentValue", "type": "string",
      "doc": "any value. For illustration purposes: use a value that is consistent over a limited period like a session."
    },
    {
      "name": "someSensitiveValue", "type": [ "null", "string" ], "default": null,
      "doc": "any value. For illustration purposes: use a value that could identify a user over time based on behavior, like browsing behavior (e.g. urls)."
    },
    {
      "name": "notSensitiveValue", "type": [ "null", "string" ], "default": null,
      "doc": "any value. For illustration purposes: use a value that is not sensitive at all, like the rank of an item in a set."
    }
  ]
}
```

</TabItem>
</Tabs>

1. `eventContractRef` <div class="chip"> <div class="chip-content">required</div> </div>: the reference to the [<u>**
   data**</u> contract](docs/02-concepts/02-data-contracts/index.md) that
   governs the privacy and validation rules. The sending application **must
   set this field** to a (handle/name/version) reference of an event
   contract that refers to this serialization schema.
2. `nonce`: a random integer added to each event on acceptance. This makes it easy
   to detect possible data duplications in downstream processing. The
   sending application does not need to set this field.
3. `timestamp`: a millisecond accuracy timestamp added upon acceptance in the STRM
   Privacy gateway. The sending application does not need to set this
   field.
4. `keyLink`: a random value that provides a link to the encryption key that was used
   to encrypt the PII fields of this event. The sending application does
   not need to set this field.
5. `billingId`: **deprecated** this field was required in the past, but not anymore. Will be removed in a future version
   of `strmMeta`.
6. `consentLevels` <div class="chip"> <div class="chip-content">required</div> </div>: 0 or more *consents* that were
   given by the data subject for the further
   use of this event. The sending application **must set this field**. Read more on consent
   levels [here](docs/01-overview/04-organization.md#consent-levels).

:::info
The fact that the `strmMeta` section does not use `dataContractRef`, but `eventContractRef`,
is [due to legacy](docs/02-concepts/01-data-processing/01-pii-field-encryption.md#data-contract).
This will be changed in a backwards compatible way in the future, though the two references can be considered identical.
:::

### Reference to the Data Contract (<strike>eventContractRef</strike>)

An STRM Privacy event is transmitted to the Event Gateway with the
serialized event in the *body* of the HTTP/2 POST call, and a header
named `Strm-Schema-Ref` that tells the Event Gateway how to deserialize these
data.

Once deserialized, the event gateway will look for the value of
`strmMeta/eventContractRef` (inside the deserialized event) to determine
the rules to be applied to this event. More details on this
process [here](docs/02-concepts/01-data-processing/01-pii-field-encryption.md#algorithm).

### Data Subject provided consent (consentLevels)

The sending application **must fill in this field** with a list of
consents given by the data-owner for the use of this event. Technically
this field holds a list of 0 or more integers, and the meaning of those
integers is **completely up to the customer**. This means that some
way needs to be found to determine permission(s) from the
data subject (typically via HTTP cookies), and implement the
technical means to set those values in
this field. 0 consent levels means the data subject does not give any
permissions for the PII fields. For this customer, all PII data are
permanently hidden in the encrypted stream.

See [here](docs/01-overview/04-organization.md#consent-levels) for a discussion on
consent levels in your organization.

### Reference to the used encryption key (keyLink)

When the STRM Privacy Event Gateway determines that an event belongs to
a new sequence (via the value of the [`keyField`](docs/02-concepts/02-data-contracts/index.md#contracts)
in the data contract), or that an existing sequence has lasted longer than 24 hours (or as the
[Privacy Algorithm](docs/02-concepts/01-data-processing/01-pii-field-encryption.md#algorithm) dictates), it will
generate a new encryption key for the personal data attributes.

This `keyLink` field provides a [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) value that is used to look up
this encryption key. This lookup is done in a decrypted stream, but
can also be done in case the encryption keys were exported to the
customer.

### Unique identifier per event (nonce)

This is a *convenience* attribute, it is not technically necessary by
STRM Privacy. Hard experience has taught that data duplication by
hiccups in stream processing is quite common. This might happen inside
STRM Privacy but also downstream with the customers further processing.
Providing a unique random nonce in the STRM Privacy Event Gateway will
make it possible to detect duplicates easily, especially combined with
the event timestamp.

### Process-time event time (timestamp)

This is a *convenience* attribute, it is not technically necessary by
STRM Privacy. It contains the millisecond UTC time since the
[Unix epoch](https://en.wikipedia.org/wiki/Unix_time) when the event was accepted by the STRM Privacy Event Gateway.
