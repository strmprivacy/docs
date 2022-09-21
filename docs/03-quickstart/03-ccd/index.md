---
title: Customer Cloud Deployments
hide_table_of_contents: false
---

## Goal

A Customer Cloud Deployment (or Self-Hosted Data Plane) is set of software components created by STRM Privacy, deployed
in your infrastructure. The goal is for your data and encryption keys, **never** having to leave your infrastructure,
strengthening security even further regarding data owner privacy.

## Terminology

Various terms are used interchangeably, among which:

- _Data Plane_ | _STRM Privacy Data Plane_  
  The set of software components, installed through a Helm Chart, facilitating batch and streaming data tasks, among
  which encryption and decryption of data.
- _Customer Cloud Deployment_ | _Self-Hosted Installation_  
  Your installation of the deployed Data Plane
- _License Type_  
  A license is required in order to install and operate a self-hosted installation. Currently, we
  support `SELF_HOSTED` (used for arbitrary Kubernetes clusters; tested in various managed Kubernetes offerings),
  and `AWS_MARKETPLACE`.

## Communication

A STRM Privacy Data Plane cannot operate without the Control Plane. Regardless of where your Data Plane runs, it needs
the STRM Privacy Control Plane to operate properly. Hence, an ongoing Internet connection is required for your Data
Plane to run smoothly. If connection is lost to the Control Plane, or during service disruptions of the Control Plane,
the Data Plane will keep on running, however, any changes to resources won't be reflected until the Internet connection
is restored or the service disruption has been resolved.

For more information on the tasks of the Control Plane and the Data Plane, please read the [concepts section about
Customer Cloud Deployments](docs/02-concepts/ccd).

## Data Plane Components {#components}

The Data Plane is composed of various software components. Each component has a specific purpose. Depending on your
needs, you may need to enable or disable specific components. All components can be found in
the [`values.yaml`](https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/values.yaml) on GitHub. The
table below describes each component and its purpose:

| Component             | Purpose                                                                                                                                                                                                                                               |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Event Gateway         | Entrypoint for streaming events. Send events using one of our [drivers](https://github.com/strmprivacy?q=driver&type=all&language=&sort=)                                                                                                             |
| Web Socket            | A web socket interface for debugging and listening to events that have been sent to a stream.                                                                                                                                                         |
| Batch Job Agent       | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new [batch jobs](/02-concepts/01-data-processing/02-batch-jobs.md) should be executed.                                                             |
| Batch Exporters Agent | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new [Batch Exporters](/03-quickstart/02-batch/batch-exporter.md) should be created.                                                                |
| Streams Agent         | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kafka topics and decrypters should be created.                                                                                                 |
| Data Connector Agent  | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kubernetes secrets should be created. The secrets are meant to be used by e.g. Batch Exporters, to be able to export data to a storage bucket. |
| ESR Proxy             | Event Statistics Recorder Proxy. Responsible for keeping track of the amount of streaming events that are sent to your Event Gateway instance.                                                                                                        |
| Decrypter Config      | A Kubernetes Config Map, meant as generic configuration for decrypter deployments, created by the Streams Agent.                                                                                                                                      |
| Batch Exporter Config | A Kubernetes Config Map, meant as generic configuration for Batch Exporter deployments, created by the Batch Exporter Agent.                                                                                                                          |
