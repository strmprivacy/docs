---
title: Examples in multiple languages
hide_table_of_contents: false
---

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
f=~/.config/strmprivacy/saved-entities/Stream/demo.json
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
```java title="Sender.java"
package io.strmprivacy.examples;

import io.strmprivacy.driver.client.StrmPrivacyClient;
import io.strmprivacy.driver.domain.Config;
import io.strmprivacy.schemas.demo.v1.DemoEvent;
import io.strmprivacy.schemas.demo.v1.StrmMeta;
import org.slf4j.Logger;

import java.util.Random;
import java.util.UUID;

import static java.util.Collections.singletonList;
import static org.slf4j.LoggerFactory.getLogger;

public class Sender {

    private static final Logger LOG = getLogger(Sender.class);

    private static final Random RANDOM = new Random();

    public static void main(String[] args) throws InterruptedException {
        new Sender().run(args);
    }

    /**
     * start sending hardcoded avro events.
     *
     * @param args 3 parameters: [billingId, clientId, clientSecret]
     */
    private void run(String[] args) throws InterruptedException {
        if (args.length != 3) {
            System.out.println("Ensure that you've provided all required input arguments: [billingId, clientId, clientSecret]");
            System.exit(1);
        }

        var billingId = args[0];
        var clientId = args[1];
        var clientSecret = args[2];

        var config = Config.builder().build();

        StrmPrivacyClient client = StrmPrivacyClient.builder()
                .billingId(billingId)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .config(config)
                .build();

        while (true) {
            var event = createAvroEvent();

            client.send(event)
                    .whenComplete((response, exception) -> {
                        if (exception != null) {
                            LOG.error("An exception occurred while trying to send an event to STRM Privacy", exception);
                        }

                        if (response.getStatus() == 204) {
                            LOG.debug("{}", response.getStatus());
                        } else if (response.getStatus() == 400) {
                            LOG.debug("Bad request: {}", response.getContentAsString());
                        }
                    });

            Thread.sleep(500);
        }
    }

    /**
     * Generate a DemoEvent from a Java class that corresponds with a the strmprivacy/demo/1.0.2 schema.
     * These Java classes are generated and provided by STRM Privacy, based on the
     * serialization schema.
     * <p>
     *
     * @return a {@link io.strmprivacy.schemas.StrmPrivacyEvent}
     */
    private static DemoEvent createAvroEvent() {
        int consentLevel = RANDOM.nextInt(4);

        return DemoEvent.newBuilder()
                .setStrmMeta(StrmMeta.newBuilder()
                        .setEventContractRef("strmprivacy/example/1.2.3")
                        .setConsentLevels(singletonList(consentLevel))
                        .build())
                .setUniqueIdentifier(UUID.randomUUID().toString())
                .setSomeSensitiveValue("A value that should be encrypted")
                .setConsistentValue("a-user-session")
                .setNotSensitiveValue("Hello from Java")
                .build();
    }
}
```

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
f=~/.config/strmprivacy/saved-entities/Stream/demo.json
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

