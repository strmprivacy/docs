---
title: "activate"
hide_title: true
---
## strm activate

Set the state of an entity to ACTIVATED

### Options

```
  -h, --help   help for activate
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.2.0
* [strm activate event-contract](/cli-reference/strm/activate/event-contract.md)	 - Set the state of an Event Contract to ACTIVATED
* [strm activate schema](/cli-reference/strm/activate/schema.md)	 - Set the state of a Schema to ACTIVATED

