"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3697],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},s="Quickstart Streaming",o={unversionedId:"quickstart/index-streaming",id:"quickstart/index-streaming",title:"Quickstart Streaming",description:"Managing streams with the Command Line Interface",source:"@site/docs/quickstart/index-streaming.md",sourceDirName:"quickstart",slug:"/quickstart/index-streaming",permalink:"/docs/latest/quickstart/index-streaming",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Exporting Keys",permalink:"/docs/latest/quickstart/exporting-keys"},next:{title:"Creating Streams with the Command Line Interface",permalink:"/docs/latest/quickstart/creating-streams"}},c={},l=[{value:"Managing streams with the Command Line Interface",id:"managing-streams-with-the-command-line-interface",level:2},{value:"Using the web-socket endpoint",id:"using-the-web-socket-endpoint",level:2},{value:"Sending events by hand",id:"sending-events-by-hand",level:2},{value:"Examples in multiple programming languages",id:"examples-in-multiple-programming-languages",level:2},{value:"Consuming from Kafka",id:"consuming-from-kafka",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quickstart-streaming"},"Quickstart Streaming"),(0,a.kt)("h2",{id:"managing-streams-with-the-command-line-interface"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/creating-streams"},"Managing streams with the Command Line Interface")),(0,a.kt)("p",null,"How to create, list and delete input streams and derived streams."),(0,a.kt)("h2",{id:"using-the-web-socket-endpoint"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/listen-web-socket"},"Using the web-socket endpoint")),(0,a.kt)("p",null,"A web-socket endpoint where you can see a json version of your events."),(0,a.kt)("h2",{id:"sending-events-by-hand"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/sending-curl"},"Sending events by hand")),(0,a.kt)("p",null,"The low level details of interacting with STRM Privacy, #without any\nStream Machine specific software#."),(0,a.kt)("h2",{id:"examples-in-multiple-programming-languages"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/full-example"},"Examples in multiple programming languages")),(0,a.kt)("p",null,"Quick #getting started## examples. If you have the software environment\nset up, you should be sending simulated events in a minute."),(0,a.kt)("h2",{id:"consuming-from-kafka"},(0,a.kt)("a",{parentName:"h2",href:"/docs/latest/quickstart/exporting-kafka"},"Consuming from Kafka")),(0,a.kt)("p",null,"Realtime exporting to a Kafka cluster, and a consumer in Python."))}m.isMDXComponent=!0}}]);