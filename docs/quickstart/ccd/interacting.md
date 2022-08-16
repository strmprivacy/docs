---
title: Interacting with a Customer Cloud Deployment
hide_table_of_contents: false
---

[cli]: https://github.com/strmprivacy/cli

[github]: https://github.com/strmprivacy/data-plane-helm-chart/tree/master

[batch-exporter]: https://docs.strmprivacy.io/docs/latest/quickstart/batch/batch-exporter

[exporting-keys]: https://docs.strmprivacy.io/docs/latest/quickstart/streaming/exporting-keys/

[data-connector]: https://docs.strmprivacy.io/docs/latest/quickstart/batch/batch-exporter/#creating-a-data-connector

[ovh-ingress]: https://docs.ovh.com/au/en/kubernetes/installing-nginx-ingress/

[profile]: https://console.strmprivacy.io/upgrading

[values]: https://console.strmprivacy.io/installation/configuration

[confluent]: https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#cp-quickstart-step-1

[console]: https://console.strmprivacy.io

[minio-mc]: https://docs.min.io/docs/minio-client-complete-guide.html

[port-forward]: https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/

[tink]: https://github.com/google/tink

[avro-json]: https://avro.apache.org/docs/current/spec.html#json_encoding

[helm-gcs]: https://github.com/hayorov/helm-gcs

[kctx]: https://github.com/ahmetb/kubectx

[telepresence]: https://www.telepresence.io/

The following section will guide you through the setup required to interact with your STRM Privacy Data Plane. Make sure
that all the required tools are installed as discussed [here](./self-hosted.md#step2).

## Setup port forwarding

To interact with the `event-gateway` and `web-socket` for testing purposes we will set up Kubernetes port-forwarding.

To add a forwarding port to a deployment either use `k9s` and press `shift+f` on the deployments for the `event-gateway`
and the `web-socket` or do the following:

Run the next commands in separate shells, and keep them running:

```bash
kubectl port-forward deployment/event-gateway 8080:8080 &
kubectl port-forward deployment/web-socket 8082:8080 &
```

In a production setting you obviously would not use port-forwarding. Typically one would

* add a Kubernetes `ingress` in front of the `event-gateway` service. This creates a load balancer in the infrastructure
  that will allow https access to the `event-gateway`. Make sure the load balancer is capable of handling http/2 otherwise
  latency and throughput will suffer.
* communicate directly with the `event-gateway` service. This would only work if your events are being sent from within
  the same Kubernetes cluster.

## Streams

First create two streams.

    strm create stream test --save
    strm create stream --derived-from test --levels 2 --save

Because you've created a derived stream (named `test-2` by default) we should be able to see a decrypter deployment:

```bash
kubectl get deployments.apps  -l app=decrypter-v2
```

    NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE
    decrypter-a268aea6-4b5b-4241-b833-9a84f4f44bc4   1/1     1            1           93m

You could use `kubectl describe deployment decrypter...` to see the annotations on the deployment, and see that it is
indeed processing your `test-2` stream. The _name_ of the decrypter deployment is just `decrypter-<random uuid>` and can
not be chosen by anyone.

### Sending events with the cli

To simulate events with our cli, the `events-api-url` parameter must be set to the port exposed via the port-forward
(the url can also be set in the strm config file (`strm context config`).

```bash
strm simulate random-events test --events-api-url=http://localhost:8080/event --interval 5
```

    Sent 874 events
    Sent 1809 events
    Sent 2726 events
    ...

### Listening on the web-socket via the cli

```bash
strm listen web-socket test --web-socket-url ws://localhost:8082/ws
```

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -447993628, "timestamp": 1652181230883, "keyLink": "7573fc76-ae34-4c49-a3fd-d552b677ffa1", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2, 3]}, "uniqueIdentifier": "AQAsswoVM2q6Q6+eeTb5Qe61xBHTaAZZMVCh+vDf", "consistentValue": "AQAsswoPYW8+VGwOZvfh+FmSEh2UoVTRNkNWlyQOpwA=", "someSensitiveValue": "AQAsswpQCKDPUYNls3hy13IllL5vd4bz/X3rEsBI0TEV", "notSensitiveValue": "not-sensitive-64"}
    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -45323834, "timestamp": 1652181230893, "keyLink": "9ced67fc-9227-4fb2-846b-1eed521db941", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "AWzkJjeWufjZehXNpWLUQ63CG1O8jxCU6MOd3Seo", "consistentValue": "AWzkJjd3cB+36sCrtT6va3YLjCa5qw55Iy5/HevIcVU=", "someSensitiveValue": "AWzkJjcsrjNHbZCAjlEYCBdlpOVK8+eXIx6BSBDxH8VQ", "notSensitiveValue": "not-sensitive-42"}

Or a derived stream

```bash
strm listen web-socket test-2 --web-socket-url ws://localhost:8082/ws
```

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -1742873135, "timestamp": 1652181297380, "keyLink": "556c1be7-4332-4058-9d36-5e3e5a66e121", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "unique-81", "consistentValue": "session-922", "someSensitiveValue": "AQM0jlnxbeNZSJzvJWLpnMjyYET1Jb1Yz+5yZVB5i6Dq", "notSensitiveValue": "not-sensitive-78"}

## Consume from Kafka

Install the [Confluent client tools][confluent]. You don't have to start Confluent, you only need to add the `bin`
directory
of the unpacked confluent tar file to your `$PATH`.

You need the [`strm`][cli] cli in order to find the Kafka topic in the streams information

In order to consume from Kafka with your development computer, you'll need to set up [telepresence][telepresence], which
sort of includes your computer within the Kubernetes dns.

    telepresence connect

