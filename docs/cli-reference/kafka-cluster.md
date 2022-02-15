A Kafka Cluster can be used for exporting directly from STRM Privacy to
a Kafka Cluster owned by the client, or to the shared Kafka Export
Cluster, hosted by STRM Privacy. This gives all the performance,
scalability and reliability benefits offered by Kafka.

The Kafka Cluster is only a configuration object, it does not create the
actual cluster infrastructure. It only points to an existing Kafka
Cluster.

At the moment, it’s not possible to create your own Kafka Cluster. All
Kafka Exporters use the STRM Privacy Shared Cluster.

## get

Get kafka cluster information.

### Usage

`strm get kafka-cluster (cluster-name) [flags]`

### Arguments

cluster-name  
name of the cluster

### Flags

See [Global flags](index.md#global-flags) for all global flags.

### Example

```bash
strm get kafka-cluster shared-export
{
  "ref": {
    "billingId": "internal",
    "name": "shared-export"
  },
  "bootstrapServers": "export-kafka-bootstrap.foundation:9099",
  "authMechanism": "SASL_PLAIN",
  "tokenUri": "https://sts.strmprivacy.io/token"
}
```

`bootstrapServers` is only accessible from inside STRM Privacy. If you
actually want to access these from the internet you access

    export-bootstrap.kafka.strmprivacy.io:9092

You’ll obviously need credentials which you can acquire via
[kafka-user](kafka-user.md).
