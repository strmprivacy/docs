A Kafka Exporter, like a Batch Exporter, can be used to export events
from Stream Machine to somewhere outside of STRM Privacy. But in
contrast to a Batch Exporter, a Kafka Exporter does not work in batches,
but processes the events in real time.

After creation, the CLI exposes the authentication information that is
needed to connect to it with your own Kafka Consumer.

In case your data are Avro encoded, the Kafka exporter provides a *json
format* conversion of your data for easier downstream processing. See
the [exporting Kafka](quickstart/exporting-kafka.md) page for how to
consume from the exporter.

## create

Create a new Kafka Exporter for a Stream, identified by [stream-name].

### Usage

`strm create kafka-exporter (stream-name) [flags]`.

### Arguments

stream-name  
The name of the stream from which to consume events.

### Flags

--cluster  
The cluster to send all events to. Currently, this is always the shared
Kafka Export, hosted by STRM Privacy.

See [Global flags](index.md#global-flags) for all global flags.

## delete

Delete a Kafka Exporter by name

### Usage

`strm delete kafka-exporter (name) [flags]`.

### Arguments

name  
The name of the Kafka Exporter.

### Flags

No specific flags. See [Global flags](index.md#global-flags).

## get

Get a Kafka Exporter by name

### Usage

`strm get kafka-exporter (name) [flags]`.

### Arguments

name  
The name of the Kafka Exporter.

### Flags

No specific flags. See [Global flags](index.md#global-flags).

## list

List Kafka Exporters.

### Usage

`strm list kafka-exporters [flags]`.

### Arguments

No options

### Flags

No specific flags. See [Global flags](index.md#global-flags).
