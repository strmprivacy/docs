"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3899],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Batch vs Stream processing",c={unversionedId:"concepts/batch-vs-streaming",id:"version-1.0.0/concepts/batch-vs-streaming",title:"Batch vs Stream processing",description:"Batch processing, as the name implies, works by processing data in",source:"@site/versioned_docs/version-1.0.0/concepts/batch-vs-streaming.md",sourceDirName:"concepts",slug:"/concepts/batch-vs-streaming",permalink:"/docs/1.0.0/concepts/batch-vs-streaming",tags:[],version:"1.0.0",frontMatter:{},sidebar:"docs",previous:{title:"Core",permalink:"/docs/1.0.0/concepts/core-concepts"},next:{title:"Batch Jobs",permalink:"/docs/1.0.0/concepts/batch-jobs"}},p=[{value:"Batch processing by STRM",id:"batch-processing-by-strm",children:[],level:2},{value:"Stream processing by STRM",id:"stream-processing-by-strm",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"batch-vs-stream-processing"},"Batch vs Stream processing"),(0,o.kt)("p",null,"Batch processing, as the name implies, works by processing data in\n(typically large) batches, often as part of a batch processing pipeline.\nVery often these run at designated times, like some time during the\nnight. While easy to reason about and relatively simple to implement,\nthis automatically implies that there will be (potentially big) delays.\nThe opposite is stream processing, where every piece of data (which we\ncall an event) is processed directly, minimizing delays."),(0,o.kt)("p",null,"Both approaches have upsides and downsides and these are also dependent\non the context. If the context is an existing, maybe complex, batch\nflow, it often makes little sense to add a streaming component, unless\nthis is a first step towards a fully streaming process."),(0,o.kt)("p",null,"STRM provides Batch as well as Streaming support on both the input and\noutput side, to support fully streamed pipelines, batch pipelines and a\nhybrid where data is streamed to STRM and batched downstream."),(0,o.kt)("p",null,"See the table below for an overview:"),(0,o.kt)("table",{style:{width:"100%",display:"table"}},(0,o.kt)("colgroup",null,(0,o.kt)("col",{style:{width:"33%"}}),(0,o.kt)("col",{style:{width:"33%"}}),(0,o.kt)("col",{style:{width:"33%"}})),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("strong",null))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Streaming")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Batch"))),(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("strong",null,"Input"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"(Java/Nodejs/Python) drivers")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Batch Jobs"))),(0,o.kt)("tr",{class:"odd"},(0,o.kt)("td",null,(0,o.kt)("p",null,(0,o.kt)("strong",null,"Output"))),(0,o.kt)("td",null,(0,o.kt)("p",null,"Kafka Exporter")),(0,o.kt)("td",null,(0,o.kt)("p",null,"Batch Exporter, Batch Jobs"))))),(0,o.kt)("p",null,"Currently, we don\u2019t have a way to have batch input combined with\nstreaming output, but we\u2019re planning to have this in the future."),(0,o.kt)("h2",{id:"batch-processing-by-strm"},"Batch processing by STRM"),(0,o.kt)("p",null,"Batch Processing is currently supported by Batch Jobs. A Batch Job has\nthe same features as streams:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It encrypts data, based on what is declared PII.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It can decrypt data, based on consent.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It can mask data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It can export data to a cloud bucket.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It can export the generated encryption keys to a cloud bucket."))),(0,o.kt)("h2",{id:"stream-processing-by-strm"},"Stream processing by STRM"),(0,o.kt)("p",null,"Historically, STRM has been all about privacy-safe streaming data. This\ncan be seen in the concepts of an input stream and derived streams.\nEvents sent to STRM (typically using one of our drivers) are encrypted\nand the data is put in a Kafka topic. This is then immediately processed\n(ignoring ",(0,o.kt)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/installation/configuration/producer-configs.html#producerconfigs_batch.size"},"Kafka\nBatching"),",\nwhich we use as an optimization) and the data (encrypted or derived\ndata) is available for consumers in near-real-time."),(0,o.kt)("p",null,"For streaming consumption of data, we currently provide a way to connect\na Kafka Consumer to our streams, which allows downstream streaming\nprocessing. We are planning for more integrations."))}d.isMDXComponent=!0}}]);