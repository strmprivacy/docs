---
title: "simulate"
hide_title: true
---
## strm simulate

Send simulated events with a predefined demo schema (not for production purposes)

### Options

```
  -h, --help            help for simulate
      --schema string   Which schema to use for creating simulated events (default "strmprivacy/example/1.5.0")
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.11.0
* [strm simulate random-events](docs/04-reference/01-cli-reference/strm/simulate/random-events.md)	 - Run a simulator that will send random events to a stream

