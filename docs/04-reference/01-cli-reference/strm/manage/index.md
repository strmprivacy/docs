---
title: "manage"
hide_title: true
---
## strm manage

Manage a project or organization

### Options

```
  -h, --help   help for manage
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.0.0
* [strm manage project](docs/04-reference/01-cli-reference/strm/manage/project.md)	 - Manage a project: add or remove members. Defaults to active project
* [strm manage user-roles](docs/04-reference/01-cli-reference/strm/manage/user-roles.md)	 - Change user roles.

