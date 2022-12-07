---
title: "login"
hide_title: true
---
## strm auth login

Login

### Synopsis

Log a user in using its Console credentials and save the login token to disk,
to allow the CLI access to the STRM Privacy APIs.

```
strm auth login [flags]
```

### Options

```
  -h, --help   help for login
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

