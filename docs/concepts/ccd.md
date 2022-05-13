---
title: Customer Cloud Deployments
hide_table_of_contents: false
---
[console]: https://console.strmprivacy.io
[cli]: https://docs.strmprivacy.io/docs/latest/cli-index/
[api]: https://github.com/strmprivacy/api-definitions/tree/master/protos/strmprivacy

In a Customer Cloud Deployment (CCD), _all event processing takes place in a Kubernetes cluster specified by the
customer_. **Your sensitive events never leave your own cluster.**

The entities doing the processing get configured by Strmprivacy controls _outside that cluster_, in the Strmprivacy
cloud. Inside the _customer data plane_ several _agents_ are running that query `api.strmprivacy.io` every few seconds.

:::important
This requires an outgoing firewall rule allowing access to `api.strmprivacy.io` on port 443. All communication is TLS
encrypted, and defined by a [public gRPC protocol][api].
:::

The agents are indirectly controlled via the [Strmprivacy Console][console] and/or the [cli][cli].


