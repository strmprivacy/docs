---
title: "user-roles"
hide_title: true
---
## strm manage user-roles

Change user roles.

### Synopsis

Changes the user roles for the given users. 
All users in the request get all roles specified. Users are specified by their email address.

Possible roles: admin, approver, project-admin, member

```
strm manage user-roles [flags]
```

### Examples

```
strm manage user-roles --roles approver --users user1@example.org,user2@example.org
```

### Options

```
  -h, --help            help for user-roles
  -r, --roles strings   All roles the selected users will get
  -u, --users strings   Users by email for which roles should be changed
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

