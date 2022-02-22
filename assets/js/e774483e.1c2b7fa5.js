"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2003],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,k=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},930:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"kafka-exporter",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/strm/delete/kafka-exporter",id:"cli-reference/strm/delete/kafka-exporter",title:"kafka-exporter",description:"strm delete kafka-exporter",source:"@site/docs/cli-reference/strm/delete/kafka-exporter.md",sourceDirName:"cli-reference/strm/delete",slug:"/cli-reference/strm/delete/kafka-exporter",permalink:"/docs/latest/cli-reference/strm/delete/kafka-exporter",tags:[],version:"current",frontMatter:{title:"kafka-exporter",hide_title:!0},sidebar:"docs",previous:{title:"batch-job",permalink:"/docs/latest/cli-reference/strm/delete/batch-job"},next:{title:"kafka-user",permalink:"/docs/latest/cli-reference/strm/delete/kafka-user"}},p=[{value:"strm delete kafka-exporter",id:"strm-delete-kafka-exporter",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-delete-kafka-exporter"},"strm delete kafka-exporter"),(0,o.kt)("p",null,"Delete a Kafka exporter"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"A Kafka Exporter, like a Batch Exporter, can be used to export events from Stream Machine to somewhere outside of STRM\nPrivacy. But in contrast to a Batch Exporter, a Kafka Exporter does not work in batches, but processes the events in\nreal time."),(0,o.kt)("p",null,"After creation, the CLI exposes the authentication information that is needed to connect to it with your own Kafka\nConsumer."),(0,o.kt)("p",null,"In case your data are Avro encoded, the Kafka exporter provides a ",(0,o.kt)("em",{parentName:"p"},"json format")," conversion of your data for easier\ndownstream processing. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-kafka"},"exporting Kafka")," page for how to consume from the\nexporter."),(0,o.kt)("p",null,"If a kafka-exporter has dependents (like Kafka users), you can use\nthe 'recursive' option to get rid of those also.\nReturns everything that was deleted."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm delete kafka-exporter [name] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for kafka-exporter\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/delete/"},"strm delete"),"\t - Delete an entity")))}f.isMDXComponent=!0}}]);