---
title: API Reference
hide_table_of_contents: false
---

import DocCardList from '@theme/DocCardList';

STRM Privacy is mainly controlled via gRPC APIs. The API Reference is available via
both [GitHub](https://github.com/strmprivacy/api-definitions) and
the [Buf Schema Registry](https://buf.build/strmprivacy/apis/).

# CLI

The CLI is no more than an interface to this API, with an
authorization token. The [definitions are public on GitHub](https://github.com/strmprivacy/api-definitions).

In a similar way, the [STRM Console](https://console.strmprivacy.io) is also only an interaction with this API.

Because of this _api first_ design, it's quite feasible to _automate_ interaction of your systems with STRM.

:::note
To support Infrastructure as Code, we're planning on building a Terraform Provider.
Please [contact us](docs/05-contact/index.md) if you are interested in this.
:::

<DocCardList />
