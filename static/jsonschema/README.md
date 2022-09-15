Install the [protobuf to json-schema compiler](https://github.com/chrusty/protoc-gen-jsonschema) and generate the files
by running the command below in the api-definitions/.../entities/v1 directory.
With the appropriate paths ofcourse.

TODO: automate

```
protoc --jsonschema_out=disallow_additional_properties:$HOME/streammachine/docs/public-docs/static/jsonschema --proto_path=. --proto_path=$HOME/bin/api-common-protos entities_v1.proto 
```
