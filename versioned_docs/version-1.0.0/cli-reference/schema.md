A Schema describes the format of the events that are sent to STRM
Privacy. The events can be sent in two formats, JSON and AVRO and the
corresponding supported schema types are JSON Schema and AVRO. We plan
to have more types in the future.

Schemas can be private or public, allowing them to be found and used by
others than the owning client. Be careful, public Schemas cannot be
deleted.

Schemas are versioned using a versioning scheme that can be fully
determined by the client. The only restrictions are that version
numbers:

-   MUST follow the semver format (major/minor/patch),

-   MUST always be ascending,

-   MUST keep the same schema type (e.g. JSON Schema or AVRO).

A Schema is uniquely identified by its Schema reference, in the format
(organization handle/schema name/version).

## get

Retrieve a schema

### Usage

`strm get schema (handle/name/version)`

### Argument

handle/name/version  
A reference to the schema.

### Flags

See [Global flags](index.md#global-flags) for all global flags.

### Example

```bash
strm get schema strmprivacy/demo/1.0.2
{
  "schema": {
    "ref": {
      "handle": "strmprivacy",
      "name": "demo",
      "version": "1.0.2",
      "schemaType": "AVRO"
    },
    "state": "PENDING",
    "isPublic": true,
    "definition": "...",
    "fingerprint": "6093265390869578999"
  }
}
```

## list

List all schemas.

### Usage

```bash
`strm list schemas`
```

### Argments

None.

### Flags

See [Global flags](index.md#global-flags) for all global flags.

### Example

```bash
strm list schemas

... very long one line json
```

We can use `jq` to extract information in a more human readable way:

```bash
strm list schemas | jq -r '.schemas[].ref | "\(.handle)/\(.name)/\(.version)"'

strmprivacy/clickstream/0.1.0
strmprivacy/demo_v1/0.1.0
strmprivacy/nps_unified_v3/3.0.0
strmprivacy/clickstream/0.2.0
strmprivacy/nps_unified_v1/0.1.0
strmprivacy/demo/1.0.0
strmprivacy/clickstream/0.3.0
strmprivacy/demo/1.0.1
dpg/nps_unified/4.0.0
strmprivacy/demo/1.0.2
```

## create

### Usage

```bash
strm create schema (handle/name/version)  <definition-file>
```

### Arguments

None

### Flags

--definition  
the string description of the schema (Avro or Json-Schema)

--public  
the schema be public

See [Global flags](index.md#global-flags) for all global flags.

### Example

We’ll copy one of the STRM Privacy schemas and provide our own twist.

```bash
strm get schema strmprivacy/demo/1.0.2 | jq .schema.definition \
  | jq -r > sample-schema.avsc
```

If you edit `sample-schema.avsc` and change the package for instance to
something you like better, or maybe change some fields (outside of the
`strmMeta` object), you can then upload a new version. We change the
`namespace` to `demo`, and the event to `NewDemoEvent`. Our handle here
is `demo`

```bash
    strm create schema bla/demo-schema/1.0.0 --definition=sample-schema.avsc
    {
      "schema": {
        "ref": {
          "handle": "demo",
          "name": "demo-schema",
          "version": "1.0.0",
          "schemaType": "AVRO"
        },
        "state": "PENDING",
        "definition": "...",
        "fingerprint": "-1949971882462848769"
      }
    }
```
