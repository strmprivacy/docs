---
title: "purpose-mappings"
hide_title: true
---
## strm list purpose-mappings

List purpose mappings

```
strm list purpose-mappings [flags]
```

### Examples

```
strm list purpose-mappings

 PURPOSE MAPPING   VALUE   DESCRIPTION

 Marketing             1
 Legitimate Interest   2
```

### Options

```
  -h, --help   help for purpose-mappings
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

