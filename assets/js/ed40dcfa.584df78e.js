"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4371],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8041:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"Advanced Configuration",hide_table_of_contents:!1,description:"Advanced setups of AWS Marketplace based Data Plane configurations."},o="Advanced Configuration",s={unversionedId:"quickstart/ccd/self-hosted/advanced",id:"quickstart/ccd/self-hosted/advanced",title:"Advanced Configuration",description:"Advanced setups of AWS Marketplace based Data Plane configurations.",source:"@site/docs/03-quickstart/05-ccd/02-self-hosted/01-advanced.md",sourceDirName:"03-quickstart/05-ccd/02-self-hosted",slug:"/quickstart/ccd/self-hosted/advanced",permalink:"/docs/latest/quickstart/ccd/self-hosted/advanced",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Advanced Configuration",hide_table_of_contents:!1,description:"Advanced setups of AWS Marketplace based Data Plane configurations."},sidebar:"docs",previous:{title:"Self-Hosted Installation",permalink:"/docs/latest/quickstart/ccd/self-hosted/"},next:{title:"AWS Marketplace Installations",permalink:"/docs/latest/quickstart/ccd/aws-marketplace/"}},c={},l=[{value:"Using a private Docker registry",id:"using-a-private-docker-registry",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"gcloud",id:"gcloud",level:4},{value:"gcrane",id:"gcrane",level:4},{value:"Mirror images",id:"mirror-images",level:3}],d={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-configuration"},"Advanced Configuration"),(0,a.kt)("h2",{id:"using-a-private-docker-registry"},"Using a private Docker registry"),(0,a.kt)("p",null,"If you have to install the STRM Privacy Data Plane in an air-gapped environment, you can use the following script to\neasily mirror all STRM Privacy container images with the image pull secret credentials provided in your installation\nconfiguration, which can be found ",(0,a.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/settings/installation"},"here"),"."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Using this requires ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs"},(0,a.kt)("inlineCode",{parentName:"a"},"gcloud"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads"},(0,a.kt)("inlineCode",{parentName:"a"},"python3"))," to be\ninstalled.\nFurthermore, it uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/go-containerregistry/tree/main/cmd/gcrane"},(0,a.kt)("inlineCode",{parentName:"a"},"gcrane")),", which\nsimplifies copying images between (authenticated) registries. The\nauthentication ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/go-containerregistry/tree/main/cmd/gcrane"},"commands")," are similar to\nDocker. ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," is used by gcrane to fetch an access token that allows for authentication with STRM Privacy's registry."),(0,a.kt)("h4",{id:"gcloud"},"gcloud"),(0,a.kt)("p",null,"The CLI for Google Cloud can be installed with the ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install-sdk"},"instructions shown here"),". This will guide you through all the prerequisites there and make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"gcloud")," is on your ",(0,a.kt)("inlineCode",{parentName:"p"},"PATH"),"."),(0,a.kt)("h4",{id:"gcrane"},"gcrane"),(0,a.kt)("p",null,"Install gcrane (as it's not distributed via package managers)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers",showLineNumbers:!0},"#!/usr/bin/env bash\ncurl -L https://github.com/google/go-containerregistry/releases/latest/download/go-containerregistry_Linux_x86_64.tar.gz -o go-containerregistry.tar.gz\ntar -zxvf go-containerregistry.tar.gz\nchmod +x gcrane\nmv gcrane /usr/local/bin/\n")),(0,a.kt)("p",null,"Ensure that gcrane can access your private registry if it requires authentication for pushing images. A command to authenticate ",(0,a.kt)("inlineCode",{parentName:"p"},"gcrane")," with access to a private registry would look similar to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"placeholders target_registry=Target Registry, username=Registry Username, password=Registry Password",placeholders:!0,target_registry:"Target","Registry,":!0,username:"Registry","Username,":!0,password:"Registry",Password:!0},'gcrane auth login "$target_registry" -u "$username" -p "$password"\n')),(0,a.kt)("h3",{id:"mirror-images"},"Mirror images"),(0,a.kt)("p",null,"The following script can be used as an example and can be executed periodically to mirror the STRM Privacy Registry.\nThe image pull secret can be found in the installation settings in the ",(0,a.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io/settings/installation"},"Console"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell",metastring:"showLineNumbers wordWrap=true placeholders image_pull_secret=Docker Image Pull Secret, target_registry=Your Private Registry Host, working_directory=Script Working Directory",showLineNumbers:!0,wordWrap:"true",placeholders:!0,image_pull_secret:"Docker",Image:!0,Pull:!0,"Secret,":!0,target_registry:"Your",Private:!0,Registry:!0,"Host,":!0,working_directory:"Script",Working:!0,Directory:!0},'#!/usr/bin/env bash\n\n# Authenticate gcrane to communicate with STRM Privacy\'s Docker Registry\n# using your image pull secret\nGOOGLE_APPLICATION_CREDENTIALS="$working_directory/image-pull-secret.json"\necho "$image_pull_secret" | base64 --decode > "$GOOGLE_APPLICATION_CREDENTIALS"\n\nTARGET_REGISTRY="$target_registry"\n\n# The following command assumes that gcrane is now configured with access to both repositories\nSTRM_PRIVACY_REGISTRY="europe-west4-docker.pkg.dev/stream-machine-production/docker-public"\n\nfor image_uri in $(gcrane ls "$STRM_PRIVACY_REGISTRY" -r | grep --invert-match "sha256")\ndo\n    image_name_and_version=$(echo "${image_uri}" | sed \'s|\'"$STRM_PRIVACY_REGISTRY"/\'||\' | sed \'s|/|_|g\')\n    gcrane cp "${image_uri}" "${TARGET_REGISTRY}/${image_name_and_version}"\ndone\n')),(0,a.kt)("p",null,"As it cannot be assumed that the private registry has a directory/folder structure, we replace every ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," in the image path to an ",(0,a.kt)("inlineCode",{parentName:"p"},"_"),". For example, this would mean the image name of a\nbatch-exporter will not be the path ",(0,a.kt)("inlineCode",{parentName:"p"},"events/batch-exporters-agent")," but rather the image name ",(0,a.kt)("inlineCode",{parentName:"p"},"events_batch-exporters-agent"),"."))}p.isMDXComponent=!0}}]);