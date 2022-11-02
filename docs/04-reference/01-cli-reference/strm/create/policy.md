---
title: "policy"
hide_title: true
---
## strm create policy

Create a Policy

### Synopsis

Create a Policy

A policy has the following attributes
* name: the name of a policy. This must be unique within one organization.
* description: a description of the policy; what sort of data pipelines
  would be subject to this policy?
* retention: the number of days that encryption keys created under this
  policy should be kept. This might be a minimum or a maximum...
* legal grounds: a legal text or ruling that identifies why the organization
  created this policy
* state: draft, active or archived. Policies can only be used in pipelines
  when they're in active state. They can still be modified while in draft.
  Deletion of policies is not allowed for active policies.


```
strm create policy [flags]
```

### Examples

```
strm create policy --name="1 year" --retention 365 --description "1 year for marketing"
```

### Options

```
      --description string     description of the policy
  -h, --help                   help for policy
      --legal-grounds string   legal grounds of this policy
      --name string            name
  -o, --output string          output format [plain, json, json-raw] (default "plain")
      --retention int32        retention in days of this policy (default 365)
```

### Options inherited from parent commands

```
      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")
      --api-host string                API host and port (default "api.strmprivacy.io:443")
      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")
      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")
  -p, --project string                 Project to use (defaults to context-configured project)
      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)
      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")
```

### SEE ALSO

* [strm create](docs/04-reference/01-cli-reference/strm/create/index.md)	 - Create an entity

