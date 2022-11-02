---
title: "policy"
hide_title: true
---
## strm get policy

Get Policy by name or id

### Synopsis

Get a policy by name or by --id=policy-id

```
strm get policy [name] [flags]
```

### Examples

```
strm get policy "1 year" or strm get policy --id=34c4709e-b8bc-4b45-aa5a-883f471869e3
```

### Options

```
      --get-default-policy   get the no-name/no-id default policy
  -h, --help                 help for policy
      --id string            policy id
  -o, --output string        output format [plain, json, json-raw] (default "plain")
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -p, --project string                 Project to use (defaults to context-configured project)
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm get](docs/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity

