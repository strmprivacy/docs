---
title: Data Connectors
hide_table_of_contents: false
---

import DocCardList from '@theme/DocCardList';

# Data Connectors

Before data can be read and written to various data locations, you'll need to configure Data Connectors.
Data connectors are a generic mechanism to interact with cloud storage. Currently, the following
Data Connectors are supported:

<DocCardList />

## Managing Data Connectors
If you have created multiple Data Connectors, they can be listed with the following CLI command:

```bash showLineNumbers
$ strm list data-connectors -o json
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

:::info
Not seeing the required Data Connector for your cloud? Please [contact us](docs/05-contact/index.md) and let us know
what Data Connector you are missing.
:::
