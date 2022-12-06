---
title: "print-access-token"
hide_title: true
---
## strm auth print-access-token

Print your current access-token to stdout

### Synopsis

Print the current (JWT) access token to the terminal that can be used in a http header. Note that the token is printed
on `stdout`, and the Expiry on `stderr` so it’s easy to capture the token for scripting use with

```bash
export token=$(strm auth print-access-token)
```

Note that this token might be expired, so a refresh may be required. Use token as follows:
'Authorization: Bearer &lt;token&gt;'

### Usage

```
strm auth print-access-token [flags]
```

### Options

```
  -h, --help   help for print-access-token
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

