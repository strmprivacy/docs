---
title: "get"
hide_title: true
---
## strm get

Get an entity

### Options

```
  -h, --help        help for get
  -r, --recursive   Retrieve entities and their dependents
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 2.18.0
* [strm get batch-exporter](docs/04-reference/01-cli-reference/strm/get/batch-exporter.md)	 - Get Batch exporter by name
* [strm get batch-job](docs/04-reference/01-cli-reference/strm/get/batch-job.md)	 - Get a Batch Job by id
* [strm get data-connector](docs/04-reference/01-cli-reference/strm/get/data-connector.md)	 - Get Data Connector by name
* [strm get data-contract](docs/04-reference/01-cli-reference/strm/get/data-contract.md)	 - Get Event Contract by reference
* [strm get event-contract](docs/04-reference/01-cli-reference/strm/get/event-contract.md)	 - Get Event Contract by reference
* [strm get installation](docs/04-reference/01-cli-reference/strm/get/installation.md)	 - Get your installation by id
* [strm get kafka-cluster](docs/04-reference/01-cli-reference/strm/get/kafka-cluster.md)	 - Get Kafka cluster by name
* [strm get kafka-exporter](docs/04-reference/01-cli-reference/strm/get/kafka-exporter.md)	 - Get Kafka exporter by name
* [strm get kafka-user](docs/04-reference/01-cli-reference/strm/get/kafka-user.md)	 - Get Kafka user
* [strm get key-stream](docs/04-reference/01-cli-reference/strm/get/key-stream.md)	 - Get key stream by name
* [strm get project](docs/04-reference/01-cli-reference/strm/get/project.md)	 - Get a project
* [strm get schema](docs/04-reference/01-cli-reference/strm/get/schema.md)	 - Get schema by name
* [strm get schema-code](docs/04-reference/01-cli-reference/strm/get/schema-code.md)	 - Get schema code archive by schema-ref
* [strm get stream](docs/04-reference/01-cli-reference/strm/get/stream.md)	 - Get stream by name
* [strm get usage](docs/04-reference/01-cli-reference/strm/get/usage.md)	 - Get Usage for a certain stream name
* [strm get user](docs/04-reference/01-cli-reference/strm/get/user.md)	 - Get a member of your organization

