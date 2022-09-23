---
title: PII Field Encryption
hide_table_of_contents: false
---

STRM Privacy aims to protect [PII](/01-overview/02-pii.md) data, by encrypting content specified in event fields,
that are marked as sensitive in the [event contract](/02-concepts/02-data-contracts/index.md).

## Privacy Algorithm {#algorithm}

The process of encrypting PII data according to the time-based Privacy Algorithm is shown below.

![pii-field-encryption](./images/pii-field-encryption.svg#fullwidth)

1. An event is sent to the STRM Privacy Event Gateway
2. An HTTP Header specifies the reference to the schema that was used to serialize the message. The schema is retrieved
   from the Data Contracts API and the message can be deserialized. Next, the [`strmMeta`](02-concepts/02-data-contracts/02-strm-meta.md)
   section is extracted from the event data.
3. The reference to the Data Contract that should be applied to this event is extracted from `strmMeta`.
4. The Data Contract is retrieved and the names of the PII fields and the name of the `keyField` are extracted from the Data Contract.
5. Get an existing / generate a new `keyLink` based on the value in the `keyField` of the event data
6. Encrypt the PII fields using the encryption key
7. After **24 hours** when the `keyLink` and encryption key have been generated, the `keyLink` and the encryption key
   rotate. This is called the _time-based Privacy Algorithm_.

:::warning
As can be seen, the `keyLink` and the `keyField` are closely related, but different.
Read more about the [differences here](/02-concepts/02-data-contracts/index.md#difference-keyfield-keylink).
:::

:::info
If the time-based Privacy Algorithm does not match your needs, please [contact us](/05-contact/index.md) to think of other algorithms. 
:::

## Using the encrypted data

When sending data to STRM Privacy, the PII data fields are encrypted. The resulting
data stream is called the *encrypted stream*. By design, this data stream does not contain any PII data anymore.
This implies that anyone in your company can use it [^1]. In case these data become compromised, you have a business
issue, but **not** a privacy issue.

:::tip The same credentials that are used for sending data to STRM Privacy can be used to consume the encrypted stream
:::

Though the sensitive data are encrypted, these data are still useful. With a typical clickstream, where `url` is
not considered personal data, you could identify dead ends on your site,
or train recommender engines on the encrypted stream, because the
attributes that identify the sequence even though encrypted, remain *the
same* for 24 hours[^2]. This is plenty long enough to understand typical
customer journeys, without compromising the privacy of your users.

## Using the decrypted data

### Identify the consent levels you need.

Ask the [Data Protection Officer](https://edps.europa.eu/data-protection/data-protection/reference-library/data-protection-officer-dpo_en) the
specific consent levels your use case requires. This will return a list
of values [^3] that you need.

### Consent level types

STRM Privacy supports two types of consent levels when creating a
decrypted output stream: granular and cumulative.

1.  _Cumulative_: Only the highest consent level is configured on the
    output stream. All consent levels from zero (included) up to this
    level (included) are decrypted in the output stream.

2.  _Granular_: All the consent levels that are to be decrypted in the
    output stream are explicitly configured. This way, it’s possible to
    have "gaps" between the consent levels. For example, can specify
    level 1 and 4, which means that all other levels, including 2 and 3
    remain encrypted.

The resulting set of consent levels effects two things, see:
[Create a decrypted stream](#create-a-decrypted-stream)

### Create a decrypted stream {#create-a-decrypted-stream}

Here you instruct STRM Privacy to decrypt event data with corresponding to the requested consent
levels, but only for data of which the data subject has provided the required consent. STRM Privacy will:

-   exclude all events that don’t at least contain all the consent levels
    you require from the resulting data stream.

-   decrypt attributes with the consent levels you requested. Attributes
    with other consent levels will not be decrypted. So you receive exactly
    only those events for which consent was provided, and nothing more.

This means that data consumers will only receive the data they are
legally allowed to receive, provided the company is not
re-using credentials.

[^1]: at least from a GDPR perspective

[^2]: according to the current time-based privacy algorithm

[^3]: small integers
