---
title: Creating Streams 
description: Streams are the start of sending and receiving data with STRM Privacy
hide_table_of_contents: false
---

[purpose map]: docs/02-concepts/06-purpose-maps.md

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
 STREAM   DERIVED   PURPOSES   ENABLED

 demo     false     []         true
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

If you want STRM Privacy to decrypt data for certain data purposes, you need to create a _privacy stream_ derived from
a regular (source) stream.

So let’s create one, in this case for the purposes 0 and 1 (refer to your [purpose map] to know which values to use):

```bash showLineNumbers
$ strm create stream --derived-from demo --purposes 0,1
 STREAM     DERIVED   PURPOSES   ENABLED 
   
 demo-0-1   true      [0 1]      true                 
```

The derived stream is provided with a default name `demo-0-1`
because we did not provide an explicit name. If we had added a name
after the `strm create stream` we would have created a stream with that
name.

The derived stream `demo-0-1` captures data from the encrypted source stream `demo`. It will
drop all events that have not been allowed to be used for the configured purposes 
(for example due to a data subject not consenting). The events that do have permission to be processed,
will be (partially) decrypted: fields filed under these purposes will be decrypted, while any other
sensitive fields will remain encrypted.

## Cleaning up

Delete a stream, all its dependents and all its data (that hasn’t been exported yet) with the `--recursive` flag:

```bash showLineNumbers
$ strm delete stream demo --recursive
Stream has been deleted
```
