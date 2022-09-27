---
title: Simple Schema
hide_table_of_contents: false
---

This is a hands-on session where we create a Simple Schema and see how
to use it. Simple schemas are a much easier way of adding serialization
schemas, as they can be based on widely adopted and probably familiar
formats over the (complex) Avro and Json-schema formats. Especially for
large schemas, simple schemas help to define your data shape much
quicker.

:::note
The web console will have a graphical user-interface to define these,
and will also have tools to automatically create schemas from for
instance a csv file.
:::

## Creating a Simple Schema

I have created the following yaml file that defines a simple event
schema that I want to use.

**[simple-schema.yaml](docs/files/simple-schema.yaml)**

```yaml showLineNumbers
name: Clicks
nodes:
  - name: SessionId
    type: STRING
    doc: the string value that connects events to a single sequence
    required: true
    repeated: false
  - name: User Name
    type: STRING
    doc:  we use an event contract to define that this is private
  - name: url
    type: STRING
    doc:  the URL of the current page
  - name: mouse positions
    repeated: true
    type: NODE
    nodes:
      - name: x
        type: INTEGER
      - name: "y"
        type: INTEGER
```

:::note 
Note `Session Id` has two additional arguments: `required` and `repeated`. They are necessary for fields you want to mark as the `key field`.
:::

To install this schema into STRM Privacy [^1] we execute the following
command:

