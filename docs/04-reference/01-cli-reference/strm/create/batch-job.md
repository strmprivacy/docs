---
title: "batch-job"
hide_title: true
---
## strm create batch-job

Create a Batch Job

### Synopsis

A Batch Job reads all events in a file via a Data Connector and writes them to one or more Data Connectors,
applying one of our privacy algorithms as defined by the job's configuration file. An encryption batch job
encrypts sensitive data, while a micro-aggregation batch job applies k-member clustering and replaces
the values of quasi identifier fields with an aggregated value (e.g. mean value of a cluster). 

A [Data Connector](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md) is a configuration
entity that comprises a location (GCS bucket, AWS S3 bucket, ...) and associated credentials.

A Data Connector must be created in the same project *before* you can create a batch job that uses it.

The policy in the Batch Job configuration file can be overridden with the policy flags.

Batch Jobs are [explained in the documentation](https://docs.strmprivacy.io/docs/latest/quickstart/batch/batch-jobs/).

### Usage

```
strm create batch-job [flags]
```

### Examples

```
A simplified example Batch Job configuration file

{
  "policyId": "5c8e653a-8102-4444-ac15-a3d1aa0ff109",
	"source_data": {
	  "data_connector_ref": { "name": "s3-batch-demo"},
	  "file_name": "online_retail_II-small.csv"
	},
	"consent": { "default_consent_levels": [ 2 ] },
	"encryption": {
	  "batch_job_group_id": "35ced9a7-413f-49e8-9320-d17ebbc7e2d2",
	  "timestamp_config": {
		"field": "InvoiceDate",
		"format": "M/d/yyyy H:m",
		"default_time_zone": { "id": "Europe/Amsterdam" }
	  }
	},
	"event_contract_ref": { "handle": "strmprivacy", "name": "online-retail",
			"version": "1.0.0" },
	"encrypted_data": {
	  "target": {
		"data_connector_ref": { "name": "s3-batch-demo"},
		"file_name": "online_retail_II/encrypted-small.csv"
	  }
	},
	"encryption_keys_data": {
	  "target": {
		"data_connector_ref": { "name": "s3-batch-demo"},
		"file_name": "online_retail_II/keys-small.csv"
	  }
	},
	"derived_data": [      {
		"target": {
		  "data_connector_ref": { "name": "s3-batch-demo"},
		  "file_name": "online_retail_II/decrypted-0-small.csv"
		},
		"consent_levels": [ 2 ],
		"consent_level_type": "CUMULATIVE"
	  }
	]
  }
```

### Options

```
  -F, --file string          the path to the JSON file containing the batch job configuration
  -h, --help                 help for batch-job
      --policy-id string     the uuid of the policy to attach
      --policy-name string   the name of the policy to attach
  -T, --type string          the type of batch job (encryption, micro-aggregation), defaults to encryption (default "encryption")
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

