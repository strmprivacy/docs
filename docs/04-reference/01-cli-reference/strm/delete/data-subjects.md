---
title: "data-subjects"
hide_title: true
---
## strm delete data-subjects

Delete Data Subjects

### Synopsis

Deletes 1 or more data subjects from the Data Subjects Service.
Returns the number of deleted key links that were associated with these data subjects.

### Usage

```
strm delete data-subjects (data-subject-id...) [flags]
```

### Options

```
  -h, --help            help for data-subjects
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

