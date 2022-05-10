"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6209],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=p(n),m=i,_=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(_,c(c({ref:t},l),{},{components:n})):r.createElement(_,c({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8083:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),c=["components"],o={title:"gRPC API definition",hide_table_of_contents:!1},s="gRPC and CLI",p={unversionedId:"quickstart/grpc",id:"quickstart/grpc",title:"gRPC API definition",description:"STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an",source:"@site/docs/quickstart/grpc.md",sourceDirName:"quickstart",slug:"/quickstart/grpc",permalink:"/docs/latest/quickstart/grpc",tags:[],version:"current",frontMatter:{title:"gRPC API definition",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Exporting Keys",permalink:"/docs/latest/quickstart/exporting-keys"},next:{title:"Simple Schema",permalink:"/docs/latest/quickstart/simple-schema"}},l={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grpc-and-cli"},"gRPC and CLI"),(0,a.kt)("p",null,"STRM Privacy is controlled via gRPC APIs. The CLI is no more than an interface to this API, with an\nauthorization token. The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/api-definitions"},"definitions are public on GitHub"),"."),(0,a.kt)("h1",{id:"interactive-grpc-command-line-interface"},"Interactive gRPC command line interface"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/ktr0731/evans"},"Evans")," is an API aware client for gRPC. It can interact with a server and via\nreflection see exactly what services the server offers, through reflection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ # Make sure you\'re logged in, otherwise login with:\n$ strm auth login\n$ evans -r repl --host api.strmprivacy.io --port 443 --tls \\\n  --header "authorization= Bearer $(strm auth print-access-token)"\n\n  ______\n |  ____|\n | |__    __   __   __ _   _ __    ___\n |  __|   \\ \\ / /  / _. | | \'_ \\  / __|\n | |____   \\ V /  | (_| | | | | | \\__ \\\n |______|   \\_/    \\__,_| |_| |_| |___/\n\n more expressive universal gRPC client\n\n\napi.strmprivacy.io:443> package strmprivacy.api.schemas.v1\n\nstrmprivacy.api.schemas.v1@api.strmprivacy.io:443> service SchemasService\n\nstrmprivacy.api.schemas.v1.SchemasService@api.strmprivacy.io:443> call ListSchemas\nbilling_id (TYPE_STRING) => .....\nfilter (TYPE_STRING) =>\n{\n  "schemas": [\n    {\n      "ref": {\n        "handle": "strmprivacy",\n        "name": "clickstream",\n')))}m.isMDXComponent=!0}}]);