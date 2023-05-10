"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3619],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1226:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Interacting with your Data Plane",hide_table_of_contents:!1,description:"Using your own Data Plane to send and receive data."},i=void 0,s={unversionedId:"quickstart/ccd/interacting",id:"quickstart/ccd/interacting",title:"Interacting with your Data Plane",description:"Using your own Data Plane to send and receive data.",source:"@site/docs/03-quickstart/05-ccd/04-interacting.md",sourceDirName:"03-quickstart/05-ccd",slug:"/quickstart/ccd/interacting",permalink:"/docs/latest/quickstart/ccd/interacting",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Interacting with your Data Plane",hide_table_of_contents:!1,description:"Using your own Data Plane to send and receive data."},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/advanced"},next:{title:"Metrics and Monitoring",permalink:"/docs/latest/quickstart/ccd/monitoring"}},l={},c=[{value:"Setup port forwarding",id:"setup-port-forwarding",level:2},{value:"Streams",id:"streams",level:2},{value:"Sending events with the cli",id:"sending-events-with-the-cli",level:3},{value:"Listening on the web-socket via the cli",id:"listening-on-the-web-socket-via-the-cli",level:3},{value:"Consume from Kafka",id:"consume-from-kafka",level:2},{value:"Exporting to an S3 bucket",id:"exporting-to-an-s3-bucket",level:2},{value:"Exporting to an S3 compatible bucket",id:"exporting-to-an-s3-compatible-bucket",level:2},{value:"Exporting encryption keys",id:"exporting-encryption-keys",level:2},{value:"Python Example",id:"python-example",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following section will guide you through the setup required to interact with your STRM Privacy Data Plane. Make sure\nthat all the required tools are installed as discussed ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/self-hosted/#step2"},"here"),"."),(0,r.kt)("p",null,"The commands below assume your default namespace is ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy"),", which can be set with ",(0,r.kt)("inlineCode",{parentName:"p"},"kubens strmprivacy")),(0,r.kt)("h2",{id:"setup-port-forwarding"},"Setup port forwarding"),(0,r.kt)("p",null,"To interact with the ",(0,r.kt)("inlineCode",{parentName:"p"},"event-gateway")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"web-socket")," for testing purposes we will set up Kubernetes port-forwarding."),(0,r.kt)("p",null,"To add a forwarding port to a deployment either use ",(0,r.kt)("inlineCode",{parentName:"p"},"k9s")," and press ",(0,r.kt)("inlineCode",{parentName:"p"},"shift+f")," on the deployments for the ",(0,r.kt)("inlineCode",{parentName:"p"},"event-gateway"),"\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"web-socket")," or do the following:"),(0,r.kt)("p",null,"Run the next commands in separate shells (make sure you have activated the right namespace!), and keep them running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward deployment/event-gateway 8080:8080\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward deployment/web-socket 8082:8080\n")),(0,r.kt)("p",null,"In a production setting you obviously would not use port-forwarding. Typically one would"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"add a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress")," in front of the ",(0,r.kt)("inlineCode",{parentName:"li"},"event-gateway")," service. This creates a load balancer in the infrastructure\nthat will allow https access to the ",(0,r.kt)("inlineCode",{parentName:"li"},"event-gateway"),". Make sure the load balancer is capable of handling http/2 otherwise\nlatency and throughput will suffer."),(0,r.kt)("li",{parentName:"ul"},"communicate directly with the ",(0,r.kt)("inlineCode",{parentName:"li"},"event-gateway")," service. This would only work if your events are being sent from within\nthe same Kubernetes cluster.")),(0,r.kt)("h2",{id:"streams"},"Streams"),(0,r.kt)("p",null,"First create two streams."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"strm create stream test\nstrm create stream --derived-from test --purposes 2\n")),(0,r.kt)("p",null,"Because you've created a derived stream (named ",(0,r.kt)("inlineCode",{parentName:"p"},"test-2")," by default) we should be able to see a decrypter deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments.apps  -l app=decrypter-v2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                             READY   UP-TO-DATE   AVAILABLE   AGE\ndecrypter-a268aea6-4b5b-4241-b833-9a84f4f44bc4   1/1     1            1           93m\n")),(0,r.kt)("p",null,"You could use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl describe deployment decrypter...")," to see the annotations on the deployment, and see that it is\nindeed processing your ",(0,r.kt)("inlineCode",{parentName:"p"},"test-2")," stream. The ",(0,r.kt)("em",{parentName:"p"},"name")," of the decrypter deployment is just ",(0,r.kt)("inlineCode",{parentName:"p"},"decrypter-<random uuid>")," and can\nnot be chosen by anyone."),(0,r.kt)("h3",{id:"sending-events-with-the-cli"},"Sending events with the cli"),(0,r.kt)("p",null,"To simulate events with our cli, the ",(0,r.kt)("inlineCode",{parentName:"p"},"events-api-url")," parameter must be set to the port exposed via the port-forward\n(the url can also be set in the strm config file (",(0,r.kt)("inlineCode",{parentName:"p"},"strm context config"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"strm simulate random-events test --events-api-url=http://localhost:8080/event --interval 5\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Sent 874 events\nSent 1809 events\nSent 2726 events\n...\n")),(0,r.kt)("h3",{id:"listening-on-the-web-socket-via-the-cli"},"Listening on the web-socket via the cli"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"strm listen web-socket test --web-socket-url ws://localhost:8082/ws\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -447993628, "timestamp": 1652181230883, "keyLink": "7573fc76-ae34-4c49-a3fd-d552b677ffa1", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2, 3]}, "uniqueIdentifier": "AQAsswoVM2q6Q6+eeTb5Qe61xBHTaAZZMVCh+vDf", "consistentValue": "AQAsswoPYW8+VGwOZvfh+FmSEh2UoVTRNkNWlyQOpwA=", "someSensitiveValue": "AQAsswpQCKDPUYNls3hy13IllL5vd4bz/X3rEsBI0TEV", "notSensitiveValue": "not-sensitive-64"}\n{"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -45323834, "timestamp": 1652181230893, "keyLink": "9ced67fc-9227-4fb2-846b-1eed521db941", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "AWzkJjeWufjZehXNpWLUQ63CG1O8jxCU6MOd3Seo", "consistentValue": "AWzkJjd3cB+36sCrtT6va3YLjCa5qw55Iy5/HevIcVU=", "someSensitiveValue": "AWzkJjcsrjNHbZCAjlEYCBdlpOVK8+eXIx6BSBDxH8VQ", "notSensitiveValue": "not-sensitive-42"}\n')),(0,r.kt)("p",null,"Or a derived stream"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"strm listen web-socket test-2 --web-socket-url ws://localhost:8082/ws\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"strmMeta": {"eventContractRef": "strmprivacy/example/1.3.0", "nonce": -1742873135, "timestamp": 1652181297380, "keyLink": "556c1be7-4332-4058-9d36-5e3e5a66e121", "billingId": "strmprodccdtest1908747604", "consentLevels": [0, 1, 2]}, "uniqueIdentifier": "unique-81", "consistentValue": "session-922", "someSensitiveValue": "AQM0jlnxbeNZSJzvJWLpnMjyYET1Jb1Yz+5yZVB5i6Dq", "notSensitiveValue": "not-sensitive-78"}\n')),(0,r.kt)("h2",{id:"consume-from-kafka"},"Consume from Kafka"),(0,r.kt)("p",null,"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/quickstart/ce-docker-quickstart.html#cp-quickstart-step-1"},"Confluent client tools"),". You don't have to start Confluent, you only need to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"bin"),"\ndirectory\nof the unpacked confluent tar file to your ",(0,r.kt)("inlineCode",{parentName:"p"},"$PATH"),"."),(0,r.kt)("p",null,"You need the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},(0,r.kt)("inlineCode",{parentName:"a"},"strm"))," cli in order to find the Kafka topic in the streams information"),(0,r.kt)("p",null,"In order to consume from Kafka with your development computer, you'll need to set up ",(0,r.kt)("a",{parentName:"p",href:"https://www.telepresence.io/"},"telepresence"),", which\nsort of includes your computer within the Kubernetes dns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"telepresence connect\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    Launching Telepresence Root Daemon\n    Launching Telepresence User Daemon\n    Connected to context kubernetes-admin@...\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ strm list streams\n\n STREAM   DERIVED   PURPOSES   ENABLED   KAFKA TOPIC\n\n test     false     []         true      stream-e379c8e5-0e25-4b95-b1f4-c5ceb20a233f\n test-2   true      [2]        true      stream-f704507b-1e88-4464-98e0-b7cfa501ec75\n")),(0,r.kt)("p",null,"Then pass this topic to the kafka consumer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'kafka-avro-console-consumer     \\\n  --bootstrap-server kafka.strmprivacy:9092     \\\n  --topic stream-e379c8e5-0e25-4b95-b1f4-c5ceb20a233f     \\\n  --property schema.registry.url=http://confluent-schema-proxy.strmprivacy/confluent     \\\n  --property print.key=true     \\\n  --key-deserializer="org.apache.kafka.common.serialization.StringDeserializer"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1867d5ad-f1fb-4faa-af98-f863a4f9e3e4    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":-810110116},"timestamp":{"long":1652181101870},"keyLink":{"string":"1867d5ad-f1fb-4faa-af98-f863a4f9e3e4"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[]},"uniqueIdentifier":{"string":"AR5VVyfQsta+D1XDKcPiR0sC1oE3yy301W2FMVJ9"},"consistentValue":"AR5VVydsWvZG+FkvlOFEUZCvlFY4rSpVHs1njIE8tg==","someSensitiveValue":{"string":"AR5VVyfO8S3djArRlS6ZaI4oefWUjEt9XRnT/f2r6vc="},"notSensitiveValue":{"string":"not-sensitive-84"}}\n5afc9c0a-de67-4e38-bd0a-66640f4349c7    {"strmMeta":{"eventContractRef":"strmprivacy/example/1.3.0","nonce":{"int":1699175479},"timestamp":{"long":1652181101896},"keyLink":{"string":"5afc9c0a-de67-4e38-bd0a-66640f4349c7"},"billingId":{"string":"strmprodccdtest1908747604"},"consentLevels":[0,1,2,3]},"uniqueIdentifier":{"string":"ASotb1YzBuuBBM981rLIzQd/EZA7Em7dxyaBg7vE"},"consistentValue":"ASotb1bYf1G/2ye4h6ELE4hlkVGZGKSt3LQe0AnZU+k=","someSensitiveValue":{"string":"ASotb1bb51OCfM9HdCqcAjTLtXqK67EuBQicTpNzIvv/"},"notSensitiveValue":{"string":"not-sensitive-95"}}\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We can't yet use an ",(0,r.kt)("em",{parentName:"p"},"existing Confluent Schema Registry")," in your infrastructure. This is on our roadmap.")),(0,r.kt)("admonition",{title:"Avro-Json",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("em",{parentName:"p"},"json")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka-avro-console-consumer")," is the ",(0,r.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#json_encoding"},"Avro json format")," which includes a type attribute\nfor nullable types for instance"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'"notSensitiveValue":{"string":"not-sensitive-84"}\n')),(0,r.kt)("p",{parentName:"admonition"},"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"web-socket")," debugging output uses the less verbose ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"some string")," in the json, i.e."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'"notSensitiveValue": "not-sensitive-84"\n'))),(0,r.kt)("h2",{id:"exporting-to-an-s3-bucket"},"Exporting to an S3 bucket"),(0,r.kt)("p",null,"Create the S3 bucket and the associated ",(0,r.kt)("inlineCode",{parentName:"p"},"data connector"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/receiving-data/batch-export#creating-a-data-connector"},"here")," for details\nabout data connector configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"strm create data-connector s3 s3-connector --credentials-file=...\n\nstrm create batch-exporter test-2 \\\n  --data-connector s3-connector \\\n  --path-prefix ccd-events-demo \\\n  --include-existing-events\n")),(0,r.kt)("p",null,"You should see a newly-created batch-exporter deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get deployments.apps  -l app=batch-exporter\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"NAME                                                  READY   UP-TO-DATE   AVAILABLE   AGE\nbatch-exporter-c726bbff-2b68-4438-ac0d-ee877aa4dabf   1/1     1            1           2m49s\n")),(0,r.kt)("p",null,"If you're sending data, you should see files in your s3 bucket quickly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls s3://stream-machine-export-demo/ccd-events-demo/\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-05-10 15:09:21          0 .strm_test_a6c5d566-f851-4778-a7fb-5d39d8958aa4.jsonl\n2022-05-10 15:10:02     131735 2022-05-10T13:10:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl\n2022-05-10 15:11:01     196628 2022-05-10T13:11:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl\n2022-05-10 15:12:01     181281 2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl\n2022-05-10 15:13:01     202094 2022-05-10T13:13:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl\n")),(0,r.kt)("p",null,"Looking inside one of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 cp s3://stream-machine-export-demo/ccd-events-demo/2022-05-10T13:12:00-stream-4a35419c-2daf-43ba-8683-7663a0874a35---0-1-2-3-4.jsonl - | head -1 | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "strmMeta": {\n    "eventContractRef": "strmprivacy/example/1.3.0",\n    "nonce": -1616102758,\n    "timestamp": 1652188259519,\n    "keyLink": "9e55c3dc-16a3-422b-91e7-b27dffd385e6",\n    "billingId": "strmprodccdtest1908747604",\n    "consentLevels": [\n      0,\n      1,\n      2\n    ]\n  },\n  "uniqueIdentifier": "unique-3",\n  "consistentValue": "session-453",\n  "someSensitiveValue": "AXWnGm/OjbB42PEJuXLwqZX7sRCdSlLInDpNOnJlBxiJ",\n  "notSensitiveValue": "not-sensitive-6"\n}\n')),(0,r.kt)("h2",{id:"exporting-to-an-s3-compatible-bucket"},"Exporting to an S3 compatible bucket"),(0,r.kt)("p",null,"It is possible to export data to any S3 compatible bucket. For more information, see our\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/receiving-data/batch-export"},"Batch Exporter quickstart"),"."),(0,r.kt)("h2",{id:"exporting-encryption-keys"},"Exporting encryption keys"),(0,r.kt)("p",null,"If you need to export the encryption keys, create a batch exporter with the ",(0,r.kt)("inlineCode",{parentName:"p"},"export-keys")," option:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"strm create batch-exporter test --export-keys --data-connector s3-connector --include-existing-events --path-prefix ccd-demo-keys\n")),(0,r.kt)("p",null,"For more information, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/receiving-data/exporting-keys"},"quickstart on exporting keys"),"."),(0,r.kt)("h2",{id:"python-example"},"Python Example"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/sending-data/language-examples"},"Python example")," needs a small modification in order to work. In the ",(0,r.kt)("inlineCode",{parentName:"p"},"client_builder.py")," file change the\n",(0,r.kt)("inlineCode",{parentName:"p"},"config")," for"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    config = ClientConfig(log_level=logging.DEBUG,\n                          gateway_protocol="http",\n                          gateway_host="localhost:8080")\n')))}d.isMDXComponent=!0}}]);