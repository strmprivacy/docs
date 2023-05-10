---
title: Simple Schema
hide_table_of_contents: false
---

This quickstart guides you through creating a Simple Schema and see how
it can be used. Simple Schemas are a much easier way of defining serialization
schemas, as they can be based on widely adopted and probably familiar
formats (though complex) Avro and Json-schema. Especially for
large schemas, Simple Schemas help to define your data shape much
quicker.

## Defining a Simple Schema

For this quickstart, the following `yaml` file that defines the simple schema will be used.

```yaml showLineNumbers title=simple-schema.yaml download=simple-schema.yaml 
name: Clicks
nodes:
  - name: SessionId
    type: STRING
    doc: the string value that connects events to a single sequence
    required: true
    repeated: false
  - name: User Name
    type: STRING
    doc:  we use a data contract to define that this is private
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
Note `Session Id` has two additional arguments: `required` and `repeated`. This is necessary if you want to mark it as
the `keyField`.
:::

To install this schema into STRM Privacy, it needs to be attached to a Data Contract.

## Creating a Data Contract

This quickstart requires a Data Contract with this schema that will define
that:

- `SessionId` is the `keyField`, the attribute that
  ties events together.
- `UserName` is a PII field, purpose 1

:::important
These names currently are the [`avroName`](#name-and-avroname)s, not the names in the simple
schema.
:::

Checking `strm create data-contract --help` tells us what we need to
create.

```json showLineNumbers title=contract.json download=contract.json
{
  "keyField" : "SessionId",
  "piiFields" : { "UserName": 1 }
}
```

```bash
$ strm create data-contract quickstart/demo-data-contract/1.0.0 \
  --schema-definition simple-schema.yaml  \
  --contract-definition contract.json

DATA CONTRACT                          STATE   PUBLIC   KEY FIELD   # PII FIELDS   # VALIDATIONS

quickstart/demo-data-contract/1.0.0    DRAFT   false    SessionId              1               0
```

1. `--schema-definition`: the schema definition file that was defined in the previous section
2. `--contract-definition`: the definition of the data contract

### Inspecting the schema

To get the schema from the Data Contract, execute the following command:

```json showLineNumbers
$ strm get data-contract quickstart/demo-data-contract/1.0.0 --output json | jq '.dataContract.schema'
{
    "schema": {
        "ref": {
            "handle": "quickstart",
            "name": "demo-data-contract",
            "version": "1.0.0",
            "schemaType": "AVRO"
        },
        "state": "DRAFT",
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
                    "doc": "we use a data contract to define that this is private"
                },
                {
                    "type": "STRING",
                    "name": "url",
                    "avroName": "url",
                    "doc": "the url on the website"
                },
                {
                    "type": "NODE",
                    "name": "mouse positions",
                    "avroName": "mousepositions",
                    "doc": "price in UK pounds",
                    "nodes": [
                        {
                            "type": "INTEGER",
                            "name": "x",
                            "avroName": "x",
                        },
                        {
                            "type": "INTEGER",
                            "name": "y",
                            "avroName": "y",
                        }
                    ]
                }
            ]
        }
    },
...
```

#### Name and `avroName`

The `avroName` fields look similar to the
original `name`. These names however, are subject to the [Avro name
constraints](https://avro.apache.org/docs/current/spec.html#names)
whereas the `name` attributes in a Simple Schema are not [^1].

#### The generated schema

The schema response, contains an actual [Avro avsc
definition
string](https://avro.apache.org/docs/current/spec.html#schemas), which has been generated from the provided Simple
Schema.
This definition is what is actually being used by STRM Privacy,
the Simple Schema is *only a way to create it*.

If you're interested in the actual Avro Schema, you can make it a little
more visible by using some `jq` magic.

```bash
$ strm get data-contract quickstart/demo-data-contract/1.0.0 --output json | jq '.dataContract.schema.definition | fromjson | .fields[1]'
{
  "name": "SessionId",
  "type": "string",
  "doc": "the string value that connects events to a single sequence"
}
```

:::tip
View the entire generated Avro schema
with `strm get data-contract quickstart/demo-data-contract/1.0.0 --output json | jq '.dataContract.schema.definition | fromjson'`
:::

Avoiding this complexity is exactly why we created Simple Schema. We expect that
a large majority of use cases on STRM Privacy will use Simple Schemas.

#### Avro namespace

The Avro definition contains a
[`namespace`](https://avro.apache.org/docs/current/spec.html#schema_complex)
attribute, which can be extracted with the following command:

```bash
$ strm get data-contract quickstart/demo-data-contract/1.0.0 --output json | jq '.dataContract.schema.definition | fromjson | .namespace'
"quickstart.DemoDataContract.v1_0_0"
```

It is possible to override this in the Simple Schema `yaml` file, but when it is absent, it
will be created from the data contracts' `<handle>/<name>/<version>`.
Its value will generally only be interesting when you want to
use [generated programming language code](docs/04-reference/01-cli-reference/strm/get/schema-code.md) to create events.
In the example that follows, Python generated code is used to create some
events.

## Send some data with Python

```bash showLineNumbers
python3 -m venv venv
. venv/bin/activate
# callout-1
strm get schema-code quickstart/demo-data-contract/1.0.0 --language=python
unzip python-avro-demo-data-contract-1.0.0.zip
cd python-avro-demo-1.0.0/
# callout-2
make install
# callout-3
pip install strmprivacy-driver
```

1. generates Python code that knows how to serialize data that are
   valid for the Simple Schema you just created.
2. you could also do `make dev-install`. See the `Makefile` contents.
3. the STRM Privacy Python driver is accidentally excluded.

Next, follow along with the [full Python
example](docs/03-quickstart/01-streaming/03-sending-data/01-language-examples.md). The difference in this quickstart
however,
is that the
example [`sender_async.py`](https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py)
code needs to be modified to use the schema-code that you just generated.

```python showLineNumbers title=sender.py download=sender.py
import asyncio
import logging
import random

