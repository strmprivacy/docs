---
title: "users"
hide_title: true
---
## strm invite users

Invite users to your organization by email

### Synopsis

Invite one or more users to your organization, by email.

Either provide the emails comma-separated on the command line, or pass a file
with the -f flag containing one email address per line.

### Usage

```
strm invite users [first-email,second-email,...] [flags]
```

### Options

```
  -h, --help                      help for users
  -f, --user-emails-file string   file with users to invite, one email per line
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

* [strm invite](/04-reference/01-cli-reference/strm/invite/index.md)	 - Invite users to your organization

