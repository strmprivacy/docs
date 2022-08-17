"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[9820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"Batch Exporter",hide_table_of_contents:!1},s="Exporting data to S3, Gcloud or Azure",i={unversionedId:"quickstart/batch/batch-exporter",id:"quickstart/batch/batch-exporter",title:"Batch Exporter",description:"If you want to export stream data to AWS S3 or other storage solutions like",source:"@site/docs/quickstart/batch/batch-exporter.md",sourceDirName:"quickstart/batch",slug:"/quickstart/batch/batch-exporter",permalink:"/docs/latest/quickstart/batch/batch-exporter",draft:!1,tags:[],version:"current",frontMatter:{title:"Batch Exporter",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Batch processing",permalink:"/docs/latest/quickstart/batch/"},next:{title:"Batch Jobs",permalink:"/docs/latest/quickstart/batch/batch-jobs"}},c={},l=[{value:"Creating a data connector",id:"creating-a-data-connector",level:2},{value:"Create a batch exporter",id:"create-a-batch-exporter",level:2},{value:"Using the results (AWS S3)",id:"using-the-results-aws-s3",level:2},{value:"About the filenames",id:"about-the-filenames",level:2},{value:"Important considerations for consumers",id:"important-considerations-for-consumers",level:2},{value:"Empty files",id:"empty-files",level:3},{value:"Handling credentials securily",id:"handling-credentials-securily",level:3},{value:"Tearing down",id:"tearing-down",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exporting-data-to-s3-gcloud-or-azure"},"Exporting data to S3, Gcloud or Azure"),(0,r.kt)("p",null,"If you want to export stream data to AWS S3 or other storage solutions like\nGoogle Cloud Storage or Azure Blob Storage, you first need to create a\n",(0,r.kt)("inlineCode",{parentName:"p"},"Data Connector")," pointing to a specific instance thereof (the ",(0,r.kt)("em",{parentName:"p"},"target storage"),").\nSee ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/batch/data-connectors/"},"Data Connectors")," for details for each of the supported cloud storage platforms."),(0,r.kt)("h2",{id:"creating-a-data-connector"},"Creating a data connector"),(0,r.kt)("p",null,"First create a ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/batch/data-connectors/"},"data-connector")," of the desired kind."),(0,r.kt)("h2",{id:"create-a-batch-exporter"},"Create a batch exporter"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"batch exporter")," is the STRM Privacy component that reads your input\nstream, and writes its events in batches to the target storage configured\nby your data connector."),(0,r.kt)("p",null,"Let\u2019s create an exporter on the ",(0,r.kt)("inlineCode",{parentName:"p"},"demo")," stream (make sure to create this\nfirst). The below example uses a data connector named ",(0,r.kt)("inlineCode",{parentName:"p"},"s3"),". The type\nof connector is not of importance when creating a batch exporter. Just\nprovide the name of the existing data connector you want to use. Here\nwe also provide a path prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"events"),", meaning that the batch exporter\nwill prepend file names with this prefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'strm create batch-exporter demo --data-connector s3 --path-prefix events\n{\n  "ref": { #(1)\n    "name": "s3-demo" ,\n    "projectId": "30fcd008-9696-...."\n  }, \n  "streamRef": { #(2)\n    "name": "demo" ,\n    "projectId": "30fcd008-9696-...."\n  }, \n  "dataConnectorRef": { #(3)\n    "name": "s3" ,\n    "projectId": "30fcd008-9696-...."\n  }, \n  "interval": "60s",\n  "pathPrefix": "events"\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the reference of the batch exporter"),(0,r.kt)("li",{parentName:"ol"},"the reference to the stream that feeds the exporter"),(0,r.kt)("li",{parentName:"ol"},"the reference to the data connector")),(0,r.kt)("p",null,"Note that a default name has been given to the batch exporter. Alternatively,\na name can be set with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--name")," flag."),(0,r.kt)("p",null,"We\u2019re sending batches every 60 seconds. This can be configured with the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--interval")," flag."),(0,r.kt)("p",null,"Also note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"--path-prefix")," argument is optional. Make sure it\nmatches your bucket structure and permissions."),(0,r.kt)("h2",{id:"using-the-results-aws-s3"},"Using the results (AWS S3)"),(0,r.kt)("p",null,"Everything has been set up and if you are already sending events to the stream,\nyou should start seeing data in your bucket after the configured interval has\nelapsed. If you aren't sending data yet, you could simulate some random events\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"strm simulate random-events <stream name>"),"."),(0,r.kt)("p",null,"The below examples are for an S3 bucket, but the files/blobs will have the same\ncontents for other types of data connectors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 ls strmprivacy-export-demo/events/\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2021-03-26 10:56:31      79296 2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n2021-03-26 10:57:01     275726 2021-03-26T09:57:00-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n2021-03-26 10:57:31     277399 2021-03-26T09:57:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In a future version, these filenames will show the ",(0,r.kt)("em",{parentName:"p"},"stream name"),",\ninstead of a uuid that we use internally.")),(0,r.kt)("p",null,"And having a look inside one of the files."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 cp s3://strmprivacy-export-demo/encrypted-events/2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl - | head -1\n")),(0,r.kt)("p",null,"Output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "strmMeta": {\n    "schemaId": "clickstream",\n    "nonce": 1009145850,\n    "timestamp": 1625820808909,\n    "keyLink": "04d243ba-2cc9-4def-b406-7241d4fce7d1",\n    "consentLevels": [\n      0,\n      1\n    ]\n  },\n  "producerSessionId": "ATqVzbsw2qN3XDj+3D0SABPPVjb2nIqCcdFcG1irE6w=",\n  "url": "https://www.strmprivacy.io/rules",\n  "eventType": "",\n  "referrer": "",\n  "userAgent": "",\n  "conversion": 0,\n  "customer": {\n    "id": "ATqVzbsKWvI9GH/rTwcI78Behpe5zo30EJMXGyEbP+u0FEZcBRwdP+A="\n  },\n  "abTests": []\n}\n')),(0,r.kt)("h2",{id:"about-the-filenames"},"About the filenames"),(0,r.kt)("p",null,"The last part of the filenames identifies the partitions being processed\nby the Kafka consumers that are doing the actual exports. When under a\nhigh event rate, we need more than 1 Kafka consumer, we would see a\ndivision of partitions over multiple filenames. In this example, the\ntopic has 5 partitions, and all of them are processed by one Kafka\nconsumer."),(0,r.kt)("p",null,"With manual offset management in the Kafka consumer, we\u2019re fairly\nconfident there will be ",(0,r.kt)("em",{parentName:"p"},"no duplicate nor missing data")," in your bucket."),(0,r.kt)("h2",{id:"important-considerations-for-consumers"},"Important considerations for consumers"),(0,r.kt)("p",null,"A data connector is a very generic building block, which integrates with\nmost architectures, making it very usable."),(0,r.kt)("p",null,"Still, there are some things to be aware of:"),(0,r.kt)("h3",{id:"empty-files"},"Empty files"),(0,r.kt)("p",null,"When there are no events, a batch exporter does not write any files to\nthe data connector, so no empty files will be written."),(0,r.kt)("p",null,"However, when the batch exporter is created or (re)started, we write an\nempty JSONL file to validate the configuration (does the storage destination\nreferred to by the data connector exist\nand do the credentials grant the required access?). This results\nin ",(0,r.kt)("em",{parentName:"p"},"some")," empty files, so your downstream code needs to be able to\nhandle these."),(0,r.kt)("h3",{id:"handling-credentials-securily"},"Handling credentials securily"),(0,r.kt)("p",null,"STRM Privacy stores the provided data connector credentials in a secure and encrypted\nmanner. Nevertheless, we suggest creating\ndedicated users/credentials for each data connector and/or purpose.\nGrant only the minimum required permissions on only the necessary resources,\nas ",(0,r.kt)("a",{parentName:"p",href:"#creds"},"shown above"),"."),(0,r.kt)("p",null,"This way, you can easily revoke/change the credentials, and create a new data connector\nand batch exporter configuration without impacting other applications."),(0,r.kt)("h2",{id:"tearing-down"},"Tearing down"),(0,r.kt)("p",null,"Delete a batch exporter with the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete batch-exporter <batch exporter name>\nBatch Exporter has been deleted\n")),(0,r.kt)("p",null,"To delete a data connector, any dependent batch exporter needs to be deleted first.\nIt can then be deleted as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete data-connector <data connector name>\nData Connector has been deleted\n")),(0,r.kt)("p",null,"Alternatively, you can remove the data connector with all linked batch exporters in one go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete data-connector <data connector name> --recursive\nData Connector and dependent entities have been deleted\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You\u2019re not required to delete a data connector when deleting a batch exporter.\nAfter all, it's only a configuration item that doesn't do anything by itself.")))}p.isMDXComponent=!0}}]);