---
title: Microsoft Azure Data Connector
hide_table_of_contents: false
---

In this quickstart however, we will use a regular Google Cloud Storage bucket and connect using HMAC credentials. You can
substitute our examples with your own storage solution.

Create a GCS bucket in the [Google Cloud Console](https://console.cloud.google.com/storage/create-bucket),
or with the `gsutil` CLI tool:

```bash
$ gsutil mb gs://<your-bucket-name>
```


Create a GCS bucket in the [Google Cloud Console](https://console.cloud.google.com/storage/create-bucket),
or with the `gsutil` CLI tool:

```bash
$ gsutil mb gs://<your-bucket-name>
```

The STRM Privacy data connector for Azure Blob Storage currently supports Client Secret Credentials.
We recommend [creating a new Application with Service Principal](https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal),
*including a client secret*.

Next, assign the `Storage Blob Data Contributor` role to this service principal, specifically for
the container created earlier. You can do that for example from the `Access Control (IAM)` menu 
of the container in the Azure Portal.

To create a data connector for your Blob Storage Container, you will need the following details:

1. The **full URI** of your storage account (excluding container name), for example `https://foo.blob.core.windows.net`.
2. Your **tenant ID**.
3. The **client (application) ID** of the Azure AD application used to access the container.
4. The **client secret** of the service principal used to authenticate with the AAD application.
### 2. Create the data connector {#create-data-connector}

You can create the data connector with the following command, providing a name, the
container name, and the other required flags:

```bash
$ strm create data-connector azure-blob-storage azure strmprivacy-export-demo --storage-account-uri "https://foo.blob.core.windows.net" --tenant-id "<your tenant ID>" --client-id "<the app client ID>" --client-secret "<the service principal's secret>"
{
  "ref": {
    "name": "azure",
    "projectId": "30fcd008-9696-...."
  },
  "azureBlobStorageContainer": {
    "storageAccountUri": "https://foo.blob.core.windows.net",
    "containerName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `azure` for the container `strmprivacy-export-demo`,
using the provided client secret credentials.

