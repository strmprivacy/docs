"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"Authentication via the CLI",hide_table_of_contents:!1},o=void 0,c={unversionedId:"quickstart/authentication-cli",id:"quickstart/authentication-cli",title:"Authentication via the CLI",description:"The STRM Privacy CLI is a command line interface for interacting with",source:"@site/docs/03-quickstart/05-authentication-cli.md",sourceDirName:"03-quickstart",slug:"/quickstart/authentication-cli",permalink:"/docs/latest/quickstart/authentication-cli",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Authentication via the CLI",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Upgrading",permalink:"/docs/latest/quickstart/ccd/updating"},next:{title:"STRM Privacy CLI reference",permalink:"/docs/latest/reference/cli-reference/"}},l={},s=[{value:"Logging in",id:"logging-in",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The STRM Privacy CLI is a command line interface for interacting with\nit. You can find its source code and binary at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"github.com/strmprivacy/cli")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The STRM Privacy Web Console currently provides only limited\nfunctionality. You will ",(0,i.kt)("em",{parentName:"p"},"need to use the CLI"),".")),(0,i.kt)("p",null,"The CLI is little more than a thin interface to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/reference/api-reference/"},"STRM Privacy gRPC\ninterface"),"."),(0,i.kt)("h2",{id:"logging-in"},"Logging in"),(0,i.kt)("p",null,"First create an account at\n",(0,i.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"console.strmprivacy.io")," and use the\nlogin to the CLI. You\u2019ll be redirected to your browser to complete the\nlogin flow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm auth login\nFollow the login flow in your browser, which is opened automatically. If not, open the following URL to complete the login:\n\n    https://accounts.strmprivacy.io/auth/realms/users/protocol/openid-connect/auth...\n\nYou are now logged in as [demo@strmprivacy.io].\n")),(0,i.kt)("p",null,"This creates a file that contains a valid OAuth2.0 id and refresh token,\nin the application configuration directory ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"strm auth print-access-token")," to get the access token,\nwhich will be refreshed is necessary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," is not shown\nanymore since version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.9.0")," of the CLI when printing the access token,\nbut can still be found with each reference to a stream (i.e.\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm get stream my-stream --output json")," will show the ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," as a\npart of the stream reference). The ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," is required when using"),(0,i.kt)("p",null,"the client drivers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm auth print-access-token\neyJ...iLCJ0eXAiOiJKV1QifQ.eyJp....abcN_F\n")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/strmprivacy"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);