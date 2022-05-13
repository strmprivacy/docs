---
title: Customer Cloud Deployments
hide_table_of_contents: false
---

[github]: https://github.com/strmprivacy/data-plane-helm-chart/tree/master
[telepresence]: https://www.telepresence.io/
[data-connector]: https://docs.strmprivacy.io/docs/latest/quickstart/batch-exporter/#creating-a-data-connector
[ovh-ingress]: https://docs.ovh.com/au/en/kubernetes/installing-nginx-ingress/
[profile]: https://console.strmprivacy.io/upgrading
[values]: https://console.strmprivacy.io/installation/configuration
[confluent]: https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#cp-quickstart-step-1
[makefile]: https://github.com/strmprivacy/data-plane-helm-chart/blob/master/Makefile

This hands-on sessions shows how to get up-and-running with your Customer Cloud Deployment, and verify its
functionality.

## Make sure you are on a 'Self Hosted' subscription
Your [STRM profile page][profile] should show: "Current subscription: Self hosted". Get in touch with your STRM
representative if you're on a Free or Business subscription.

Once you're on a self hosted subscription, you can proceed with this quickstart guide.

## Install the following tools

* `make` (optional): The Helm repository contains handy `make` targets such as _install_, _upgrade_, _wipe_. None of
  these are mandatory, one can also execute the commands in the [`Makefile`][makefile] by hand.
