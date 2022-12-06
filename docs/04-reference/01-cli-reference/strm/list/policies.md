---
title: "policies"
hide_title: true
---
## strm list policies

list all policies belonging to this organization

### Synopsis

List the Policies owned by this organization

```
strm list policies [flags]
```

### Examples

```
strm list policies
 NAME            DESCRIPTION    RETENTION(DAYS)   LEGAL GROUNDS           STATE

 1 year                                     365                    STATE_DRAFT
 2 long years    2 whole years              730   GDPR             STATE_ACTIVE
```

### Options

```
  -h, --help            help for policies
  -o, --output string   output format [plain, table, json, json-raw] (default "table")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

