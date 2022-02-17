"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[9298],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),k=r,h=m["".concat(l,".").concat(k)]||m[k]||d[k]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Exporting Keys",hide_table_of_contents:!1},l="Exporting encryption keys",c={unversionedId:"quickstart/exporting-keys",id:"version-1.0.0/quickstart/exporting-keys",title:"Exporting Keys",description:"The output streams feature",source:"@site/versioned_docs/version-1.0.0/quickstart/exporting-keys.md",sourceDirName:"quickstart",slug:"/quickstart/exporting-keys",permalink:"/docs/docs/1.0.0/quickstart/exporting-keys",tags:[],version:"1.0.0",frontMatter:{title:"Exporting Keys",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Exporting to AWS S3",permalink:"/docs/docs/1.0.0/quickstart/receiving-s3"},next:{title:"gRPC API definition",permalink:"/docs/docs/1.0.0/quickstart/grpc"}},p=[{value:"The Encryption Keys",id:"the-encryption-keys",children:[],level:2},{value:"Have a sink ready",id:"have-a-sink-ready",children:[],level:2},{value:"Creating an exporter",id:"creating-an-exporter",children:[],level:2},{value:"Exported keys in the bucket",id:"exported-keys-in-the-bucket",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exporting-encryption-keys"},"Exporting encryption keys"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/quickstart/creating-streams#outputStreams"},"output streams")," feature\nmanages the decryption of data for you. The keys exist only within the\nSTRM Privacy keys database, for a duration a little longer than the keys\nrotation period ",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". The output streams have a default retention of 7\ndays, so if you don\u2019t have the keys, and don\u2019t consume or export the\noutput streams within 7 days, you lose the capability to decrypt the\npersonal data attributes."),(0,o.kt)("p",null,"Assuming your company decides that it wants to have the actual\nencryption keys ",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", you need to configure STRM Privacy to provide you\nwith the keys. A pre-requisite is that your account is enabled for this\ncapability. If not the features below will be ",(0,o.kt)("em",{parentName:"p"},"forbidden")," to you."),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Exporting keys is only permitted if your account allows this. There is\ncurrently no way to enable this setting from the customer console.\nContact us if you need this feature."))),(0,o.kt)("h2",{id:"the-encryption-keys"},"The Encryption Keys"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/tink"},"Google Tink")," as an\nabstraction library for standard AES-256 encryption with a synthetic\ninitialization vector. The SIV means that for a certain plain-text\nvalue, the corresponding cypher text will be identical (for a certain\nencryption key)."),(0,o.kt)("h2",{id:"have-a-sink-ready"},"Have a sink ready"),(0,o.kt)("p",null,"We\u2019re using a ",(0,o.kt)("inlineCode",{parentName:"p"},"demo")," gcloud sink that we have created with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"strm create sink demo strm-demo --credentials-file gcloud.json\n")),(0,o.kt)("p",null,"using service account credentials created via the ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/iam-admin/serviceaccounts/create"},"the Google Cloud\nconsole"),"."),(0,o.kt)("p",null,"When using an AWS S3 sink, the mechanism is identical and described\n",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/quickstart/receiving-s3"},"here"),"."),(0,o.kt)("p",null,"Accessing the bucket contents works with the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cli/"},"aws cli\ntool")," for S3 or the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/gsutil"},"gsutil Google Cloud\ncli tool")," for Google\nCloud."),(0,o.kt)("h2",{id:"creating-an-exporter"},"Creating an exporter"),(0,o.kt)("p",null,"Currently, we only provide batch exporters for the encryption keys, that\nwork very similar to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/docs/1.0.0/quickstart/receiving-s3"},"events batch exporters"),".\nSo you need the same mechanism with authenticated and authorized IAM\nusers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm create batch-exporter --help\nCreate batch exporter\n\nUsage:\n  strm create batch-exporter [stream-name] [flags]\n\nFlags:\n      --export-keys          Do we want to export the keys stream\n  -h, --help                 help for batch-exporter\n      --interval int         Interval in seconds between batches (default 60)\n      --name string          optional batch exporter name\n      --path-prefix string   path prefix on bucket\n      --sink string          name of the sink. Optional if you have only one defined sink.\n")),(0,o.kt)("p",null,"We\u2019re looking for the ",(0,o.kt)("inlineCode",{parentName:"p"},"--export-keys")," option. Provided key exporting is\nenabled for your account, you can do the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'strm create batch-exporter demo --export-keys \\\n  --interval 30 --path-prefix demo-keys --sink demo\n{\n  "ref": { #(1)\n    "billingId": "demo8542234275", "name": "demo-demo-keys"\n  },\n  "keyStreamRef": { #(2)\n    "billingId": "demo8542234275", "name": "demo"\n  },\n  "interval": "30s",\n  "sinkName": "demo", #(3)\n  "pathPrefix": "demo-keys" #(4)\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the reference to the batch-exporter"),(0,o.kt)("li",{parentName:"ol"},"the reference to the key stream"),(0,o.kt)("li",{parentName:"ol"},"the name of the sink to use"),(0,o.kt)("li",{parentName:"ol"},"a directory to use in the bucket for storing keys.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have more than 1 sink defined, you ",(0,o.kt)("em",{parentName:"p"},"must")," give the name of that\nsink. If you have 1, it is chosen as the default option."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The current implementation (released on ",(0,o.kt)("inlineCode",{parentName:"p"},"04 May 2021"),") of this key\nexport mechanism does not export keys that were created more than 7 days\nearlier ",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."))),(0,o.kt)("h2",{id:"exported-keys-in-the-bucket"},"Exported keys in the bucket"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We have been running ",(0,o.kt)("inlineCode",{parentName:"p"},"strm sim run-random demo")," for a while in another\nterminal, so there are keys data."))),(0,o.kt)("p",null,"You can have a look at the output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'gsutil ls gs://strm-demo/demo-keys/\n\ngs://strm-demo/demo-keys/2021-08-18T12:09:00-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl\ngs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl\n\ngsutil cat gs://strm-demo/demo-keys/2021-08-18T12:09:30-keys-3b398d5c-2d7c-4673-9f73-3693e137ddbb---0-1-2-3-4.jsonl | tail -1\n{\n  "keyLink": "d478e24c-d12d-466e-80dd-055736bba704",\n  "tinkKey": {\n    "primaryKeyId": 2140201303,\n    "key": [\n      {\n        "keyData": {\n          "typeUrl": "type.googleapis.com/google.crypto.tink.AesSivKey",\n          "keyMaterialType": "SYMMETRIC",\n          "value": "EkAho6Jgghn8m//At...."\n        },\n        "outputPrefixType": "TINK",\n        "keyId": 2140201303,\n        "status": "ENABLED"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"You can do exactly the same for an AWS S3 bucket. Inspect the keys in\nthe sink like so"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'aws s3 ls strmprivacy-export-demo/perf-test-keys/\n2021-05-04 15:41:37          0 .strm_test...95-dfec21be8251.jsonl #(1)\n2021-05-04 16:13:01     166008 2021-05-04T14:13:00-keys-e1...-7-8-9.jsonl #(2)\n2021-05-04 16:13:31     701824 2021-05-04T14:13:30-keys-e1...-7-8-9.jsonl\n\naws s3 cp \\\n  s3://strmprivacy-export-demo/perf-test-keys/2021-05-04T14:13:00-keys-e1...-7-8-9.jsonl \\\n  - | head -1\n\n{ "keyLink": "44861053-6a95-4ec6-8b33-96fd1f748402", #(3)\n  "tinkKey": {"primaryKeyId":84683988,"key":[\n    {"keyData":{"typeUrl":"type.googleapis.com/google.crypto.tink.AesSivKey",\n    "keyMaterialType":"SYMMETRIC",\n      "value":"EkDzauIHozdnF.....WkpB8Xu"}, #(4)\n      "outputPrefixType":"TINK","keyId":84683988,"status":"ENABLED"}]}\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"This is a test file created by STRM Privacy to verify that we can\nactually write in this bucket. Because it starts with a ",(0,o.kt)("inlineCode",{parentName:"li"},".")," it is\nignored by most tools. This has not yet been implemented for Gcloud\ntype sinks."),(0,o.kt)("li",{parentName:"ol"},"Because the interval is 30 seconds, we\u2019ll have a file every 30\nseconds. Each file contains json lines with one key per line. The\nline contains both a ",(0,o.kt)("inlineCode",{parentName:"li"},"keyLink")," attribute, with the key link of the\nevents, and a ",(0,o.kt)("inlineCode",{parentName:"li"},"tinkKey")," attribute that contains the serialized Tink\nkey. The format is described in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/google/tink/blob/master/proto/tink.proto"},"this protobuf file"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"li"},"keyLink")," value is the same value you\u2019ll find in the\n",(0,o.kt)("a",{parentName:"li",href:"/docs/docs/1.0.0/concepts/strm-meta"},(0,o.kt)("inlineCode",{parentName:"a"},"strmMeta/keyLink"))," field of each event."),(0,o.kt)("li",{parentName:"ol"},"the key link that exists on all STRM Privacy events."),(0,o.kt)("li",{parentName:"ol"},"the actual AES-256 encryption key.")),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"default 24 hours",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"with the associated security and personal data hassles!",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"the retention period of the keys Kafka topic",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);