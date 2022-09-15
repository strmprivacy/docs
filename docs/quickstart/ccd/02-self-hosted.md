---
title: Self-Hosted Installation
hide_table_of_contents: false
---

[helm-gcs]: https://github.com/hayorov/helm-gcs
[values]: https://console.strmprivacy.io/installation/configuration

This hands-on session shows how to get up-and-running with your Customer Cloud Deployment, and verify its
functionality.

## Step 1: Preparation

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

## Step 2: Install the Helm chart

First, add the helm repo:

```
helm repo add strmrepo gs://stream-machine-production-helm-chart/data-plane
```

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
installation, please let us know, or create a pull request
on [GitHub](https://github.com/strmprivacy/data-plane-helm-chart) to improve these docs.

Now that you are done with the setup, follow the docs on [how to interact with your cluster](./04-interacting.md) to start
using it.
