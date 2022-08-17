"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8036],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),c=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||s;return n?a.createElement(h,o(o({ref:e},p),{},{components:n})):a.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7687:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={},o="Batch vs Stream processing",l={unversionedId:"concepts/batch-vs-streaming",id:"concepts/batch-vs-streaming",title:"Batch vs Stream processing",description:"Batch processing, as the name implies, works by processing data in",source:"@site/docs/concepts/batch-vs-streaming.md",sourceDirName:"concepts",slug:"/concepts/batch-vs-streaming",permalink:"/docs/latest/concepts/batch-vs-streaming",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Core",permalink:"/docs/latest/concepts/core-concepts"},next:{title:"Batch Jobs",permalink:"/docs/latest/concepts/batch-jobs"}},i={},c=[{value:"Batch processing by STRM",id:"batch-processing-by-strm",level:2},{value:"Stream processing by STRM",id:"stream-processing-by-strm",level:2}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"batch-vs-stream-processing"},"Batch vs Stream processing"),(0,r.kt)("p",null,"Batch processing, as the name implies, works by processing data in\n(typically large) batches, often as part of a batch processing pipeline.\nVery often these run at designated times, like some time during the\nnight. While easy to reason about and relatively simple to implement,\nthis automatically implies that there will be (potentially big) delays.\nThe opposite is stream processing, where every piece of data (which we\ncall an event) is processed directly, minimizing delays."),(0,r.kt)("p",null,"Both approaches have upsides and downsides and these are also dependent\non the context. If the context is an existing, maybe complex, batch\nflow, it often makes little sense to add a streaming component, unless\nthis is a first step towards a fully streaming process."),(0,r.kt)("p",null,"STRM provides Batch as well as Streaming support on both the input and\noutput side, to support fully streamed pipelines, batch pipelines and a\nhybrid where data is streamed to STRM and batched downstream."),(0,r.kt)("p",null,"See the table below for an overview:"),(0,r.kt)("table",{style:{width:"100%",display:"table"}},(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:"33%"}}),(0,r.kt)("col",{style:{width:"33%"}}),(0,r.kt)("col",{style:{width:"33%"}})),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null))),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"Streaming"))),(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"Batch")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"Input"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"(Java/Nodejs/Python) drivers")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Batch Jobs"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,(0,r.kt)("strong",null,"Output"))),(0,r.kt)("td",null,(0,r.kt)("p",null,"Kafka Exporter")),(0,r.kt)("td",null,(0,r.kt)("p",null,"Batch Exporter, Batch Jobs"))))),(0,r.kt)("p",null,"Currently, we don\u2019t have a way to have batch input combined with\nstreaming output, but we\u2019re planning to have this in the future."),(0,r.kt)("h2",{id:"batch-processing-by-strm"},"Batch processing by STRM"),(0,r.kt)("p",null,"Batch Processing is currently supported by Batch Jobs. A Batch Job has\nthe same features as streams:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It encrypts data, based on what is declared PII.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can decrypt data, based on consent.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can mask data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can export data to a cloud bucket.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"It can export the generated encryption keys to a cloud bucket."))),(0,r.kt)("h2",{id:"stream-processing-by-strm"},"Stream processing by STRM"),(0,r.kt)("p",null,"Historically, STRM has been all about privacy-safe streaming data. This\ncan be seen in the concepts of an input stream and derived streams.\nEvents sent to STRM (typically using one of our drivers) are encrypted\nand the data is put in a Kafka topic. This is then immediately processed\n(ignoring ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_batch.size"},"Kafka\nBatching"),",\nwhich we use as an optimization) and the data (encrypted or derived\ndata) is available for consumers in near-real-time."),(0,r.kt)("p",null,"For streaming consumption of data, we currently provide a way to connect\na Kafka Consumer to our streams, which allows downstream streaming\nprocessing. We are planning for more integrations."))}u.isMDXComponent=!0}}]);