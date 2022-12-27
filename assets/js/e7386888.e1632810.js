"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},429:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"batch-exporter",hide_title:!0},a=void 0,c={unversionedId:"reference/cli-reference/strm/monitor/batch-exporter",id:"reference/cli-reference/strm/monitor/batch-exporter",title:"batch-exporter",description:"strm monitor batch-exporter",source:"@site/docs/04-reference/01-cli-reference/strm/monitor/batch-exporter.md",sourceDirName:"04-reference/01-cli-reference/strm/monitor",slug:"/reference/cli-reference/strm/monitor/batch-exporter",permalink:"/docs/latest/reference/cli-reference/strm/monitor/batch-exporter",draft:!1,tags:[],version:"current",frontMatter:{title:"batch-exporter",hide_title:!0},sidebar:"docs",previous:{title:"all",permalink:"/docs/latest/reference/cli-reference/strm/monitor/all"},next:{title:"batch-job",permalink:"/docs/latest/reference/cli-reference/strm/monitor/batch-job"}},s={},l=[{value:"strm monitor batch-exporter",id:"strm-monitor-batch-exporter",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-monitor-batch-exporter"},"strm monitor batch-exporter"),(0,o.kt)("p",null,"monitor entities of type batch-exporter"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"View states for an entity. Can be used to determine why certain entities are not behaving as expected."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm monitor batch-exporter [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --follow          continuously monitor these events\n  -h, --help            help for batch-exporter\n  -o, --output string   monitor output format, follow specified=[plain, json, json-raw], default=[table, plain, json, json-raw] (default "table")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/monitor/"},"strm monitor"),"\t - Monitor STRM entities")))}u.isMDXComponent=!0}}]);