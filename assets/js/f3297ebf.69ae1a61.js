"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3149],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),g=l,f=d["".concat(o,".").concat(g)]||d[g]||p[g]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3013:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],s={},o=void 0,c={unversionedId:"cli-reference/sink",id:"cli-reference/sink",title:"sink",description:"A Sink is a STRM Privacy configuration object for a remote file storage.",source:"@site/docs/cli-reference/sink.md",sourceDirName:"cli-reference",slug:"/cli-reference/sink",permalink:"/docs/docs/latest/cli-reference/sink",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"simulate",permalink:"/docs/docs/latest/cli-reference/simulate"},next:{title:"stream",permalink:"/docs/docs/latest/cli-reference/stream"}},u=[{value:"create",id:"create",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3}],level:2},{value:"delete",id:"delete",children:[{value:"Usage",id:"usage-1",children:[],level:3},{value:"Arguments",id:"arguments-1",children:[],level:3},{value:"Flags",id:"flags-1",children:[],level:3}],level:2},{value:"get",id:"get",children:[{value:"Usage",id:"usage-2",children:[],level:3},{value:"Arguments",id:"arguments-2",children:[],level:3},{value:"Flags",id:"flags-2",children:[],level:3}],level:2},{value:"list",id:"list",children:[{value:"Usage",id:"usage-3",children:[],level:3},{value:"Arguments",id:"arguments-3",children:[],level:3},{value:"Flags",id:"flags-3",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Sink is a STRM Privacy configuration object for a remote file storage.\nFor now, AWS S3 and Google Cloud Storage Buckets are supported. By\nitself, a Sink does nothing. A Batch Exporter needs to be connected to a\nSink and a Stream to start outputting events."),(0,a.kt)("p",null,"Upon creation, STRM Privacy validates whether or not the Bucket exists\nand if it is accessible with the given credentials."),(0,a.kt)("h2",{id:"create"},"create"),(0,a.kt)("p",null,"Create a new Sink, with the given name, pointing to the given bucket."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strm create sink (sink-name) (bucket-name) [flags]"),"."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("p",null,"sink-name",(0,a.kt)("br",{parentName:"p"}),"\n","The name of this sink."),(0,a.kt)("p",null,"bucket-name",(0,a.kt)("br",{parentName:"p"}),"\n","The simple name of the bucket, so not an URL like s3://bucket-name."),(0,a.kt)("h3",{id:"flags"},"Flags"),(0,a.kt)("p",null,"--credentials-file",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Required"),". The file with the credentials used to authenticate with\nthe cloud provider."),(0,a.kt)("p",null,"--sink-type",(0,a.kt)("br",{parentName:"p"}),"\n","The type of the sink. If omitted, the CLI tries to guess it, based on\nthe structure of the credentials file. If guessing is not possible, the\nflag has to be specified."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags")," for all global flags."),(0,a.kt)("h2",{id:"delete"},"delete"),(0,a.kt)("p",null,"Delete a Sink by name."),(0,a.kt)("h3",{id:"usage-1"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strm delete sink (name) [flags]"),"."),(0,a.kt)("h3",{id:"arguments-1"},"Arguments"),(0,a.kt)("p",null,"name",(0,a.kt)("br",{parentName:"p"}),"\n","The name of this sink."),(0,a.kt)("h3",{id:"flags-1"},"Flags"),(0,a.kt)("p",null,"--recursive",(0,a.kt)("br",{parentName:"p"}),"\n","also delete Batch Exporters using this sink."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags"),"."),(0,a.kt)("h2",{id:"get"},"get"),(0,a.kt)("p",null,"Get a Sink by name."),(0,a.kt)("h3",{id:"usage-2"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strm get sink (name) [flags]"),"."),(0,a.kt)("h3",{id:"arguments-2"},"Arguments"),(0,a.kt)("p",null,"name",(0,a.kt)("br",{parentName:"p"}),"\n","The name of this sink."),(0,a.kt)("h3",{id:"flags-2"},"Flags"),(0,a.kt)("p",null,"--recursive",(0,a.kt)("br",{parentName:"p"}),"\n","also list the Batch Exporters using this sink."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags"),"."),(0,a.kt)("h2",{id:"list"},"list"),(0,a.kt)("p",null,"List Sinks."),(0,a.kt)("h3",{id:"usage-3"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"strm list sinks [flags]"),"."),(0,a.kt)("h3",{id:"arguments-3"},"Arguments"),(0,a.kt)("p",null,"None."),(0,a.kt)("h3",{id:"flags-3"},"Flags"),(0,a.kt)("p",null,"--recursive",(0,a.kt)("br",{parentName:"p"}),"\n","also list the Batch Exporters using this sink."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/docs/latest/#global-flags"},"Global flags"),"."))}d.isMDXComponent=!0}}]);