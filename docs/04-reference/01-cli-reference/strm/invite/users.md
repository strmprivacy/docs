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
strm invite users (email,...) [flags]
```

### Options

```
  -h, --help                      help for users
  -f, --user-emails-file string   file with users to invite, one email per line
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

* [strm invite](docs/04-reference/01-cli-reference/strm/invite/index.md)	 - Invite users to your organization

