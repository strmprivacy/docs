---
title: Simple Schemas
hide_table_of_contents: false
---

To simplify the complexity of creating schemas in formats such as Avro (`.avsc`) or JSON-schemas, a new format has been
created at STRM Privacy, called Simple Schemas. It is a YAML based format[^1], which allows for readability and
understandability by many people in your organization.

# Simple Schemas

A Simple Schema is composed of only the data fields that you require.
The [strmMeta section](docs/02-concepts/02-data-contracts/02-strm-meta.md) in
is omitted in the Simple Schema representation, as it is translated into an
[Avro `avsc` definition](https://avro.apache.org/docs/current/spec.html#schemas) for you to use when serializing data.
Since Avro is well-equipped for serializing and deserializing data, there was no need to create yet another
serialization format.

:::note
Simple Schema is a _representation_ of your schema, it is <u>not</u> a serialization format.
:::

In the [quickstart Simple Schema example](docs/03-quickstart/03-data-contracts/01-simple-schema.md), you'll be guided
through a hands-on
interaction that shows the technical details when using Simple Schemas.

A [simple schema](https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L436)
defines a list of *nodes*. Each node is an entity with the following attributes:

- `name` <div class="chip"> <div class="chip-content">required</div> </div> that you can use to access the entity.
- `avro_name` <div class="chip-optional"> <div class="chip-content">optional</div> </div> conforms to [the naming rules for Avro](https://avro.apache.org/docs/current/spec.html#names).
  Is derived from `name` *unless* it was explicitly set. **Only** use if you need to override the Avro name; as this needs
  to be an Avro compatible name, this needs to be correct.
- `type` <div class="chip"> <div class="chip-content">required</div> </div> an `integer`, `string`, `float` or a `node`
- `repeated` <div class="chip-optional"> <div class="chip-content">optional</div> </div> defines whether the field can
  occur more than once (i.e. is a list). Defaults to `false`.
- `required` <div class="chip-optional"> <div class="chip-content">optional</div> </div> defines whether the sender must
  fill in this field value. Defaults to `false`.
- `doc` <div class="chip-optional"> <div class="chip-content">optional</div> </div> documents the purpose of the field.
- `nodes` <div class="chip-optional"> <div class="chip-content">optional</div> </div> holds *child-nodes* for nested data structure.
  This is only valid when the `type` is `NODE`

An example of a simple schema:

```yaml showLineNumbers
name: Clicks
nodes:
  - name: SessionId
    type: STRING
    doc: the string value that connects events to a single sequence
    required: true
    repeated: false
  - name: User Name
    type: STRING
    doc:  we use a data contract to define that this is private
  - name: url
    type: STRING
    doc:  the URL of the current page
  - name: mouse positions
    repeated: true
    type: NODE
    nodes:
      - name: x
        type: INTEGER
      - name: "y"
        type: INTEGER
```

:::caution
YAML [allows for many variations](https://yaml.org/type/bool.html) to indicate the boolean value `true`. The reason `"y"` is quoted in the example above,
is since YAML otherwise would resolve `y` to `true`.
:::

[^1] the shortcomings and challenges of YAML [are well-known](https://en.wikipedia.org/wiki/YAML#Criticism), though
readability and simplicity was the major motivation to use YAML for Simple Schemas.
