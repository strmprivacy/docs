"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8804:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const c={title:"context",hide_title:!0},a=void 0,i={unversionedId:"reference/cli-reference/strm/context/index",id:"reference/cli-reference/strm/context/index",title:"context",description:"strm context",source:"@site/docs/04-reference/01-cli-reference/strm/context/index.md",sourceDirName:"04-reference/01-cli-reference/strm/context",slug:"/reference/cli-reference/strm/context/",permalink:"/docs/latest/reference/cli-reference/strm/context/",draft:!1,tags:[],version:"current",frontMatter:{title:"context",hide_title:!0},sidebar:"docs",previous:{title:"completion",permalink:"/docs/latest/reference/cli-reference/strm/completion"},next:{title:"account",permalink:"/docs/latest/reference/cli-reference/strm/context/account"}},l={},s=[{value:"strm context",id:"strm-context",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:s},f="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-context"},"strm context"),(0,o.kt)("p",null,"Print the CLI context"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help   help for context\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/"},"strm"),"\t - STRM Privacy CLI 3.15.2"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/context/account"},"strm context account"),"\t - Show the handle of this account"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/context/config"},"strm context config"),"\t - Shows the config path and preferences"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/context/info"},"strm context info"),"\t - Show the stored information for a saved entity"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/context/project"},"strm context project"),"\t - Show or set the active project")))}u.isMDXComponent=!0}}]);