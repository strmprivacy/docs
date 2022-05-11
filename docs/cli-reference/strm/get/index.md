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
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm](/cli-reference/strm/index.md)	 - STRM Privacy CLI 2.0.4
* [strm get batch-exporter](/cli-reference/strm/get/batch-exporter.md)	 - Get Batch exporter by name
* [strm get batch-job](/cli-reference/strm/get/batch-job.md)	 - Get a Batch Job by id
* [strm get data-connector](/cli-reference/strm/get/data-connector.md)	 - Get Data Connector by name
* [strm get event-contract](/cli-reference/strm/get/event-contract.md)	 - Get Event Contract by reference
* [strm get installation](/cli-reference/strm/get/installation.md)	 - Get your installation by id
* [strm get kafka-cluster](/cli-reference/strm/get/kafka-cluster.md)	 - Get Kafka cluster by name
* [strm get kafka-exporter](/cli-reference/strm/get/kafka-exporter.md)	 - Get Kafka exporter by name
* [strm get kafka-user](/cli-reference/strm/get/kafka-user.md)	 - Get Kafka user
* [strm get key-stream](/cli-reference/strm/get/key-stream.md)	 - Get key stream by name
* [strm get schema](/cli-reference/strm/get/schema.md)	 - Get schema by name
* [strm get schema-code](/cli-reference/strm/get/schema-code.md)	 - Get schema code archive by schema-ref
* [strm get stream](/cli-reference/strm/get/stream.md)	 - Get stream by name
* [strm get usage](/cli-reference/strm/get/usage.md)	 - Get Usage for a certain stream name

