---
title: "random-events"
hide_title: true
---
## strm simulate random-events

Run a simulator that will send random events to a stream

### Synopsis

The global `simulate` command runs a simulation with random events against a given Source Stream, using the ClickStream
schema.

### Usage

```
strm simulate random-events [stream-name] [flags]
```

### Options

```
      --consent-levels strings   consent levels to be simulated (default [,0,0/1,0/1/2,0/1/2/3])
      --events-api-url string    endpoint to send events to (default "https://events.strmprivacy.io/event")
  -h, --help                     help for random-events
      --interval int             interval in ms. between simulated events (default 1000)
      --quiet                    do not print to stderr
      --session-prefix string    prefix string for sessions (default "session")
      --session-range int        number of different sessions being generated (default 1000)
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --schema string         Which schema to use for creating simulated events (default "strmprivacy/example/1.3.0")
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm simulate](docs/04-reference/01-cli-reference/strm/simulate/index.md)	 - Send simulated events with a predefined demo schema (not for production purposes)

