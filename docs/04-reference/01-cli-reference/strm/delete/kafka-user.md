---
title: "kafka-user"
hide_title: true
---
## strm delete kafka-user

Delete one or more Kafka Users

### Synopsis

Delete one or more Kafka Users by 'name'
Names are randomly assigned during creation and cannot be chosen.

```
strm delete kafka-user (name ...) [flags]
```

### Options

```
  -h, --help   help for kafka-user
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm delete](docs/04-reference/01-cli-reference/strm/delete/index.md)	 - Delete an entity

