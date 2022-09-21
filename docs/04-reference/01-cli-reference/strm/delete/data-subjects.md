---
title: "data-subjects"
hide_title: true
---
## strm delete data-subjects

Delete data subjects

### Synopsis

Deletes 1 or more data subjects from the Data Subjects Service.

Returns the number of deleted key links that were associated with these data subjects.


```
strm delete data-subjects <data-subject-id>... [flags]
```

### Options

```
  -h, --help   help for data-subjects
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

* [strm delete](/04-reference/01-cli-reference/strm/delete/index.md)	 - Delete an entity

