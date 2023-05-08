---
title: "stream"
hide_title: true
---
## strm create stream

Create a Stream

### Synopsis

A stream is a pipeline implementation in STRM Privacy using streaming technology (Kafka).

Events are sent through the "Event Gateway" to a "Source Stream", where *all* sensitive (personal) data event attributes are encrypted
after validating that the event conforms to a data contract. "Privacy Streams" are derived from source streams.

A derived "Privacy Stream" is configured for one or more specific purposes. It only receives events that are allowed
to be processed for the configured purposes. The sensitive attributes matching those purposes are decrypted, while 
non-matching attributes remain encrypted.

Every stream has its own set of access tokens. Connecting to a source stream (i.e. sending events) requires different 
credentials than connecting to a derived Privacy Stream.

### Usage

```
strm create stream (name) [flags]
```

### Examples

```

strm create stream test

A name is not required for a derived stream; when absent a name will be created based on the source stream
and the provided purposes.

strm create stream --derived-from test --purposes 1,3,8 test-marketing

```

### Options

```
  -D, --derived-from string         name of stream that this stream is derived from
      --description string          description of this stream
  -h, --help                        help for stream
      --mask-seed string            a seed used for masking
  -M, --masked-fields stringArray   -M strmprivacy/example/1.5.0:sensitiveValue,consistentValue \
                                    -M strmprivacy/clickstream/1.0.0:sessionId
                                    
                                    Masks fields values in the output stream via hashing.
                                    	
      --policy-id string            the uuid of the policy to attach
      --policy-name string          the name of the policy to attach
  -P, --purposes int32Slice         comma separated list of integers referring to purposes (only for derived streams) (default [])
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

