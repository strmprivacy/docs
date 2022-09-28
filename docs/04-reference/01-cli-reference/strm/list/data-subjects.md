---
title: "data-subjects"
hide_title: true
---
## strm list data-subjects

List a page of data subjects

### Synopsis

Query the Data Subjects service for a list of data-subjects.

Returns paginated data. If one page of data has following pages, its 'next_page_token'
field must be added to the following call via the '--page-token' flag.


```
strm list data-subjects [flags]
```

### Options

```
  -h, --help                help for data-subjects
      --page-size int32     maximum number of items to be returned
      --page-token string   page token to be entered for next page.
                            Use the nextPageToken (if any) returned from the previous call
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")
      --project string                 Project to use (defaults to context-configured project)
  -r, --recursive                      Retrieve entities and their dependents
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

