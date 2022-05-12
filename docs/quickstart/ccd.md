
[github]: https://github.com/strmprivacy/data-plane-helm-chart/tree/master
[oma]: https://backstage.strm.in/docs/default/component/organization-management-and-access/
[jk]: https://docs.google.com/document/d/1ymb8JPaOflX8GZzICV6WCE_L0GGLRrBAPtk0dgeHJdc/edit
[telepresence]: https://www.telepresence.io/
[sinks]: https://docs.strmprivacy.io/docs/latest/quickstart/receiving-s3/#create-sink
[ovh-ingress]: https://docs.ovh.com/au/en/kubernetes/installing-nginx-ingress/

# Customer Cloud Deployments

1. make sure you have active kubernetes credentials to a cluster.
1. Create a namespace `strmprivacy` and set that as default (`kns strmprivacy`)
1. `git clone https://github.com/strmprivacy/data-plane-helm-chart.git`
1. `cd data-plane-helm-chart`
1. Make sure you have [helm](http://helm.sh) installed
1. Make sure you have an account with self-hosted capabilities. TODO!
   Download the credentials file `values.yaml` into the `data-plane-helm-chart` directory.

The `values.yaml` file should be something like this

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

## Create the helm release

`make install` should be all that is needed. `kubectl get pods --watch` or `k9s` provides nice feedback to see how the
installation is progressing.

### Create in a different namespace

**this is broken, don't use it**

You'll have to add `namespace=...` to every `make` command (or modify the `Makefile`)

    make namespace namespace=mycustomnamespace
    make install namespace=mycustomnamespace

The install seems to work correctly but trying to send events seems to go into some black
hole. *to be investigated*

## Trying again

1. `make uninstall` nicely uninstalls the helm release
1. `k delete ns strmprivacy` kills everything (including the k8s namespace)

`make wipe` combines the above two steps

# Interacting with the CCD cluster

First create two streams. _Make sure you're connected to prod, with the right CCD account_

    strm create stream pipo
    strm create stream --derived from pipo --levels 2

## Via telepresence
[`telepresence`][telepresence] is an _awesome tool_ that brings your development computer via a vpn construction in the
same network as your cluster. After you've started the agent (`telepresence connect`), you have direct access to the
entities in your Kubernetes cluster.

Make sure you set your default namespace via `kns` to `strmprivacy`.


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

Because you've create a derived stream (`pipo-2`) we should be able to see a decrypter deployment:

    kubectl get deployments.apps  -l app=decrypter-v2

    NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE
    decrypter-a268aea6-4b5b-4241-b833-9a84f4f44bc4   1/1     1            1           93m

### Sending events with the cli

In order to use the cli to simulated data, you'll need to send the events via telepresence, using the `events-api-url`
parameter (that you could also store in the strm config file (`strm context config`).

    strm simulate random-events pipo --events-api-url=http://event-gateway.strmprivacy/event --interval 5
    Sent 874 events
    Sent 1809 events
    Sent 2726 events
    ...

### Listening on the web-socket via the cli

    strm listen web-socket pipo --web-socket-url ws://web-socket.strmprivacy/ws

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -447993628, "timestamp": 1652181230883, "keyLink": "7573fc76-ae34-4c49-a3fd-d552b677ffa1", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2, 3]}, "uniqueIdentifier": "AQAsswoVM2q6Q6+eeTb5Qe61xBHTaAZZMVCh+vDf", "consistentValue": "AQAsswoPYW8+VGwOZvfh+FmSEh2UoVTRNkNWlyQOpwA=", "someSensitiveValue": "AQAsswpQCKDPUYNls3hy13IllL5vd4bz/X3rEsBI0TEV", "notSensitiveValue": "not-sensitive-64"}
    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -45323834, "timestamp": 1652181230893, "keyLink": "9ced67fc-9227-4fb2-846b-1eed521db941", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "AWzkJjeWufjZehXNpWLUQ63CG1O8jxCU6MOd3Seo", "consistentValue": "AWzkJjd3cB+36sCrtT6va3YLjCa5qw55Iy5/HevIcVU=", "someSensitiveValue": "AWzkJjcsrjNHbZCAjlEYCBdlpOVK8+eXIx6BSBDxH8VQ", "notSensitiveValue": "not-sensitive-42"}

