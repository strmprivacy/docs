---
title: "auth"
hide_title: true
---
## strm auth

Authentication command

### Options

```
  -h, --help   help for auth
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.16.1
* [strm auth login](docs/04-reference/01-cli-reference/strm/auth/login.md)	 - Login
* [strm auth print-access-token](docs/04-reference/01-cli-reference/strm/auth/print-access-token.md)	 - Print your current access-token to stdout
* [strm auth revoke](docs/04-reference/01-cli-reference/strm/auth/revoke.md)	 - Revoke
* [strm auth show](docs/04-reference/01-cli-reference/strm/auth/show.md)	 - Show your current login credentials

