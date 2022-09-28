"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[9575],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3165:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={title:"AWS S3",hide_table_of_contents:!1,description:"Data Connector for AWS Simple Storage Service"},s=void 0,i={unversionedId:"quickstart/data-connectors/s3",id:"quickstart/data-connectors/s3",title:"AWS S3",description:"Data Connector for AWS Simple Storage Service",source:"@site/docs/03-quickstart/03-data-connectors/01-s3.md",sourceDirName:"03-quickstart/03-data-connectors",slug:"/quickstart/data-connectors/s3",permalink:"/docs/latest/quickstart/data-connectors/s3",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"AWS S3",hide_table_of_contents:!1,description:"Data Connector for AWS Simple Storage Service"},sidebar:"docs",previous:{title:"Data Connectors",permalink:"/docs/latest/quickstart/data-connectors/"},next:{title:"Microsoft Azure Blob Storage",permalink:"/docs/latest/quickstart/data-connectors/azure"}},c={},l=[{value:"Prepare the storage",id:"prepare-the-storage",level:3},{value:"Create the data connector",id:"create-the-data-connector",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"prepare-the-storage"},"Prepare the storage"),(0,r.kt)("p",null,"In this quickstart, you will create an AWS S3 bucket\nand set up credentials with the required access."),(0,r.kt)("p",null,"Create an S3 bucket using the command below, using your own bucket name\n(or do so in the AWS console):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 mb s3://<your-bucket-name>\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"S3 has evolved into a protocol, instead of just an Amazon product. It is possible to use our s3 data connector with\na non-AWS storage solution, as long as it provides an S3 compatible API. For example ",(0,r.kt)("a",{parentName:"p",href:"https://min.io"},"min.io"),".")),(0,r.kt)("p",null,"Create a file with the policy document below and save it in the current\ndirectory. This file contains the permissions the data connector needs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=strm-policy.json showLineNumbers",title:"strm-policy.json",showLineNumbers:!0},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Effect": "Allow",\n      "Action": [ "s3:GetBucketLocation" ],\n      // callout-1\n      "Resource": "arn:aws:s3:::<your-bucket-name>"\n    },\n    {\n      "Effect": "Allow",\n      "Action": [ "s3:PutObject" ],\n      // callout-2\n      "Resource": "arn:aws:s3:::<your-bucket-name>/<optional-prefix>/*"\n    },\n    // if your data-connector is used in batch jobs it also needs GetObject rights\n    {\n      "Effect": "Allow",\n      "Action": [ "s3:GetObject" ],\n      // callout-2\n      "Resource": "arn:aws:s3:::<your-bucket-name>/<optional-prefix>/*"\n    }\n  ]\n}\n')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"fill in your bucket name"),(0,r.kt)("li",{parentName:"ol"},"fill in your bucket name ",(0,r.kt)("strong",{parentName:"li"},"and")," an optional path prefix. You might add additional constraints via a file suffix\n(",(0,r.kt)("inlineCode",{parentName:"li"},"*.jsonl, *.csv"),").")),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Make sure you replace all occurrences of ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-bucket-name>")," with the\nactual name of your S3 bucket and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<optional-prefix>")," with\nthe prefix directory in which STRM Privacy should put the files. If there is no\nprefix, also leave out the last slash (as a double slash will not work).")),(0,r.kt)("p",null,"The provided policy document shows the minimal set of permissions needed\nby the data connector. They are used as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html"},"GetBucketLocation"),":\nThis is an unfortunate necessity, because the AWS SDK requires to\nconnect to the same region as from where the bucket has originally\nbeen created. STRM Privacy cannot know this in advance, so we need\nto query it using this operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html"},"PutObject"),":\nthe data connector will be able to write files to the specified location\n(bucket + prefix)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetObject.html"},"GetObject"),":\nthe data connector will be able to read files from the specified location\n(bucket + prefix).")),(0,r.kt)("p",null,"No more permissions than these are required. STRM Privacy prefers to have as\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"few permissions as possible"),"."),(0,r.kt)("p",null,"Next, an IAM user needs to be created that adheres to this policy. This\nquickstart uses the username ",(0,r.kt)("inlineCode",{parentName:"p"},"strm-export-demo"),", but it is recommened that you use a\nmore descriptive name for your organization."),(0,r.kt)("p",null,"First create the user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws iam create-user --user-name strm-export-demo\n")),(0,r.kt)("p",null,"Then attach the policy that you have just created. This example assumes the policy\ndocument is in the same directory. Replace the file name\n",(0,r.kt)("inlineCode",{parentName:"p"},"strm-policy.json")," with the correct file name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam put-user-policy --user-name strm-export-demo \\\n  --policy-name strm-bucket-write-access \\\n  --policy-document file://strm-policy.json\n")),(0,r.kt)("p",null,"Finally, create the access key for this user and download the\ncredentials (keep these ",(0,r.kt)("strong",{parentName:"p"},"safe"),", as they provide access to the bucket):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam create-access-key --user-name strm-export-demo > s3.json\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"STRM Privacy validates the user and credentials configuration by writing an empty JSONL file\n(file name: ",(0,r.kt)("inlineCode",{parentName:"p"},".strm_test_<random UUID>.jsonl"),") to the specified\nbucket/prefix upon creation of the batch exporter.")),(0,r.kt)("p",null,"First, make sure you have a file named ",(0,r.kt)("inlineCode",{parentName:"p"},"s3.json")," in your current\ndirectory, with the following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=s3.json showLineNumbers",title:"s3.json",showLineNumbers:!0},'{\n  "AccessKey": {\n    "UserName": "<your user name>",\n    "AccessKeyId": "<your access key>",\n    "Status": "Active",\n    "SecretAccessKey": "<your secret access key>",\n    "CreateDate": "<the creation date>"\n  }\n}\n')),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"This is the same JSON as returned by ",(0,r.kt)("inlineCode",{parentName:"p"},"aws iam create-access-key"),".")),(0,r.kt)("h3",{id:"create-the-data-connector"},"Create the data connector"),(0,r.kt)("p",null,"With the AWS credentials in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"s3.json"),", you can\ncreate the data connector using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm create data-connector s3 my-s3 strmprivacy-export-demo --credentials-file=s3.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "ref": {\n    "name": "my-s3",\n    "projectId": "30fcd008-9696-...."\n  },\n  "s3Bucket": {\n    "bucketName": "strmprivacy-export-demo"\n  }\n}\n')),(0,r.kt)("p",null,"This will create a data connector named ",(0,r.kt)("inlineCode",{parentName:"p"},"my-s3")," for the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"strmprivacy-export-demo"),",\nusing the provided credentials. Specify the actual name of your bucket, and any name for the\ndata connector itself."))}u.isMDXComponent=!0}}]);