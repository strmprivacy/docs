---
title: "listen"
hide_title: true
---
## strm listen

Listen for events on a stream

### Options

```
  -h, --help   help for listen
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

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.14.2
* [strm listen kafka](/cli-reference/strm/listen/kafka.md)	 - Read events via the kafka consumer (not for production purposes)
* [strm listen web-socket](/cli-reference/strm/listen/web-socket.md)	 - Read events via the web-socket (not for production purposes)

