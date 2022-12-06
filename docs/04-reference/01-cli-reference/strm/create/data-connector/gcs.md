---
title: "gcs"
hide_title: true
---
## strm create data-connector gcs

Create a Data Connector for a Google Cloud Storage Bucket

### Synopsis

Creates a data connector for a Google Cloud Storage bucket. Service account credentials are required.

### Usage

```
strm create data-connector gcs (data-connector-name) (bucket-name) [flags]
```

### Options

```
      --credentials-file string   file with service account JSON key credentials
  -h, --help                      help for gcs
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

* [strm create data-connector](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md)	 - Create a Data Connector

