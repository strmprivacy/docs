"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7059],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},265:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],s={},o=void 0,c={unversionedId:"cli-reference/simulate",id:"cli-reference/simulate",title:"simulate",description:"The global simulate command runs a simulation with random events",source:"@site/docs/cli-reference/simulate.md",sourceDirName:"cli-reference",slug:"/cli-reference/simulate",permalink:"/docs/docs/latest/cli-reference/simulate",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"schema",permalink:"/docs/docs/latest/cli-reference/schema"},next:{title:"sink",permalink:"/docs/docs/latest/cli-reference/sink"}},u=[{value:"Flags",id:"flags",children:[],level:2},{value:"run-random",id:"run-random",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags-1",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The global ",(0,l.kt)("inlineCode",{parentName:"p"},"simulate")," command runs a simulation with random events\nagainst a given Source Stream, using the ClickStream schema."),(0,l.kt)("h2",{id:"flags"},"Flags"),(0,l.kt)("p",null,"--schema",(0,l.kt)("br",{parentName:"p"}),"\n","the schema reference, defaults to ",(0,l.kt)("inlineCode",{parentName:"p"},"strmprivacy/demo/1.0.2")),(0,l.kt)("p",null,"The schema determines the shape of the simulated events. The cli\nsimulator has a hardcoded reference between the schema and the used\nevent contract to send with the events."),(0,l.kt)("p",null,"this should probably be defined via the event contract reference instead\nof the schema. Todo for a future release of the cli."),(0,l.kt)("h2",{id:"run-random"},"run-random"),(0,l.kt)("p",null,"Run the simulation."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm simulate random-events (stream-name) [flags]"),"."),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"stream-name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Source Stream to send events to."),(0,l.kt)("h3",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"--client-id",(0,l.kt)("br",{parentName:"p"}),"\n","OAuth2 client credentials"),(0,l.kt)("p",null,"--client-secret",(0,l.kt)("br",{parentName:"p"}),"\n","OAuth2 client credentials"),(0,l.kt)("p",null,"--consent-levels",(0,l.kt)("br",{parentName:"p"}),"\n","Consent level combinations to be simulated (default\n","[none,0,0/1,0/1/2,0/1/2/3]",")."),(0,l.kt)("p",null,"--interval",(0,l.kt)("br",{parentName:"p"}),"\n","Interval in ms. between simulated events (default 1000)."),(0,l.kt)("p",null,"--quiet",(0,l.kt)("br",{parentName:"p"}),"\n","Don\u2019t spam stderr with progress output."),(0,l.kt)("p",null,"--session-prefix",(0,l.kt)("br",{parentName:"p"}),"\n",'Prefix string for sessions (default "session"). Changing this will\ngenerate a new encryption keys set on the engine. Otherwise existing\nkeys will be reused if it has been less than 24 hours since their\ncreation.'),(0,l.kt)("p",null,"--session-range",(0,l.kt)("br",{parentName:"p"}),"\n","Number of different sessions being generated (default 1000)."),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("p",null,"Client id and secret are optional flags ",(0,l.kt)("strong",{parentName:"p"},"provided")," the stream has been\ncreated with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--save")," flag. In that case\n",(0,l.kt)("inlineCode",{parentName:"p"},"~/.config/strmprivacy/saved-entities/Stream/<stream-name>.json")," will\nhold the necessary credentials, and the cli will use these."))}m.isMDXComponent=!0}}]);