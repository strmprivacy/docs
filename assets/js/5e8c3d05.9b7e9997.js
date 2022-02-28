"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[894],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="Quickstart",l={unversionedId:"quickstart/index",id:"quickstart/index",title:"Quickstart",description:"Running Batch Jobs with the Command Line Interface",source:"@site/docs/quickstart/index.md",sourceDirName:"quickstart",slug:"/quickstart/",permalink:"/docs/latest/quickstart/",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Simple Schemas",permalink:"/docs/latest/concepts/simple-schemas"},next:{title:"Creating Streams with the Command Line Interface",permalink:"/docs/latest/quickstart/creating-streams"}},u={},p=[{value:"Running Batch Jobs with the Command Line Interface",id:"running-batch-jobs-with-the-command-line-interface",level:2},{value:"Managing streams with the Command Line Interface",id:"managing-streams-with-the-command-line-interface",level:2},{value:"Using the web-socket endpoint",id:"using-the-web-socket-endpoint",level:2},{value:"Sending events by hand",id:"sending-events-by-hand",level:2},{value:"Examples in multiple programming languages",id:"examples-in-multiple-programming-languages",level:2},{value:"Consuming from Kafka",id:"consuming-from-kafka",level:2},{value:"Exporting to AWS S3",id:"exporting-to-aws-s3",level:2},{value:"Exporting encryption keys",id:"exporting-encryption-keys",level:2},{value:"gRPC",id:"grpc",level:2},{value:"Simple Schemas",id:"simple-schemas",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"quickstart"},"Quickstart"),(0,i.kt)("h2",{id:"running-batch-jobs-with-the-command-line-interface"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/batch-jobs"},"Running Batch Jobs with the Command Line Interface")),(0,i.kt)("p",null,"How to create, list and delete input streams and derived streams."),(0,i.kt)("h2",{id:"managing-streams-with-the-command-line-interface"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/creating-streams"},"Managing streams with the Command Line Interface")),(0,i.kt)("p",null,"How to create, list and delete input streams and derived streams."),(0,i.kt)("h2",{id:"using-the-web-socket-endpoint"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/listen-web-socket"},"Using the web-socket endpoint")),(0,i.kt)("p",null,"A web-socket endpoint where you can see a json version of your events."),(0,i.kt)("h2",{id:"sending-events-by-hand"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/sending-curl"},"Sending events by hand")),(0,i.kt)("p",null,"The low level details of interacting with STRM Privacy, #without any\nStream Machine specific software#."),(0,i.kt)("h2",{id:"examples-in-multiple-programming-languages"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/full-example"},"Examples in multiple programming languages")),(0,i.kt)("p",null,"Quick #getting started## examples. If you have the software environment\nset up, you should be sending simulated events in a minute."),(0,i.kt)("h2",{id:"consuming-from-kafka"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/exporting-kafka"},"Consuming from Kafka")),(0,i.kt)("p",null,"Realtime exporting to a Kafka cluster, and a consumer in Python."),(0,i.kt)("h2",{id:"exporting-to-aws-s3"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/receiving-s3"},"Exporting to AWS S3")),(0,i.kt)("p",null,"How to export batches of events to an AWS S3 bucket."),(0,i.kt)("h2",{id:"exporting-encryption-keys"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/exporting-keys"},"Exporting encryption keys")),(0,i.kt)("p",null,"How to export the generated STRM Privacy encryption keys. Also shows\nsome interaction with a Google Cloud bucket."),(0,i.kt)("h2",{id:"grpc"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/grpc"},"gRPC")),(0,i.kt)("p",null,"Public interaction with STRM Privacy is via a ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io"},"grpc"),"\ndefinition. You don\u2019t #need## our tools to interact with it."),(0,i.kt)("h2",{id:"simple-schemas"},(0,i.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/simple-schema"},"Simple Schemas")),(0,i.kt)("p",null,"This #hands-on## session shows how to define #your own schema## and how to\nsend data with the Python driver and generated code."))}d.isMDXComponent=!0}}]);