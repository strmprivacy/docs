---
title: "kafka-exporter"
hide_title: true
---
## strm create kafka-exporter

Create a Kafka Exporter

### Synopsis

A Kafka Exporter, like a Batch Exporter, can be used to export events from Stream Machine to somewhere outside of STRM
Privacy. But in contrast to a Batch Exporter, a Kafka Exporter does not work in batches, but processes the events in
real time.

The Kafka exporter produces your events in JSON format, even when originally in Avro binary for easier
downstream processing.

### Usage

```
strm create kafka-exporter (stream-name) [flags]
```

### Options

```
      --cluster string   name of the kafka cluster
  -h, --help             help for kafka-exporter
      --save             save the result in the config directory
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

