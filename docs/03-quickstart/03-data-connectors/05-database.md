---
title: Database
hide_table_of_contents: false
description: Data Connector for databases
---
## Supported Databases

| Database   | Supported |
|------------|-----------|
| Mysql      | ✅         |
| Postgresql | ✅         |
| BigQuery   | ✅          |

## Prepare the storage

### Via STRM Privacy
If you're running a Batch job via STRM Privacy's own data plane the first thing you should to is to white list the following url
(```api.strmprivacy.io```) to make it possible for STRM Privacy to connect to your database.

### Customer Cloud Deployment
If you're running a CCD you will need to provide permission to let the Batch Job Runner connect to your database.

## Create the data connector

A Database Data Connector can be created with the following command, using the 

```bash
strm create data-connector jdbc my-jdbc "<JDBC-URL>"
```

An example of the Jdbc Url can be found below:
```
jdbc:postgresql://example.com:5432/test
```

```json showLineNumbers
{
  "ref": {
    "name": "my-jdbc",
    "projectId": "30fcd008-9696-...."
  },
  "jdbcLocation": {
    "uri": "jdbc:postgresql://example.com:5432/test",
    "databaseType": "POSTGRES"
  }
}
```

This will create a data connector named `my-jdbc` for the database at uri `postgres://example:5432/test`.
