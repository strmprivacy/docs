---
title: Data Connectors
hide_table_of_contents: false
---

A Data Connector represents a location from and to which data can be read and written. For example, an AWS S3 bucket
or a Google Cloud Storage bucket. By itself, a Data Connector does nothing, but paired with a batch job or batch exporter,
it provides a flexible way to read or export data. When creating a Data Connector, credentials must be provided that grant the required access (read, write, or both).

The following data connector and credential types are currently supported:

| Data Connector Type          | Credentials Type                               |
|------------------------------|------------------------------------------------|
| Amazon S3 Bucket             | IAM User Access Key                            |
| Google Cloud Storage Bucket  | Service Account Credentials                    |
| Azure Blob Storage Container | Application Principal Client Secret Credentials |
| Mysql Database               | Database connection URI                        |
| Postgresql Database          | Database connection URI                        |
| BigQuery | BigQuery connection URI|

For examples on how to create and use these Data Connectors, see the [Data Connectors quickstart](docs/03-quickstart/03-data-connectors/index.md),
or the [CLI reference](docs/04-reference/01-cli-reference/strm/create/data-connector/index.md) for data connectors.
