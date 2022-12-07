---
title: "stream"
hide_title: true
---
## strm create stream

Create a Stream

### Synopsis

A stream is a pipeline implementation in STRM Privacy using streaming technology (Kafka).

Events are sent to the "Event Gateway" into an "Input Stream", where *all* personal data event attributes are encrypted
after validating that the event conforms to a data contract. "Privacy Streams" are derived from input streams.

A derived "Privacy Stream" is configured with one or more consent levels and it only receives events matching those
consent levels. The PII attributes with matching consent are decrypted, while non-matching attributes remain encrypted.

Every stream has its own set of access tokens. Connecting to an input stream requires different credentials than when
connecting to a derived Privacy Stream.

### Usage

```
strm create stream (name) [flags]
```

### Examples

```

strm create stream test

A name is not required for a derived stream; when absent it will be created from the derived stream
and the consent-levels.

strm create stream --derived-from test --levels 1,3,8 --consent-type GRANULAR test-marketing

```

### Options

```
      --consent-type string         CUMULATIVE or GRANULAR (default "CUMULATIVE")
  -D, --derived-from string         name of stream that this stream is derived from
      --description string          description of this stream
  -h, --help                        help for stream
  -L, --levels int32Slice           comma separated list of integers for derived streams (default [])
      --mask-seed string            a seed used for masking
  -M, --masked-fields stringArray   -M strmprivacy/example/1.3.0:sensitiveValue,consistentValue \
                                    -M strmprivacy/clickstream/1.0.0:sessionId
                                    
                                    Masks fields values in the output stream via hashing.
                                    	
      --policy-id string            the uuid of the policy to attach
      --policy-name string          the name of the policy to attach
      --save                        if true, save the credentials in ~/.config/strmprivacy/saved-entities. (default true)
      --tags strings                a list of tags for this stream
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

