"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8906],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9039:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Authentication with the Command Line Interface",hide_table_of_contents:!1},l=void 0,s={unversionedId:"quickstart/authentication-cli",id:"quickstart/authentication-cli",title:"Authentication with the Command Line Interface",description:"The STRM Privacy CLI is a command line interface for interacting with",source:"@site/docs/quickstart/authentication-cli.md",sourceDirName:"quickstart",slug:"/quickstart/authentication-cli",permalink:"/docs/latest/quickstart/authentication-cli",tags:[],version:"current",frontMatter:{title:"Authentication with the Command Line Interface",hide_table_of_contents:!1}},p={},u=[{value:"Logging in",id:"logging-in",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The STRM Privacy CLI is a command line interface for interacting with\nit. You can find its source code and binary at\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"github.com/strmprivacy/cli")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The STRM Privacy Web Console currently provides only limited\nfunctionality. You will ",(0,i.kt)("em",{parentName:"p"},"need to use the CLI"),"."))),(0,i.kt)("p",null,"The CLI is little more than a thin interface to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/grpc"},"STRM Privacy gRPC\ninterface"),"."),(0,i.kt)("h2",{id:"logging-in"},"Logging in"),(0,i.kt)("p",null,"First create an account at\n",(0,i.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"console.strmprivacy.io")," and use the\nlogin to the CLI. You\u2019ll be redirected to your browser to complete the\nlogin flow."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm auth login\nFollow the login flow in your browser, which is opened automatically. If not, open the following URL to complete the login:\n\n    https://accounts.strmprivacy.io/auth/realms/users/protocol/openid-connect/auth...\n\nYou are now logged in as [demo@strmprivacy.io].\n")),(0,i.kt)("p",null,"This creates a file that contains a valid OAuth2.0 id and refresh token,\nin the application configuration directory ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"strm auth print-access-token")," to get the access token,\nwhich will be refreshed is necessary. The ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," is not shown\nanymore since version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.9.0")," of the CLI when printing the access token,\nbut can still be found with each reference to a stream (i.e.\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm get stream my-stream --output json")," will show the ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," as a\npart of the stream reference). The ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId")," is required when using"),(0,i.kt)("p",null,"the client drivers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm auth print-access-token\neyJ...iLCJ0eXAiOiJKV1QifQ.eyJp....abcN_F\n")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.config/strmprivacy"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);