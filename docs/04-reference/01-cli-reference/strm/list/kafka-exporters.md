---
title: "kafka-exporters"
hide_title: true
---
## strm list kafka-exporters

List Kafka exporters

### Synopsis

A Kafka Exporter, like a Batch Exporter, can be used to export events from Stream Machine to somewhere outside of STRM
Privacy. But in contrast to a Batch Exporter, a Kafka Exporter does not work in batches, but processes the events in
real time.

The Kafka exporter produces your events in JSON format, even when originally in Avro binary for easier
downstream processing.

### Usage

```
strm list kafka-exporters [flags]
```

### Examples

```
Somewhat shortened.

strm list kafka-exporters -o json
{
    "kafkaExporters": [
        {
            "ref": {
                "name": "shared-export-austindemo"
            },
            "streamRef": {
                "name": "austindemo"
            },
            "target": {
                "clusterRef": {
                    "name": "shared-export"
                },
                "topic": "export-c42dc1f5-43f9-4672-8ddc-8865df355ea9"
            }
        },
        ...
    ]
}
```

### Options

```
  -h, --help   help for kafka-exporters
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

