---
title: Authenticated Kafka
hide_table_of_contents: false
description: Configure your Data Plane with authenticated Kafka.
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/external-code-block.js';

[sasl-plain]: https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_plain.html

[kafka-ssl]: https://docs.confluent.io/platform/current/kafka/encryption.html#kafka-ssl-encryption
[installation-config]: https://console.strmprivacy.io/settings/installation

[keys-certs]: https://docs.confluent.io/platform/current/security/security_tutorial.html#generating-keys-certs

[upgrading]: docs/03-quickstart/05-ccd/99-updating.md

## Using an existing Kafka cluster over TLS, with SASL/Plain authentication{#tls-sasl-plain}

:::info
This page requires version 2.0.0 or later of our Helm chart.
:::

This hands-on section shows how to get up-and-running with your Customer Cloud Deployment using an _authenticated Kafka
Cluster_ that uses [SASL/PLAIN over TLS][sasl-plain] authentication.
This is a username/password scheme, where the
Kafka cluster has a list of pairs that it accepts. The communication is _plain
text_ but since the channel is TLS-encrypted, this cannot be intercepted.
It is the only type of authentication we currently support.

It's probably a good idea to first run the getting started with the unauthenticated demo Kafka detailed in
the [self-hosted section](./02-self-hosted/index.md) to make sure you have all the tools configured correctly and understand how
it should work.

Some private Kafka clusters may require a TLS truststore to successfully interact.
Managed services like Azure Event Hubs and Confluent Cloud typically don't require this.

:::note
First try the setup without a TLS truststore, unless you know you will need one.
:::

### Setup without a TLS Truststore

#### Required Kafka permissions

The following permissions are required for the various STRM components, and
should thus be available through the credentials used:

* `event-gateway` needs write rights to topics with names starting with `stream-` or `keys-` and a
  topic named `billing`.
* `streams-agent` needs topic admin rights to create, delete and inspect topics. It will create topics with names
  starting with `stream-` or `keys-`.
* `web-socket` needs topic consume rights to topics starting with `stream-`.
* `decrypter` instances need topic consume and write rights to topics starting with `stream-`.
* `batch-exporter` instances need topic consume rights to topics starting with `stream-` or `keys-`.
* `esr-proxy` needs topic consume rights to a topic named `billing`.

#### Disabling the built-in kafka cluster

The `values.yaml` file you download from the [console][installation-config] does not override the default values related to Kafka, so the helm chart
will actually deploy a Kafka instance inside your k8s namespace. 
To use your own cluster, make sure to include the following in your `values.yaml` file:

```yaml
kafka:
  # This disables the built-in kafka instance.
  enabled: false
  # Specify your Kafka bootstrap server(s), separated by a comma.
  bootstrapServers: <your-kafka-broker>:<port>
  # Since STRM cannot currently integrate with your own Schema Registry, 
  # or you may not use one at all, ensure Avro is serialized as JSON. 
  serializeAvroAsJson: true
  # If desired, specify a default number of partitions for STRM Kafka topics.
  numPartitions: 5
  # If desired, increase the default replication factor for STRM Kafka topics
  # from the default value of 1. Confluent Cloud may require a value of 3.
  defaultReplicationFactor: 3
```

#### Kafka Security Config

Next, add the following top-level `globalKafkaSecurityConfig` section:

```yaml
globalKafkaSecurityConfig:
  enabled: true
  securityProtocol: "SASL_SSL"
  saslJaasConfig: 'org.apache.kafka.common.security.plain.PlainLoginModule required username="<your-username>" password="<your password>";'
```

Make sure the `saslJaasConfig` value matches the value provided by your Kafka
provider. 

#### Applying the changes

Once you have modified the `values.yaml` as described above, you can apply the
changes to your installation by performing a helm upgrade, for example:

```bash
helm upgrade strmprivacy strmrepo/strm --namespace strmprivacy --values values.yaml
```

Or follow the general [upgrading][upgrading] instructions.

Then follow along with the [Interacting with your Data Plane](#interacting) section.
All Kafka interaction will now go through your own Kafka cluster. If you
run into any issues, check the Troubleshooting section below.

### Setup with a TLS truststore

In order for our Kafka clients to interact with your Kafka brokers over TLS, they'll have to trust them. This goes via
[a truststore][kafka-ssl]. A truststore is an encrypted file that the Kafka
clients have to use in order to trust the broker. 

You may have to generate one as described in the [Confluent documentation][keys-certs]
if your Kafka broker doesn't integrate with default trust stores, and the
above setup without one didn't succeed.

If so, put the generated value in a Kubernetes secret. The truststore has a
password to protect it, which must also be added to the Kubernetes secret.

```bash
kubectl create secret generic client-truststore-jks \
  --from-file=client.truststore.jks=<your-truststore-jks-file> \
  --from-literal=truststore.password=<your-truststore-password>
```

:::info
Don't change the `client.truststore.jks` and `truststore.password` keys. 
These names are used by the various Kubernetes deployments to retrieve the entities.
:::

Once the secret is created, add its name to the `globalKafkaSecurityConfig`:

```yaml
kafkaSecurityConfig:
  enabled: true
  securityProtocol: "SASL_SSL"
  saslJaasConfig: "<your saslJaasConfig>"
  sslTruststoreSecretName: "client-truststore-jks" # use the k8s secret name you created.
```

Your STRM Data Plane deployment should now be able to communicate with your
Kafka cluster.

### Troubleshooting

It is _quite likely_ that this won't go correctly the first try. Setting up the TLS can go wrong in many ways, from the
trivial (missing secret), to the painful (reverse hostname verification doesn't work). The logging of deployments like
the `streams-agent` or the `event-gateway` will probably give a clue what's going on.

The following Kubernetes manifest, available in the `test-utils` directory
of our Helm chart git repository, can be used to troubleshoot (TLS) connectivity
issues with your Kafka cluster:

<ExternalCodeBlock
url="https://raw.githubusercontent.com/strmprivacy/data-plane-helm-chart/master/test-utils/kafka-tls-client.yaml"
title="kafka-tls-client.yaml"
lang="yaml"
/>

Modify the `client.props` section to use your credentials (the truststore password and the principal username/password
pair)

```properties showLineNumbers
  client.props: |
    security.protocol=SASL_SSL
    ssl.truststore.location=/tmp/truststore/client.truststore.jks
    ssl.truststore.password=strmprivacy
    sasl.mechanism=PLAIN
    sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required     username="strm-event-gateway"     password="strmprivacy";
```

:::info
Make sure you keep the `sasl.jaas.config` on one line and don't forget the semicolon at the end!
:::

Apply the manifest and interact with the Kafka cluster from within the pod:

```
$ kubectl apply -f kafka-tls-test-client.yaml
$ kubectl exec -ti kafka-tls-test-client-... -- bash

$ kafka-topics.sh --bootstrap-server <your-bootstrap-server> --list \
     --command-config /tmp/client.props
__consumer_offsets
billing
keys-28a3152d-f6c8-4c52-8bd7-c587089938eb
keys-35bc9088-c41c-41de-b042-fa835a4cb3b1
stream-28a3152d-f6c8-4c52-8bd7-c587089938eb
stream-35bc9088-c41c-41de-b042-fa835a4cb3b1
stream-e00843bd-86c8-4b85-a1bd-b7b509fc6804
```
