"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[4577],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,v=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(v,s(s({ref:t},m),{},{components:n})):a.createElement(v,s({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7777:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],l={title:"Creating Streams with the Command Line Interface",hide_table_of_contents:!1},o=void 0,c={unversionedId:"quickstart/creating-streams",id:"quickstart/creating-streams",title:"Creating Streams with the Command Line Interface",description:"See Authentication with the CLI",source:"@site/docs/quickstart/creating-streams.md",sourceDirName:"quickstart",slug:"/quickstart/creating-streams",permalink:"/docs/docs/latest/quickstart/creating-streams",tags:[],version:"current",frontMatter:{title:"Creating Streams with the Command Line Interface",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"[Running Batch Jobs with the Command Line Interface](/concepts/batch-jobs.md)",permalink:"/docs/docs/latest/quickstart/"},next:{title:"Receiving events over websocket",permalink:"/docs/docs/latest/quickstart/listen-web-socket"}},m=[{value:"Listing streams",id:"listing-streams",children:[],level:2},{value:"Creating a stream",id:"creating-a-stream",children:[],level:2},{value:"Creating decrypted streams",id:"creating-decrypted-streams",children:[],level:2},{value:"Cleaning up",id:"cleaning-up",children:[],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/latest/quickstart/authentication-cli"},"Authentication with the CLI"),"\npage on how to authenticate."),(0,i.kt)("h2",{id:"listing-streams"},"Listing streams"),(0,i.kt)("p",null,"Streams can be listed and will be shown as a table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm list streams\n STREAM           DERIVED   CONSENT LEVEL TYPE   CONSENT LEVELS   ENABLED\n\n strmprivacy      false                          []               true\n")),(0,i.kt)("p",null,"To show more info, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--output")," flag, and try out different\nformats, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"json"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm list streams --output json\n{\n    "streams": [\n        {\n            "stream": {\n                "ref": {\n                    "billingId": "demo8542234275",\n                    "name": "strmprivacy"\n                },\n                "enabled": true,\n                "limits": {\n                    "eventRate": "99",\n                    "eventCount": "999999"\n                },\n                "credentials": [\n                    {\n                        "clientId": "ylbt4v9o6dvvc..."\n                    }\n                ]\n            }\n        }\n    ]\n}\n')),(0,i.kt)("h2",{id:"creating-a-stream"},"Creating a stream"),(0,i.kt)("p",null,"A stream can be created as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm create stream strmprivacy -o json --save\n{\n  "ref": {\n    "billingId": "demo8542234275",\n    "name": "strmprivacy\n  },\n  "enabled": true,\n  "limits": {\n    "eventRate": "99",\n    "eventCount": "999999"\n  },\n  "credentials": [\n    {\n      "clientId": "ylbt4v9o6dvvc...",\n      "clientSecret": "M0fBiQnKNXn*U..."\n    }\n  ]\n}\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clientSecret")," triplet is what\nidentifies your stream when you send data to STRM Privacy. STRM Privacy\nuses the OAuth 2.0 client credentials flow to generate a ",(0,i.kt)("em",{parentName:"p"},"bearer token"),"\nthat needs to be provided with each HTTP request. Our drivers have\ntooling to create and refresh these tokens, but nothing precludes you\nfrom creating the headers by hand (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/latest/quickstart/sending-curl"},"the chapter about sending via\n",(0,i.kt)("inlineCode",{parentName:"a"},"curl"))," to do this manually)."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save")," flag to store the credentials on your local machine in\n",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/strmprivacy/saved-entities/Stream/(stream-name).json")))),(0,i.kt)("p",null,"So with this you have enough information to start sending data to\n",(0,i.kt)("a",{parentName:"p",href:"https://events.strmprivacy.io/event"},"events.strmprivacy.io/event"),". With\nthe same credentials you can connect to the ",(0,i.kt)("a",{parentName:"p",href:"https://websocket.strmprivacy.io"},"web-socket\nendpoint")," with a websocket client to\nreceive the events as you send them. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm listen web-socket <stream-name> [--client-id .. --client-secret ..]"),".\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/docs/latest/quickstart/listen-web-socket"},"here")," for details."),(0,i.kt)("h2",{id:"creating-decrypted-streams"},"Creating decrypted streams"),(0,i.kt)("p",null,"If you want to have STRM Privacy decrypt data with certain consent\nlevels, you need to create an output stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm create stream --help\nCreate a stream\n\nUsage:\n  strm create stream [flags]\n\nFlags:\n      --consent-type string   CUMULATIVE or GRANULAR (default "CUMULATIVE")\n  -D, --derived-from string   name of stream that this stream is derived from\n      --description string    description\n  -h, --help                  help for stream\n  -L, --levels int32Slice     comma separated list of integers for derived streams (default [])\n      --save                  save the result in the config directory\n      --tags strings          tags\n')),(0,i.kt)("p",null,"So let\u2019s create one, with two consent levels, and a ",(0,i.kt)("em",{parentName:"p"},"granular")," consent\nlevel type interpretation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm create stream --derived-from strmprivacy --levels 0,1 --consent-type GRANULAR -o json\n{\n  "ref": { "billingId": "demo8542234275", "name": "strmprivacy-0-1" },\n  "consentLevels": [ 0, 1 ],\n  "consentLevelType": "GRANULAR",\n  "enabled": true,\n  "linkedStream": "strmprivacy",\n  "credentials": [\n    { "clientId": "11jvxvpy1e6jl...", "clientSecret": "tJkhj8lT9ybAA..." }\n  ]\n}\n')),(0,i.kt)("p",null,"The derived stream is provided with a default name ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy-0-1"),"\nbecause we did not provide an explicit name. If we had added a name\nafter the ",(0,i.kt)("inlineCode",{parentName:"p"},"strm create stream")," we would have created a stream with that\nname."),(0,i.kt)("p",null,"So the derived stream named ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy-0-1")," captures data from\nencrypted stream ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy")," (for the current ",(0,i.kt)("inlineCode",{parentName:"p"},"billingId"),"). It will\ndrop all events that don\u2019t at least have consent levels 0 and 1 in the\nevent. Another way of defining decrypted streams is with consent level\ntype ",(0,i.kt)("em",{parentName:"p"},"cumulative"),". This means that the decrypted stream is configured\nwith just one consent level, and it will accept all events that have at\nleast that consent level. It will decrypt PII fields up to and including\nthe decrypted stream consent level. ",(0,i.kt)("em",{parentName:"p"},"Cumulative")," is the default for\ncreating derived streams."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm delete stream strmprivacy-0-1 -o json\n{\n  "streamTree": {\n    "stream": {\n      "ref": { "billingId": "demo8542234275", "name": "strmprivacy-0-1" },\n      "consentLevels": [ 0, 1 ],\n      "consentLevelType": "GRANULAR",\n      "enabled": true,\n      "limits": {},\n      "linkedStream": "strmprivacy",\n      "credentials": [ { "clientId": "11jvxvpy1e6jl..." } ]\n    }\n  }\n}\n')),(0,i.kt)("p",null,"Note the ",(0,i.kt)("inlineCode",{parentName:"p"},"streamTree")," field might also contain all the items derived\nfrom a source stream, like exporters."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm create stream --derived-from strmprivacy --levels 1 -o json\n{\n  "ref": { "billingId": "demo8542234275", "name": "strmprivacy-1" },\n  "consentLevels": [ 1 ],\n  "consentLevelType": "CUMULATIVE",\n  "enabled": true,\n  "linkedStream": "strmprivacy",\n  "credentials": [ { "clientId": "vnfku72pl3bgx...",\n  "clientSecret": "UMkNFnKt8ly#F..." } ]\n}\n')),(0,i.kt)("p",null,"This stream named ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy-1")," will contain the identical subset of\nevents as ",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy-0-1")),(0,i.kt)("h2",{id:"cleaning-up"},"Cleaning up"),(0,i.kt)("p",null,"Delete a stream, all its dependents and all its data (that hasn\u2019t been\nexported yet)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm delete stream strmprivacy --recursive -o json\n{\n  "streamTree": {\n    "stream": {\n      "ref": { "billingId": "demo8542234275", "name": "strmprivacy" },\n      "enabled": true,\n      "credentials": [ { "clientId": "qzzmqq8szj478..." } ]\n    },\n    "keyStream": {\n      "ref": { "billingId": "demo8542234275", "name": "strmprivacy" }\n    },\n    "derived": [\n      {\n        "ref": { "billingId": "demo8542234275", "name": "strmprivacy-1" },\n        "consentLevels": [ 1 ],\n        "consentLevelType": "CUMULATIVE",\n        "enabled": true,\n        "limits": {},\n        "linkedStream": "strmprivacy",\n        "credentials": [ { "clientId": "onrucokawroay..." } ]\n      }\n    ]\n  }\n}\n')))}p.isMDXComponent=!0}}]);