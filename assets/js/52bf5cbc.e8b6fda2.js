"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6209],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"gRPC API definition",hide_table_of_contents:!1},o="gRPC and CLI",c={unversionedId:"quickstart/grpc",id:"quickstart/grpc",title:"gRPC API definition",description:"STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an",source:"@site/docs/quickstart/grpc.md",sourceDirName:"quickstart",slug:"/quickstart/grpc",permalink:"/docs/latest/quickstart/grpc",draft:!1,tags:[],version:"current",frontMatter:{title:"gRPC API definition",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Metrics and Monitoring",permalink:"/docs/latest/quickstart/ccd/monitoring"},next:{title:"STRM Privacy CLI reference",permalink:"/docs/latest/cli-index"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grpc-and-cli"},"gRPC and CLI"),(0,a.kt)("p",null,"STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an\nauthorization token. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/api-definitions"},"definitions are public on GitHub"),"."),(0,a.kt)("p",null,"In a similar way, the ",(0,a.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"STRM Console")," is also only an interaction with this api."),(0,a.kt)("p",null,"Because of this ",(0,a.kt)("em",{parentName:"p"},"api first")," design, it's quite feasible to ",(0,a.kt)("em",{parentName:"p"},"automate")," interaction of your systems with STRM."),(0,a.kt)("h1",{id:"interactive-grpc-command-line-interface"},"Interactive gRPC command line interface"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/evans"},"Evans")," is an API aware client for gRPC. It can interact with a server and via\nreflection see exactly what services the server offers, through reflection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure you're logged in, otherwise login with:\nstrm auth login\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'evans -r repl --host api.strmprivacy.io --port 443 --tls \\\n  --header "authorization=Bearer $(strm auth print-access-token)" \\\n  --package strmprivacy.api.schemas.v1 \\\n  --service SchemasService\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      ______\n     |  ____|\n     | |__    __   __   __ _   _ __    ___\n     |  __|   \\ \\ / /  / _. | | \'_ \\  / __|\n     | |____   \\ V /  | (_| | | | | | \\__ \\\n     |______|   \\_/    \\__,_| |_| |_| |___/\n\n     more expressive universal gRPC client\n\n\nstrmprivacy.api.schemas.v1.SchemasService@api.strmprivacy.io:443> call ListSchemas\nbilling_id (TYPE_STRING) =>\nfilter (TYPE_STRING) =>\nhandle (TYPE_STRING) =>\nname (TYPE_STRING) =>\n\u2714 FILTER_PUBLIC_PRIVATE_UNSPECIFIED\n\u2714 SCHEMA_TYPE_UNSPECIFIED\n<repeated> labels::key (TYPE_STRING) =>\n<repeated> domains (TYPE_STRING) =>\n<repeated> industries (TYPE_STRING) =>\n{\n  "schemas": [\n    {\n      "definition": "{\\"type\\":\\"record\\",\\"name\\":\\"TestSchema\\",\\"namespace\\":\\"farah.....\n      "fingerprint": "3459417286125971574",\n      "id": "4cd09571-0317-436f-8540-58d4e1ddf2c9",\n      "is_public": true,\n      "metadata": {\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"type ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"ctrl-D")," to exit the ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"repeated")," entries in Evans.")))}m.isMDXComponent=!0}}]);