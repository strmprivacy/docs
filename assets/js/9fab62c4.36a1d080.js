"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8036],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},s=Object.keys(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7687:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),s=(n(7294),n(3905)),o=["components"],i={},l="Batch vs Stream processing",c={unversionedId:"concepts/batch-vs-streaming",id:"concepts/batch-vs-streaming",title:"Batch vs Stream processing",description:"Batch processing, as the name implies, works by processing data in",source:"@site/docs/concepts/batch-vs-streaming.md",sourceDirName:"concepts",slug:"/concepts/batch-vs-streaming",permalink:"/latest/concepts/batch-vs-streaming",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Core",permalink:"/latest/concepts/core-concepts"},next:{title:"Batch Jobs",permalink:"/latest/concepts/batch-jobs"}},p=[{value:"Batch processing by STRM",id:"batch-processing-by-strm",children:[],level:2},{value:"Stream processing by STRM",id:"stream-processing-by-strm",children:[],level:2}],u={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"batch-vs-stream-processing"},"Batch vs Stream processing"),(0,s.kt)("p",null,"Batch processing, as the name implies, works by processing data in\n(typically large) batches, often as part of a batch processing pipeline.\nVery often these run at designated times, like some time during the\nnight. While easy to reason about and relatively simple to implement,\nthis automatically implies that there will be (potentially big) delays.\nThe opposite is stream processing, where every piece of data (which we\ncall an event) is processed directly, minimizing delays."),(0,s.kt)("p",null,"Both approaches have upsides and downsides and these are also dependent\non the context. If the context is an existing, maybe complex, batch\nflow, it often makes little sense to add a streaming component, unless\nthis is a first step towards a fully streaming process."),(0,s.kt)("p",null,"STRM provides Batch as well as Streaming support on both the input and\noutput side, to support fully streamed pipelines, batch pipelines and a\nhybrid where data is streamed to STRM and batched downstream."),(0,s.kt)("p",null,"See the table below for an overview:"),(0,s.kt)("table",{style:{width:"100%",display:"table"}},(0,s.kt)("colgroup",null,(0,s.kt)("col",{style:{width:"33%"}}),(0,s.kt)("col",{style:{width:"33%"}}),(0,s.kt)("col",{style:{width:"33%"}})),(0,s.kt)("tbody",null,(0,s.kt)("tr",null,(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Streaming")),(0,s.kt)("td",null,(0,s.kt)("p",null,"Batch"))),(0,s.kt)("tr",{class:"odd"},(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"Input"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"(Java/Nodejs/Python) drivers")),(0,s.kt)("td",null,(0,s.kt)("p",null,"Batch Jobs"))),(0,s.kt)("tr",{class:"odd"},(0,s.kt)("td",null,(0,s.kt)("p",null,(0,s.kt)("strong",null,"Output"))),(0,s.kt)("td",null,(0,s.kt)("p",null,"Kafka Exporter")),(0,s.kt)("td",null,(0,s.kt)("p",null,"Batch Exporter, Batch Jobs"))))),(0,s.kt)("p",null,"Currently, we don\u2019t have a way to have batch input combined with\nstreaming output, but we\u2019re planning to have this in the future."),(0,s.kt)("h2",{id:"batch-processing-by-strm"},"Batch processing by STRM"),(0,s.kt)("p",null,"Batch Processing is currently supported by Batch Jobs. A Batch Job has\nthe same features as streams:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It encrypts data, based on what is declared PII.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It can decrypt data, based on consent.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It can mask data.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It can export data to a cloud bucket.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"It can export the generated encryption keys to a cloud bucket."))),(0,s.kt)("h2",{id:"stream-processing-by-strm"},"Stream processing by STRM"),(0,s.kt)("p",null,"Historically, STRM has been all about privacy-safe streaming data. This\ncan be seen in the concepts of an input stream and derived streams.\nEvents sent to STRM (typically using one of our drivers) are encrypted\nand the data is put in a Kafka topic. This is then immediately processed\n(ignoring ",(0,s.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_batch.size"},"Kafka\nBatching"),",\nwhich we use as an optimization) and the data (encrypted or derived\ndata) is available for consumers in near-real-time."),(0,s.kt)("p",null,"For streaming consumption of data, we currently provide a way to connect\na Kafka Consumer to our streams, which allows downstream streaming\nprocessing. We are planning for more integrations."))}d.isMDXComponent=!0}}]);