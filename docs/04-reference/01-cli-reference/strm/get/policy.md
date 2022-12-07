---
title: "policy"
hide_title: true
---
## strm get policy

Get Policy by name or id

### Synopsis

Get a Policy by name or by --id=policy-id

```
strm get policy [name] [flags]
```

### Examples

```
strm get policy "1 year" or strm get policy --id=34c4709e-b8bc-4b45-aa5a-883f471869e3
	Name: 1 year
	Id: 5c8e653a-8102-4444-ac15-a3d1aa0ff109
	Description:
	Retention(days): 365
	Legal Grounds:
	State: STATE_ACTIVE

strm get policy --get-default-policy
	Name: 7 years
	Id:
	Description: Default 7 year retention
	Retention(days): 2556
	Legal Grounds:
	State: STATE_ACTIVE
```

### Options

```
      --get-default-policy   get the no-name/no-id default policy
  -h, --help                 help for policy
      --id string            policy id
  -o, --output string        output format [plain, json, json-raw] (default "plain")
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm get](docs/04-reference/01-cli-reference/strm/get/index.md)	 - Get an entity

