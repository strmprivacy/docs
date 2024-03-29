---
title: Principles
hide_table_of_contents: false
---

STRM Privacy has been founded to solve the challenges that we experienced in large companies as Product Owners /
Managers,
Software Engineers, and Software Architects. The problems that we try to solve and the principles upon which STRM
Privacy
has been founded are discussed in this section.

## What problems are we trying to solve?

- **Personal Data Processing Compliance**. Handle the processing of data that contain [personal and personally
  identifiable information](./02-pii.md) in a privacy regulations compliant way.
- **Governance after data collection**. Move the decisions around privacy compliance from the
  Software Engineers and Data Teams to those entities that know about
  privacy. The rules that govern the personal data aspects of an event
  are handled by [data contracts](docs/02-concepts/02-data-contracts/index.md) and are defined in collaboration between technical and legal stakeholders.
- **Infrastructure management and performance**. STRM Privacy takes care of complexities of handling high-volume
  (event) data with low latency and high availability.
- **Auditability**. With STRM Privacy, an audit trail around the
  handling of personal event data is available by design. It provides the tooling to show
  what entity is using what personal data for what purpose, and interfaces to manage this data, exhaustively coupled to Data Subjects, without complicated indexes or full table scans.
- **Low Event Data Quality**. Improve the quality of event data by separating the rules that govern
  the [shape and content of the event data](docs/02-concepts/02-data-contracts/index.md)
  from the teams that generate the data. So in essence, the Data Scientists and
  Data Analysts determine the rules, and not the front-end teams where the
  data originates.  

## STRM Privacy Principles

STRM Privacy is a privacy-focused data processing platform designed around the following
principles.

### 1. Events shall be correct

Data science teams are well aware of the many ways that data
are wrong. It’s generally left up to them to cope with the challenges.
STRM Privacy aims to move the responsibility of
generating *correct* data forwards (i.e. [shift-left](https://dzone.com/articles/the-shift-left-principle-and-devops-1))
so that those entities that produce event data will receive *immediate* feedback in case of discrepancies.

Events in STRM Privacy are strictly defined corresponding to a shape and content restrictions.
Events that do not conform are rejected. For this, STRM Privacy uses
[Data Contracts](docs/02-concepts/02-data-contracts/index.md) to which all events
must conform.

### 2. Events shall be privacy safe

The events conform to a certain data contract that defines the shape and privacy implications. The data contract defines which
event attributes contain [Personal and Personally Identifiable Information
(PII)](./02-pii.md). When STRM Privacy accepts an event, it encrypts these attributes _before_
proceeding with further processing in its data platform. The encryption key is linked to a value of a field in the
event that defines its *event sequence*, i.e. the attribute that ties
the events together as a sequence belonging to one entity (read more
about [Personal Data Field Encryption](docs/02-concepts/01-data-processing/01-pii-field-encryption.md))

### 3. Latency shall be low

Both on ingest, and on further processing, STRM Privacy is designed and
built to provide low latency[^1].

Internally, STRM Privacy is built using [Kafka](https://kafka.apache.org/) for high throughput
fault-tolerant pipelines. With the correct configuration, getting data to your own Kafka consumer within 1 second is
easily achievable.

### 4. Fault tolerance and horizontal scalability

STRM Privacy was designed from the ground up for horizontal scalability
and fault tolerance. The [separation of the processing platform](docs/02-concepts/03-deployment-modes/index.md) into
a Data Plane (the part that processes events) and a Control Plane (ensure the management of resources),
ensures that the platform is fault-tolerant and scalable.

### 5. Deterministic Privacy Algorithms {#privacy-algorithms}

STRM Privacy encrypts PII data in events. To understand how this works
we have to look at another component of the data contract, the *keyField* attribute.
The value of this _field_ (hence, the value of this field in an event) defines
whether events belong to the same sequence. This might be webshop session id,
or maybe a device id of a car sending location data, or anything else that is typically used to "tie" events together.
The first time a new value is seen in the *keyField*, an
encryption key is generated in STRM Privacy which is decoupled from the event by a `keyLink`. The value for the
`keyLink` is included in each event, in the `strmMeta/keyLink` field.

The way Personal Data is encrypted, follows a Privacy Algorithm. Currently, the Privacy Algorithm is time-based, yet others
might be added in the future. Read more about the current Privacy Algorithm [here](docs/02-concepts/01-data-processing/01-pii-field-encryption.md).

[^1]: Current implementation uses HTTP/2 for
ingest, with typical 99 percentile latencies well below 10ms (excluding internet roundtrip time)
