---
title: Advanced Configuration
hide_table_of_contents: false
description: Advanced setups of AWS Marketplace based Data Plane configurations.
---

# Advanced Configuration

## Using a private Docker registry

If you have to install the STRM Privacy Data Plane in an air-gapped environment, you can use the following script to
easily mirror all STRM Privacy container images with the image pull secret credentials provided in your installation
configuration, which can be found [here](https://console.strmprivacy.io/settings/installation).

### Prerequisites
Using this requires [`gcloud`](https://cloud.google.com/sdk/docs) and [`python3`](https://www.python.org/downloads) to be
installed.
Furthermore, it uses [`gcrane`](https://github.com/google/go-containerregistry/tree/main/cmd/gcrane), which
simplifies copying images between (authenticated) registries. The
authentication [commands](https://github.com/google/go-containerregistry/tree/main/cmd/gcrane) are similar to
Docker. `gcloud` is used by gcrane to fetch an access token that allows for authentication with STRM Privacy's registry.

#### gcloud

The CLI for Google Cloud can be installed with the [instructions shown here](https://cloud.google.com/sdk/docs/install-sdk). This will guide you through all the prerequisites there and make sure that `gcloud` is on your `PATH`.

#### gcrane
Install gcrane (as it's not distributed via package managers)
```shell showLineNumbers
#!/usr/bin/env bash
curl -L https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz -o go-containerregistry.tar.gz
tar -zxvf go-containerregistry.tar.gz
chmod +x gcrane
mv gcrane /usr/local/bin/
```

Ensure that gcrane can access your private registry if it requires authentication for pushing images. A command to authenticate `gcrane` with access to a private registry would look similar to this:
```shell placeholders target_registry=Target Registry, username=Registry Username, password=Registry Password
gcrane auth login "$target_registry" -u "$username" -p "$password"
```

### Mirror images
The following script can be used as an example and can be executed periodically to mirror the STRM Privacy Registry.
The image pull secret can be found in the installation settings in the [Console](https://console.strmprivacy.io/settings/installation).

```shell showLineNumbers wordWrap=true placeholders image_pull_secret=Docker Image Pull Secret, target_registry=Your Private Registry Host, working_directory=Script Working Directory
#!/usr/bin/env bash

# Authenticate gcrane to communicate with STRM Privacy's Docker Registry
# using your image pull secret
GOOGLE_APPLICATION_CREDENTIALS="$working_directory/image-pull-secret.json"
echo "$image_pull_secret" | base64 --decode > "$GOOGLE_APPLICATION_CREDENTIALS"

TARGET_REGISTRY="$target_registry"

# The following command assumes that gcrane is now configured with access to both repositories
STRM_PRIVACY_REGISTRY="europe-west4-docker.pkg.dev/stream-machine-production/docker-public"

for image_uri in $(gcrane ls "$STRM_PRIVACY_REGISTRY" -r | grep --invert-match "sha256")
do
    image_name_and_version=$(echo "${image_uri}" | sed 's|'"$STRM_PRIVACY_REGISTRY"'||' | sed 's|/|_|g')
    gcrane cp "${image_uri}" "${TARGET_REGISTRY}/${image_name_and_version}"
done
```
