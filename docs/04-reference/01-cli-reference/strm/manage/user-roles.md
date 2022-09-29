---
title: "user-roles"
hide_title: true
---
## strm manage user-roles

Change user roles.

### Synopsis

Changes the user roles for the given users. 
All users in the request get all roles specified. Users are specified by their email address.
Possible roles: admin, approver, project-admin, member

```
strm manage user-roles [flags]
```

### Options

```
  -h, --help            help for user-roles
  -r, --roles strings   All roles all users will get
  -u, --users strings   Users by email for which roles should be changed
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

* [strm manage](docs/04-reference/01-cli-reference/strm/manage/index.md)	 - Manage a project or organization

