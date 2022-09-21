# Streaming
[ETL]: https://en.wikipedia.org/wiki/Extract,_transform,_load

STRM can process your data in two ways:

1. Streaming data processing works on continuous streams of events.
2. in [Batch mode](docs/03-quickstart/02-batch/index.md), with data defined as files (typically csv files), and processing being done _per file_. This how
   typical [ETL Processing][ETL] works.

This section shows the quickstart articles related to stream processing.

## [Managing streams with the Command Line Interface](./creating-streams.md)

How to create, list and delete input streams and derived streams.

## [Using the web-socket endpoint](./listen-web-socket.md)

A web-socket endpoint where you can see a json version of your events.

## [Sending events by hand](./sending-curl.md)

The low level details of interacting with STRM Privacy, #without any
Stream Machine specific software#.

## [Examples in multiple programming languages](./full-example.md)

Quick #getting started## examples. If you have the software environment
set up, you should be sending simulated events in a minute.

## [Consuming from Kafka](./exporting-kafka.md)

Realtime exporting to a Kafka cluster, and a consumer in Python.


## [Exporting encryption keys](docs/03-quickstart/01-streaming/exporting-keys.md)

How to export the generated STRM Privacy encryption keys on an event stream. Also shows
some interaction with a Google Cloud bucket.
