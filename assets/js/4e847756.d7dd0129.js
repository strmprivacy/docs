"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9789:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={title:"Personal Data",hide_table_of_contents:!1},i=void 0,s={unversionedId:"overview/pii",id:"overview/pii",title:"Personal Data",description:"[purpose-map]: docs/02-concepts/06-purpose-maps.md",source:"@site/docs/01-overview/02-pii.md",sourceDirName:"01-overview",slug:"/overview/pii",permalink:"/docs/latest/overview/pii",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Personal Data",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Principles",permalink:"/docs/latest/overview/principles"},next:{title:"Design and Architecture",permalink:"/docs/latest/overview/hla"}},p={},l=[{value:"Lawful processing",id:"lawful-processing",level:2},{value:"Data minimization",id:"data-minimization",level:2},{value:"Data retention: no longer than necessary",id:"data-retention-no-longer-than-necessary",level:2}],c={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The principles upon which STRM Privacy has been built, revolve around personal data,\nand the handling of it. This section explains what personal data and personally identifiable information are, why\nit is important to treat this data differently from non-personal data and what the challenges are."),(0,r.kt)("h1",{id:"personal-data-and-personally-identifiable-information-pii"},"Personal data and Personally Identifiable Information (PII)"),(0,r.kt)("p",null,"Privacy as a concept applies to personal data. This can be both ",(0,r.kt)("em",{parentName:"p"},"your data"),", and ",(0,r.kt)("em",{parentName:"p"},"data indicating it's you")," (PII). Following along with ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Personal_data"},"the Wikipedia article")," we see that PII\ndata is ",(0,r.kt)("em",{parentName:"p"},"any information ... that can be used to distinguish or trace an individuals' identity"),"."),(0,r.kt)("p",null,"Legally the concept of PII data is not utilized by the European GDPR\ndirective. Its scope is determined by the non-equivalent concept of\n",(0,r.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1489-1-1"},(0,r.kt)("em",{parentName:"a"},"personal\ndata")),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Article 4(1)")),(0,r.kt)("p",{parentName:"blockquote"},"'personal data' means any information relating to an identified or identifiable natural person ('data subject')")),(0,r.kt)("p",null,"This breaks down into the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Personal Data"),": any information, directly or indirectly, that can be traced back to an individual."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/concepts/data-contracts/data-subjects"},(0,r.kt)("em",{parentName:"a"},"Data Subject")),": the person to whom the data belongs and who should determine what happens with the data.")),(0,r.kt)("h1",{id:"processing-of-data"},"Processing of data"),(0,r.kt)("p",null,"Correctly executing the ",(0,r.kt)("a",{parentName:"p",href:"https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&qid=1620048611044&from=EN#d1e1807-1-1"},"Principles relating to the processing of personal data"),"\nis at the heart of all the privacy related design decisions of STRM Privacy."),(0,r.kt)("p",null,"The following article of the GDPR states:"),(0,r.kt)("h2",{id:"lawful-processing"},"Lawful processing"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Article 5.1(a)")),(0,r.kt)("p",{parentName:"blockquote"},"Personal data shall be processed lawfully, fairly and in a transparent\nmanner in relation to the data subject ('lawfulness, fairness and\ntransparency');")),(0,r.kt)("p",null,"This is the responsibility of the Data Protection Officer (DPO) of a company.\nSTRM Privacy cannot identify the purposes and transparency associated with ",(0,r.kt)("em",{parentName:"p"},"what\npurposes")," our customers have for collecting personal data. The DPO of the\ncustomer shall ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/purpose-maps"},"identify the purpose(s)")," for which certain personal data\nis collected. These purposes are at the core of STRM's ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/"},"data contracts"),",\nspecifying which data fields/attributes contain sensitive information."),(0,r.kt)("p",null,"The data subject (i.e. the person on your website, your client,\nyour patient ...) provides their consent for each purpose,\nwhich is added to ",(0,r.kt)("em",{parentName:"p"},"every")," event that gets processed by STRM Privacy."),(0,r.kt)("p",null,"STRM Privacy removes the personal data aspect of ",(0,r.kt)("strong",{parentName:"p"},"all")," events upon\nacceptance of the event, by ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-processing/pii-field-encryption"},"encrypting")," ",(0,r.kt)("strong",{parentName:"p"},"all")," personal data\nattributes (irrespective of their purpose). These encrypted\nevents do not enter any long-term or persistent storage within STRM Privacy\nbut are transported onwards to customer storage."),(0,r.kt)("p",null,"These encrypted events do not contain ",(0,r.kt)("em",{parentName:"p"},"any personal data"),". Losing them\nmight cost the customer business value, but implies ",(0,r.kt)("em",{parentName:"p"},"no privacy")," risks."),(0,r.kt)("h2",{id:"data-minimization"},"Data minimization"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Article 5.1(c)")," "),(0,r.kt)("p",{parentName:"blockquote"},"adequate, relevant and limited to what is necessary in relation to the\npurposes for which they are processed (\u2018data minimisation\u2019);")),(0,r.kt)("p",null,"STRM Privacy collects events with or without personal data for all the\ncombined purposes of a company. The encryption of all personal data in\nthese events makes that they no longer contain personal data, unless one\nhas access to the associated encryption keys."),(0,r.kt)("p",null,"The most common flow of data processing at STRM Privacy is that the\ncustomer ",(0,r.kt)("em",{parentName:"p"},"does not receive the encryption keys")," but instead requests a\nstream of ",(0,r.kt)("em",{parentName:"p"},"decrypted")," events (which is not persisted), where only\nevents with adequate consent are visible, and with only those personal\ndata attributes that correspond to the purposes."),(0,r.kt)("p",null,"Access to these data is delegated to the DPO of the customer. The data\nconsumer in the company only has to explain the purpose of the data\nprocessing, whereupon the DPO will assign a set of allowed purposes,\ncreate a ",(0,r.kt)("em",{parentName:"p"},"decrypted stream")," with these events, and assign\naccess credentials."),(0,r.kt)("h2",{id:"data-retention-no-longer-than-necessary"},"Data retention: no longer than necessary"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Article 5.1(e)")),(0,r.kt)("p",{parentName:"blockquote"},"kept in a form which permits identification of data subjects for no\nlonger than is necessary for the purposes for which the personal data are processed")),(0,r.kt)("p",null,"STRM Privacy itself keeps the encrypted event data for 7 days ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," for\ntechnical purposes, so that a temporary failure of processing events\ndoes not cause data loss. During this time, the data can\nnot be searched or queried in any meaningful way."),(0,r.kt)("p",null,"The key idea is that the customer does ",(0,r.kt)("em",{parentName:"p"},"not keep")," decrypted data for\nlonger than is required for the purpose of the processing, specifically\nthese data should not be stored into long-term storage."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"configurable setting",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);