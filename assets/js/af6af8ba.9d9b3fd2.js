"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8303],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,h=f["".concat(s,".").concat(d)]||f[d]||p[d]||l;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s=void 0,c={unversionedId:"cli-reference/batch-job",id:"version-1.0.0/cli-reference/batch-job",title:"batch-job",description:"A Batch Job outputs all events in file all events to files in a Sink.",source:"@site/versioned_docs/version-1.0.0/cli-reference/batch-job.md",sourceDirName:"cli-reference",slug:"/cli-reference/batch-job",permalink:"/docs/docs/1.0.0/cli-reference/batch-job",tags:[],version:"1.0.0",frontMatter:{},sidebar:"docs",previous:{title:"batch-exporter",permalink:"/docs/docs/1.0.0/cli-reference/batch-exporter"},next:{title:"completion",permalink:"/docs/docs/1.0.0/cli-reference/completion"}},u=[{value:"create",id:"create",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3}],level:2},{value:"delete",id:"delete",children:[{value:"Usage",id:"usage-1",children:[],level:3},{value:"Arguments",id:"arguments-1",children:[],level:3},{value:"Flags",id:"flags-1",children:[],level:3}],level:2},{value:"get",id:"get",children:[{value:"Usage",id:"usage-2",children:[],level:3},{value:"Arguments",id:"arguments-2",children:[],level:3},{value:"Flags",id:"flags-2",children:[],level:3}],level:2},{value:"list",id:"list",children:[{value:"Usage",id:"usage-3",children:[],level:3},{value:"Arguments",id:"arguments-3",children:[],level:3},{value:"Flags",id:"flags-3",children:[],level:3}],level:2}],p={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Batch Job outputs all events in file all events to files in a Sink.\nThis happens with a regular interval."),(0,l.kt)("p",null,"Each file follows the JSON Lines format, which is one full JSON document\nper line."),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/cli-reference/sink"},"sink")," is a configuration item that defines location\n(Gcloud, AWS, ..) bucket and associated credentials."),(0,l.kt)("p",null,"A sink needs to be created ",(0,l.kt)("em",{parentName:"p"},"before")," you can create a batch job that uses\nit."),(0,l.kt)("h2",{id:"create"},"create"),(0,l.kt)("p",null,"Create a new Batch Job."),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm create batch-job [flags]"),"."),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"stream-name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the stream this Batch Job connects to."),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("p",null,"--export-keys",(0,l.kt)("br",{parentName:"p"}),"\n","Boolean: If set, create a batch job for the Key Stream with this\n","[stream-name]","."),(0,l.kt)("p",null,"--interval",(0,l.kt)("br",{parentName:"p"}),"\n","The interval in seconds at which batched events are sent to the sink.\nDefault: 60."),(0,l.kt)("p",null,"--name",(0,l.kt)("br",{parentName:"p"}),"\n","The batch job name. Default: ","[sink name]","-","[stream-name]"," for event\njobs, and ","[sink name]","-","[stream-name]","-keys for encryption key jobs."),(0,l.kt)("p",null,"--path-prefix",(0,l.kt)("br",{parentName:"p"}),"\n","The directory prefix to use when creating files in the Sink."),(0,l.kt)("p",null,"--sink",(0,l.kt)("br",{parentName:"p"}),"\n","The sink to output to. This flag is mandatory when there is more than\none Sink for this billing id."),(0,l.kt)("p",null,"--include-existing-events",(0,l.kt)("br",{parentName:"p"}),"\n","Sets the initial offset to earliest. Default: latest."),(0,l.kt)("p",null,"Also see ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/cli-reference/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h2",{id:"delete"},"delete"),(0,l.kt)("p",null,"Delete a Batch Job by name."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm delete batch-job (name) [flags]"),"."),(0,l.kt)("h3",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,"name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Batch Job."),(0,l.kt)("h3",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."),(0,l.kt)("h2",{id:"get"},"get"),(0,l.kt)("p",null,"Get a Batch Job by name."),(0,l.kt)("h3",{id:"usage-2"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm get batch-job (name) [flags]"),"."),(0,l.kt)("h3",{id:"arguments-2"},"Arguments"),(0,l.kt)("p",null,"name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Batch Job."),(0,l.kt)("h3",{id:"flags-2"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."),(0,l.kt)("h2",{id:"list"},"list"),(0,l.kt)("p",null,"List Batch Jobs."),(0,l.kt)("h3",{id:"usage-3"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm list batch-jobs [flags]"),"."),(0,l.kt)("h3",{id:"arguments-3"},"Arguments"),(0,l.kt)("p",null,"No arguments"),(0,l.kt)("h3",{id:"flags-3"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."))}f.isMDXComponent=!0}}]);