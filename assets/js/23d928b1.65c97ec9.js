"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3150],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,k=f["".concat(l,".").concat(d)]||f[d]||p[d]||s;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1009:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),i=["components"],o={title:"kafka-users",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/list/kafka-users",id:"cli-reference/list/kafka-users",title:"kafka-users",description:"strm list kafka-users",source:"@site/docs/cli-reference/list/kafka-users.md",sourceDirName:"cli-reference/list",slug:"/cli-reference/list/kafka-users",permalink:"/docs/latest/cli-reference/list/kafka-users",tags:[],version:"current",frontMatter:{title:"kafka-users",hide_title:!0},sidebar:"docs",previous:{title:"kafka-exporters",permalink:"/docs/latest/cli-reference/list/kafka-exporters"},next:{title:"key-streams",permalink:"/docs/latest/cli-reference/list/key-streams"}},u=[{value:"strm list kafka-users",id:"strm-list-kafka-users",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"strm-list-kafka-users"},"strm list kafka-users"),(0,s.kt)("p",null,"List Kafka users"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"A Kafka User is a user on a Kafka Exporter, that can be used for authentication when connecting to a Kafka Exporter. By\ndefault, every Kafka Exporter gets one Kafka User upon creation, but these can be added/removed later."),(0,s.kt)("p",null,"In the current data model, the user does not have a assignable name; it is assigned upon creation. It\u2019s still very low\nlevel. See the end of this page for an example."),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"strm list kafka-users [kafka-exporter-name] [flags]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help   help for kafka-users\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/cli-reference/strm/list/index.md"},"strm list"),"\t - List entities")))}f.isMDXComponent=!0}}]);