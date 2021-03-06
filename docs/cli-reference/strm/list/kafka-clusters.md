---
title: "kafka-clusters"
hide_title: true
---
## strm list kafka-clusters

List Kafka clusters

### Synopsis

A Kafka Cluster can be used for exporting directly from STRM Privacy to a Kafka Cluster owned by the client, or to the
shared Kafka Export Cluster, hosted by STRM Privacy. This gives all the performance, scalability and reliability
benefits offered by Kafka.

The Kafka Cluster is only a configuration object, it does not create the actual cluster infrastructure. It only points
to an existing Kafka Cluster.

At the moment, it’s not possible to create your own Kafka Cluster. All Kafka Exporters use the STRM Privacy Shared
Cluster.

### Usage


```
strm list kafka-clusters [flags]
```

### Options

```
  -h, --help   help for kafka-clusters
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

