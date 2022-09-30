---
title: Authenticated Kafka
hide_table_of_contents: false
description: Configure your Data Plane with authenticated Kafka.
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/full-example.js';

[sasl-plain]: https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_plain.html

[kafka-ssl]: https://docs.confluent.io/platform/current/kafka/encryption.html#kafka-ssl-encryption
[console]: https://console.strmprivacy.io

[keys-certs]: https://docs.confluent.io/platform/current/security/security_tutorial.html#generating-keys-certs

## Using an existing Kafka cluster over TLS, with SASL/Plain authentication{#tls-sasl-plain}

This hands-on session shows how to get up-and-running with your Customer Cloud Deployment using an _authenticated Kafka
Cluster_ that uses [SASL/PLAIN over TLS][sasl-plain] authentication.

It's probably a good idea to first run the getting started with the unauthenticated demo Kafka detailed in
the [self-hosted section](./02-self-hosted.md) to make sure you have all the tools configured correctly and understand how
it should work.

### TLS truststore

In order for our Kafka clients to interact with your Kafka brokers over TLS, they'll have to trust them. This goes via
[a truststore][kafka-ssl]. A truststore is an encrypted file that the Kafka clients have to use in order to trust the
broker. You'll have to generate one as described in the [Confluent documentation][keys-certs], and put the generated
value in a Kubernetes secret. The truststore has a password to protect it. You must add this password to the Kubernetes
secret also.

    kubectl create secret generic client-truststore-jks \
      --from-file=client.truststore.jks=<your-truststore-jks-file> \
      --from-literal=truststore.password=<your-truststore-password>

:::note
don't change the `client.truststore.jks` and `truststore.password` keys. These names are being used by the various
Kubernetes
deployments to retrieve the entities.
:::

Once this secret exists and has been made available to the Kafka clients inside the STRM ecosystem, these clients can
communicate securely with the Kafka brokers.

### Authentication

Currently we only support [SASL/PLAIN][sasl-plain] authentication; this is a username/password scheme, where the
Kafka cluster has a list of pairs that it accepts. The communication is _plain text_ but since the channel is TLS
encrypted, this can not be intercepted.

### `values.yaml`

The `values.yaml` file you download from the [console][console] adds a `kafka.enabled: true` override, so the helm chart
will actually deploy a Kafka instance inside your k8s namespace. Make sure you have in your `values.yaml`

    kafka:
      enabled: false
      # you could have multiple separated with a comma
      bootstrapServers: <your-kafka-broker>:<port>

Configuring the credentials is done in two parts.

#### Kafka Security Config

The top-level `kafkaSecurityConfig` section defines how to configure the TLS connection

    kafkaSecurityConfig:
      enabled: true
      securityProtocol: "SASL_SSL"
      sslTruststoreSecretName: "client-truststore-jks" # use k8s secret name you created.

:::note
You can omit the `sslTruststoreSecretName` if you used the default `client-truststore-jks` name for the secret.
:::

#### Authentication

The various parts of STRM that interact with Kafka all have to be given a principal name and password. This has to be
done in
the individual Helm override sections. The `user/password` pairs have to be created in your Kafka broker configuration.
In the little sample below, Trivial identities have been added for the various components. You could use the principal one
for
every one of them, but they must be defined separately.

```yaml showLineNumbers
components:
  eventGateway:
    configuration:
      kafkaAuth:
        user: strm-event-gateway
        password: strmprivacy
  webSocket:
    configuration:
      kafkaAuth:
        user: strm-web-socket
        password: strmprivacy
  batchExportersAgent:
    configuration:
      kafkaAuth:
        user: strm-batch-exporter
        password: strmprivacy
  streamsAgent:
    configuration:
      kafkaAuth:
        user: strm-streams-agent
        password: strmprivacy
  esrProxy:
    configuration:
      kafkaAuth:
        user: strm-esr-proxy
        password: strmprivacy
  decrypterConfig:
    configuration:
      kafkaAuth:
        user: strm-decrypter
        password: strmprivacy
  batchExporterConfig:
    configuration:
      kafkaAuth:
        user: strm-batch-exporter
        password: strmprivacy
```

#### Authorization

We assume that once authorized, the entity has the permissions it needs. In case you have fine-grained authorization via
RBAC or ACLs on the Kafka cluster, the following permissions are required:

* `event-gateway` needs topic write rights to topics in the cluster whose name starts with `stream-` or `keys-` and a
  topic named `billing`
* `streams-agent` needs topic admin rights to create and delete and inspect topics. It will create topics whose name
  starts with `stream-` or `keys-`
* `web-socket` needs topic consume rights to topics starting with `stream-`.
* `batch-exporters-agent` needs topic consume rights to topics starting with `stream-` or `keys-`.
* `esr-proxy` needs topic consume rights to a topic named `billing`

### Installing

Once you have created the `values.yaml` as described above, you can

    helm install strmprivacy strmrepo/strm --values values.yaml

and follow along with the [Interacting with the CCD Cluster](#interacting) section.

#### Troubleshooting

It is _highly likely_ that this won't go correctly the first try. Setting up the TLS can go wrong in many ways, from the
trivial (missing secret), to the painful (reverse hostname verification doesn't work). The logging of deployments like
the `streams-agent` or the `event-gateway` will probably give a clue what's going on.

Troubleshooting with a Kafka test-client.

Use this Kubernetes manifest to interact with the Kafka cluster.

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

:::note
make sure you keep the `sasl.jaas.config` on one line and don't forget the semi-colon at the end!
:::

You can now interact with the Kafka cluster from within the pod.

```
$ kubectl apply -f kafka-tls-test-client
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

### Trying again

If you've made mistakes and want to start over:

1. `helm uninstall strmprivacy --namespace strmprivacy`
1. `kubectl delete ns strmprivacy` kills everything
   (including the k8s namespace). Don't forget to recreate the
   namespace afterwards.
