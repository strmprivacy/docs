---
title: Masked Fields
hide_table_of_contents: false
---

# Masked Fields

Field masking is a mechanism that is applied to events in derived
streams in order to hide their actual plaintext value.

Imagine you have a privacy stream in your company that contains a
customer id. This *personal data* field will be encrypted in the privacy
stream, but in case the data owner (the customer) has given permission,
teams (or algorithms) can be used for instance to give personalized
recommendations.

Without the masking mechanism this would mean that for a certain
customer that has given full permissions for instance the personal
history would be fully visible within the recommendations team or
models. *The data scientist would be able to look up someones personal
history, when having access to the company customer database*.

We can do better!

In order to hide the actual customer id, we created a *masked field*
mechanism. This mechanism applies a masking function [^1] on the
decrypted field value, before putting it into the derived stream. This
masking function is *deterministic* so a decrypted field value will
always map to the same masked field value. The same data scientist and
the same recommender model can work with the customer data *just as
effectively*, but without being able to link this to a person.

## An example

I’ve created a source stream `example` and two derived streams:
`example-3` and `example-M3`. I’m running
`strm simulate random-events example` to generate some data.

```bash
strm create stream example
strm create stream --derived-from example \ 
  --levels 3 --masked-fields \
    strmprivacy/example/1.3.0:uniqueIdentifier,notSensitiveValue,someSensitiveValue,consistentValue 
  --mask-seed=hi-there 
strm create stream --derived-from example --levels 3 
```

-   creates stream named `example-M3` because we didn’t provide an
    explicit derived stream name.

-   for events with contract strmprivacy/example/1.3.0 mask fields
    `uniqueIdentifier`, `notSensitiveValue`, `someSensitiveValue` and
    `consistentValue`.

-   The `mask-seed` attribute is explained below.

-   creates stream named `example-3`

### the privacy stream events

One event in the privacy stream `example` [^2]

```json
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": -1505384217,
    "timestamp": 1635416584627,
    "keyLink": "67140ff9-e866-48ff-b89b-00ce69e287e6",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "ATuasjJ30S4uRB64APNKNze/TH6V5NbA6gRLGjM=",
  "consistentValue": "ATuasjKGKxAz0cIrFH9CQ/FBsizvFpQJq2t+eds8bHc=",
  "someSensitiveValue": "ATuasjLXJ0vL0aY4CEV48O6PXU9zwm+v9ccGZBNcWzg=",
  "notSensitiveValue": "not-sensitive-6"
}
```

We can generally recognize the encrypted values by looking at the
trailing `=` character. The fields `uniqueIdentifier`, `consistentValue`
and `someSensitiveValue` are defined to be personal data through the
event contract.

### the derived stream events with no masking

You can see in the event from the stream `example-3` that all PII fields
have been decrypted. We see their original *plaintext* value. If one of
these contained a customer id, every data scientist with access to this
stream *and* access to the company customer database would be able to
link the history in this stream to a *person*!

```json
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": -1505384217,
    "timestamp": 1635416584627,
    "keyLink": "67140ff9-e866-48ff-b89b-00ce69e287e6",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "unique-5", 
  "consistentValue": "session-273",
  "someSensitiveValue": "sensitive-0",
  "notSensitiveValue": "not-sensitive-6"
}
```

-   values are from the simulator that is available in the cli tool.

### the derived stream events **with** masking

Assuming we want to train a recommendation engine of a customer with
full permissions, it would still be great if the actual customer id *was
not being used*.

We can do this with **masked fields**. The stream with masked fields
contains values that are always the same for the same source value. In
this example, the plaintext `uniqueIdentifier` has the value `unique-5`
with a corresponding masked value of `1083e8169d7138e990cc30095578452`.

Event from the `example-M3` stream

```json
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": -1505384217,
    "timestamp": 1635416584627,
    "keyLink": "67140ff9-e866-48ff-b89b-00ce69e287e6",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "1083e8169d7138e990cc30095578452",
  "consistentValue": "7cc66d130664caa9efacda1026c1c44",
  "someSensitiveValue": "e49bd309eed4a5094437a71ac2bc1cad",
  "notSensitiveValue": "538ad30b2aa2781e855c4eb059cf68a3"
}
```

You can see we even masked the `notSensitiveValue` attribute, that no
longer contains the "not-sensitive-6" value. You could use this for
instance to provide downstream data consumers maybe outside your
company with values that are not personal, but that you still want to
keep inside your company.

## Using the masked fields

You could train a personalized model on a derived masked stream, and
then you could *recommend* on the same stream. This way you could have a
very personalized model, without ever exposing sensitive personal data.

## The seed.

The masking uses a standard hashing algorithm [^3]. Assuming someone has
access to the customer database it would be easy to generate hash values
for all customer id’s, a so-called [rainbow
table](https://en.wikipedia.org/wiki/Rainbow_table). By adding a *seed*
to the unmasked value, we make this mechanism unfeasible. The
`mask-seed` is given during creation of a masked stream.

NOTE: the mask seed is hidden on readback of stream definitions from the
database.

[^1]: technically a hashing function
[^2]: I’ve removed some less interesting attributes
[^3]: currently MurmurHash3
