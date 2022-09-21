---
title: Examples in multiple languages
hide_table_of_contents: false
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/full-example.js';

# Complete examples

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

This section helps you to set up a stream and start sending data to STRM Privacy.

## Setting up a stream

This section assumes that you have created an account on the
[console](https://console.strmprivacy.io).

## Using the programming language examples.

In order to run these examples, you need the following:

- An input stream to send data to (if you don’t know how, [go here](creating-streams.md) to learn how to create
  streams)

- The credentials for this stream (presented upon stream creation). Either keep note of the returned values from the
  `strm create stream` command, or use `--save` flag to store them in the `~/.config/strmprivacy/Stream` directory.

The following demo applications show how dummy data can be sent with a certain frequency. The data that is sent is quite
static and does not result in any useful patterns for analysis, however, it does show how data can be constructed and
transferred to STRM Privacy.

:::note
Use [strm listen web-socket (stream-name)](listen-web-socket.md) to debug issues.
:::

:::note
 Currently (Aug. 2021) every example language has a different configuration file format. This is inconvenient and will be fixed. We aim to standardize this to the format created with
`strm create stream (stream-name) --save`, so that getting up-and-running becomes easier.
:::



<Tabs>
  <TabItem value="java" label="Java" default>

[![java-driver](https://img.shields.io/maven-central/v/io.strmprivacy/java-driver.svg?label=Java%20Driver&color=F25C03)](https://search.maven.org/artifact/io.strmprivacy/java-driver)
[![java-avro](https://img.shields.io/maven-central/v/io.strmprivacy.schemas/demo-avro.svg?label=demo-avro%20schema&color=F25C03)](https://search.maven.org/artifact/io.strmprivacy.schemas/demo-avro)

This example is
also [available on GitHub](https://github.com/strmprivacy/java-examples/blob/master/src/main/java/io/strmprivacy/examples/Sender.java)
. Please see the [repository](https://github.com/strmprivacy/java-examples) for the readme.

Short steps to start sending data:

```bash
git clone https://github.com/strmprivacy/java-examples
cd java-examples
strm create stream demo --save
f=$( strm context info Stream/demo )
billingId=$(cat $f | jq -r '.ref.billingId')
clientId=$(cat $f | jq -r '.credentials[0].clientId')
clientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')
mvn package
java -jar target/java-examples-0.0.1-SNAPSHOT-jar-with-dependencies.jar \
  $billingId $clientId $clientSecret
```

```
org.eclipse.jetty.util.log                  - Logging initialized ...
io.strmprivacy.driver.client.AuthService  - Initializing a new Auth Provider
io.strmprivacy.examples.Sender            - 204
io.strmprivacy.examples.Sender            - 204
io.strmprivacy.examples.Sender            - 204

...
```

[//]: # (TODO: create live links to code)
<ExternalCodeBlock 
  url="https://raw.githubusercontent.com/strmprivacy/java-examples/master/src/main/java/io/strmprivacy/examples/Sender.java"
  title="Sender.java"
  lang="java"
/>

</TabItem>
<TabItem value="python" label="Python">

[![python-driver](https://img.shields.io/pypi/v/strmprivacy-driver.svg?label=Python%20Driver&color=F25C03)](https://pypi.org/project/strmprivacy-driver/)
[![python-avro](https://img.shields.io/pypi/v/strmprivacy-schemas-demo-avro.svg?label=demo+avro+schema&color=F25C03)](https://pypi.org/project/strmprivacy-schemas-demo-avro/)

This example is
also [available on GitHub](https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py). Please
see the [repository](https://github.com/strmprivacy/python-examples) for the readme.

Short steps to start sending data
```bash
git clone https://github.com/strmprivacy/python-examples
cd python-examples
python3 -m venv .venv
. .venv/bin/activate
python3 -m pip install -r requirements.txt
strm create stream demo --save
f=$( strm context info Stream/demo )
billingId=$(cat $f | jq -r '.ref.billingId')
clientId=$(cat $f | jq -r '.credentials[0].clientId')
clientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')
python3 examples/sender_async.py --billing-id $billingId\
  --client-id $clientId --client-secret $clientSecret
```
```
    DEBUG:strmprivacy.driver.client.auth:Initializing a new Auth Provider for SenderService
    DEBUG:strmprivacy.driver.client.auth:authenticate
    INFO:__main__:Event sent, response 204
    INFO:__main__:Event sent, response 204
    INFO:__main__:Event sent, response 204
    ...
```

<ExternalCodeBlock
url="https://raw.githubusercontent.com/strmprivacy/python-examples/master/examples/sender_async.py"
title="sender_async.py"
lang="python"
/>

</TabItem>

<TabItem value="rust" label="Rust">

[![rust-driver](https://img.shields.io/crates/v/strm-privacy-driver.svg?label=Rust%20Driver&color=F25C03)](https://crates.io/crates/strm-privacy-driver)
[![rust-avro](https://img.shields.io/crates/v/strmprivacy_schema_strmprivacy_demo.svg?label=demo+avro+schema&color=F25C03)](https://crates.io/crates/strmprivacy_schema_strmprivacy_demo)

This example is
also [available on GitHub](https://github.com/strmprivacy/rust-examples/blob/main/src/main.rs). Please
see the [repository](https://github.com/strmprivacy/rust-examples) for the readme.

Short steps to start sending data
```bash
git clone git@github.com:strmprivacy/rust-examples.git
cd rust-examples
strm create stream demo --save
f=$( strm context info Stream/demo )
billingId=$(cat $f | jq -r '.ref.billingId')
clientId=$(cat $f | jq -r '.credentials[0].clientId')
clientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')
cargo run $billingId $clientId $clientSecret
```
```
initializing client
sending events..
Event sent: 204 No Content
Event sent: 204 No Content
Event sent: 204 No Content
Event sent: 204 No Content
Event sent: 204 No Content
...
```

<ExternalCodeBlock
url="https://raw.githubusercontent.com/strmprivacy/rust-examples/master/src/main.rs"
title="main.rs"
lang="rust"
/>

</TabItem>

<TabItem value="nodejs" label="NodeJS">

[![nodejs-driver](https://img.shields.io/npm/v/@strmprivacy/nodejs-driver.svg?label=NodeJS+Driver&color=F25C03)](https://www.npmjs.com/package/@strmprivacy.io/nodejs-driver)
[![nodejs-avro](https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03)](https://www.npmjs.com/package/@strmprivacy.io/schemas-demo-avro)

This example is also [available on GitHub](https://github.com/strmprivacy/nodejs-examples/blob/master/src/sender.ts).
Please see the [repository](https://github.com/strmprivacy/nodejs-examples) for the readme.

Quick steps getting started:

```bash
git clone https://github.com/strmprivacy/nodejs-examples
cd nodejs-examples
strm create stream demo --save
cat $( strm context info Stream/demo ) | jq \
    '{billingId:.ref.billingId,
      clientId:.credentials[0].clientId,
      clientSecret:.credentials[0].clientSecret}' \
      > assets/credentials.json
npm i
npm run sender
```
```
> nodejs-driver-example@1.0.0 sender
> ts-node ./src/sender.ts

Status 204
Status 204
...
```

<ExternalCodeBlock
url="https://raw.githubusercontent.com/strmprivacy/nodejs-examples/master/src/sender.ts"
title="sender.ts"
lang="typescript"
/>

</TabItem>
<TabItem value="php" label="Php">

[![php-driver](https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03)](https://packagist.org/packages/strmprivacy/php-driver)

This example is also [available on GitHub](https://github.com/strmprivacy/php-examples/blob/master/examples/send.php).
Please see the [repository](https://github.com/strmprivacy/php-examples) for the readme.

Quick steps getting started:

```bash
git clone https://github.com/strmprivacy/php-examples
cd php-examples
strm create stream demo --save
composer install
## send one DemoEvent to STRM Privacy:
php examples/send.php <billingId> <clientId> <clientSecret>
```

<ExternalCodeBlock
url="https://raw.githubusercontent.com/strmprivacy/php-examples/master/examples/send.php"
title="send.php"
lang="php"
/>

For PHP there are no code generation tools (yet) available for schema classes. The DemoEvent class below has been
manually created. For every event schema, a similar class is needed. This class needs to implement
the `\StrmPrivacy\Driver\Contracts\Event` contract.

</TabItem>

</Tabs>



## Receiving data

See [strm listen web-socket](listen-web-socket.md) for a debugging view on the events.

See [exporting to Kafka](exporting-kafka.md) or [batch exporters](docs/03-quickstart/02-batch/batch-exporter.md) for production event consuming.