[//]: # (TODO: create live links to code)
```python title="sender_async.py"
import asyncio
import logging
import sys
import random
import uuid

from strmprivacy.driver import SerializationType
from strmprivacy_io_strmprivacy_schemas_demo_v1.io.strmprivacy.schemas.demo.v1 import DemoEvent

from client_builder import ClientBuilder

log = logging.getLogger(__name__)
log.setLevel(logging.INFO)


class Sender(object):
    """
    An Asynchronous generator that periodically creates an event and sends it to STRM Privacy
    """

    def __init__(self):
        self._client = ClientBuilder.create_strm_privacy_client()

    def __aiter__(self):
        return self

    async def __anext__(self):
        event = create_avro_event()
        return await self._client.send(event, SerializationType.AVRO_BINARY)

    async def start_timers(self):
        await self._client.start_timers()


def create_avro_event():
    event = DemoEvent()

    event.strmMeta.eventContractRef = "strmprivacy/example/1.2.3"
    event.strmMeta.consentLevels = [random.randint(0, 3)]

    event.uniqueIdentifier = str(uuid.uuid4())
    event.someSensitiveValue = "A value that should be encrypted"
    event.consistentValue = "a-user-session"
    event.notSensitiveValue = "Hello from Python"

    return event


async def main():
    sender = Sender()
    await sender.start_timers()  # re-authorization jwt tokens

    async for response in sender:
        if response == 204:  # event correctly accepted by endpoint
            log.info(f"Event sent, response {response}")
        else:
            log.error(f"Something went wrong while trying to send event to Stream Machine, response: {response}")

        await asyncio.sleep(0.2)


if __name__ == '__main__':
    logging.basicConfig(stream=sys.stderr)
    asyncio.run(main())
```

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
cat ~/.config/strmprivacy/saved-entities/Stream/demo.json | jq \
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

[//]: # (TODO: create live links to code)
```typescript title="sender.ts"
import { Sender } from '@strmprivacy/nodejs-driver';
import { DemoEvent } from '@strmprivacy/schemas-demo-avro';

const CONFIG = require('../assets/config.json');

// Copy the template credentials file, name it `credentials.json` and fill out the values
const CREDENTIALS = require('../assets/credentials.json');

const startSender = async () => {
  // Note: the schema id is hard coded in this example, in the config.json. This will be dynamically determined in a future version
  const sender = new Sender({
    ...CONFIG,
    ...CREDENTIALS,
  });

  // Make sure to listen for error events, otherwise Node does not handle the error events (they're escalated)
  sender.on('error', (error) => {
    console.log('Sender', error);
  });

  await sender.connect().catch((e) => {
    console.error(`Connect error ${e}`, e);
  });

  setInterval(async function () {
    try {
      const r = await sender.send(createEvent(), 'AVRO_BINARY');

      console.log(`Status ${r.status}`);
      if (r.status !== 204) {
        console.error(`An error occurred while sending event:`, r);
      }
    } catch (e) {
      console.error(`Error: ${e.message}`, e);
    }
  }, 100);
};

const createEvent = () => {
  const event = new DemoEvent();
  event.strmMeta = {
    eventContractRef: 'strmprivacy/example/1.2.3',
    consentLevels: [0],
  };

  event.uniqueIdentifier = 'string';
  event.someSensitiveValue = 'A value that should be encrypted';
  event.consistentValue = 'a-user-session';
  event.notSensitiveValue = 'Hello from NodeJS';

  return event;
};

startSender();
```
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

```php title="send.php"
<?php

use Examples\Events\DemoEvent;
use Examples\Utils\ClientBuilder;
use StrmPrivacy\Driver\Enums\SerializationType;
use StrmPrivacy\Driver\Sender;

include_once(realpath(dirname(__FILE__)) . '/../vendor/autoload.php');

/** @var \StrmPrivacy\Driver\Sender $sender */
$sender = ClientBuilder::build($argv, Sender::class);
// or instantiate a Sender class directly:
// $sender = new \StrmPrivacy\Driver\Sender('billingId', 'clientId', 'clientSecret');

while (true) {
    $event = new DemoEvent();

    $event->eventContractRef = 'strmprivacy/example/1.2.3';
    $event->consentLevels = [0];
    $event->uniqueIdentifier = uniqid();
    $event->someSensitiveValue = 'A value that should be encrypted';
    $event->consistentValue = 'a-user-session';
    $event->notSensitiveValue = 'Hello from PHP';

    $sender->send($event, SerializationType::AVRO_BINARY);
    sleep(0.5);
}
```
For PHP there are no code generation tools (yet) available for schema classes. The DemoEvent class below has been
manually created. For every event schema, a similar class is needed. This class needs to implement
the `\StrmPrivacy\Driver\Contracts\Event` contract.

</TabItem>

</Tabs>



## Receiving data

See [strm listen web-socket](listen-web-socket.md) for a debugging view on the events.

See [exporting to Kafka](exporting-kafka.md) or [batch exporters](receiving-s3.md) for production event consuming.
