---
title: "usage"
hide_title: true
---
## strm get usage

Get Usage for a certain stream name

### Synopsis

Usage allows you to see how many events were sent on a certain stream. This is currently only the events received on the
event-gateway. Extracting events via Kafka or Batch exporters is not included.

The values are interpolated from cumulative event counts, and sampled over intervals
(the --by option). The default output is csv, but json is also available.

The default range is over the last 24 hours, with a default interval of 15 minutes.

### Usage

```
strm get usage (stream-name) [flags]
```

### Examples

```
strm get usage demo --by 15m --from 2021/7/27-10:00  --until 2021/7/27-12:00

from,count,duration,change,rate
2021-07-27T10:00:00.000000+0200,173478,900,NaN,NaN
2021-07-27T10:15:00.000000+0200,182422,900,8944,9.94
2021-07-27T10:30:00.000000+0200,191363,900,8941,9.93
2021-07-27T10:45:00.000000+0200,200305,900,8942,9.94
2021-07-27T11:00:00.000000+0200,209248,900,8943,9.94
2021-07-27T11:15:00.000000+0200,218192,900,8944,9.94
2021-07-27T11:30:00.000000+0200,227134,900,8942,9.94
2021-07-27T11:45:00.000000+0200,236078,900,8944,9.94
2021-07-27T12:00:00.000000+0200,245023,900,8945,9.94
```

### Options

```
      --by string       aggregate by (seconds|..m|..h|..d)
      --from string     from YYYY/M/D-HH:mm
  -h, --help            help for usage
  -o, --output string   Usage output format [csv, json, json-raw] (default "csv")
      --until string    until YYYY/M/D-HH:mm
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

