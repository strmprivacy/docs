---
title: Google Cloud
hide_table_of_contents: false
description: Data Connector for Google Cloud Storage
---

### Prepare the storage

1. First, create a new service account, for example in
   the [Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Then grant write permissions on the bucket to this service account. You can do this under the
   `PERMISSIONS` tab on the bucket's details page. Choose for example `Storage Legacy Bucket Writer`
   as role and the newly created service account as principal.
3. On the details page of the service account, under the `KEYS` tab, select `ADD KEY`, `Create new key`
   and choose key type `JSON`. After creation, the JSON credentials file is downloaded. These are the
   credentials required when creating the data connector in the next section.


First, make sure you have a file named `gcs.json` in your current directory,
containing the service account credentials of the service account to use
for writing to the bucket.

The contents should look something like:

```json title=gcs.json showLineNumbers
{
  "type": "service_account",
  "project_id": "***",
  "private_key_id": "***",
  "private_key": "-----BEGIN PRIVATE KEY-----\n***\n-----END PRIVATE KEY-----\n",
  "client_email": "***@***.iam.gserviceaccount.com",
  "client_id": "***",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/***.iam.gserviceaccount.com"
}
```

### Create the data connector {#create-data-connector}

You can create the data connector with the following command, pointing to the
credentials file:

```bash
strm create data-connector gcs my-gcs strmprivacy-export-demo --credentials-file=gcs.json
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
