Usage allows you to see how many events were sent on a certain stream.
This is currently only the events received on the event-gateway.
Extracting events via Kafka or Batch exporters is not included.

## get

Get usage on a topic by name

### Usage

```bash
strm get usage --help

Returns the usage for a certain stream over a certain period.

The values are interpolated from cumulative event accounts, and sampled over intervals
(the --by option). The default output is csv, but json is also available.

The default range is over the last 24 hours, with a default interval of 15 minutes.

Usage:
  strm get usage (stream-name) [flags]

Flags:
      --by string      aggregate by (seconds|..m|..h|..d)
      --from string    from YYYY/M/D-HH:mm
  -h, --help           help for usage
      --json           json output
      --until string   until YYYY/M/D-HH:mm
```

### Arguments

stream-name  
the name of the stream for which to retrieve usage data.

### Flags

--stream-name  
The name of the stream you want the usage for

--from  
The first moment of interest

--until  
The first moment of interest

--by  
Aggregation period

--json  
Json instead of csv

### Example

```bash
    strm get usage demo \
      --from 2021/8/12-11:00 \
      --until 2021/8/12-14:00 \
      --by 10m
    from,                            count, duration, change, rate
    2021-08-12T11:00:00.000000+0200, 5314,  600,      NaN,    NaN
    2021-08-12T11:10:00.000000+0200, 5329,  600,      15,     0.03
    2021-08-12T11:20:00.000000+0200, 5344,  600,      15,     0.03
    2021-08-12T11:30:00.000000+0200, 5360,  600,      16,     0.03
    2021-08-12T11:40:00.000000+0200, 5693,  600,      333,    0.56
    2021-08-12T11:50:00.000000+0200, 5708,  600,      15,     0.03
    2021-08-12T12:00:00.000000+0200, 5724,  600,      16,     0.03
    2021-08-12T12:10:00.000000+0200, 5739,  600,      15,     0.03
    2021-08-12T12:20:00.000000+0200, 5755,  600,      16,     0.03
    2021-08-12T12:30:00.000000+0200, 5770,  600,      15,     0.03
    2021-08-12T12:40:00.000000+0200, 5786,  600,      16,     0.03
    2021-08-12T12:50:00.000000+0200, 5802,  600,      16,     0.03
    2021-08-12T13:00:00.000000+0200, 5817,  600,      15,     0.03
    2021-08-12T13:10:00.000000+0200, 11650, 600,      5833,   9.72
```
