# Batch vs Stream processing

Batch processing, as the name implies, works by processing data in
(typically large) batches, often as part of a batch processing pipeline.
Very often these run at designated times, like some time during the
night. While easy to reason about and relatively simple to implement,
this automatically implies that there will be (potentially big) delays.
The opposite is stream processing, where every piece of data (which we
call an event) is processed directly, minimizing delays.

Both approaches have upsides and downsides and these are also dependent
on the context. If the context is an existing, maybe complex, batch
flow, it often makes little sense to add a streaming component, unless
this is a first step towards a fully streaming process.

STRM provides Batch as well as Streaming support on both the input and
output side, to support fully streamed pipelines, batch pipelines and a
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
<td><p>Streaming</p></td>
<td><p>Batch</p></td>
</tr>
<tr class="odd">
<td><p><strong>Input</strong></p></td>
<td><p>(Java/Nodejs/Python) drivers</p></td>
<td><p>Batch Jobs</p></td>
</tr>
<tr class="odd">
<td><p><strong>Output</strong></p></td>
<td><p>Kafka Exporter</p></td>
<td><p>Batch Exporter, Batch Jobs</p></td>
</tr>
</tbody>
</table>

Currently, we don’t have a way to have batch input combined with
streaming output, but we’re planning to have this in the future.

## Batch processing by STRM

Batch Processing is currently supported by Batch Jobs. A Batch Job has
the same features as streams:

-   It encrypts data, based on what is declared PII.

-   It can decrypt data, based on consent.

-   It can mask data.

-   It can export data to a cloud bucket.

-   It can export the generated encryption keys to a cloud bucket.

## Stream processing by STRM

Historically, STRM has been all about privacy-safe streaming data. This
can be seen in the concepts of an input stream and derived streams.
Events sent to STRM (typically using one of our drivers) are encrypted
and the data is put in a Kafka topic. This is then immediately processed
(ignoring [Kafka
Batching](https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_batch.size),
which we use as an optimization) and the data (encrypted or derived
data) is available for consumers in near-real-time.

For streaming consumption of data, we currently provide a way to connect
a Kafka Consumer to our streams, which allows downstream streaming
processing. We are planning for more integrations.
