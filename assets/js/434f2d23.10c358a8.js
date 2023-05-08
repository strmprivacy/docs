"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7316],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"policy",hide_title:!0},a=void 0,c={unversionedId:"reference/cli-reference/strm/get/policy",id:"reference/cli-reference/strm/get/policy",title:"policy",description:"strm get policy",source:"@site/docs/04-reference/01-cli-reference/strm/get/policy.md",sourceDirName:"04-reference/01-cli-reference/strm/get",slug:"/reference/cli-reference/strm/get/policy",permalink:"/docs/latest/reference/cli-reference/strm/get/policy",draft:!1,tags:[],version:"current",frontMatter:{title:"policy",hide_title:!0},sidebar:"docs",previous:{title:"key-stream",permalink:"/docs/latest/reference/cli-reference/strm/get/key-stream"},next:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/get/project"}},l={},s=[{value:"strm get policy",id:"strm-get-policy",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-get-policy"},"strm get policy"),(0,o.kt)("p",null,"Get Policy by name or id"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Get a Policy by name or by --id=policy-id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm get policy [name] [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'strm get policy "1 year" or strm get policy --id=34c4709e-b8bc-4b45-aa5a-883f471869e3\n    Name: 1 year\n    Id: 5c8e653a-8102-4444-ac15-a3d1aa0ff109\n    Description:\n    Retention(days): 365\n    Legal Grounds:\n    State: STATE_ACTIVE\n\nstrm get policy --get-default-policy\n    Name: 7 years\n    Id:\n    Description: Default 7 year retention\n    Retention(days): 2556\n    Legal Grounds:\n    State: STATE_ACTIVE\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --get-default-policy   get the no-name/no-id default policy\n  -h, --help                 help for policy\n      --id string            policy id\n  -o, --output string        output format [plain, json, json-raw] (default "plain")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -p, --project string        project to use (defaults to context-configured project)\n  -r, --recursive             Retrieve entities and their dependents\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/get/"},"strm get"),"\t - Get an entity")))}u.isMDXComponent=!0}}]);