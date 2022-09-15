"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3320],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={title:"Customer Cloud Deployments",hide_table_of_contents:!1},l=void 0,i={unversionedId:"quickstart/ccd/index",id:"quickstart/ccd/index",title:"Customer Cloud Deployments",description:"Goal",source:"@site/docs/quickstart/ccd/index.md",sourceDirName:"quickstart/ccd",slug:"/quickstart/ccd/",permalink:"/docs/latest/quickstart/ccd/",draft:!1,tags:[],version:"current",frontMatter:{title:"Customer Cloud Deployments",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Sending and receiving by hand",permalink:"/docs/latest/quickstart/streaming/sending-curl"},next:{title:"Pre-requisites",permalink:"/docs/latest/quickstart/ccd/pre-requisites"}},s={},c=[{value:"Goal",id:"goal",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Communication",id:"communication",level:2},{value:"Data Plane Components",id:"components",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"goal"},"Goal"),(0,r.kt)("p",null,"A Customer Cloud Deployment (or Self-Hosted Data Plane) is set of software components created by STRM Privacy, deployed\nin your infrastructure. The goal is for your data and encryption keys, ",(0,r.kt)("strong",{parentName:"p"},"never")," having to leave your infrastructure,\nstrengthening security even further regarding data owner privacy."),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("p",null,"Various terms are used interchangeably, among which:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Data Plane")," | ",(0,r.kt)("em",{parentName:"li"},"STRM Privacy Data Plane"),(0,r.kt)("br",{parentName:"li"}),"The set of software components, installed through a Helm Chart, facilitating batch and streaming data tasks, among\nwhich encryption and decryption of data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Customer Cloud Deployment")," | ",(0,r.kt)("em",{parentName:"li"},"Self-Hosted Installation"),(0,r.kt)("br",{parentName:"li"}),"Your installation of the deployed Data Plane"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"License Type"),(0,r.kt)("br",{parentName:"li"}),"A license is required in order to install and operate a self-hosted installation. Currently, we\nsupport ",(0,r.kt)("inlineCode",{parentName:"li"},"SELF_HOSTED")," (used for arbitrary Kubernetes clusters; tested in various managed Kubernetes offerings),\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_MARKETPLACE"),".")),(0,r.kt)("h2",{id:"communication"},"Communication"),(0,r.kt)("p",null,"A STRM Privacy Data Plane cannot operate without the Control Plane. Regardless of where your Data Plane runs, it needs\nthe STRM Privacy Control Plane to operate properly. Hence, an ongoing Internet connection is required for your Data\nPlane to run smoothly. If connection is lost to the Control Plane, or during service disruptions of the Control Plane,\nthe Data Plane will keep on running, however, any changes to resources won't be reflected until the Internet connection\nis restored or the service disruption has been resolved."),(0,r.kt)("p",null,"For more information on the tasks of the Control Plane and the Data Plane, please read the ",(0,r.kt)("a",{parentName:"p",href:"./../../concepts/ccd"},"concepts section about\nCustomer Cloud Deployments"),"."),(0,r.kt)("h2",{id:"components"},"Data Plane Components"),(0,r.kt)("p",null,"The Data Plane is composed of various software components. Each component has a specific purpose. Depending on your\nneeds, you may need to enable or disable specific components. All components can be found in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/values.yaml"},(0,r.kt)("inlineCode",{parentName:"a"},"values.yaml"))," on GitHub. The\ntable below describes each component and its purpose:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"Entrypoint for streaming events. Send events using one of our ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/strmprivacy?q=driver&type=all&language=&sort="},"drivers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web Socket"),(0,r.kt)("td",{parentName:"tr",align:null},"A web socket interface for debugging and listening to events that have been sent to a stream.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Job Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new ",(0,r.kt)("a",{parentName:"td",href:"/docs/latest/concepts/batch-jobs"},"batch jobs")," should be executed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Exporters Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new ",(0,r.kt)("a",{parentName:"td",href:"/docs/latest/quickstart/batch/batch-exporter"},"Batch Exporters")," should be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Streams Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kafka topics and decrypters should be created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Connector Agent"),(0,r.kt)("td",{parentName:"tr",align:null},"A polling agent that communicates with the STRM Privacy Control Plane. Periodically checks whether new Kubernetes secrets should be created. The secrets are meant to be used by e.g. Batch Exporters, to be able to export data to a storage bucket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESR Proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Event Statistics Recorder Proxy. Responsible for keeping track of the amount of streaming events that are sent to your Event Gateway instance.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decrypter Config"),(0,r.kt)("td",{parentName:"tr",align:null},"A Kubernetes Config Map, meant as generic configuration for decrypter deployments, created by the Streams Agent.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Batch Exporter Config"),(0,r.kt)("td",{parentName:"tr",align:null},"A Kubernetes Config Map, meant as generic configuration for Batch Exporter deployments, created by the Batch Exporter Agent.")))))}u.isMDXComponent=!0}}]);