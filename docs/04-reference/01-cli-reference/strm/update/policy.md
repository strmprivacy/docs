---
title: "policy"
hide_title: true
---
## strm update policy

Update a Policy

### Synopsis

Update the attributes of a Policy

Policies can only be updated while in draft state!
The policy to be updated must be referenced by its id.
You can change all other attributes of a policy.

In order to make a policy active for pipeline processing, you must first 'activate' it.

### Usage

```
strm update policy policy-id [flags]
```

### Examples

```
strm update policy 34c4709e-b8bc-4b45-aa5a-883f471869e3 --legal-grounds "EU law x.y.z"
```

### Options

```
      --description string     description of the policy
  -h, --help                   help for policy
      --legal-grounds string   legal grounds of this policy
      --name string            name
  -o, --output string          output format [plain, json, json-raw] (default "plain")
      --retention int32        retention in days of this policy (default 365)
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -p, --project string        project to use (defaults to context-configured project)
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm update](docs/04-reference/01-cli-reference/strm/update/index.md)	 - Update an entity

