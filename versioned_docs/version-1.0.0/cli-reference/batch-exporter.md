## batch-exporter

A Batch Exporter listens to a stream and outputs all events to files in
a Sink. This happens with a regular interval.

Each file follows the JSON Lines format, which is one full JSON document
per line.

A [sink](sink.md) is a configuration item that defines location
(Gcloud, AWS, ..) bucket and associated credentials.

A sink needs to be created *before* you can create a batch exporter that
uses it.

### create

Create a new Batch Exporter for a Stream, identified by [stream-name].

#### Usage

`strm create batch-exporter (stream-name) [flags]`.

#### Arguments

stream-name  
The name of the stream this Batch Exporter connects to.

#### Flags

--export-keys  
Boolean: If set, create a batch exporter for the Key Stream with this
[stream-name].

--interval  
The interval in seconds at which batched events are sent to the sink.
Default: 60.

--name  
The batch exporter name. Default: [sink name]-[stream-name] for
event exporters, and [sink name]-[stream-name]-keys for encryption
key exporters.

--path-prefix  
The directory prefix to use when creating files in the Sink.

--sink  
The sink to output to. This flag is mandatory when there is more than
one Sink for this billing id.

--include-existing-events  
Sets the initial offset to earliest. Default: latest.

Also see [Global flags](index.md#global-flags) for all global flags.

### delete

Delete a Batch Exporter by name.

#### Usage

`strm delete batch-exporter (name) [flags]`.

#### Arguments

name  
The name of the Batch Exporter.

#### Flags

No specific flags. See [Global flags](index.md#global-flags).

### get

Get a Batch Exporter by name.

#### Usage

`strm get batch-exporter (name) [flags]`.

#### Arguments

name  
The name of the Batch Exporter.

#### Flags

No specific flags. See [Global flags](index.md#global-flags).

### list

List Batch Exporters.

#### Usage

`strm list batch-exporters [flags]`.

#### Arguments

No arguments

#### Flags

No specific flags. See [Global flags](index.md#global-flags).
