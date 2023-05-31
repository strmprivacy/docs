---
title: "purpose-mapping"
hide_title: true
---
## strm get purpose-mapping

Get a purpose mapping by the integer value

```
strm get purpose-mapping (value) [flags]
```

### Examples

```
strm get purpose-mapping 0

 PURPOSE MAPPING   VALUE   DESCRIPTION

 Legitimate Interest   2
```

### Options

```
  -h, --help   help for purpose-mapping
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

* [strm get](docs/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity

