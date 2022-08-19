"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8715],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,s=function(t,e){if(null==t)return{};var r,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(s[r]=t[r]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(s[r]=t[r])}return s}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,s=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),f=c(r),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:e},p),{},{components:r})):n.createElement(m,a({ref:e},p))}));function d(t,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=r.length,a=new Array(i);a[0]=f;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3447:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),s=(r(7294),r(3905));const i={title:"installations",hide_title:!0},a=void 0,o={unversionedId:"cli-reference/strm/list/installations",id:"cli-reference/strm/list/installations",title:"installations",description:"strm list installations",source:"@site/docs/cli-reference/strm/list/installations.md",sourceDirName:"cli-reference/strm/list",slug:"/cli-reference/strm/list/installations",permalink:"/docs/latest/cli-reference/strm/list/installations",draft:!1,tags:[],version:"current",frontMatter:{title:"installations",hide_title:!0},sidebar:"docs",previous:{title:"event-contracts",permalink:"/docs/latest/cli-reference/strm/list/event-contracts"},next:{title:"kafka-clusters",permalink:"/docs/latest/cli-reference/strm/list/kafka-clusters"}},l={},c=[{value:"strm list installations",id:"strm-list-installations",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:c};function u(t){let{components:e,...r}=t;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"strm-list-installations"},"strm list installations"),(0,s.kt)("p",null,"List your installations"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"strm list installations [flags]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help   help for installations\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --project string                 Project to use (defaults to context-configured project)\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/list/"},"strm list"),"\t - List entities")))}u.isMDXComponent=!0}}]);