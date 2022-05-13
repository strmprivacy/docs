---
title: Customer Cloud Deployments
hide_table_of_contents: false
---
[console]: https://console.strmprivacy.io
[cli]: https://docs.strmprivacy.io/docs/latest/cli-index/
[api]: https://github.com/strmprivacy/api-definitions/tree/master/protos/strmprivacy

In a Customer Cloud Deployment (CCD), _all event processing takes place in a Kubernetes cluster specified by the
customer_. **Your sensitive events never leave your own cluster.**

The entities doing the processing get configured by STRM Privacy configurations _outside that cluster_, stored in the 
STRM Privacy _control plane_. Inside the _customer data plane_, several _agents_ run that frequently poll 
`api.strmprivacy.io`. Based on the configuration provided by the control plane, the agents determine whether any new
entities (e.g. a stream, a batch exporter, ...) are needed, or existing ones should be updated or removed.
The agents are therefore indirectly controlled via user actions in the [STRM Privacy Console][console] and/or the [cli][cli].

:::important
A CCD requires an outgoing firewall rule allowing access to `api.strmprivacy.io` on port 443.
All communication is TLS encrypted, and defined by a [public gRPC protocol][api].
:::

:::note
CCDs were successfully tested on multiple kubernetes implementations: local (K3S), GKE, EKS, AKS, OVHcloud.
:::
