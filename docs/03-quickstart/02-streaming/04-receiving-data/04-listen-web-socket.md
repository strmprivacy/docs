---
title: Receiving events over web socket
hide_table_of_contents: false
---

When developing data pipelines, it's often useful to see some data flowing through them.
This article covers how to use the Web Socket debug endpoint to do just that.

:::tip
Use `strm sim run-random demo` to generate random data on the `demo` stream.
:::

## Simulate random events and consume them via web socket

Create a stream and simulate random events:

```bash
strm create stream demo
strm simulate random-events demo

Starting to simulate random strmprivacy/demo/1.0.2 events to stream demo.
Sending one event every 1000 ms.
Sent 5 events
...
```

The `strm listen web-socket` command is used for showing the events in
real time.

```bash
$ strm listen web-socket --help
Read events via the web-socket (not for production purposes)

Usage:
  strm listen web-socket (stream-name) [flags]
```

See the [CLI](docs/04-reference/01-cli-reference/strm/listen/web-socket.md) for more details.

Next, consume the events from the simulator (ensure that the simulator keeps running, so use multiple shell sessions):

```bash
$ strm listen web-socket demo
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": 159456216,
    "timestamp": 1629202317371,
    "keyLink": "1e3a47c9-2b4a-4820-b16c-975a63d69d9d",
    "billingId": "demo8542234275",
    "consentLevels": [ 0 ]
  },
  "uniqueIdentifier": "AW0ku+QlmuzFHUc5asuBS/S2aPhnJFRXMkd9Sl8Z",
  "consistentValue": "AW0ku+SxBlO/YwVHZ8kbq7PbRiS9UqoafqYsGrYm2p8=",
  "someSensitiveValue": "AW0ku+Tf+Plyd/WN6E4NEpEaBEGVBHReySSdbmrjacAe",
  "notSensitiveValue": "not-sensitive-5"
}
...
```

:::note
The debugging endpoint only shows `json` values, even when the actual wire
format is Avro binary in this case. This is to make it easier to inspect
the values.
:::

## Manually listening to the web socket endpoint {#wscat}

The CLI does not have to be used to listen to the web socket endpoint. Any web socket client can be used to interact
with it.

First, request an OAuth 2.0 access token with
the [Client Credentials Grant](https://oauth.net/2/grant-types/client-credentials/)
that you need for stream authentication. In the code block below, the user (`-u`) is configured as
`clientId:clientSecret`. This translates into an `Authorization: Basic <base64 encoded username + password>` header.

```bash
accessToken=$(curl -X POST -u "stream-w0qu00hwl644b...:OygfdpwBqoekL..." \
  -d "grant_type=client_credentials" \
  "https://accounts.strmprivacy.io/auth/realms/streams/protocol/openid-connect/token" | jq -r .access_token)
```

Here [wscat](https://www.npmjs.com/package/wscat) is used to connect to
the web socket endpoint.

```bash
wscat -H "authorization:Bearer $accessToken" -c wss://websocket.strmprivacy.io/ws
Connected (press CTRL+C to quit)
< {
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": -1234364567,
    "timestamp": 1629192610656,
    "keyLink": "57ff8035-ae35-4e82-9bf2-a4d0a544c89d",
    "billingId": "demo8542234275",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "ARYe0czxEBMEC6jh5GWYicyvqBD0JBOMRoQSm2PO",
  "consistentValue": "ARYe0cxg2b9W++VYEMYKbZXLzgQf+cAkcZuqUh82lMw=",
  "someSensitiveValue": "ARYe0cwC5ImORtYRIzKPzaxKyjErTn/9fyGhVTseDxg=",
  "notSensitiveValue": "not-sensitive-48"
}
```

:::note
All fields in the data contract `strmprivacy/example/1.3.0` that are marked as PII are encrypted,
as the encrypted stream is consumed here.
:::