```bash
$ strm create schema \
  --definition=simple-schema.yaml  \ #(2)
  quickstart/demo/1.0.0 #(1)
SCHEMA                  TYPE   PUBLIC   FINGERPRINT
quickstart/demo/1.0.0   AVRO   false    5923838772183777456
```
1. the simple schema file we just created.
2. the schema reference which is `<handle>/<schema-name>/<schema-version>`. You need to set your
    `handle` in the [STRM Privacy
    console](https://console.strmprivacy.io/profile)

We can read back the schema as follows:

```json showLineNumbers
$ strm get schema quickstart/demo/1.0.0 -o json
{
    "schema": {
        "ref": {
            "handle": "quickstart",
            "name": "demo",
            "version": "1.0.0",
            "schemaType": "AVRO"
        },
        "state": "PENDING",
        "definition": "{\"type\":\"record\",\"name\":\"Clicks\",\"namespace\":\"com.....
        "simpleSchema": {
            "name": "Clicks",
            "avroName": "Clicks",
            "nodes": [
                {
                    "type": "STRING",
                    "name": "Session Id",
                    "avroName": "SessionId",
                    "doc": "the string value that connects events to a single sequence"
                },
                {
                    "type": "STRING",
                    "name": "User Name",
                    "avroName": "UserName",
                    "doc": "we use an event contract to define that this is private"
                },
                {
                    "type": "STRING",
                    "name": "url",
                    "avroName": "url",
                    "doc": "the url on the website"
                },
                {
                    "type": "FLOAT",
                    "name": "Prijs in GB£",
                    "avroName": "PrijsInGb",
                    "doc": "price in UK pounds"
                },
                ...
            ]
        }
    },
...
```

:::note
We see that fields `avroName` were created that look similar to our
original `name`. These names are subject to the [Avro name
constraints](https://avro.apache.org/docs/current/spec.html#names)
whereas the `name` attributes in a Simple Schema are not [^2]
:::

:::note
We see in the returned `definition` field an actual [Avro avsc
definition
string](https://avro.apache.org/docs/current/spec.html#schemas). This
definition is what is actually being used by the STRM Privacy engine,
the Simple Schema is *only a way to create it*.
:::

If we’re interested in the actual Avro Schema we can make it a little
more visible by using some `jq` magic.

```bash
$ strm get schema quickstart/demo/1.0.0 -o json | jq -r .schema.definition | jq .fields[1]
{
  "name": "SessionId",
  "type": [
    "null",
    "string"
  ],
  "doc": "the string value that connects events to a single sequence",
  "default": null
}
```

Avoiding this complexity is why we created Simple Schema. We expect that
a large majority of usecases on STRM Privacy will use Simple Schemas.

:::note
The Avro definition contains a
[`namespace`](https://avro.apache.org/docs/current/spec.html#schema_complex)
attribute.
:::

```bash
$ strm get schema quickstart/demo/1.0.0 -o json | jq -r .schema.definition | jq .namespace
"quickstart.demo.v1_0_0"
```

You *can* set this in the Simple Schema yaml file, but when absent it
will be created from the event contracts `<handle>/<name>/<version>`
triple. Its value will generally only be interesting when you want to
use generated programming language code to create events [^3]. In the
example that follows we will use Python generated code to create some
events.

## Creating an associated Event Contract

We want to create an event contract on this schema that will define
that:

-   `SessionId` is the event sequence identifier, the attribute that
    ties events together.

-   `UserName` is a PII field, level 1

:::important
these names currently are the `avroNames`, not the names in the simple
schema.
:::

Checking `strm create event-contract --help` tells us what we need to
create.

**[event-contract.json](docs/files/event-contract.json)**


```json showLineNumbers
{
  "keyField" : "SessionId",
  "piiFields" : { "UserName": 1 }
}
```

```bash
strm create event-contract \
  -S quickstart/demo/1.0.0  \ #(1)
  -F event-contract.json  \  #(2)
  quickstart/demo-event-contract/2.0.0 #(3)
```
1. the schema that we want to refer to in this eventcontract
2. the definition of the eventcontract
3. I want to demonstrate that the eventcontract reference does *not*
    have to be equal to the schema reference. You can have as many
    eventcontracts as you need on one schema.

## Send some data with Python

```bash
python3 -m venv venv
. venv/bin/activate
strm get schema-code quickstart/demo/1.0.0 --language=python #(1)
unzip python-avro-demo-1.0.0.zip
cd python-avro-demo-1.0.0/
make install #(2)
pip install strmprivacy-driver #(3)
```

1. generates Python code that knows how to serialize data that are
    valid for the Simple Schema you just created.
2. you could also do `make dev-install`. See the `Makefile` contents.
3. the STRM Privacy Python driver is accidentally excluded.

Now I’m going to follow along with the [full Python
example](docs/03-quickstart/01-streaming/03-sending-data/01-language-examples.md) except that I’m going to modify the example
[`sender_async.py`](https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py)
code to use the schema-code we just generated.

```python showLineNumbers title=sender.py class=with-footer
## This code is somewhat simplified. Use the link above to download the full version.

...
from strmprivacy.driver import SerializationType, ClientConfig, StrmPrivacyClient
from strmprivacy_quickstart_demo_v1_0_0.quickstart.demo.v1_0_0 import Clicks, mousepositions

class Sender(object):
  async def __anext__(self):
    event = create_avro_event()
    return await self._client.send(event, SerializationType.AVRO_BINARY)

def create_avro_event():
  event = Clicks()

  event.strmMeta.eventContractRef = "quickstart/demo-event-contract/2.0.0"
  event.strmMeta.consentLevels = [random.randint(0, 3)]

  ## note the avro names instead of the Simple Schema names
  event.SessionId = f"session-{random.randint(0,10)}"
  event.UserName = f"user-{random.randint(0,10)}"
  event.url = f"url-{random.randint(0,10)}"
  event.PrijsInGb = random.random()*100.0
  event.MousePositions = [
    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)}),
    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)})
  ]
  return event


async def main(config=ClientConfig()):
  client = StrmPrivacyClient(sys.argv[1], sys.argv[2], sys.argv[3], config)
  sender = Sender(client)
  await sender.start_timers()  ## re-authorization jwt tokens

  async for response in sender:
    if response == 204:  ## event correctly accepted by endpoint
      log.info(f"Event sent, response {response}")
    else:
      log.error(f"Something went wrong while trying to send event to STRM privacy response: {response}")
    await asyncio.sleep(1)


if __name__ == '__main__':
  logging.basicConfig(stream=sys.stderr)
  asyncio.run(main())
```
<div class="codeblock-footer"><a target="_blank" href="pathname:///files/sender.py">Download file</a></div>

Create two streams

```bash
strm create stream demo --save
strm create stream --derived-from demo --save --levels 1
```

Create a few environment variables that we will use to start up the
Python code.

```bash
saveFile=$(strm context info Stream/demo)
billingId=$(cat $saveFile | jq -r '.ref.billingId')
clientId=$(cat $saveFile | jq -r '.credentials[0].clientId')
clientSecret=$(cat $saveFile | jq -r '.credentials[0].clientSecret')
```

Start sending events with this python code. The [204 http status
code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
indicates the event was accepted and processed by the STRM Privacy event
gateway with no issues.

```bash
python3 sender.py $billingId $clientId $clientSecret

INFO:__main__:Event sent, response 204
INFO:__main__:Event sent, response 204
```

since Python 3.10 we find an warning from the http client
`charset_normalizer:Encoding detection on empty bytes, assuming utf_8 intention.`
on our 204 empty response. This is annoying but no more.

And receive some data on the input stream.

```bash showLineNumbers
$ strm listen web-socket demo | jq 
{
  "strmMeta": {
    "eventContractRef": "quickstart/demo-event-contract/2.0.0",
    "nonce": 1606491963,
    "timestamp": 1640870686866,
    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",
    "billingId": "strmquickstart1585470330",
    "consentLevels": [ 3 ]
  },
  "SessionId": "session-0",
  "UserName": "ASSPO2VhVDtRvZD+8yDkrJwwm8wEvnuXtSD6", 
  "url": "url-0",
  "PrijsInGb": 41.33574,
  "MousePositions": [ { "x": 353, "y": 188 }, { "x": 60, "y": 938 } ]
}
```

-   we don’t need explicit credentials because we used the `--save`
    option to create the streams.
-   `UserName` is encrypted.

we receive the `avroName` attributes, and not our original `name`. A
future version of our tooling will optionally return json with the
original simple names.

And on the derived stream. Note that `UserName` is now decrypted, and
you would only receive events with *at least* consent level 1 in the
event.

We can also listen on the derived stream with consent level 1. We will
receive only events with *at least* consent level 1 in them.

```bash
$ strm listen web-socket demo-1

{
  "strmMeta": {
    "eventContractRef": "quickstart/demo-event-contract/2.0.0", #(1)
    "nonce": -2105288911,
    "timestamp": 1640870774948,
    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",
    "billingId": "strmquickstart1585470330",
    "consentLevels": [ 1 ]
  },
  "SessionId": "session-0",
  "UserName": "user-7", 
  "url": "url-2",
  "PrijsInGb": 3.3405764,
  "MousePositions": [ { "x": 252, "y": 992 }, { "x": 940, "y": 265 } ]
}
```

-   `UserName` is now decrypted

## Simple Schemas Technical definition

A simple schema is defined via the following
[Protobuf](https://developers.google.com/protocol-buffers) definitions.

```protobuf showLineNumbers
message SimpleSchemaDefinition {
  string name #(1)
  string avro_name #(2) 
  string namespace #(3) 
  string doc #(4) 
  repeated SimpleSchemaNode nodes #(5)  
}

SimpleSchemaNode {
  SimpleSchemaNodeType type #(6) 
  string name #(7) 
  string avro_name #(2)  
  bool repeated #(8)
  bool required #(9)
  repeated SimpleSchemaNode nodes #(10)
  string doc #(4)
}

enum SimpleSchemaNodeType {
  STRING
  BOOLEAN
  FLOAT
  INTEGER
  LONG
  NODE #(6)
}
```

1. the name of the top level entity.
2. the [Avro compatible name](https://avro.apache.org/docs/current/spec.html#names). This
    field is heuristically derived from `name` *unless* you explicitly
    set its value in the SimpleSchema you provide. In that case it’s up
    to you to make sure it is valid.
3. the namespace of the top level entity. This affects generated source
    code. It is generated from `<handle>/<name>/<version>` *unless* you
    explicitly set it, in which case you must make sure it’s a valid
    [Avro namespace](https://avro.apache.org/docs/current/spec.html#schema_complex)
4. optional documentation that describes the meaning of the attribute
    or event
5. a list of `SimpleSchemaNode` entities describing attributes of the
    event.
6. the `SimpleSchemaNodeType` of an attribute. Simple ones are `STRING`
    etc… The type can also be `NODE` in which case the schema has a
    nested structure. In that case the `nodes` field must hold **at
    least 1** child `SimpleSchemaNode`.
7. the name of the attribute.
8. whether or not the entry is repeated, so it is either a single node
    or a list of nodes
9. whether or not this attribute is required. When required your
    sending software *must* fill in this value.
10. when `type` is equal to `SimpleSchemaNodeType` you can add 1 or more
    `SimpleSchemaNodes` here

[^1]: `Strm` versions before 1.15 need a json version of this file that you can convert [online](https://onlineyamltools.com/convert-yaml-to-json)
[^2]: the only constraint is that the names must not contain [Unicode control characters](https://en.wikipedia.org/wiki/Unicode_control_characters)
[^3]: `strm get schema-code ...`
