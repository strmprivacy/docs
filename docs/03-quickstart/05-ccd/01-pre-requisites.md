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

This section shows guides you through setting up all the prerequisites for running the STRM Privacy Data Plane in your
own Cloud or infrastructure.

## Step 1: Make sure you are on a 'Self Hosted' subscription {#step1}

Your STRM settings page should show an [installation tab][installation].

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

## Step 3: Ensure an operational Kubernetes cluster {#step3}

Before you can start with the installation of the STRM Privacy Data Plane, you'll need an operational Kubernetes cluster.
The respective sections regarding public clouds will mention how to set this up if you haven't done so yet.
