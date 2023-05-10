"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(n),f=a,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||o;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=l;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},4017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Purpose maps",hide_table_of_contents:!1},s=void 0,i={unversionedId:"concepts/purpose-maps",id:"concepts/purpose-maps",title:"Purpose maps",description:"[data-contract]: docs/02-concepts/02-data-contracts/index.md",source:"@site/docs/02-concepts/06-purpose-maps.md",sourceDirName:"02-concepts",slug:"/concepts/purpose-maps",permalink:"/docs/latest/concepts/purpose-maps",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Purpose maps",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Role-Based Access Control (RBAC)",permalink:"/docs/latest/concepts/rbac"},next:{title:"Definitions",permalink:"/docs/latest/concepts/definitions"}},c={},p=[],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In the world of data processing and privacy, everything starts with a legal basis for processing: to acquire and use data,\nyou need a justified basis for it. For instance, under GDPR you could need the data to fulfil a contract, have a legitimate\ninterest to the data, or obtain (different types of) consent."),(0,a.kt)("p",null,"With STRM, you define these legal bases and the usage target as ",(0,a.kt)("inlineCode",{parentName:"p"},"purposes")," in a purpose map: a list of different processing\nmotivations. This way, DPOs and privacy engineers can make sure data processing adheres to the internally defined purposes. "),(0,a.kt)("p",null,"Engineering and data teams can then attach a purpose as defined in the map to every record or event processed with STRM.\nTogether with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/concepts/data-contracts/"},"data contract"),", this acts as the instruction to transform and split the data into privacy streams.\nIt is applied in a time-forward manner. Do you have e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"marketing consent")," as legitimate purpose for user Mario on Monday\nand does Mario revoke the consent on Tuesday, leaving you with only ",(0,a.kt)("inlineCode",{parentName:"p"},"contract fulfillment")," as basis for Mario's data\nprocessing? Then the data processing automagically follows this change!"),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Make sure your basis for processing and purpose map definitions match so it is accurately attached to the data. Our purpose\nmaps are not a consent management solution (yet).")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Creating purpose maps is done through our console: you add and describe the different purposes you have for data.\nThen you can start using them in your data contracts and privacy streams.")))}u.isMDXComponent=!0}}]);