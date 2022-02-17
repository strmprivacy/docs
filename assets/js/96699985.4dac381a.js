"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3839],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,h=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1020:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={},c=void 0,s={unversionedId:"cli-reference/auth",id:"cli-reference/auth",title:"auth",description:"The global auth command is used for authenticating the CLI with STRM",source:"@site/docs/cli-reference/auth.md",sourceDirName:"cli-reference",slug:"/cli-reference/auth",permalink:"/docs/docs/latest/cli-reference/auth",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"STRM Privacy CLI reference",permalink:"/docs/docs/latest/cli-index"},next:{title:"batch-exporter",permalink:"/docs/docs/latest/cli-reference/batch-exporter"}},u=[{value:"login",id:"login",children:[{value:"Usage",id:"usage",children:[],level:3}],level:2},{value:"access-token",id:"access-token",children:[{value:"Usage",id:"usage-1",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The global ",(0,l.kt)("inlineCode",{parentName:"p"},"auth")," command is used for authenticating the CLI with STRM\nPrivacy so it can use the API."),(0,l.kt)("p",null,"The STRM Privacy API requires a JSON Web Token (JWT), which is created\nby the ",(0,l.kt)("inlineCode",{parentName:"p"},"login")," subcommand."),(0,l.kt)("p",null,"The CLI requires an existing STRM Privacy account, which can be created\nthrough the website."),(0,l.kt)("h2",{id:"login"},"login"),(0,l.kt)("p",null,"Log a user in using its Console credentials and save the login token to\ndisk, to allow the CLI access to the STRM Privacy APIs."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm auth login [flags]"),"."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h2",{id:"access-token"},"access-token"),(0,l.kt)("p",null,"Print the current (JWT) access token to the terminal. Note that the\ntoken is printed on ",(0,l.kt)("inlineCode",{parentName:"p"},"stdout"),", and the Expiry and billing-id are on\n",(0,l.kt)("inlineCode",{parentName:"p"},"stderr")," so it\u2019s easy to capture the token for scripting use with"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export token=$(strm auth access-token)\n")),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm auth print-access-token [flags]"),"."),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags"),"."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strm auth print-access-token\neyJhbGciOiJSUzI1NiIsImtpZCI6ImFlM.....\n")))}d.isMDXComponent=!0}}]);