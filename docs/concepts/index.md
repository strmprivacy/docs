---
title: STRM Privacy concepts
hide_table_of_contents: false
sidebar_position: 3
---


## [Batch vs Stream processing](batch-vs-streaming.md)

What is batch processing and stream processing and how dow we support
both approaches?

## [Batch Job Concepts](batch-jobs.md)

What is an STRM Batch Job?

## [Core concepts](core-concepts.md)

Core concepts, what is STRM Privacy, what problems are we solving?

## [Schemas and Contracts](schemas-and-contracts.md)

The essence of well defined GRPC compliant event data.

## [the `strmMeta` section](strm-meta.md)

Each event schema has a STRM Privacy specific section in it. This page
describes the why, what and how.

## [Masked Fields](masked-fields.md)

Masking field values so their plain text value is never visible. Useful
for sharing data with third parties, and to prevent sensitive values
from being visible within the company.

## [Simple Schemas](simple-schemas.md)

Simple Schemas are an STRM Privacy specific format that can be used if
you don’t need to use all the complexities of Avro schemas. A Simple
Schema is *translated* to Avro upon creation, and that Avro schema is
used in the engine.
