"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6910],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,k=u["".concat(c,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(k,s(s({ref:t},p),{},{components:r})):n.createElement(k,s({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"kafka-exporter",hide_title:!0},s=void 0,i={unversionedId:"reference/cli-reference/strm/delete/kafka-exporter",id:"reference/cli-reference/strm/delete/kafka-exporter",title:"kafka-exporter",description:"strm delete kafka-exporter",source:"@site/docs/04-reference/01-cli-reference/strm/delete/kafka-exporter.md",sourceDirName:"04-reference/01-cli-reference/strm/delete",slug:"/reference/cli-reference/strm/delete/kafka-exporter",permalink:"/docs/latest/reference/cli-reference/strm/delete/kafka-exporter",draft:!1,tags:[],version:"current",frontMatter:{title:"kafka-exporter",hide_title:!0},sidebar:"docs",previous:{title:"event-contract",permalink:"/docs/latest/reference/cli-reference/strm/delete/event-contract"},next:{title:"kafka-user",permalink:"/docs/latest/reference/cli-reference/strm/delete/kafka-user"}},c={},l=[{value:"strm delete kafka-exporter",id:"strm-delete-kafka-exporter",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-delete-kafka-exporter"},"strm delete kafka-exporter"),(0,a.kt)("p",null,"Delete a Kafka exporter"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A Kafka Exporter, like a Batch Exporter, can be used to export events from Stream Machine to somewhere outside of STRM\nPrivacy. But in contrast to a Batch Exporter, a Kafka Exporter does not work in batches, but processes the events in\nreal time."),(0,a.kt)("p",null,"After creation, the CLI exposes the authentication information that is needed to connect to it with your own Kafka\nConsumer."),(0,a.kt)("p",null,"In case your data are Avro encoded, the Kafka exporter provides a ",(0,a.kt)("em",{parentName:"p"},"json format")," conversion of your data for easier\ndownstream processing. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/receiving-data/exporting-kafka"},"exporting Kafka")," page for how to consume from the\nexporter."),(0,a.kt)("p",null,"If a kafka-exporter has dependents (like Kafka users), you can use\nthe 'recursive' option to get rid of those also.\nReturns everything that was deleted."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm delete kafka-exporter [name] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help   help for kafka-exporter\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --project string                 Project to use (defaults to context-configured project)\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/"},"strm delete"),"\t - Delete an entity")))}f.isMDXComponent=!0}}]);