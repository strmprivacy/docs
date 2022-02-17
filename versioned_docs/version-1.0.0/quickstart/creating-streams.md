---
title: Creating Streams with the Command Line Interface 
hide_table_of_contents: false
---

See [Authentication with the CLI](quickstart/authentication-cli.md)
page on how to authenticate.

## Listing streams

Streams can be listed and will be shown as a table.

```bash
$ strm list streams
 STREAM           DERIVED   CONSENT LEVEL TYPE   CONSENT LEVELS   ENABLED

 strmprivacy      false                          []               true
```

To show more info, use the `--output` flag, and try out different
formats, such as `json`.
```bash
$ strm list streams --output json
{
    "streams": [
        {
            "stream": {
                "ref": {
                    "billingId": "demo8542234275",
                    "name": "strmprivacy"
                },
                "enabled": true,
                "limits": {
                    "eventRate": "99",
                    "eventCount": "999999"
                },
                "credentials": [
                    {
                        "clientId": "ylbt4v9o6dvvc..."
                    }
                ]
            }
        }
    ]
}
```
## Creating a stream

A stream can be created as follows:
```bash
strm create stream strmprivacy -o json --save
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "strmprivacy
  },
  "enabled": true,
  "limits": {
    "eventRate": "99",
    "eventCount": "999999"
  },
  "credentials": [
    {
      "clientId": "ylbt4v9o6dvvc...",
      "clientSecret": "M0fBiQnKNXn*U..."
    }
  ]
}
```

The `billingId`, `clientId` and `clientSecret` triplet is what
identifies your stream when you send data to STRM Privacy. STRM Privacy
uses the OAuth 2.0 client credentials flow to generate a *bearer token*
that needs to be provided with each HTTP request. Our drivers have
tooling to create and refresh these tokens, but nothing precludes you
from creating the headers by hand (see [the chapter about sending via
`curl`](sending-curl.md) to do this manually).

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
See [here](listen-web-socket.md) for details.

## Creating decrypted streams

If you want to have STRM Privacy decrypt data with certain consent
levels, you need to create an output stream.

```bash
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
      --save                  save the result in the config directory
      --tags strings          tags
```

So let’s create one, with two consent levels, and a *granular* consent
level type interpretation.
```bash
$ strm create stream --derived-from strmprivacy --levels 0,1 --consent-type GRANULAR -o json
{
  "ref": { "billingId": "demo8542234275", "name": "strmprivacy-0-1" },
  "consentLevels": [ 0, 1 ],
  "consentLevelType": "GRANULAR",
  "enabled": true,
  "linkedStream": "strmprivacy",
  "credentials": [
    { "clientId": "11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA..." }
  ]
}
```

The derived stream is provided with a default name `strmprivacy-0-1`
because we did not provide an explicit name. If we had added a name
after the `strm create stream` we would have created a stream with that
name.

So the derived stream named `strmprivacy-0-1` captures data from
encrypted stream `strmprivacy` (for the current `billingId`). It will
drop all events that don’t at least have consent levels 0 and 1 in the
event. Another way of defining decrypted streams is with consent level
type *cumulative*. This means that the decrypted stream is configured
with just one consent level, and it will accept all events that have at
least that consent level. It will decrypt PII fields up to and including
the decrypted stream consent level. *Cumulative* is the default for
creating derived streams.
```bash
$ strm delete stream strmprivacy-0-1 -o json
{
  "streamTree": {
    "stream": {
      "ref": { "billingId": "demo8542234275", "name": "strmprivacy-0-1" },
      "consentLevels": [ 0, 1 ],
      "consentLevelType": "GRANULAR",
      "enabled": true,
      "limits": {},
      "linkedStream": "strmprivacy",
      "credentials": [ { "clientId": "11jvxvpy1e6jl..." } ]
    }
  }
}
```

Note the `streamTree` field might also contain all the items derived
from a source stream, like exporters.
```bash
$ strm create stream --derived-from strmprivacy --levels 1 -o json
{
  "ref": { "billingId": "demo8542234275", "name": "strmprivacy-1" },
  "consentLevels": [ 1 ],
  "consentLevelType": "CUMULATIVE",
  "enabled": true,
  "linkedStream": "strmprivacy",
  "credentials": [ { "clientId": "vnfku72pl3bgx...",
  "clientSecret": "UMkNFnKt8ly#F..." } ]
}
```

This stream named `strmprivacy-1` will contain the identical subset of
events as `strmprivacy-0-1`

## Cleaning up

Delete a stream, all its dependents and all its data (that hasn’t been
exported yet)
```bash
$ strm delete stream strmprivacy --recursive -o json
{
  "streamTree": {
    "stream": {
      "ref": { "billingId": "demo8542234275", "name": "strmprivacy" },
      "enabled": true,
      "credentials": [ { "clientId": "qzzmqq8szj478..." } ]
    },
    "keyStream": {
      "ref": { "billingId": "demo8542234275", "name": "strmprivacy" }
    },
    "derived": [
      {
        "ref": { "billingId": "demo8542234275", "name": "strmprivacy-1" },
        "consentLevels": [ 1 ],
        "consentLevelType": "CUMULATIVE",
        "enabled": true,
        "limits": {},
        "linkedStream": "strmprivacy",
        "credentials": [ { "clientId": "onrucokawroay..." } ]
      }
    ]
  }
}
```