---
title: Customer Cloud Deployments
hide_table_of_contents: false
description: Don't want end-user data leaving your infrastructure? Host your own Data Plane.
---

[api]: https://github.com/strmprivacy/api-definitions/tree/master/protos/strmprivacy

A Customer Cloud Deployment (CCD) is set of software components created by STRM Privacy, deployed
in your infrastructure. The goal is for your data and encryption keys, **never** having to leave your infrastructure,
strengthening security even further regarding data subject privacy. Since data subject information never leaves your
infrastructure, you have full control over the
data, where it's stored, how long it's stored, who can access it, etc.

:::note
Data Planes were successfully tested on various (managed) Kubernetes implementations: local ([K3S](https://k3s.io/))
, [GKE](https://cloud.google.com/kubernetes-engine), [EKS](https://aws.amazon.com/eks/)
, [AKS](https://learn.microsoft.com/en-us/azure/aks/), [OVHcloud](https://www.ovhcloud.com/en/public-cloud/kubernetes/).
:::

# Overview

In the diagram below, you can see where all software runs in a CCD setup:

- On the left is your infrastructure (e.g. an AWS EKS cluster in your account).
- On the right is the STRM Privacy Control Plane (managed by STRM Privacy), which is accessible by gRPC services over
  the internet.

![ccd infra](./images/ccd.svg#fullwidth)

:::tip
With the [Helm Chart](docs/03-quickstart/04-ccd/index.md#installation) that is used to install the Data Plane in your
infrastructure, you can enable/disable various
components (e.g. disable streaming and only keep batch if only batch jobs are required).
:::

## Supporting the Control Plane

The entities doing the data processing receive their configuration from the STRM Privacy Control Plane, which is not
part of
your cluster. Inside your Data Plane, several _agents_ run that frequently poll
the STRM Privacy API. Based on the configuration provided by the control plane, the agents determine whether any new
entities (e.g. a stream, a batch exporter, ...) are needed, or existing ones should be updated or removed. The agents
are therefore indirectly controlled via user actions in the [STRM Privacy Console](https://console.strmprivacy.io)
and/or the [CLI](docs/04-reference/01-cli-reference/index.md). Furthermore, the agents automatically keep the resources
running in your Data Plane up-to-date.

:::important
All components part of the Data Plane directly (i.e. part of
the [Helm Chart](docs/03-quickstart/04-ccd/index.md#installation)), are not updated automatically. For updating your
Data Plane, please see the [updating docs](docs/03-quickstart/04-ccd/99-updating.md).
:::

The agents are an implementation of the [_desired state_](https://branislavjenco.github.io/desired-state-systems/)
approach, which is used by many other popular tools (such as Kubernetes itself). Basically,
it comes down to three steps:

1. Retrieve the desired state from a central configuration location.
2. Retrieve the actual running state in your infrastructure.
3. Compare the two and make the necessary changes to the actual running state make it equal to the desired state.
4. Repeat.

This pattern is very robust, handles failures and dependencies between resources very well. The only requirement is that
outgoing traffic to `https://api.strmprivacy.io` is allowed. No need for incoming port forwarding rules, DMZ, etc.

:::note
All communication to and from the STRM Privacy Control Plane is TLS encrypted, and defined by
an [open-source gRPC protocol][api].
:::

## Deployment in your infrastructure

The process of installing the STRM Privacy in your infrastructure is as follows:

- First, the data plane is deployed by you, using the [Helm Chart](docs/03-quickstart/04-ccd/index.md#installation).
  Here you can customize your cluster. This has to
  be done once at the start and if you'd like to install new versions of the Data Plane. It's your cluster, so we
  don't auto-update anything that is **part of the Helm Chart**. You decide if you'd like to upgrade and when it happens.
  The Helm Chart installs all components that are required to run streaming and batch data pipelines within your own
  infrastructure.
- <div class="chip-optional"> <div class="chip-content">optional</div> </div> The third party components in the Data Plane are also deployed by you, using our Helm chart. You can choose if you'd
  like to use our pre-packaged versions of Kafka, Redis and Postgres, or if you'd like to connect to an external
  Kafka, Redis and/or Postgres. For example RDS, ElastiCache or Confluent. **Note the remark below.**
- The rest is deployed by the STRM Privacy agents, using the desired state approach, as described before.

:::danger
The Kafka, Redis and Postgres deployments that are included in the Helm Chart are not configured for, nor should be used
for a production setting. Please refer to the products offered by your Cloud Vendor to see the offering for these
requirements.
:::

You can choose what components you want to enable, there are two major categories:
- **Stream Processing**. requires Kafka, Redis, Event Gateway, Streams Agent, Data Connectors Agent and Exporters
  Agent.
- **Batch Processing**. requires Postgres, Data Connectors Agent and Batch Jobs Agent.

Both can be enabled simultaneously if the requirement is to run both stream and batch data pipelines.
