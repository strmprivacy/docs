"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=s,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const a={title:"stream",hide_title:!0},i=void 0,o={unversionedId:"reference/cli-reference/strm/create/stream",id:"reference/cli-reference/strm/create/stream",title:"stream",description:"strm create stream",source:"@site/docs/04-reference/01-cli-reference/strm/create/stream.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/stream",permalink:"/docs/latest/reference/cli-reference/strm/create/stream",draft:!1,tags:[],version:"current",frontMatter:{title:"stream",hide_title:!0},sidebar:"docs",previous:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/create/project"},next:{title:"delete",permalink:"/docs/latest/reference/cli-reference/strm/delete/"}},c={},l=[{value:"strm create stream",id:"strm-create-stream",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"strm-create-stream"},"strm create stream"),(0,s.kt)("p",null,"Create a stream"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,'A stream is the central resource in STRM Privacy. Clients can connect to a stream to send and to receive events. A\nstream can be either an "input stream" or a "derived stream".'),(0,s.kt)("p",null,"Events are always sent to an input stream. Sending events to a derived stream is not possible. After validation and\nencryption of all PII fields, STRM Privacy sends all events to the input stream. Clients consuming from the input stream\nwill see all events, but with all PII fields encrypted."),(0,s.kt)("p",null,"Derived streams can be made on top of a input stream. A derived stream is configured with one or more consent levels and\nit only receives events with matching consent levels (see details about this matching process here). The PII fields with\nmatching consent levels are decrypted and sent to the derived stream. Clients connecting to the derived stream will only\nreceive the events on this stream."),(0,s.kt)("p",null,"Every stream has its own set of access tokens. Connecting to an input stream requires different credentials than when\nconnecting to a derived stream."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"strm create stream [name] [flags]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --consent-type string         CUMULATIVE or GRANULAR (default "CUMULATIVE")\n  -D, --derived-from string         name of stream that this stream is derived from\n      --description string          description\n  -h, --help                        help for stream\n  -L, --levels int32Slice           comma separated list of integers for derived streams (default [])\n      --mask-seed string            A seed used for masking\n  -M, --masked-fields stringArray   -M strmprivacy/example/1.3.0:sensitiveValue,consistentValue \\\n                                    -M strmprivacy/clickstream/1.0.0:sessionId\n                                    \n                                    Masks fields values in the output stream via hashing.\n                                        \n      --save                        if true, save the result in the config directory (~/.config/strmprivacy/saved-entities). (default is true) (default true)\n      --tags strings                tags\n')),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -p, --project string                 Project to use (defaults to context-configured project)\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/"},"strm create"),"\t - Create an entity")))}m.isMDXComponent=!0}}]);