In order to simplify sending correctly serialized data to STRM Privacy
it is recommended to use generated source code that defines a
class/object structure in a certain programming language, that knows
(with help of some open-source libraries) how to serialize objects.

The result of a `get schema-code` is a zip file with some source code
files for getting started with sending events in a certain programming
language. Generally this will be code where you’ll have to do some sort
of `build` step in order to make this fully operational in your
development setting (using a JDK, a Python or a Node.js environment).

## get

Get Source code for a certain schema.

### Usage

```bash
strm get schema-code (schema) --language=(language)
```

### Arguments

schema  
handle/name/version of the schema

### Flags

--language  
programming language. Currently python, java and typescript.

--output-file  
a file name to write the zip-file to.

--overwrite  
boolean. Allow overwriting an existing zip file.

Dont forget to check `strm get schema-code --help` to see if new
languages have been added.

See [Global flags](/cli-index.md#global-flags) for all global flags.

### Example

```bash
strm get schema-code strmprivacy/demo/1.0.2 --language=python
Saved to python-avro-demo-1.0.2.zip
```
