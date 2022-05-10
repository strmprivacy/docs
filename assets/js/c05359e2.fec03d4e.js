"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[338],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1504:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return h},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"High Level Architecture",hide_table_of_contents:!1},l="Architecture",c={unversionedId:"overview/hla",id:"overview/hla",title:"High Level Architecture",description:"This section shows the high level architecture of STRM Privacy. It shows",source:"@site/docs/overview/hla.md",sourceDirName:"overview",slug:"/overview/hla",permalink:"/docs/latest/overview/hla",tags:[],version:"current",frontMatter:{title:"High Level Architecture",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Bringing STRM Privacy into your organization",permalink:"/docs/latest/overview/organization"},next:{title:"Definitions",permalink:"/docs/latest/overview/definitions"}},p={},h=[{value:"Overview",id:"overview",level:2},{value:"Outputs",id:"outputs",level:2},{value:"The Batch Exporters",id:"the-batch-exporters",level:3},{value:"Kafka Consumer",id:"kafka-consumer",level:3},{value:"Encryption Keys",id:"encryption-keys",level:3}],u={toc:h};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"This section shows the high level architecture of STRM Privacy. It shows\nhow data is processed, before it is exposed to an application consuming\nthe data."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"When sending data or receiving data to/from STRM Privacy, your\napplication must identify itself using client credentials. These\ncredentials are provided through the self-service console or via the\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm")," command line interface."),(0,i.kt)("p",null,"All events that are being sent to STRM Privacy have schema reference (in\na http header) that defines the structure and contents of the event."),(0,i.kt)("p",null,"The STRM Privacy ",(0,i.kt)("em",{parentName:"p"},"Event Gateway")," will verify that the data:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u2026is of the correct serialization format, as specified in schema\nreference")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u2026is a valid serialized message")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u2026complies to the pre-defined validation rules, as specified in the\nEvent Contract"))),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"High Level Architecture",src:n(6796).Z,width:"938",height:"431"})),(0,i.kt)("p",null,"Upon accepting an event, the ",(0,i.kt)("em",{parentName:"p"},"Event Gateway")," will use the ",(0,i.kt)("em",{parentName:"p"},"Encrypter")," to\nencrypt ",(0,i.kt)("strong",{parentName:"p"},"all")," defined Personally Identifiable Information (PII)\nattributes of the event. Which fields are PII is defined in the event\ncontract, for example ",(0,i.kt)("a",{parentName:"p",href:"https://strmprivacy.io/schemas/dpg/nps_unified/5.0.0/"},"the media personalization event\ncontract"),". The\nschema can have multiple levels of PII attributes but all of them are\nencrypted with the same encryption key that is linked to the session.\nThis key is rotated every 24 hours."),(0,i.kt)("p",null,"You ",(0,i.kt)("em",{parentName:"p"},"can")," ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," create decrypted streams that contain a subset of the\nencrypted stream, with only those PII fields decrypted that you have\nrequested."),(0,i.kt)("p",null,"The algorithm is as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"we define a derived stream where for example we request to receive\nevents that provide consent for levels 1, 3 and 8.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the decrypter will inspect every event, and will ignore all events\nthat don\u2019t have ",(0,i.kt)("em",{parentName:"p"},"at least")," these 3 levels set in their\n",(0,i.kt)("inlineCode",{parentName:"p"},"consentLevels")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/concepts/strm-meta"},"meta-data"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the events that are accepted by the decrypter will then be partially\ndecrypted; only the attributes with PII levels 1, 3 and 8 will be\ndecrypted. This means that assuming a customer has given consent for\na couple more PII levels, fields with those consent levels will\n",(0,i.kt)("strong",{parentName:"p"},"not be decrypted"),". This is the mechanism that STRM Privacy uses\nto adhere to ",(0,i.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/art-6-gdpr/"},"article 6 of the\nGDPR"),". A data processing unit in a\ncompany receives only those events that the end-user has consented\nto, with only those PII data that it needs."))),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"STRM Privacy has multiple output possibilities."),(0,i.kt)("h3",{id:"the-batch-exporters"},"The Batch Exporters"),(0,i.kt)("p",null,"Currently STRM Privacy has two batch exporter outputs, for ",(0,i.kt)("em",{parentName:"p"},"AWS S3"),", and\n",(0,i.kt)("em",{parentName:"p"},"Google Cloud Storage"),". These can be configured to receive batches of\nJSON formatted events of encrypted streams or output streams. See\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/receiving-s3"},"here")," for an example."),(0,i.kt)("h3",{id:"kafka-consumer"},"Kafka Consumer"),(0,i.kt)("p",null,"STRM Privacy is built on ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/powered-by"},"Apache\nKafka"),", which provides it with very\ngood scalability, fault-tolerance and decoupling of event producers and\nconsumers. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-kafka"},"here")," for an\nintroduction on how to consume input or derived streams from our Kafka\ncluster."),(0,i.kt)("h3",{id:"encryption-keys"},"Encryption Keys"),(0,i.kt)("p",null,"It is possible to move the decryption of events to the customers own\nenvironment. In that case the client will receive the encryption keys\n(in ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/tink"},"tink")," format) via a batch\nexporter mechanism. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-keys"},"the Exporting\nKeys")," documentation for some details."),(0,i.kt)("p",null,"In case the customer choose to receive and use the decryption keys to\ndecrypt personal data attributes, the responsibility for correctly\ndealing with privacy compliance moves to the customer teams and\nprocesses."),(0,i.kt)("p",null,(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," but don\u2019t have to"))}d.isMDXComponent=!0},6796:function(e,t,n){t.Z=n.p+"assets/images/hla-bb5f2d6db3ffb77d8d8a4599cd0bc97c.svg"}}]);