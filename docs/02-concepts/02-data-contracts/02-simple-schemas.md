---
title: Simple Schemas
hide_table_of_contents: false
---

# Simple Schemas

A Simple Schema defines the fields outside of the [strmMeta section](/02-concepts/02-data-contracts/03-strm-meta.md) in a simple format, and translates this to an
actual [Avro `avsc` definition](https://avro.apache.org/docs/current/spec.html#schemas).

In the [quickstart Simple Schema example](/03-quickstart/51-simple-schema.md) we have a hands-on interaction
that shows the technical details

A simple schema defines a list of *nodes*. Each node is an entity with
the following attributes:

-   `name` (required) that you can use to access the entity.

-   `avro_name` (optional) conforms to [the naming rules for Avro](https://avro.apache.org/docs/current/spec.html#names). Is
    derived from `name` *unless* it was explicitly set.

-   `type` (required) an integer, string, float or a `node`

-   `repeated` (optional) that defines whether or not the field can
    occur more than once. Defaults to false.

-   `required` (optional) that defines whether or not the sender must
    fill in this field value. Defaults to false.

-   `doc` (optional) documents the purpose of the field.

-   `nodes` (optional) holds *child-nodes* for nested data structure.
    This is only valid when the `type` is `NODE`

An example of a simple schema:

**simple
```yaml
name: Clicks
nodes:
  - name: SessionId
    type: STRING
    doc: the string value that connects events to a single sequence
    required: true
    repeated: false
  - name: User Name
    type: STRING
    doc:  we use an event contract to define that this is private
  - name: url
    type: STRING
    doc:  the URL of the current page
  - name: mouse positions
    repeated: true
    type: NODE
    nodes:
      - name: x
        type: INTEGER
      - name: "y"  ## warning. Put quotes around y, or it is a boolean true
        type: INTEGER
```
