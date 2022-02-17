---
title: gRPC API definition
hide_table_of_contents: false
---

# gRPC and Evans

STRM Privacy is controlled via gRPC api definitions. The CLI is no more
than an interface to this API, with an authorization token. The
definitions are public on GitHub [^1].

# Playing with Evans

[Evans](https://github.com/ktr0731/evans) is an API aware client for
gRPC. It can interact with a server and via reflection see exactly what
services the server offers.

    $ strm auth refresh
    $ export token=$(strm auth access-token  )
    $ evans -r --host apis.strmprivacy.io --port 443 --tls \
      --header authorization="Bearer $token"

      ______
     |  ____|
     | |__    __   __   __ _   _ __    ___
     |  __|   \ \ / /  / _. | | '_ \  / __|
     | |____   \ V /  | (_| | | | | | \__ \
     |______|   \_/    \__,_| |_| |_| |___/

     more expressive universal gRPC client


    apis.strmprivacy.io:443> package strmprivacy.api.schemas.v1

    strmprivacy.api.schemas.v1@apis.strmprivacy.io:443> service SchemasService

    strmprivacy.api.schemas.v1.SchemasService@apis.strmprivacy.io:443> call ListSchemas
    billing_id (TYPE_STRING) => .....
    filter (TYPE_STRING) =>
    {
      "schemas": [
        {
          "ref": {
            "handle": "strmprivacy",
            "name": "clickstream",

[^1]: will be published soon
