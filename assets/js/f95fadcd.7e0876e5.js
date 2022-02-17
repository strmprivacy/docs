"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8147],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,g=m["".concat(i,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],l={},i=void 0,u={unversionedId:"cli-reference/usage",id:"cli-reference/usage",title:"usage",description:"Usage allows you to see how many events were sent on a certain stream.",source:"@site/docs/cli-reference/usage.md",sourceDirName:"cli-reference",slug:"/cli-reference/usage",permalink:"/docs/docs/latest/cli-reference/usage",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"stream",permalink:"/docs/docs/latest/cli-reference/stream"},next:{title:"Reach out to us",permalink:"/docs/docs/latest/contact/"}},c=[{value:"get",id:"get",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],p={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usage allows you to see how many events were sent on a certain stream.\nThis is currently only the events received on the event-gateway.\nExtracting events via Kafka or Batch exporters is not included."),(0,o.kt)("h2",{id:"get"},"get"),(0,o.kt)("p",null,"Get usage on a topic by name"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strm get usage --help\n\nReturns the usage for a certain stream over a certain period.\n\nThe values are interpolated from cumulative event accounts, and sampled over intervals\n(the --by option). The default output is csv, but json is also available.\n\nThe default range is over the last 24 hours, with a default interval of 15 minutes.\n\nUsage:\n  strm get usage (stream-name) [flags]\n\nFlags:\n      --by string      aggregate by (seconds|..m|..h|..d)\n      --from string    from YYYY/M/D-HH:mm\n  -h, --help           help for usage\n      --json           json output\n      --until string   until YYYY/M/D-HH:mm\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"stream-name",(0,o.kt)("br",{parentName:"p"}),"\n","the name of the stream for which to retrieve usage data."),(0,o.kt)("h3",{id:"flags"},"Flags"),(0,o.kt)("p",null,"--stream-name",(0,o.kt)("br",{parentName:"p"}),"\n","The name of the stream you want the usage for"),(0,o.kt)("p",null,"--from",(0,o.kt)("br",{parentName:"p"}),"\n","The first moment of interest"),(0,o.kt)("p",null,"--until",(0,o.kt)("br",{parentName:"p"}),"\n","The first moment of interest"),(0,o.kt)("p",null,"--by",(0,o.kt)("br",{parentName:"p"}),"\n","Aggregation period"),(0,o.kt)("p",null,"--json",(0,o.kt)("br",{parentName:"p"}),"\n","Json instead of csv"),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"    strm get usage demo \\\n      --from 2021/8/12-11:00 \\\n      --until 2021/8/12-14:00 \\\n      --by 10m\n    from,                            count, duration, change, rate\n    2021-08-12T11:00:00.000000+0200, 5314,  600,      NaN,    NaN\n    2021-08-12T11:10:00.000000+0200, 5329,  600,      15,     0.03\n    2021-08-12T11:20:00.000000+0200, 5344,  600,      15,     0.03\n    2021-08-12T11:30:00.000000+0200, 5360,  600,      16,     0.03\n    2021-08-12T11:40:00.000000+0200, 5693,  600,      333,    0.56\n    2021-08-12T11:50:00.000000+0200, 5708,  600,      15,     0.03\n    2021-08-12T12:00:00.000000+0200, 5724,  600,      16,     0.03\n    2021-08-12T12:10:00.000000+0200, 5739,  600,      15,     0.03\n    2021-08-12T12:20:00.000000+0200, 5755,  600,      16,     0.03\n    2021-08-12T12:30:00.000000+0200, 5770,  600,      15,     0.03\n    2021-08-12T12:40:00.000000+0200, 5786,  600,      16,     0.03\n    2021-08-12T12:50:00.000000+0200, 5802,  600,      16,     0.03\n    2021-08-12T13:00:00.000000+0200, 5817,  600,      15,     0.03\n    2021-08-12T13:10:00.000000+0200, 11650, 600,      5833,   9.72\n")))}m.isMDXComponent=!0}}]);