---
title: "kafka-users"
hide_title: true
---
## strm list kafka-users

List Kafka Users

### Synopsis

A Kafka User is a user on a Kafka Exporter, that can be used for authentication when connecting to a Kafka Exporter. By
default, every Kafka Exporter gets one Kafka User upon creation, but these can be added/removed later.

In the current data model, the user does not have a assignable name; it is assigned upon creation.

### Usage

```
strm list kafka-users (kafka-exporter-name) [flags]
```

### Options

```
  -h, --help   help for kafka-users
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

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

