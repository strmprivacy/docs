---
title: Policies
hide_table_of_contents: false
---

# Policies
Policies define for what purpose a certain [pipeline](../data-pipelines) processes data points.

An important technical
aspect of a policy is its _retention period_. Every encryption key that is created in the context of a certain pipeline
will be assigned a policy and an _expiration moment_. What one does with these expirations is up to the organization.
For certain legal or financial pipelines, it might mean **do not delete encryption key any sooner than**. But for a
pipeline that deals for instance with a clickstream it might mean **automatically delete after**.


## Example
[uuid]: https://en.wikipedia.org/wiki/Universally_unique_identifier

Policies have a few attributes.

Example:
```sh
strm get policy "1 year"

Name: 1 year
Id: 5c8e653a-8102-4444-ac15-a3d1aa0ff109
Description:
Retention(days): 365
Legal Grounds:
State: STATE_ACTIVE
```

**name**: The name of the policy. This has to be unique with your organization. Preferably choose a short word or sentence. This
name can be used to interact with policies via the cli and the console id

**id**: This [uuid][uuid] is assigned at random upon creation of a policy. It is required when _updating_ policy
attributes

**description**: A thorough description of the policy. This describes its purpose, and for what kind of pipelines this policy is used.

**retention**: Upon encryption key creation in the context of a certain pipeline, the pipeline policy is applied, and the expiration
is calculated from the moment the key was first used for encryption plus the number of days retention.

**legal grounds**:  In case the policy is derived from a legal or regulatory text, one could put a reference in this field

**state**: The state of the policy, either `draft`, `active` or `archived`. Policies can only be used in pipelines when they're
in the `active` state.  Policy attributes can be modified as long as its state is `draft`. Policies can be deleted in
`draft` or `archived` state.

## Outputs
Whereas the previous batch key export (for the streams) and the keys csv files for the batch jobs had only two columns
(`keyLink` and `encryptionKey`), they now have 2 more:

* `policyId`: the id of the policy that was applicable when the key was created.
* `expiresAt`: the key was used from a certain moment[^1], and this moment plus the number of retention days[^2].

[^1]: the actual moment the key was created in a stream, or the first second of a certain date for a batch-job.
[^2]: stored as [epoch milliseconds](https://www.epochconverter.com/)

Example `keys.csv`

|keyLink|encryptionKey|policyId|expiresAt
|----|----|----|----
|9652f093-0dd6...|{"primaryKeyId":1221350011,"key":[{"keyData":{"typeU...ehQulXbZpVcVAXFSsu...|5c8e653a-8102-4444-ac15-a3d1aa0ff109|1354233600000|
|e10f59db-9051...|{"primaryKeyId":1589591941,"key":[{"keyData":{"typeU...qwzvRtipPxR50TJxfH...|5c8e653a-8102-4444-ac15-a3d1aa0ff109|1354233600000|
|b324d0a1-16d9...|{"primaryKeyId":1143819971,"key":[{"keyData":{"typeU...IRZW/dZ0GiFi1Og5Bg...|5c8e653a-8102-4444-ac15-a3d1aa0ff109|1354233600000|
|d15e70ea-8189...|{"primaryKeyId":1726426324,"key":[{"keyData":{"typeU...BPB8rS1IJ5et56v57m...|5c8e653a-8102-4444-ac15-a3d1aa0ff109|1354233600000|

This 1 years policy was applied and the 1354233600000 translates to Friday, 30 November 2012 00:00:00 (Use [epochconverter](https://www.epochconverter.com/) for instance).

## The default policy

Currently, since organizations on StrmPrivacy don't really have policies yet, we have the following default policy in
the PRIvacy MEtadata server

**policy** with **no name** and **no id**. This happens when you don't fill in a policy in a stream or a batch-job. In that case the
policy server will provide the `no-name` policy with a retention of 7 years [^3]. You would see this in the exported
keys files as an empty `policyId` column, and the appropriate expiration time.

```sh
strm get policy --get-default-policy

Name: 7 years
Id:
Description: Default 7 year retention
Retention(days): 2556
Legal Grounds:
State: STATE_ACTIVE
```

[^3]: 365.25 * 7 days to be precise.
