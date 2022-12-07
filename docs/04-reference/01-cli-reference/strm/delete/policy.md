---
title: "policy"
hide_title: true
---
## strm delete policy

Delete Policy by name or id

### Synopsis

Delete a Policy by name or id.
Policies can only be deleted in DRAFT state.

### Usage

```
strm delete policy [name] [flags]
```

### Examples

```
strm delete policy "1 year" or strm delete policy --id=34c4709e-b8bc-4b45-aa5a-883f471869e3
```

### Options

```
  -h, --help            help for policy
      --id string       policy id
  -o, --output string   output format [plain, json, json-raw] (default "plain")
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

* [strm delete](docs/04-reference/01-cli-reference/strm/delete/index.md)	 - Delete an entity

