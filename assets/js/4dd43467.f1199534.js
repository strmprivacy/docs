"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[688],{992:(e,t,a)=>{a.d(t,{i:()=>l});var n=a(7294),i=a(814),r=a(2389);function s(e){let{children:t,fallback:a}=e;return(0,r.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}const o=e=>{let[t,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{var t;(t=e.url,fetch(t).then((e=>e.text()))).then((e=>{a(e)}))}),[e.url]),n.createElement(i.Z,{language:e.lang,title:e.title},t)},l=e=>n.createElement(s,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement(o,e)))},9101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),r=(a(814),a(992));const s={title:"Authenticated Kafka",hide_table_of_contents:!1},o=void 0,l={unversionedId:"quickstart/ccd/authenticated",id:"quickstart/ccd/authenticated",title:"Authenticated Kafka",description:"[sasl-plain]//docs.confluent.io/platform/current/kafka/authenticationsasl/authenticationsasl_plain.html",source:"@site/docs/quickstart/ccd/06-authenticated.md",sourceDirName:"quickstart/ccd",slug:"/quickstart/ccd/authenticated",permalink:"/docs/latest/quickstart/ccd/authenticated",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Authenticated Kafka",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Metrics and Monitoring",permalink:"/docs/latest/quickstart/ccd/monitoring"},next:{title:"Simple Schema",permalink:"/docs/latest/quickstart/simple-schema"}},c={},u=[{value:"Using an existing Kafka cluster over TLS, with SASL/Plain authentication",id:"tls-sasl-plain",level:2},{value:"TLS truststore",id:"tls-truststore",level:3},{value:"Authentication",id:"authentication",level:3},{value:"<code>values.yaml</code>",id:"valuesyaml",level:3},{value:"Kafka Security Config",id:"kafka-security-config",level:4},{value:"Authentication",id:"authentication-1",level:4},{value:"Authorization",id:"authorization",level:4},{value:"Installing",id:"installing",level:3},{value:"Troubleshooting",id:"troubleshooting",level:4},{value:"Trying again",id:"trying-again",level:3}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tls-sasl-plain"},"Using an existing Kafka cluster over TLS, with SASL/Plain authentication"),(0,i.kt)("p",null,"This hands-on session shows how to get up-and-running with your Customer Cloud Deployment using an ",(0,i.kt)("em",{parentName:"p"},"authenticated Kafka\nCluster")," that uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_plain.html"},"SASL/PLAIN over TLS")," authentication."),(0,i.kt)("p",null,"It's probably a good idea to first run the getting started with the unauthenticated demo Kafka detailed in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/self-hosted"},"self-hosted section")," to make sure you have all the tools configured correctly and understand how\nit should work."),(0,i.kt)("h3",{id:"tls-truststore"},"TLS truststore"),(0,i.kt)("p",null,"In order for our Kafka clients to interact with your Kafka brokers over TLS, they'll have to trust them. This goes via\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/encryption.html#kafka-ssl-encryption"},"a truststore"),". A truststore is an encrypted file that the Kafka clients have to use in order to trust the\nbroker. You'll have to generate one as described in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/security/security_tutorial.html#generating-keys-certs"},"Confluent documentation"),", and put the generated\nvalue in a Kubernetes secret. The truststore has a password to protect it. You must add this password to the Kubernetes\nsecret also."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl create secret generic client-truststore-jks \\\n  --from-file=client.truststore.jks=<your-truststore-jks-file> \\\n  --from-literal=truststore.password=<your-truststore-password>\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"don't change the ",(0,i.kt)("inlineCode",{parentName:"p"},"client.truststore.jks")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"truststore.password")," keys. These names are being used by the various\nKubernetes\ndeployments to retrieve the entities.")),(0,i.kt)("p",null,"Once this secret exists and has been made available to the Kafka clients inside the STRM ecosystem, these clients can\ncommunicate securely with the Kafka brokers."),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Currently we only support ",(0,i.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_plain.html"},"SASL/PLAIN")," authentication; this is a username/password scheme, where the\nKafka cluster has a list of pairs that it accepts. The communication is ",(0,i.kt)("em",{parentName:"p"},"plain text")," but since the channel is TLS\nencrypted, this can not be intercepted."),(0,i.kt)("h3",{id:"valuesyaml"},(0,i.kt)("inlineCode",{parentName:"h3"},"values.yaml")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file you download from the ",(0,i.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"console")," adds a ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka.enabled: true")," override, so the helm chart\nwill actually deploy a Kafka instance inside your k8s namespace. Make sure you have in your ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kafka:\n  enabled: false\n  # you could have multiple separated with a comma\n  bootstrapServers: <your-kafka-broker>:<port>\n")),(0,i.kt)("p",null,"Configuring the credentials is done in two parts."),(0,i.kt)("h4",{id:"kafka-security-config"},"Kafka Security Config"),(0,i.kt)("p",null,"The top-level ",(0,i.kt)("inlineCode",{parentName:"p"},"kafkaSecurityConfig")," section defines how to configure the TLS connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kafkaSecurityConfig:\n  enabled: true\n  securityProtocol: "SASL_SSL"\n  sslTruststoreSecretName: "client-truststore-jks" # use k8s secret name you created.\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"sslTruststoreSecretName")," if you used the default ",(0,i.kt)("inlineCode",{parentName:"p"},"client-truststore-jks")," name for the secret.")),(0,i.kt)("h4",{id:"authentication-1"},"Authentication"),(0,i.kt)("p",null,"The various parts of STRM that interact with Kafka all have to be given a principal name and password. This has to be\ndone in\nthe individual Helm override sections. The ",(0,i.kt)("inlineCode",{parentName:"p"},"user/password")," pairs have to be created in your Kafka broker configuration.\nIn the little sample below, Trivial identities have been added for the various components. You could use the principal one\nfor\nevery one of them, but they must be defined separately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"components:\n  eventGateway:\n    configuration:\n      kafkaAuth:\n        user: strm-event-gateway\n        password: strmprivacy\n  webSocket:\n    configuration:\n      kafkaAuth:\n        user: strm-web-socket\n        password: strmprivacy\n  batchExportersAgent:\n    configuration:\n      kafkaAuth:\n        user: strm-batch-exporter\n        password: strmprivacy\n  streamsAgent:\n    configuration:\n      kafkaAuth:\n        user: strm-streams-agent\n        password: strmprivacy\n  esrProxy:\n    configuration:\n      kafkaAuth:\n        user: strm-esr-proxy\n        password: strmprivacy\n  decrypterConfig:\n    configuration:\n      kafkaAuth:\n        user: strm-decrypter\n        password: strmprivacy\n  batchExporterConfig:\n    configuration:\n      kafkaAuth:\n        user: strm-batch-exporter\n        password: strmprivacy\n")),(0,i.kt)("h4",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"We assume that once authorized, the entity has the permissions it needs. In case you have fine-grained authorization via\nRBAC or ACLs on the Kafka cluster, the following permissions are required:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event-gateway")," needs topic write rights to topics in the cluster whose name starts with ",(0,i.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"keys-")," and a\ntopic named ",(0,i.kt)("inlineCode",{parentName:"li"},"billing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"streams-agent")," needs topic admin rights to create and delete and inspect topics. It will create topics whose name\nstarts with ",(0,i.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"keys-")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web-socket")," needs topic consume rights to topics starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"stream-"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"batch-exporters-agent")," needs topic consume rights to topics starting with ",(0,i.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"keys-"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"esr-proxy")," needs topic consume rights to a topic named ",(0,i.kt)("inlineCode",{parentName:"li"},"billing"))),(0,i.kt)("h3",{id:"installing"},"Installing"),(0,i.kt)("p",null,"Once you have created the ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," as described above, you can"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"helm install strmprivacy strmrepo/strm --values values.yaml\n")),(0,i.kt)("p",null,"and follow along with the ",(0,i.kt)("a",{parentName:"p",href:"#interacting"},"Interacting with the CCD Cluster")," section."),(0,i.kt)("h4",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"It is ",(0,i.kt)("em",{parentName:"p"},"highly likely")," that this won't go correctly the first try. Setting up the TLS can go wrong in many ways, from the\ntrivial (missing secret), to the painful (reverse hostname verification doesn't work). The logging of deployments like\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"streams-agent")," or the ",(0,i.kt)("inlineCode",{parentName:"p"},"event-gateway")," will probably give a clue what's going on."),(0,i.kt)("p",null,"Troubleshooting with a Kafka test-client."),(0,i.kt)("p",null,"Use this Kubernetes manifest to interact with the Kafka cluster."),(0,i.kt)(r.i,{url:"https://raw.githubusercontent.com/strmprivacy/data-plane-helm-chart/master/test-utils/kafka-tls-client.yaml",title:"kafka-tls-client.yaml",lang:"yaml",mdxType:"ExternalCodeBlock"}),(0,i.kt)("p",null,"Modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"client.props")," section to use your credentials (the truststore password and the principal username/password\npair)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  client.props: |\n    security.protocol=SASL_SSL\n    ssl.truststore.location=/tmp/truststore/client.truststore.jks\n    ssl.truststore.password=strmprivacy\n    sasl.mechanism=PLAIN\n    sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required     username="strm-event-gateway"     password="strmprivacy";\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"make sure you keep the ",(0,i.kt)("inlineCode",{parentName:"p"},"sasl.jaas.config")," on one line and don't forget the semi-colon at the end!")),(0,i.kt)("p",null,"You can now interact with the Kafka cluster from within the pod."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl apply -f kafka-tls-test-client\n# use tab-completion to get the name of the pod\nkubectl exec -ti kafka-tls-test-client-... -- bash\n\nkafka-topics.sh --bootstrap-server <your-bootstrap-server> --list \\\n     --command-config /tmp/client.props\n__consumer_offsets\nbilling\nkeys-28a3152d-f6c8-4c52-8bd7-c587089938eb\nkeys-35bc9088-c41c-41de-b042-fa835a4cb3b1\nstream-28a3152d-f6c8-4c52-8bd7-c587089938eb\nstream-35bc9088-c41c-41de-b042-fa835a4cb3b1\nstream-e00843bd-86c8-4b85-a1bd-b7b509fc6804\n")),(0,i.kt)("h3",{id:"trying-again"},"Trying again"),(0,i.kt)("p",null,"If you've made mistakes and want to start over:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"helm uninstall strmprivacy --namespace strmprivacy")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl delete ns strmprivacy")," kills everything\n(including the k8s namespace). Don't forget to recreate the\nnamespace afterwards.")))}d.isMDXComponent=!0}}]);