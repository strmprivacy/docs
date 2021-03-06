---
title: "batch-job"
hide_title: true
---
## strm create batch-job

Create a Batch Job

### Synopsis


A Batch Job reads all events from a Data Connector and writes them to one or more Data Connectors,
applying our privacy algorithm as defined by the job's configuration file.

Each file follows the JSON Lines format, which is one full JSON document per line.

A [Data Connector](/cli-reference/strm/create/data-connector/index.md) is a configuration
entity that comprises a location (GCS bucket, AWS S3 bucket, ...) and associated credentials.

A Data Connector must be created *before* you can create a batch job that uses it.

### Usage


```
strm create batch-job [flags]
```

### Options

```
  -F, --file string   The path to the JSON file containing the batch job configuration
  -h, --help          help for batch-job
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

* [strm create](/cli-reference/strm/create/index.md)	 - Create an entity