* [`kubectl`](https://kubernetes.io/docs/tasks/tools/)
* [`helm`](http://helm.sh) (required): This Kubernetes package manager is used for installing (and upgrading) your STRM
  customer data plane.
* [`telepresence`][telepresence] (optional): This tool allows your development computer to become _part of_ the k8s
  cluster, so that you can directly access k8s services.
* [`k9s`](https://github.com/derailed/k9s) (optional): This _textual user interface_ offers a very convenient way to
  interact with kubernetes clusters.
* [`kubectx and kubens`](https://github.com/ahmetb/kubectx) (optional): Very useful tools to switch the default
  kubernetes context and namespace.

## Install the STRM customer data plane

### Preparation

1. Make sure you have active kubernetes credentials to a cluster: `kubectl get nodes` should show the nodes of your
   cluster.
1. Create a namespace `strmprivacy` (`kubectl create namespace strmprivacy`) and set that as default (`kubens strmprivacy`).
1. `git clone https://github.com/strmprivacy/data-plane-helm-chart.git`. In the near future this will become part of a
   Helm repository, and this command will become `helm repo add ...`.
1. `cd data-plane-helm-chart`.
1. Download the credentials file `values.yaml` through [the STRM Privacy Console][values] into the `data-plane-helm-chart` directory.

The `values.yaml` file should be similar to this:

```yaml
  registry:
    imagePullSecret: "ewogIC...."

  license:
    installationId: "f4cea...."
    installationClientId: "ins-...."
    installationClientSecret: "tii...."

  kafka:
    enabled: true

  redis:
    enabled: true

  postgresql:
    enabled: true
```

### Install the Helm chart

This installs _all_ the STRM components inside the `strmprivacy` namespace.

`make install` should be all that is needed. `kubectl get pods --watch` or `k9s` provides nice feedback to see how the
installation is progressing. We see that some supporting infrastructure like Redis, Postgresql and Kafka are also
installed. The creation of these components can be disabled, in which case configuration to the actual components will
have to be added to the Helm chart.

### Create in a different namespace

:::warning
This is still a work in progress, so do not use it yet.
:::

Add `namespace=...` to every `make` command (or modify the `Makefile`)

    make namespace namespace=mycustomnamespace
    make install namespace=mycustomnamespace

## Interacting with the CCD cluster

First create two streams.

    strm create stream test --save
    strm create stream --derived-from test --levels 2 --save

### Via telepresence
[`telepresence`][telepresence] is an _awesome tool_ that brings your development computer via a vpn construction in the
same network as your cluster. After you've started the agent (`telepresence connect`), you have direct access to the
entities in your Kubernetes cluster.

Make sure you set your default namespace via `kubens` to `strmprivacy`.

    kubectl get svc
    NAME                              CLUSTER-IP       PORT(S)
    confluent-schema-proxy            10.3.174.226     80/TCP
    event-gateway                     10.3.68.45       80/TCP
    kafka                             10.3.47.1        9092/TCP
    kafka-headless                    None             9092/TCP,9093/TCP
    postgres                          10.3.125.90      5432/TCP
    postgres-hl                       None             5432/TCP
    redis-hallo-headless              None             6379/TCP
    redis-hallo-master                10.3.80.116      6379/TCP
    redis-hallo-replicas              10.3.228.64      6379/TCP
    strmprivacy-zookeeper             10.3.229.219     2181/TCP,2888/TCP,3888/TCP
    strmprivacy-zookeeper-headless    None             2181/TCP,2888/TCP,3888/TCP
    web-socket                        10.3.21.178      80/TCP

Because you've create a derived stream (`test-2`) we should be able to see a decrypter deployment:

    kubectl get deployments.apps  -l app=decrypter-v2

    NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE
    decrypter-a268aea6-4b5b-4241-b833-9a84f4f44bc4   1/1     1            1           93m

You could use `kubectl describe deployment decrypter...` to see the annotations on the deployment, and see that it is
indeed processing your `test-2` stream

#### Sending events with the cli

To simulate events with our cli, the `events-api-url` paramater must be set to the host exposed via telepresence (the url can also be set in the strm config file (`strm context config`).

    strm simulate random-events test --events-api-url=http://event-gateway.strmprivacy/event --interval 5
    Sent 874 events
    Sent 1809 events
    Sent 2726 events
    ...

#### Listening on the web-socket via the cli

    strm listen web-socket test --web-socket-url ws://web-socket.strmprivacy/ws

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -447993628, "timestamp": 1652181230883, "keyLink": "7573fc76-ae34-4c49-a3fd-d552b677ffa1", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2, 3]}, "uniqueIdentifier": "AQAsswoVM2q6Q6+eeTb5Qe61xBHTaAZZMVCh+vDf", "consistentValue": "AQAsswoPYW8+VGwOZvfh+FmSEh2UoVTRNkNWlyQOpwA=", "someSensitiveValue": "AQAsswpQCKDPUYNls3hy13IllL5vd4bz/X3rEsBI0TEV", "notSensitiveValue": "not-sensitive-64"}
    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -45323834, "timestamp": 1652181230893, "keyLink": "9ced67fc-9227-4fb2-846b-1eed521db941", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "AWzkJjeWufjZehXNpWLUQ63CG1O8jxCU6MOd3Seo", "consistentValue": "AWzkJjd3cB+36sCrtT6va3YLjCa5qw55Iy5/HevIcVU=", "someSensitiveValue": "AWzkJjcsrjNHbZCAjlEYCBdlpOVK8+eXIx6BSBDxH8VQ", "notSensitiveValue": "not-sensitive-42"}

Or a derived stream

    strm listen web-socket test-2 --web-socket-url ws://web-socket.strmprivacy/ws

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -1742873135, "timestamp": 1652181297380, "keyLink": "556c1be7-4332-4058-9d36-5e3e5a66e121", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "unique-81", "consistentValue": "session-922", "someSensitiveValue": "AQM0jlnxbeNZSJzvJWLpnMjyYET1Jb1Yz+5yZVB5i6Dq", "notSensitiveValue": "not-sensitive-78"}

### Consume from Kafka
Install the [Confluent client tools][confluent]. You don't have to start Confluent, you only need to add the `bin` directory
of the unpacked confluent tar file  to your `$PATH`.

You can determine the input topic of a specific decrypter (provide the full name) as follows:
```bash
kubectl get deployments.apps decrypter-... -o=jsonpath='{.metadata.annotations.input-topic}'
stream-a268aea6-4b5b-4241-b833-9a84f4f44bc4
```
Or alternatively, describe the deployment with `kubectl` or `k9s` and look up the value of `input-topic` under the annotations.

