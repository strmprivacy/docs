"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4577],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?a.createElement(v,i(i({ref:t},d),{},{components:n})):a.createElement(v,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7777:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={title:"Creating Streams with the Command Line Interface",hide_table_of_contents:!1},l=void 0,c={unversionedId:"quickstart/creating-streams",id:"quickstart/creating-streams",title:"Creating Streams with the Command Line Interface",description:"See Authentication with the CLI",source:"@site/docs/quickstart/creating-streams.md",sourceDirName:"quickstart",slug:"/quickstart/creating-streams",permalink:"/docs/latest/quickstart/creating-streams",draft:!1,tags:[],version:"current",frontMatter:{title:"Creating Streams with the Command Line Interface",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Quickstart",permalink:"/docs/latest/quickstart/"},next:{title:"Receiving events over websocket",permalink:"/docs/latest/quickstart/listen-web-socket"}},d={},m=[{value:"Creating a stream",id:"creating-a-stream",level:2},{value:"Listing streams",id:"listing-streams",level:2},{value:"Creating decrypted streams",id:"creating-decrypted-streams",level:2},{value:"Cleaning up",id:"cleaning-up",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/authentication-cli"},"Authentication with the CLI"),"\npage on how to authenticate."),(0,s.kt)("h2",{id:"creating-a-stream"},"Creating a stream"),(0,s.kt)("p",null,"A stream can be created as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'strm create stream demo -o json\n{\n  "ref": {\n    "name": "demo",\n    "projectId": "30fcd008-9696-...."\n  },\n  "enabled": true,\n  "limits": {\n    "eventRate": "99",\n    "eventCount": "999999"\n  },\n  "credentials": [\n    {\n      "clientId": "stream-ylbt4v9o6dvvc...",\n      "clientSecret": "M0fBiQnKNXn*U...",\n    }\n  ],\n  "maskedFields": {}\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"clientSecret")," pair is what\nidentifies your stream when you send data to STRM Privacy. STRM Privacy\nuses the OAuth 2.0 client credentials flow to generate a ",(0,s.kt)("em",{parentName:"p"},"bearer token"),"\nthat needs to be provided with each HTTP request. Our drivers have\ntooling to create and refresh these tokens, but nothing prevents you\nfrom creating the headers by hand (see ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/sending-curl"},"the page about sending data by hand"),"\nto do this manually)."),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--save")," flag to store the credentials on your local machine in\n",(0,s.kt)("inlineCode",{parentName:"p"},"~/.config/strmprivacy/saved-entities/Stream/(stream-name).json")))),(0,s.kt)("p",null,"So with this you have enough information to start sending data to\n",(0,s.kt)("a",{parentName:"p",href:"https://events.strmprivacy.io/event"},"events.strmprivacy.io/event"),". With\nthe same credentials you can connect to the ",(0,s.kt)("a",{parentName:"p",href:"https://websocket.strmprivacy.io"},"web-socket\nendpoint")," with a websocket client to\nreceive the events as you send them. Use\n",(0,s.kt)("inlineCode",{parentName:"p"},"strm listen web-socket <stream-name> [--client-id .. --client-secret ..]"),".\nSee ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/listen-web-socket"},"here")," for details."),(0,s.kt)("h2",{id:"listing-streams"},"Listing streams"),(0,s.kt)("p",null,"Streams can be listed and will be shown as a table."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm list streams\n STREAM           DERIVED   CONSENT LEVEL TYPE   CONSENT LEVELS   ENABLED\n\n demo      false                          []               true\n")),(0,s.kt)("p",null,"To show more info, use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--output")," flag, and try out different\nformats, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$ strm list streams --output json\n{\n    "streams": [\n        {\n            "stream": {\n                "ref": {\n                    "name": "demo",\n                    "projectId": "30fcd008-9696-...."\n                },\n                "enabled": true,\n                "limits": {\n                    "eventRate": "99",\n                    "eventCount": "999999"\n                },\n                "credentials": [\n                    {\n                        "clientId": "stream-ylbt4v9o6dvvc...",\n                        "clientSecret": "M0fBiQnKNXn*U...",\n                    }\n                ],\n                "maskedFields": {\n                  "seed": "***"\n                }\n            }\n        }\n    ]\n}\n')),(0,s.kt)("h2",{id:"creating-decrypted-streams"},"Creating decrypted streams"),(0,s.kt)("p",null,"If you want to have STRM Privacy decrypt data with certain consent\nlevels, you need to create an output stream."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'$ strm create stream --help\nCreate a stream\n\nUsage:\n  strm create stream [flags]\n\nFlags:\n      --consent-type string   CUMULATIVE or GRANULAR (default "CUMULATIVE")\n  -D, --derived-from string   name of stream that this stream is derived from\n      --description string    description\n  -h, --help                  help for stream\n  -L, --levels int32Slice     comma separated list of integers for derived streams (default [])\n      --tags strings          tags\n')),(0,s.kt)("p",null,"So let\u2019s create one, with two consent levels, and a ",(0,s.kt)("em",{parentName:"p"},"granular")," consent\nlevel type interpretation."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$ strm create stream --derived-from demo --levels 0,1 --consent-type GRANULAR -o json\n{\n  "stream": {\n    "ref": {\n      "name": "demo-0-1",\n      "projectId": "30fcd008-9696-...."\n    },\n    "consentLevels": [ 0, 1 ],\n    "consentLevelType": "GRANULAR",\n    "enabled": true,\n    "linkedStream": "demo",\n    "credentials": [\n      {\n        "clientId": "stream-11jvxvpy1e6jl...",\n        "clientSecret": "tJkhj8lT9ybAA...",\n        "projectId": "30fcd008-9696-...."\n      }\n    ],\n    "maskedFields": {}\n  }\n}\n')),(0,s.kt)("p",null,"The derived stream is provided with a default name ",(0,s.kt)("inlineCode",{parentName:"p"},"demo-0-1"),"\nbecause we did not provide an explicit name. If we had added a name\nafter the ",(0,s.kt)("inlineCode",{parentName:"p"},"strm create stream")," we would have created a stream with that\nname."),(0,s.kt)("p",null,"So the derived stream named ",(0,s.kt)("inlineCode",{parentName:"p"},"demo-0-1")," captures data from\nencrypted stream ",(0,s.kt)("inlineCode",{parentName:"p"},"demo"),". It will\ndrop all events that don\u2019t at least have consent levels 0 and 1 in the\nevent. Another way of defining decrypted streams is with consent level\ntype ",(0,s.kt)("em",{parentName:"p"},"cumulative"),". This means that the decrypted stream is configured\nwith just one consent level, and it will accept all events that have at\nleast that consent level. It will decrypt PII fields up to and including\nthe decrypted stream consent level. ",(0,s.kt)("em",{parentName:"p"},"Cumulative")," is the default for\ncreating derived streams."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$ strm delete stream demo-0-1 -o json\n{\n  "streamTree": {\n    "stream": {\n      "ref": { "name": "demo-0-1",     "projectId": "30fcd008-9696-...." },\n      "consentLevels": [ 0, 1 ],\n      "consentLevelType": "GRANULAR",\n      "enabled": true,\n      "limits": {},\n      "linkedStream": "demo",\n      "credentials": [ { "clientId": "stream-11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA..."} ],\n      "maskedFields": { "seed": "****" }\n    }\n  }\n}\n')),(0,s.kt)("p",null,"Note the ",(0,s.kt)("inlineCode",{parentName:"p"},"streamTree")," field might also contain all the items derived\nfrom a source stream, like exporters."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$strm create stream --derived-from demo --levels 1 -o json\n{\n  "ref": { "name": "demo-1", "projectId": "30fcd008-9696-...." },\n  "consentLevels": [ 1 ],\n  "consentLevelType": "CUMULATIVE",\n  "enabled": true,\n  "linkedStream": "demo",\n  "credentials": [ { "clientId": "stream-vnfku72pl3bgx...", "clientSecret": "UMkNFnKt8ly#F...", "projectId": "30fcd008-9696-...." } ]\n}\n')),(0,s.kt)("p",null,"This stream named ",(0,s.kt)("inlineCode",{parentName:"p"},"demo-1")," will contain the identical subset of\nevents as ",(0,s.kt)("inlineCode",{parentName:"p"},"demo-0-1")),(0,s.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,s.kt)("p",null,"Delete a stream, all its dependents and all its data (that hasn\u2019t been\nexported yet)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'$ strm delete stream demo --recursive -o json\n{\n  "streamTree": {\n    "stream": {\n      "ref": { "name": "demo", "projectId": "30fcd008-9696-...." },\n      "enabled": true,\n      "credentials": [ { "clientId": "stream-11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA...",\n      } ]\n    },\n    "keyStream": {\n      "ref": { "name": "demo", "projectId": "30fcd008-9696-...." }\n    },\n    "derived": [\n      {\n        "ref": { "name": "demo-1", "projectId": "30fcd008-9696-...." },\n        "consentLevels": [ 1 ],\n        "consentLevelType": "CUMULATIVE",\n        "enabled": true,\n        "limits": {},\n        "linkedStream": "demo",\n        "credentials": [ { "clientId": "stream-vnfku72pl3bgx...", "clientSecret": "UMkNFnKt8ly#F..." } ]\n      }\n    ]\n  }\n}\n')))}u.isMDXComponent=!0}}]);