"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[7967],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2637:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={},s=void 0,c={unversionedId:"cli-reference/batch-exporter",id:"version-1.0.0/cli-reference/batch-exporter",title:"batch-exporter",description:"batch-exporter",source:"@site/versioned_docs/version-1.0.0/cli-reference/batch-exporter.md",sourceDirName:"cli-reference",slug:"/cli-reference/batch-exporter",permalink:"/docs/1.0.0/cli-reference/batch-exporter",tags:[],version:"1.0.0",frontMatter:{},sidebar:"docs",previous:{title:"auth",permalink:"/docs/1.0.0/cli-reference/auth"},next:{title:"batch-job",permalink:"/docs/1.0.0/cli-reference/batch-job"}},p=[{value:"batch-exporter",id:"batch-exporter",children:[{value:"create",id:"create",children:[{value:"Usage",id:"usage",children:[],level:4},{value:"Arguments",id:"arguments",children:[],level:4},{value:"Flags",id:"flags",children:[],level:4}],level:3},{value:"delete",id:"delete",children:[{value:"Usage",id:"usage-1",children:[],level:4},{value:"Arguments",id:"arguments-1",children:[],level:4},{value:"Flags",id:"flags-1",children:[],level:4}],level:3},{value:"get",id:"get",children:[{value:"Usage",id:"usage-2",children:[],level:4},{value:"Arguments",id:"arguments-2",children:[],level:4},{value:"Flags",id:"flags-2",children:[],level:4}],level:3},{value:"list",id:"list",children:[{value:"Usage",id:"usage-3",children:[],level:4},{value:"Arguments",id:"arguments-3",children:[],level:4},{value:"Flags",id:"flags-3",children:[],level:4}],level:3}],level:2}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"batch-exporter"},"batch-exporter"),(0,l.kt)("p",null,"A Batch Exporter listens to a stream and outputs all events to files in\na Sink. This happens with a regular interval."),(0,l.kt)("p",null,"Each file follows the JSON Lines format, which is one full JSON document\nper line."),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0.0/cli-reference/sink"},"sink")," is a configuration item that defines location\n(Gcloud, AWS, ..) bucket and associated credentials."),(0,l.kt)("p",null,"A sink needs to be created ",(0,l.kt)("em",{parentName:"p"},"before")," you can create a batch exporter that\nuses it."),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("p",null,"Create a new Batch Exporter for a Stream, identified by ","[stream-name]","."),(0,l.kt)("h4",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm create batch-exporter (stream-name) [flags]"),"."),(0,l.kt)("h4",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"stream-name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the stream this Batch Exporter connects to."),(0,l.kt)("h4",{id:"flags"},"Flags"),(0,l.kt)("p",null,"--export-keys",(0,l.kt)("br",{parentName:"p"}),"\n","Boolean: If set, create a batch exporter for the Key Stream with this\n","[stream-name]","."),(0,l.kt)("p",null,"--interval",(0,l.kt)("br",{parentName:"p"}),"\n","The interval in seconds at which batched events are sent to the sink.\nDefault: 60."),(0,l.kt)("p",null,"--name",(0,l.kt)("br",{parentName:"p"}),"\n","The batch exporter name. Default: ","[sink name]","-","[stream-name]"," for\nevent exporters, and ","[sink name]","-","[stream-name]","-keys for encryption\nkey exporters."),(0,l.kt)("p",null,"--path-prefix",(0,l.kt)("br",{parentName:"p"}),"\n","The directory prefix to use when creating files in the Sink."),(0,l.kt)("p",null,"--sink",(0,l.kt)("br",{parentName:"p"}),"\n","The sink to output to. This flag is mandatory when there is more than\none Sink for this billing id."),(0,l.kt)("p",null,"--include-existing-events",(0,l.kt)("br",{parentName:"p"}),"\n","Sets the initial offset to earliest. Default: latest."),(0,l.kt)("p",null,"Also see ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0.0/cli-reference/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h3",{id:"delete"},"delete"),(0,l.kt)("p",null,"Delete a Batch Exporter by name."),(0,l.kt)("h4",{id:"usage-1"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm delete batch-exporter (name) [flags]"),"."),(0,l.kt)("h4",{id:"arguments-1"},"Arguments"),(0,l.kt)("p",null,"name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Batch Exporter."),(0,l.kt)("h4",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."),(0,l.kt)("h3",{id:"get"},"get"),(0,l.kt)("p",null,"Get a Batch Exporter by name."),(0,l.kt)("h4",{id:"usage-2"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm get batch-exporter (name) [flags]"),"."),(0,l.kt)("h4",{id:"arguments-2"},"Arguments"),(0,l.kt)("p",null,"name",(0,l.kt)("br",{parentName:"p"}),"\n","The name of the Batch Exporter."),(0,l.kt)("h4",{id:"flags-2"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."),(0,l.kt)("h3",{id:"list"},"list"),(0,l.kt)("p",null,"List Batch Exporters."),(0,l.kt)("h4",{id:"usage-3"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm list batch-exporters [flags]"),"."),(0,l.kt)("h4",{id:"arguments-3"},"Arguments"),(0,l.kt)("p",null,"No arguments"),(0,l.kt)("h4",{id:"flags-3"},"Flags"),(0,l.kt)("p",null,"No specific flags. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/1.0.0/cli-reference/#global-flags"},"Global flags"),"."))}f.isMDXComponent=!0}}]);