Then pass this topic to the kafka consumer:  

    ~/Downloads/confluent-7.0.1/bin/kafka-avro-console-consumer \
    --bootstrap-server kafka.strmprivacy:9092 \
    --topic stream-a268aea6-4b5b-4241-b833-9a84f4f44bc4 \
    --property schema.registry.url=http://confluent-schema-proxy.strmprivacy/confluent \
    --property print.key=true \
    --key-deserializer="org.apache.kafka.common.serialization.StringDeserializer"

    1867d5ad-f1fb-4faa-af98-f863a4f9e3e4    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":-810110116},"timestamp":{"long":1652181101870},"keyLink":{"string":"1867d5ad-f1fb-4faa-af98-f863a4f9e3e4"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[]},"uniqueIdentifier":{"string":"AR5VVyfQsta+D1XDKcPiR0sC1oE3yy301W2FMVJ9"},"consistentValue":"AR5VVydsWvZG+FkvlOFEUZCvlFY4rSpVHs1njIE8tg==","someSensitiveValue":{"string":"AR5VVyfO8S3djArRlS6ZaI4oefWUjEt9XRnT/f2r6vc="},"notSensitiveValue":{"string":"not-sensitive-84"}}
    5afc9c0a-de67-4e38-bd0a-66640f4349c7    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":1699175479},"timestamp":{"long":1652181101896},"keyLink":{"string":"5afc9c0a-de67-4e38-bd0a-66640f4349c7"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[0,1,2,3]},"uniqueIdentifier":{"string":"ASotb1YzBuuBBM981rLIzQd/EZA7Em7dxyaBg7vE"},"consistentValue":"ASotb1bYf1G/2ye4h6ELE4hlkVGZGKSt3LQe0AnZU+k=","someSensitiveValue":{"string":"ASotb1bb51OCfM9HdCqcAjTLtXqK67EuBQicTpNzIvv/"},"notSensitiveValue":{"string":"not-sensitive-95"}}


### Exporting to an S3 bucket

Create the S3 bucket and the associated `data connector`. See [here][data-connector] for details
about data connector configuration.

    strm create data-connector s3 s3-connector --credentials-file=...

    strm create batch-exporter test-2 --data-connector s3-connector --path-prefix ccd-prod-ovh

You should see a newly-created batch-exporter deployment:

    kubectl get deployments.apps  -l app=batch-exporter
    NAME                                                  READY   UP-TO-DATE   AVAILABLE   AGE
    batch-exporter-c726bbff-2b68-4438-ac0d-ee877aa4dabf   1/1     1            1           2m49s

If you're sending data, you should see files in your s3 bucket quickly:

    aws s3 ls s3://stream-machine-export-demo/ccd-prod-ovh/
    2022-05-10 15:09:21          0 .strm_test_a6c5d566-f851-4778-a7fb-5d39d8958aa4.jsonl
    2022-05-10 15:10:02     131735 2022-05-10T13:10:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:11:01     196628 2022-05-10T13:11:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:12:01     181281 2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:13:01     202094 2022-05-10T13:13:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl

Looking inside one of them:

    aws s3 cp s3://stream-machine-export-demo/ccd-prod-ovh/2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl - | head -1 | jq
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

### Python Example

[python]: https://docs.strmprivacy.io/docs/latest/quickstart/full-example/

The [Python example][python] needs a small modification in order to work. In the `client_builder.py` file change the
`config` for

        config = ClientConfig(log_level=logging.DEBUG,
                              gateway_protocol="http",
                              gateway_host="event-gateway.strmprivacy")

## Trying again

If you've made mistakes and want to start over:

1. `make uninstall` cleanly uninstalls the helm release
1. `kubectl delete ns strmprivacy` kills everything (including the k8s namespace). Don't forget to recreate the
   namespace afterwards.

`make wipe` combines the above two steps
