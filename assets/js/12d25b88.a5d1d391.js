"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2251],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"policy",hide_title:!0},a=void 0,l={unversionedId:"reference/cli-reference/strm/update/policy",id:"reference/cli-reference/strm/update/policy",title:"policy",description:"strm update policy",source:"@site/docs/04-reference/01-cli-reference/strm/update/policy.md",sourceDirName:"04-reference/01-cli-reference/strm/update",slug:"/reference/cli-reference/strm/update/policy",permalink:"/docs/latest/reference/cli-reference/strm/update/policy",draft:!1,tags:[],version:"current",frontMatter:{title:"policy",hide_title:!0},sidebar:"docs",previous:{title:"update",permalink:"/docs/latest/reference/cli-reference/strm/update/"},next:{title:"version",permalink:"/docs/latest/reference/cli-reference/strm/version"}},p={},c=[{value:"strm update policy",id:"strm-update-policy",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-update-policy"},"strm update policy"),(0,o.kt)("p",null,"Update a Policy"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Update the attributes of a Policy"),(0,o.kt)("p",null,"Policies can only be updated while in draft state!\nThe policy to be updated must be referenced by its id.\nYou can change all other attributes of a policy."),(0,o.kt)("p",null,"In order to make a policy active for pipeline processing, you must first 'activate' it."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm update policy policy-id [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'strm update policy 34c4709e-b8bc-4b45-aa5a-883f471869e3 --legal-grounds "EU law x.y.z"\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --description string     description of the policy\n  -h, --help                   help for policy\n      --legal-grounds string   legal grounds of this policy\n      --name string            name\n  -o, --output string          output format [plain, json, json-raw] (default "plain")\n      --retention int32        retention in days of this policy (default 365)\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/update/"},"strm update"),"\t - Update an entity")))}u.isMDXComponent=!0}}]);