---
title: "schema-code"
hide_title: true
---
## strm get schema-code

Get schema code archive by data-contract-ref

### Synopsis

In order to simplify sending correctly serialized data to STRM Privacy it is recommended to use generated
source code that defines a class/object structure in a certain programming language, that knows (with help of some
open-source libraries) how to serialize objects.

The result of a `get schema-code` is a zip file with some source code files for getting started with sending events in a
certain programming language. Generally this will be code where you’ll have to do some sort of `build` step in order to
make this fully operational in your development setting (using a JDK, a Python or a Node.js environment).

### Usage

```
strm get schema-code (data-contract-ref) [flags]
```

### Examples

```
strm get schema-code strmprivacy/example/1.5.0 --language=python
Saved to python-avro-example-1.3.0.zip
```

### Options

```
  -h, --help                 help for schema-code
      --language string      which programming language. Supported are: java, typescript, python, rust
      --output-file string   destination zip file location
      --overwrite            do we allow overwriting an existing file
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm get](docs/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity

