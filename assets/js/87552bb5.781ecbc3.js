"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8818:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Simple Schemas",hide_table_of_contents:!1},p="Simple Schemas",l={unversionedId:"concepts/simple-schemas",id:"version-1.0.0/concepts/simple-schemas",title:"Simple Schemas",description:"A Simple Schema defines the fields outside of the strmMeta section in a simple format, and translates this to an",source:"@site/versioned_docs/version-1.0.0/concepts/simple-schemas.md",sourceDirName:"concepts",slug:"/concepts/simple-schemas",permalink:"/docs/docs/1.0.0/concepts/simple-schemas",tags:[],version:"1.0.0",frontMatter:{title:"Simple Schemas",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Masked Fields",permalink:"/docs/docs/1.0.0/concepts/masked-fields"},next:{title:"Creating Streams with the Command Line Interface",permalink:"/docs/docs/1.0.0/quickstart/creating-streams"}},c=[],m={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"simple-schemas"},"Simple Schemas"),(0,o.kt)("p",null,"A Simple Schema defines the fields outside of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/concepts/strm-meta"},"strmMeta section")," in a simple format, and translates this to an\nactual ",(0,o.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#schemas"},"Avro ",(0,o.kt)("inlineCode",{parentName:"a"},"avsc")," definition"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/quickstart/simple-schema"},"quickstart Simple Schema example")," we have a hands-on interaction\nthat shows the technical details"),(0,o.kt)("p",null,"A simple schema defines a list of ",(0,o.kt)("em",{parentName:"p"},"nodes"),". Each node is an entity with\nthe following attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"name")," (required) that you can use to access the entity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"avro_name")," (optional) conforms to ",(0,o.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#names"},"the naming rules for Avro"),". Is\nderived from ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," ",(0,o.kt)("em",{parentName:"p"},"unless")," it was explicitly set.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"type")," (required) an integer, string, float or a ",(0,o.kt)("inlineCode",{parentName:"p"},"node"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"repeated")," (optional) that defines whether or not the field can\noccur more than once. Defaults to false.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"required")," (optional) that defines whether or not the sender must\nfill in this field value. Defaults to false.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"doc")," (optional) documents the purpose of the field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," (optional) holds ",(0,o.kt)("em",{parentName:"p"},"child-nodes")," for nested data structure.\nThis is only valid when the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"NODE")))),(0,o.kt)("p",null,"An example of a simple schema:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"simple-schema.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'    name: Clicks\n    nodes:\n    - name: Session Id\n      type: STRING\n      doc: the string value that connects events to a single sequence\n    - name: User Name\n      type: STRING\n      doc:  we use an event contract to define that this is private\n    - name: url\n      type: STRING\n      doc:  the url on the website\n    - name: Prijs in GB\xa3\n      type: FLOAT\n      doc:  price in UK pounds\n    - name: mouse positions\n      repeated: true\n      type: NODE\n      nodes:\n      - name: x\n        type: INTEGER\n      - name: "y"  # warning. Put quotes around y or it is a boolean true:\n        type: INTEGER\n')))}u.isMDXComponent=!0}}]);