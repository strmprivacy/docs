---
title: "listen"
hide_title: true
---
## strm listen

Listen for events on a stream

### Options

```
  -h, --help   help for listen
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.12.0
* [strm listen kafka](docs/04-reference/01-cli-reference/strm/listen/kafka.md)	 - Read events via the kafka consumer (not for production purposes)
* [strm listen web-socket](docs/04-reference/01-cli-reference/strm/listen/web-socket.md)	 - Read events via the web-socket (not for production purposes)

