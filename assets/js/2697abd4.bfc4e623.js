"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[227],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7485:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"Kafka consumer in Python",hide_table_of_contents:!1},s="Exporting via a Kafka Consumer",l={unversionedId:"quickstart/exporting-kafka",id:"quickstart/exporting-kafka",title:"Kafka consumer in Python",description:"Data can be consumed from your streams  in JSON format via an",source:"@site/docs/quickstart/exporting-kafka.md",sourceDirName:"quickstart",slug:"/quickstart/exporting-kafka",permalink:"/docs/latest/quickstart/exporting-kafka",tags:[],version:"current",frontMatter:{title:"Kafka consumer in Python",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Examples in multiple languages",permalink:"/docs/latest/quickstart/full-example"},next:{title:"Batch Exporter",permalink:"/docs/latest/quickstart/batch-exporter"}},d={},p=[{value:"Create an exporter",id:"create-an-exporter",level:2},{value:"Consuming",id:"consuming",level:2},{value:"Deleting the Kafka-Exporter",id:"deleting-the-kafka-exporter",level:2}],m={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exporting-via-a-kafka-consumer"},"Exporting via a Kafka Consumer"),(0,o.kt)("p",null,"Data can be consumed from your streams ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," in JSON format via an\ninternet accessible authorized access to our Kafka export cluster."),(0,o.kt)("h2",{id:"create-an-exporter"},"Create an exporter"),(0,o.kt)("p",null,"First you need to create an exporter. This creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-exporter"),"\nand one associated ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-user"),". The user credentials can be used to\naccess the topic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strm create kafka-exporter demo --save\n{\n  "ref": {\n    "billingId": "demo8542234275",\n    "name": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7"\n  },\n  "streamRef": {\n    "billingId": "demo8542234275",\n    "name": "demo"\n  },\n  "target": {\n    "clusterRef": {\n      "billingId": "internal",\n      "name": "shared-export"\n    },\n    "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7"\n  },\n  "users": [\n    {\n      "ref": {\n        "billingId": "demo8542234275",\n        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"\n      },\n      "kafkaExporterName": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n      "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n      "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",\n      "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",\n      "clusterRef": {\n        "billingId": "internal",\n        "name": "shared-export"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"You can see the created user credentials. The kafka exporter is named\n",(0,o.kt)("inlineCode",{parentName:"p"},"shared-export-demo"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"shared-export")," is the name of the Kafka cluster\nowned by STRM Privacy that we export to; your Kafka consumer will\nconsume from this cluster."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you look carefully inside the command response you\u2019ll see different\nnames (",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-exporter-<uuid>"),"). This is in the process of being\nrefactored, but has no impact for your use."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the future, we will have the capability to export to a Kafka Cluster\nowned by the customer."))),(0,o.kt)("p",null,"Because of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--save")," flag on the command, you have the credentials\nlocally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cat ~/.config/strmprivacy/saved-entities/KafkaUser/service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb.json | jq\n{\n  "ref": {\n    "billingId": "demo8542234275",\n    "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"\n  },\n  "kafkaExporterName": "kafka-exporter-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n  "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n  "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",\n  "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",\n  "clusterRef": {\n    "billingId": "internal",\n    "name": "shared-export"\n  }\n}\n')),(0,o.kt)("p",null,"Kafka users are entities that can consume from a Kafka Cluster. They\nhave credentials, and a Kafka topic that they can consume from."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strm list kafka-users shared-export-demo\n{\n  "kafkaUsers": [\n    {\n      "ref": {\n        "billingId": "demo8542234275",\n        "name": "service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"\n      },\n      "kafkaExporterName": "shared-export-demo",\n      "topic": "export-a9e83206-96e6-463c-8163-3f4493b3ddb7",\n      "clientId": "export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb",\n      "clientSecret": "22a837fb-c299-4e03-b1ec-460684f52ae5",\n      "clusterRef": {\n        "billingId": "internal",\n        "name": "shared-export"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"consuming"},"Consuming"),(0,o.kt)("p",null,"Clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-kafka-consumer-oauth2"},"Python Kafka\nConsumer"),"\nand go into the directory and create a file ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ini"),". Fill out the\nvalues from the JSON above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"[kafka]\nbootstrap_servers = export-bootstrap.kafka.strmprivacy.io:9092\ntopic = export-a9e83206-96e6-463c-8163-3f4493b3ddb7\nclient_id = export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb\nsecret = 22a837fb-c299-4e03-b1ec-460684f52ae5\ntoken_uri = https://sts.strmprivacy.io/token\ngroup = demo\n")),(0,o.kt)("p",null,"Next, install the Python dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv .venv\n. .venv/bin/activate\npython3 -m pip install -r requirements.txt\n")),(0,o.kt)("p",null,"Generate some data in a separate terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm simulate random-events demo\n")),(0,o.kt)("p",null,"And run the consumer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"$ python consumer.py\n\n{'strmMeta': {\n  'eventContractRef': 'strmprivacy/example/1.3.0',\n  'nonce': -1508205704,\n  'timestamp': 1629197150029,\n  'keyLink': '68a1d5c5-d1d0-4a7c-8e03-b9d265071839',\n  'billingId': 'demo8542234275',\n  'consentLevels': [0, 1]},\n'uniqueIdentifier': 'ARCc26TVzQnf6SVZpFT3ghde/6ILaeFdn+o9jBW/',\n'consistentValue': 'ARCc26QnGW52Po3QHjADcpvSoY6zf9z9skqy8viZwX8=',\n'someSensitiveValue': 'ARCc26QwShhyvLiHj2EDEp7vSB0CxLMhOm7jAv0D4CM=',\n'notSensitiveValue': 'not-sensitive-98'\n}\n")),(0,o.kt)("h2",{id:"deleting-the-kafka-exporter"},"Deleting the Kafka-Exporter"),(0,o.kt)("p",null,"If you just try to delete the Kafka Exporter, you\u2019ll get an error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strm delete kafka-exporter shared-export-demo\nError: rpc error: code = FailedPrecondition desc = Cannot delete billing_id: "demo8542234275"\nname: "shared-export-demo"\n.name because it has users attached to it\n')),(0,o.kt)("p",null,"So let\u2019s do that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strm delete kafka-user service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb\n{"billingId":"demo8542234275","name":"service-account-export-7d36ea89-2c91-4959-a6bf-9af35a0c5ddb"}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"install and use tab completion!"))),(0,o.kt)("p",null,"And then delete the kafka-exporter"),(0,o.kt)("p",null,"We could also just have done a ",(0,o.kt)("em",{parentName:"p"},"recursive delete")," with\n",(0,o.kt)("inlineCode",{parentName:"p"},"strm delete kafka-exporter shared-export-demo --recursive")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"encrypted and decrypted",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);