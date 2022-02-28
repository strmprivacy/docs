"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[692],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5519:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),s=r(3366),i=(r(7294),r(3905)),a=["components"],o={title:"streams",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/strm/list/streams",id:"cli-reference/strm/list/streams",title:"streams",description:"strm list streams",source:"@site/docs/cli-reference/strm/list/streams.md",sourceDirName:"cli-reference/strm/list",slug:"/cli-reference/strm/list/streams",permalink:"/docs/latest/cli-reference/strm/list/streams",tags:[],version:"current",frontMatter:{title:"streams",hide_title:!0},sidebar:"docs",previous:{title:"sinks",permalink:"/docs/latest/cli-reference/strm/list/sinks"},next:{title:"listen",permalink:"/docs/latest/cli-reference/strm/listen/"}},p={},u=[{value:"strm list streams",id:"strm-list-streams",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],m={toc:u};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strm-list-streams"},"strm list streams"),(0,i.kt)("p",null,"List streams"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,'A stream is the central resource in STRM Privacy. Clients can connect to a stream to send and to receive events. A\nstream can be either an "input stream" or a "derived stream".'),(0,i.kt)("p",null,"Events are always sent to an input stream. Sending events to a derived stream is not possible. After validation and\nencryption of all PII fields, STRM Privacy sends all events to the input stream. Clients consuming from the input stream\nwill see all events, but with all PII fields encrypted."),(0,i.kt)("p",null,"Derived streams can be made on top of a input stream. A derived stream is configured with one or more consent levels and\nit only receives events with matching consent levels (see details about this matching process here). The PII fields with\nmatching consent levels are decrypted and sent to the derived stream. Clients connecting to the derived stream will only\nreceive the events on this stream."),(0,i.kt)("p",null,"Every stream has its own set of access tokens. Connecting to an input stream requires different credentials than when\nconnecting to a derived stream."),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"strm list streams [flags]\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  -h, --help   help for streams\n")),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/list/"},"strm list"),"\t - List entities")))}d.isMDXComponent=!0}}]);