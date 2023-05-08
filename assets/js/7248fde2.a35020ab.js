"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[9218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6010),c=r(3438),i=r(9960),o=r(3919),l=r(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:c,description:i}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:c},r," ",c),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){var t;let{item:r}=e;const a=(0,o.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(m,{href:r.href,icon:a,title:r.label,description:null==i?void 0:i.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(k,e);const i=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},9748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),c=r(2991);const i={title:"AWS Marketplace Installations",hide_table_of_contents:!1,description:"Subscribe to the AWS Marketplace version to keep using the products you already know."},o=void 0,l={unversionedId:"quickstart/ccd/aws-marketplace/index",id:"quickstart/ccd/aws-marketplace/index",title:"AWS Marketplace Installations",description:"Subscribe to the AWS Marketplace version to keep using the products you already know.",source:"@site/docs/03-quickstart/05-ccd/03-aws-marketplace/index.md",sourceDirName:"03-quickstart/05-ccd/03-aws-marketplace",slug:"/quickstart/ccd/aws-marketplace/",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/",draft:!1,tags:[],version:"current",frontMatter:{title:"AWS Marketplace Installations",hide_table_of_contents:!1,description:"Subscribe to the AWS Marketplace version to keep using the products you already know."},sidebar:"docs",previous:{title:"Advanced Configuration",permalink:"/docs/latest/quickstart/ccd/self-hosted/advanced"},next:{title:"Bring Your Own License (BYOL)",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/byol"}},s={},u=[{value:"Marketplace Quickstarts",id:"marketplace-quickstarts",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The STRM Privacy Data Plane can also be installed through AWS' Marketplace. Use the tools you are familiar with, and\ninstall STRM Privacy via AWS directly. Billing and payments can either occur via AWS via the Pay As You Go variant,\nwhere STRM Privacy will show up in a unified bill for AWS, or via the Bring Your Own License variant, where billing\nhappens through Stripe (STRM Privacy's payment platform)."),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"Installing the STRM Privacy Data Plane can only be done when this is enabled for your account.\nPlease ",(0,a.kt)("a",{parentName:"p",href:"https://strmprivacy.io/request-demo/"},"get in touch with sales")," if you are interested in this.")),(0,a.kt)("h2",{id:"marketplace-quickstarts"},"Marketplace Quickstarts"),(0,a.kt)("p",null,"First, follow along with either of the quickstarts to get started with your Data Plane, running on AWS. After "),(0,a.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);