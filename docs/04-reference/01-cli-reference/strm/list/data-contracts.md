---
title: "data-contracts"
hide_title: true
---
## strm list data-contracts

List Data Contracts

### Synopsis

Data Contracts are the core of STRM Privacy.
See [here](https://docs.strmprivacy.io/docs/latest/concepts/data-contracts/) for details

### Usage

```
strm list data-contracts [flags]
```

### Options

```
  -h, --help   help for data-contracts
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