Or a derived stream

    strm listen web-socket pipo-2 --web-socket-url ws://web-socket.strmprivacy/ws

    {"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -1742873135, "timestamp": 1652181297380, "keyLink": "556c1be7-4332-4058-9d36-5e3e5a66e121", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "unique-81", "consistentValue": "session-922", "someSensitiveValue": "AQM0jlnxbeNZSJzvJWLpnMjyYET1Jb1Yz+5yZVB5i6Dq", "notSensitiveValue": "not-sensitive-78"}

### Kafka
Install Confluent client tools.

[NOTE]:
There is currently no way for non Strmprivacy engineers to determine the Kafka topic name. So if you want to try this
contact one of your Strmprivacy support people. Exposing this information is a priority.

    ~/Downloads/confluent-7.0.1/bin/kafka-avro-console-consumer \
    --bootstrap-server kafka.strmprivacy:9092 \
    --topic stream-a268aea6-4b5b-4241-b833-9a84f4f44bc4 \
    --property schema.registry.url=http://confluent-schema-proxy.strmprivacy/confluent \
    --property print.key=true \
    --key-deserializer="org.apache.kafka.common.serialization.StringDeserializer"

    1867d5ad-f1fb-4faa-af98-f863a4f9e3e4    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":-810110116},"timestamp":{"long":1652181101870},"keyLink":{"string":"1867d5ad-f1fb-4faa-af98-f863a4f9e3e4"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[]},"uniqueIdentifier":{"string":"AR5VVyfQsta+D1XDKcPiR0sC1oE3yy301W2FMVJ9"},"consistentValue":"AR5VVydsWvZG+FkvlOFEUZCvlFY4rSpVHs1njIE8tg==","someSensitiveValue":{"string":"AR5VVyfO8S3djArRlS6ZaI4oefWUjEt9XRnT/f2r6vc="},"notSensitiveValue":{"string":"not-sensitive-84"}}
    5afc9c0a-de67-4e38-bd0a-66640f4349c7    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":1699175479},"timestamp":{"long":1652181101896},"keyLink":{"string":"5afc9c0a-de67-4e38-bd0a-66640f4349c7"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[0,1,2,3]},"uniqueIdentifier":{"string":"ASotb1YzBuuBBM981rLIzQd/EZA7Em7dxyaBg7vE"},"consistentValue":"ASotb1bYf1G/2ye4h6ELE4hlkVGZGKSt3LQe0AnZU+k=","someSensitiveValue":{"string":"ASotb1bb51OCfM9HdCqcAjTLtXqK67EuBQicTpNzIvv/"},"notSensitiveValue":{"string":"not-sensitive-95"}}


### Exporting to an s3 bucket

Create the s3 bucket and the associated `sink` (soon to be renamed to `data-connector`). See [docs][sinks] for details
about the setup.

    strm creat sink s3 --sink-type S3 .... // see [docs][sinks]

    strm create batch-exporter pipo-2 --sink s3 --path-prefix ccd-prod-ovh

You should see a batch-exporter come to live:

    kubectl get deployments.apps  -l app=batch-exporter
    NAME                                                  READY   UP-TO-DATE   AVAILABLE   AGE
    batch-exporter-c726bbff-2b68-4438-ac0d-ee877aa4dabf   1/1     1            1           2m49s

If you're running data, you should see files in your s3 bucket quickly

    aws s3 ls s3://stream-machine-export-demo/ccd-prod-ovh/
    2022-05-10 15:09:21          0 .strm_test_a6c5d566-f851-4778-a7fb-5d39d8958aa4.jsonl
    2022-05-10 15:10:02     131735 2022-05-10T13:10:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:11:01     196628 2022-05-10T13:11:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:12:01     181281 2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl
    2022-05-10 15:13:01     202094 2022-05-10T13:13:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl

Looking inside one of them 

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

## Ingress
Ingresses are quite cloud specific. The following is for [OVH][ovh-ingress]

### OVH Cloud

     helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
     helm repo update

Install the nginx ingress into the same namespace as everything else

     helm install ingress-nginx ingress-nginx/ingress-nginx

It takes a while for the loadbalancer to become valid.

    k get svc ingress-nginx-controller
    NAME                       TYPE           CLUSTER-IP    EXTERNAL-IP   PORT(S)                      AGE
    ingress-nginx-controller   LoadBalancer   10.3.65.113   <pending>     80:31624/TCP,443:30757/TCP   3m51s

TODO
