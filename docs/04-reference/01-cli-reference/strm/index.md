---
title: "strm"
hide_title: true
---
## strm

STRM Privacy CLI 2.15.1

### Options

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
  -h, --help                           help for strm
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm activate](/04-reference/01-cli-reference/strm/activate/index.md)	 - Set the state of an entity to ACTIVATED
* [strm archive](/04-reference/01-cli-reference/strm/archive/index.md)	 - Set the state of an entity to ARCHIVED
* [strm auth](/04-reference/01-cli-reference/strm/auth/index.md)	 - Authentication command
* [strm completion](/04-reference/01-cli-reference/strm/completion.md)	 - Generate completion script
* [strm context](/04-reference/01-cli-reference/strm/context/index.md)	 - Print the CLI context
* [strm create](/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity
* [strm delete](/04-reference/01-cli-reference/strm/delete/index.md)	 - Delete an entity
* [strm get](/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity
* [strm invite](/04-reference/01-cli-reference/strm/invite/index.md)	 - Invite users to your organization
* [strm list](/04-reference/01-cli-reference/strm/list/index.md)	 - List entities
* [strm listen](/04-reference/01-cli-reference/strm/listen/index.md)	 - Listen for events on a stream
* [strm manage](/04-reference/01-cli-reference/strm/manage/index.md)	 - Manage a project or organization
* [strm simulate](/04-reference/01-cli-reference/strm/simulate/index.md)	 - Send simulated events with a predefined demo schema (not for production purposes)
* [strm version](/04-reference/01-cli-reference/strm/version.md)	 - Print CLI version

