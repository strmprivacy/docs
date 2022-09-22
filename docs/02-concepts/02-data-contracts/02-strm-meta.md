---
title: The strmMeta section
hide_table_of_contents: false
---

# StrmMeta in every schema

**Every** schema in STRM Privacy has this section called `strmMeta`. Why
is this? And why does even your own private customer specific schema
need to have it?

StrmMeta exists because it must provide a link to the rules that need to
be applied to an event, once it has been deserialized in the STRM
Privacy event gateway. The serialization schema defines the shape of the
event, and is the first way that STRM Privacy helps in maintaining the
quality of event data.

But once deserialized, STRM Privacy needs to apply rules to

1.  validate event attribute contents

2.  apply encryption to personal data attributes

3.  determine if events belong to the same data owner

In order to be able to do that, events are assigned an event contract,
and the event contract defines the rules.

## strmMeta in an event example

Here’s an example taken from the quickstart pages. The fields outside of
the `strmMeta` section can be used for anything your organization
desires (as long as it conforms to the schema). But `strmMeta` must
exist, and it will also end up in your persistent storage.

**one-event**

```json
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0", //(1)
    "nonce": 15082564,
    "timestamp": 1629192833072,
    "keyLink": "55c2f72b-cff8-4814-ae33-e125c77e50f9", //(2)
    "billingId": "demo8542234275",
    "consentLevels": [ 0, 1, 2, 3 ] //(3)
  },
  "uniqueIdentifier": "unique-14",
  "consistentValue": "session-740",
  "someSensitiveValue": "ASB9bJrnYjxjNF5Txc+Wc2k1zvzFAmE03SYK499WK5Du",
  "notSensitiveValue": "not-sensitive-39"
}
```

1. the reference to the event contract that was used to accept this
    event.
2. an identifier that can be used to retrieve the encryption key that
    was used to encrypt the personal data attributes of this event.
3. the consent levels given by the data owner for the processing of
    this event. See [here](/01-overview/04-organization.md#consent-levels) for
    an explanation of these values.

## strmMeta fields

The `strmMeta` definition contains the following fields

[//]: # (TODO add note regarding legacy, this is the data contract ref)
eventContractRef
the reference to the [event contract](/02-concepts/02-data-contracts/index.md) that
governs the privacy and validation rules. The sending application **must
set this field** to a (handle/name/version) reference of an event
contract that refers to this serialization schema. 

consentLevels  
0 or more *consents* that were given by the data owner for the further
use of this event. The sending application **must set this field**. See
below for details.

keyLink  
a random value that provides a link to the encryption key that was used
to encrypt the PII fields of this event. The sending application does
not need to set this field.

nonce  
a random integer added to each event on acceptance. This makes it easy
to detect possible data duplications in downstream processing. The
sending application does not need to set this field.

timestamp  
a millisecond accuracy timestamp added upon acceptance in the STRM
Privacy gateway. The sending application does not need to set this
field.

### eventContractRef

A STRM Privacy event is transmitted to the event gateway with the
serialized event in the *body* of the http/2 post call, and a header
named `Strm-Schema-Ref` that tells the gateway how to deserialize these
data.

Once deserialized, the event gateway will look for the value of
`strmMeta/eventContractRef` (inside the deserialized event) to determine
the rules to be applied to this event. 

### consentLevels

The sending application **must fill in this field** with a list of
consents given by the data-owner for the use of this event. Technically
this field holds a list of 0 or more integers, and the meaning of those
integers is **completely up to the customer**. The customer must find
some way (typically http cookies) to determine permission(s) from the
data-owner, and implement the technical means to set those values in
this field. 0 consent levels means the data owner does not give any
permissions for the PII fields. For this customer, all PII data are
permanently hidden in the encrypted stream.

See [here](/01-overview/04-organization.md#consent-levels) for a discussion on
consent levels in your organization.

### keyLink

When the STRM Privacy event gateway determines that an event belongs to
a new sequence (via the value of the key field in the event contract),
or that an existing sequence has lasted longer than 24 hours, it will
generate a new encryption key for the personal data attributes.

This `keyLink` field provides a *uuid* value that is used to look up
this encryption key. This lookup is done in our decrypted streams, but
can also be done in case the encryption keys were exported to the
customer.

### nonce

This is a *convenience* attribute, it is not technically necessary by
Stream Machine. Hard experience has taught us that data duplication by
hiccups in stream processing is quite common. This might happen inside
STRM Privacy but also downstream with the customers further processing.
Providing a unique random nonce in the STRM Privacy event gateway will
make it possible to detect duplicates easily, especially combined with
the event timestamp

### timestamp

This is a *convenience* attribute, it is not technically necessary by
Stream Machine. It contains the millisecond UTC time since the Unix
epoch when the event was accepted by the STRM Privacy event gateway.

## the near future

We aim to move the setting of the event contract into the STRM Privacy
configuration, where the DPO determines what event contract governs a
certain schema. This way updating for instance personal data attributes
or attribute validation rules becomes doable without developer
involvement, just by the DPO team.
