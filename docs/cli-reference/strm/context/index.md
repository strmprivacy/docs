---
title: "context"
hide_title: true
---
## strm context

Print the CLI context

### Options

```
  -h, --help   help for context
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

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.12.2
* [strm context account](/cli-reference/strm/context/account.md)	 - Show the handle of this account
* [strm context config](/cli-reference/strm/context/config.md)	 - Shows the config path and preferences
* [strm context info](/cli-reference/strm/context/info.md)	 - Show the stored information for a saved entity
* [strm context project](/cli-reference/strm/context/project.md)	 - Show or set the active project

