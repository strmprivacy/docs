A Batch Job outputs all events in file all events to files in a Sink.
This happens with a regular interval.

Each file follows the JSON Lines format, which is one full JSON document
per line.

A [sink](sink.md) is a configuration item that defines location
(Gcloud, AWS, ..) bucket and associated credentials.

A sink needs to be created *before* you can create a batch job that uses
it.

## create

Create a new Batch Job.

### Usage

`strm create batch-job [flags]`.

### Arguments

stream-name  
The name of the stream this Batch Job connects to.

### Flags

--export-keys  
Boolean: If set, create a batch job for the Key Stream with this
[stream-name].

--interval  
The interval in seconds at which batched events are sent to the sink.
Default: 60.

--name  
The batch job name. Default: [sink name]-[stream-name] for event
jobs, and [sink name]-[stream-name]-keys for encryption key jobs.

--path-prefix  
The directory prefix to use when creating files in the Sink.

--sink  
The sink to output to. This flag is mandatory when there is more than
one Sink for this billing id.

--include-existing-events  
Sets the initial offset to earliest. Default: latest.

Also see [Global flags](/cli-index.md#global-flags) for all global flags.

## delete

Delete a Batch Job by name.

### Usage

`strm delete batch-job (name) [flags]`.

### Arguments

name  
The name of the Batch Job.

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

## get

Get a Batch Job by name.

### Usage

`strm get batch-job (name) [flags]`.

### Arguments

name  
The name of the Batch Job.

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

## list

List Batch Jobs.

### Usage

`strm list batch-jobs [flags]`.

### Arguments

No arguments

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).
