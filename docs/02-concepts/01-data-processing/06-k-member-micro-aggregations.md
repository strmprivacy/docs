---
title: K-Anonymity (K-Member Micro-Aggregations)
hide_table_of_contents: false
---

For many use cases and tasks in an organization, de-identification is enough when you have to take care of privacy (for instance because the data was collected lawfully, which of course it was...). By using [masking](docs/02-concepts/02-data-contracts/03-masked-fields.md) or (rotated) [encryption](docs/02-concepts/01-data-processing/01-pii-field-encryption.md), plaintext data is hidden. This is great if you want to retain patterns and value inside your data. However, there is
no _mathematical_ guarantee we can never re-identify any user based
on patterns inside non-personal data.

There are cases where strict guarantees on the level of personality inside data are necessary (by default, or mandated by policies inside organizations). By definition, removing personality from data also includes removing potential information from the data. 

If this is a trade-off you need to strike you can extend your pipelines with K-MMA: K-member micro aggregations. 

# K-Member Micro Aggregations and K-anonymity
A common way to describe how hard re-identification of your data is, is by the means of k-anonymity. A dataset is
said to be _k_-anonymous if and only if for any data subject at least _k-1_ other data subjects have the same
characteristics. These characteristics are based on a set of _Quasi Identifiers_
(see [definitions](docs/02-concepts/99-definitions.md)). With k-Member Micro-Aggregations we can guarantee that for each
row of the Quasi Identifiers you define at least _k-1_ rows exist with the same values.

