---
title: "users"
hide_title: true
---
## strm list users

List all users of your organization or members of the active project

### Synopsis

List all the current users in either your organization or just those that are member of your active project.

Either set the organization flag or the project flag.

### Usage

```
strm list users [flags]
```

### Examples

```
strm list users --organization
 EMAIL                     FIRST NAME   LAST NAME   USER ROLES

 [...]@strmprivacy.io   bob          rbac        [MEMBER]
 [...]@strmprivacy.io       Demo         STRM        [ADMIN MEMBER]
```

### Options

```
  -h, --help           help for users
      --organization   list the users in your organization
      --project        list the members of your project
```

### Options inherited from parent commands

```
      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")
      --api-host string       api host and port (default "api.strmprivacy.io:443")
  -o, --output string         output format [json, json-raw, table, plain] (default "table")
  -r, --recursive             Retrieve entities and their dependents
      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
```

### SEE ALSO

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

