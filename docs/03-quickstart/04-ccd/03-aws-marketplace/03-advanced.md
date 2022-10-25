---
title: Advanced Configuration
hide_table_of_contents: false
description: Advanced setups of AWS Marketplace based Data Plane configurations.
---

# Advanced Configuration
## Using a values.yaml

It is recommended to use a `values.yaml` over the `--set` option, as this prevents secrets from ending up in
your terminal history and eases repeatability. If you plan to use a `values.yaml` instead of the inline Helm values:
1. make sure to set the `license.installationType` to `AWS_MARKETPLACE`
2. the `registry.imagePullSecret` can be omitted / left blank, as this is facilitated by your AWS Marketplace
   deployment

Run the following command to install the Helm chart (ensure that your working directory is `awsmp-chart` as
also shown in the `--set` example above):
```shell
helm install strmprivacy --namespace strmprivacy ./* --values values.yaml
```

After these steps, you should end up with a namespace `strmprivacy` with, by
default, [all components](docs/03-quickstart/04-ccd/index.md#components) enabled. If you
wish otherwise, you can edit the `values.yaml` to match your needs.


## Using managed pre-requisites for the Data Plane

As the STRM Privacy Data Plane depends on Kafka, Redis and/or a Postgres Database, you should only use the embedded
instances of these pre-requisites to deploy your initial version. For production purposes, we recommend to use managed
instances.

### Purpose of using managed instances

The subcharts for Kafka, Redis and PostgreSQL that are included in the STRM Privacy Data Plane Helm Chart are not meant
for production purposes, as they have not been configured as such. Furthermore, not all Kubernetes Clusters fulfill the
pre-requisites for this (e.g. support for persistent storage). The more convenient route here, is to use managed
instances of the pre-requisites for your Data Plane. The following sections discuss how to set up these managed
instances.

### AWS RDS for PostgreSQL

To be able to run Batch Jobs, a PostgreSQL database is required. Please follow the steps from
the [AWS RDS for PostgreSQL guide](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html)
, in order to setup a PostgreSQL database for your STRM Privacy Data Plane. Make sure to implement the best practices to
backup and restore data at any point in time as
described [here](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html). General
remarks considering the database:

- Create a separate user (following
  the [principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege)) with read and write
  access rights to the database. Set the credentials in the `values.yaml` for the PostgreSQL user.
- Data usage will increase over time, therefore, it is wise to
  enable [AWS RDS Storage Autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html)
  to prevent manual interventions.

### AWS MSK for Apache Kafka

To be able to run any streaming tasks, a Kafka (or Kafka API compatible) cluster is required. Please follow the steps
from the [AWS MSK for Apache Kafka guide](https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html) to
setup a managed Kafka cluster in your AWS account. Take note of the private bootstrap servers (and
possibly [credentials](docs/03-quickstart/04-ccd/06-authenticated.md)) and set the value in the `values.yaml`.

### AWS ElastiCache for Redis

To be able to run any streaming tasks, a Redis (or Redis API compatible) deployment is required. Please follow the steps
from
the [AWS ElastiCache for Redis guide](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.html)
to setup a managed Redis deployment. Take note of the endpoint (and
possibly credentials) and set the value in the `values.yaml`.


## Routing traffic

The Helm chart includes `ClusterIP` Kubernetes services by default to route traffic to. If you need to route traffic
from outside the cluster to one of the STRM Privacy applications, set `services.loadbalancer.enabled` to
`true` to create a `LoadBalancer` Kubernetes service.
Arbitrary annotations can be added with `services.loadbalancer.annotations`, which allows you to configure
the Network Load Balancer to fit your
needs ([view all annotations here](https://kubernetes-sigs.github.io/aws-load-balancer-controller/latest/guide/service/annotations/#subnets)):
   ```yaml
   services:
     loadbalancer:
       enabled: true
       annotations:
         service.beta.kubernetes.io/aws-load-balancer-scheme: "internet-facing"
   ```
