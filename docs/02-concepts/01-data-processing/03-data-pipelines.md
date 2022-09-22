---
title: Data Pipelines
hide_table_of_contents: false
---

Regardless of the type of processing, stream or batch, data flows from one input to another.
Within STRM Privacy, this is called a **Data Pipeline**.

A Data Pipeline can be:
- **A set of streams and their linked resources**
  - The input stream with all its derived streams
  - The exporters that are linked to these streams
  - Other resources that are linked to these streams
- **A collection of batch jobs**
  - All jobs that have the same batch job group id.
