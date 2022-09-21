---
title: STRM Privacy and your organization
hide_table_of_contents: false
---

# STRM Privacy and your organization

In order to start using STRM Privacy in your organization you need to
organize the following:

## Who decides the shape and content of your event data?

The goal of STRM Privacy is to bring clarity into your event data
processing, in both the shape and rules that govern the events, as well
as who uses what data.

Your organization needs to decide who is responsible for deciding over
[schemas](/02-concepts/02-data-contracts/01-schemas-and-contracts.md#schema) (the
*shape* of the events) as well as who is responsible for their content
(the [*event
contract*](/02-concepts/02-data-contracts/01-schemas-and-contracts.md#contract)). This does
not have to be organization wide of course, but it’s advisable that
there is clear ownership for each event stream.

The [*schema*](/02-concepts/02-data-contracts/01-schemas-and-contracts.md#schema) determines
what attributes exist on a certain type of event; think `url`,
`session-id`, `customer-id`, `address`, `article-nr`, …

The [*event contract*](/02-concepts/02-data-contracts/01-schemas-and-contracts.md#contract)
determines the rules that govern these attributes:

-   what content makes an attribute valid or invalid?

-   which attribute indicates that events belong to a same entity?

-   which attributes contain personal data, and what consent needs to be
    given to use the attribute.

Each event *must* conform to a certain schema, extra fields or missing
mandatory fields will not be accepted by STRM Privacy. We believe that
it’s generally a *good idea to have data scientists or data analysts
define these schemas*, and not solely the teams that are responsible
for sending the events. Often, it's a collaboration between producing
and consuming parties, with a Data Privacy Officer (or similar) reviewing the contract.

Note that STRM Privacy has predefined public schemas that can be used by
every STRM Privacy customer, but it’s also very easy to define your own
event schemas.

STRM Privacy schemas *must contain a
[`strmMeta`](/02-concepts/02-data-contracts/03-strm-meta.md)* section that defines

-   the consent-level(s) given by the data-owner for the processing of
    this event (`strmMeta.consentLevels`)

-   a field that allows retrieval of the encryption key for personal
    data attributes (`strmMeta.keyLink`)

## Determine the consent levels for handling personal data in your company {#consent-levels}

Event contents are governed by [*event
contracts*](/02-concepts/02-data-contracts/01-schemas-and-contracts.md#contract). These define
among other things which attributes of an event contain personal data.

Your organization has to determine which attributes of an event schema
contain personal data, and how these attributes map to the consent
levels that have been chosen by your organization. These decisions are
of a non-technical nature, and often correspond closely to the rules around
*cookie consent*.

_Example 1. Example consent levels_
<div class="boxBorder">
<i>level 0</i>

The data owner does not allow any processing of personal data. STRM
Privacy removes the *personal* aspect of personal data attributes by
encryption, and in this case, the encryption key will not be used for
decryption, and will be discarded as specified by the [privacy algorithm](./01-principles.md#privacy-algorithms).
This means that the event data can still be used for some aggregated information (like a
customer journey) but it is impossible to relate these events to an individual person.

<i>level 1</i>

Customer allows recommendations based on an average over all customers

<i>level 2</i>

Customer allows personalized recommendations

<i>level 3</i>  

Customer allows personalized email marketing

<i>level 4</i>  

Customer allows contact by phone

This is just an example; STRM Privacy allows for very fine-grained consent configurations.
</div>

## Collect the data owners consent level(s)

**Every event** in STRM Privacy has consent level(s) embedded,
that define what consent was given by the data subject for this event.
Typically, these will be the same for a whole sequence of events, but 
every event is handled individually, which means that if a data subject
changes consent during a sequence of events, this will be taken into account.

Your organization has to set up the mechanism that will include data subject consent
in the events that are sent to STRM Privacy. For
events that originate in a web-browser this can generally be done from
the consent *cookie*, but for events that originate somewhere in a
back-end system, another mechanism has to be created.

## Create a stream and associated credentials

Once you’ve determined all of the above, you are ready to start sending
events to STRM Privacy. You need

1.  Software that collects events and creates a STRM Privacy compatible
    event.

2.  a [console](https://console.strmprivacy.io) account

3.  a stream 

4.  stream credentials

We provide [various drivers](/03-quickstart/01-streaming/03-sending-data/01-language-examples.md) to send data
to STRM Privacy. None of these drivers are mandatory, it is possible to
write your own (see [here](/03-quickstart/01-streaming/03-sending-data/02-sending-curl.md)). In case a language is missing,
feel free to create your own driver or [contact us](/05-contact/index.md) for assistance.
All the software for interacting with STRM Privacy is 
open-source, there’s no magic and no vendor lock-in.

## Extract events

For further use of the events in your organization you have two options:

-   periodically (for instance once a minute) export events to [blob storage](/03-quickstart/01-streaming/04-exporting-data/01-batch-export.md). Fully encrypted streams will
    be fine to use for *everyone* in your organization, as they no longer contain personal data.

-   If you have more real-time requirements, you can create a [Kafka export](/03-quickstart/01-streaming/04-exporting-data/03-exporting-kafka.md), to allow using a standard Kafka
    consumer to consume events in real-time. Typical end-to-end latency is configurable, but can easily be brought under 1 second.

## Decrypted streams

Assume a part of your organization requires personal data to operate. In that case
one needs to

1.  create a decrypted stream with the required consent levels.

2.  create (batch)exporters for these streams

3.  provide those that have a need for these data with necessary
    credentials.

4.  start processing
