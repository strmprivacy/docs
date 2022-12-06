---
title: "data-contract"
hide_title: true
---
## strm create data-contract

Create a Data Contract

### Synopsis

Data Contracts are the core of STRM Privacy.
See [here](https://docs.strmprivacy.io/docs/latest/concepts/data-contracts/) for details

### Usage

```
strm create data-contract (handle/name/version) [flags]
```

### Examples

```
Here's an example of a Simple Schema file

{
	"name": "GDDemo",
	"nodes": [
		{ "type": "STRING", "name": "transactionId", "required": true },
		{ "type": "STRING", "name": "userId"},
		{ "type": "STRING", "name": "email"},
		{ "type": "INTEGER", "name": "age"},
		{ "type": "FLOAT", "name": "height"},
		{ "type": "STRING", "name": "size"},
		{ "type": "INTEGER", "name": "transactionAmount"},
		{ "type": "STRING", "name": "items"},
		{ "type": "STRING", "name": "hairColor"},
		{ "type": "INTEGER", "name": "itemCount"},
		{ "type": "STRING", "name": "date"},
		{ "type": "INTEGER", "name": "purpose"}
	],
}
Here's an example of Data Contract definition file'

{
	"ref": { "handle": "strmprivacy", "name": "GDDemo", "version": "1.0.10" },
	"keyField": "transactionId",
	"validations": [
		{ "field": "email", "type": "regex", "value": "..." }
	],
	"metadata": {
		"title": "Schema used for the GDDemo",
		"description": "Somewhat valid e-commerce data",
		"industries": [ "e-commerce" ]
	},
	"fieldMetadata": [
	{
		"fieldName": "email",
		"personalDataConfig": { "isPii": true, "isQuasiId": true, "purposeLevel": 1 }
	},
	{
		"fieldName": "userId",
		"personalDataConfig": { "isPii": true, "isQuasiId": true, "purposeLevel": 1 }
	}
	]
}
```

### Options

```
      --contract-definition string   the path to the file with the keyField, and possibly piiFields and validations. See example.
  -h, --help                         help for data-contract
      --public                       whether the data contract should be made public (accessible to other STRM Privacy customers)
      --schema-definition string     filename of the schema definition (yaml or json) - either a Simple Schema, Avro Schema or Json Schema
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity

