"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4396],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=o(t),d=r,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return t?a.createElement(h,i(i({ref:n},m),{},{components:t})):a.createElement(h,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7830:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var a=t(7462),r=t(3366),l=(t(7294),t(3905)),i=["components"],s={},c=void 0,o={unversionedId:"cli-reference/schema",id:"cli-reference/schema",title:"schema",description:"A Schema describes the format of the events that are sent to STRM",source:"@site/docs/cli-reference/schema.md",sourceDirName:"cli-reference",slug:"/cli-reference/schema",permalink:"/latest/cli-reference/schema",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"schema-code",permalink:"/latest/cli-reference/schema-code"},next:{title:"simulate",permalink:"/latest/cli-reference/simulate"}},m=[{value:"get",id:"get",children:[{value:"Usage",id:"usage",children:[],level:3},{value:"Argument",id:"argument",children:[],level:3},{value:"Flags",id:"flags",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2},{value:"list",id:"list",children:[{value:"Usage",id:"usage-1",children:[],level:3},{value:"Argments",id:"argments",children:[],level:3},{value:"Flags",id:"flags-1",children:[],level:3},{value:"Example",id:"example-1",children:[],level:3}],level:2},{value:"create",id:"create",children:[{value:"Usage",id:"usage-2",children:[],level:3},{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flags",id:"flags-2",children:[],level:3},{value:"Example",id:"example-2",children:[],level:3}],level:2}],p={toc:m};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A Schema describes the format of the events that are sent to STRM\nPrivacy. The events can be sent in two formats, JSON and AVRO and the\ncorresponding supported schema types are JSON Schema and AVRO. We plan\nto have more types in the future."),(0,l.kt)("p",null,"Schemas can be private or public, allowing them to be found and used by\nothers than the owning client. Be careful, public Schemas cannot be\ndeleted."),(0,l.kt)("p",null,"Schemas are versioned using a versioning scheme that can be fully\ndetermined by the client. The only restrictions are that version\nnumbers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MUST follow the semver format (major/minor/patch),")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MUST always be ascending,")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MUST keep the same schema type (e.g. JSON Schema or AVRO)."))),(0,l.kt)("p",null,"A Schema is uniquely identified by its Schema reference, in the format\n(organization handle/schema name/version)."),(0,l.kt)("h2",{id:"get"},"get"),(0,l.kt)("p",null,"Retrieve a schema"),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"strm get schema (handle/name/version)")),(0,l.kt)("h3",{id:"argument"},"Argument"),(0,l.kt)("p",null,"handle/name/version",(0,l.kt)("br",{parentName:"p"}),"\n","A reference to the schema."),(0,l.kt)("h3",{id:"flags"},"Flags"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/latest/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'strm get schema strmprivacy/demo/1.0.2\n{\n  "schema": {\n    "ref": {\n      "handle": "strmprivacy",\n      "name": "demo",\n      "version": "1.0.2",\n      "schemaType": "AVRO"\n    },\n    "state": "PENDING",\n    "isPublic": true,\n    "definition": "...",\n    "fingerprint": "6093265390869578999"\n  }\n}\n')),(0,l.kt)("h2",{id:"list"},"list"),(0,l.kt)("p",null,"List all schemas."),(0,l.kt)("h3",{id:"usage-1"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"`strm list schemas`\n")),(0,l.kt)("h3",{id:"argments"},"Argments"),(0,l.kt)("p",null,"None."),(0,l.kt)("h3",{id:"flags-1"},"Flags"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/latest/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strm list schemas\n\n... very long one line json\n")),(0,l.kt)("p",null,"We can use ",(0,l.kt)("inlineCode",{parentName:"p"},"jq")," to extract information in a more human readable way:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strm list schemas | jq -r '.schemas[].ref | \"\\(.handle)/\\(.name)/\\(.version)\"'\n\nstrmprivacy/clickstream/0.1.0\nstrmprivacy/demo_v1/0.1.0\nstrmprivacy/nps_unified_v3/3.0.0\nstrmprivacy/clickstream/0.2.0\nstrmprivacy/nps_unified_v1/0.1.0\nstrmprivacy/demo/1.0.0\nstrmprivacy/clickstream/0.3.0\nstrmprivacy/demo/1.0.1\ndpg/nps_unified/4.0.0\nstrmprivacy/demo/1.0.2\n")),(0,l.kt)("h2",{id:"create"},"create"),(0,l.kt)("h3",{id:"usage-2"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strm create schema (handle/name/version)  <definition-file>\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"flags-2"},"Flags"),(0,l.kt)("p",null,"--definition",(0,l.kt)("br",{parentName:"p"}),"\n","the string description of the schema (Avro or Json-Schema)"),(0,l.kt)("p",null,"--public",(0,l.kt)("br",{parentName:"p"}),"\n","the schema be public"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/latest/#global-flags"},"Global flags")," for all global flags."),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("p",null,"We\u2019ll copy one of the STRM Privacy schemas and provide our own twist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"strm get schema strmprivacy/demo/1.0.2 | jq .schema.definition \\\n  | jq -r > sample-schema.avsc\n")),(0,l.kt)("p",null,"If you edit ",(0,l.kt)("inlineCode",{parentName:"p"},"sample-schema.avsc")," and change the package for instance to\nsomething you like better, or maybe change some fields (outside of the\n",(0,l.kt)("inlineCode",{parentName:"p"},"strmMeta")," object), you can then upload a new version. We change the\n",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"demo"),", and the event to ",(0,l.kt)("inlineCode",{parentName:"p"},"NewDemoEvent"),". Our handle here\nis ",(0,l.kt)("inlineCode",{parentName:"p"},"demo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'    strm create schema bla/demo-schema/1.0.0 --definition=sample-schema.avsc\n    {\n      "schema": {\n        "ref": {\n          "handle": "demo",\n          "name": "demo-schema",\n          "version": "1.0.0",\n          "schemaType": "AVRO"\n        },\n        "state": "PENDING",\n        "definition": "...",\n        "fingerprint": "-1949971882462848769"\n      }\n    }\n')))}u.isMDXComponent=!0}}]);