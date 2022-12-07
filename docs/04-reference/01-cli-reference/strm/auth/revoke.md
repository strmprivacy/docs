---
title: "revoke"
hide_title: true
---
## strm auth revoke

Revoke

### Synopsis

Revoke your current login session and stored credentials.

```
strm auth revoke [flags]
```

### Options

```
  -h, --help   help for revoke
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

* [strm auth](docs/04-reference/01-cli-reference/strm/auth/index.md)	 - Authentication command

