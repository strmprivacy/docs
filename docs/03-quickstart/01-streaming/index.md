import DocCardList from '@theme/DocCardList';

# Streaming
[ETL]: https://en.wikipedia.org/wiki/Extract,_transform,_load

STRM can process your data in two ways:

1. Streaming data processing works on continuous streams of events.
2. in [Batch mode](docs/03-quickstart/02-batch/index.md), with data defined as files (typically csv files), and processing being done _per file_. This how
   typical [ETL Processing][ETL] works.

This section shows the quickstart articles related to stream processing.

<DocCardList />

[//]: # (## [Managing streams with the Command Line Interface]&#40;./creating-streams.md&#41;)

[//]: # ()
[//]: # (How to create, list and delete input streams and derived streams.)

[//]: # ()
[//]: # (## [Using the web-socket endpoint]&#40;./listen-web-socket.md&#41;)

[//]: # ()
[//]: # (A web-socket endpoint where you can see a json version of your events.)

[//]: # ()
[//]: # (## [Sending events by hand]&#40;./sending-curl.md&#41;)

[//]: # ()
[//]: # (The low level details of interacting with STRM Privacy, #without any)

[//]: # (Stream Machine specific software#.)

[//]: # ()
[//]: # (## [Examples in multiple programming languages]&#40;./full-example.md&#41;)

[//]: # ()
[//]: # (Quick #getting started## examples. If you have the software environment)

[//]: # (set up, you should be sending simulated events in a minute.)

[//]: # ()
[//]: # (## [Consuming from Kafka]&#40;./exporting-kafka.md&#41;)

[//]: # ()
[//]: # (Realtime exporting to a Kafka cluster, and a consumer in Python.)

[//]: # ()
[//]: # ()
[//]: # (## [Exporting encryption keys]&#40;docs/03-quickstart/01-streaming/exporting-keys.md&#41;)

[//]: # ()
[//]: # (How to export the generated STRM Privacy encryption keys on an event stream. Also shows)

[//]: # (some interaction with a Google Cloud bucket.)
