---
title: Evans
hide_table_of_contents: false
description: An interactive command line for exploring gRPC APIs
---

[Evans](https://github.com/ktr0731/evans) is an API aware client for gRPC. It can interact with a server and via
reflection see exactly what services the server offers. The CLI is only used to guide you through
the login process and getting an OAuth2.0 access token.

```bash
# Make sure you're logged in, otherwise login with:
strm auth login
```

```bash
evans -r repl --host api.strmprivacy.io --port 443 --tls \
      --header "authorization=Bearer $(strm auth print-access-token)" \
      --package strmprivacy.api.data_contracts.v1 \
      --service DataContractsService
```

```
  ______
 |  ____|
 | |__    __   __   __ _   _ __    ___
 |  __|   \ \ / /  / _. | | '_ \  / __|
 | |____   \ V /  | (_| | | | | | \__ \
 |______|   \_/    \__,_| |_| |_| |___/

 more expressive universal gRPC client


strmprivacy.api.data_contracts.v1.DataContractsService@api.strmprivacy.io:443> call ListDataContracts
billing_id (TYPE_STRING) =>
filter (TYPE_STRING) =>
handle (TYPE_STRING) =>
name (TYPE_STRING) =>
✔ FILTER_PUBLIC_PRIVATE_UNSPECIFIED
<repeated> labels::key (TYPE_STRING) =>
<repeated> domains (TYPE_STRING) =>
<repeated> industries (TYPE_STRING) =>
project_id (TYPE_STRING) =>
{
  "data_contracts": [
    {
      "id": "4f296d9b-0e4e-451c-baf2-77389a753262",
      "is_public": true,
      "key_field": "consistentValue",
      "metadata": {
```

:::note
To exit the `repeated` entries in Evans, type <kbd>CTRL</kbd>+<kbd>D</kbd>.
:::

The entire STRM Privacy API can be accessed this way. The `CLI` however, offers a way more convenient way to access the
API.
