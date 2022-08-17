---
title: "auth"
hide_title: true
---
## strm auth

Authentication command

### Options

```
  -h, --help   help for auth
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

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.12.1
* [strm auth login](/cli-reference/strm/auth/login.md)	 - Login
* [strm auth print-access-token](/cli-reference/strm/auth/print-access-token.md)	 - Print your current access-token to stdout
* [strm auth revoke](/cli-reference/strm/auth/revoke.md)	 - Revoke
* [strm auth show](/cli-reference/strm/auth/show.md)	 - Show your current login credentials

