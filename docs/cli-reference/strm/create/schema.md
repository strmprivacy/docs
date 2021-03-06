---
title: "schema"
hide_title: true
---
## strm create schema

create a schema

### Synopsis

### Usage

```
strm create schema (handle/name/version) [flags]
```

### Options

```
      --definition string   filename of the definition (either Simple Schema, Avro or Json)
  -h, --help                help for schema
      --public              should the schema become public
      --type string         type of schema (default "AVRO")
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

