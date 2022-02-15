The global `simulate` command runs a simulation with random events
against a given Source Stream, using the ClickStream schema.

## Flags

--schema  
the schema reference, defaults to `strmprivacy/demo/1.0.2`

The schema determines the shape of the simulated events. The cli
simulator has a hardcoded reference between the schema and the used
event contract to send with the events.

this should probably be defined via the event contract reference instead
of the schema. Todo for a future release of the cli.

## run-random

Run the simulation.

### Usage

`strm simulate random-events (stream-name) [flags]`.

### Arguments

stream-name  
The name of the Source Stream to send events to.

### Flags

--client-id  
OAuth2 client credentials

--client-secret  
OAuth2 client credentials

--consent-levels  
Consent level combinations to be simulated (default
[none,0,0/1,0/1/2,0/1/2/3]).

--interval  
Interval in ms. between simulated events (default 1000).

--quiet  
Don’t spam stderr with progress output.

--session-prefix  
Prefix string for sessions (default "session"). Changing this will
generate a new encryption keys set on the engine. Otherwise existing
keys will be reused if it has been less than 24 hours since their
creation.

--session-range  
Number of different sessions being generated (default 1000).

See [Global flags](index.md#global-flags) for all global flags.

Client id and secret are optional flags **provided** the stream has been
created with the `--save` flag. In that case
`~/.config/strmprivacy/saved-entities/Stream/<stream-name>.json` will
hold the necessary credentials, and the cli will use these.
