---
title: "batch-job"
hide_title: true
---
## strm logs batch-job

show logs for entity of type batch-job

### Synopsis

View logs for an entity if available. Logs are collected for SaaS by default. For self-hosted Data Planes,
logs are only collected if enabled.

### Usage

```
strm logs batch-job (name) [flags]
```

### Options

```
      --follow          continuously show new logs for this entity
  -h, --help            help for batch-job
  -o, --output string   logs output format [plain] (default "plain")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm logs](docs/04-reference/01-cli-reference/strm/logs/index.md)	 - Show logs of STRM entities

