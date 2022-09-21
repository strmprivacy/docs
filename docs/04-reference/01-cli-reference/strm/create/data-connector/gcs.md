---
title: "gcs"
hide_title: true
---
## strm create data-connector gcs

Create a Data Connector for a Google Cloud Storage Bucket

### Synopsis

Creates a data connector for a Google Cloud Storage bucket. Service account credentials are required.

### Usage

```
strm create data-connector gcs [data-connector-name] [bucket-name] [flags]
```

### Options

```
      --credentials-file string   file with service account JSON key credentials
  -h, --help                      help for gcs
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm create data-connector](/04-reference/01-cli-reference/strm/create/data-connector/index.md)	 - Create a Data Connector

