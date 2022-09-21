---
title: Authentication via the CLI
hide_table_of_contents: false
sidebar_position: 5
---


The STRM Privacy CLI is a command line interface for interacting with
it. You can find its source code and binary at
[github.com/strmprivacy/cli](https://github.com/strmprivacy/cli)

:::note
The STRM Privacy Web Console currently provides only limited
functionality. You will *need to use the CLI*.
:::

The CLI is little more than a thin interface to the [STRM Privacy gRPC
interface](/03-quickstart/grpc.md).

## Logging in

First create an account at
[console.strmprivacy.io](https://console.strmprivacy.io) and use the
login to the CLI. You’ll be redirected to your browser to complete the
login flow.

```bash
$ strm auth login
Follow the login flow in your browser, which is opened automatically. If not, open the following URL to complete the login:

    https://accounts.strmprivacy.io/auth/realms/users/protocol/openid-connect/auth...

You are now logged in as [demo@strmprivacy.io].
```
This creates a file that contains a valid OAuth2.0 id and refresh token,
in the application configuration directory [^1].

You can use `strm auth print-access-token` to get the access token,
which will be refreshed is necessary. The `billingId` is not shown
anymore since version `1.9.0` of the CLI when printing the access token,
but can still be found with each reference to a stream (i.e.
`strm get stream my-stream --output json` will show the `billingId` as a
part of the stream reference). The `billingId` is required when using

the client drivers.
```bash
$ strm auth print-access-token
eyJ...iLCJ0eXAiOiJKV1QifQ.eyJp....abcN_F
```
[^1]: `~/.config/strmprivacy`
