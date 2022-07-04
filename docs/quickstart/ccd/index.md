---
title: About Customer Cloud Deployments
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
Customer Cloud Deployments](./../../concepts/ccd).
  
