---
title: "kafka-exporter"
hide_title: true
---
## strm delete kafka-exporter

Delete a Kafka exporter

### Synopsis

A Kafka Exporter, like a Batch Exporter, can be used to export events from Stream Machine to somewhere outside of STRM
Privacy. But in contrast to a Batch Exporter, a Kafka Exporter does not work in batches, but processes the events in
real time.

After creation, the CLI exposes the authentication information that is needed to connect to it with your own Kafka
Consumer.

In case your data are Avro encoded, the Kafka exporter provides a *json format* conversion of your data for easier
downstream processing. See the [exporting Kafka](docs/03-quickstart/01-streaming/04-receiving-data/03-exporting-kafka.md) page for how to consume from the
exporter.

If a kafka-exporter has dependents (like Kafka users), you can use
the 'recursive' option to get rid of those also.
Returns everything that was deleted.

### Usage

```
strm delete kafka-exporter [name] [flags]
```

### Options

```
  -h, --help   help for kafka-exporter
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
  -p, --project string                 Project to use (defaults to context-configured project)
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm delete](docs/04-reference/01-cli-reference/strm/delete/index.md)	 - Delete an entity

