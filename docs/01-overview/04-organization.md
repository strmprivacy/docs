---
title: STRM Privacy and your organization
hide_table_of_contents: false
---

[schemas]: docs/02-concepts/02-data-contracts/index.md#schema
[dc]: docs/02-concepts/02-data-contracts/index.md
[purpose-maps]: docs/02-concepts/06-purpose-maps.md

# STRM Privacy and your organization

In order to start using STRM Privacy in your organization you need to
organize the following:

## Who decides the shape and content of your event data?

The goal of STRM Privacy is to bring clarity into your event data
processing, in both the shape and rules that govern the events, as well
as who uses what data.

Your organization needs to decide who is responsible for deciding over
[*schemas*][schemas] (the *shape* of the events) as well as who is responsible for their content
(the [*data contract*][dc]. This does not have to be organization wide of course, but it’s advisable that
there is clear ownership for each event stream.

The [*schema*][schemas] determines what attributes exist on a certain type of event; think `url`,
`session-id`, `customer-id`, `address`, `article-nr`, …

The [*data contract*][dc] determines the rules that govern these attributes:
-   what content makes an attribute valid or invalid?
-   which attribute indicates that events belong to a same entity?
-   which attributes contain sensitive (personal) data, and for what purposes are the
    attributes collected and allowed to be used?

Each event *must* conform to a certain schema, extra fields or missing
mandatory fields will not be accepted by STRM Privacy. We believe that
it’s generally a *good idea to have data scientists or data analysts
define these schemas*, and not solely the teams that are responsible
for sending the events. Often, it's a collaboration between producing
and consuming parties, with a Data Privacy Officer (or similar) reviewing the contract.

## Determine your organization's sensitive data purposes {#purposes}

Event contents are governed by [*data contracts*][dc]. These define
among other things which attributes of an event contain personal data.

Your organization has to determine which attributes of an event schema
contain sensitive (personal) data, and how these attributes map to the purposes
that have been defined by your organization's [purpose maps][purpose-maps]. These decisions are
of a non-technical nature, and often correspond closely to the rules around
*cookie consent*.

_Example 1. Example purposes_
<div class="boxBorder">

_0. No sensitive data_  
The data subject or owner does not allow any processing of sensitive data. STRM
Privacy removes the sensitive aspect of sensitive attributes by
encryption, and in this case, the encryption key will not be used for
decryption, and will be discarded as specified by the [privacy algorithm](./01-principles.md#privacy-algorithms).
This means that the event data can still be used for some aggregated information (like a
customer journey) but it is impossible to relate these events to an individual person.

_1. Non-personalized recommendations_  
Customer allows recommendations based on an average over all customers

_2. Personalized recommendations_  
Customer allows personalized recommendations

_3. Personalized email marketing_  
Customer allows personalized email marketing

_4. Contact by phone_  
Customer allows contact by phone

This is just an example; STRM Privacy allows for very fine-grained purpose configurations.
</div>

## Collect the data subject's consent

**Every STRM Privacy event** embeds data subject consent,
defining for which purposes the data subject consented _for this event_.
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

1.  software that collects events and creates a STRM Privacy compatible
    event

2.  a [console](https://console.strmprivacy.io) account

3.  a stream 

4.  stream credentials

We provide [various drivers](docs/03-quickstart/01-streaming/03-sending-data/01-language-examples.md) to send data
to STRM Privacy. None of these drivers are mandatory, it is possible to
write your own (see [here](docs/03-quickstart/01-streaming/03-sending-data/02-sending-curl.md)). In case a language is missing,
feel free to create your own driver or [contact us](docs/05-contact/index.md) for assistance.
All the software for interacting with STRM Privacy is 
open-source, there’s no magic and no vendor lock-in.

## Extract events

For further use of the events in your organization you have two options:

-   Periodically (for instance once a minute) export events to [blob storage](docs/03-quickstart/01-streaming/04-receiving-data/01-batch-export.md). Fully encrypted streams will
    be fine to use for *everyone* in your organization, as they no longer contain personal data.

-   If you have more real-time requirements, you can create a [Kafka export](docs/03-quickstart/01-streaming/04-receiving-data/03-exporting-kafka.md), to allow using a standard Kafka
    consumer to consume events in real-time. Typical end-to-end latency is configurable, but can easily be brought under 1 second.

## Decrypted streams

Assume a part of your organization requires personal data to operate. In that case
one needs to

1.  create a decrypted stream for the desired purposes

2.  create (batch) exporters for these streams

3.  provide those that have a need for these data with necessary
    credentials

4.  start processing
