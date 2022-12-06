---
title: "batch-exporter"
hide_title: true
---
## strm create batch-exporter

Create a Batch Exporter

### Synopsis

A Batch Exporter listens to a stream and writes all events to files using a Data Connector. This happens with a regular
interval.

When exporting events each file follows the JSON Lines format, which is one full JSON document per line.
When exporting encryption keys, each file is a CSV file.

A [Data Connector](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md) is a configuration
entity that comprises a location (GCS bucket, AWS S3 bucket, ...) and associated credentials.

A Data Connector must be created *before* you can create a batch exporter that uses it.

### Usage

```
strm create batch-exporter (stream-name) [flags]
```

### Options

```
      --data-connector string     name of the data connector - optional if you own only one data connector
      --export-keys               do we want to export the keys stream
  -h, --help                      help for batch-exporter
      --include-existing-events   do we want to include all existing events
      --interval int              interval in seconds between batches (default 60)
      --name string               optional batch exporter name (default <stream>-<dataconnector>).
      --path-prefix string        path prefix on bucket
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity

