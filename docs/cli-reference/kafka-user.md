A Kafka User is a user on a Kafka Exporter, that can be used for
authentication when connecting to a Kafka Exporter. By default, every
Kafka Exporter gets one Kafka User upon creation, but these can be
added/removed later.

In the current data model, the user does not have a assignable name; it
is assigned upon creation. It’s still very low level. See the end of
this page for an example.

## create

Create a new Kafka User for a Stream, identified by [stream-name].

### Usage

`strm create kafka-user (exporter-name) [flags]`

### Arguments

exporter-name  
The name of the Kafka Exporter this user has access to.

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

### Example

## delete

Delete a Kafka User by name

### Usage

`strm delete kafka-user (name) [flags]`

### Arguments

name  
The name of the Kafka User.

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

## get

Get a Kafka User by name

### Usage

`strm get kafka-user (name) [flags]`

### Arguments

name  
The name of the Kafka User.

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

## list

List Kafka Users.

### Usage

`strm list kafka-users [flags]`

### Arguments

No options

### Flags

No specific flags. See [Global flags](/cli-index.md#global-flags).

## Kafka user example

In the `create kafka-exporter` below, in the response you see

<table  style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"50%"}} />
<col style={{"width":"50%"}} />
</colgroup>
<tbody>
<tr class="odd">
<td ><p><code>users[0].ref.billingId</code></p></td>
<td ><p>your billing id</p></td>
</tr>
<tr class="even">
<td ><p><code>users[0].clientId</code></p></td>
<td ><p>OAuth2 client Id</p></td>
</tr>
<tr class="odd">
<td
><p><code>users[0].clientSecret</code></p></td>
<td ><p>OAuth2 client secret</p></td>
</tr>
</tbody>
</table>

that you need as credentials to consume from the `demo` stream.

```bash
strm create stream demo
...
strm create kafka-exporter demo
{
  "ref": {
    "billingId": "demo8542234275",
    "name": "kafka-exporter-e66003c2-337d-495a-90ca-339a2f39611b"
  },
  "streamRef": {
    "billingId": "demo8542234275",
    "name": "demo"
  },
  "target": {
    "clusterRef": {
      "billingId": "internal",
      "name": "shared-export"
    },
    "topic": "export-e66003c2-337d-495a-90ca-339a2f39611b"
  },
  "users": [
    {
      "ref": {
        "billingId": "demo8542234275",
        "name": "service-account-export-29d17088-1a62-4dd7-b47e-ff8ce9ae1676"
      },
      "kafkaExporterName": "kafka-exporter-e66003c2-337d-495a-90ca-339a2f39611b",
      "topic": "export-e66003c2-337d-495a-90ca-339a2f39611b",
      "clientId": "export-29d17088-1a62-4dd7-b47e-ff8ce9ae1676",
      "clientSecret": "e645bcdf-7a12-4c90-9d8c-855d943b9008",
      "clusterRef": {
        "billingId": "internal",
        "name": "shared-export"
      }
    }
  ]
}
strm get kafka-user service-account-export-29d17088-1a62-4dd7-b47e-ff8ce9ae1676
...
strm delete stream demo --recursive
...
```
