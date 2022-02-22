"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5787],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2648:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"stream",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/delete/stream",id:"cli-reference/delete/stream",title:"stream",description:"strm delete stream",source:"@site/docs/cli-reference/delete/stream.md",sourceDirName:"cli-reference/delete",slug:"/cli-reference/delete/stream",permalink:"/docs/latest/cli-reference/delete/stream",tags:[],version:"current",frontMatter:{title:"stream",hide_title:!0},sidebar:"docs",previous:{title:"sink",permalink:"/docs/latest/cli-reference/delete/sink"},next:{title:"get",permalink:"/docs/latest/cli-reference/get/"}},d=[{value:"strm delete stream",id:"strm-delete-stream",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strm-delete-stream"},"strm delete stream"),(0,i.kt)("p",null,"Delete one or more streams"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,'A stream is the central resource in STRM Privacy. Clients can connect to a stream to send and to receive events. A\nstream can be either an "input stream" or a "derived stream".'),(0,i.kt)("p",null,"Events are always sent to an input stream. Sending events to a derived stream is not possible. After validation and\nencryption of all PII fields, STRM Privacy sends all events to the input stream. Clients consuming from the input stream\nwill see all events, but with all PII fields encrypted."),(0,i.kt)("p",null,"Derived streams can be made on top of a input stream. A derived stream is configured with one or more consent levels and\nit only receives events with matching consent levels (see details about this matching process here). The PII fields with\nmatching consent levels are decrypted and sent to the derived stream. Clients connecting to the derived stream will only\nreceive the events on this stream."),(0,i.kt)("p",null,"Every stream has its own set of access tokens. Connecting to an input stream requires different credentials than when\nconnecting to a derived stream."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"strm delete stream [name ...] [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for stream\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/cli-reference/strm/delete/index.md"},"strm delete"),"\t - Delete an entity")))}u.isMDXComponent=!0}}]);