"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3614],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9614:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={title:"Bring Your Own License (BYOL)",hide_table_of_contents:!1,description:"Billing via STRM Privacy"},i=void 0,o={unversionedId:"quickstart/ccd/aws-marketplace/byol",id:"quickstart/ccd/aws-marketplace/byol",title:"Bring Your Own License (BYOL)",description:"Billing via STRM Privacy",source:"@site/docs/03-quickstart/05-ccd/03-aws-marketplace/01-byol.md",sourceDirName:"03-quickstart/05-ccd/03-aws-marketplace",slug:"/quickstart/ccd/aws-marketplace/byol",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/byol",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bring Your Own License (BYOL)",hide_table_of_contents:!1,description:"Billing via STRM Privacy"},sidebar:"docs",previous:{title:"AWS Marketplace Installations",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/"},next:{title:"Pay As You Go (PAYG)",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/payg"}},s={},p=[{value:"Step 1: Follow along with the general steps for Customer Cloud Deployment",id:"step-1-follow-along-with-the-general-steps-for-customer-cloud-deployment",level:2},{value:"Step 2: Setup a Kubernetes cluster with AWS EKS",id:"step-2-setup-a-kubernetes-cluster-with-aws-eks",level:2},{value:"Step 3: Setup your STRM Privacy Data Plane",id:"step-3-setup-your-strm-privacy-data-plane",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to get up and running with a Customer Cloud Deployment through the AWS Marketplace."),(0,r.kt)("h2",{id:"step-1-follow-along-with-the-general-steps-for-customer-cloud-deployment"},"Step 1: Follow along with the general steps for Customer Cloud Deployment"),(0,r.kt)("p",null,"Before you can launch your AWS Marketplace STRM Privacy - Bring Your Own License Installation, you need to follow along\nwith ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/pre-requisites#step1"},"step 1"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/pre-requisites#step2"},"step 2"),"\nfrom the pre-requisites section."),(0,r.kt)("p",null,"Additionally, to the tools mentioned in ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/pre-requisites#step2"},"step 2"),", you'll need to\ninstall:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eksctl.io/"},(0,r.kt)("inlineCode",{parentName:"a"},"eksctl")),": a CLI to easily manage EKS clusters (unifies a lot of ",(0,r.kt)("inlineCode",{parentName:"li"},"aws")," CLI and ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),"\ncommands).")),(0,r.kt)("h2",{id:"step-2-setup-a-kubernetes-cluster-with-aws-eks"},"Step 2: Setup a Kubernetes cluster with AWS EKS"),(0,r.kt)("p",null,"One of the pre-requisites for the STRM Privacy Data Plane is an operational Kubernetes cluster. If you don't have an EKS\ncluster yet, please follow the instructions on how to setup an EKS cluster in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"AWS EKS getting started guide"),"."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Ensure that the EKS cluster you create, is ",(0,r.kt)("u",null,(0,r.kt)("strong",{parentName:"p"},"not"))," a Fargate EKS cluster as that is not supported by the Data\nPlane.")),(0,r.kt)("h2",{id:"step-3-setup-your-strm-privacy-data-plane"},"Step 3: Setup your STRM Privacy Data Plane"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-2ekyuezbwmiak"},"STRM Privacy AWS Marketplace")," listing and\nfollow the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS Marketplace",src:a(9283).Z,width:"2404",height:"1970"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Subscribe"),(0,r.kt)("br",{parentName:"p"}),"\n","Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue to Subscribe"),", follow the instructions and start your subscription. Come back to this guide after\nyou've finished subscribing."),(0,r.kt)("admonition",{parentName:"li",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The installation instructions in the AWS Marketplace after subscribing are quite unclear, as many details are left\nout.\nPlease follow along with this guide to help you setup your Data Plane via the AWS Marketplace"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Install the")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/data-plane-helm-chart"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/github/v/release/strmprivacy/data-plane-helm-chart?label=Data%20Plane%20Helm%20Chart#img-shield-vertical-align",alt:"data-plane-version"})),(0,r.kt)("br",{parentName:"p"}),"\n","Run the following commands shown in the script below. If you are working with different AWS profiles, don't forget to\nadd the ",(0,r.kt)("inlineCode",{parentName:"p"},"--profile your_profile")," flag to the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," command below."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers placeholders version=https://api.github.com/repos/strmprivacy/data-plane-helm-chart/releases/latest#name, installationId=Installation ID, clientId=Client ID of your installation, clientSecret=Client Secret of your installation",showLineNumbers:!0,placeholders:!0,version:"https://api.github.com/repos/strmprivacy/data-plane-helm-chart/releases/latest#name,",installationId:"Installation","ID,":!0,clientId:"Client",ID:!0,of:!0,your:!0,"installation,":!0,clientSecret:"Client",Secret:!0,installation:!0},"# Enables using Helm Charts in Open Container Image format\nexport HELM_EXPERIMENTAL_OCI=1\n\n# Region us-east-1 is required as the AWS Marketplace ECR registries are located there\naws ecr get-login-password \\\n--region us-east-1 | helm registry login \\\n--username AWS \\\n--password-stdin 709825985650.dkr.ecr.us-east-1.amazonaws.com\n\n# Create a temporary working directory to download the chart to and install it\nmkdir awsmp-chart && cd awsmp-chart\n\n# Pull the latest Helm Chart Version: $version\nhelm pull oci://709825985650.dkr.ecr.us-east-1.amazonaws.com/strm-privacy/strm --version $version\n\n# Untar the chart and remove the tarball\ntar xf $(pwd)/* && find $(pwd) -maxdepth 1 -type f -delete\n\n# Install the chart\n// callout-1\nhelm install strmprivacy \\\n// callout-2\n--namespace strmprivacy ./* \\\n// callout-3\n--set license.installationType=AWS_MARKETPLACE \\\n--set license.installationId=$installationId \\\n--set license.installationClientId=$clientId \\\n--set license.installationClientSecret=$clientSecret\n")),(0,r.kt)("p",{parentName:"li"},"Replace the placeholders above with the values that can be found in your\n",(0,r.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/installation/configuration"},"installation configuration"),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command\nabove, the following remarks apply:",(0,r.kt)("br",{parentName:"p"}),"\n","1","."," The name of the installed Helm Chart (how the installation will show up in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list")," command).",(0,r.kt)("br",{parentName:"p"}),"\n","2","."," The Kubernetes namespace to which the Helm Chart will be installed.",(0,r.kt)("br",{parentName:"p"}),"\n","3","."," The ",(0,r.kt)("inlineCode",{parentName:"p"},"installationType"),", that indicates that this is a AWS Marketplace BYOL installation.  "),(0,r.kt)("p",{parentName:"li"},"Feel free to change the value for the name of the Helm Chart (1) and the Kubernetes namespace (2).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Wait until the installation finishes"),(0,r.kt)("br",{parentName:"p"}),"\n","As by default, the embedded Kafka, Redis, and Postgres Database are included, installation can take a moment. After\ninstallation, you should end up with a namespace that contains all components that were enabled as specified in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," (here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/data-plane-helm-chart/blob/master/helm/values.yaml"},"the defaults"),"\nare used, as they're not overridden)."))),(0,r.kt)("p",null,"After these steps, you should end up with a namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy")," with, by\ndefault, ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/#components"},"all components")," enabled. If you\nwish otherwise, you can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to match your needs."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Even though the example above uses ",(0,r.kt)("inlineCode",{parentName:"p"},"--set")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command, prefer using a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),". More details\ncan be found ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/aws-marketplace/advanced#using-a-valuesyaml"},"here"),".")),(0,r.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,r.kt)("p",null,"You've installed a STRM Privacy Data Plane via the AWS Marketplace. If you have had any issues during your\ninstallation, please let us know, or create a pull request on GitHub to improve these docs."),(0,r.kt)("p",null,"Now that you are done with the setup, follow the docs\non ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/interacting"},"how to interact with your cluster")," to start\nusing it."))}u.isMDXComponent=!0},9283:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/byol-ce7072cd5276be599ffcf0597045b9fa.png"}}]);