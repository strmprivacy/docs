"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,d=f["".concat(l,".").concat(u)]||f[u]||m[u]||c;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7855:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const c={title:"create",hide_title:!0},o=void 0,i={unversionedId:"reference/cli-reference/strm/create/index",id:"reference/cli-reference/strm/create/index",title:"create",description:"strm create",source:"@site/docs/04-reference/01-cli-reference/strm/create/index.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/",permalink:"/docs/latest/reference/cli-reference/strm/create/",draft:!1,tags:[],version:"current",frontMatter:{title:"create",hide_title:!0},sidebar:"docs",previous:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/context/project"},next:{title:"batch-exporter",permalink:"/docs/latest/reference/cli-reference/strm/create/batch-exporter"}},l={},s=[{value:"strm create",id:"strm-create",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s},f="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"strm-create"},"strm create"),(0,n.kt)("p",null,"Create an entity"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for create\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/"},"strm"),"\t - STRM Privacy CLI 3.15.2"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/batch-exporter"},"strm create batch-exporter"),"\t - Create a Batch Exporter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/batch-job"},"strm create batch-job"),"\t - Create a Batch Job"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/data-connector/"},"strm create data-connector"),"\t - Create a Data Connector"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/data-contract"},"strm create data-contract"),"\t - Create a Data Contract"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/kafka-exporter"},"strm create kafka-exporter"),"\t - Create a Kafka Exporter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/kafka-user"},"strm create kafka-user"),"\t - Create a Kafka User on a Kafka Exporter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/policy"},"strm create policy"),"\t - Create a Policy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/project"},"strm create project"),"\t - Create a Project"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/purpose-mapping"},"strm create purpose-mapping"),"\t - Create a purpose mapping"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/stream"},"strm create stream"),"\t - Create a Stream")))}m.isMDXComponent=!0}}]);