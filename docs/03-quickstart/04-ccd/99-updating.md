---
title: Upgrading
hide_table_of_contents: false
description: How to upgrade your Data Plane.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upgrading to a new version can be done easily using Helm. The process on a high level is composed of the following
steps:

1. Check the [migration guides below](#migration-guides)
2. Determine whether you need to make required changes before upgrading
3. When upgrading multiple versions at once, determine whether smaller version increments are required
4. Follow the [upgrade commands](#upgrade-commands)

## Upgrade instructions

This section assumes that you are able to connect to your Kubernetes cluster and have the appropriate access rights
to upgrade the Helm Chart. Furthermore, this also assumes that you have followed
the [pre-requisites](docs/03-quickstart/04-ccd/01-pre-requisites.md) section and have installed the tools mentioned
there.

### Verifying cluster and namespace

First, make sure you're connected to the correct cluster and namespace:

```bash
$ kubectl config current-context
kubernetes-dev

$ kubectl config view --minify -o jsonpath='{..namespace}'
not-the-correct-namespace
```

If not connected to the correct context or namespace, use:

```bash
$ kubectl config use-context kubernetes-dev
$ kubectl config set-context --current --namespace=strmprivacy
```

:::tip
The easy way to do this is using `kubectx` (without args shows current and other contexts) and `kubens` (without args
shows current and other namespaces)
:::

### View the current deployment

To list the currently deployed Helm Chart, execute the following command:

```bash
$ helm list

NAME                   NAMESPACE  	REVISION	UPDATED                              	STATUS  	CHART      	APP VERSION
strmprivacy-data-plane strmprivacy	1       	2022-09-06 13:36:55.521427 +0200 CEST	deployed	strm-1.15.0	1.16.0
```

As the Kubernetes context and namespace just have been set to the namespace of your Data Plane Helm Chart deployment,
it only lists the Helm Charts deployed to this namespace. As you can see, the chart version is `1.15.0` here in this
example.

:::info
From chart version 1.16.0, the `appVersion` and `version`
in [`Chart.yaml`](https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/Chart.yaml) are identical. For
versions < 1.16.0, the `appVersion` differs from the `version`.
:::

### Upgrade the Helm Chart

Next, make sure you are able to access the Helm Chart Repository and do the upgrade. This depends on which installation
mode you have chosen:

:::danger
Omitting the `--version` flag in the `helm upgrade` command results in Helm upgrading to the **latest** version.
Be cautious, as this may include major version upgrades. Consult the [migration guides](#migration-guides) first.
:::

<Tabs>
<TabItem value="self-hosted" label="Self-Hosted Installation">

Ensure you have installed the GCS (Google Cloud Storage is where we host our Helm Chart Repository) plugin for Helm:

```bash
$ helm plugin install https://github.com/hayorov/helm-gcs.git
```

Add the Helm Repo if it's not added yet:

```bash
$ helm repo add strmrepo gs://stream-machine-production-helm-chart/data-plane
```

Next, upgrade the deployed Helm Chart (assuming that your chart is named `strmprivacy-data-plane`):

```bash
$ helm upgrade strmprivacy-data-plane --namespace strmprivacy strmrepo/strm --values values.yaml
```

Either use a `values.yaml` file (a pre-populated version can be downloaded from the Console, in
your [installation page](https://console.strmprivacy.io)), or use the `--set` option to set individual properties.

</TabItem>

<TabItem value="aws-marketplace" label="AWS Marketplace">

If you have followed the AWS Marketplace installation instructions, you may still have the directory to which the
previous
Helm Chart was downloaded, if so, delete that directory first and recreate it to have a clean working directory:

```bash
$ rm -r awsmp-chart
$ mkdir awsmp-chart && cd awsmp-chart
```

Then, ensure the Helm CLI can access the AWS Marketplace container registry, where the Helm Chart Repository resides:

```bash
$ aws ecr get-login-password \
    --region us-east-1 | helm registry login \
    --username AWS \
    --password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com
```

Pull and untar the Helm Chart (note that the `helm pull` command does not specify a version, keep mind of the _danger_
block shown above):

```bash
$ helm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/strm-privacy/strm
$ tar xf $(pwd)/* && find $(pwd) -maxdepth 1 -type f -delete
```

Next, upgrade the deployed Helm Chart (assuming that your chart is named `strmprivacy-data-plane`):

```bash
$ helm upgrade strmprivacy-data-plane --namespace strmprivacy ./* --values values.yaml
```

Either use a `values.yaml` file (a pre-populated version can be downloaded from the Console, in
your [installation page](https://console.strmprivacy.io)), or use the `--set` option to set individual properties.

</TabItem>
</Tabs>

:::note
If you wish to upgrade to a specific Helm Chart version of the STRM Privacy Data Plane, use the `--version 1.10.0` flag
to upgrade to a specific version (`1.10.0` in this example).
:::

For more information about Helm and Chart upgrades, please see
the [Helm upgrade documentation](https://helm.sh/docs/helm/helm_upgrade/).

### Troubleshooting

Running into issues while upgrading? [Contact us](docs/05-contact/index.md) if you require assistance.

## Migration guides

### Migrating to 1.15.0

**Chart changes**  
This release allows to configure Kubernetes Services of type `LoadBalancer` with allowed IP CIDR ranges and
configure the exposed port of the Service.

[//]: # (TODO this should be automated. Can be done by:)

[//]: # (1. Determine the tag differences between all images in the Helm Chart (take the latest Helm Chart tag and the previous, in order to find the tag differences between the images)

[//]: # (2. Get the changelog from GitLab)

[//]: # (3. Generate the application changes section)

**Application changes**  
The following images are included in this release:

- `events/event-gateway`: `v0.71.0`
- `events/web-socket`: `v1.22.0`
- `management/entity-agents/batch-jobs-agent`: `v1.17.0`
- `management/entity-agents/batch-exporters-agent`: `v1.17.0`
- `management/entity-agents/streams-agent`: `v1.20.0`
- `management/entity-agents/data-connectors-agent`: `v1.5.0`
- `management/entity-agents/confluent-schema-proxy`: `v1.2.1`
- `management/esr-proxy`: `v1.3.0`
