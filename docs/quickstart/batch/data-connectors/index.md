---
title: Data Connectors
hide_table_of_contents: false
---

Data connectors are a generic mechanism to interact with cloud storage.

* [AWS S3](./s3.md)
* [Google Cloud](./gcloud.md)
* [Microsoft Azure](./azure.md)

When you've created one or more, you can all of them via

```bash
strm list data-connectors -o json
{
  "dataConnectors": [
    {
      "ref": { "name": "my-s3", "projectId": "30fcd008-9696-...." },
      "s3Bucket": { "bucketName": "strmprivacy-export-demo" }
    },
    {
      "ref": { "name": "my-gcs", "projectId": "30fcd008-9696-...." },
      "googleCloudStorageBucket": { "bucketName": "strmprivacy-export-demo" }
    },
    {
      "ref": { "name": "azure", "projectId": "30fcd008-9696-...." },
      "azureBlobStorageContainer": { "storageAccountUri": "https://foo.blob.core.windows.net",
          "containerName": "strmprivacy-export-demo" }
    }
  ]
}
```

:::note
the different types of `data-connector`. This mechanism is _open ended_ and will be expanded for future
storage classes.
:::