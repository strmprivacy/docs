---
title: "data-contract"
hide_title: true
---
## strm archive data-contract

Set the state of an Data Contract to ARCHIVED

### Synopsis

### Usage

```
strm archive data-contract (handle/name/version) [flags]
```

### Options

```
  -h, --help   help for data-contract
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
  -p, --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm archive](docs/04-reference/01-cli-reference/strm/archive/index.md)	 - Set the state of an entity to ARCHIVED
