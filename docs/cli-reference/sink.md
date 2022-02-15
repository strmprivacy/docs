A Sink is a STRM Privacy configuration object for a remote file storage.
For now, AWS S3 and Google Cloud Storage Buckets are supported. By
itself, a Sink does nothing. A Batch Exporter needs to be connected to a
Sink and a Stream to start outputting events.

Upon creation, STRM Privacy validates whether or not the Bucket exists
and if it is accessible with the given credentials.

## create

Create a new Sink, with the given name, pointing to the given bucket.

### Usage

`strm create sink (sink-name) (bucket-name) [flags]`.

### Arguments

sink-name  
The name of this sink.

bucket-name  
The simple name of the bucket, so not an URL like s3://bucket-name.

### Flags

--credentials-file  
**Required**. The file with the credentials used to authenticate with
the cloud provider.

--sink-type  
The type of the sink. If omitted, the CLI tries to guess it, based on
the structure of the credentials file. If guessing is not possible, the
flag has to be specified.

See [Global flags](index.md#global-flags) for all global flags.

## delete

Delete a Sink by name.

### Usage

`strm delete sink (name) [flags]`.

### Arguments

name  
The name of this sink.

### Flags

--recursive  
also delete Batch Exporters using this sink.

See [Global flags](index.md#global-flags).

## get

Get a Sink by name.

### Usage

`strm get sink (name) [flags]`.

### Arguments

name  
The name of this sink.

### Flags

--recursive  
also list the Batch Exporters using this sink.

See [Global flags](index.md#global-flags).

## list

List Sinks.

### Usage

`strm list sinks [flags]`.

### Arguments

None.

### Flags

--recursive  
also list the Batch Exporters using this sink.

See [Global flags](index.md#global-flags).
