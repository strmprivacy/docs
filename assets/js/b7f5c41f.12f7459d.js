"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=o,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={title:"schema-code",hide_title:!0},i=void 0,s={unversionedId:"reference/cli-reference/strm/get/schema-code",id:"reference/cli-reference/strm/get/schema-code",title:"schema-code",description:"strm get schema-code",source:"@site/docs/04-reference/01-cli-reference/strm/get/schema-code.md",sourceDirName:"04-reference/01-cli-reference/strm/get",slug:"/reference/cli-reference/strm/get/schema-code",permalink:"/docs/latest/reference/cli-reference/strm/get/schema-code",draft:!1,tags:[],version:"current",frontMatter:{title:"schema-code",hide_title:!0},sidebar:"docs",previous:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/get/project"},next:{title:"stream",permalink:"/docs/latest/reference/cli-reference/strm/get/stream"}},c={},l=[{value:"strm get schema-code",id:"strm-get-schema-code",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-get-schema-code"},"strm get schema-code"),(0,o.kt)("p",null,"Get schema code archive by data-contract-ref"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"In order to simplify sending correctly serialized data to STRM Privacy it is recommended to use generated\nsource code that defines a class/object structure in a certain programming language, that knows (with help of some\nopen-source libraries) how to serialize objects."),(0,o.kt)("p",null,"The result of a ",(0,o.kt)("inlineCode",{parentName:"p"},"get schema-code")," is a zip file with some source code files for getting started with sending events in a\ncertain programming language. Generally this will be code where you\u2019ll have to do some sort of ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," step in order to\nmake this fully operational in your development setting (using a JDK, a Python or a Node.js environment)."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm get schema-code (data-contract-ref) [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm get schema-code strmprivacy/example/1.3.0 --language=python\nSaved to python-avro-example-1.3.0.zip\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help                 help for schema-code\n      --language string      which programming language. Supported are: java, typescript, python, rust\n      --output-file string   destination zip file location\n      --overwrite            do we allow overwriting an existing file\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n  -r, --recursive             Retrieve entities and their dependents\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/get/"},"strm get"),"\t - Get an entity")))}d.isMDXComponent=!0}}]);