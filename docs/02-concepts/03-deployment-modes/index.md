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

The purpose of the Control Plane, is to instruct the Data Plane. The Control Plane only holds all required meta-information
that is required to run your Data Plane. This means that the Control Plane is aware of all resources you have created and knows the configuration. This way, all tools offered by STRM Privacy, such as the [CLI](https://github.com/strmprivacy/cli)
and the [console](https://console.strmprivacy.io) can still be used, while your end-user data **never** leaves your
infrastructure, where your Data Plane is running. Furthermore, definitions of Data Contracts also reside in the Control Plane. 

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

## Choose your deployment mode

Read more on the various deployment modes of the STRM Privacy Data Plane.

<DocCardList />



