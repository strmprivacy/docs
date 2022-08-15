---
title: "project"
hide_title: true
---
## strm manage project

Manage a project: add or remove members. Defaults to active project

```
strm manage project [project-name] [flags]
```

### Options

```
      --add-member stringArray      [email1,email2,..]
  -h, --help                        help for project
      --remove-member stringArray   [email1,email2,..]
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

* [strm manage](/cli-reference/strm/manage/index.md)	 - Manage a project or organization

