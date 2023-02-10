---
title: Database
hide_table_of_contents: false
description: Data Connector database
---
## Supported Databases

| Database   | Supported          |
|------------|--------------------|
| Mysql      | :heavy_check_mark: |
| Postgresql | :heavy_check_mark: |
| BigQuery   | :heavy_check_mark: |

## Prepare the storage

### Via STRM Privacy
If you're running a Batch job via STRM Privacy's own data plane the first thing you should to is to white list the following url
(```api.strmprivacy.io```) to make it possible for STRM Privacy to connect to your database.

### Customer Cloud Deployment
If you're running a CCD you will need to provide permission to let the Batch Job Runner connect to your database.

### Create the data connector

A Google Cloud Storage Data Connector can be created with the following command, pointing to the
credentials file:

```bash
strm create data-connector db my-mysql strmprivacy-export-demo
```

```json showLineNumbers
{
  "ref": {
    "name": "my-gcs",
    "projectId": "30fcd008-9696-...."
  },
  "googleCloudStorageBucket": {
    "bucketName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `my-gcs` for the bucket `strmprivacy-export-demo`,
using the provided credentials.
