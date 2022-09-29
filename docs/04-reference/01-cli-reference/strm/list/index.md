---
title: "list"
hide_title: true
---
## strm list

List entities

### Options

```
  -h, --help        help for list
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 2.17.4
* [strm list batch-exporters](docs/04-reference/01-cli-reference/strm/list/batch-exporters.md)	 - List Batch exporters
* [strm list batch-jobs](docs/04-reference/01-cli-reference/strm/list/batch-jobs.md)	 - List Batch Jobs
* [strm list data-connectors](docs/04-reference/01-cli-reference/strm/list/data-connectors.md)	 - List Data Connectors
* [strm list data-contracts](docs/04-reference/01-cli-reference/strm/list/data-contracts.md)	 - List Data Contracts
* [strm list data-subject-keylinks](docs/04-reference/01-cli-reference/strm/list/data-subject-keylinks.md)	 - List data subjects keylinks
* [strm list data-subjects](docs/04-reference/01-cli-reference/strm/list/data-subjects.md)	 - List a page of data subjects
* [strm list event-contracts](docs/04-reference/01-cli-reference/strm/list/event-contracts.md)	 - List Event Contracts
* [strm list installations](docs/04-reference/01-cli-reference/strm/list/installations.md)	 - List your installations
* [strm list kafka-clusters](docs/04-reference/01-cli-reference/strm/list/kafka-clusters.md)	 - List Kafka clusters
* [strm list kafka-exporters](docs/04-reference/01-cli-reference/strm/list/kafka-exporters.md)	 - List Kafka exporters
* [strm list kafka-users](docs/04-reference/01-cli-reference/strm/list/kafka-users.md)	 - List Kafka users
* [strm list key-streams](docs/04-reference/01-cli-reference/strm/list/key-streams.md)	 - List key streams
* [strm list members](docs/04-reference/01-cli-reference/strm/list/members.md)	 - List all members of your organization or active project
* [strm list projects](docs/04-reference/01-cli-reference/strm/list/projects.md)	 - List all projects you have access to
* [strm list schemas](docs/04-reference/01-cli-reference/strm/list/schemas.md)	 - List schemas
* [strm list streams](docs/04-reference/01-cli-reference/strm/list/streams.md)	 - List streams

