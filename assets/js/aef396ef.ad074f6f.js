"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4580],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Customer Cloud Deployments",hide_table_of_contents:!1},i=void 0,s={unversionedId:"concepts/ccd",id:"concepts/ccd",title:"Customer Cloud Deployments",description:"[console]//console.strmprivacy.io",source:"@site/docs/concepts/ccd.md",sourceDirName:"concepts",slug:"/concepts/ccd",permalink:"/docs/latest/concepts/ccd",draft:!1,tags:[],version:"current",frontMatter:{title:"Customer Cloud Deployments",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Simple Schemas",permalink:"/docs/latest/concepts/simple-schemas"},next:{title:"Role-Based Access Control (RBAC)",permalink:"/docs/latest/concepts/rbac"}},l={},c=[{value:"CCD infrastructure",id:"ccd-infrastructure",level:2},{value:"Customer infrastructure",id:"customer-infrastructure",level:2},{value:"Control plane at customer",id:"control-plane-at-customer",level:2},{value:"Deployment in your infrastructure",id:"deployment-in-your-infrastructure",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,"In a Customer Cloud Deployment (CCD), ",(0,a.kt)("em",{parentName:"p"},"all event processing takes place in a Kubernetes cluster specified by the\ncustomer"),". ",(0,a.kt)("strong",{parentName:"p"},"Your sensitive events never leave your own cluster.")),(0,a.kt)("p",null,"The entities doing the processing get configured by STRM Privacy configurations ",(0,a.kt)("em",{parentName:"p"},"outside that cluster"),", stored in the\nSTRM Privacy ",(0,a.kt)("em",{parentName:"p"},"control plane"),". Inside the ",(0,a.kt)("em",{parentName:"p"},"customer data plane"),", several ",(0,a.kt)("em",{parentName:"p"},"agents")," run that frequently poll\n",(0,a.kt)("inlineCode",{parentName:"p"},"api.strmprivacy.io"),". Based on the configuration provided by the control plane, the agents determine whether any new\nentities (e.g. a stream, a batch exporter, ...) are needed, or existing ones should be updated or removed. The agents\nare therefore indirectly controlled via user actions in the ",(0,a.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"STRM Privacy Console")," and/or the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.strmprivacy.io/docs/latest/cli-index/"},"cli"),"."),(0,a.kt)("admonition",{title:"CCDs were successfully tested on multiple Kubernetes implementations: local (K3S), GKE, EKS, AKS, OVHcloud.",type:"note"}),(0,a.kt)("h1",{id:"ccd-explained"},"CCD explained"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ccd infra",src:n(2753).Z,width:"1922",height:"1682"})),(0,a.kt)("h2",{id:"ccd-infrastructure"},"CCD infrastructure"),(0,a.kt)("p",null,"In the graphic above, you can see where all software runs in a CCD setup."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"On the left is your infrastructure (e.g. AWS account)."),(0,a.kt)("li",{parentName:"ul"},'On the right is our SAAS, which is accessible by gRPC services over the internet. We call this the "control plane".')),(0,a.kt)("h2",{id:"customer-infrastructure"},"Customer infrastructure"),(0,a.kt)("p",null,"Logically, your infrastructure is divided into multiple parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'The "data plane", which is the software where all data processing takes place.'),(0,a.kt)("li",{parentName:"ul"},'A part of the "control plane", which runs in your infrastructure, responsible for managing the data plane.')),(0,a.kt)("p",null,"The idea is that with a CCD, none of your data leaves your infrastructure to our SAAS, giving you full control over the\ndata, where it's stored, how long it's stored, who can access it, etc."),(0,a.kt)("p",null,"Additionally, you can choose which parts of the STRM data plane you'd like to run on your infrastructure, either just\nthe streaming engine, or the batch engine, or both."),(0,a.kt)("h2",{id:"control-plane-at-customer"},"Control plane at customer"),(0,a.kt)("p",null,'In your infrastructure, we install some "agents". Agents are our software components, running in Kubernetes, which\nmanage the software in the data planes. They automatically keep your data plane in sync when for example you create a\nstream or exporter.'),(0,a.kt)("p",null,'The agents are an implementation of the "desired state" approach, which is used by many other popular tools. Basically,\nit comes down to three steps:'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Retrieve the desired state from a central configuration location."),(0,a.kt)("li",{parentName:"ol"},"Retrieve the actual running state in your infrastructure."),(0,a.kt)("li",{parentName:"ol"},"Compare the two and make the necessary changes to the actual running state make it equal to the desired state."),(0,a.kt)("li",{parentName:"ol"},"Repeat.")),(0,a.kt)("p",null,"This pattern is very robust, handles failures and dependencies between resources very well and, from a CCD perspective\nis relatively easy to implement on your side. The only requirement is that outgoing traffic to ",(0,a.kt)("inlineCode",{parentName:"p"},"api.strmprivacy.io")," on\nport 443 is allowed. No need for incoming port forwarding rules, DMZ, etc."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"All communication to and from the STRM SAAS is TLS encrypted, and defined by a ",(0,a.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://github.com/strmprivacy/api-definitions/tree/master/protos/strmprivacy"},"public gRPC protocol"),".")),(0,a.kt)("h2",{id:"deployment-in-your-infrastructure"},"Deployment in your infrastructure"),(0,a.kt)("p",null,"The parts are deployed in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, the control plane is deployed by you, using our Helm chart. Here you can customize your cluster. This has to\nbe done once at the start and if you'd like to install new versions of the STRM software. It's your cluster, so we\ndon't auto-update anything. You decide if you'd like to upgrade and when it happens."),(0,a.kt)("li",{parentName:"ul"},"The third party components in the data plane is also deployed by you, using our Helm chart. You can choose if you'd\nlike to use our pre-packaged versions of Kafka, Redis and Postgres, or if you'd like to connect to an external\nKafka, Redis and/or Postgres. For example RDS, ElastiCache or Confluent. Note that our pre-packaged versions have\nsimple configurations and are not meant for production usage"),(0,a.kt)("li",{parentName:"ul"},"The generic STRM software, like the Event Gateway are also deployed through the Helm chart."),(0,a.kt)("li",{parentName:"ul"},"All the rest is deployed by the STRM agents, using the desired state approach, as described before.")),(0,a.kt)("p",null,"You can choose what you'd like to run, but there are two major categories:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The streaming engine, which requires Kafka, Redis, Event Gateway, Streams Agent, Data Connectors Agent and Exporters\nAgent."),(0,a.kt)("li",{parentName:"ul"},"The batch engine, which requires Postgresql, Data Connectors Agent and Batch Jobs Agent. ")),(0,a.kt)("p",null,"You can choose to deploy just one of these or both."))}p.isMDXComponent=!0},2753:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ccd-infra-ae469909f77e62116350d79c4c05411b.png"}}]);