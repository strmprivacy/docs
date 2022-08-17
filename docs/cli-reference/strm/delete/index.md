---
title: "delete"
hide_title: true
---
## strm delete

Delete an entity

### Options

```
  -h, --help        help for delete
  -r, --recursive   Retrieve entities and their dependents
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
* [strm delete batch-exporter](/cli-reference/strm/delete/batch-exporter.md)	 - Delete one or more Batch exporters by name
* [strm delete batch-job](/cli-reference/strm/delete/batch-job.md)	 - Delete on or more Batch Jobs by id
* [strm delete data-connector](/cli-reference/strm/delete/data-connector.md)	 - Delete Data Connectors
* [strm delete data-subjects](/cli-reference/strm/delete/data-subjects.md)	 - Delete data subjects
* [strm delete event-contract](/cli-reference/strm/delete/event-contract.md)	 - Delete Event Contract by reference
* [strm delete kafka-exporter](/cli-reference/strm/delete/kafka-exporter.md)	 - Delete a Kafka exporter
* [strm delete kafka-user](/cli-reference/strm/delete/kafka-user.md)	 - Delete one or more Kafka users
* [strm delete schema](/cli-reference/strm/delete/schema.md)	 - Delete Schema by reference
* [strm delete stream](/cli-reference/strm/delete/stream.md)	 - Delete one or more streams

