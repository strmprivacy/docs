---
title: Language Examples
hide_table_of_contents: false
---

import CodeBlock from '@theme/CodeBlock';
import {ExternalCodeBlock} from '/external-code-block.js';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This article helps you to set up a stream and start sending data to STRM Privacy, using your language of preference.

:::note
Missing your language of preference? Please [contact us](docs/05-contact/index.md), and let us know which language is
missing.
:::
:::tip
Start your own driver if it doesn't exist yet, with the details of the
quickstart [Sending and receiving manually](02-sending-curl.md)
and the [existing open-source drivers](https://github.com/search?q=user%3Astrmprivacy+topic%3Adriver&type=Repositories).
:::

## Setting up a stream

This quickstart assumes that you have created an account on the [console](https://console.strmprivacy.io).

## Using the language examples

In order to run these examples, you need the following:

- An input stream to send data to (if you don’t know
  how, [learn](docs/03-quickstart/01-streaming/01-creating-streams.md) how to create
  streams)
- The credentials for this stream.

The following demo applications show how dummy data can be sent with a certain frequency. The data that is sent is quite
static and does not result in any useful patterns for analysis, however, it does show how data can be constructed and
transferred to STRM Privacy.

:::note
Use [strm listen web-socket (stream-name)](docs/03-quickstart/01-streaming/04-receiving-data/04-listen-web-socket.md) to inspect the data
that is being sent and to debug issues.
:::

:::note
To send events to your own Customer Cloud Instance of the STRM Data Plane, you will need to modify the client configuration
by specifying the gateway host, port and http scheme.
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
strm create stream demo
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
mvn package
java -jar target/java-examples-0.0.1-SNAPSHOT-jar-with-dependencies.jar \
  $clientId $clientSecret
```

```
org.eclipse.jetty.util.log                  - Logging initialized ...
io.strmprivacy.driver.client.AuthService  - Initializing a new Auth Provider
io.strmprivacy.examples.Sender            - Successfully sent event
io.strmprivacy.examples.Sender            - Successfully sent event
io.strmprivacy.examples.Sender            - Successfully sent event
...
```

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
strm create stream demo
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
python3 examples/sender_async.py --client-id $clientId --client-secret $clientSecret
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
strm create stream demo
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
cargo run $clientId $clientSecret
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
strm create stream demo
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
strm get stream demo --output json | jq '.streamTree.stream.credentials[0]' > assets/credentials.json
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

[![php-driver](https://img.shields.io/packagist/v/strmprivacy/php-driver.svg?label=PHP+Driver&color=F25C03)](https://packagist.org/packages/strmprivacy/php-driver)

This example is also [available on GitHub](https://github.com/strmprivacy/php-examples/blob/master/examples/send.php).
Please see the [repository](https://github.com/strmprivacy/php-examples) for the readme.

Quick steps getting started:

```bash
git clone https://github.com/strmprivacy/php-examples
cd php-examples
strm create stream demo
clientId=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientId')
clientSecret=$(strm get stream demo --output json | jq -r '.streamTree.stream.credentials[0].clientSecret')
composer install
## send one DemoEvent to STRM Privacy:
php examples/send.php $clientId $clientSecret
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

See [strm listen web-socket](docs/03-quickstart/01-streaming/04-receiving-data/04-listen-web-socket.md) for a debugging view on the
events.

See [exporting to Kafka](docs/03-quickstart/01-streaming/04-receiving-data/03-exporting-kafka.md)
or [batch exporters](docs/03-quickstart/01-streaming/04-receiving-data/01-batch-export.md) for production event
consuming.
