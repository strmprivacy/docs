---
title: Creating Streams 
description: Streams are the start of sending and receiving data with STRM Privacy
hide_table_of_contents: false
---

See [Authentication with the CLI](docs/03-quickstart/06-authentication-cli.md)
page on how to authenticate.

## Creating a stream

A stream can be created as follows:
```json showLineNumbers
$ strm create stream demo -o json
{
  "ref": {
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "enabled": true,
  "limits": {
    "eventRate": "99",
    "eventCount": "999999"
  },
  "credentials": [
    {
      "clientId": "stream-ylbt4v9o6dvvc...",
      "clientSecret": "M0fBiQnKNXn*U...",
    }
  ],
  "maskedFields": {}
}
```

The `clientId` and `clientSecret` pair is what
identifies your stream when you send data to STRM Privacy. STRM Privacy
uses the OAuth 2.0 client credentials flow to generate a *bearer token*
that needs to be provided with each HTTP request. Our drivers have
tooling to create and refresh these tokens, but nothing prevents you
from creating the headers by hand (see [the page about sending data by hand](docs/03-quickstart/01-streaming/03-sending-data/02-sending-curl.md) 
to do this manually).

:::tip
Use the `--save` flag to store the credentials on your local machine in
`~/.config/strmprivacy/saved-entities/Stream/(stream-name).json`
:::

So with this you have enough information to start sending data to
[events.strmprivacy.io/event](https://events.strmprivacy.io/event). With
the same credentials you can connect to the [web-socket
endpoint](https://websocket.strmprivacy.io) with a websocket client to
receive the events as you send them. Use
`strm listen web-socket <stream-name> [--client-id .. --client-secret ..]`.
See [here](docs/03-quickstart/01-streaming/04-receiving-data/04-listen-web-socket.md) for details.

## Listing streams

Streams can be listed and will be shown as a table.

```bash
$ strm list streams
 STREAM           DERIVED   CONSENT LEVEL TYPE   CONSENT LEVELS   ENABLED

 demo      false                          []               true
```

To show more info, use the `--output` flag, and try out different
formats, such as `json`.
```json showLineNumbers
$ strm list streams --output json
{
    "streams": [
        {
            "stream": {
                "ref": {
                    "name": "demo",
                    "projectId": "30fcd008-9696-...."
                },
                "enabled": true,
                "limits": {
                    "eventRate": "99",
                    "eventCount": "999999"
                },
                "credentials": [
                    {
                        "clientId": "stream-ylbt4v9o6dvvc...",
                        "clientSecret": "M0fBiQnKNXn*U...",
                    }
                ],
                "maskedFields": {
                  "seed": "***"
                }
            }
        }
    ]
}
```

## Creating decrypted streams

If you want to have STRM Privacy decrypt data with certain consent
levels, you need to create an output stream.

```
$ strm create stream --help
Create a stream

Usage:
  strm create stream [flags]

Flags:
      --consent-type string   CUMULATIVE or GRANULAR (default "CUMULATIVE")
  -D, --derived-from string   name of stream that this stream is derived from
      --description string    description
  -h, --help                  help for stream
  -L, --levels int32Slice     comma separated list of integers for derived streams (default [])
      --tags strings          tags
```

So let’s create one, with two consent levels, and a *granular* consent
level type interpretation.
```json showLineNumbers
$ strm create stream --derived-from demo --levels 0,1 --consent-type GRANULAR -o json
{
  "stream": {
    "ref": {
      "name": "demo-0-1",
      "projectId": "30fcd008-9696-...."
    },
    "consentLevels": [ 0, 1 ],
    "consentLevelType": "GRANULAR",
    "enabled": true,
    "linkedStream": "demo",
    "credentials": [
      {
        "clientId": "stream-11jvxvpy1e6jl...",
        "clientSecret": "tJkhj8lT9ybAA...",
        "projectId": "30fcd008-9696-...."
      }
    ],
    "maskedFields": {}
  }
}
```

The derived stream is provided with a default name `demo-0-1`
because we did not provide an explicit name. If we had added a name
after the `strm create stream` we would have created a stream with that
name.

So the derived stream named `demo-0-1` captures data from
encrypted stream `demo`. It will
drop all events that don’t at least have consent levels 0 and 1 in the
event. Another way of defining decrypted streams is with consent level
type *cumulative*. This means that the decrypted stream is configured
with just one consent level, and it will accept all events that have at
least that consent level. It will decrypt PII fields up to and including
the decrypted stream consent level. *Cumulative* is the default for
creating derived streams.
```json showLineNumbers
$ strm delete stream demo-0-1 -o json
{
  "streamTree": {
    "stream": {
      "ref": { "name": "demo-0-1",     "projectId": "30fcd008-9696-...." },
      "consentLevels": [ 0, 1 ],
      "consentLevelType": "GRANULAR",
      "enabled": true,
      "limits": {},
      "linkedStream": "demo",
      "credentials": [ { "clientId": "stream-11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA..."} ],
      "maskedFields": { "seed": "****" }
    }
  }
}
```

Note the `streamTree` field might also contain all the items derived
from a source stream, like exporters.
```json showLineNumbers
$ strm create stream --derived-from demo --levels 1 -o json
{
  "ref": { "name": "demo-1", "projectId": "30fcd008-9696-...." },
  "consentLevels": [ 1 ],
  "consentLevelType": "CUMULATIVE",
  "enabled": true,
  "linkedStream": "demo",
  "credentials": [ { "clientId": "stream-vnfku72pl3bgx...", "clientSecret": "UMkNFnKt8ly#F...", "projectId": "30fcd008-9696-...." } ]
}
```

This stream named `demo-1` will contain the identical subset of
events as `demo-0-1`

## Cleaning up

Delete a stream, all its dependents and all its data (that hasn’t been
exported yet)
```json showLineNumbers
$ strm delete stream demo --recursive -o json
{
  "streamTree": {
    "stream": {
      "ref": { "name": "demo", "projectId": "30fcd008-9696-...." },
      "enabled": true,
      "credentials": [ { "clientId": "stream-11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA...",
      } ]
    },
    "keyStream": {
      "ref": { "name": "demo", "projectId": "30fcd008-9696-...." }
    },
    "derived": [
      {
        "ref": { "name": "demo-1", "projectId": "30fcd008-9696-...." },
        "consentLevels": [ 1 ],
        "consentLevelType": "CUMULATIVE",
        "enabled": true,
        "limits": {},
        "linkedStream": "demo",
        "credentials": [ { "clientId": "stream-vnfku72pl3bgx...", "clientSecret": "UMkNFnKt8ly#F..." } ]
      }
    ]
  }
}
```
