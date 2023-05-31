---
title: "purpose-mapping"
hide_title: true
---
## strm create purpose-mapping

Create a purpose mapping

### Synopsis

A purpose mapping is a mapping between a name and an integer value. This integer value is automatically assigned to
the name when creating a new purpose mapping. The mapping is intended to make it easier to work with purposes when
creating data contracts and streams. The integer value that the purpose mapping is assigned to is used in the
actual transport / creation of events, as an integer value is more efficient to transport than a string.

Please note that purpose mappings cannot be deleted once created. This is to ensure that the integer values are
linked to one and only one purpose mapping, and the purpose remains the same for derived streams that use it.

### Usage

```
strm create purpose-mapping (name) [flags]
```

### Examples

```

strm create purpose-mapping "Legitimate Interest"

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
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity

