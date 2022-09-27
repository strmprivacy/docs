---
title: Google Cloud in S3 mode
hide_table_of_contents: false
description: Data Connector for Google Cloud in S3 compatible mode
---

[gcloud-s3]: https://cloud.google.com/storage/docs/aws-simple-migration

### Prepare the storage
This page shows how to use a Google Cloud bucket in [s3 compatible mode][gcloud-s3].

1. First, create a new service account, for example in
   the [Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Then grant write permissions on the bucket to this service account. You can do this under the
   `PERMISSIONS` tab on the bucket's details page. Choose for example `Storage Legacy Bucket Writer`
   as role and the newly created service account as principal.
3. Create HMAC credentials: `gsutil hmac create <service-account-name>`. Put the secrets in a JSON file, named for 
   example `s3.json`:

   ```json title=s3.json
   {
     "url": "https://storage.googleapis.com",
     "accessKey": "<access-key>",
     "secretKey": "<secret-key>",
     "api": "s3v4",
     "path": "auto"
   }
   ```


### Create the data connector {#create-data-connector}
With the credentials file (`s3.json` in our example), create the data connector using
the command below:

```bash
strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json
```

```json showLineNumbers
{
  "ref": {
    "name": "my-s3",
    "projectId": "30fcd008-9696-...."
  },
  "s3Bucket": {
    "bucketName": "strmprivacy-export-demo"
  }
}
```

This will create a data connector named `my-s3` for the bucket `strmprivacy-export-demo`,
using the provided credentials. Specify the actual name of your bucket, and any name for the
data connector itself.

