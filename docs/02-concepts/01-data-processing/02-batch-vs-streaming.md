---
title: Batch versus Stream
hide_table_of_contents: false
---

As data processing can be done in various ways, it is important to know the difference. This article covers
the differences between Batch and Stream processing of data.

# Batch versus Stream

Batch processing, as the name implies, works by processing data in
(typically large) batches, often as part of a batch processing pipeline.
Very often these run at designated times, like some time during the
night. While easy to reason about and relatively simple to implement,
this automatically implies that there will be (potentially big) delays.
The opposite is stream processing, where every piece of data (which is
called an event in STRM Privacy) is processed directly, minimizing delays.

Both approaches have upsides and downsides and these are also dependent
on the context. If the context is an existing, maybe complex, batch
flow, it often makes little sense to add a streaming component, unless
this is a first step towards a fully streaming process.

STRM Privacy provides [Batch](docs/03-quickstart/02-batch/index.md) as well
as [Streaming](docs/03-quickstart/01-streaming/index.md)
support on both the input and output side, to support fully streamed pipelines, batch pipelines and a
hybrid where data is streamed to STRM and batched downstream.

See the table below for an overview:

<table style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"33%"}} />
<col style={{"width":"33%"}} />
<col style={{"width":"33%"}} />
</colgroup>
<tbody>
<tr>
<td><p><strong></strong></p></td>
<td><p><strong>Streaming</strong></p></td>
<td><p><strong>Batch</strong></p></td>
</tr>
<tr>
<td><p><strong>Input</strong></p></td>
<td><p>(Java/Nodejs/Python) drivers</p></td>
<td><p>Batch Jobs</p></td>
</tr>
<tr>
<td><p><strong>Output</strong></p></td>
<td><p>Kafka Exporter</p></td>
<td><p>Batch Exporter, Batch Jobs</p></td>
</tr>
</tbody>
</table>

:::note
Currently, batch input to streaming output is not (yet) supported. Please [contact us](docs/05-contact/index.md) if you are
interested in this.
:::

## Batch processing

Batch Processing is currently supported by Batch Jobs. A Batch Job has
the same features as streams:

- It encrypts data, based on what is declared PII.
- It can decrypt data, based on consent.
- It can mask data.
- It can export data to a cloud bucket.
- It can export the generated encryption keys to blob storage.

## Stream processing

Historically, STRM Privacy has been all about privacy-safe _streaming_ data. This
can be seen in the concepts of an input stream and derived streams.
Events sent to STRM Privacy are encrypted
and the data is put in a Kafka topic. This is then immediately processed
(ignoring [Kafka
Batching](https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_batch.size)
,
which we use as an optimization) and the data (encrypted or derived
data) is available for consumers in near real-time.

For streaming consumption of data, we currently provide a way to connect
a Kafka Consumer to your streams, which allows downstream stream
processing.
