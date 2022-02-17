"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6251],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6871:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={title:"the strmMeta section",hide_table_of_contents:!1},l="StrmMeta in every schema",c={unversionedId:"concepts/strm-meta",id:"version-1.0.0/concepts/strm-meta",title:"the strmMeta section",description:"Every schema in STRM Privacy has this section called strmMeta. Why",source:"@site/versioned_docs/version-1.0.0/concepts/strm-meta.md",sourceDirName:"concepts",slug:"/concepts/strm-meta",permalink:"/docs/1.0.0/concepts/strm-meta",tags:[],version:"1.0.0",frontMatter:{title:"the strmMeta section",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Schemas and Contracts",permalink:"/docs/1.0.0/concepts/schemas-and-contracts"},next:{title:"Masked Fields",permalink:"/docs/1.0.0/concepts/masked-fields"}},p=[{value:"strmMeta in an event example",id:"strmmeta-in-an-event-example",children:[],level:2},{value:"strmMeta fields",id:"strmmeta-fields",children:[{value:"billingId",id:"billingid",children:[],level:3},{value:"eventContractRef",id:"eventcontractref",children:[],level:3},{value:"consentLevels",id:"consentlevels",children:[],level:3},{value:"keyLink",id:"keylink",children:[],level:3},{value:"nonce",id:"nonce",children:[],level:3},{value:"timestamp",id:"timestamp",children:[],level:3}],level:2},{value:"the near future",id:"the-near-future",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strmmeta-in-every-schema"},"StrmMeta in every schema"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Every")," schema in STRM Privacy has this section called ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta"),". Why\nis this? And why does even your own private customer specific schema\nneed to have it?"),(0,r.kt)("p",null,"StrmMeta exists because it must provide a link to the rules that need to\nbe applied to an event, once it has been deserialized in the STRM\nPrivacy event gateway. The serialization schema defines the shape of the\nevent, and is the first way that STRM Privacy helps in maintaining the\nquality of event data."),(0,r.kt)("p",null,"But once deserialized, STRM Privacy needs to apply rules to"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"validate event attribute contents")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"apply encryption to personal data attributes")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"determine if events belong to the same data owner"))),(0,r.kt)("p",null,"In order to be able to do that, events are assigned an event contract,\nand the event contract defines the rules."),(0,r.kt)("h2",{id:"strmmeta-in-an-event-example"},"strmMeta in an event example"),(0,r.kt)("p",null,"Here\u2019s an example taken from the quickstart pages. The fields outside of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," section can be used for anything your organization\ndesires (as long as it conforms to the schema). But ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," must\nexist, and it will also end up in your persistent storage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"one-event")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "strmMeta": {\n    "eventContractRef": "strmprivacy/example/1.3.0", //(1)\n    "nonce": 15082564,\n    "timestamp": 1629192833072,\n    "keyLink": "55c2f72b-cff8-4814-ae33-e125c77e50f9", //(2)\n    "billingId": "demo8542234275",\n    "consentLevels": [ 0, 1, 2, 3 ] //(3)\n  },\n  "uniqueIdentifier": "unique-14",\n  "consistentValue": "session-740",\n  "someSensitiveValue": "ASB9bJrnYjxjNF5Txc+Wc2k1zvzFAmE03SYK499WK5Du",\n  "notSensitiveValue": "not-sensitive-39"\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the reference to the event contract that was used to accept this\nevent."),(0,r.kt)("li",{parentName:"ol"},"an identifier that can be used to retrieve the encryption key that\nwas used to encrypt the personal data attributes of this event."),(0,r.kt)("li",{parentName:"ol"},"the consent levels given by the data owner for the processing of\nthis event. See ",(0,r.kt)("a",{parentName:"li",href:"/docs/1.0.0/overview/organization#consent-levels"},"here")," for\nan explanation of these values.")),(0,r.kt)("h2",{id:"strmmeta-fields"},"strmMeta fields"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta")," definition contains the following fields"),(0,r.kt)("p",null,"billingId",(0,r.kt)("br",{parentName:"p"}),"\n","the reference to the entity that will eventually be billed for this\nevent. The sending application does not need to set this event."),(0,r.kt)("p",null,"eventContractRef",(0,r.kt)("br",{parentName:"p"}),"\n","the reference to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.0/concepts/schemas-and-contracts"},"event contract")," that\ngoverns the privacy and validation rules. The sending application ",(0,r.kt)("strong",{parentName:"p"},"must\nset this field")," to a (handle/name/version) reference of an event\ncontract that refers to this serialization schema. See ",(0,r.kt)("a",{parentName:"p",href:"near-future"},"the near future")," for a discussion on this."),(0,r.kt)("p",null,"consentLevels",(0,r.kt)("br",{parentName:"p"}),"\n","0 or more ",(0,r.kt)("em",{parentName:"p"},"consents")," that were given by the data owner for the further\nuse of this event. The sending application ",(0,r.kt)("strong",{parentName:"p"},"must set this field"),". See\nbelow for details."),(0,r.kt)("p",null,"keyLink",(0,r.kt)("br",{parentName:"p"}),"\n","a random value that provides a link to the encryption key that was used\nto encrypt the PII fields of this event. The sending application does\nnot need to set this field."),(0,r.kt)("p",null,"nonce",(0,r.kt)("br",{parentName:"p"}),"\n","a random integer added to each event on acceptance. This makes it easy\nto detect possible data duplications in downstream processing. The\nsending application does not need to set this field."),(0,r.kt)("p",null,"timestamp",(0,r.kt)("br",{parentName:"p"}),"\n","a millisecond accuracy timestamp added upon acceptance in the STRM\nPrivacy gateway. The sending application does not need to set this\nfield."),(0,r.kt)("h3",{id:"billingid"},"billingId"),(0,r.kt)("p",null,"This one is fairly simple. It defines the entity that eventually pays\nthe bill. The application that sends the event to STRM Privacy ",(0,r.kt)("em",{parentName:"p"},"does not\nhave to set this attribute"),", because the STRM Privacy gateway will\ndetermine this from the OAuth2 client credentials that are needed to\nhave an event be accepted by the gateway."),(0,r.kt)("h3",{id:"eventcontractref"},"eventContractRef"),(0,r.kt)("p",null,"A STRM Privacy event is transmitted to the event gateway with the\nserialized event in the ",(0,r.kt)("em",{parentName:"p"},"body")," of the http/2 post call, and a header\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"Strm-Schema-Ref")," that tells the gateway how to deserialize these\ndata."),(0,r.kt)("p",null,"Once deserialized, the event gateway will look for the value of\n",(0,r.kt)("inlineCode",{parentName:"p"},"strmMeta/eventContractRef")," (inside the deserialized event) to determine\nthe rules to be applied to this event. See ",(0,r.kt)("a",{parentName:"p",href:"near-future"},"the near future")," for a discussion on a proposed change."),(0,r.kt)("h3",{id:"consentlevels"},"consentLevels"),(0,r.kt)("p",null,"The sending application ",(0,r.kt)("strong",{parentName:"p"},"must fill in this field")," with a list of\nconsents given by the data-owner for the use of this event. Technically\nthis field holds a list of 0 or more integers, and the meaning of those\nintegers is ",(0,r.kt)("strong",{parentName:"p"},"completely up to the customer"),". The customer must find\nsome way (typically http cookies) to determine permission(s) from the\ndata-owner, and implement the technical means to set those values in\nthis field. 0 consent levels means the data owner does not give any\npermissions for the PII fields. For this customer, all PII data are\npermanently hidden in the encrypted stream."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/1.0.0/overview/organization#consent-levels"},"here")," for a discussion on\nconsent levels in your organization."),(0,r.kt)("h3",{id:"keylink"},"keyLink"),(0,r.kt)("p",null,"When the STRM Privacy event gateway determines that an event belongs to\na new sequence (via the value of the key field in the event contract),\nor that an existing sequence has lasted longer than 24 hours, it will\ngenerate a new encryption key for the personal data attributes."),(0,r.kt)("p",null,"This ",(0,r.kt)("inlineCode",{parentName:"p"},"keyLink")," field provides a ",(0,r.kt)("em",{parentName:"p"},"uuid")," value that is used to look up\nthis encryption key. This lookup is done in our decrypted streams, but\ncan also be done in case the encryption keys were exported to the\ncustomer."),(0,r.kt)("h3",{id:"nonce"},"nonce"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("em",{parentName:"p"},"convenience")," attribute, it is not technically necessary by\nStream Machine. Hard experience has taught us that data duplication by\nhiccups in stream processing is quite common. This might happen inside\nSTRM Privacy but also downstream with the customers further processing.\nProviding a unique random nonce in the STRM Privacy event gateway will\nmake it possible to detect duplicates easily, especially combined with\nthe event timestamp"),(0,r.kt)("h3",{id:"timestamp"},"timestamp"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("em",{parentName:"p"},"convenience")," attribute, it is not technically necessary by\nStream Machine. It contains the millisecond UTC time since the Unix\nepoch when the event was accepted by the STRM Privacy event gateway."),(0,r.kt)("h2",{id:"the-near-future"},"the near future"),(0,r.kt)("p",null,"We aim to move the setting of the event contract into the STRM Privacy\nconfiguration, where the DPO determines what event contract governs a\ncertain schema. This way updating for instance personal data attributes\nor attribute validation rules becomes doable without developer\ninvolvement, just by the DPO team."))}d.isMDXComponent=!0}}]);