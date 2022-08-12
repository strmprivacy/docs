"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"High Level Architecture",hide_table_of_contents:!1},i="Architecture",s={unversionedId:"overview/hla",id:"overview/hla",title:"High Level Architecture",description:"This section shows the high level architecture of STRM Privacy. It shows",source:"@site/docs/overview/hla.md",sourceDirName:"overview",slug:"/overview/hla",permalink:"/docs/latest/overview/hla",draft:!1,tags:[],version:"current",frontMatter:{title:"High Level Architecture",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Bringing STRM Privacy into your organization",permalink:"/docs/latest/overview/organization"},next:{title:"Definitions",permalink:"/docs/latest/overview/definitions"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Batch Exporters",id:"batch-exporters",level:3},{value:"Kafka Consumer",id:"kafka-consumer",level:3},{value:"Encryption Keys",id:"encryption-keys",level:3}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"This section shows the high level architecture of STRM Privacy. It shows\nhow data is processed, before it is exposed to an application consuming\nthe data."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"When sending data or receiving data to/from STRM Privacy, your\napplication must identify itself using client credentials. These\ncredentials are provided through the self-service console or via the\n",(0,a.kt)("inlineCode",{parentName:"p"},"strm")," command line interface."),(0,a.kt)("p",null,"All events that are being sent to STRM Privacy have schema reference (in\na http header) that defines the structure and contents of the event."),(0,a.kt)("p",null,"The STRM Privacy ",(0,a.kt)("em",{parentName:"p"},"Event Gateway")," will verify that the data:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u2026is of the correct serialization format, as specified in schema\nreference")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u2026is a valid serialized message")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u2026complies to the pre-defined validation rules, as specified in the\nEvent Contract"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"High Level Architecture",src:n(6796).Z,width:"938",height:"431"})),(0,a.kt)("p",null,"Upon accepting an event, the ",(0,a.kt)("em",{parentName:"p"},"Event Gateway")," will use the ",(0,a.kt)("em",{parentName:"p"},"Encrypter")," to\nencrypt ",(0,a.kt)("strong",{parentName:"p"},"all")," defined Personally Identifiable Information (PII)\nattributes of the event. Which fields are PII is defined in the event\ncontract, for example ",(0,a.kt)("a",{parentName:"p",href:"https://strmprivacy.io/schemas/dpg/nps_unified/5.0.0/"},"the media personalization event\ncontract"),". The\nschema can have multiple levels of PII attributes but all of them are\nencrypted with the same encryption key that is linked to the session.\nThis key is rotated every 24 hours."),(0,a.kt)("p",null,"You ",(0,a.kt)("em",{parentName:"p"},"can")," ",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," create decrypted streams that contain a subset of the\nencrypted stream, with only those PII fields decrypted that you have\nrequested."),(0,a.kt)("p",null,"The algorithm is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"we define a derived stream where for example we request to receive\nevents that provide consent for levels 1, 3 and 8.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the decrypter will inspect every event, and will ignore all events\nthat don\u2019t have ",(0,a.kt)("em",{parentName:"p"},"at least")," these 3 levels set in their\n",(0,a.kt)("inlineCode",{parentName:"p"},"consentLevels")," ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/concepts/strm-meta"},"meta-data"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the events that are accepted by the decrypter will then be partially\ndecrypted; only the attributes with PII levels 1, 3 and 8 will be\ndecrypted. This means that assuming a customer has given consent for\na couple more PII levels, fields with those consent levels will\n",(0,a.kt)("strong",{parentName:"p"},"not be decrypted"),". This is the mechanism that STRM Privacy uses\nto adhere to ",(0,a.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/art-6-gdpr/"},"article 6 of the\nGDPR"),". A data processing unit in a\ncompany receives only those events that the end-user has consented\nto, with only those PII data that it needs."))),(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"STRM Privacy provides multiple ways to output data."),(0,a.kt)("h3",{id:"batch-exporters"},"Batch Exporters"),(0,a.kt)("p",null,"Batch Exporters process batches of events from encrypted or derived streams,\nand write these as JSON to common storage solutions using\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-connectors"},"Data Connectors"),".\nSee ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/batch-exporter"},"this quickstart")," for an example."),(0,a.kt)("h3",{id:"kafka-consumer"},"Kafka Consumer"),(0,a.kt)("p",null,"STRM Privacy is built on ",(0,a.kt)("a",{parentName:"p",href:"https://kafka.apache.org/powered-by"},"Apache\nKafka"),", which provides it with very\ngood scalability, fault-tolerance and decoupling of event producers and\nconsumers. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-kafka"},"here")," for an\nintroduction on how to consume input or derived streams from our Kafka\ncluster."),(0,a.kt)("h3",{id:"encryption-keys"},"Encryption Keys"),(0,a.kt)("p",null,"It is possible to move the decryption of events to the customer's own\nenvironment. In that case the client will receive the encryption keys\n(in ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/tink"},"tink")," format) via a batch\nexporter mechanism. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-keys"},"the Exporting\nKeys")," documentation for some details."),(0,a.kt)("p",null,"In case the customer choose to receive and use the decryption keys to\ndecrypt personal data attributes, the responsibility for correctly\ndealing with privacy compliance moves to the customer teams and\nprocesses."),(0,a.kt)("p",null,(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," but don\u2019t have to"))}h.isMDXComponent=!0},6796:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/hla-bb5f2d6db3ffb77d8d8a4599cd0bc97c.svg"}}]);