"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5689],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(n),u=c,m=h["".concat(i,".").concat(u)]||h[u]||d[u]||a;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function u(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,s=new Array(a);s[0]=h;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8684:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var r=n(7462),c=n(3366),a=(n(7294),n(3905)),s=["components"],o={title:"STRM Privacy concepts",hide_table_of_contents:!1,sidebar_position:2},i=void 0,l={unversionedId:"concepts/index",id:"concepts/index",title:"STRM Privacy concepts",description:"Batch vs Stream processing",source:"@site/docs/concepts/index.md",sourceDirName:"concepts",slug:"/concepts/",permalink:"/docs/latest/concepts/",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"STRM Privacy concepts",hide_table_of_contents:!1,sidebar_position:2},sidebar:"docs",previous:{title:"Definitions",permalink:"/docs/latest/overview/definitions"},next:{title:"Core",permalink:"/docs/latest/concepts/core-concepts"}},p=[{value:"Batch vs Stream processing",id:"batch-vs-stream-processing",children:[],level:2},{value:"Batch Job Concepts",id:"batch-job-concepts",children:[],level:2},{value:"Core concepts",id:"core-concepts",children:[],level:2},{value:"Schemas and Contracts",id:"schemas-and-contracts",children:[],level:2},{value:"the strmMeta section",id:"the-strmmeta-section",children:[],level:2},{value:"Masked Fields",id:"masked-fields",children:[],level:2},{value:"Simple Schemas",id:"simple-schemas",children:[],level:2}],d={toc:p};function h(e){var t=e.components,n=(0,c.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"batch-vs-stream-processing"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/batch-vs-streaming"},"Batch vs Stream processing")),(0,a.kt)("p",null,"What is batch processing and stream processing and how dow we support\nboth approaches?"),(0,a.kt)("h2",{id:"batch-job-concepts"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/batch-jobs"},"Batch Job Concepts")),(0,a.kt)("p",null,"What is an STRM Batch Job?"),(0,a.kt)("h2",{id:"core-concepts"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/core-concepts"},"Core concepts")),(0,a.kt)("p",null,"Core concepts, what is STRM Privacy, what problems are we solving?"),(0,a.kt)("h2",{id:"schemas-and-contracts"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/schemas-and-contracts"},"Schemas and Contracts")),(0,a.kt)("p",null,"The essence of well defined GRPC compliant event data."),(0,a.kt)("h2",{id:"the-strmmeta-section"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/strm-meta"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"strmMeta")," section")),(0,a.kt)("p",null,"Each event schema has a STRM Privacy specific section in it. This page\ndescribes the why, what and how."),(0,a.kt)("h2",{id:"masked-fields"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/masked-fields"},"Masked Fields")),(0,a.kt)("p",null,"Masking field values so their plain text value is never visible. Useful\nfor sharing data with third parties, and to prevent sensitive values\nfrom being visible within the company."),(0,a.kt)("h2",{id:"simple-schemas"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/concepts/simple-schemas"},"Simple Schemas")),(0,a.kt)("p",null,"Simple Schemas are an STRM Privacy specific format that can be used if\nyou don\u2019t need to use all the complexities of Avro schemas. A Simple\nSchema is ",(0,a.kt)("em",{parentName:"p"},"translated")," to Avro upon creation, and that Avro schema is\nused in the engine."))}h.isMDXComponent=!0}}]);