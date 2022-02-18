"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[204],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Core",hide_table_of_contents:!1},l="STRM Privacy Concepts",c={unversionedId:"concepts/core-concepts",id:"concepts/core-concepts",title:"Core",description:"What problems are we trying to solve?",source:"@site/docs/concepts/core-concepts.md",sourceDirName:"concepts",slug:"/concepts/core-concepts",permalink:"/docs/latest/concepts/core-concepts",tags:[],version:"current",frontMatter:{title:"Core",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"STRM Privacy concepts",permalink:"/docs/latest/concepts/"},next:{title:"Batch vs Stream processing",permalink:"/docs/latest/concepts/batch-vs-streaming"}},p=[{value:"What problems are we trying to solve?",id:"what-problems-are-we-trying-to-solve",children:[],level:2},{value:"Concepts",id:"concepts",children:[{value:"Events shall be correct",id:"events-shall-be-correct",children:[],level:3},{value:"Events shall be privacy safe",id:"events-shall-be-privacy-safe",children:[],level:3},{value:"Latency shall be low",id:"latency-shall-be-low",children:[],level:3},{value:"Fault tolerance and horizontal scalability",id:"fault-tolerance-and-horizontal-scalability",children:[],level:3},{value:"Encryption / Decryption",id:"encryption--decryption",children:[],level:3}],level:2},{value:"Using the encrypted data.",id:"using-the-encrypted-data",children:[{value:"Using the decrypted data.",id:"using-the-decrypted-data",children:[],level:3},{value:"Identify the consent levels you need.",id:"identify-the-consent-levels-you-need",children:[],level:3},{value:"Consent level types",id:"consent-level-types",children:[],level:3},{value:"Create a decrypted stream",id:"create-a-decrypted-stream",children:[],level:3}],level:2},{value:"Getting the data into STRM Privacy",id:"getting-the-data-into-strm-privacy",children:[],level:2},{value:"Getting data out of STRM Privacy",id:"getting-data-out-of-strm-privacy",children:[{value:"Batch exports",id:"batch-exports",children:[],level:3},{value:"Kafka consumers",id:"kafka-consumers",children:[],level:3}],level:2}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"strm-privacy-concepts"},"STRM Privacy Concepts"),(0,i.kt)("h2",{id:"what-problems-are-we-trying-to-solve"},"What problems are we trying to solve?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STRM Privacy handles processing of events that contain personal data\nin a privacy regulations compliant way.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STRM Privacy improves the quality of event data by separating the\nrules that govern the shape and content of the event data from the\nteams that generate the data. So in essence, the data-scientists and\nanalytics determine the rules, and not the front-end teams where the\ndata originates.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STRM Privacy moves the decisions around privacy compliance from the\nsoftware developers and data teams to those entities that know about\nprivacy. The rules that govern the personal data aspects of an event\nare handled by so-called event contracts, and ",(0,i.kt)("em",{parentName:"p"},"do not")," require work\nby software developers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STRM Privacy takes care of complexities of handling high-volume\nevent data with low latency and high availability.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"STRM Privacy makes sure that there is an audit trail around the\nhandling of personal event data. It provides the tooling to show\nwhat entity is using what personal data for what purpose."))),(0,i.kt)("h2",{id:"concepts"},"Concepts"),(0,i.kt)("p",null,"STRM Privacy is an event processing engine designed around the following\nconcepts."),(0,i.kt)("h3",{id:"events-shall-be-correct"},"Events shall be correct"),(0,i.kt)("p",null,"Data science teams all over are well aware of the many ways that data\nare wrong. It\u2019s generally left up to them to try to work their way out\nof the mess. Stream Machine aims to move the responsibility of\ngenerating ",(0,i.kt)("em",{parentName:"p"},"correct")," data forwards so that those entities that produce\nevent data will receive ",(0,i.kt)("em",{parentName:"p"},"immediate")," feedback in case of discrepancies."),(0,i.kt)("p",null,"Events in STRM Privacy are strictly defined both in shape and content.\nEvents that do not conform will be rejected. For this, STRM Privacy uses\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/concepts/schemas-and-contracts"},"Schemas and Contracts")," to which all events\nmust conform."),(0,i.kt)("h3",{id:"events-shall-be-privacy-safe"},"Events shall be privacy safe"),(0,i.kt)("p",null,"The events conform to a certain schema, and this schema defines which\nevent attributes contain ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_data"},"Personally Identifiable Information\n(PII)"),". Events that are\naccepted by STRM Privacy will have these attributes encrypted before\nentering any persistent storage. The encryption key is linked to an\nevent attribute that defines its ",(0,i.kt)("em",{parentName:"p"},"session"),", i.e. the attribute that ties\nthe events together as a sequence belonging to one entity. The\nencryption key is rotated every 24 hours."),(0,i.kt)("p",null,"A limited number of example schemas can be seen ",(0,i.kt)("a",{parentName:"p",href:"https://strmprivacy.io/schemas/"},"in the STRM Privacy Web\nConsole")),(0,i.kt)("h3",{id:"latency-shall-be-low"},"Latency shall be low"),(0,i.kt)("p",null,"Both on ingest, and on further processing, STRM Privacy was designed and\nbuilt to provide low latency. The current implementation uses http/2 for\ningest, with typical 99 percentile latencies well below 10ms ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,"Internally we use ",(0,i.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Kafka")," for high throughput\nfault tolerant pipelines. We can configure batch sizes at will, but\nhaving your event data in your own Kafka consumer within 1 second is\neasily doable."),(0,i.kt)("h3",{id:"fault-tolerance-and-horizontal-scalability"},"Fault tolerance and horizontal scalability"),(0,i.kt)("p",null,"STRM Privacy was designed from the ground up for horizontal scalability\nand fault tolerance. Single points of failure are currently only if the\nwhole cloud region goes down."),(0,i.kt)("h3",{id:"encryption--decryption"},"Encryption / Decryption"),(0,i.kt)("p",null,"STRM Privacy encrypts the events but with what key? To understand this\nwe have to look at another component of the schema, the ",(0,i.kt)("em",{parentName:"p"},"event sequence\nidentifier")," attribute ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". The value in this attribute defines wether or\nnot events belong to the same sequence. This might be website actions of\none person, or maybe a device id of a car sending location data, we\ndon\u2019t care. The first time a new value is seen in the ",(0,i.kt)("em",{parentName:"p"},"key field")," an\nencryption key is generated in STRM Privacy which is linked to the event\nvia its ",(0,i.kt)("inlineCode",{parentName:"p"},"strmMeta/keyLink")," value. The encryption and its associated key\nlink remain in use for 24 hours, and a new pair will then be generated."),(0,i.kt)("h2",{id:"using-the-encrypted-data"},"Using the encrypted data."),(0,i.kt)("p",null,"The primary event stream is called the ",(0,i.kt)("em",{parentName:"p"},"encrypted stream")," and this by\ndesign no longer contains PII data. ",(0,i.kt)("strong",{parentName:"p"},"Everyone")," in your company can use\nit ",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In case these data become compromised, you have a business\nissue, but ",(0,i.kt)("strong",{parentName:"p"},"not")," a privacy issue."),(0,i.kt)("p",null,"Even these data are useful. With a typical clickstream, where ",(0,i.kt)("inlineCode",{parentName:"p"},"url")," is\nnot considered personal data, you could identify dead ends on your site,\nor train recommender engines on the encrypted stream, because the\nattributes that identify the sequence even though encrypted, remain ",(0,i.kt)("em",{parentName:"p"},"the\nsame")," for 24 hours. This is plenty long enough to understand typical\ncustomer journeys, without compromising the privacy of your users."),(0,i.kt)("h3",{id:"using-the-decrypted-data"},"Using the decrypted data."),(0,i.kt)("p",null,"If your usecase requires specific permissions, the process is as\nfollows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"flowchart",src:n(8349).Z,width:"750",height:"491"})),(0,i.kt)("h3",{id:"identify-the-consent-levels-you-need"},"Identify the consent levels you need."),(0,i.kt)("p",null,"Ask the ",(0,i.kt)("a",{parentName:"p",href:"https://tinyurl.com/wozhnn5"},"Data Protection Officer")," the\nspecific consent levels your usecase requires. This will return a list\nof values ",(0,i.kt)("sup",{parentName:"p",id:"fnref-4"},(0,i.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," that you need."),(0,i.kt)("h3",{id:"consent-level-types"},"Consent level types"),(0,i.kt)("p",null,"STRM Privacy supports two types of consent levels when creating a\ndecrypted output stream: granular and cumulative."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Cumulative: Only the highest consent level is configured on the\noutput stream. All consent levels from zero (included) up to this\nlevel (included) are decrypted in the output stream.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Granular: All the consent levels that are to be decrypted in the\noutput stream are explicitly configured. This way, it\u2019s possible to\nhave "gaps" between the consent levels. For example, can specify\nlevel 1 and 4, which means that all other levels, including 2 and 3\nremain encrypted.'))),(0,i.kt)("p",null,"The resulting set of consent levels effects two things, see:\n","[???]","(Create a decrypted stream)"),(0,i.kt)("h3",{id:"create-a-decrypted-stream"},"Create a decrypted stream"),(0,i.kt)("p",null,"Here you instruct STRM Privacy to decrypt event data with above consent\nlevels. STRM Privacy will"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"drop all events that don\u2019t at least contain all the consent levels\nyou require.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"decrypt attributes with the consent levels you requested. Attributes\nwith other pii levels will not be decrypted. So you receive exactly\nwhat you have a right to, and nothing more."))),(0,i.kt)("p",null,"You access this stream with a specific set of credentials."),(0,i.kt)("p",null,"This means that data consumers will only receive the data they are\nlegally allowed to receive, provided the company is careful with ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"not\nre-using credentials")),"."),(0,i.kt)("h2",{id:"getting-the-data-into-strm-privacy"},"Getting the data into STRM Privacy"),(0,i.kt)("p",null,"STRM Privacy is currently an engine running on Google Cloud, with http/2\ninput. In order to have data accepted by STRM Privacy you need the\nfollowing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a valid account")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"a stream definition, with associated credentials. STRM Privacy\ncurrently uses the Oauth 2.0 client credentials scheme.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"an http/http2 client that sends data in the correct format. We\nprovide ",(0,i.kt)("em",{parentName:"p"},"drivers")," for various languages ",(0,i.kt)("sup",{parentName:"p",id:"fnref-5"},(0,i.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," that simplify creating\nthe events and sending the data. For maximum performance, http/2 is\npreferred over http1.1. You can find the drivers on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy"},"github.com/strmprivacy")," You don\u2019t\n",(0,i.kt)("em",{parentName:"p"},"need")," our software to send data.\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/sending-curl"},"Here")," you can play with the actual\nhttp interaction."))),(0,i.kt)("h2",{id:"getting-data-out-of-strm-privacy"},"Getting data out of STRM Privacy"),(0,i.kt)("p",null,"STRM Privacy internally keeps its data in ",(0,i.kt)("a",{parentName:"p",href:"https://apache.org/kafka"},"Apache\nKafka")," topics, that typically auto-expire\ntheir data in 7 days."),(0,i.kt)("p",null,"For getting the data into your systems we currently have the following\noptions."),(0,i.kt)("h3",{id:"batch-exports"},"Batch exports"),(0,i.kt)("p",null,"Currently we have the option to do periodic (minute scale) exports to\nAWS S3 and Google Cloud buckets, in Json-lines format ",(0,i.kt)("sup",{parentName:"p",id:"fnref-6"},(0,i.kt)("a",{parentName:"sup",href:"#fn-6",className:"footnote-ref"},"6")),". This is a\nvery common format for Data Scientists."),(0,i.kt)("h3",{id:"kafka-consumers"},"Kafka consumers"),(0,i.kt)("p",null,"We provide the option to create an internet accessible ",(0,i.kt)("sup",{parentName:"p",id:"fnref-7"},(0,i.kt)("a",{parentName:"sup",href:"#fn-7",className:"footnote-ref"},"7"))," Kafka cluster\nwhere you can use standard Kafka consumers to retrieve your data ",(0,i.kt)("sup",{parentName:"p",id:"fnref-8"},(0,i.kt)("a",{parentName:"sup",href:"#fn-8",className:"footnote-ref"},"8")),"."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"possibly plus internet roundtrip time",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"named ",(0,i.kt)("inlineCode",{parentName:"li"},"key_field"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},"at least from a GDPR perspective",(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-4"},"small integers",(0,i.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-5"},"currently Java, Javascript and Python",(0,i.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-6"},"even when the primary format is Avro",(0,i.kt)("a",{parentName:"li",href:"#fnref-6",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-7"},"authorized ofcourse",(0,i.kt)("a",{parentName:"li",href:"#fnref-7",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-8"},"in Json format for now",(0,i.kt)("a",{parentName:"li",href:"#fnref-8",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0},8349:function(e,t,n){t.Z=n.p+"assets/images/flowchart-0568937d3272b18c446d32d5d0abc532.png"}}]);