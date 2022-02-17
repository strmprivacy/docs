"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[894],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={},c="[Running Batch Jobs with the Command Line Interface](/docs/latest/concepts/batch-jobs)",l={unversionedId:"quickstart/index",id:"quickstart/index",title:"[Running Batch Jobs with the Command Line Interface](/concepts/batch-jobs.md)",description:"How to create, list and delete input streams and derived streams.",source:"@site/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/docs/latest/quickstart/",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Simple Schemas",permalink:"/docs/latest/concepts/simple-schemas"},next:{title:"Creating Streams with the Command Line Interface",permalink:"/docs/latest/quickstart/creating-streams"}},d=[{value:"Creating Streams with the Command Line Interface",id:"creating-streams-with-the-command-line-interface",children:[],level:2},{value:"Receiving json events on the websocket endpoint",id:"receiving-json-events-on-the-websocket-endpoint",children:[],level:2},{value:"Sending and receiving by hand",id:"sending-and-receiving-by-hand",children:[],level:2},{value:"Examples in multiple languages",id:"examples-in-multiple-languages",children:[],level:2},{value:"Kafka consumer in Python",id:"kafka-consumer-in-python",children:[],level:2},{value:"Exporting to AWS S3",id:"exporting-to-aws-s3-1",children:[],level:2},{value:"Exporting Keys",id:"exporting-keys",children:[],level:2},{value:"gRPC API definition",id:"grpc-api-definition",children:[],level:2},{value:"Simple Schema",id:"simple-schema",children:[],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-batch-jobs-with-the-command-line-interface"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/concepts/batch-jobs"},"Running Batch Jobs with the Command Line Interface")),(0,i.kt)("p",null,"How to create, list and delete input streams and derived streams."),(0,i.kt)("h1",{id:"managing-streams-with-the-command-line-interface"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/creating-streams"},"Managing streams with the Command Line Interface")),(0,i.kt)("p",null,"How to create, list and delete input streams and derived streams."),(0,i.kt)("h1",{id:"using-the-web-socket-endpoint"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/listen-web-socket"},"Using the web-socket endpoint")),(0,i.kt)("p",null,"A web-socket endpoint where you can see a json version of your events."),(0,i.kt)("h1",{id:"sending-events-by-hand"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/sending-curl"},"Sending events by hand")),(0,i.kt)("p",null,"The low level details of interacting with STRM Privacy, #without any\nStream Machine specific software#."),(0,i.kt)("h1",{id:"examples-in-multiple-programming-languages"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/full-example"},"Examples in multiple programming languages")),(0,i.kt)("p",null,"Quick #getting started# examples. If you have the software environment\nset up, you should be sending simulated events in a minute."),(0,i.kt)("h1",{id:"consuming-from-kafka"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/exporting-kafka"},"Consuming from Kafka")),(0,i.kt)("p",null,"Realtime exporting to a Kafka cluster, and a consumer in Python."),(0,i.kt)("h1",{id:"exporting-to-aws-s3"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/receiving-s3"},"Exporting to AWS S3")),(0,i.kt)("p",null,"How to export batches of events to an AWS S3 bucket."),(0,i.kt)("h1",{id:"exporting-encryption-keys"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/exporting-keys"},"Exporting encryption keys")),(0,i.kt)("p",null,"How to export the generated STRM Privacy encryption keys. Also shows\nsome interaction with a Google Cloud bucket."),(0,i.kt)("h1",{id:"grpc"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/grpc"},"gRPC")),(0,i.kt)("p",null,"Public interaction with STRM Privacy is via a ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io"},"grpc"),"\ndefinition. You don\u2019t #need# our tools to interact with it."),(0,i.kt)("h1",{id:"simple-schemas"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/simple-schema"},"Simple Schemas")),(0,i.kt)("p",null,"This #hands-on# session shows how to define #your own schema# and how to\nsend data with the Python driver and generated code."),(0,i.kt)("h1",{id:"quickstart"},(0,i.kt)("a",{parentName:"h1",href:"/docs/latest/quickstart/"},"Quickstart")),(0,i.kt)("h2",{id:"creating-streams-with-the-command-line-interface"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/creating-streams"},"Creating Streams with the Command Line Interface")),(0,i.kt)("h2",{id:"receiving-json-events-on-the-websocket-endpoint"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/listen-web-socket"},"Receiving json events on the websocket endpoint")),(0,i.kt)("h2",{id:"sending-and-receiving-by-hand"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/sending-curl"},"Sending and receiving by hand")),(0,i.kt)("h2",{id:"examples-in-multiple-languages"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/full-example"},"Examples in multiple languages")),(0,i.kt)("h2",{id:"kafka-consumer-in-python"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/exporting-kafka"},"Kafka consumer in Python")),(0,i.kt)("h2",{id:"exporting-to-aws-s3-1"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/receiving-s3"},"Exporting to AWS S3")),(0,i.kt)("h2",{id:"exporting-keys"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/exporting-keys"},"Exporting Keys")),(0,i.kt)("h2",{id:"grpc-api-definition"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/grpc"},"gRPC API definition")),(0,i.kt)("h2",{id:"simple-schema"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/simple-schema"},"Simple Schema")))}u.isMDXComponent=!0}}]);