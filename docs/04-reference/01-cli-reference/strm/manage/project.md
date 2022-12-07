---
title: "project"
hide_title: true
---
## strm manage project

Manage a project: add or remove members. Defaults to active project

```
strm manage project [project-name] [flags]
```

### Options

```
      --add-member stringArray      [email1,email2,..]
  -h, --help                        help for project
      --remove-member stringArray   [email1,email2,..]
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

* [strm manage](docs/04-reference/01-cli-reference/strm/manage/index.md)	 - Manage a project or organization

