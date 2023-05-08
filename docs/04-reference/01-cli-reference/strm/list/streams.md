---
title: "streams"
hide_title: true
---
## strm list streams

List Streams

```
strm list streams [flags]
```

### Examples

```
strm list streams
 STREAM              DERIVED   PURPOSES   ENABLED   POLICY NAME

 e-commerce-masked   true      [1]        true
 ecommerce-1         true      [1]        true
 ecommerce           false     []         true
 ecommerce-2         true      [2]        true
 demo                false     []         true
 demo-0-1            true      [0 1]      true
```

### Options

```
  -h, --help   help for streams
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

