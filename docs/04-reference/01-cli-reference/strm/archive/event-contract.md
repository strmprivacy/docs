---
title: "event-contract"
hide_title: true
---
## strm archive event-contract

Set the state of an Event Contract to ARCHIVED

### Synopsis

An Event Contract defines the rules that are to be applied to events.

The Event Contract defines:

- the Schema to use via a full Schema reference (handle/name/version)

- the key field

- the PII fields

- any validations on fields (e.g. a regex to validate an email address)

Like Schemas, Event Contracts can be private or public, allowing them to be found and used by others than the owning
client. Be careful, public Event Contracts cannot be deleted.

Also like Schemas, Event Contracts are versioned using a versioning scheme that can be fully determined by the client.
The only restrictions are that version numbers:

- MUST follow the semantic version format (major/minor/patch),

- MUST always be ascending

An Event Contract is uniquely identified by its Event Contract reference, in the format (organization handle/event
contract name/version).

An Event Contract MUST have the state ACTIVE to be used for processing events.

### Usage


```
strm archive event-contract (reference) [flags]
```

### Options

```
  -h, --help   help for event-contract
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

* [strm archive](/04-reference/01-cli-reference/strm/archive/index.md)	 - Set the state of an entity to ARCHIVED

