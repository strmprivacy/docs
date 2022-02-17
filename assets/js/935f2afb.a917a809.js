"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"latest","banner":null,"badge":true,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Overview","items":[{"type":"link","label":"About STRM Privacy","href":"/docs/docs/latest/overview/about","docId":"overview/about"},{"type":"link","label":"What is Personally Identifiable Information","href":"/docs/docs/latest/overview/pii","docId":"overview/pii"},{"type":"link","label":"Bringing STRM Privacy into your organization","href":"/docs/docs/latest/overview/organization","docId":"overview/organization"},{"type":"link","label":"High Level Architecture","href":"/docs/docs/latest/overview/hla","docId":"overview/hla"},{"type":"link","label":"Definitions","href":"/docs/docs/latest/overview/definitions","docId":"overview/definitions"}],"collapsible":true,"collapsed":true,"href":"/docs/docs/latest/overview/"},{"type":"category","label":"Concepts","items":[{"type":"link","label":"Core","href":"/docs/docs/latest/concepts/core-concepts","docId":"concepts/core-concepts"},{"type":"link","label":"Batch vs Stream processing","href":"/docs/docs/latest/concepts/batch-vs-streaming","docId":"concepts/batch-vs-streaming"},{"type":"link","label":"Batch Jobs","href":"/docs/docs/latest/concepts/batch-jobs","docId":"concepts/batch-jobs"},{"type":"link","label":"Schemas and Contracts","href":"/docs/docs/latest/concepts/schemas-and-contracts","docId":"concepts/schemas-and-contracts"},{"type":"link","label":"the strmMeta section","href":"/docs/docs/latest/concepts/strm-meta","docId":"concepts/strm-meta"},{"type":"link","label":"Masked Fields","href":"/docs/docs/latest/concepts/masked-fields","docId":"concepts/masked-fields"},{"type":"link","label":"Simple Schemas","href":"/docs/docs/latest/concepts/simple-schemas","docId":"concepts/simple-schemas"}],"collapsible":true,"collapsed":true,"href":"/docs/docs/latest/concepts/"},{"type":"category","label":"Quickstart","items":[{"type":"link","label":"Creating Streams with the Command Line Interface","href":"/docs/docs/latest/quickstart/creating-streams","docId":"quickstart/creating-streams"},{"type":"link","label":"Receiving events over websocket","href":"/docs/docs/latest/quickstart/listen-web-socket","docId":"quickstart/listen-web-socket"},{"type":"link","label":"Sending and receiving by hand","href":"/docs/docs/latest/quickstart/sending-curl","docId":"quickstart/sending-curl"},{"type":"link","label":"Examples in multiple languages","href":"/docs/docs/latest/quickstart/full-example","docId":"quickstart/full-example"},{"type":"link","label":"Kafka consumer in Python","href":"/docs/docs/latest/quickstart/exporting-kafka","docId":"quickstart/exporting-kafka"},{"type":"link","label":"Exporting to AWS S3","href":"/docs/docs/latest/quickstart/receiving-s3","docId":"quickstart/receiving-s3"},{"type":"link","label":"Exporting Keys","href":"/docs/docs/latest/quickstart/exporting-keys","docId":"quickstart/exporting-keys"},{"type":"link","label":"gRPC API definition","href":"/docs/docs/latest/quickstart/grpc","docId":"quickstart/grpc"},{"type":"link","label":"Simple Schema","href":"/docs/docs/latest/quickstart/simple-schema","docId":"quickstart/simple-schema"}],"collapsible":true,"collapsed":true,"href":"/docs/docs/latest/quickstart/"},{"type":"category","label":"CLI Reference","items":[{"type":"link","label":"auth","href":"/docs/docs/latest/cli-reference/auth","docId":"cli-reference/auth"},{"type":"link","label":"batch-exporter","href":"/docs/docs/latest/cli-reference/batch-exporter","docId":"cli-reference/batch-exporter"},{"type":"link","label":"batch-job","href":"/docs/docs/latest/cli-reference/batch-job","docId":"cli-reference/batch-job"},{"type":"link","label":"completion","href":"/docs/docs/latest/cli-reference/completion","docId":"cli-reference/completion"},{"type":"link","label":"event-contract","href":"/docs/docs/latest/cli-reference/event-contract","docId":"cli-reference/event-contract"},{"type":"link","label":"kafka-cluster","href":"/docs/docs/latest/cli-reference/kafka-cluster","docId":"cli-reference/kafka-cluster"},{"type":"link","label":"kafka-exporter","href":"/docs/docs/latest/cli-reference/kafka-exporter","docId":"cli-reference/kafka-exporter"},{"type":"link","label":"kafka-user","href":"/docs/docs/latest/cli-reference/kafka-user","docId":"cli-reference/kafka-user"},{"type":"link","label":"key-stream","href":"/docs/docs/latest/cli-reference/key-stream","docId":"cli-reference/key-stream"},{"type":"link","label":"listen-web-socket","href":"/docs/docs/latest/cli-reference/listen-web-socket","docId":"cli-reference/listen-web-socket"},{"type":"link","label":"schema-code","href":"/docs/docs/latest/cli-reference/schema-code","docId":"cli-reference/schema-code"},{"type":"link","label":"schema","href":"/docs/docs/latest/cli-reference/schema","docId":"cli-reference/schema"},{"type":"link","label":"simulate","href":"/docs/docs/latest/cli-reference/simulate","docId":"cli-reference/simulate"},{"type":"link","label":"sink","href":"/docs/docs/latest/cli-reference/sink","docId":"cli-reference/sink"},{"type":"link","label":"stream","href":"/docs/docs/latest/cli-reference/stream","docId":"cli-reference/stream"},{"type":"link","label":"usage","href":"/docs/docs/latest/cli-reference/usage","docId":"cli-reference/usage"}],"collapsible":true,"collapsed":true,"href":"/docs/docs/latest/cli-index"},{"type":"link","label":"Contact","href":"/docs/docs/latest/contact/","docId":"contact/index"}]},"docs":{"cli-index":{"id":"cli-index","title":"STRM Privacy CLI reference","description":"The STRM Privacy CLI (strm) is the primary tool for managing your STRM","sidebar":"docs"},"cli-reference/auth":{"id":"cli-reference/auth","title":"auth","description":"The global auth command is used for authenticating the CLI with STRM","sidebar":"docs"},"cli-reference/batch-exporter":{"id":"cli-reference/batch-exporter","title":"batch-exporter","description":"batch-exporter","sidebar":"docs"},"cli-reference/batch-job":{"id":"cli-reference/batch-job","title":"batch-job","description":"A Batch Job outputs all events in file all events to files in a Sink.","sidebar":"docs"},"cli-reference/completion":{"id":"cli-reference/completion","title":"completion","description":"The global completion command is used to generate tab completion for","sidebar":"docs"},"cli-reference/event-contract":{"id":"cli-reference/event-contract","title":"event-contract","description":"An Event Contract defines the rules that are to be applied to events.","sidebar":"docs"},"cli-reference/kafka-cluster":{"id":"cli-reference/kafka-cluster","title":"kafka-cluster","description":"A Kafka Cluster can be used for exporting directly from STRM Privacy to","sidebar":"docs"},"cli-reference/kafka-exporter":{"id":"cli-reference/kafka-exporter","title":"kafka-exporter","description":"A Kafka Exporter, like a Batch Exporter, can be used to export events","sidebar":"docs"},"cli-reference/kafka-user":{"id":"cli-reference/kafka-user","title":"kafka-user","description":"A Kafka User is a user on a Kafka Exporter, that can be used for","sidebar":"docs"},"cli-reference/key-stream":{"id":"cli-reference/key-stream","title":"key-stream","description":"Key Streams are a restricted feature. For now, enabling and disabling","sidebar":"docs"},"cli-reference/listen-web-socket":{"id":"cli-reference/listen-web-socket","title":"listen-web-socket","description":"The global listen command is used for starting a Web Socket listener","sidebar":"docs"},"cli-reference/schema":{"id":"cli-reference/schema","title":"schema","description":"A Schema describes the format of the events that are sent to STRM","sidebar":"docs"},"cli-reference/schema-code":{"id":"cli-reference/schema-code","title":"schema-code","description":"In order to simplify sending correctly serialized data to STRM Privacy","sidebar":"docs"},"cli-reference/simulate":{"id":"cli-reference/simulate","title":"simulate","description":"The global simulate command runs a simulation with random events","sidebar":"docs"},"cli-reference/sink":{"id":"cli-reference/sink","title":"sink","description":"A Sink is a STRM Privacy configuration object for a remote file storage.","sidebar":"docs"},"cli-reference/stream":{"id":"cli-reference/stream","title":"stream","description":"A stream is the central resource in STRM Privacy. Clients can connect to","sidebar":"docs"},"cli-reference/usage":{"id":"cli-reference/usage","title":"usage","description":"Usage allows you to see how many events were sent on a certain stream.","sidebar":"docs"},"concepts/batch-jobs":{"id":"concepts/batch-jobs","title":"Batch Jobs","description":"This page describes the most important concepts to understand when using","sidebar":"docs"},"concepts/batch-vs-streaming":{"id":"concepts/batch-vs-streaming","title":"Batch vs Stream processing","description":"Batch processing, as the name implies, works by processing data in","sidebar":"docs"},"concepts/core-concepts":{"id":"concepts/core-concepts","title":"Core","description":"What problems are we trying to solve?","sidebar":"docs"},"concepts/index":{"id":"concepts/index","title":"STRM Privacy concepts","description":"Batch vs Stream processing","sidebar":"docs"},"concepts/masked-fields":{"id":"concepts/masked-fields","title":"Masked Fields","description":"Field masking is a mechanism that is applied to events in derived","sidebar":"docs"},"concepts/schemas-and-contracts":{"id":"concepts/schemas-and-contracts","title":"Schemas and Contracts","description":"All events sent to STRM Privacy adhere to the following:","sidebar":"docs"},"concepts/simple-schemas":{"id":"concepts/simple-schemas","title":"Simple Schemas","description":"A Simple Schema defines the fields outside of the strmMeta section in a simple format, and translates this to an","sidebar":"docs"},"concepts/strm-meta":{"id":"concepts/strm-meta","title":"the strmMeta section","description":"Every schema in STRM Privacy has this section called strmMeta. Why","sidebar":"docs"},"contact/index":{"id":"contact/index","title":"Reach out to us","description":"Want to leave some feedback for us? Or require some assistance? We\u2019re","sidebar":"docs"},"index":{"id":"index","title":"Docs","description":""},"overview/about":{"id":"overview/about","title":"About STRM Privacy","description":"Lightning fast, Privacy Secured, Customer Data - you can actually use","sidebar":"docs"},"overview/definitions":{"id":"overview/definitions","title":"Definitions","description":"GDPR defines an official set of definitions, which you can find on the","sidebar":"docs"},"overview/hla":{"id":"overview/hla","title":"High Level Architecture","description":"This section shows the high level architecture of STRM Privacy. It shows","sidebar":"docs"},"overview/images/README":{"id":"overview/images/README","title":"Diagrams","description":"Diagrams are created using draw.io Open the .svg file directly, modify and save. No need to convert to .png or another image format."},"overview/index":{"id":"overview/index","title":"Overview","description":"About STRM Privacy","sidebar":"docs"},"overview/organization":{"id":"overview/organization","title":"Bringing STRM Privacy into your organization","description":"In order to start using STRM Privacy in your organization you need to","sidebar":"docs"},"overview/pii":{"id":"overview/pii","title":"What is Personally Identifiable Information","description":"This term is being used a lot in privacy based data processing.","sidebar":"docs"},"quickstart/authentication-cli":{"id":"quickstart/authentication-cli","title":"Authentication with the Command Line Interface","description":"The STRM Privacy CLI is a command line interface for interacting with"},"quickstart/creating-streams":{"id":"quickstart/creating-streams","title":"Creating Streams with the Command Line Interface","description":"See Authentication with the CLI","sidebar":"docs"},"quickstart/exporting-kafka":{"id":"quickstart/exporting-kafka","title":"Kafka consumer in Python","description":"Data can be consumed from your streams  in JSON format via an","sidebar":"docs"},"quickstart/exporting-keys":{"id":"quickstart/exporting-keys","title":"Exporting Keys","description":"The output streams feature","sidebar":"docs"},"quickstart/full-example":{"id":"quickstart/full-example","title":"Examples in multiple languages","description":"This section helps you to set up a stream and start sending data to STRM Privacy.","sidebar":"docs"},"quickstart/grpc":{"id":"quickstart/grpc","title":"gRPC API definition","description":"STRM Privacy is controlled via gRPC api definitions. The CLI is no more","sidebar":"docs"},"quickstart/index":{"id":"quickstart/index","title":"[Running Batch Jobs with the Command Line Interface](/concepts/batch-jobs.md)","description":"How to create, list and delete input streams and derived streams.","sidebar":"docs"},"quickstart/listen-web-socket":{"id":"quickstart/listen-web-socket","title":"Receiving events over websocket","description":"It\u2019s nice to see some data when playing with the debugging endpoint. Use","sidebar":"docs"},"quickstart/receiving-s3":{"id":"quickstart/receiving-s3","title":"Exporting to AWS S3","description":"If you want to export stream data to AWS S3, you first need to create a","sidebar":"docs"},"quickstart/sending-curl":{"id":"quickstart/sending-curl","title":"Sending and receiving by hand","description":"This page aims to clarify how to send and receive data to STRM Privacy","sidebar":"docs"},"quickstart/simple-schema":{"id":"quickstart/simple-schema","title":"Simple Schema","description":"This is a hands-on session where we create a Simple Schema and see how","sidebar":"docs"}}}')}}]);