---
title: PII Field Encryption
hide_table_of_contents: false
---

[data contract]: docs/02-concepts/02-data-contracts/index.md
[streams quickstart]: docs/03-quickstart/01-streaming/01-creating-streams.md 

STRM Privacy aims to protect [PII](docs/01-overview/02-pii.md) data, by encrypting content specified in event fields,
that are marked as **sensitive** in the [data contract](docs/02-concepts/02-data-contracts/index.md).

## Privacy Algorithm {#algorithm}

The process of encrypting PII data according to the time-based Privacy Algorithm is shown below.

![pii-field-encryption](./images/pii-field-encryption.svg#fullwidth)

1. An event is sent to the STRM Privacy Event Gateway.
2. An HTTP Header specifies the reference to the schema that was used to serialize the message. The schema is retrieved
   from the Data Contracts API and the message can be deserialized. Next,
   the [`strmMeta`](02-concepts/02-data-contracts/02-strm-meta.md)
   section is extracted from the event data.
3. The reference to the Data Contract that should be applied to this event is extracted from `strmMeta`.
4. The Data Contract is retrieved and the names of the sensitive fields and the name of the `keyField` are extracted from the
   Data Contract.
5. Get an existing / generate a new `keyLink` based on the value in the `keyField` of the event data.
6. Encrypt the PII fields using the encryption key.
7. **24 hours** after the `keyLink` and encryption key have been generated, the `keyLink` and the encryption key
   rotate. This is called the _time-based Privacy Algorithm_.

:::warning
As can be seen, the `keyLink` and the `keyField` are closely related, but different.
Read more about the [differences here](docs/02-concepts/02-data-contracts/index.md#difference-keyfield-keylink).
:::

:::info
If the time-based Privacy Algorithm does not match your needs, please [contact us](docs/05-contact/index.md) to think of
other algorithms.
:::

## Field encryption

STRM Privacy uses [Google Tink](https://developers.google.com/tink) as an
abstraction library for standard [`AES-256` encryption with a synthetic
initialization vector](https://developers.google.com/tink/deterministic-aead). The SIV means that for a certain
plain-text
value, the corresponding cipher text will be identical (for a certain
encryption key).

## Using the encrypted data

When sending data to STRM Privacy, the PII data fields are encrypted. The resulting
data stream is called the *encrypted stream*, or _source stream_. By design, this data stream does not contain any
sensitive data anymore.
This implies that anyone in your company can use it [^1]. In case these data become compromised, you have a business
issue, but **not** a privacy issue.

:::tip
The same credentials that are used for sending data to STRM Privacy can be used to consume the encrypted stream
:::

Though the sensitive data are encrypted, these data are still useful. With a typical clickstream, where `url` is
not considered personal data, you could identify dead ends on your site,
or train recommender engines on the encrypted stream, because the
attributes that identify the sequence even though encrypted, remain *the
same* for 24 hours[^2]. This is plenty long enough to understand typical
customer journeys, without compromising the privacy of your users.

## Using the decrypted data

### Identify the data purposes you need

Ask
the [Data Protection Officer](https://edps.europa.eu/data-protection/data-protection/reference-library/data-protection-officer-dpo_en)
the specific data purposes your use case requires, or is allowed to use.
Data for purposes that do not apply to your use case will not be decrypted when creating a _privacy stream_.

### Create a privacy stream

Here you instruct STRM Privacy to create a derived stream where event data corresponding to the requested purposes is decrypted.
This only happens for events where (data subject) consent is granted for these purposes. As such, STRM Privacy will:

- Exclude all events that have not been allowed to be used for these requested purposes.

- Decrypt event data (fields/attributes) filed under the purposes you requested (in the event's [data contract]).
  Attributes with corresponding to other purposes will not be decrypted.

This means that data consumers will only receive the data they are (legally) allowed to process.

:::note
For more info about creating (privacy) streams, see our [streams quickstart].
:::

[^1]: at least from a GDPR perspective

[^2]: according to the current time-based privacy algorithm
