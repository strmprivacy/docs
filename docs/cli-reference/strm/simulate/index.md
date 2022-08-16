---
title: "simulate"
hide_title: true
---
## strm simulate

Send simulated events with a predefined demo schema (not for production purposes)

### Options

```
  -h, --help            help for simulate
      --schema string   Which schema to use for creating simulated events (default "strmprivacy/demo/1.0.2")
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

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.11.0
* [strm simulate random-events](/cli-reference/strm/simulate/random-events.md)	 - Run a simulator that will send random events to a stream

