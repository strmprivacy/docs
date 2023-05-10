---
title: Prerequisites
hide_table_of_contents: false
description: Installation of necessary tools.
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/external-code-block.js';

[cli]: https://github.com/strmprivacy/cli
[installation]: https://console.strmprivacy.io/settings/installation
[minio-mc]: https://docs.min.io/docs/minio-client-complete-guide.html
[helm-gcs]: https://github.com/hayorov/helm-gcs
[kctx]: https://github.com/ahmetb/kubectx
[aws-ccd]: docs/03-quickstart/05-ccd/03-aws-marketplace/index.md
[advanced-ccd]: docs/03-quickstart/05-ccd/02-self-hosted/01-advanced.md
[data-connectors]: docs/03-quickstart/03-data-connectors/index.md

In short, please take the following prerequisites into account to run the STRM Privacy Data Plane in your
own Cloud or infrastructure:

1. [A STRM account on the _self-hosted plan_](#step1).
2. [A _Kubernetes cluster_ with sufficient capacity](#step2).
3. [An _outgoing_ connection from this Kubernetes cluster to the internet](#step3).
4. [For streaming pipelines, a _Kafka_ and a _Redis_ cluster, accessible from the kubernetes cluster](#step4).
5. [For batch jobs, a PostgreSQL DB, accessible from the cluster](#step5).
6. [Access to either AWS S3, Google Cloud Storage, or Azure Blob Storage](#step6).
7. [A few recommended tools](#step7).

See below for more detail. As explained, for testing purposes, certain built-in alternatives are available.

### 1. Make sure you are on a 'Self Hosted' subscription {#step1}

Your STRM settings page should show an [installation tab][installation]. If it does not yet do so, please contact us.

Once you're on a self-hosted subscription, you can proceed with this quickstart guide.

### 2. Create a Kubernetes cluster with sufficient capacity {#step2}

Before you can start with the installation of the STRM Privacy Data Plane, you'll need an operational Kubernetes cluster.
For AWS, see our [dedicated quickstarts][aws-ccd]. For other platforms, follow their documentation.

:::info
For production use cases, we advise a Kubernetes cluster with a capacity of around **6 nodes of ~4vCPU/16GiB**, although
this will ultimately depend on your actual usage.

For small-scale _testing_ purposes, a single node of that capacity typically suffices. 
:::

### 3. Ensure your Kubernetes cluster has an outgoing internet connection {#step3}

The STRM Data Plane requires an **outgoing** internet connection, specifically to:

* api.strmprivacy.io:443
* accounts.strmprivacy.io:443
* The STRM Privacy Docker registry at europe-west4-docker.pkg.dev/stream-machine-production/docker-public, 
  although a [private registry][advanced-ccd] can be used instead.

### 4. Ensure a Kafka and Redis cluster are accessible from Kubernetes {#step4}

To use our streaming pipelines, a Kafka and Redis cluster are required (or Kafka- and Redis-compatible
managed solutions).
These clusters should be accessible from the Kubernetes cluster.

:::info
For testing purposes, the optional **built-in clusters** can be used (enabled by default in the Helm chart).
:::

### 5. Ensure a PostgreSQL DB is accessible from Kubernetes {#step5}

To use our batch jobs, a PostgreSQL DB is required (or Postgres-compatible managed solution),
accessible from the Kubernetes cluster.

:::info
For testing purposes, the optional **built-in PostgreSQL DB** can be used (enabled by default in the Helm chart).
:::

### 6. Ensure access to a common cloud storage solution {#step6}

To use our batch jobs, as well as batch exports for streaming pipelines, access to common cloud storage solutions
is required. We support specific authentication mechanisms detailed in our [data connector docs][data-connectors].
In short, you should be able to create the following types of credentials:

* AWS S3: AccessKey.
* Google Cloud Storage: Service Account.
* Azure Blob Storage: Client Secret Credentials, e.g. with Application with Service Principal.

### 7. Install a few recommended tools {#step7}

The following tools will either be required or ease your journey in deploying the STRM Privacy Data Plane.

* [`strm`][cli]: The STRM Privacy cli. You need this to control your STRM resources, and to simulate some events for testing purposes.
* [`kubectl`](https://kubernetes.io/docs/tasks/tools/): The Kubernetes cli.
* [`helm`](http://helm.sh): This Kubernetes package manager is used for installing (and upgrading) your STRM
  customer data plane. If you use Google Cloud, also install the [helm-gcs plugin][helm-gcs].
* [`k9s`](https://github.com/derailed/k9s) (optional): This _textual user interface_ offers a very convenient way to
  interact with kubernetes clusters.
* [`kubectx`][kctx] and [`kubens`][kctx] (optional): Very useful tools to switch the default
  kubernetes context and namespace.
* [`minio mc`][minio-mc] (optional): A useful tool to interact with S3 compatible object storage (including S3 by AWS
  itself).
