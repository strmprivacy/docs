---
title: "key-streams"
hide_title: true
---
## strm list key-streams

List Key Streams

### Synopsis

Key Streams are a restricted feature. For now, enabling and disabling key streams can not be done through the Console or
CLI. Contact us for more information if this feature interests you.

[Key Stream documentation](https://docs.strmprivacy.io/docs/latest/quickstart/streaming/receiving-data/exporting-keys/#create-an-exporter)


A Key Stream can be enabled on a stream and it contains all encryption keys that are used on this stream. Normally STRM
Privacy fully manages and stores the encryption keys that are used, but with a key stream, clients can get access to the
keys and decrypt events themselves.

Usage of key streams places a lot more responsibility in the hands of the client, so this feature requires careful
consideration before using.

With regard to the data flow, STRM Privacy generates a new encryption key whenever an event with a new "event sequence
identifier" (which can be seen as a "session" concept, in that it links separate events together) is received. This
encryption key is stored internally, rotated after a certain period and, if there is a key stream, put on the Key Stream
approximately at the same time as the event is put on the input stream.

### Usage

```
strm list key-streams [flags]
```

### Options

```
  -h, --help   help for key-streams
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

