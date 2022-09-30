---
title: Customer Cloud Deployments
hide_table_of_contents: false
---

import DocCardList from '@theme/DocCardList';

## Installation

The installation of the Data Plane is always done through
the [Helm Chart](https://github.com/strmprivacy/data-plane-helm-chart)
that is provided and maintained by STRM Privacy. This allows for easy installation, upgrades, and since the chart is
open source, you could make modifications if required. Furthermore, the Helm Chart allows you to enable/disable
various [components](#components).

:::important
Installing the STRM Privacy Data Plane can only be done when this is enabled for your account.
Please [get in touch with sales](https://strmprivacy.io/request-demo/) if you are interested in this.
:::

## Communication

A STRM Privacy Data Plane cannot operate without the Control Plane. Regardless of where your Data Plane runs, it needs
the STRM Privacy Control Plane to operate properly. Hence, an ongoing Internet connection is required for your Data
Plane to run smoothly. If connection is lost to the Control Plane, or during service disruptions of the Control Plane,
the Data Plane will keep on running, however, any changes to resources won't be reflected until the Internet connection
is restored or the service disruption has been resolved.

For more information on the tasks of the Control Plane and the Data Plane, please read the [concepts section about
Customer Cloud Deployments](docs/02-concepts/03-deployment-modes/index.md).

## Installing your data plane

Follow along with the following quickstarts to get started with your Data Plane.

<DocCardList />
