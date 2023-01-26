---
title: "diagnostics"
hide_title: true
---
## strm evaluate diagnostics

Evaluate privacy diagnostics for your dataset

```
strm evaluate diagnostics [flags]
```

### Options

```
  -F, --file string      the path to the csv file to be evaluated
  -h, --help             help for diagnostics
      --metrics string   list of metrics to calculate [k-anonymity, l-diversity, t-closeness]. defaults to all (default "k-anonymity, l-diversity, t-closeness")
      --qi string        list of comma separated quasi identifier columns: [qi1,qi2,..]
      --sa string        list of comma separated sensitive attributes columns: [sa1,sa2,..]
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

* [strm evaluate](docs/04-reference/01-cli-reference/strm/evaluate/index.md)	 - Calculate Privacy Metrics

