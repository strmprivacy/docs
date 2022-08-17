"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5548],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"AWS Marketplace Installation",hide_table_of_contents:!1},s=void 0,i={unversionedId:"quickstart/ccd/aws-marketplace",id:"quickstart/ccd/aws-marketplace",title:"AWS Marketplace Installation",description:"This section describes how to get up and running with a Customer Cloud Deployment through the AWS Marketplace.",source:"@site/docs/quickstart/ccd/aws-marketplace.md",sourceDirName:"quickstart/ccd",slug:"/quickstart/ccd/aws-marketplace",permalink:"/docs/latest/quickstart/ccd/aws-marketplace",draft:!1,tags:[],version:"current",frontMatter:{title:"AWS Marketplace Installation",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Authenticated Kafka",permalink:"/docs/latest/quickstart/ccd/authenticated"},next:{title:"Interacting with a Customer Cloud Deployment",permalink:"/docs/latest/quickstart/ccd/interacting"}},l={},p=[{value:"Step 1: Follow along with the general steps for Customer Cloud Deployment",id:"step-1-follow-along-with-the-general-steps-for-customer-cloud-deployment",level:2},{value:"Step 2: Setup a Kubernetes cluster with AWS EKS",id:"step-2-setup-a-kubernetes-cluster-with-aws-eks",level:2},{value:"Step 3: Subscribe to the STRM Privacy Data Plane",id:"step-3-subscribe-to-the-strm-privacy-data-plane",level:2},{value:"Using managed pre-requisites for the Data Plane",id:"using-managed-pre-requisites-for-the-data-plane",level:3},{value:"Purpose of using managed instances",id:"purpose-of-using-managed-instances",level:4},{value:"AWS RDS for PostgreSQL",id:"aws-rds-for-postgresql",level:4},{value:"AWS MSK for Apache Kafka",id:"aws-msk-for-apache-kafka",level:4},{value:"AWS ElastiCache for Redis",id:"aws-elasticache-for-redis",level:4},{value:"Wrap-up",id:"wrap-up",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes how to get up and running with a Customer Cloud Deployment through the AWS Marketplace."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We currently do not support unified billing through your AWS invoice. This is on our roadmap for our AWS Marketplace\noffering.")),(0,r.kt)("h2",{id:"step-1-follow-along-with-the-general-steps-for-customer-cloud-deployment"},"Step 1: Follow along with the general steps for Customer Cloud Deployment"),(0,r.kt)("p",null,"Before you can launch your AWS Marketplace STRM Privacy Installation, you need to follow along\nwith ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/self-hosted#step1"},"step 1")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/self-hosted#step2"},"step 2"),"\nfrom the general steps section."),(0,r.kt)("h2",{id:"step-2-setup-a-kubernetes-cluster-with-aws-eks"},"Step 2: Setup a Kubernetes cluster with AWS EKS"),(0,r.kt)("p",null,"One of the pre-requisites for the STRM Privacy Data Plane is an operational Kubernetes cluster. If you don't have an EKS\ncluster yet, please follow the instructions on how to setup an EKS cluster in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"AWS EKS getting started guide"),"."),(0,r.kt)("h2",{id:"step-3-subscribe-to-the-strm-privacy-data-plane"},"Step 3: Subscribe to the STRM Privacy Data Plane"),(0,r.kt)("p",null,"Navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-2ekyuezbwmiak"},"STRM Privacy AWS Marketplace")," listing and\nfollow the following steps."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS Marketplace",src:a(4303).Z,width:"2432",height:"1762"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue to Subscribe"),", follow the instructions and start your subscription")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the STRM Privacy Data Plane:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"If multiple fulfillment options are presented, choose ",(0,r.kt)("inlineCode",{parentName:"li"},"Helm chart")),(0,r.kt)("li",{parentName:"ol"},"Choose the latest version"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue to launch")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Currently, the only supported ",(0,r.kt)("em",{parentName:"li"},"launch target")," is EKS (Amazon Elastic Kubernetes Service)."),(0,r.kt)("li",{parentName:"ol"},"Follow ",(0,r.kt)("em",{parentName:"li"},"Step 1")," of the launch instructions, please note the remarks below.")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before you can create an IAM Service Account with ",(0,r.kt)("inlineCode",{parentName:"p"},"eksctl"),", an IAM OIDC provider must exist for your cluster. To do\nso, run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl utils associate-iam-oidc-provider \\\n   --cluster <CLUSTER_NAME> \\\n   --region <CLUSTER_REGION> \\\n   --approve\n"))),(0,r.kt)("admonition",{parentName:"li",type:"important"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"eksctl")," command in the launch instructions is incorrect, it is missing the policies that should be attached to\nthe service account. The correct command is:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"eksctl create iamserviceaccount \\\n   --name <SERVICE_ACCOUNT_NAME> \\\n   --namespace strmprivacy \\\n   --cluster <CLUSTER_NAME> \\\n   --override-existing-serviceaccounts \\\n   --attach-policy-arn arn:aws:iam::aws:policy/AWSMarketplaceMeteringFullAccess \\\n   --attach-policy-arn arn:aws:iam::aws:policy/AWSMarketplaceMeteringRegisterUsage \\\n   --attach-policy-arn arn:aws:iam::aws:policy/service-role/AWSLicenseManagerConsumptionPolicy \\\n   --approve\n")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow ",(0,r.kt)("em",{parentName:"p"},"Step 2")," of the launch instructions, making sure to replace the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"helm install")," command with\nthe values specific for your installation, which can be found in\nyour ",(0,r.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/installation/configuration"},"installation configuration"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you plan to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," instead of the inline Helm values (with ",(0,r.kt)("inlineCode",{parentName:"p"},"--set"),"):"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"make sure to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"license.installationType")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS_MARKETPLACE")),(0,r.kt)("li",{parentName:"ol"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"registry.imagePullSecret")," can be omitted / left blank, as this is facilitated by your AWS Marketplace\ndeployment"))))),(0,r.kt)("p",null,"After these steps, you should end up with a namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy")," with, by default, ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/#components"},"all components")," enabled. If you\nwish otherwise, you can edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," to match your needs."),(0,r.kt)("h3",{id:"using-managed-pre-requisites-for-the-data-plane"},"Using managed pre-requisites for the Data Plane"),(0,r.kt)("p",null,"As the STRM Privacy Data Plane depends on Kafka, Redis and/or a Postgres Database, you should only use the embedded\ninstances of these pre-requisites to deploy your initial version. For production purposes, we recommend to use managed\ninstances."),(0,r.kt)("h4",{id:"purpose-of-using-managed-instances"},"Purpose of using managed instances"),(0,r.kt)("p",null,"The subcharts for Kafka, Redis and PostgreSQL that are included in the STRM Privacy Data Plane Helm Chart are not meant\nfor production purposes, as they have not been configured as such. Furthermore, not all Kubernetes Clusters fulfill the\npre-requisites for this (e.g. support for persistent storage). The more convenient route here, is to use managed\ninstances of the pre-requisites for your Data Plane. The following sections discuss how to set up these managed\ninstances."),(0,r.kt)("h4",{id:"aws-rds-for-postgresql"},"AWS RDS for PostgreSQL"),(0,r.kt)("p",null,"To be able to run Batch Jobs, a PostgreSQL database is required. Please follow the steps from\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html"},"AWS RDS for PostgreSQL guide"),"\n, in order to setup a PostgreSQL database for your STRM Privacy Data Plane. Make sure to implement the best practices to\nbackup and restore data at any point in time as\ndescribed ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_CommonTasks.BackupRestore.html"},"here"),". General\nremarks considering the database:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a separate user (following\nthe ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"principle of least privilege"),") with read and write\naccess rights to the database. Set the credentials in the ",(0,r.kt)("inlineCode",{parentName:"li"},"values.yaml")," for the PostgreSQL user."),(0,r.kt)("li",{parentName:"ul"},"Data usage will increase over time, therefore, it is wise to\nenable ",(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html"},"AWS RDS Storage Autoscaling"),"\nto prevent manual interventions.")),(0,r.kt)("h4",{id:"aws-msk-for-apache-kafka"},"AWS MSK for Apache Kafka"),(0,r.kt)("p",null,"To be able to run any streaming tasks, a Kafka (or Kafka API compatible) cluster is required. Please follow the steps\nfrom the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/msk/latest/developerguide/create-cluster.html"},"AWS MSK for Apache Kafka guide")," to\nsetup a managed Kafka cluster in your AWS account. Take note of the private bootstrap servers (and\npossibly ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/authenticated"},"credentials"),") and set the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("h4",{id:"aws-elasticache-for-redis"},"AWS ElastiCache for Redis"),(0,r.kt)("p",null,"To be able to run any streaming tasks, a Redis (or Redis API compatible) deployment is required. Please follow the steps\nfrom\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/GettingStarted.html"},"AWS ElastiCache for Redis guide"),"\nto setup a managed Redis deployment. Take note of the endpoint (and\npossibly credentials) and set the value in the ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml"),"."),(0,r.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,r.kt)("p",null,"You've installed a STRM Privacy Data Plane via the AWS Marketplace. If you have had any issues during your\ninstallation, please let us know, or create a pull request on GitHub to improve these docs."),(0,r.kt)("p",null,"Now that you are done with the setup, follow the docs on ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/interacting"},"how to interact with your cluster")," to start\nusing it."))}u.isMDXComponent=!0},4303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-marketplace-649ae05d6b3813cd170e2e500e9a4a87.png"}}]);