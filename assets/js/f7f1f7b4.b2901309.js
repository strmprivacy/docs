"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8955],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=i,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),i=a(7294),r=a(6010),o=a(2389),s=a(7392),l=a(7094),c=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:h,values:u,groupId:f,className:k}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:y.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,s.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const N=null===h?h:null!=(t=null!=h?h:null==(a=y.find((e=>e.props.default)))?void 0:a.props.value)?t:y[0].props.value;if(null!==N&&!v.some((e=>e.value===N)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:w}=(0,l.U)(),[C,T]=(0,i.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:D}=(0,c.o5)();if(null!=f){const e=g[f];null!=e&&e!==C&&v.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,a=S.indexOf(t),n=v[a].value;n!==C&&(D(t),T(n),null!=f&&w(f,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;a=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var i;const t=S.indexOf(e.currentTarget)-1;a=null!=(i=S[t])?i:S[S.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},k)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>S.push(e),onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),o?(0,i.cloneElement)(y.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function h(e){const t=(0,o.Z)();return i.createElement(m,(0,n.Z)({key:String(t)},e))}},4501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=a(7462),i=(a(7294),a(3905)),r=a(5488),o=a(5162);const s={title:"Data Contracts",hide_table_of_contents:!1},l=void 0,c={unversionedId:"concepts/data-contracts/index",id:"concepts/data-contracts/index",title:"Data Contracts",description:"To act as a gatekeeper and maintain high quality data, STRM Privacy enforces Data Contracts on data that is processed.",source:"@site/docs/02-concepts/02-data-contracts/index.md",sourceDirName:"02-concepts/02-data-contracts",slug:"/concepts/data-contracts/",permalink:"/docs/latest/concepts/data-contracts/",draft:!1,tags:[],version:"current",frontMatter:{title:"Data Contracts",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Policies",permalink:"/docs/latest/concepts/data-processing/policies"},next:{title:"Simple Schemas",permalink:"/docs/latest/concepts/data-contracts/simple-schemas"}},d={},p=[{value:"Schema",id:"schema",level:2},{value:"Simple Schemas",id:"simpleschema",level:3},{value:"Data Contracts",id:"contracts",level:2},{value:"Validations",id:"validations",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Difference between <code>keyField</code> and <code>keyLink</code>",id:"difference-keyfield-keylink",level:3},{value:"Data Contract states",id:"states",level:2},{value:"DRAFT",id:"draft",level:3},{value:"ACTIVE",id:"active",level:3},{value:"ARCHIVED",id:"archived",level:3}],m={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To act as a gatekeeper and maintain high quality data, STRM Privacy enforces Data Contracts on data that is processed.\nThis article covers what a Data Contract is, and how it is used by STRM Privacy."),(0,i.kt)("h1",{id:"data-contract"},"The Data Contract"),(0,i.kt)("p",null,"The Data Contract defines:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Schema"),". This is the blueprint of the data that is sent, hence, this is about the\n",(0,i.kt)("strong",{parentName:"p"},"shape")," of the data.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contract details"),". This defines the ",(0,i.kt)("strong",{parentName:"p"},"content")," that is sent, and is composed of the\nverifications that should be done for the received content."))),(0,i.kt)("p",null,"A Data Contract is composed\nof ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L762"},"various elements"),"\n,\nof which a few are of key importance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L774"},(0,i.kt)("inlineCode",{parentName:"a"},"schema")),":\nthe schema used when serializing and deserializing data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L768"},(0,i.kt)("inlineCode",{parentName:"a"},"key_field")),":\nthe name of the data field used for determining which events ",(0,i.kt)("a",{parentName:"li",href:"#contracts"},"belong to the same sequence"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/api-definitions/blob/master/protos/strmprivacy/api/entities/v1/entities_v1.proto#L777"},(0,i.kt)("inlineCode",{parentName:"a"},"field_metadata")),":\na list of metadata including field names, personal data configuration specifying the fields that should be considered\nas PII data and as Quasi-Identifier data and the\npurpose level that it belongs to.")),(0,i.kt)("p",null,"Other elements are discussed later in this article, but the three mentioned above are of crucial importance for STRM\nPrivacy to apply the Privacy Algorithm."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"In the past, STRM Privacy offered Event Contracts. They share similarity with the current Data Contract, however,\nthey differ from Data Contracts in sense that Event Contracts were separated from the Schema, which is not the case\nfor Data Contracts. Data Contracts are tightly coupled with the Schema, which is why the Schema is embedded in the Data\nContract.\nEvent Contracts will be removed in a future API version.")),(0,i.kt)("h2",{id:"schema"},"Schema"),(0,i.kt)("p",null,"In order to guarantee the integrity of the data that is sent to STRM\nPrivacy, all events must conform to a ",(0,i.kt)("em",{parentName:"p"},"serialization schema"),". These\nschemas are easy to add and register with STRM Privacy, hence they are\nsimple to adapt to your use case."),(0,i.kt)("p",null,"The serialization schema defines how an event is turned into bytes and\nvice versa."),(0,i.kt)("p",null,"Currently, STRM Privacy supports ",(0,i.kt)("a",{parentName:"p",href:"http://avro.apache.org/"},"Apache Avro"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON Schema")," and ",(0,i.kt)("a",{parentName:"p",href:"#simpleschema"},"Simple Schema"),", however other serialization\nformats may be added in the future."),(0,i.kt)("p",null,"Each serialization schema ",(0,i.kt)("strong",{parentName:"p"},"must include")," a section with STRM Privacy\nmeta information. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/strm-meta"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"strmMeta")," documentation")," for\ndetails."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If another serialization format, such as Protobuf, is a requirement for you,\nplease ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/contact/"},"contact us"),".")),(0,i.kt)("h3",{id:"simpleschema"},"Simple Schemas"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Simple Schemas")," is a format defined at STRM Privacy, that is used to\ncreate compatible Avro schemas without needing to understand the\ncomplexity of Avro or JSON-schema schemas. Through regular JSON or\nYAML, you can define the shape of your data, while\nthe complexities are abstracted away. The Simple Schema is translated\ninto Avro, which is the default format used at STRM Privacy.\nThe estimate is, that the vast majority of use cases will\nprefer these over manual Avro or JSON-schema creation."),(0,i.kt)("p",null,"Simple Schema ",(0,i.kt)("em",{parentName:"p"},"cannot be used")," in the following cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you already have a Kafka infrastructure with Avro or JSON-schema\nintegration (such as ",(0,i.kt)("a",{parentName:"li",href:"https://confluent.io"},"Confluent"),")."),(0,i.kt)("li",{parentName:"ul"},"you aim to use Avro or JSON-schema schemas with complexities that\nare outside the scope of Simple Schema. These complexities are\nmostly the ",(0,i.kt)("inlineCode",{parentName:"li"},"union")," types.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/simple-schemas"},"here")," for details on how Simple Schema works."),(0,i.kt)("h2",{id:"contracts"},"Data Contracts"),(0,i.kt)("p",null,"In order to guarantee that data that is sent to STRM Privacy adheres to\nthe rules defined by your organization, events must conform to a ",(0,i.kt)("em",{parentName:"p"},"data\ncontract"),". Contracts determine the behavior of validations, which fields\nare encrypted, and how events are tied together (hence, they get the\nsame encryption key)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A single version of a contract is linked to one, and only one\nserialization schema.")),(0,i.kt)("p",null,"An example data contract, with Data Contract reference ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy/clickstream/1.0.0"),", is listed below."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"contract",label:"Data Contract (schema shown separately for brevity)",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"View this Data Contract with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"CLI"),"\nusing: ",(0,i.kt)("inlineCode",{parentName:"p"},"strm get data-contract strmprivacy/clickstream/1.0.0 -ojson"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  // callout-1\n  "ref": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0" },\n  // callout-2\n  "schemaRef": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0" },\n  // callout-3\n  "state": "ACTIVE",\n  // callout-4\n  "isPublic": true,\n  // callout-5\n  "keyField": "producerSessionId",\n  // callout-6\n  "piiFields": {}\n  // callout-7\n  "fieldMetadata": [\n    {\n      "fieldName": "customer/id",\n      "personalDataConfig": {\n        "isPii": true,\n        "isQuasiId": false,\n        "purposeLevel": 0\n      }\n    },\n    {\n      "fieldName": "producerSessionId",\n      "personalDataConfig": {\n        "isPii": true,\n        "isQuasiId": false,\n        "purposeLevel": 1\n      }\n    }\n  ], \n  // callout-8\n  "validations": [\n    {\n      "field": "customer/id",\n      "type": "regex",\n      "value": "^.+$"\n    },\n    {\n      "field": "url",\n      "type": "regex",\n      "value": "^(https?|ftp|file)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"\n    }\n  ],\n  // callout-9\n  "dataSubjectField": "customer/id",\n  "schema": {\n    "ref": { "handle": "strmprivacy", "name": "clickstream", "version": "1.0.0", "schemaType": "AVRO" },\n    "state": "ACTIVE",\n    "isPublic": true,\n    "definition": ... shown in separate tab for brevity ...,\n    "fingerprint": "4415394156950015060",\n    "metadata": { ... omitted ... }\n  },\n  "id": "9cad95b7-b2bd-49e9-b5e3-d61b2da4f8ff",\n  "metadata": { ... omitted ... }\n}\n'))),(0,i.kt)(o.Z,{value:"schema",label:"Schema Definition (Avro representation)",mdxType:"TabItem"},(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"View this Data Contract with the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},"CLI"),"\nusing: ",(0,i.kt)("inlineCode",{parentName:"p"},"strm get data-contract strmprivacy/clickstream/1.0.0 -ojson | jq '.dataContract.schema.definition | fromjson'"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "name": "ClickstreamEvent",\n  "type": "record",\n  "namespace": "io.strmprivacy.schemas.clickstream",\n  "strmSchemaId": "clickstream",\n  "fields": [\n    {\n      "name": "strmMeta",\n      "type": {\n        "type": "record",\n        "name": "StrmMeta",\n        "fields": [\n          { "name": "eventContractRef", "type": "string" },\n          { "name": "nonce", "type": [ "null", "int" ], "default": null },\n          { "name": "timestamp", "type": [ "null", "long" ], "default": null },\n          { "name": "keyLink", "type": [ "null", "string" ], "default": null },\n          { "name": "billingId", "type": [ "null", "string" ], "default": null },\n          { "name": "consentLevels", "type": { "type": "array", "items": "int" } }\n        ]\n      }\n    },\n    { "name": "producerSessionId", "type": "string" },\n    { "name": "url", "type": "string" },\n    { "name": "eventType", "type": "string" },\n    { "name": "referrer", "type": "string" },\n    { "name": "userAgent", "type": "string" },\n    { "name": "conversion", "type": "int" },\n    { "name": "abTests", "type": { "type": "array", "items": "string" } },\n    {\n      "name": "customer",\n      "type": {\n        "name": "Customer",\n        "type": "record",\n        "fields": [ { "name": "id", "type": "string" } ]\n      }\n    }\n  ]\n}\n')))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ref"),": the reference to the data contract, comprised of a ",(0,i.kt)("inlineCode",{parentName:"li"},"handle")," (globally unique, chosen by you / your\norganization), ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", and a ",(0,i.kt)("a",{parentName:"li",href:"https://semver.org/"},"semantic")," ",(0,i.kt)("inlineCode",{parentName:"li"},"version"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"schemaRef"),": the serialization schema reference, that follows the same ",(0,i.kt)("inlineCode",{parentName:"li"},"handle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"version"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"state"),": whether the data contract is active and ready to be used\nin ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-processing/data-pipelines"},"data pipelines"),". More on states ",(0,i.kt)("a",{parentName:"li",href:"#states"},"here"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"isPublic"),": a data contract can be public, in which case all STRM\nPrivacy customers can use it, or it can belong to a certain\norganization, and require organization credentials to use it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyField"),": the name of the field in the serialization schema that is used to\n",(0,i.kt)("em",{parentName:"li"},"tie")," events together. Typically, this is what determines a data\nsubject's (i.e. your users) session. If multiple events contain the same value for\nthe field that was specified as ",(0,i.kt)("inlineCode",{parentName:"li"},"keyField"),", then\nthe ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-processing/pii-field-encryption"},"same encryption key and ",(0,i.kt)("inlineCode",{parentName:"a"},"keyLink"))," will be used\nto\nencrypt the PII data."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("div",{class:"chip-optional"}," ",(0,i.kt)("div",{class:"chip-content"},"optional")," ")," `piiFields`: deprecated in favor of `fieldMetadata`."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"fieldMetadata"),": description of the fields that should either be considered non-sensitive, QI or PII with\ncorresponding purpose level. This field identifies if a field should be encrypted if ",(0,i.kt)("inlineCode",{parentName:"li"},"isPii = true"),"\nand ",(0,i.kt)("inlineCode",{parentName:"li"},"purposeLevel")," is filled out."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"validations"),": the validations that should be performed on the content of specific\nfields in an event."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"dataSubjectField"),": the name of the field in the serialization schema that is used to distinguish\ndata subjects from each other. Typically, this is a ",(0,i.kt)("em",{parentName:"li"},"customer id")," or a ",(0,i.kt)("em",{parentName:"li"},"user id"),". This is used by the Data Subjects\nAPI to keep ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-contracts/data-subjects"},"facilitate an interface")," that allows for easy retrieval of used ",(0,i.kt)("inlineCode",{parentName:"li"},"keyLink"),"s for a\nspecific data subject.")),(0,i.kt)("p",null,"These contracts are very versatile, which makes it possible to use them for nearly any data structure."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"fieldMetadata")," is the replacement of deprecated ",(0,i.kt)("inlineCode",{parentName:"p"},"piiFields"),". In case both are filled, ",(0,i.kt)("inlineCode",{parentName:"p"},"fieldMetadata")," takes precedence.")),(0,i.kt)("h3",{id:"validations"},"Validations"),(0,i.kt)("p",null,"The validations that are performed on the data that is received by\nSTRM Privacy currently only support ",(0,i.kt)("a",{parentName:"p",href:"https://regex101.com/"},"Regular\nExpressions"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"More validation mechanisms will be added in the future. Please ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/contact/"},"contact us")," if you have\na specific validation need.")),(0,i.kt)("p",null,"Below is an example for a validation:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Assume an attribute of your event, say 'user/customer_id' in your organization\nhas to consist of 9 digits not starting with a zero, you could have\nthis as a validation rule in the data contract, implemented with a regex.")),(0,i.kt)("p",null,"This is the mechanism that STRM Privacy provides to increase the\n",(0,i.kt)("em",{parentName:"p"},"quality")," of your event data: validate before acceptance, and let the\ndata processing teams define the rules instead of the data generating\nteams. An example of a validation can be seen (and tried) in the quickstart\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/sending-data/sending-curl"},"Sending and receiving manually"),"."),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Data Contracts currently are limited in the following ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fieldMetadata"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"specified field names should be present in the corresponding schema"),(0,i.kt)("li",{parentName:"ul"},"specified pii fields should be (optional) string or list of string."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyField"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"specified field name should be present in the corresponding schema"),(0,i.kt)("li",{parentName:"ul"},"specified field should be an (optional) string"),(0,i.kt)("li",{parentName:"ul"},"note that the Event Gateway requires that the key field of an event is not empty in order to accept it.")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Technically it is possible to lift some of these limitations. Please ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/contact/"},"contact us")," if you are\ninterested in this.")),(0,i.kt)("h3",{id:"difference-keyfield-keylink"},"Difference between ",(0,i.kt)("inlineCode",{parentName:"h3"},"keyField")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"keyLink")),(0,i.kt)("p",null,"It is important to note the difference between ",(0,i.kt)("inlineCode",{parentName:"p"},"keyField")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"keyLink"),",\nas they are related to each other, but are fundamentally different:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyField")," is part of the ",(0,i.kt)("strong",{parentName:"li"},"data contract")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"keyLink")," is part\nof the ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-contracts/strm-meta"},"strmMeta section")," of the ",(0,i.kt)("em",{parentName:"li"},"serialization\nschema")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyField")," determines which field in the ",(0,i.kt)("strong",{parentName:"li"},"serialization schema")," is\nused for considering whether events belong to the same sequence (for\nexample a session)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keyLink")," ",(0,i.kt)("em",{parentName:"li"},"links")," a single event to an encryption key"),(0,i.kt)("li",{parentName:"ol"},"The value for ",(0,i.kt)("inlineCode",{parentName:"li"},"keyField")," is determined by you"),(0,i.kt)("li",{parentName:"ol"},"The value for ",(0,i.kt)("inlineCode",{parentName:"li"},"keyLink")," is determined by STRM Privacy"),(0,i.kt)("li",{parentName:"ol"},"The value of ",(0,i.kt)("inlineCode",{parentName:"li"},"keyField")," is used when creating a ",(0,i.kt)("inlineCode",{parentName:"li"},"keyLink"))),(0,i.kt)("p",null,"As you can see, the two have a strong relationship, but they are\ndifferent."),(0,i.kt)("h2",{id:"states"},"Data Contract states"),(0,i.kt)("p",null,"As data contracts are fundamental to describe data and give insight into what data goes where, state management is\nimportant."),(0,i.kt)("p",null,"It's not safe to allow modifications or removals on data contracts as it might impact either\nthe workings of the streams, but it also hinders traceability."),(0,i.kt)("p",null,"Data contracts can be in one of three states. See the image below:"),(0,i.kt)("img",{class:"data-contract-states",alt:"Data Contract states",src:"/img/entity_states.svg"}),(0,i.kt)("h3",{id:"draft"},"DRAFT"),(0,i.kt)("p",null,"This entity is still in development and thus can still be modified.\nIt has not yet been accepted yet, and because of this, it cannot yet be used for processing events."),(0,i.kt)("h3",{id:"active"},"ACTIVE"),(0,i.kt)("p",null,"This entity has been accepted and from now on, its properties are frozen; it cannot be modified anymore (except for the\nmetadata). From now on, it can be used for processing events."),(0,i.kt)("h3",{id:"archived"},"ARCHIVED"),(0,i.kt)("p",null,"This entity has reached its end-of-life state and is not used anymore.\nIt cannot be used for processing ",(0,i.kt)("em",{parentName:"p"},"new")," events, but since it is not physically deleted, it can still be referenced,\nfor example by in-flight events.\nIt can also still be viewed, for example for traceability purposes. If needed, it can be reactivated."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"At the moment, entities can be archived and reactivated freely, so in a way, archival is just a convenience.\nThis may change in the future though.")))}h.isMDXComponent=!0}}]);