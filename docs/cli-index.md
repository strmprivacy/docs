---
title: STRM Privacy CLI reference
hide_table_of_contents: false
sidebar_position: 2
---

The STRM Privacy CLI (strm) is the primary tool for managing your STRM
Privacy resources.

The CLI follows the same structure as many other popular CLI tools, like
`kubectl`. This is visible in the following way:

## Principles

### Verbs first

Most commands in the CLI start with a verb, and then a noun, for
example: `create stream`.

The currently supported verbs are:

-   `create`: Create a new resource. An error is returned if the
    resource already exists

-   `update`: Update an existing resource. An error is returned if the
    resource does not exist.

-   `delete`: Delete an existing resource. An error is returned if the
    resource does not exist.

-   `list`: List resources of a given type, with optional filters. An
    empty list is returned if nothing is found.

-   `get`: Get a resource by its primary key (usually a "name" or "ref"
    attribute). An error is returned if the resource does not exist.

### Sensible defaults

Not every attribute needs to be specified when creating resources, so
typically only one or two options are needed to create a resource.

## Global commands

The following commands that are not directly tied to a resource are
available in the CLI:

-   `help`: The general help page.

-   `version`: Displays the current version and build information.

-   `auth`: Various authentication commands for the CLI.

-   `completion`: generates completions for a given terminal (bash, zsh,
    fish, PowerShell)

-   `simulate`: Runs a simulation with events on a given stream.

-   `listen`: Connects to an endpoint to listen for events.

## Global flags {#global-flags}

--api-auth-url --api-host --web-socket-url --events-auth-url --output
--token-file

--api-auth-url  
Auth URL for user logins (default "https://accounts.strmprivacy.io")

--api-host  
API host name (default "apis.strmprivacy.io:443")

--web-socket-url  
Websocket to receive events from (default
"wss://websocket.strmprivacy.io/ws").

--events-auth-url  
Security Token Service for events (default "https://sts.strmprivacy.io")

--help  
Displays the help page

--recursive  
Available on many `list`, `get` and `delete` commands. Displays the
dependents of an entity in the case of `list` and `get` .Deletes the
entity along with its dependents in the case of `delete`.

--save  
Available on many create commands. Saves the entity details to a JSON
file in the config directory.

--token-file  
config file (default is
$HOME/.config/strmprivacy/strm-creds-&lt;api-auth-host&gt;.json)

## Entities

The following entities are available in the CLI:

- batch-exporter
- data-connector
- event contract
- kafka-cluster
- kafka-exporter
- kafka-user
- key-stream
- schema
- schema-code
- stream
- usage

## Making some options permanent {#permanent}

Assume you always want to use `--save` on stream creation commands.

Edit the file named `config.yaml` in the configuration directory, and
uncomment the line `save: true`

**~/.config/strmprivacy/config.yaml**

    save: true

This works similarly for any of the other *flags*.

Note that the flag `interval` is used both by the [sim](/cli-reference/strm/simulate/random-events.md) and
[batch-exporter](/cli-reference/strm/create/batch-exporter.md) entities but in one case with a
meaning of seconds, and in the other of milliseconds, so this one is
probably not a good one to make permanent. Although you can override the
value if the configuration file with one on the command line.
