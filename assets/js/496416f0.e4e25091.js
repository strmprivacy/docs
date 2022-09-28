"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1815],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"batch-exporter",hide_title:!0},c=void 0,s={unversionedId:"reference/cli-reference/strm/create/batch-exporter",id:"reference/cli-reference/strm/create/batch-exporter",title:"batch-exporter",description:"strm create batch-exporter",source:"@site/docs/04-reference/01-cli-reference/strm/create/batch-exporter.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/batch-exporter",permalink:"/docs/latest/reference/cli-reference/strm/create/batch-exporter",draft:!1,tags:[],version:"current",frontMatter:{title:"batch-exporter",hide_title:!0},sidebar:"docs",previous:{title:"create",permalink:"/docs/latest/reference/cli-reference/strm/create/"},next:{title:"batch-job",permalink:"/docs/latest/reference/cli-reference/strm/create/batch-job"}},i={},l=[{value:"strm create batch-exporter",id:"strm-create-batch-exporter",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-create-batch-exporter"},"strm create batch-exporter"),(0,a.kt)("p",null,"Create batch exporter"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A Batch Exporter listens to a stream and writes all events to files using a Data Connector. This happens with a regular interval."),(0,a.kt)("p",null,"Each file follows the JSON Lines format, which is one full JSON document per line."),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/reference/cli-reference/strm/create/data-connector/"},"Data Connector")," is a configuration\nentity that comprises a location (GCS bucket, AWS S3 bucket, ...) and associated credentials."),(0,a.kt)("p",null,"A Data Connector must be created ",(0,a.kt)("em",{parentName:"p"},"before")," you can create a batch exporter that uses it."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm create batch-exporter [stream-name] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --data-connector string     name of the data connector - optional if you own only one data connector\n      --export-keys               Do we want to export the keys stream\n  -h, --help                      help for batch-exporter\n      --include-existing-events   Do we want to include all existing events\n      --interval int              Interval in seconds between batches (default 60)\n      --name string               optional batch exporter name\n      --path-prefix string        path prefix on bucket\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --project string                 Project to use (defaults to context-configured project)\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/"},"strm create"),"\t - Create an entity")))}u.isMDXComponent=!0}}]);