"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6523],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(o,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5340:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),s=["components"],i={},o=void 0,c={unversionedId:"cli-reference/key-stream",id:"cli-reference/key-stream",title:"key-stream",description:"Key Streams are a restricted feature. For now, enabling and disabling",source:"@site/docs/cli-reference/key-stream.md",sourceDirName:"cli-reference",slug:"/cli-reference/key-stream",permalink:"/docs/latest/cli-reference/key-stream",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"kafka-user",permalink:"/docs/latest/cli-reference/kafka-user"},next:{title:"listen-web-socket",permalink:"/docs/latest/cli-reference/listen-web-socket"}},u=[{value:"get",id:"get",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3}],level:2},{value:"list",id:"list",children:[{value:"Usage",id:"usage-1",children:[],level:3},{value:"Arguments",id:"arguments-1",children:[],level:3},{value:"Flags",id:"flags-1",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Key Streams are a restricted feature. For now, enabling and disabling\nkey streams can not be done through the Console or CLI. Contact us for\nmore information."),(0,l.kt)("p",null,"A Key Stream can be enabled on a stream and it contains all encryption\nkeys that are used on this stream. Normally STRM Privacy fully manages\nand stores the encryption keys that are used, but with a key stream,\nclients can get access to the keys and decrypt events themselves."),(0,l.kt)("p",null,"Usage of key streams places a lot more responsibility in the hands of\nthe client, so this feature requires careful consideration before using."),(0,l.kt)("p",null,'With regard to the data flow, STRM Privacy generates a new encryption\nkey whenever an event with a new "key link" (which can be seen as a\n"session" concept, in that it links separate events together) is\nreceived. This encryption key is stored internally, rotated after a\ncertain period and, if there is a key stream, put on the Key Stream\napproximately at the same time as the event is put on the input stream.'),(0,l.kt)("h2",{id:"get"},"get"),(0,l.kt)("p",null,"Get a Key Stream by name"),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm get key-stream (name) [flags]")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Key Stream."),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/#global-flags"},"Global flags"),"."),(0,l.kt)("h2",{id:"list"},"list"),(0,l.kt)("p",null,"List Key Streams."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm list key-streams [flags]")),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,"No arguments."),(0,l.kt)("h3",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/#global-flags"},"Global flags"),"."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'strm list key-streams\n{\n  "keyStreams": [\n    {\n      "ref": {\n        "billingId": "demo8542234275",\n        "name": "demo"\n      }\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);