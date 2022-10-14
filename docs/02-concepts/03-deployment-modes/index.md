import DocCardList from '@theme/DocCardList';

# Deployment Modes

To understand the various ways STRM Privacy can be deployed, first, the separation between Data Plane and Control Plane
needs to be explained. The Data Plane and Control Plane work together to enable you to run data pipelines, where and
how you want.

## Separation of concern

### Data Plane

The purpose of the Data Plane, is to act as the set of software components that is responsible for receiving,
processing (i.e. applying encryption, privacy transformations, validations, etc.), and transporting data.
The Data Plane can either be hosted by STRM Privacy (_SaaS_), or be hosted elsewhere. The sections listed below are the
various ways the Data Plane can be deployed.

### Control Plane

The purpose of the Control Plane, is to instruct the Data Plane. The Control Plane only holds all required
meta-information
that is required to run your Data Plane. This means that the Control Plane is aware of all resources you have created
and knows the configuration. This way, all tools offered by STRM Privacy, such as
the [CLI](https://github.com/strmprivacy/cli)
and the [console](https://console.strmprivacy.io) can still be used, while your end-user data **never** leaves your
infrastructure, where your Data Plane is running. Furthermore, definitions of Data Contracts also reside in the Control
Plane.

### Terminology

Various terms are used interchangeably, among which:

- _Data Plane_ / _STRM Privacy Data Plane_  
  The set of software components, installed through a Helm Chart, facilitating batch and streaming data tasks, among
  which encryption and decryption of data.
- _Customer Cloud Deployment_ / _Self-Hosted Installation_  
  Your installation of the deployed Data Plane
- _License Type_  
  A license is required in order to install and operate a self-hosted installation. Currently, we
  support `SELF_HOSTED` (used for arbitrary Kubernetes clusters; tested in various managed Kubernetes offerings),
  and `AWS_MARKETPLACE`.

## Data Plane Components

The Data Plane is composed of various software components. Each component has a specific purpose. Depending on your
needs, you may need to enable or disable specific components. All components can be found in
the [`values.yaml`](https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/values.yaml) on GitHub. The
table below describes each component and its purpose:

| Component             | Purpose                                                                                                                                                                                                                                               |
|-----------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Event Gateway         | Entrypoint for streaming events. Send events using one of our [drivers](https://github.com/strmprivacy?q=driver&type=all&language=&sort=)                                                                                                             |
| Web Socket            | A web socket interface for debugging and listening to events that have been sent to a stream.                                                                                                                                                         |
| Batch Job Agent       | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new [batch jobs](docs/02-concepts/01-data-processing/04-batch-jobs.md) should be executed.                                                             |
| Batch Exporters Agent | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new [Batch Exporters](docs/03-quickstart/01-streaming/04-receiving-data/01-batch-export.md) should be created.                                                                |
| Streams Agent         | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kafka topics and decrypters should be created.                                                                                                 |
| Data Connector Agent  | A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kubernetes secrets should be created. The secrets are meant to be used by e.g. Batch Exporters, to be able to export data to a storage bucket. |
| ESR Proxy             | Event Statistics Recorder Proxy. Responsible for keeping track of the amount of streaming events that are sent to your Event Gateway instance.                                                                                                        |
| Decrypter Config      | A Kubernetes Config Map, meant as generic configuration for decrypter deployments, created by the Streams Agent.                                                                                                                                      |
| Batch Exporter Config | A Kubernetes Config Map, meant as generic configuration for Batch Exporter deployments, created by the Batch Exporter Agent.                                                                                                                          |

### States

Periodically, various components that are continuously running applications, report their state to STRM Privacy. This
allows you to view and keep an eye on the various components via
the [console](https://console.strmprivacy.io/installation/status).
States can be any of the following:

| State         | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| Unknown       | No status reported yet.                                                 |
| Provisioned   | The Helm chart has been installed, but an application isn't yet started |
| Running       | The application is running correctly                                    |
| Error         | An error occurred, preventing the application to run correctly          |
| Shutting down | The application is shutting down.                                       |

:::info
Currently, we assume that the developer that has access to the STRM Privacy account that is allowed to install a Data
Plane, also has access to the Kubernetes cluster where the Data Plane is running. When errors occur, please check the
deployed component's logs to see why the application is not running correctly.
We are working on better monitoring tools, please [contact us](docs/05-contact/index.md) if you are interested in this.
:::

## Choose your deployment mode

Read more on the various deployment modes of the STRM Privacy Data Plane.

<DocCardList />



