The global `listen` command is used for starting a Web Socket listener
for a stream and output all events to the console.

This command can receive events from both Source Streams and Derived
Streams.

## (no subcommand)

Start listening for events.

### Usage

`strm listen web-socket (stream-name) [flags]`

### Arguments

<table style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"50%"}} />
<col style={{"width":"50%"}} />
</colgroup>
<tbody>
<tr class="odd">
<td ><p>Argument</p></td>
<td ><p>Description</p></td>
</tr>
<tr class="even">
<td ><p>stream-name</p></td>
<td ><p>The name of the stream to read events
from.</p></td>
</tr>
</tbody>
</table>

### Flags

<table style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"50%"}} />
<col style={{"width":"50%"}} />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Flag</p></td>
<td ><p>Description</p></td>
</tr>
<tr class="even">
<td ><p>client-id</p></td>
<td ><p>OAuth2 client credentials</p></td>
</tr>
<tr class="odd">
<td ><p>client-secret</p></td>
<td ><p>OAuth2 client credentials</p></td>
</tr>
</tbody>
</table>

See [Global flags](index.md#global-flags) for all global flags.

Client id and secret are optional flags **provided** the stream has been
created with the `--save` flag. In that case
`~/.config/strmprivacy/saved-entities/Stream/<stream-name>.json` will
hold the necessary credentials, and the cli will use these.
