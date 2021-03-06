---
title: "kafka"
hide_title: true
---
## strm listen kafka

Read events via the kafka consumer (not for production purposes)

```
strm listen kafka (kafka-exporter-name) [flags]
```

### Options

```
      --client-id string       Client id to be used for receiving data
      --client-secret string   Client secret to be used for receiving data
      --group-id string        Kafka consumer group id. Uses a random value when not set
  -h, --help                   help for kafka
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

* [strm listen](/cli-reference/strm/listen/index.md)	 - Listen for events on a stream

