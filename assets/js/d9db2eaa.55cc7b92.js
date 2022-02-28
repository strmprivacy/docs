"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1336],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Definitions",hide_table_of_contents:!1},s="Commonly used definitions",l={unversionedId:"overview/definitions",id:"overview/definitions",title:"Definitions",description:"GDPR defines an official set of definitions, which you can find on the",source:"@site/docs/overview/definitions.md",sourceDirName:"overview",slug:"/overview/definitions",permalink:"/docs/latest/overview/definitions",tags:[],version:"current",frontMatter:{title:"Definitions",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"High Level Architecture",permalink:"/docs/latest/overview/hla"},next:{title:"STRM Privacy concepts",permalink:"/docs/latest/concepts/"}},p={},u=[],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"commonly-used-definitions"},"Commonly used definitions"),(0,a.kt)("p",null,"GDPR defines an official set of definitions, which you can find on the\n",(0,a.kt)("a",{parentName:"p",href:"https://gdpr-info.eu/art-4-gdpr/"},"official GDPR page"),"."),(0,a.kt)("p",null,"Below you can find our short summary of the definitions used by STRM\nPrivacy."),(0,a.kt)("p",null,"Stream",(0,a.kt)("br",{parentName:"p"}),"\n","An input or output continuous collection of data."),(0,a.kt)("p",null,"Schema",(0,a.kt)("br",{parentName:"p"}),"\n","Structure of the data that is sent to STRM Privacy. Also named\n",(0,a.kt)("em",{parentName:"p"},"serialization schema")," See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/concepts/schemas-and-contracts"},"schemas and\ncontracts")," for details."),(0,a.kt)("p",null,"Event Contract",(0,a.kt)("br",{parentName:"p"}),"\n","A contract, that contains which fields are ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_data"},"Personally Identifiable\nInformation (PII)"),", which\nvalidations should be applied to events, etc. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/concepts/schemas-and-contracts"},"schemas and\ncontracts")," for details."),(0,a.kt)("p",null,"Consent level",(0,a.kt)("br",{parentName:"p"}),"\n","The level of consent, given by the data owner (your customer), to use\ncertain information (typically PII). This is used both in the events, as\nwell as in the configuration of a decrypted output stream."),(0,a.kt)("p",null,"Encryption",(0,a.kt)("br",{parentName:"p"}),"\n","Data that is scrambled and cannot be read without the encryption key."),(0,a.kt)("p",null,"Exporter",(0,a.kt)("br",{parentName:"p"}),"\n","STRM Privacy component that sends batches of events to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Sink"),"."),(0,a.kt)("p",null,"Personally Identifiable Information (PII)",(0,a.kt)("br",{parentName:"p"}),"\n","Information that can be used to identify a person, directly (e.g. SSN,\nname) or indirectly (e.g. IP address), or belongs to an identifiable\nperson (e.g. gender, interests)."),(0,a.kt)("p",null,"Serialization Format",(0,a.kt)("br",{parentName:"p"}),"\n","Currently, we support ",(0,a.kt)("inlineCode",{parentName:"p"},"Avro Binary"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Avro JSON")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," serialized\ndata. This defines the way that an event is converted to and from bytes,\nso that they can be transported and/or stored."),(0,a.kt)("p",null,"Sink",(0,a.kt)("br",{parentName:"p"}),"\n","STRM Privacy component that connects to a file storage. Currently, AWS\nS3 and Google Cloud Storage buckets are supported."))}f.isMDXComponent=!0}}]);