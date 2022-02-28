"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1585],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?a.createElement(m,s(s({ref:t},h),{},{components:n})):a.createElement(m,s({ref:t},h))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return h},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Batch Jobs",hide_table_of_contents:!1},c=void 0,l={unversionedId:"concepts/batch-jobs",id:"concepts/batch-jobs",title:"Batch Jobs",description:"This page describes the most important concepts to understand when using",source:"@site/docs/concepts/batch-jobs.md",sourceDirName:"concepts",slug:"/concepts/batch-jobs",permalink:"/docs/latest/concepts/batch-jobs",tags:[],version:"current",frontMatter:{title:"Batch Jobs",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Batch vs Stream processing",permalink:"/docs/latest/concepts/batch-vs-streaming"},next:{title:"Schemas and Contracts",permalink:"/docs/latest/concepts/schemas-and-contracts"}},h={},p=[{value:"A Batch Job",id:"a-batch-job",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Encryption keys",id:"encryption-keys",level:3},{value:"The importance of timestamps",id:"the-importance-of-timestamps",level:3},{value:"Batch Job Groups",id:"batch-job-groups",level:3},{value:"Data Connectors",id:"data-connectors",level:2},{value:"Consent",id:"consent",level:2},{value:"Batch Job states",id:"batch-job-states",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page describes the most important concepts to understand when using\nBatch Jobs."),(0,o.kt)("h1",{id:"batch-job-concepts"},"Batch Job Concepts"),(0,o.kt)("h2",{id:"a-batch-job"},"A Batch Job"),(0,o.kt)("p",null,"STRM supports batch processing through Batch Jobs. One Batch Job\nrepresents the processing of one data file: encryption, decrypion,\nmasking and exporting the results. This means that a Batch Job has a\nfinite lifetime after it starts. It either succeeds or it fails, it\u2019s\nnot a continuously running process, like a Kafka consumer or a Batch\nExporter."),(0,o.kt)("p",null,"Processing multiple files thus requires multiple Batch Jobs and a Batch\nJob cannot be reinstantiated for a second run."),(0,o.kt)("h2",{id:"encryption"},"Encryption"),(0,o.kt)("p",null,"A lot in STRM processing, both batch and streaming, revolves around\nencryption of data. While most of it is the same, there are subtle\ndifferences between how data is encrypted between the two, mostly\nrelated to timing."),(0,o.kt)("h3",{id:"encryption-keys"},"Encryption keys"),(0,o.kt)("p",null,"When using streams, encryption keys are generated on-the-fly when there\nis no existing key for the given key field value. These encryption keys\nthen have a lifetime of 24 hours, after which a new encryption key is\ngenerated when an event comes in."),(0,o.kt)("p",null,"So this process relies on the current time."),(0,o.kt)("p",null,"When relying on the current time while processing a batch of data, two\nthings can happen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A big batch of data contains records that are more than 24 hours\napart. This causes too much data to be encrypted using the same\nencryption key, which is undesirable.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'A batch contains data with records that are less than 24 hours\napart. This causes encryption keys to be rotated too often, making\nit hard to "link" associated data, like a user session.'))),(0,o.kt)("p",null,"These two statements assume that a Batch Job takes less than 24 hours,\nwhich is the common case."),(0,o.kt)("p",null,"In either case, the current time is not usable with batch processing."),(0,o.kt)("h3",{id:"the-importance-of-timestamps"},"The importance of timestamps"),(0,o.kt)("p",null,"Because we cannot use the current time, and the timestamp is mandatory,\nwe require a timestamp to be present in every record."),(0,o.kt)("p",null,"This timestamp can then be used to determine which encryption key is\nused when encrypting the PII fields in this record."),(0,o.kt)("p",null,"For determining the encryption key, we persistently store all encryption\nkeys in a database, along with a time window in which the key is valid.\nJust as with streaming, this window is 24 hours."),(0,o.kt)("h3",{id:"batch-job-groups"},"Batch Job Groups"),(0,o.kt)("p",null,'Batch Jobs can be configured to be part of the same "group". This means\nthat these Batch Jobs use the same set of encryption keys. This can be\nvery helpful when the same dataset is split across multiple files and/or\nyou\u2019d like to have a fluent transition at time window boundaries.'),(0,o.kt)("h2",{id:"data-connectors"},"Data Connectors"),(0,o.kt)("p",null,"A Batch Job reads data from and sends data to a Data Connector. Because\nof historic reasons, Data Connector is also called Sink, but we\u2019re\nplanning to move away from the name Sink as for most people it means a\nplace to send data to, and not read from.."),(0,o.kt)("p",null,"For now, we only support AWS S3 Data Connectors, but Google Cloud\nStorage buckets are next in line."),(0,o.kt)("p",null,"For a Batch Job, three or more Data Connectors need to be specified,\nfor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The location of the source data (from where is the unencrypted data\nread?).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The location of the encrypted data (where is the encrypted data\nstored?).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The location of the encryption keys (where are the encrypted keys\nstored?).")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Zero or more locations for the derived data (where is every file\nwith derived data stored?)"))),(0,o.kt)("p",null,"Having separate Data Connectors for each piece of input/output data\nmakes it possible to create data pipelines that are inherently safe,\nbecause consumers only see the data they\u2019re allowed to see. But of\ncourse it\u2019s also possible to reuse the same Data Connector."),(0,o.kt)("h2",{id:"consent"},"Consent"),(0,o.kt)("p",null,"Just like with streaming, a lot of our processing relies on consent; the\nconsent of the end user (i.e. the visitor on the website) and the\nconsent we\u2019d like to have decrypted."),(0,o.kt)("p",null,"For this, we need every record or event to have the consent of the end\nuser. Without consent, we can only use encrypted PII fields."),(0,o.kt)("p",null,"To fit into as many environments as possible, we provide a mechanism to\nextract the consent from the source data."),(0,o.kt)("p",null,"First you need to specify which field contains the consent."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Then you can create a mapping to translate between your terminology\nand our consent levels, which are integer arrays. A mapping could\nbe: Map "analytics" to "',"[","1,2","]",'".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If no mapping is specified, we try to parse the data as an int\narray, like this: "',"[","1,2","]",'" or as an int, like this: "1".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If there is no mapping, the data is not an int or int array, or if\nthere is another error while parsing, the provided default is used.\nTypically this is an empty list, meaning "no consent" or "unknown".'))),(0,o.kt)("p",null,"We\u2019re planning on more ways to extract consent, like user-provided code,\nbut this is not planned for the near future."),(0,o.kt)("h2",{id:"batch-job-states"},"Batch Job states"),(0,o.kt)("p",null,"Success flow:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The Batch Job has a finite lifetime. When created, it has the\nstatus: "PENDING". This means it has been successfully created and\nwill be started soon.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When the Batch Job is started it gets the status: "STARTED". This\nmeans all Data Connectors have been initialized, and it is about to\nread the source data.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'While the Batch Job is running, it has the status: "RUNNING" every\n10 seconds.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When it\u2019s done and all files have been uploaded to the respective\nData Connectors, it has the status "FINISHED".'))),(0,o.kt)("p",null,"Error states:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When there is an error starting the Batch Job, it gets the status:\n"ERROR',"_",'STARTING". We retry restarting it for three times, after\nwhich we consider it an unrecoverable error, and we stop trying.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'When there is an error while running the Batch Job, for example,\nwhile processing a CSV or writing to a Data Connector, it gets the\nstatus: "ERROR". We consider this an unrecoverable error, and we\ndon\u2019t retry.'))))}d.isMDXComponent=!0}}]);