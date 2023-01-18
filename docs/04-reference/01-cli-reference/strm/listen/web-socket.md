---
title: "web-socket"
hide_title: true
---
## strm listen web-socket

Read events via the web-socket (not for production purposes)

### Synopsis

Listens to the web-socket debug endpoint to receive format events on streams transformed to json.

Note that this is not meant for production purposes. There's no access to the underlying Kafka consumer
and no performance guarantees.

### Usage

```
strm listen web-socket (stream-name) [flags]
```

### Examples

```
# Simulate some events
strm create stream test
strm simulate random-events test
Starting to simulate random strmprivacy/example/1.5.0 events to stream test. Sending one event every 1000 ms.
Sent 5 events
Sent 10 events

# And in another terminal

strm listen web-socket test
{"strmMeta": {"eventContractRef": "strmprivacy/example/1.5.0", "nonce": 1782462093, "timestamp": 1669990806395, "keyLink": "e6f...
{"strmMeta": {"eventContractRef": "strmprivacy/example/1.5.0", "nonce": 1159687711, "timestamp": 1669990807404, "keyLink": "b58...
{"strmMeta": {"eventContractRef": "strmprivacy/example/1.5.0", "nonce": -192240390, "timestamp": 1669990808413, "keyLink": "ba0...
```

### Options

```
      --client-id string        client id to be used for receiving data
      --client-secret string    client secret to be used for receiving data
  -h, --help                    help for web-socket
      --web-socket-url string   websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
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

* [strm listen](docs/04-reference/01-cli-reference/strm/listen/index.md)	 - Listen for events on a stream

