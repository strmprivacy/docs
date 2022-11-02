---
title: "create"
hide_title: true
---
## strm create

Create an entity

### Options

```
  -h, --help   help for create
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.1.0
* [strm create batch-exporter](docs/04-reference/01-cli-reference/strm/create/batch-exporter.md)	 - Create batch exporter
* [strm create batch-job](docs/04-reference/01-cli-reference/strm/create/batch-job.md)	 - Create a Batch Job
* [strm create data-connector](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md)	 - Create a Data Connector
* [strm create data-contract](docs/04-reference/01-cli-reference/strm/create/data-contract.md)	 - create a data contract
* [strm create kafka-exporter](docs/04-reference/01-cli-reference/strm/create/kafka-exporter.md)	 - Create a Kafka exporter
* [strm create kafka-user](docs/04-reference/01-cli-reference/strm/create/kafka-user.md)	 - Create a Kafka user on a Kafka exporter
* [strm create policy](docs/04-reference/01-cli-reference/strm/create/policy.md)	 - Create a Policy
* [strm create project](docs/04-reference/01-cli-reference/strm/create/project.md)	 - Create a new project
* [strm create stream](docs/04-reference/01-cli-reference/strm/create/stream.md)	 - Create a stream

