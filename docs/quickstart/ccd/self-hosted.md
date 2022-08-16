---
title: Self-Hosted Installation
hide_table_of_contents: false
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/full-example.js';

[cli]: https://github.com/strmprivacy/cli

[github]: https://github.com/strmprivacy/data-plane-helm-chart/tree/master

[batch-exporter]: https://docs.strmprivacy.io/docs/latest/quickstart/batch/batch-exporter

[exporting-keys]: https://docs.strmprivacy.io/docs/latest/quickstart/streaming/exporting-keys/

[data-connector]: https://docs.strmprivacy.io/docs/latest/quickstart/batch/data-connectors/index.html

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

This hands-on session shows how to get up-and-running with your Customer Cloud Deployment, and verify its
functionality.

## Step 1: Make sure you are on a 'Self Hosted' subscription {#step1}

Your [STRM profile page][profile] should show: "Current subscription: Self hosted". Get in touch with your STRM
representative if you're on a Free or Business subscription.

Once you're on a self-hosted subscription, you can proceed with this quickstart guide.

## Step 2: Install the following tools {#step2}

The following tools will either be required or ease your journey in deploying the STRM Privacy Data Plane.

* [`strm`][cli]: the STRM Privacy cli. You need this to control your STRM resources, and to simulate some events.
* [`kubectl`](https://kubernetes.io/docs/tasks/tools/): the Kubernetes cli.
* [`helm`](http://helm.sh): This Kubernetes package manager is used for installing (and upgrading) your STRM
  customer data plane. Also install the [helm-gcs plugin][helm-gcs]
* [`k9s`](https://github.com/derailed/k9s) (optional): This _textual user interface_ offers a very convenient way to
  interact with kubernetes clusters.
* [`kubectx`][kctx] and [`kubens`][kctx] (optional): Very useful tools to switch the default
  kubernetes context and namespace.
* [`minio mc`][minio-mc] (optional): A useful tool to interact with S3 compatible object storage (including S3 by AWS
  itself).

## Step 3: Install the STRM Privacy Data Plane

### Preparation

1. Make sure you have active kubernetes credentials to a cluster: `kubectl get nodes` should show the nodes of your
   cluster.
1. Create a namespace `strmprivacy` (`kubectl create namespace strmprivacy`) and set that as
   default (`kubens strmprivacy`).
1. Download the credentials file `values.yaml` through [the STRM Privacy Console][values].

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

:::note
Add the [gcs plugin][helm-gcs] to helm `helm plugin install https://github.com/hayorov/helm-gcs.git`
:::

## Step 4: Install the Helm chart

**add the helm repo**

    helm repo add strmrepo gs://stream-machine-production-helm-chart/data-plane

Install _all_ the STRM components inside the `strmprivacy` namespace.

    helm install strmprivacy strmrepo/strm --values values.yaml

`kubectl get pods --watch` or `k9s` provides nice feedback to see how the
installation is progressing. We see that some supporting infrastructure like Redis, Postgresql and Kafka are also
installed. The creation of these components can be disabled, in which case configuration to the actual components will
have to be added to the Helm chart.

:::note
During creation, you'll see Error states on the event-gateway pods for instance. This is _nominal_ because it will fail
to connect to Redis, which is still being deployed. Once Redis is healthy, you'll see the event-gateway status turn
healthy
:::

:::note Create in a different namespace
Add `namespace: <your-namespace>` to the `values.yaml` file.
The namespace needs to be created *manually* with `kubectl create namespace <your-namespace>`.
With every `helm` command you should use the option `--values values.yaml`
:::

## Wrap-up

You've installed a STRM Privacy Data Plane in a Kubernetes cluster. If you have had any issues during your
installation, please let us know, or create a pull request on GitHub to improve these docs.

Now that you are done with the setup, follow the docs on [how to interact with your cluster](./interacting.md) to start
using it.
