---
title: Sending and receiving by hand
hide_table_of_contents: false
---

# Sending and receiving an event by hand

This page aims to clarify how to send and receive data to STRM Privacy
with the Avro serialization wire format, without any STRM Privacy
specific code.

STRM Privacy uses only *standard* open-source formats (like Avro and
Json-schema), authentication systems (OAuth2) and transport layers
(http/2 and websocket and grpc).


:::tip
This tutorial uses [httpie](https://httpie.io/) as a convenient
substitute for curl.
:::

First create a stream.

```bash
$ strm create stream by-hand --save
{
  "ref": {
    "name": "by-hand",
    "projectId": "30fcd008-9696-...."
  },
  "enabled": true,
  "limits": {
    "eventRate": "999999",
    "eventCount": "999999999"
  },
  "credentials": [
    {
      "clientId": "stream-w0qu00hwl644b...",
      "clientSecret": "OygfdpwBqoekL..."
      "projectId": "30fcd008-9696-...."
    }
  ],
  "masked_fields" : {}
}
```

:::tip
Use [strm listen web-socket by-hand](listen-web-socket.md) to get
some feedback on the events you're sending.
:::

Request an OAuth 2.0 access token that you need to be able to send events to
a certain stream.

```bash
accessToken=$(curl -X POST -u "stream-w0qu00hwl644b...:OygfdpwBqoekL..." \
  -d "grant_type=client_credentials" \
  "https://accounts.strmprivacy.io/auth/realms/streams/protocol/openid-connect/token" | jq -r .access_token)
```

You can inspect the resulting `$accessToken` in [jwt.io](https://jwt.io) to
see what we store inside it.

We’ve generated some random data with [this
tool](https://github.com/confluentinc/avro-random-generator) for the
[clickstream](https://console.strmprivacy.io/schemas/) demo schema.

**demo.json**

```json
{
  "strmMeta": {
    "eventContractRef": "strmprivacy/clickstream/1.0.0",
    "nonce": null,
    "billingId": null,
    "timestamp": null,
    "keyLink": null,
    "consentLevels": [0]
  },
  "producerSessionId": "producer",
  "url": "https://url.com",
  "eventType": "click",
  "referrer": "referrer-id",
  "userAgent": "user-agent",
  "conversion": 0,
  "customer": {
    "id": "customer-id"
  },
  "abTests": ["a", "b"]
}
```

:::note
This is the json serialization format of Avro. Our client drivers use
the **much faster** and more compact Avro binary format.
:::

And use it to post some random data:

```bash
cat demo.json | http post https://events.strmprivacy.io/event\
  authorization:"Bearer $accessToken" \
  Strm-Schema-Id:strmprivacy/clickstream/1.0.0

HTTP/1.1 400 Bad Request

Field: 'url' in event with schema: 'strmprivacy/clickstream/1.0.0' with value: 'url'
  doesn't match regex: '^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]'
```

This is *as expected*. STRM Privacy gives an indication that a
validation failed. This is an example of the mechanism that STRM Privacy
provides to indicate to the *data producers* that their data doesn’t
conform to the rules of the Event Contract.

Modify the `url` field in `demo.json` to become any valid url (like
`https://strmprivacy.io`, and try to send it again:

```bash
cat demo.json | http post https://events.strmprivacy.io/event\
  authorization:"Bearer $accessToken" \
  Strm-Schema-Id:strmprivacy/clickstream/1.0.0
HTTP/1.1 204 No Content
```

`204` is the http status code that STRM Privacy returns when the event
has been accepted and processed.

# Curl instead of httpie

When using `curl` instead of `httpie` it is possible to observe the
http/2 response, indicating the use of http/2 with its **much** higher
throughput.

```bash
curl -v https://events.strmprivacy.io/event \
    -H "authorization: Bearer $accessToken" \
    -H "Strm-Schema-Id:strmprivacy/clickstream/1.0.0" --data-binary @demo.json

...
* Using HTTP2, server supports multiplexing
* Connection state changed (HTTP/2 confirmed)
...
> POST /event HTTP/2
> Host: events.strmprivacy.io
...
> strm-schema-id:strmprivacy/clickstream/1.0.0
> content-length: 434
>
...
< HTTP/2 204
```

# Decrypting data

First, create a decrypted stream:

```bash
strm create stream --derived-from by-hand --levels 2 --save
{
  "ref": { "name": "by-hand-2", "projectId": "30fcd008-9696-...." },
  "consentLevels": [ 2 ],
  "consentLevelType": "CUMULATIVE",
  "enabled": true,
  "linkedStream": "by-hand",
  "credentials": [
    { "clientId": "hx7hj7w5mwkbybdrwhale1hvq0r6qk",
      "clientSecret": "#Fs4DkVtJh(2uss#062hGuzTLW9u5t",
      "projectId": "30fcd008-9696-...."
    }
  ]
}
```

Send an event as describe above with curl or httpie. Observe the
decrypted attributes in the events received from the web-socket.

```bash
$ strm listen web-socket by-hand-2

{
  "strmMeta": {
    "eventContractRef": "strmprivacy/example/1.3.0",
    "nonce": 15082564,
    "timestamp": 1629192833072,
    "keyLink": "55c2f72b-cff8-4814-ae33-e125c77e50f9",
    "consentLevels": [ 0, 1, 2, 3 ]
  },
  "uniqueIdentifier": "unique-14",
  "consistentValue": "session-740",
  "someSensitiveValue": "ASB9bJrnYjxjNF5Txc+Wc2k1zvzFAmE03SYK499WK5Du",
  "notSensitiveValue": "not-sensitive-39"
}
```

:::note
That most fields are decrypted, but the `someSensitiveValue` field is
**not** because that is of consent level 3 (see the event contract). If
the event had not contained `2` in its consent levels, we wouldn't even
have seen the event in this decrypted stream.
:::

And finally, to clean up the resources:

```bash
strm delete stream by-hand --recursive

# note that everything that has been deleted is returned from this call.
```


# Receiving from the websocket without the strm cli.

If you want to retrieve json serialized events *without using the strm
listen web-socket tool*, do [these
steps](/quickstart/listen-web-socket.md#wscat).
