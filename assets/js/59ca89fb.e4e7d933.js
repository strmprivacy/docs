"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1781],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=i,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={title:"policy",hide_title:!0},a=void 0,l={unversionedId:"reference/cli-reference/strm/create/policy",id:"reference/cli-reference/strm/create/policy",title:"policy",description:"strm create policy",source:"@site/docs/04-reference/01-cli-reference/strm/create/policy.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/policy",permalink:"/docs/latest/reference/cli-reference/strm/create/policy",draft:!1,tags:[],version:"current",frontMatter:{title:"policy",hide_title:!0},sidebar:"docs",previous:{title:"kafka-user",permalink:"/docs/latest/reference/cli-reference/strm/create/kafka-user"},next:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/create/project"}},c={},s=[{value:"strm create policy",id:"strm-create-policy",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"strm-create-policy"},"strm create policy"),(0,i.kt)("p",null,"Create a Policy"),(0,i.kt)("h3",{id:"synopsis"},"Synopsis"),(0,i.kt)("p",null,"Create a Policy"),(0,i.kt)("p",null,"A policy has the following attributes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"name: the name of a policy. This must be unique within one organization."),(0,i.kt)("li",{parentName:"ul"},"description: a description of the policy; what sort of data pipelines\nwould be subject to this policy?"),(0,i.kt)("li",{parentName:"ul"},"retention: the number of days that encryption keys created under this\npolicy should be kept. This might be a minimum or a maximum..."),(0,i.kt)("li",{parentName:"ul"},"legal grounds: a legal text or ruling that identifies why the organization\ncreated this policy"),(0,i.kt)("li",{parentName:"ul"},"state: draft, active or archived. Policies can only be used in pipelines\nwhen they're in active state. They can still be modified while in draft.\nDeletion of policies is not allowed for active policies.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"strm create policy [flags]\n")),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'strm create policy --name="1 year" --retention 365 --description "1 year for marketing"\n')),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --description string     description of the policy\n  -h, --help                   help for policy\n      --legal-grounds string   legal grounds of this policy\n      --name string            name\n  -o, --output string          output format [plain, json, json-raw] (default "plain")\n      --retention int32        retention in days of this policy (default 365)\n')),(0,i.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -p, --project string                 Project to use (defaults to context-configured project)\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,i.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/"},"strm create"),"\t - Create an entity")))}u.isMDXComponent=!0}}]);