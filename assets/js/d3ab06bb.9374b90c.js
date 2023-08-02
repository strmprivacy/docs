"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3851],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,u=d["".concat(i,".").concat(f)]||d[f]||m[f]||l;return r?n.createElement(u,o(o({ref:t},p),{},{components:r})):n.createElement(u,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},662:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={title:"delete",hide_title:!0},o=void 0,c={unversionedId:"reference/cli-reference/strm/delete/index",id:"reference/cli-reference/strm/delete/index",title:"delete",description:"strm delete",source:"@site/docs/04-reference/01-cli-reference/strm/delete/index.md",sourceDirName:"04-reference/01-cli-reference/strm/delete",slug:"/reference/cli-reference/strm/delete/",permalink:"/docs/latest/reference/cli-reference/strm/delete/",draft:!1,tags:[],version:"current",frontMatter:{title:"delete",hide_title:!0},sidebar:"docs",previous:{title:"stream",permalink:"/docs/latest/reference/cli-reference/strm/create/stream"},next:{title:"batch-exporter",permalink:"/docs/latest/reference/cli-reference/strm/delete/batch-exporter"}},i={},s=[{value:"strm delete",id:"strm-delete",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s},d="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-delete"},"strm delete"),(0,a.kt)("p",null,"Delete an entity"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -h, --help        help for delete\n  -r, --recursive   Retrieve entities and their dependents\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/"},"strm"),"\t - STRM Privacy CLI 3.15.2"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/batch-exporter"},"strm delete batch-exporter"),"\t - Delete one or more Batch Exporters by name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/batch-job"},"strm delete batch-job"),"\t - Delete one or more Batch Jobs by id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/data-connector"},"strm delete data-connector"),"\t - Delete one or more Data Connectors by name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/data-contract"},"strm delete data-contract"),"\t - Delete Data Contract by reference"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/data-subjects"},"strm delete data-subjects"),"\t - Delete Data Subjects"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/kafka-exporter"},"strm delete kafka-exporter"),"\t - Delete a Kafka Exporter"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/kafka-user"},"strm delete kafka-user"),"\t - Delete one or more Kafka Users"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/policy"},"strm delete policy"),"\t - Delete Policy by name or id"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/project"},"strm delete project"),"\t - Delete a project and all associated resources"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/stream"},"strm delete stream"),"\t - Delete one or more Streams")))}m.isMDXComponent=!0}}]);