"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6469],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(a,".").concat(m)]||f[m]||s[m]||c;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],l={},a=void 0,p={unversionedId:"cli-reference/completion",id:"cli-reference/completion",title:"completion",description:"The global completion command is used to generate tab completion for",source:"@site/docs/cli-reference/completion.md",sourceDirName:"cli-reference",slug:"/cli-reference/completion",permalink:"/docs/docs/latest/cli-reference/completion",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"batch-job",permalink:"/docs/docs/latest/cli-reference/batch-job"},next:{title:"event-contract",permalink:"/docs/docs/latest/cli-reference/event-contract"}},u=[],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The global ",(0,c.kt)("inlineCode",{parentName:"p"},"completion")," command is used to generate tab completion for\nvarious shells. For now, we support bash, zsh, fish and Windows\nPowershell."),(0,c.kt)("p",null,"If you type ",(0,c.kt)("inlineCode",{parentName:"p"},"strm completion --help")," you\u2019ll see instructions on how to\nenable help for your shell."))}f.isMDXComponent=!0}}]);