import sys
from strmprivacy.driver import SerializationType, ClientConfig, StrmPrivacyClient
from strmprivacy_quickstart_demo_v1_0_0.quickstart.demo.v1_0_0 import Clicks, mousepositions

log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Sender(object):
  """
  An Asynchronous generator that periodically creates an event and sends it to STRM Privacy
  """

  def __init__(self, client):
    self._client = client

  def __aiter__(self):
    return self

  async def __anext__(self):
    event = create_avro_event()
    return await self._client.send(event, SerializationType.AVRO_BINARY)

  async def start_timers(self):
    await self._client.start_timers()


def create_avro_event():
  event = Clicks()

  event.strmMeta.eventContractRef = "quickstart/demo-event-contract/2.0.0"
  event.strmMeta.consentLevels = [random.randint(0, 3)]

  # note the avro names instead of the Simple Schema names
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
  await sender.start_timers()  # re-authorization jwt tokens

  async for response in sender:
    if response == 204:  # event correctly accepted by endpoint
      log.info(f"Event sent, response {response}")
    else:
      log.error(f"Something went wrong while trying to send event to STRM privacy response: {response}")

    await asyncio.sleep(1)


if __name__ == '__main__':
  logging.basicConfig(stream=sys.stderr)
  config = ClientConfig(
      gateway_host="events.dev.strmprivacy.io",
      sts_host="sts.dev.strmprivacy.io"
      )
  asyncio.run(main(config))
```

Continuing, create the following two streams:

```bash
strm create stream demo
strm create stream --derived-from demo --levels 1
```

Create a few environment variables that can be used to start up the
Python code.

```bash
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
```

Next, start sending events with this Python code. The [204 http status
code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
indicates the event was accepted and processed by the STRM Privacy Event
Gateway with no issues.

```bash
python3 sender.py $clientId $clientSecret

INFO:__main__:Event sent, response 204
INFO:__main__:Event sent, response 204
```

Since Python 3.10, you'll encounter a warning from the HTTP client:
`charset_normalizer:Encoding detection on empty bytes, assuming utf_8 intention.`
on the 204 empty response. This is unfortunate, but can be safely ignored.

With the Web Socket endpoint, it is possible to consume the events of the input stream.

```bash showLineNumbers
$ strm listen web-socket demo | jq 
{
  "strmMeta": {
    "eventContractRef": "quickstart/demo-data-contract/1.0.0",
    "nonce": 1606491963,
    "timestamp": 1640870686866,
    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",
    "consentLevels": [ 3 ]
  },
  "SessionId": "session-0",
  // callout-1
  "UserName": "ASSPO2VhVDtRvZD+8yDkrJwwm8wEvnuXtSD6", 
  "url": "url-0",
  "MousePositions": [ { "x": 353, "y": 188 }, { "x": 60, "y": 938 } ]
}
```

1. The field `UserName` is encrypted in the events that are received here, as we are listening via web socket to
the encrypted stream.

:::note
The data that is received contains the `avroName` attributes, and not the original `name`. If you are interested in
receiving the original Simple Schema names, please [contact us](docs/05-contact/index.md).
:::

Regarding the derived stream, `UserName` is now decrypted, and
only events with *at least* consent for purpose 1 are processed.

With the web socket endpoint, it is also possible to listen on the derived stream for purpose 1.
Here too, only events where the data subject consented to purpose 1 will be received.

```json showLineNumbers
$ strm listen web-socket demo-1

{
  "strmMeta": {
    "eventContractRef": "quickstart/demo-data-contract/1.0.0",
    "nonce": -2105288911,
    "timestamp": 1640870774948,
    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",
    "billingId": "strmquickstart1585470330",
    "consentLevels": [ 1 ]
  },
  "SessionId": "session-0",
  // callout-1
  "UserName": "user-7", 
  "url": "url-2",
  "PrijsInGb": 3.3405764,
  "MousePositions": [ { "x": 252, "y": 992 }, { "x": 940, "y": 265 } ]
}
```

1. `UserName` is now decrypted

## Simple Schema Reference

A simple schema is defined via the following
[Protobuf](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L436)
definitions.

```protobuf showLineNumbers
message SimpleSchemaDefinition {
  # callout-1
  string name
  # callout-2
  string avro_name 
  # callout-3
  string namespace 
  # callout-4
  string doc 
  # callout-5
  repeated SimpleSchemaNode nodes  
}

SimpleSchemaNode {
  # callout-6
  SimpleSchemaNodeType type 
  # callout-7
  string name 
  # callout-2
  string avro_name  
  # callout-8
  bool repeated
  # callout-9
  bool required
  # callout-10
  repeated SimpleSchemaNode nodes
  # callout-4
  string doc
}

enum SimpleSchemaNodeType {
  STRING
  BOOLEAN
  FLOAT
  INTEGER
  LONG
  # callout-6
  NODE
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
8. whether the entry is repeated, so it is either a single node
   or a list of nodes
9. whether this attribute is required. When required your
   sending software *must* fill in this value.
10. when `type` is equal to `SimpleSchemaNodeType` you can add 1 or more
    `SimpleSchemaNodes` here
