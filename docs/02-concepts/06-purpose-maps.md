---
title: Purpose maps
hide_table_of_contents: false
---

[data contract]: docs/02-concepts/02-data-contracts/index.md 

In the world of data processing and privacy, everything starts with a legal basis for processing: to acquire and use data,
you need a justified basis for it. For instance, under GDPR you could need the data to fulfil a contract, have a legitimate
interest to the data, or obtain (different types of) consent.

With STRM, you define these legal bases and the usage target as `purposes` in a purpose map: a list of different processing
motivations. This way, DPOs and privacy engineers can make sure data processing adheres to the internally defined purposes. 

Engineering and data teams can then attach a purpose as defined in the map to every record or event processed with STRM.
Together with the [data contract], this acts as the instruction to transform and split the data into privacy streams. 
It is applied in a time-forward manner. Do you have e.g. `marketing consent` as legitimate purpose for user Mario on Monday
and does Mario revoke the consent on Tuesday, leaving you with only `contract fulfillment` as basis for Mario's data
processing? Then the data processing automagically follows this change!

:::important
Make sure your basis for processing and purpose map definitions match so it is accurately attached to the data. Our purpose
maps are not a consent management solution (yet).
:::

:::note
Creating purpose maps is done through our console: you add and describe the different purposes you have for data.
Then you can start using them in your data contracts and privacy streams.
:::
