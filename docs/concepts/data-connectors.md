---
title: Data Connectors
hide_table_of_contents: false
---

A Data Connector represents a location from and to which data can be read and written. For example, an AWS S3 bucket
or a Google Cloud Storage bucket. By itself, a Data Connector does nothing, but paired with a batch job or batch exporter,
it provides a flexible way to read or export data. When creating a Data Connector, credentials must be provided that grant the required access (read, write, or both).

The following data connector and credential types are currently supported:

<table style={{"width":"100%","display":"table"}}>
<colgroup>
<col style={{"width":"33%"}} />
<col style={{"width":"33%"}} />
</colgroup>
<tbody>
<tr>
<td><p><strong>Data Connector Type</strong></p></td>
<td><p><strong>Credentials Type</strong></p></td>
</tr>
<tr class="odd">
<td><p>Amazon S3 Bucket</p></td>
<td><p>IAM User Access Key</p></td>
</tr>
<tr class="odd">
<td><p>Google Cloud Storage Bucket</p></td>
<td><p>Service Account Credentials</p></td>
</tr>
<tr class="odd">
<td><p>Azure Blob Storage Container</p></td>
<td><p>Application Principal Client Secret Credentials</p></td>
</tr>
</tbody>
</table>

For examples on how to create and use these Data Connectors, see the [Batch Exporter quickstart](/quickstart/batch-exporter.md),
or the [CLI reference](/cli-reference/strm/create/data-connector) for data connectors.
