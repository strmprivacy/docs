---
title: gRPC API definition
hide_table_of_contents: false
---

# gRPC and CLI

STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an
authorization token. The [definitions are public on GitHub](https://github.com/strmprivacy/api-definitions).

In a similar way, the [STRM Console](https://console.strmprivacy.io) is also only an interaction with this api.

Because of this _api first_ design, it's quite feasible to _automate_ interaction of your systems with STRM.

# Interactive gRPC command line interface

[Evans](https://github.com/ktr0731/evans) is an API aware client for gRPC. It can interact with a server and via
reflection see exactly what services the server offers, through reflection.

```bash
# Make sure you're logged in, otherwise login with:
strm auth login
```

```bash
evans -r repl --host api.strmprivacy.io --port 443 --tls \
  --header "authorization=Bearer $(strm auth print-access-token)" \
  --package strmprivacy.api.schemas.v1 \
  --service SchemasService
```


```
      ______
     |  ____|
     | |__    __   __   __ _   _ __    ___
     |  __|   \ \ / /  / _. | | '_ \  / __|
     | |____   \ V /  | (_| | | | | | \__ \
     |______|   \_/    \__,_| |_| |_| |___/

     more expressive universal gRPC client


strmprivacy.api.schemas.v1.SchemasService@api.strmprivacy.io:443> call ListSchemas
billing_id (TYPE_STRING) =>
filter (TYPE_STRING) =>
handle (TYPE_STRING) =>
name (TYPE_STRING) =>
✔ FILTER_PUBLIC_PRIVATE_UNSPECIFIED
✔ SCHEMA_TYPE_UNSPECIFIED
<repeated> labels::key (TYPE_STRING) =>
<repeated> domains (TYPE_STRING) =>
<repeated> industries (TYPE_STRING) =>
{
  "schemas": [
    {
      "definition": "{\"type\":\"record\",\"name\":\"TestSchema\",\"namespace\":\"farah.....
      "fingerprint": "3459417286125971574",
      "id": "4cd09571-0317-436f-8540-58d4e1ddf2c9",
      "is_public": true,
      "metadata": {
```

:::note type `ctrl-D` to exit the `repeated` entries in Evans.
:::

