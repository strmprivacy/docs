---
title: "data-contract"
hide_title: true
---
## strm create data-contract

create a data contract

### Synopsis

### Usage

```
strm create data-contract (handle/name/version) [flags]
```

### Options

```
      --contract-definition string   The path to the file with the keyField, and possibly piiFields and validations. Example JSON definition file:
                                     {
                                         "keyField": "sessionId",
                                         "piiFields": {
                                             "sessionId": 2,
                                             "referrerUrl": 1
                                         },
                                         "validations": [
                                             {
                                                 "field": "referrerUrl",
                                                 "type": "regex",
                                                 "value": "^.*strmprivacy.*$"
                                             }
                                         ]
                                     }
  -h, --help                         help for data-contract
      --public                       whether the data contract should be made public (accessible to other STRM Privacy customers)
      --schema-definition string     filename of the schema definition (yaml or json) - either a Simple Schema, Avro Schema or Json Schema
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

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity

