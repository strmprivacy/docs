---
title: Purpose maps
hide_table_of_contents: false
---
In the world of data processing and privacy, everything starts with a legal basis for processing: to acquire and use data, you need a justified basis for it. For instance, under GDPR you could need the data to fulfil a contract, have a legitimate interest to the data, or obtain (different types of) consent.

With STRM, you define these legal bases and the usage target as `purposes` in a purpose map: a list of different processing motivations. This way, DPO's and privacy engineers can make sure data processing adheres to the internally defined purposes. 

Engineering and data teams can then attach a purpose as defined in the map to every record or event processed with STRM. Together with the [data contract](docs/02-concepts/02-data-contracts/index.md), this acts as the instruction to transform and split the data into privacy streams. It is applied in a time-forward manner. Do you have e.g. `marketing consent` as legitimate purpose for user Mario on Monday and does Mario revoke the consent on tuesday, leaving you with only `contract fulfillment` as basis for Mario's data processing? Then the data processing automagically follows this change!

:::important
Make sure your basis for processing and purpose map definitions match so it is accurately attached to the data. Our purpose maps are not a consent management solution (yet).
:::

## Cumulative vs Granular purposes
Purpose maps are a list of processing motivations you have for data. Technically, these are translated to simple numbers like `1 2 3` etc - that's the "map" part. When you define privacy streams as part of [pipelines](docs/02-concepts/01-data-processing/03-data-pipelines.md), purposes can be used in two ways, `granular` and `cumulative`:

- Every purpose is its own level when you define the purpose as `granular`,
- With the `cumulative` setting applied, lower purpose levels are included in the specified higher purpose levels. 

Example: in a `cumulative` type of stream, this would mean an `analytical - 1` purpose is part of the `marketing - 2 ` purpose, which is part of the `personalisation - 3` purpose - and so attaching `personalisation - 3` to data implies analytical and marketing purposes are also allowed for that data.

When you create a purpose map, make sure the higher purpose has a higher purpose level when you intend to use them cumulatively. E.g. `contract fulfilment` is level `0`, `analytical` as level `1` and `marketing` as level `2`.

## Creating purpose maps
Creating purpose maps is done through our console: you add and describe the different purposes you have for data. The levels (the numbers) you assign to each are interpreted by our platform as context following the [data contract](docs/02-concepts/02-data-contracts/index.md) you defined.
