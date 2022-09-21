---
title: "data-subject-keylinks"
hide_title: true
---
## strm list data-subject-keylinks

List data subjects keylinks

### Synopsis

Retrieve keylinks associated with data subjects

```
strm list data-subject-keylinks <data-subject-id>... [flags]
```

### Options

```
  -h, --help   help for data-subject-keylinks
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm list](/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

