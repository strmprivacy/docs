"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3831,7918],{8573:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),r=a(614),l=a(1262);const i=new RegExp("^v\\d+\\.\\d+\\.\\d+$");function s(e,t,a){return a.includes(e)?"":`<${t.toUpperCase().replaceAll(/(?:^\s?|\s*?[.!?]+$|[()])/g,"").replaceAll(/\s/g,"_")}>`}function o(e,t){if(e.download){const a=new Blob([t],{type:"text/plain"});return n.createElement("div",{className:"code-block-footer-download"},n.createElement("a",{target:"_blank",href:window.URL.createObjectURL(a),download:e.download},"Download file"))}return n.createElement(n.Fragment,null)}function c(e){let{children:t,...a}=e;if(a.placeholders){let{metaStringBeforePlaceholderMarker:e,metaStringAfterPlaceholderMarker:c,emptyPlaceholders:u}=function(e){let[t,a]=e.metastring.split(/\s?placeholders\s/),n=[];if(a.includes("empty_placeholders")){const e=new RegExp("(?:empty_placeholders)=(.*?)\\s(.*)","g").exec(a);e.length>1&&(n+=e[1].split(","),a=e[2])}return{metaStringBeforePlaceholderMarker:t,metaStringAfterPlaceholderMarker:a,emptyPlaceholders:n}}(a),d=Object.fromEntries(c.replaceAll(/,\s?/g,",").split(",").map((e=>e.split("="))).map((e=>{let[t,a]=e;return[t,{description:a,inputPlaceholder:s(t,a,u),isExternalData:a.startsWith("https://"),fetched:!1}]}))),p=function(e,t,a){let n={...e};return Object.entries(e).forEach((e=>{let[a,r]=e;t.includes(a)&&delete n[a]})),n.metastring=a,n.className=n.className+" with-footer",n}(a,c,e),{placeholderValues:h,handleChange:m}=function(e){let t=Object.fromEntries(Object.entries(e).map((e=>{let[t,a]=e;return a.isExternalData?[t,{value:"<FETCHING>",fetched:!1}]:[t,{value:a.inputPlaceholder,fetched:!0}]}))),[a,r]=(0,n.useState)(t);const l=(e,t)=>{let n={...a};delete n[e],n[e]={value:t.target.value,fetched:!0},r({...n})};return Object.entries(e).filter((e=>{let[t,a]=e;return a.isExternalData})).sort(((e,t)=>{let[a,n]=e,[r,l]=t;return a.localeCompare(r)})).map((e=>{let[t,r]=e;(0,n.useEffect)((()=>{if(!a[t].fetched){const[e,a]=r.description.split("#");fetch(e).then((e=>e.json())).then((e=>e[a])).then((e=>null!=e.match(i)?e.substring(1):e)).then((e=>{l(t,{target:{value:e}})}))}}))})),{placeholderValues:a,handleChange:l}}(d),k=function(e,t,a,r){let l=[];return Object.entries(t).filter((e=>{let[t,a]=e;return!a.isExternalData})).forEach((i=>{let[s,o]=i;const c=a[s].value===o.inputPlaceholder?"":a[s].value,u="$"+s;let d=null!=e.match(new RegExp("\\"+u+"\\b"));l.push(n.createElement("div",{className:"code-block-placeholder",key:s},n.createElement("label",{className:"code-block-placeholder-element",for:"placeholder-"+s},n.createElement("b",null,t[s].description),n.createElement("input",{type:"text",className:"code-block-placeholder-element",id:"placeholder-"+s,placeholder:d?o.inputPlaceholder:"Unused placeholder. Use it with "+u+" in the code block.",disabled:!d,value:c,onChange:e=>r(s,e)}))))})),l}(t,d,h,m),f=function(e,t,a){let n=e;return Object.entries(t).forEach((e=>{let[t,r]=e;const l="$"+t;if(n.includes(l)){const e=0===r.value.length?a[t].inputPlaceholder:r.value;n=n.replaceAll(l,e)}})),n}(t,h,d);return n.createElement(n.Fragment,null,n.createElement(r.Z,p,f),n.createElement(l.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement("div",{className:"code-block-footer"},n.createElement("p",null,n.createElement("b",null,"Placeholders")),n.createElement("div",{className:"code-block-placeholder-footer"},k),o(a,f)))))}if(a.download){let e={...a};return e.className=e.className+" with-footer",n.createElement(n.Fragment,null,n.createElement(r.Z,e,t),n.createElement(l.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement("div",{className:"code-block-footer"},o(a,t)))))}return n.createElement(n.Fragment,null,n.createElement(r.Z,a,t))}},4677:(e,t,a)=>{a.d(t,{i:()=>s});var n=a(7294),r=a(8573),l=a(1262);const i=e=>{let[t,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{var t;(t=e.url,fetch(t).then((e=>e.text()))).then((e=>{a(e)}))}),[e.url]),n.createElement(r.Z,{language:e.lang,title:e.title},t)},s=e=>n.createElement(l.Z,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement(i,e)))},4456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),l=(a(8573),a(4677));const i={title:"Authenticated Kafka",hide_table_of_contents:!1,description:"Configure your Data Plane with authenticated Kafka."},s=void 0,o={unversionedId:"quickstart/ccd/authenticated",id:"quickstart/ccd/authenticated",title:"Authenticated Kafka",description:"Configure your Data Plane with authenticated Kafka.",source:"@site/docs/03-quickstart/05-ccd/06-authenticated.md",sourceDirName:"03-quickstart/05-ccd",slug:"/quickstart/ccd/authenticated",permalink:"/docs/latest/quickstart/ccd/authenticated",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Authenticated Kafka",hide_table_of_contents:!1,description:"Configure your Data Plane with authenticated Kafka."},sidebar:"docs",previous:{title:"Metrics and Monitoring",permalink:"/docs/latest/quickstart/ccd/monitoring"},next:{title:"Upgrading",permalink:"/docs/latest/quickstart/ccd/updating"}},c={},u=[{value:"Using an existing Kafka cluster over TLS, with SASL/Plain authentication",id:"tls-sasl-plain",level:2},{value:"Setup without a TLS Truststore",id:"setup-without-a-tls-truststore",level:3},{value:"Required Kafka permissions",id:"required-kafka-permissions",level:4},{value:"Disabling the built-in kafka cluster",id:"disabling-the-built-in-kafka-cluster",level:4},{value:"Kafka Security Config",id:"kafka-security-config",level:4},{value:"Applying the changes",id:"applying-the-changes",level:4},{value:"Setup with a TLS truststore",id:"setup-with-a-tls-truststore",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],d={toc:u},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"tls-sasl-plain"},"Using an existing Kafka cluster over TLS, with SASL/Plain authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page requires version 2.0.0 or later of our Helm chart.")),(0,r.kt)("p",null,"This hands-on section shows how to get up-and-running with your Customer Cloud Deployment using an ",(0,r.kt)("em",{parentName:"p"},"authenticated Kafka\nCluster")," that uses ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/authentication_sasl/authentication_sasl_plain.html"},"SASL/PLAIN over TLS")," authentication.\nThis is a username/password scheme, where the\nKafka cluster has a list of pairs that it accepts. The communication is ",(0,r.kt)("em",{parentName:"p"},"plain\ntext")," but since the channel is TLS-encrypted, this cannot be intercepted.\nIt is the only type of authentication we currently support."),(0,r.kt)("p",null,"It's probably a good idea to first run the getting started with the unauthenticated demo Kafka detailed in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/self-hosted/"},"self-hosted section")," to make sure you have all the tools configured correctly and understand how\nit should work."),(0,r.kt)("p",null,"Some private Kafka clusters may require a TLS truststore to successfully interact.\nManaged services like Azure Event Hubs and Confluent Cloud typically don't require this."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"First try the setup without a TLS truststore, unless you know you will need one.")),(0,r.kt)("h3",{id:"setup-without-a-tls-truststore"},"Setup without a TLS Truststore"),(0,r.kt)("h4",{id:"required-kafka-permissions"},"Required Kafka permissions"),(0,r.kt)("p",null,"The following permissions are required for the various STRM components, and\nshould thus be available through the credentials used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"event-gateway")," needs write rights to topics with names starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"keys-")," and a\ntopic named ",(0,r.kt)("inlineCode",{parentName:"li"},"billing"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"streams-agent")," needs topic admin rights to create, delete and inspect topics. It will create topics with names\nstarting with ",(0,r.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"keys-"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"web-socket")," needs topic consume rights to topics starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"stream-"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"decrypter")," instances need topic consume and write rights to topics starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"stream-"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch-exporter")," instances need topic consume rights to topics starting with ",(0,r.kt)("inlineCode",{parentName:"li"},"stream-")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"keys-"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"esr-proxy")," needs topic consume rights to a topic named ",(0,r.kt)("inlineCode",{parentName:"li"},"billing"),".")),(0,r.kt)("h4",{id:"disabling-the-built-in-kafka-cluster"},"Disabling the built-in kafka cluster"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file you download from the ",(0,r.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/settings/installation"},"console")," does not override the default values related to Kafka, so the helm chart\nwill actually deploy a Kafka instance inside your k8s namespace.\nTo use your own cluster, make sure to include the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"kafka:\n  # This disables the built-in kafka instance.\n  enabled: false\n  # Specify your Kafka bootstrap server(s), separated by a comma.\n  bootstrapServers: <your-kafka-broker>:<port>\n  # Since STRM cannot currently integrate with your own Schema Registry, \n  # or you may not use one at all, ensure Avro is serialized as JSON. \n  serializeAvroAsJson: true\n  # If desired, specify a default number of partitions for STRM Kafka topics.\n  numPartitions: 5\n  # If desired, increase the default replication factor for STRM Kafka topics\n  # from the default value of 1. Confluent Cloud may require a value of 3.\n  defaultReplicationFactor: 3\n")),(0,r.kt)("h4",{id:"kafka-security-config"},"Kafka Security Config"),(0,r.kt)("p",null,"Next, add the following top-level ",(0,r.kt)("inlineCode",{parentName:"p"},"globalKafkaSecurityConfig")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'globalKafkaSecurityConfig:\n  enabled: true\n  securityProtocol: "SASL_SSL"\n  saslJaasConfig: \'org.apache.kafka.common.security.plain.PlainLoginModule required username="<your-username>" password="<your password>";\'\n')),(0,r.kt)("p",null,"Make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"saslJaasConfig")," value matches the value provided by your Kafka\nprovider. "),(0,r.kt)("h4",{id:"applying-the-changes"},"Applying the changes"),(0,r.kt)("p",null,"Once you have modified the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," as described above, you can apply the\nchanges to your installation by performing a helm upgrade, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"helm upgrade strmprivacy strmrepo/strm --namespace strmprivacy --values values.yaml\n")),(0,r.kt)("p",null,"Or follow the general ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/updating"},"upgrading")," instructions."),(0,r.kt)("p",null,"Then follow along with the ",(0,r.kt)("a",{parentName:"p",href:"#interacting"},"Interacting with your Data Plane")," section.\nAll Kafka interaction will now go through your own Kafka cluster. If you\nrun into any issues, check the Troubleshooting section below."),(0,r.kt)("h3",{id:"setup-with-a-tls-truststore"},"Setup with a TLS truststore"),(0,r.kt)("p",null,"In order for our Kafka clients to interact with your Kafka brokers over TLS, they'll have to trust them. This goes via\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/kafka/encryption.html#kafka-ssl-encryption"},"a truststore"),". A truststore is an encrypted file that the Kafka\nclients have to use in order to trust the broker. "),(0,r.kt)("p",null,"You may have to generate one as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/security/security_tutorial.html#generating-keys-certs"},"Confluent documentation"),"\nif your Kafka broker doesn't integrate with default trust stores, and the\nabove setup without one didn't succeed."),(0,r.kt)("p",null,"If so, put the generated value in a Kubernetes secret. The truststore has a\npassword to protect it, which must also be added to the Kubernetes secret."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic client-truststore-jks \\\n  --from-file=client.truststore.jks=<your-truststore-jks-file> \\\n  --from-literal=truststore.password=<your-truststore-password>\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Don't change the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.truststore.jks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"truststore.password")," keys.\nThese names are used by the various Kubernetes deployments to retrieve the entities.")),(0,r.kt)("p",null,"Once the secret is created, add its name to the ",(0,r.kt)("inlineCode",{parentName:"p"},"globalKafkaSecurityConfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kafkaSecurityConfig:\n  enabled: true\n  securityProtocol: "SASL_SSL"\n  saslJaasConfig: "<your saslJaasConfig>"\n  sslTruststoreSecretName: "client-truststore-jks" # use the k8s secret name you created.\n')),(0,r.kt)("p",null,"Your STRM Data Plane deployment should now be able to communicate with your\nKafka cluster."),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"It is ",(0,r.kt)("em",{parentName:"p"},"quite likely")," that this won't go correctly the first try. Setting up the TLS can go wrong in many ways, from the\ntrivial (missing secret), to the painful (reverse hostname verification doesn't work). The logging of deployments like\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"streams-agent")," or the ",(0,r.kt)("inlineCode",{parentName:"p"},"event-gateway")," will probably give a clue what's going on."),(0,r.kt)("p",null,"The following Kubernetes manifest, available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test-utils")," directory\nof our Helm chart git repository, can be used to troubleshoot (TLS) connectivity\nissues with your Kafka cluster:"),(0,r.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/data-plane-helm-chart/master/test-utils/kafka-tls-client.yaml",title:"kafka-tls-client.yaml",lang:"yaml",mdxType:"ExternalCodeBlock"}),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"client.props")," section to use your credentials (the truststore password and the principal username/password\npair)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:"showLineNumbers",showLineNumbers:!0},'  client.props: |\n    security.protocol=SASL_SSL\n    ssl.truststore.location=/tmp/truststore/client.truststore.jks\n    ssl.truststore.password=strmprivacy\n    sasl.mechanism=PLAIN\n    sasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required     username="strm-event-gateway"     password="strmprivacy";\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you keep the ",(0,r.kt)("inlineCode",{parentName:"p"},"sasl.jaas.config")," on one line and don't forget the semicolon at the end!")),(0,r.kt)("p",null,"Apply the manifest and interact with the Kafka cluster from within the pod:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl apply -f kafka-tls-test-client.yaml\n$ kubectl exec -ti kafka-tls-test-client-... -- bash\n\n$ kafka-topics.sh --bootstrap-server <your-bootstrap-server> --list \\\n     --command-config /tmp/client.props\n__consumer_offsets\nbilling\nkeys-28a3152d-f6c8-4c52-8bd7-c587089938eb\nkeys-35bc9088-c41c-41de-b042-fa835a4cb3b1\nstream-28a3152d-f6c8-4c52-8bd7-c587089938eb\nstream-35bc9088-c41c-41de-b042-fa835a4cb3b1\nstream-e00843bd-86c8-4b85-a1bd-b7b509fc6804\n")))}h.isMDXComponent=!0}}]);