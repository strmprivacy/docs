---
title: Kafka consumer in Python
hide_table_of_contents: false
---

# Exporting via a Kafka Consumer

Data can be consumed from your streams [^1] in JSON format via an
internet accessible authorized access to our Kafka export cluster.

## Create an exporter

First you need to create an exporter. This creates a `kafka-exporter`
and one associated `kafka-user`. The user credentials can be used to
access the topic.

```bash
$ strm create kafka-exporter demo -o json
{
  "ref": {
    "name": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7",
    "projectId": "30fcd008-9696-...."
  },
  "streamRef": {
    "name": "demo",
    "projectId": "30fcd008-9696-...."
  },
  "target": {
    "clusterRef": {
      "billingId": "internal",
      "name": "shared-export"
    },
    "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7"
  },
  "users": [
    {
      "ref": {
        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",
        "projectId": "30fcd008-9696-...."
      },
      "kafkaExporterName": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7",
      "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",
      "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",
      "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",
      "clusterRef": {
        "billingId": "internal",
        "name": "shared-export"
      }
    }
  ]
}
```


You can see the created user credentials. The kafka exporter is named
`shared-export-demo`. `shared-export` is the name of the Kafka cluster
owned by STRM Privacy that we export to; your Kafka consumer will
consume from this cluster.

:::note
If you look carefully inside the command response you’ll see different
names (`kafka-exporter-<uuid>`). This is in the process of being
refactored, but has no impact for your use.
:::

:::note
In the future, we will have the capability to export to a Kafka Cluster
owned by the customer.
:::

Kafka users are entities that can consume from a Kafka Cluster. They
have credentials, and a Kafka topic that they can consume from.

```bash
$ strm list kafka-users shared-export-demo -o json
{
  "kafkaUsers": [
    {
      "ref": {
        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"
        "projectId": "30fcd008-9696-...."
      },
      "kafkaExporterName": "shared-export-demo",
      "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",
      "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",
      "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",
      "clusterRef": {
        "billingId": "internal",
        "name": "shared-export"
      }
    }
  ]
}
```
## Consuming

Clone the [Python Kafka
Consumer](https://github.com/strmprivacy/python-kafka-consumer-oauth2)
and go into the directory and create a file `config.ini`. Fill out the
values from the JSON above:
```bash
[kafka]
bootstrap_servers = export-bootstrap.kafka.strmprivacy.io:9092
topic = export-a9e83206-96e6-463c-8163-3f4493b3ddb7
client_id = export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb
secret = 22a837fb-c299-4e03-b1ec-460684f52ae5
token_uri = https://sts.strmprivacy.io/token
group = demo
```
Next, install the Python dependencies:
```bash
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
```
Generate some data in a separate terminal:

    strm simulate random-events demo

And run the consumer:
```json showLineNumbers
$ python consumer.py

{'strmMeta': {
  'eventContractRef': 'strmprivacy/example/1.3.0',
  'nonce': -1508205704,
  'timestamp': 1629197150029,
  'keyLink': '68a1d5c5-d1d0-4a7c-8e03-b9d265071839',
  'billingId': None,
  'consentLevels': [0, 1]},
'uniqueIdentifier': 'ARCc26TVzQnf6SVZpFT3ghde/6ILaeFdn+o9jBW/',
'consistentValue': 'ARCc26QnGW52Po3QHjADcpvSoY6zf9z9skqy8viZwX8=',
'someSensitiveValue': 'ARCc26QwShhyvLiHj2EDEp7vSB0CxLMhOm7jAv0D4CM=',
'notSensitiveValue': 'not-sensitive-98'
}
```
## Deleting the Kafka-Exporter

If you just try to delete the Kafka Exporter, you’ll get an error.
```bash
strm delete kafka-exporter shared-export-demo
Error: rpc error: code = FailedPrecondition desc = Cannot delete billing_id: "demo8542234275"
name: "shared-export-demo"
.name because it has users attached to it
```
So let’s do that:
```bash
strm delete kafka-user service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb
{"name":"service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb", "projectId": "30fcd008-9696-...."}
```

:::note
install and use tab completion!
:::

And then delete the kafka-exporter

We could also just have done a *recursive delete* with
`strm delete kafka-exporter shared-export-demo --recursive`

[^1]: encrypted and decrypted
