"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5488],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5069:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],o={title:"Exporting to AWS S3",hide_table_of_contents:!1},l="Exporting to S3",c={unversionedId:"quickstart/receiving-s3",id:"quickstart/receiving-s3",title:"Exporting to AWS S3",description:"If you want to export stream data to AWS S3, you first need to create a",source:"@site/docs/quickstart/receiving-s3.md",sourceDirName:"quickstart",slug:"/quickstart/receiving-s3",permalink:"/docs/latest/quickstart/receiving-s3",tags:[],version:"current",frontMatter:{title:"Exporting to AWS S3",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Kafka consumer in Python",permalink:"/docs/latest/quickstart/exporting-kafka"},next:{title:"Exporting Keys",permalink:"/docs/latest/quickstart/exporting-keys"}},p=[{value:"Preparation: Set up S3 bucket and credentials",id:"Preparation",children:[{value:"1. Create the bucket",id:"bucket",children:[],level:3},{value:"2. Create the necessary credentials",id:"creds",children:[],level:3}],level:2},{value:"Create a Sink",id:"create-a-sink",children:[{value:"1. Preparation",id:"1-preparation",children:[],level:3},{value:"2. Create the sink",id:"create-sink",children:[],level:3}],level:2},{value:"Create a batch exporter",id:"create-a-batch-exporter",children:[],level:2},{value:"Using the results",id:"using-the-results",children:[],level:2},{value:"About the filenames",id:"about-the-filenames",children:[],level:2},{value:"Important considerations for consumers",id:"important-considerations-for-consumers",children:[{value:"Empty files",id:"empty-files",children:[],level:3},{value:"IAM user credentials",id:"iam-user-credentials",children:[],level:3}],level:2},{value:"Tearing down",id:"tearing-down",children:[],level:2}],m={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exporting-to-s3"},"Exporting to S3"),(0,i.kt)("p",null,"If you want to export stream data to AWS S3, you first need to create a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Sink")," pointing to the S3 bucket."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Depending on the situation, you might already have a bucket and the\ncredentials. In that case, you can skip the ",(0,i.kt)("a",{parentName:"p",href:"bucket"},"1. Create the bucket")," and go\ndirectly to ",(0,i.kt)("a",{parentName:"p",href:"create-sink"},"2. Create the sink"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Or you don\u2019t yet have the bucket and credentials, but you can create\nthem yourself. In that case, you can follow along from the\n",(0,i.kt)("a",{parentName:"p",href:"Preparation"},"Preparation"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Or you need someone else to set this up for you in your AWS account.\nIn that case, you can forward this document to them, so they know\nwhat to do."))),(0,i.kt)("h2",{id:"Preparation"},"Preparation: Set up S3 bucket and credentials"),(0,i.kt)("p",null,"Before creating a sink, you need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An S3 bucket (",(0,i.kt)("a",{parentName:"p",href:"bucket"},"1. Create the bucket"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An IAM user with the correct permissions to write in this bucket\n(",(0,i.kt)("a",{parentName:"p",href:"creds"},"2. Create the necessary credentials"),")"))),(0,i.kt)("p",null,"You first need to create an AWS credentials file that gives STRM Privacy\nwrite access to a specific bucket/prefix."),(0,i.kt)("p",null,"To do so, follow the steps below:"),(0,i.kt)("h3",{id:"bucket"},"1. Create the bucket"),(0,i.kt)("p",null,"Create a bucket using the command below, using your own bucket name:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 mb s3://<your-bucket-name>\n")),(0,i.kt)("h3",{id:"creds"},"2. Create the necessary credentials"),(0,i.kt)("p",null,"Create a file with the policy document below and save it in the current\ndirectory. This file contains the permissions STRM Privacy needs."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetBucketLocation"\n            ],\n            "Resource": "arn:aws:s3:::<your-bucket-name>" //(1)\n        },\n        {\n            "Effect": "Allow",\n            "Action": [\n                "s3:PutObject"\n            ],\n            "Resource":\n            "arn:aws:s3:::<your-bucket-name>/<optional-prefix>/*.jsonl" //(2)\n        }\n    ]\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"fill in your bucket name"),(0,i.kt)("li",{parentName:"ol"},"fill in your bucket name ",(0,i.kt)("strong",{parentName:"li"},"and")," an optional path prefix")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you replace both occurrences of ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-bucket-name>")," with the\nactual name of your S3 bucket and replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"<optional-prefix>")," with\nthe prefix in which STRM Privacy should put the files. If there is no\nprefix, also leave out the last slash (as a double slash will not work)."))),(0,i.kt)("p",null,"The provided policy document shows the minimal set of permissions needed\nby STRM Privacy. We use these as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketLocation.html"},"GetBucketLocation"),":\nThis is an unfortunate necessity, because the AWS SDK requires us to\nconnect to the same region as from where the bucket has originally\nbeen created. STRM Privacy cannot know this in advance, so we need\nto query it using this operation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html"},"PutObject"),":\nSTRM Privacy only writes ",(0,i.kt)("inlineCode",{parentName:"p"},"*.jsonl")," files to the specified location\n(bucket + prefix)."))),(0,i.kt)("p",null,"We don\u2019t need more permissions than these, and we also prefer to have as\nfew permissions as possible."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"STRM Privacy validates the configuration by writing an empty JSONL file\n(file name: ",(0,i.kt)("inlineCode",{parentName:"p"},".strm_test_<random UUID>.jsonl"),") to the specified\nbucket/prefix, using the provided credentials."))),(0,i.kt)("p",null,"STRM Privacy needs access to the bucket you\u2019ve just created, so there\nneeds to be an IAM user which has the policy of ",(0,i.kt)("a",{parentName:"p",href:"creds"},"2. Create the necessary credentials"),") (This\nexample uses the name ",(0,i.kt)("inlineCode",{parentName:"p"},"strm-export-demo"),", but we recommend you use a\nmore descriptive name for your organization)."),(0,i.kt)("p",null,"First create the user"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam create-user --user-name strm-export-demo\n")),(0,i.kt)("p",null,"Then attach the policy of ",(0,i.kt)("a",{parentName:"p",href:"creds"},"2. Create the necessary credentials"),"). This listing assumes the policy\ndocument is in the same directory. Replace the file name\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm-policy.json")," with the correct file name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam put-user-policy --user-name strm-export-demo \\\n  --policy-name strm-bucket-write-access \\\n  --policy-document file://strm-policy.json\n")),(0,i.kt)("p",null,"Finally, create the access key for this user and download the\ncredentials: (keep these safe, as they provide access to the bucket)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam create-access-key --user-name strm-export-demo > s3.json\n")),(0,i.kt)("h2",{id:"create-a-sink"},"Create a Sink"),(0,i.kt)("h3",{id:"1-preparation"},"1. Preparation"),(0,i.kt)("p",null,"First, make sure you have a file, called ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.json")," in your current\ndirectory, with the following contents:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "AccessKey": {\n        "UserName": "<strm-export-demo>",\n        "AccessKeyId": "<your access key>",\n        "Status": "Active",\n        "SecretAccessKey": "<your secret access key>",\n        "CreateDate": "2021-04-08T08:19:33+00:00" // The actual date might differ\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is the same JSON as returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"aws iam create-access-key"),"."))),(0,i.kt)("h3",{id:"create-sink"},"2. Create the sink"),(0,i.kt)("p",null,"When you have the correct AWS credentials in a file ",(0,i.kt)("inlineCode",{parentName:"p"},"s3.json"),", you can\ncreate the sink using the command below:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In this example we assume the bucket name is: ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy-export-demo"),"\nand the prefix is ",(0,i.kt)("inlineCode",{parentName:"p"},"events"),"."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm create sink s3 strmprivacy-export-demo --credentials-file=s3.json\n{\n  "ref": {\n    "billingId": "demo8542234275",\n    "name": "s3"\n  },\n  "sinkType": "S3",\n  "bucket": {\n    "bucketName": "strmprivacy-export-demo",\n    "credentials": "<the credentials as shown above>"\n  }\n}\n')),(0,i.kt)("p",null,"Based on the structure of the credentials file, we automatically set the\ntype to S3 or Google Cloud Storage."),(0,i.kt)("p",null,"You can see all your sinks with ",(0,i.kt)("inlineCode",{parentName:"p"},"strm list sinks"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm list sinks\n{\n  "sinks": [\n    {\n      "sink": {\n        "ref": {\n          "billingId": "demo8542234275",\n          "name": "s3"\n        },\n        "sinkType": "S3",\n        "bucket": {\n          "bucketName": "jankees-mybucket"\n        }\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"create-a-batch-exporter"},"Create a batch exporter"),(0,i.kt)("p",null,"An ",(0,i.kt)("inlineCode",{parentName:"p"},"batch exporter")," is the STRM Privacy component that reads your\nstream, and sends its events in batches to the sink (in this case an S3\nbucket)."),(0,i.kt)("p",null,"Let\u2019s create an exporter on the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," stream (make sure to create this\nfirst). Batch exporter names are unique per connected stream, so you\ncould always call them ",(0,i.kt)("em",{parentName:"p"},"s3")," for instance."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm create batch-exporter demo --sink s3 --path-prefix events\n{\n  //highlight-next-line\n  "ref": { "billingId": "demo8542234275", "name": "s3-demo" }, \n  //highlight-next-line\n  "streamRef": { "billingId": "demo8542234275", "name": "demo" }, \n  "interval": "60s",\n  //highlight-next-line\n  "sinkName": "s3", \n  "pathPrefix": "events"\n}\n')),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the reference to the batch exporter"),(0,i.kt)("li",{parentName:"ol"},"the reference to the stream that feeds the exporter "),(0,i.kt)("li",{parentName:"ol"},"the name of the sink")),(0,i.kt)("p",null,"Note that we\u2019re sending data on the stream ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," and a default name has\nbeen given to the batch exporter."),(0,i.kt)("p",null,"We\u2019re sending batches every 60 seconds. This can be configured through\nthe CLI."),(0,i.kt)("p",null,"Also note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"--path-prefix")," argument is optional. Make sure it\nmatches your bucket structure and permissions."),(0,i.kt)("h2",{id:"using-the-results"},"Using the results"),(0,i.kt)("p",null,"Everything has been set up and after ","<","interval",">"," number of seconds,\nyou should start seeing data in your bucket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 ls strmprivacy-export-demo/events/\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2021-03-26 10:56:31      79296 2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n2021-03-26 10:57:01     275726 2021-03-26T09:57:00-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n2021-03-26 10:57:31     277399 2021-03-26T09:57:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a future version, these filenames will show the ",(0,i.kt)("em",{parentName:"p"},"stream name"),",\ninstead of a uuid that we use internally."))),(0,i.kt)("p",null,"And having a look inside one of the files."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ aws s3 cp s3://strmprivacy-export-demo/encrypted-events/2021-03-26T09:56:30-stream-151daf78-eb70-4b6a-aeb4-578edc32bee6---0-1-2-3-4.jsonl - | head -1\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "strmMeta": {\n    "schemaId": "clickstream",\n    "nonce": 1009145850,\n    "timestamp": 1625820808909,\n    "keyLink": "04d243ba-2cc9-4def-b406-7241d4fce7d1",\n    "billingId": "demo8542234275",\n    "consentLevels": [0,1]\n  },\n  "producerSessionId": "ATqVzbsw2qN3XDj+3D0SABPPVjb2nIqCcdFcG1irE6w=",\n  "url": "https://www.strmprivacy.io/rules",\n  "eventType": "",\n  "referrer": "",\n  "userAgent": "",\n  "conversion": 0,\n  "customer": {\n    "id": "ATqVzbsKWvI9GH/rTwcI78Behpe5zo30EJMXGyEbP+u0FEZcBRwdP+A="\n  },\n  "abTests": []\n}\n')),(0,i.kt)("h2",{id:"about-the-filenames"},"About the filenames"),(0,i.kt)("p",null,"The last part of the filenames identifies the partitions being processed\nby the Kafka consumers that are doing the actual exports. When under a\nhigh event rate, we need more than 1 Kafka consumer, we would see a\ndivision of partitions over multiple filenames. In this example, the\ntopic has 5 partitions, and all of them are processed by one Kafka\nconsumer."),(0,i.kt)("p",null,"With manual offset management in the Kafka consumer, we\u2019re fairly\nconfident there will be ",(0,i.kt)("em",{parentName:"p"},"no duplicate nor missing data")," in your bucket."),(0,i.kt)("h2",{id:"important-considerations-for-consumers"},"Important considerations for consumers"),(0,i.kt)("p",null,"The S3 exporter is a very generic building block, which integrates into\nmost architectures, making it very usable."),(0,i.kt)("p",null,"Still, there are some things to be aware of:"),(0,i.kt)("h3",{id:"empty-files"},"Empty files"),(0,i.kt)("p",null,"When there are no events, the S3 exporter will not write any files to\nthe bucket, so you won\u2019t be seeing many empty files."),(0,i.kt)("p",null,"However, when the batch exporter is created or (re)started, we write an\nempty JSONL file to validate the configuration (does the bucket exist\nand does Stream Machine have the appropriate permissions?). This results\nin ",(0,i.kt)("em",{parentName:"p"},"some")," empty files, so your downstream code needs to be able to\nhandle these."),(0,i.kt)("h3",{id:"iam-user-credentials"},"IAM user credentials"),(0,i.kt)("p",null,"STRM Privacy stores the provided IAM credentials in an encrypted\nstorage, which is highly secured. Nevertheless, it might be wise to\ncreate a dedicated STRM Privacy user, which is used for connecting to\nthe S3 bucket."),(0,i.kt)("p",null,"This user should only have the necessary permissions (",(0,i.kt)("a",{parentName:"p",href:"creds"},"2. Create the necessary credentials"),"),\nonly on the necessary resources (bucket",(0,i.kt)("br",{parentName:"p"}),"\n","optional prefix + ",(0,i.kt)("inlineCode",{parentName:"p"},".jsonl")," suffix)."),(0,i.kt)("p",null,"This way, you can easily revoke/change the credentials, and re-upload\nthese using our CLI (",(0,i.kt)("inlineCode",{parentName:"p"},"strm create sink")," is also used to update the sink)\nwithout impacting other applications."),(0,i.kt)("h2",{id:"tearing-down"},"Tearing down"),(0,i.kt)("p",null,"Tearing down a sink requires to first remove the batch exporter, and\nonly then remove the sink. You\u2019re not required to remove the sink at\nall, it\u2019s just a configuration item."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete batch-exporter s3-strmprivacy\n{}\n")),(0,i.kt)("p",null,"You can remove the sink as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete sink s3\n{}\n")),(0,i.kt)("p",null,"Or you can remove the sink with all linked batch exporters in one\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm delete sink s3 --recursive\n{}\n")))}d.isMDXComponent=!0}}]);