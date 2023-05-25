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
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.14.1
* [strm delete batch-exporter](docs/04-reference/01-cli-reference/strm/delete/batch-exporter.md)	 - Delete one or more Batch Exporters by name
* [strm delete batch-job](docs/04-reference/01-cli-reference/strm/delete/batch-job.md)	 - Delete one or more Batch Jobs by id
* [strm delete data-connector](docs/04-reference/01-cli-reference/strm/delete/data-connector.md)	 - Delete one or more Data Connectors by name
* [strm delete data-contract](docs/04-reference/01-cli-reference/strm/delete/data-contract.md)	 - Delete Data Contract by reference
* [strm delete data-subjects](docs/04-reference/01-cli-reference/strm/delete/data-subjects.md)	 - Delete Data Subjects
* [strm delete kafka-exporter](docs/04-reference/01-cli-reference/strm/delete/kafka-exporter.md)	 - Delete a Kafka Exporter
* [strm delete kafka-user](docs/04-reference/01-cli-reference/strm/delete/kafka-user.md)	 - Delete one or more Kafka Users
* [strm delete policy](docs/04-reference/01-cli-reference/strm/delete/policy.md)	 - Delete Policy by name or id
* [strm delete project](docs/04-reference/01-cli-reference/strm/delete/project.md)	 - Delete a project and all associated resources
* [strm delete stream](docs/04-reference/01-cli-reference/strm/delete/stream.md)	 - Delete one or more Streams

