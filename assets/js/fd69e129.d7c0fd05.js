"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2089],{992:(e,t,a)=>{a.d(t,{i:()=>r});var n=a(7294),l=a(814),i=a(2389);function o(e){let{children:t,fallback:a}=e;return(0,i.Z)()?n.createElement(n.Fragment,null,null==t?void 0:t()):null!=a?a:null}const s=e=>{let[t,a]=(0,n.useState)("");return(0,n.useEffect)((()=>{var t;(t=e.url,fetch(t).then((e=>e.text()))).then((e=>{a(e)}))}),[e.url]),n.createElement(l.Z,{language:e.lang,title:e.title},t)},r=e=>n.createElement(o,{fallback:n.createElement("div",null,"Loading...")},(()=>n.createElement(s,e)))},6373:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));a(814),a(992);const i={title:"Self-Hosted Installation",hide_table_of_contents:!1},o=void 0,s={unversionedId:"quickstart/ccd/self-hosted",id:"quickstart/ccd/self-hosted",title:"Self-Hosted Installation",description:"[cli]//github.com/strmprivacy/cli",source:"@site/docs/quickstart/ccd/self-hosted.md",sourceDirName:"quickstart/ccd",slug:"/quickstart/ccd/self-hosted",permalink:"/docs/latest/quickstart/ccd/self-hosted",draft:!1,tags:[],version:"current",frontMatter:{title:"Self-Hosted Installation",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"About Customer Cloud Deployments",permalink:"/docs/latest/quickstart/ccd/"},next:{title:"AWS Marketplace Installation",permalink:"/docs/latest/quickstart/ccd/aws-marketplace"}},r={},p=[{value:"Step 1: Make sure you are on a &#39;Self Hosted&#39; subscription",id:"step1",level:2},{value:"Step 2: Install the following tools",id:"step2",level:2},{value:"Step 3: Install the STRM Privacy Data Plane",id:"step-3-install-the-strm-privacy-data-plane",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Step 4: Install the Helm chart",id:"step-4-install-the-helm-chart",level:2},{value:"Wrap-up",id:"wrap-up",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This hands-on session shows how to get up-and-running with your Customer Cloud Deployment, and verify its\nfunctionality."),(0,l.kt)("h2",{id:"step1"},"Step 1: Make sure you are on a 'Self Hosted' subscription"),(0,l.kt)("p",null,"Your ",(0,l.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/upgrading"},"STRM profile page"),' should show: "Current subscription: Self hosted". Get in touch with your STRM\nrepresentative if you\'re on a Free or Business subscription.'),(0,l.kt)("p",null,"Once you're on a self-hosted subscription, you can proceed with this quickstart guide."),(0,l.kt)("h2",{id:"step2"},"Step 2: Install the following tools"),(0,l.kt)("p",null,"The following tools will either be required or ease your journey in deploying the STRM Privacy Data Plane."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/strmprivacy/cli"},(0,l.kt)("inlineCode",{parentName:"a"},"strm")),": the STRM Privacy cli. You need this to control your STRM resources, and to simulate some events."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl")),": the Kubernetes cli."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://helm.sh"},(0,l.kt)("inlineCode",{parentName:"a"},"helm")),": This Kubernetes package manager is used for installing (and upgrading) your STRM\ncustomer data plane. Also install the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/hayorov/helm-gcs"},"helm-gcs plugin")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/derailed/k9s"},(0,l.kt)("inlineCode",{parentName:"a"},"k9s"))," (optional): This ",(0,l.kt)("em",{parentName:"li"},"textual user interface")," offers a very convenient way to\ninteract with kubernetes clusters."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectx"))," and ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},(0,l.kt)("inlineCode",{parentName:"a"},"kubens"))," (optional): Very useful tools to switch the default\nkubernetes context and namespace."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.min.io/docs/minio-client-complete-guide.html"},(0,l.kt)("inlineCode",{parentName:"a"},"minio mc"))," (optional): A useful tool to interact with S3 compatible object storage (including S3 by AWS\nitself).")),(0,l.kt)("h2",{id:"step-3-install-the-strm-privacy-data-plane"},"Step 3: Install the STRM Privacy Data Plane"),(0,l.kt)("h3",{id:"preparation"},"Preparation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Make sure you have active kubernetes credentials to a cluster: ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl get nodes")," should show the nodes of your\ncluster."),(0,l.kt)("li",{parentName:"ol"},"Create a namespace ",(0,l.kt)("inlineCode",{parentName:"li"},"strmprivacy")," (",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl create namespace strmprivacy"),") and set that as\ndefault (",(0,l.kt)("inlineCode",{parentName:"li"},"kubens strmprivacy"),")."),(0,l.kt)("li",{parentName:"ol"},"Download the credentials file ",(0,l.kt)("inlineCode",{parentName:"li"},"values.yaml")," through ",(0,l.kt)("a",{parentName:"li",href:"https://console.strmprivacy.io/installation/configuration"},"the STRM Privacy Console"),".")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file should be similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'  registry:\n    imagePullSecret: "ewogIC...."\n\n  license:\n    installationId: "f4cea...."\n    installationClientId: "ins-...."\n    installationClientSecret: "tii...."\n\n  kafka:\n    enabled: true\n\n  redis:\n    enabled: true\n\n  postgresql:\n    enabled: true\n')),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Add the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hayorov/helm-gcs"},"gcs plugin")," to helm ",(0,l.kt)("inlineCode",{parentName:"p"},"helm plugin install https://github.com/hayorov/helm-gcs.git"))),(0,l.kt)("h2",{id:"step-4-install-the-helm-chart"},"Step 4: Install the Helm chart"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"add the helm repo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add strmrepo gs://stream-machine-production-helm-chart/data-plane\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("em",{parentName:"p"},"all")," the STRM components inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"strmprivacy")," namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm install strmprivacy strmrepo/strm --values values.yaml\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kubectl get pods --watch")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"k9s")," provides nice feedback to see how the\ninstallation is progressing. We see that some supporting infrastructure like Redis, Postgresql and Kafka are also\ninstalled. The creation of these components can be disabled, in which case configuration to the actual components will\nhave to be added to the Helm chart."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"During creation, you'll see Error states on the event-gateway pods for instance. This is ",(0,l.kt)("em",{parentName:"p"},"nominal")," because it will fail\nto connect to Redis, which is still being deployed. Once Redis is healthy, you'll see the event-gateway status turn\nhealthy")),(0,l.kt)("admonition",{title:"Create in a different namespace",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Add ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace: <your-namespace>")," to the ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml")," file.\nThe namespace needs to be created ",(0,l.kt)("em",{parentName:"p"},"manually")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl create namespace <your-namespace>"),".\nWith every ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command you should use the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--values values.yaml"))),(0,l.kt)("h2",{id:"wrap-up"},"Wrap-up"),(0,l.kt)("p",null,"You've installed a STRM Privacy Data Plane in a Kubernetes cluster. If you have had any issues during your\ninstallation, please let us know, or create a pull request on GitHub to improve these docs."),(0,l.kt)("p",null,"Now that you are done with the setup, follow the docs on ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/ccd/interacting"},"how to interact with your cluster")," to start\nusing it."))}u.isMDXComponent=!0}}]);