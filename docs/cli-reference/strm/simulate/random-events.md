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
      --events-api-url string    Endpoint to send events to (default "https://events.strmprivacy.io/event")
  -h, --help                     help for random-events
      --interval int             Interval in ms. between simulated events (default 1000)
      --quiet                    Do not print to stderr
      --session-prefix string    Prefix string for sessions (default "session")
      --session-range int        Number of different sessions being generated (default 1000)
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
      --schema string                  Which schema to use for creating simulated events (default "strmprivacy/demo/1.0.2")
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm simulate](/cli-reference/strm/simulate/index.md)	 - Send simulated events with a predefined demo schema (not for production purposes)

