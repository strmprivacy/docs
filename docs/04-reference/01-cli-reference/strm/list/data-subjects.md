---
title: "data-subjects"
hide_title: true
---
## strm list data-subjects

List a page of data subjects

### Synopsis

Query the Data Subjects service for a list of data-subjects.

Returns paginated data. If one page of data has following pages, its `next_page_token`
field must be added to the following call via the `page-token` flag.

### Usage

```
strm list data-subjects [flags]
```

### Options

```
  -h, --help                help for data-subjects
  -o, --output string       output format [plain, plain0, json, json-raw] (default "plain")
      --page-size int32     maximum number of items to be returned
      --page-token string   page token to be entered for next page.
                            Use the nextPageToken (if any) returned from the previous call
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

* [strm list](docs/04-reference/01-cli-reference/strm/list/index.md)	 - List entities

