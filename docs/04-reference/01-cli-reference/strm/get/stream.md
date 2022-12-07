---
title: "stream"
hide_title: true
---
## strm get stream

Get Stream by name

```
strm get stream (name) [flags]
```

### Examples

```
strm get stream demo -o json
{
    "streamTree": {
        "stream": {
            "ref": { "name": "demo", },
            "enabled": true,
            "limits": { "eventRate": "10000", "eventCount": "10000000" },
            "credentials": [
                {
                    "clientId": "stream-2459..",
                    "clientSecret": "3rvIUfNi.."
                }
            ],
            "maskedFields": { "seed": "****" }
        }
    }
}
```

### Options

```
  -h, --help   help for stream
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

