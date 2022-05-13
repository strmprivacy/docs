"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7372],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||s;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7877:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={title:"get",hide_title:!0},c=void 0,l={unversionedId:"cli-reference/strm/get/index",id:"cli-reference/strm/get/index",title:"get",description:"strm get",source:"@site/docs/cli-reference/strm/get/index.md",sourceDirName:"cli-reference/strm/get",slug:"/cli-reference/strm/get/",permalink:"/docs/latest/cli-reference/strm/get/",draft:!1,tags:[],version:"current",frontMatter:{title:"get",hide_title:!0},sidebar:"docs",previous:{title:"stream",permalink:"/docs/latest/cli-reference/strm/delete/stream"},next:{title:"batch-exporter",permalink:"/docs/latest/cli-reference/strm/get/batch-exporter"}},m={},p=[{value:"strm get",id:"strm-get",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"strm-get"},"strm get"),(0,s.kt)("p",null,"Get an entity"),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help        help for get\n  -r, --recursive   Retrieve entities and their dependents\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/"},"strm"),"\t - STRM Privacy CLI 2.0.4"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/batch-exporter"},"strm get batch-exporter"),"\t - Get Batch exporter by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/batch-job"},"strm get batch-job"),"\t - Get a Batch Job by id"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/data-connector"},"strm get data-connector"),"\t - Get Data Connector by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/event-contract"},"strm get event-contract"),"\t - Get Event Contract by reference"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/installation"},"strm get installation"),"\t - Get your installation by id"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/kafka-cluster"},"strm get kafka-cluster"),"\t - Get Kafka cluster by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/kafka-exporter"},"strm get kafka-exporter"),"\t - Get Kafka exporter by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/kafka-user"},"strm get kafka-user"),"\t - Get Kafka user"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/key-stream"},"strm get key-stream"),"\t - Get key stream by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/schema"},"strm get schema"),"\t - Get schema by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/schema-code"},"strm get schema-code"),"\t - Get schema code archive by schema-ref"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/stream"},"strm get stream"),"\t - Get stream by name"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/usage"},"strm get usage"),"\t - Get Usage for a certain stream name")))}f.isMDXComponent=!0}}]);