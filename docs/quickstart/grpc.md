---
title: gRPC API definition
hide_table_of_contents: false
---

# gRPC and CLI

STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an
authorization token. The [definitions are public on GitHub](https://github.com/strmprivacy/api-definitions).

# Interactive gRPC command line interface

[Evans](https://github.com/ktr0731/evans) is an API aware client for gRPC. It can interact with a server and via
reflection see exactly what services the server offers, through reflection.

    $ # Make sure you're logged in, otherwise login with:
    $ strm auth login
    $ evans -r repl --host api.strmprivacy.io --port 443 --tls \
      --header "authorization= Bearer $(strm auth print-access-token)"

      ______
     |  ____|
     | |__    __   __   __ _   _ __    ___
     |  __|   \ \ / /  / _. | | '_ \  / __|
     | |____   \ V /  | (_| | | | | | \__ \
     |______|   \_/    \__,_| |_| |_| |___/

     more expressive universal gRPC client


    api.strmprivacy.io:443> package strmprivacy.api.schemas.v1

    strmprivacy.api.schemas.v1@api.strmprivacy.io:443> service SchemasService

    strmprivacy.api.schemas.v1.SchemasService@api.strmprivacy.io:443> call ListSchemas
    billing_id (TYPE_STRING) => .....
    filter (TYPE_STRING) =>
    {
      "schemas": [
        {
          "ref": {
            "handle": "strmprivacy",
            "name": "clickstream",


