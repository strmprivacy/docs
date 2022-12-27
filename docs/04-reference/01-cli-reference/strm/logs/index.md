---
title: "logs"
hide_title: true
---
## strm logs

Show logs of STRM entities

### Options

```
  -h, --help   help for logs
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.6.0
* [strm logs batch-exporter](docs/04-reference/01-cli-reference/strm/logs/batch-exporter.md)	 - show logs for entity of type batch-exporter
* [strm logs batch-job](docs/04-reference/01-cli-reference/strm/logs/batch-job.md)	 - show logs for entity of type batch-job
* [strm logs stream](docs/04-reference/01-cli-reference/strm/logs/stream.md)	 - show logs for entity of type stream

