"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1991],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||c;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8929:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var a=r(7462),n=r(3366),c=(r(7294),r(3905)),o=["components"],i={title:"create",hide_title:!0},s=void 0,l={unversionedId:"cli-reference/strm/create/index",id:"cli-reference/strm/create/index",title:"create",description:"strm create",source:"@site/docs/cli-reference/strm/create/index.md",sourceDirName:"cli-reference/strm/create",slug:"/cli-reference/strm/create/",permalink:"/docs/latest/cli-reference/strm/create/",tags:[],version:"current",frontMatter:{title:"create",hide_title:!0},sidebar:"docs",previous:{title:"info",permalink:"/docs/latest/cli-reference/strm/context/info"},next:{title:"batch-exporter",permalink:"/docs/latest/cli-reference/strm/create/batch-exporter"}},p=[{value:"strm create",id:"strm-create",children:[{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],m={toc:p};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,c.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"strm-create"},"strm create"),(0,c.kt)("p",null,"Create an entity"),(0,c.kt)("h3",{id:"options"},"Options"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},"  -h, --help   help for create\n")),(0,c.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,c.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/"},"strm"),"\t - STRM Privacy CLI 1.21.1"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/batch-exporter"},"strm create batch-exporter"),"\t - Create batch exporter"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/batch-job"},"strm create batch-job"),"\t - Create a Batch Job"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/event-contract"},"strm create event-contract"),"\t - Create an event-contract with reference 'handle/name/version'"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/kafka-exporter"},"strm create kafka-exporter"),"\t - Create a Kafka exporter"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/kafka-user"},"strm create kafka-user"),"\t - Create a Kafka user on a Kafka exporter"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/schema"},"strm create schema"),"\t - create a schema"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/sink"},"strm create sink"),"\t - Create sink"),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/create/stream"},"strm create stream"),"\t - Create a stream")))}u.isMDXComponent=!0}}]);