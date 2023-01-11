---
title: "monitor"
hide_title: true
---
## strm monitor

Monitor STRM entities

### Options

```
  -h, --help   help for monitor
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

* [strm](docs/04-reference/01-cli-reference/strm/index.md)	 - STRM Privacy CLI 3.7.1
* [strm monitor all](docs/04-reference/01-cli-reference/strm/monitor/all.md)	 - monitor all entity types
* [strm monitor batch-exporter](docs/04-reference/01-cli-reference/strm/monitor/batch-exporter.md)	 - monitor entities of type batch-exporter
* [strm monitor batch-job](docs/04-reference/01-cli-reference/strm/monitor/batch-job.md)	 - monitor entities of type batch-job
* [strm monitor stream](docs/04-reference/01-cli-reference/strm/monitor/stream.md)	 - monitor entities of type stream

