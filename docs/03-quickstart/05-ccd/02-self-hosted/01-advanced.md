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

The following script can be used as an example and can be executed periodically to mirror the STRM Privacy Registry. 
For simplicity, it uses [`gcrane`](https://github.com/google/go-containerregistry/tree/main/cmd/gcrane), which 
simplifies copying images between (authenticated) repositories.

```shell showLineNumbers placeholders image_pull_secret=Docker Image Pull Secret, target_registry=Your Private Registry Host, working_directory=Script Working Directory
#!/usr/bin/env bash

# This script assumes that gcrane is in your PATH, which allows for easy copying and replication of images
# between registries. Authentication commands are similar to Docker
# https://github.com/google/go-containerregistry/tree/main/cmd/gcrane

# If not installed, the installation instructions are as follows (as it's not distributed via package managers)
curl -L https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz -o go-containerregistry.tar.gz
tar -zxvf go-containerregistry.tar.gz
chmod +x gcrane
mv gcrane /usr/local/bin/

# Authenticate gcrane to communicate with STRM Privacy's Docker Registry
# using your image pull secret

GOOGLE_APPLICATION_CREDENTIALS="$working_directory/image-pull-secret.json"
echo "$image_pull_secret" | base64 --decode > "$GOOGLE_APPLICATION_CREDENTIALS"

TARGET_REGISTRY="$target_registry"

# Ensure that gcrane can access your private registry if it requires authentication for pushing images
# A command to authenticate gcrane with access to a private registry would look similar to this:
# gcrane auth login "$TARGET_REGISTRY" -u "<DOCKER_USERNAME>" -p "<DOCKER_PASSWORD>"

# The following command assumes that gcrane is now configured with access to both repositories
STRM_PRIVACY_REGISTRY="europe-west4-docker.pkg.dev/stream-machine-production/docker-public/"
# To prevent typos, we ensure that the registry has a / at the end
STRM_PRIVACY_REGISTRY=$([[ "${STRM_PRIVACY_REGISTRY: -1}" == "/" ]] && echo "${STRM_PRIVACY_REGISTRY}" || echo "${STRM_PRIVACY_REGISTRY}/")

for image_uri in $(gcrane ls "$STRM_PRIVACY_REGISTRY" -r | grep --invert-match "sha256")
do
    image_name_and_version=$(echo "${image_uri}" | sed 's|'"$STRM_PRIVACY_REGISTRY"'||' | sed 's|/|_|g')
    gcrane cp "${image_uri}" "${TARGET_REGISTRY}/${image_name_and_version}"
done
```



[//]: # (## Using a values.yaml)

[//]: # ()
[//]: # (It is recommended to use a `values.yaml` over the `--set` option, as this prevents secrets from ending up in)

[//]: # (your terminal history and eases repeatability. If you plan to use a `values.yaml` instead of the inline Helm values:)

[//]: # (1. make sure to set the `license.installationType` to `AWS_MARKETPLACE`)

[//]: # (2. the `registry.imagePullSecret` can be omitted / left blank, as this is facilitated by your AWS Marketplace)

[//]: # (   deployment)

[//]: # ()
[//]: # (Run the following command to install the Helm chart &#40;ensure that your working directory is `awsmp-chart` as)

[//]: # (also shown in the `--set` example above&#41;:)

[//]: # (```shell)

[//]: # (helm install strmprivacy --namespace strmprivacy ./* --values values.yaml)

[//]: # (```)

[//]: # ()
[//]: # (After these steps, you should end up with a namespace `strmprivacy` with, by)

[//]: # (default, [all components]&#40;docs/03-quickstart/04-ccd/index.md#components&#41; enabled. If you)

[//]: # (wish otherwise, you can edit the `values.yaml` to match your needs.)


