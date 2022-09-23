---
title: Customer Cloud Deployments
hide_table_of_contents: false
description: Don't want end-user data leaving your infrastructure? Host your own Data Plane.
---
[console]: https://console.strmprivacy.io
[cli]: /cli-index/
[api]: https://github.com/strmprivacy/api-definitions/tree/master/protos/strmprivacy

# Summary

In a Customer Cloud Deployment (CCD), _all event processing takes place in a Kubernetes cluster specified by the
customer_. **Your sensitive events never leave your own cluster.**

The entities doing the processing get configured by STRM Privacy configurations _outside that cluster_, stored in the
STRM Privacy _control plane_. Inside the _customer data plane_, several _agents_ run that frequently poll
`api.strmprivacy.io`. Based on the configuration provided by the control plane, the agents determine whether any new
entities (e.g. a stream, a batch exporter, ...) are needed, or existing ones should be updated or removed. The agents
are therefore indirectly controlled via user actions in the [STRM Privacy Console][console] and/or the [cli][cli].

:::note CCDs were successfully tested on multiple Kubernetes implementations: local (K3S), GKE, EKS, AKS, OVHcloud.
:::

# CCD explained

![ccd infra](./images/ccd.svg#fullwidth)

## CCD infrastructure

In the graphic above, you can see where all software runs in a CCD setup.

- On the left is your infrastructure (e.g. AWS account).
- On the right is our SAAS, which is accessible by gRPC services over the internet. We call this the "control plane".

## Customer infrastructure

Logically, your infrastructure is divided into multiple parts:

- The "data plane", which is the software where all data processing takes place.
- A part of the "control plane", which runs in your infrastructure, responsible for managing the data plane.

The idea is that with a CCD, none of your data leaves your infrastructure to our SAAS, giving you full control over the
data, where it's stored, how long it's stored, who can access it, etc.

Additionally, you can choose which parts of the STRM data plane you'd like to run on your infrastructure, either just
the streaming engine, or the batch engine, or both.

## Control plane at customer

In your infrastructure, we install some "agents". Agents are our software components, running in Kubernetes, which
manage the software in the data planes. They automatically keep your data plane in sync when for example you create a 
stream or exporter.

The agents are an implementation of the "desired state" approach, which is used by many other popular tools. Basically,
it comes down to three steps:

1. Retrieve the desired state from a central configuration location.
2. Retrieve the actual running state in your infrastructure.
3. Compare the two and make the necessary changes to the actual running state make it equal to the desired state.
4. Repeat.

This pattern is very robust, handles failures and dependencies between resources very well and, from a CCD perspective
is relatively easy to implement on your side. The only requirement is that outgoing traffic to `api.strmprivacy.io` on
port 443 is allowed. No need for incoming port forwarding rules, DMZ, etc.

:::note
All communication to and from the STRM SAAS is TLS encrypted, and defined by a [public gRPC protocol][api].
:::

## Deployment in your infrastructure

The parts are deployed in two ways:
- First, the control plane is deployed by you, using our Helm chart. Here you can customize your cluster. This has to
  be done once at the start and if you'd like to install new versions of the STRM software. It's your cluster, so we
  don't auto-update anything. You decide if you'd like to upgrade and when it happens.
- The third party components in the data plane is also deployed by you, using our Helm chart. You can choose if you'd
  like to use our pre-packaged versions of Kafka, Redis and Postgres, or if you'd like to connect to an external
  Kafka, Redis and/or Postgres. For example RDS, ElastiCache or Confluent. Note that our pre-packaged versions have
  simple configurations and are not meant for production usage
- The generic STRM software, like the Event Gateway are also deployed through the Helm chart.
- All the rest is deployed by the STRM agents, using the desired state approach, as described before.

You can choose what you'd like to run, but there are two major categories:

- The streaming engine, which requires Kafka, Redis, Event Gateway, Streams Agent, Data Connectors Agent and Exporters
  Agent.
- The batch engine, which requires Postgresql, Data Connectors Agent and Batch Jobs Agent. 

You can choose to deploy just one of these or both.
