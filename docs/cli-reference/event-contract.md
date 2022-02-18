An Event Contract defines the rules that are to be applied to events.

The Event Contract defines:

-   the Schema to use via a full Schema reference (handle/name/version)

-   the key field

-   the PII fields

-   any validations on fields (e.g. a regex to validate an email
    address)

Like Schemas, Event Contracts can be private or public, allowing them to
be found and used by others than the owning client. Be careful, public
Event Contracts cannot be deleted.

Also like Schemas, Event Contracts are versioned using a versioning
scheme that can be fully determined by the client. The only restrictions
are that version numbers:

-   MUST follow the semantic version format (major/minor/patch),

-   MUST always be ascending

An Event Contract is uniquely identified by its Event Contract
reference, in the format (organization handle/event contract
name/version).

## get

Retrieve an event contract

### Usage

`strm get event contract (handle/name/version)`

### Arguments

handle/name/version  
A reference to the contract.

### Flags

See [Global flags](/cli-index.md#global-flags) for all global flags.

### Example

```bash
strm get event contract strmprivacy/example/1.3.0
{
  "ref": {
    "handle": "strmprivacy",
    "name": "example",
    "version": "1.3.0"
  },
  "state": "PENDING",
  "schemaRef": {
    "handle": "strmprivacy",
    "name": "demo",
    "version": "1.0.2"
  },
  "isPublic": true,
  "keyField": "consistentValue",
  "piiFields": {
    "consistentValue": 2,
    "someSensitiveValue": 3,
    "uniqueIdentifier": 1
  },
  "validations": [
    {
      "field": "consistentValue",
      "type": "regex",
      "value": "^.+$"
    }
  ]
}
```

## list

List all event contracts.

### Usage

`strm list event contracts`

### Argments

None.

### Flags

See [Global flags](/cli-index.md#global-flags) for all global flags.

### Example

```bash
strm list event contracts
{"eventContracts":[{"ref":{"handle":"strmprivacy","name":"clickstream","version":"0.1.0"},
  "state":"PENDING","schemaRef":{"handle":"strmprivacy","name":"clickstream","version":"0.1.0"},
  "isPublic":true,"keyField":"producerSessionId","piiFields":{
    "customer/id":0,"producerSessionId":1},
    "validations":[
      {"field":"customer/id","type":"regex","value":"^.+$"},
      {"field":"url","type":"regex","value":"^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=
...
```

This call returns a long line of json, but `jq` can be used to parse the
result.

```bash
strm list event contracts | jq -r '.eventContracts[].ref | "\(.handle)/\(.name)/\(.version)"'
strmprivacy/clickstream/0.1.0
strmprivacy/demo_v1/0.1.0
strmprivacy/nps_unified_v1/0.1.0
strmprivacy/nps_unified_v3/3.0.0
strmprivacy/clickstream/0.2.0
dpg/nps_unified/4.0.0
strmprivacy/example/1.2.3
strmprivacy/example/1.3.0
dpg/nps_unified/5.0.0
strmprivacy/clickstream/1.0.0
```

## create

### Usage

`strm create event contract (definition-file)`

### Arguments

<table style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"50%"}} />
<col style={{"width":"50%"}} />
</colgroup>
<tbody>
<tr class="odd">
<td><p>Name</p></td>
<td><p>Description</p></td>
</tr>
<tr class="even">
<td><p>definition-file</p></td>
<td><p>the file containing the actual event
contract.</p></td>
</tr>
</tbody>
</table>

### Flags

See [Global flags](/cli-index.md#global-flags) for all global flags.

### Example

Example file:

**event contract.json**

```json
{
  "ref": {
    "handle": "my_own_handle",
    "name": "example",
    "version": "1.2.3"
  },
  "state": "PENDING",
  "schemaRef": {
    "handle": "strmprivacy",
    "name": "demo",
    "version": "1.0.2"
  },
  "isPublic": true,
  "keyField": "consistent_value",
  "piiFields": {
    "consistentValue": 2,
    "someSensitiveValue": 3,
    "uniqueIdentifier": 1
  }
}
```

And then `strm create event contract event contract.json`.

The `ref/handle` field **must** conform to the handle of your
billing-id. You can only set that value via the settings page of the
console.

The command line syntax for creating event contracts is going to change
in an upcoming release.
