
1. First, create a new service account, for example in
   the [Cloud Console](https://console.cloud.google.com/iam-admin/serviceaccounts).
2. Then grant write permissions on the bucket to this service account. You can do this under the
   `PERMISSIONS` tab on the bucket's details page. Choose for example `Storage Legacy Bucket Writer`
   as role and the newly created service account as principal.
3. Create HMAC credentials: `gsutil hmac create <service-account-name>`. Put the secrets in a JSON file, named for 
   example `s3.json`:
   ```json
   {
     "url": "https://storage.googleapis.com",
     "accessKey": "<access-key>",
     "secretKey": "<secret-key>",
     "api": "s3v4",
     "path": "auto"
   }
   ```
   
If you created a JSON file with the HMAC credentials in te previous step, you are ready to create a data connector.
If not, create one now.

### 2. Create the data connector {#create-data-connector}
With the credentials file (`s3.json` in our example), create the data connector using
the command below:

```bash
$ strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json
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

