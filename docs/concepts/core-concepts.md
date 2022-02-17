---
title: Core
hide_table_of_contents: false
---

# STRM Privacy Concepts

## What problems are we trying to solve?

-   STRM Privacy handles processing of events that contain personal data
    in a privacy regulations compliant way.

-   STRM Privacy improves the quality of event data by separating the
    rules that govern the shape and content of the event data from the
    teams that generate the data. So in essence, the data-scientists and
    analytics determine the rules, and not the front-end teams where the
    data originates.

-   STRM Privacy moves the decisions around privacy compliance from the
    software developers and data teams to those entities that know about
    privacy. The rules that govern the personal data aspects of an event
    are handled by so-called event contracts, and *do not* require work
    by software developers.

-   STRM Privacy takes care of complexities of handling high-volume
    event data with low latency and high availability.

-   STRM Privacy makes sure that there is an audit trail around the
    handling of personal event data. It provides the tooling to show
    what entity is using what personal data for what purpose.

## Concepts

STRM Privacy is an event processing engine designed around the following
concepts.

### Events shall be correct

Data science teams all over are well aware of the many ways that data
are wrong. It’s generally left up to them to try to work their way out
of the mess. Stream Machine aims to move the responsibility of
generating *correct* data forwards so that those entities that produce
event data will receive *immediate* feedback in case of discrepancies.

Events in STRM Privacy are strictly defined both in shape and content.
Events that do not conform will be rejected. For this, STRM Privacy uses
[Schemas and Contracts](schemas-and-contracts.md) to which all events
must conform.

### Events shall be privacy safe

The events conform to a certain schema, and this schema defines which
event attributes contain [Personally Identifiable Information
(PII)](https://en.wikipedia.org/wiki/Personal_data). Events that are
accepted by STRM Privacy will have these attributes encrypted before
entering any persistent storage. The encryption key is linked to an
event attribute that defines its *session*, i.e. the attribute that ties
the events together as a sequence belonging to one entity. The
encryption key is rotated every 24 hours.

A limited number of example schemas can be seen [in the STRM Privacy Web
Console](https://strmprivacy.io/schemas/)

### Latency shall be low

Both on ingest, and on further processing, STRM Privacy was designed and
built to provide low latency. The current implementation uses http/2 for
ingest, with typical 99 percentile latencies well below 10ms [^1].

Internally we use [Kafka](https://kafka.apache.org/) for high throughput
fault tolerant pipelines. We can configure batch sizes at will, but
having your event data in your own Kafka consumer within 1 second is
easily doable.

### Fault tolerance and horizontal scalability

STRM Privacy was designed from the ground up for horizontal scalability
and fault tolerance. Single points of failure are currently only if the
whole cloud region goes down.

### Encryption / Decryption

STRM Privacy encrypts the events but with what key? To understand this
we have to look at another component of the schema, the *event sequence
identifier* attribute [^2]. The value in this attribute defines wether or
not events belong to the same sequence. This might be website actions of
one person, or maybe a device id of a car sending location data, we
don’t care. The first time a new value is seen in the *key field* an
encryption key is generated in STRM Privacy which is linked to the event
via its `strmMeta/keyLink` value. The encryption and its associated key
link remain in use for 24 hours, and a new pair will then be generated.

## Using the encrypted data.

The primary event stream is called the *encrypted stream* and this by
design no longer contains PII data. **Everyone** in your company can use
it [^3]. In case these data become compromised, you have a business
issue, but **not** a privacy issue.

Even these data are useful. With a typical clickstream, where `url` is
not considered personal data, you could identify dead ends on your site,
or train recommender engines on the encrypted stream, because the
attributes that identify the sequence even though encrypted, remain *the
same* for 24 hours. This is plenty long enough to understand typical
customer journeys, without compromising the privacy of your users.

### Using the decrypted data.

If your usecase requires specific permissions, the process is as
follows:

![flowchart](ROOT:flowchart.png)

### Identify the consent levels you need.

Ask the [Data Protection Officer](https://tinyurl.com/wozhnn5) the
specific consent levels your usecase requires. This will return a list
of values [^4] that you need.

### Consent level types

STRM Privacy supports two types of consent levels when creating a
decrypted output stream: granular and cumulative.

1.  Cumulative: Only the highest consent level is configured on the
    output stream. All consent levels from zero (included) up to this
    level (included) are decrypted in the output stream.

2.  Granular: All the consent levels that are to be decrypted in the
    output stream are explicitly configured. This way, it’s possible to
    have "gaps" between the consent levels. For example, can specify
    level 1 and 4, which means that all other levels, including 2 and 3
    remain encrypted.

The resulting set of consent levels effects two things, see:
[???](Create a decrypted stream)

### Create a decrypted stream

Here you instruct STRM Privacy to decrypt event data with above consent
levels. STRM Privacy will

-   drop all events that don’t at least contain all the consent levels
    you require.

-   decrypt attributes with the consent levels you requested. Attributes
    with other pii levels will not be decrypted. So you receive exactly
    what you have a right to, and nothing more.

You access this stream with a specific set of credentials.

This means that data consumers will only receive the data they are
legally allowed to receive, provided the company is careful with ***not
re-using credentials***.

## Getting the data into STRM Privacy

STRM Privacy is currently an engine running on Google Cloud, with http/2
input. In order to have data accepted by STRM Privacy you need the
following:

-   a valid account

-   a stream definition, with associated credentials. STRM Privacy
    currently uses the Oauth 2.0 client credentials scheme.

-   an http/http2 client that sends data in the correct format. We
    provide *drivers* for various languages [^5] that simplify creating
    the events and sending the data. For maximum performance, http/2 is
    preferred over http1.1. You can find the drivers on
    [github.com/strmprivacy](https://github.com/strmprivacy) You don’t
    *need* our software to send data.
    [Here](quickstart/sending-curl.md) you can play with the actual
    http interaction.

## Getting data out of STRM Privacy

STRM Privacy internally keeps its data in [Apache
Kafka](https://apache.org/kafka) topics, that typically auto-expire
their data in 7 days.

For getting the data into your systems we currently have the following
options.

### Batch exports

Currently we have the option to do periodic (minute scale) exports to
AWS S3 and Google Cloud buckets, in Json-lines format [^6]. This is a
very common format for Data Scientists.

### Kafka consumers

We provide the option to create an internet accessible [^7] Kafka cluster
where you can use standard Kafka consumers to retrieve your data [^8].

[^1]: possibly plus internet roundtrip time

[^2]: named `key_field`

[^3]: at least from a GDPR perspective

[^4]: small integers

[^5]: currently Java, Javascript and Python

[^6]: even when the primary format is Avro

[^7]: authorized ofcourse

[^8]: in Json format for now
