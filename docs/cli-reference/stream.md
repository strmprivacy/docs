A stream is the central resource in STRM Privacy. Clients can connect to
a stream to send and to receive events. A stream can be either an "input
stream" or a "derived stream".

Events are always sent to an input stream. Sending events to a derived
stream is not possible. After validation and encryption of all PII
fields, STRM Privacy sends all events to the input stream. Clients
consuming from the input stream will see all events, but with all PII
fields encrypted.

Derived streams can be made on top of a input stream. A derived stream
is configured with one or more consent levels and it only receives
events with matching consent levels (see details about this matching
process here). The PII fields with matching consent levels are decrypted
and sent to the derived stream. Clients connecting to the derived stream
will only receive the events on this stream.

Every stream has its own set of access tokens. Connecting to an input
stream requires different credentials than when connecting to a derived
stream.

## create

Create a new Stream.

### Usage

Create a Source Stream:

```bash
strm create stream (stream-name) [flags]
```

Create a Derived Stream:

```bash
strm create stream --derived-from=(stream-name) \
  [derived-name] [flags]`
```

### Arguments

stream-name  
The name of this stream.

derived-name  
The name of the derived stream. This argument is *optional*. When absent
it is created deterministically from the source name, a dash and
dash-separated consent levels.

### Flags

--consent-type  
Optional for Derived Streams: CUMULATIVE or GRANULAR (default
"CUMULATIVE"). Ignored for source streams.

--derived-from|-D  
Required for Derived Streams: name of stream that this stream is derived
from

--description  
The description, for human purposes only

--levels|-L  
list of integers. Required for Derived Streams: Comma separated list of
integers for derived streams (default [])

--tags  
list of strings. Optional: Tags, for human purposes only

--masked-fields|-M  
repeated masking definition, consisting of
`<event-contract ref>:<field-pattern>[,<field-pattern>]` See [Masked
Fields](/concepts/masked-fields.md) for details

--mask-seed  
a string seed value for the masking. See [Masked
Fields](/concepts/masked-fields.md) for details

See [Global flags](/cli-index.md#global-flags) for all global flags.

## delete

Delete a Stream by name.

### Usage

```bash
strm delete stream (name) [flags].
```

### Arguments

name  
The name of this stream.

### Flags

--recursive  
also delete the dependent Kafka Exporters, Batch Exporters, Key- and
Derived Streams.

See [Global flags](/cli-index.md#global-flags).

## get

Get a Stream by name.

### Usage

```bash
strm get stream (name) [flags]
```

### Arguments

name  
The name of this stream.

### Flags

--recursive  
also show the dependent Kafka Exporters, Batch Exporters and Derived
Streams.

See [Global flags](/cli-index.md#global-flags).

## list

List Streams.

### Usage

```bash
strm list streams [flags].
```

### Arguments

None.

### Flags

--recursive  
also show the dependent Kafka Exporters, Batch Exporters and Derived
Streams.

See [Global flags](/cli-index.md#global-flags).