[//]: # (TODO expand on this with a k-anonymity example?)

To illustrate this principle, consider the following example. We generate some random data that resembles some sort
of ecommerce platform. We created a [data contract](/docs/02-concepts/02-data-contracts/index.md) with the following
[simple schema](/docs/02-concepts/02-data-contracts/01-simple-schemas.md):

```yaml
nodes:
  - type: STRING
    name: transactionId
    repeated: false
    required: true
  - type: STRING
    name: userId
  - type: STRING
    name: email
  - type: INTEGER
    name: age
  - type: STRING
    name: size
  - type: INTEGER
    name: transactionAmount
  - type: STRING
    name: items
  - type: STRING
    name: hairColor
  - type: INTEGER
    name: itemCount
  - type: STRING
    name: date
  - type: INTEGER
    name: purpose
```

A sample of the generated data:

|transactionId     |userId|email|age               |size|hairColor|transactionAmount|items                       |itemCount|date               |purpose|
|------------------|------|-----|------------------|----|---------|-----------------|----------------------------|---------|-------------------|-------|
|861200791         |533445|jeffreypowell@hotmail.com|33                |XS  |red      |123              |[19063]                     |1        |2022-08-30 15:44:44|1      |
|733970993         |468355|forbeserik@gmail.com|16                |S   |brown    |46               |[13342, 12309, 13755, 10134]|4        |2022-07-19 15:44:44|2      |
|494723158         |553892|wboone@gmail.com|64                |XS  |black    |73               |[13342, 10773, 12442]       |3        |2022-06-18 15:44:44|2      |

[//]: # (TODO extra fields in data contract needed)

## Data contract annotation for K-Anonymity

For using micro-aggregations, additional information in the data contract is required. For each of the
quasi-identifiers we differentiate between three different statistical data types.

1. Numerical: numerical data type with natural ordering, e.g. age in years
2. Nominal: categorical data without ordering, e.g. a person's hair color
3. Ordinal: categorical data with a specific order, e.g. clothing size (S, M, L, ...)

We define the quasi-identifiers in the `FieldMetadata`.

```json showLineNumbers
{
  "data_contract": {
    ...,
    "field_metadata": [
      {
        #callout-1
        "field_name": "size",
        "personal_data_config": {
          #callout-2
          "is_quasi_id": true
        },
        #callout-3
        "statistical_data_type": "ORDINAL",
        #callout-4
        "ordinal_values": [
          "XS",
          "S",
          "M",
          "L",
          "XL"
        ]
      },
      {
        "field_name": "age",
        "personal_data_config": {
          "is_quasi_id": true
        },
        "statistical_data_type": "NUMERICAL"
      },
      {
        "field_name": "transactionAmount",
        "personal_data_config": {
          "is_quasi_id": true
        },
        "statistical_data_type": "NUMERICAL"
      },
      {
        "field_name": "hairColor",
        "personal_data_config": {
          "is_quasi_id": true
        },
        "statistical_data_type": "NOMINAL"
      }
    ]
  }
}
```

1. Define the `field_name` corresponding to the header of the column
2. Indicate the field is a quasi-identifier
3. Define the statistical data type (`NUMERICAL`, `NOMINAL`, `ORDINAL`)
4. If your column has ordinal data, you should define the `ordinal_values` in their respective order

Hence, for the micro-aggregations we will only use four columns of the data. A sample is found below.

| age | hairColor | size | transactionAmount |
|-----|-----------|------|-------------------|
| 30  | blonde    | XL   | 44                |
| 30  | blonde    | XL   | 19                |
| 26  | blonde    | XL   | 31                |
| 27  | brown     | S    | 220               |
| 27  | brown     | S    | 257               |
| 32  | brown     | S    | 233               |
| 28  | black     | XL   | 172               |
| 31  | black     | XL   | 209               |
| 28  | black     | XL   | 216               |
| 28  | black     | XL   | 167               |

## Micro-Aggregations Batch Job

Now that the data contract is defined correctly (make sure the contract is
[active](/docs/02-concepts/02-data-contracts/index.md#states)), define the configuration for the
micro-aggregations batch job. We assume you have created a [data connector](/docs/02-concepts/04-data-connectors.md)
in the same project. The configuration file should then look like this:

```json showLineNumbers
{
  #callout-1
  "source_data": { 
    "data_connector_ref": { "name": "dataConnectorName"},
    "path_prefix": "input",
    "file_name": "file.csv",
    "data_type": { "csv": { "charset": "UTF-8" } }
  },
  #callout-2
  "target_data": {
    "data_connector_ref": { "name": "dataConnectorName"},
    "path_prefix": "output",
    "file_name": "file.csv",
    "data_type": { "csv": { "charset": "UTF-8" } }
  },
  #callout-3
  "data_contract_ref": {
    "handle": "handle",
    "name": "name",
    "version": "xx.xx.xx"
  },
  #callout-4
  "aggregation_config": {
    "minimum_k_anonymity": 3
  }
}
```

1. The source of the data by the means of your data connector, the file name and path prefix and the type of
   the data (only `csv` is available presently)
2. The target location of the data, similar to the source data
3. The reference to the data contract applied to the data
4. The minimum amount of _`k`_-anonymity you want to ensure

Finally, you can run the micro-aggregations batch job by running the following command:

```shell
strm create batch-job --type micro-aggregation --file my_config.json
```

The results of our example are found below:

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| age | hairColor | size | transactionAmount |
|-----|-----------|------|-------------------|
| 30  | blonde    | XL   | 44                |
| 30  | blonde    | XL   | 19                |
| 26  | blonde    | XL   | 31                |
| 27  | brown     | S    | 220               |
| 27  | brown     | S    | 257               |
| 32  | brown     | S    | 233               |
| 28  | black     | XL   | 172               |
| 31  | black     | XL   | 209               |
| 28  | black     | XL   | 216               |
| 28  | black     | XL   | 167               |


</td><td>

| age                | hairColor | size | transactionAmount  |
|--------------------|-----------|------|--------------------|
| 28.666666666666668 | blonde    | XL   | 31.33333333333336  |
| 28.666666666666668 | blonde    | XL   | 31.33333333333336  |
| 28.666666666666668 | blonde    | XL   | 31.33333333333336  |
| 28.666666666666668 | brown     | S    | 236.66666666666669 |
| 28.666666666666668 | brown     | S    | 236.66666666666669 |
| 28.666666666666668 | brown     | S    | 236.66666666666669 |
| 28.75              | black     | XL   | 191.0              |
| 28.75              | black     | XL   | 191.0              |
| 28.75              | black     | XL   | 191.0              |
| 28.75              | black     | XL   | 191.0              |


</td></tr> </table>


To see if your output data actually satisfies the minimum _k_-anonymity, you can use our [privacy diagnostics python
package](https://github.com/strmprivacy/strm-privacy-diagnostics).
The full example that we used, can be found
[here](https://deepnote.com/workspace/STRM-demos-2614c69d-1aae-4c75-a0b8-ee631006da30/project/Data-team-in-a-day-with-STRM-eb9f78ee-b796-48e5-b1ff-b77815a3952a).
