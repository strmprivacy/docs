---
title: "kafka-cluster"
hide_title: true
---
## strm get kafka-cluster

Get Kafka Cluster by name

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
strm get kafka-cluster (name) [flags]
```

### Options

```
  -h, --help   help for kafka-cluster
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm get](docs/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity

