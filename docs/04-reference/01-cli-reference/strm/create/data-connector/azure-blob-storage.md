---
title: "azure-blob-storage"
hide_title: true
---
## strm create data-connector azure-blob-storage

Create a Data Connector for an Azure Blob Storage Container

### Synopsis

Creates a data connector for an Azure Blob Storage container. Authentication is based on
Client Secret Credentials, i.e. of an Application Principal.

### Usage

```
strm create data-connector azure-blob-storage [data-connector-name] [container-name] [flags]
```

### Options

```
      --client-id string             client ID of the application principal's client secret credentials
      --client-secret string         client secret of the application principal's client secret credentials
  -h, --help                         help for azure-blob-storage
      --storage-account-uri string   full URI of the Azure Storage account, e.g. "https://myaccount.blob.core.windows.net"
      --tenant-id string             tenant ID of the application principal's client secret credentials
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm create data-connector](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md)	 - Create a Data Connector