```
    Launching Telepresence Root Daemon
    Launching Telepresence User Daemon
    Connected to context kubernetes-admin@...
```

    strm list streams

```
 STREAM   DERIVED   CONSENT LEVEL TYPE   CONSENT LEVELS   ENABLED   KAFKA TOPIC

 test     false                          []               true      stream-e379c8e5-0e25-4b95-b1f4-c5ceb20a233f
 test-2   true      CUMULATIVE           [2]              true      stream-f704507b-1e88-4464-98e0-b7cfa501ec75
```

Then pass this topic to the kafka consumer:

```bash
kafka-avro-console-consumer     \
  --bootstrap-server kafka.strmprivacy:9092     \
  --topic stream-e379c8e5-0e25-4b95-b1f4-c5ceb20a233f     \
  --property schema.registry.url=http://confluent-schema-proxy.strmprivacy/confluent     \
  --property print.key=true     \
  --key-deserializer="org.apache.kafka.common.serialization.StringDeserializer"
```

    1867d5ad-f1fb-4faa-af98-f863a4f9e3e4    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":-810110116},"timestamp":{"long":1652181101870},"keyLink":{"string":"1867d5ad-f1fb-4faa-af98-f863a4f9e3e4"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[]},"uniqueIdentifier":{"string":"AR5VVyfQsta+D1XDKcPiR0sC1oE3yy301W2FMVJ9"},"consistentValue":"AR5VVydsWvZG+FkvlOFEUZCvlFY4rSpVHs1njIE8tg==","someSensitiveValue":{"string":"AR5VVyfO8S3djArRlS6ZaI4oefWUjEt9XRnT/f2r6vc="},"notSensitiveValue":{"string":"not-sensitive-84"}}
    5afc9c0a-de67-4e38-bd0a-66640f4349c7    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":1699175479},"timestamp":{"long":1652181101896},"keyLink":{"string":"5afc9c0a-de67-4e38-bd0a-66640f4349c7"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[0,1,2,3]},"uniqueIdentifier":{"string":"ASotb1YzBuuBBM981rLIzQd/EZA7Em7dxyaBg7vE"},"consistentValue":"ASotb1bYf1G/2ye4h6ELE4hlkVGZGKSt3LQe0AnZU+k=","someSensitiveValue":{"string":"ASotb1bb51OCfM9HdCqcAjTLtXqK67EuBQicTpNzIvv/"},"notSensitiveValue":{"string":"not-sensitive-95"}}

:::note
We can't yet use an _existing Confluent Schema Registry_ in your infrastructure. This is on our roadmap.
:::

:::note Avro-Json
The _json_ from the `kafka-avro-console-consumer` is the [Avro json format][avro-json] which includes a type attribute
for nullable types for instance

    "notSensitiveValue":{"string":"not-sensitive-84"}

Our `web-socket` debugging output uses the less verbose `null` or `some string` in the json, i.e.

    "notSensitiveValue": "not-sensitive-84"

:::

## Exporting to an S3 bucket

Create the S3 bucket and the associated `data connector`. See [here][data-connector] for details
about data connector configuration.

    strm create data-connector s3 s3-connector --credentials-file=...

    strm create batch-exporter test-2 \
      --data-connector s3-connector \
      --path-prefix ccd-events-demo \
      --include-existing-events

You should see a newly-created batch-exporter deployment:

```bash
kubectl get deployments.apps  -l app=batch-exporter
```

    NAME                                                  READY   UP-TO-DATE   AVAILABLE   AGE
    batch-exporter-c726bbff-2b68-4438-ac0d-ee877aa4dabf   1/1     1            1           2m49s

If you're sending data, you should see files in your s3 bucket quickly:

```bash
aws s3 ls s3://stream-machine-export-demo/ccd-events-demo/
```

    2022-05-10 15:09:21          0 .strm_test_a6c5d566-f851-4778-a7fb-5d39d8958aa4.jsonl
    2022-05-10 15:10:02     131735 2022-05-10T13:10:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:11:01     196628 2022-05-10T13:11:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:12:01     181281 2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:13:01     202094 2022-05-10T13:13:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl

Looking inside one of them:

```bash
aws s3 cp s3://stream-machine-export-demo/ccd-events-demo/2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl - | head -1 | jq
```

    {
      "strmMeta": {
        "eventContractRef": "strmprivacy/example/1.3.0",
        "nonce": -1616102758,
        "timestamp": 1652188259519,
        "keyLink": "9e55c3dc-16a3-422b-91e7-b27dffd385e6",
        "billingId": "strmprodccdtest1908747604",
        "consentLevels": [
          0,
          1,
          2
        ]
      },
      "uniqueIdentifier": "unique-3",
      "consistentValue": "session-453",
      "someSensitiveValue": "AXWnGm/OjbB42PEJuXLwqZX7sRCdSlLInDpNOnJlBxiJ",
      "notSensitiveValue": "not-sensitive-6"
    }

## Exporting to an S3 compatible bucket

It is possible to export data to any S3 compatible bucket. For more information, see our
[Batch Exporter quickstart][batch-exporter].

## Exporting encryption keys

If you need to export the encryption keys, create a batch exporter with the `export-keys` option:

```bash
strm create batch-exporter test --export-keys --data-connector s3-connector --include-existing-events --path-prefix ccd-demo-keys
```

For more information, see our [quickstart on exporting keys][exporting-keys].

## Python Example

[python]: https://docs.strmprivacy.io/docs/latest/quickstart/streaming/full-example/

The [Python example][python] needs a small modification in order to work. In the `client_builder.py` file change the
`config` for

        config = ClientConfig(log_level=logging.DEBUG,
                              gateway_protocol="http",
                              gateway_host="localhost:8080")
