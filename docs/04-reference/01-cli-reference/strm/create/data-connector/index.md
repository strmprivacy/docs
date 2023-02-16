---
title: "data-connector"
hide_title: true
---
## strm create data-connector

Create a Data Connector

### Synopsis

A Data Connector represents a location from which data can be read, or to which data can be written.  For
example, an AWS S3 bucket, a Google Cloud Storage bucket or a JDBC database connection. By itself, a Data Connector does nothing.  A Data Connector
with valid credentials is required when creating a Batch Exporter or Batch Job.

### Usage

### Options

```
  -h, --help   help for data-connector
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

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity
* [strm create data-connector azure-blob-storage](docs/04-reference/01-cli-reference/strm/create/data-connector/azure-blob-storage.md)	 - Create a Data Connector for an Azure Blob Storage Container
* [strm create data-connector gcs](docs/04-reference/01-cli-reference/strm/create/data-connector/gcs.md)	 - Create a Data Connector for a Google Cloud Storage Bucket
* [strm create data-connector jdbc](docs/04-reference/01-cli-reference/strm/create/data-connector/jdbc.md)	 - Create a Data Connector for jdbc database
* [strm create data-connector s3](docs/04-reference/01-cli-reference/strm/create/data-connector/s3.md)	 - Create a Data Connector for an AWS S3 Bucket

