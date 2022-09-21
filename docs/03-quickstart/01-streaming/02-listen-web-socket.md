---
title: Receiving events over websocket
hide_table_of_contents: false
---

It’s nice to see some data when playing with the debugging endpoint. Use
`strm sim run-random demo` to generate random data on the `demo` stream.
stream.

In one terminal:

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

See [cli docs](/04-reference/01-cli-reference/#permanent).

Now let's consume the events from the simulator; in another terminal do:

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
The debugging endpoint shows `json` values, even when the actual wire
format is Avro binary in this case. This is to make it easier to inspect
the values.
:::

## The Hard Way {#wscat}

We don’t have to use the `strm` command, we can use any websocket client
to interact with the STRM Privacy web-socket endpoint.

First generate an OAuth2 `idToken` as described
[here](docs/03-quickstart/01-streaming/03-sending-data/02-sending-curl.md#idToken).

Here we use [wscat](https://www.npmjs.com/package/wscat) to connect to
the websocket endpoint.

```bash
wscat -H "authorization:Bearer $idToken" -c wss://websocket.strmprivacy.io/ws
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

Note the encryption of all fields labelled PII in the
`strmprivacy/example/1.3.0` event contract.
