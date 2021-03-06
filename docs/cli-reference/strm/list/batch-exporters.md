---
title: "batch-exporters"
hide_title: true
---
## strm list batch-exporters

List Batch exporters

### Synopsis


A Batch Exporter listens to a stream and writes all events to files using a Data Connector. This happens with a regular interval.

Each file follows the JSON Lines format, which is one full JSON document per line.

A [Data Connector](/cli-reference/strm/create/data-connector/index.md) is a configuration
entity that comprises a location (GCS bucket, AWS S3 bucket, ...) and associated credentials.

A Data Connector must be created *before* you can create a batch exporter that uses it.

### Usage


```
strm list batch-exporters [flags]
```

### Options

```
  -h, --help   help for batch-exporters
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm list](/cli-reference/strm/list/index.md)	 - List entities

