---
title: "data-contract"
hide_title: true
---
## strm review data-contract

Set the state of a Data Contract to IN_REVIEW

### Synopsis

Data Contracts are the core of STRM Privacy.
See [here](https://docs.strmprivacy.io/docs/latest/concepts/data-contracts/) for details

### Usage

```
strm review data-contract (handle/name/version) [flags]
```

### Options

```
  -h, --help   help for data-contract
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

* [strm review](docs/04-reference/01-cli-reference/strm/review/index.md)	 - Set the state of an entity to IN_REVIEW

