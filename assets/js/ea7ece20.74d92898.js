"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1908],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),f=s,d=m["".concat(a,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,p(p({ref:t},c),{},{components:r})):n.createElement(d,p({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,p=new Array(i);p[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:s,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),s=(r(7294),r(3905));const i={title:"purpose-mappings",hide_title:!0},p=void 0,o={unversionedId:"reference/cli-reference/strm/list/purpose-mappings",id:"reference/cli-reference/strm/list/purpose-mappings",title:"purpose-mappings",description:"strm list purpose-mappings",source:"@site/docs/04-reference/01-cli-reference/strm/list/purpose-mappings.md",sourceDirName:"04-reference/01-cli-reference/strm/list",slug:"/reference/cli-reference/strm/list/purpose-mappings",permalink:"/docs/latest/reference/cli-reference/strm/list/purpose-mappings",draft:!1,tags:[],version:"current",frontMatter:{title:"purpose-mappings",hide_title:!0},sidebar:"docs",previous:{title:"projects",permalink:"/docs/latest/reference/cli-reference/strm/list/projects"},next:{title:"streams",permalink:"/docs/latest/reference/cli-reference/strm/list/streams"}},a={},l=[{value:"strm list purpose-mappings",id:"strm-list-purpose-mappings",level:2},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"strm-list-purpose-mappings"},"strm list purpose-mappings"),(0,s.kt)("p",null,"List purpose mappings"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"strm list purpose-mappings [flags]\n")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"strm list purpose-mappings\n\n PURPOSE MAPPING   VALUE   DESCRIPTION\n\n Marketing             1\n Legitimate Interest   2\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"  -h, --help   help for purpose-mappings\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n  -r, --recursive             Retrieve entities and their dependents\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/list/"},"strm list"),"\t - List entities")))}u.isMDXComponent=!0}}]);