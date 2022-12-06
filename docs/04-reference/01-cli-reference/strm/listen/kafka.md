---
title: "kafka"
hide_title: true
---
## strm listen kafka

Read events via the kafka consumer (not for production purposes)

```
strm listen kafka (kafka-exporter-name) [flags]
```

### Options

```
      --client-id string               client id to be used for receiving data
      --client-secret string           client secret to be used for receiving data
      --group-id string                kafka consumer group id. Uses a random value when not set
  -h, --help                           help for kafka
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm listen](docs/04-reference/01-cli-reference/strm/listen/index.md)	 - Listen for events on a stream

