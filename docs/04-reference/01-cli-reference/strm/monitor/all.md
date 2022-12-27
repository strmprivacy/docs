---
title: "all"
hide_title: true
---
## strm monitor all

monitor all entity types

### Synopsis

View states for an entity. Can be used to determine why certain entities are not behaving as expected.

### Usage

```
strm monitor all [flags]
```

### Options

```
      --follow          continuously monitor these events
  -h, --help            help for all
  -o, --output string   monitor output format, follow specified=[plain, json, json-raw], default=[table, plain, json, json-raw] (default "table")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm monitor](docs/04-reference/01-cli-reference/strm/monitor/index.md)	 - Monitor STRM entities

