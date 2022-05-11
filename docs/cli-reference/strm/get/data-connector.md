---
title: "data-connector"
hide_title: true
---
## strm get data-connector

Get Data Connector by name

### Synopsis

A Data Connector represents a location from which data can be read, or to which data can be written. 
For example, an AWS S3 bucket or a Google Cloud Storage bucket. By itself, a Data Connector does nothing. 
A Data Connector with valid credentials is required when creating a Batch Exporter or Batch Job.

### Usage

```
strm get data-connector [name] [flags]
```

### Options

```
  -h, --help   help for data-connector
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm get](/cli-reference/strm/get/index.md)	 - Get an entity

