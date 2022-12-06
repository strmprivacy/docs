---
title: "info"
hide_title: true
---
## strm context info

Show the stored information for a saved entity

### Synopsis

Shows information of entities that have been saved with the --save option
use tab-completion for easy access.

One can see the file-system path, or the entity json contents depending on the output format flag.
Note that these entities do not necessarily still exist on the STRM service. They don't get automatically
removed if for instance you deleted an entity via another client.


```
strm context info (entity-reference) [flags]
```

### Examples

```
strm context info Stream/demo1
```

### Options

```
  -h, --help            help for info
  -o, --output string   entity information output format [json, json-raw, path] (default "path")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm context](docs/04-reference/01-cli-reference/strm/context/index.md)	 - Print the CLI context

