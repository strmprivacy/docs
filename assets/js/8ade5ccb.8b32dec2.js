"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1663],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5124:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"Data Subjects",hide_table_of_contents:!1},o=void 0,s={unversionedId:"concepts/data-contracts/data-subjects",id:"concepts/data-contracts/data-subjects",title:"Data Subjects",description:"[ds]//eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1489-1-1",source:"@site/docs/02-concepts/02-data-contracts/04-data-subjects.md",sourceDirName:"02-concepts/02-data-contracts",slug:"/concepts/data-contracts/data-subjects",permalink:"/docs/latest/concepts/data-contracts/data-subjects",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Data Subjects",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Masked Fields",permalink:"/docs/latest/concepts/data-contracts/masked-fields"},next:{title:"Deployment Modes",permalink:"/docs/latest/concepts/deployment-modes/"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-subjects"},"Data Subjects"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"data-subject")," is a GDPR term that defines a natural person."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Personal data shall mean any information relating to an identified or identifiable natural person\n(\u2018data subject\u2019). An identifiable natural person is one who can be identified, directly or indirectly,\nin particular by reference to an identifier such as a name, an identification number, location data, an\nonline identifier or to one or more factors specific to the physical, physiological, genetic, mental,\neconomic, cultural or social identity of that natural person.")),(0,r.kt)("p",null,"In the perspective of STRM Privacy, a data subject is a unique identifier within the scope of an organization that directly\n(or indirectly) links to such a person, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a customer id"),(0,r.kt)("li",{parentName:"ul"},"a Social Security Number"),(0,r.kt)("li",{parentName:"ul"},"a car license plate (links indirectly to a person)")),(0,r.kt)("h1",{id:"data-subjects-api"},"Data Subjects API"),(0,r.kt)("p",null,"This API enables your organization to find all encryption keys generated by STRM Privacy ",(0,r.kt)("em",{parentName:"p"},"data pipelines")," (stream or batch) that were used to\nencrypt Personally Identifiable Information."),(0,r.kt)("p",null,"The following requirements exist in order for this service to do its work:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"data points must have an attribute that is equal to the data subject. This would mean that something like ",(0,r.kt)("inlineCode",{parentName:"li"},"customer\nID")," would have to exist in your data"),(0,r.kt)("li",{parentName:"ol"},"the data contract that is applicable to your data pipeline (stream or batch) must have a ",(0,r.kt)("inlineCode",{parentName:"li"},"dataSubjectField")," attribute\nthat defines ",(0,r.kt)("em",{parentName:"li"},"which data field")," contains the data subject. This field is ",(0,r.kt)("em",{parentName:"li"},"optional"),"; when absent, the Data Subjects\nAPI will not be involved in the pipeline.")),(0,r.kt)("p",null,"With both requirements in place, every new encryption key that is created while processing a pipeline of data points will\nhave its  ",(0,r.kt)("em",{parentName:"p"},"key link")," stored by the Data Subjects API, together with its validity period."),(0,r.kt)("p",null,"The Data Subjects API can be accessed from the CLI with the following commands:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/list/data-subjects"},(0,r.kt)("inlineCode",{parentName:"a"},"strm list data-subjects"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/delete/data-subjects"},(0,r.kt)("inlineCode",{parentName:"a"},"strm delete data-subjects"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/list/data-subject-keylinks"},(0,r.kt)("inlineCode",{parentName:"a"},"strm list data-subject-keylinks")))),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://strmprivacy.io/posts/batchjobs-and-datasubjects/#dss"},"recent blog-post")," walks through a hands-on session with the Data\nSubjects API."))}d.isMDXComponent=!0}}]);