"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2280],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={title:"Design and Architecture",hide_table_of_contents:!1},o="Architecture",s={unversionedId:"overview/hla",id:"overview/hla",title:"Design and Architecture",description:"This section shows a high level architecture of STRM Privacy. It shows",source:"@site/docs/01-overview/03-hla.md",sourceDirName:"01-overview",slug:"/overview/hla",permalink:"/docs/latest/overview/hla",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Design and Architecture",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Personal Data",permalink:"/docs/latest/overview/pii"},next:{title:"STRM Privacy and your organization",permalink:"/docs/latest/overview/organization"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Outputs",id:"outputs",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"This section shows a high level architecture of STRM Privacy. It shows\nhow data is processed, before it is exposed to an application consuming\nthe data."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"When sending data to, or receiving data from STRM Privacy, your\napplication must identify itself using client credentials. These\ncredentials are provided through the ",(0,n.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"Console")," or via the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/cli"},(0,n.kt)("inlineCode",{parentName:"a"},"strm")," command line interface"),"."),(0,n.kt)("p",null,"All events that are sent to STRM Privacy (regardless of ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/deployment-modes/"},"deployment mode"),")\nhave schema reference (provided through an HTTP header) that defines the structure and contents of the event."),(0,n.kt)("p",null,"The STRM Privacy ",(0,n.kt)("em",{parentName:"p"},"Event Gateway")," will verify that the data:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"...is of the correct serialization format, as specified in schema\nreference")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"...is a valid serialized message")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"...complies to the pre-defined validation rules, as specified in the\nData Contract (the contract reference is embedded in the mandatory ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/strm-meta"},(0,n.kt)("inlineCode",{parentName:"a"},"strmMeta")),"\nsection of the event)"))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"High Level Architecture",src:a(3746).Z,width:"3300",height:"1774"})),(0,n.kt)("p",null,"Upon accepting an event, the ",(0,n.kt)("em",{parentName:"p"},"Event Gateway")," will use the ",(0,n.kt)("em",{parentName:"p"},"Encrypter")," to\nencrypt ",(0,n.kt)("strong",{parentName:"p"},"all")," defined ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/overview/pii"},"Personal data and PII"),"\nattributes of the event. Which fields are personal data is defined in the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/"},"data\ncontract"),". The\nschema can have multiple levels of Personal Data attributes but all of them are\nencrypted with the same encryption key that is linked to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/#contracts"},(0,n.kt)("inlineCode",{parentName:"a"},"keyField")),"."),(0,n.kt)("p",null,"You can create decrypted streams that contain a subset of the\nencrypted stream (more specifically, ",(0,n.kt)("strong",{parentName:"p"},"only")," the events of ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/data-subjects"},"data subjects"),"\nthat provided consent for the desired purposes), with only those Personal Data\nfields decrypted that you have requested. It is ",(0,n.kt)("strong",{parentName:"p"},"not")," required to create decrypted streams. "),(0,n.kt)("p",null,"The algorithm is as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"we define a derived stream where for example we request to receive\nevents that provide a processing basis for levels 1, 3 and 8.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the decrypter will inspect every event, and will ignore all events\nthat don\u2019t have ",(0,n.kt)("em",{parentName:"p"},"at least")," these 3 levels set in the\n",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/strm-meta"},(0,n.kt)("inlineCode",{parentName:"a"},"strmMeta.consentLevels")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"the events that are accepted by the decrypter will then be partially\ndecrypted; only the encrypted data fields with Personal Data levels 1, 3 and 8 will be\ndecrypted. This means that assuming a data subject has given consent for\na couple more Personal Data levels, fields with those purpose levels will\n",(0,n.kt)("strong",{parentName:"p"},"not be decrypted"),". This is the mechanism that STRM Privacy uses\nto adhere to ",(0,n.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1888-1-1"},"article 6 of the\nGDPR"),".\nA data processing unit in a company receives only those events that the data subject has consented\nto, with only those Personal Data attributes it needs."))),(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("p",null,"STRM Privacy provides multiple ways to output data. Read more on exporting data ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/receiving-data/"},"here"),"."))}d.isMDXComponent=!0},3746:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/strm-architecture-visual-61c6de90af86acd047036219914d15f6.png"}}]);