---
title: "installation"
hide_title: true
---
## strm get installation

Get your installation by id

### Synopsis

Get your Installation information.

For customers that run STRM Privacy as a service the Installation is the STRM cloud and contains
no further interesting information.

For customers that run their processing in a [Customer Data Plane](https://docs.strmprivacy.io/docs/latest/concepts/deployment-modes/)
the Installation defines:

	id:                       a uuid for the installation
	installation_type:        one of SELF_HOSTED, AWS_MARKETPLACE, AWS_MARKETPLACE_PAYG
	installation_credentials: OAuth2 client credentials,
	                          and an image pull secret for Kubernetes images

### Usage

```
strm get installation (id) [flags]
```

### Examples

```
strm get installation 39b0fcf6-b4f2-4e63-8a17-6d122500e546 -o json

{
	"id": "39b0fcf6-b4f2-4e63-8a17-6d122500e546",
	"installationType": "SELF_HOSTED",
	"installationCredentials": {
		"clientId": "aadb51f7...",
		"clientSecret": "CeXXRu..."
		"imagePullSecret": "..."
	}
}
```

### Options

```
  -h, --help   help for installation
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

