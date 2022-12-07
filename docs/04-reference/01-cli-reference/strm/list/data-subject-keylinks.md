---
title: "data-subject-keylinks"
hide_title: true
---
## strm list data-subject-keylinks

List Data Subjects and their associated Key Links

### Synopsis

Retrieve Key Links associated with Data Subjects

```
strm list data-subject-keylinks (data-subject-id...) [flags]
```

### Options

```
  -h, --help   help for data-subject-keylinks
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

