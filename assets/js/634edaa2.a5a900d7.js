"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[5079],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},704:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Receiving events over websocket",hide_table_of_contents:!1},c=void 0,l={unversionedId:"quickstart/listen-web-socket",id:"quickstart/listen-web-socket",title:"Receiving events over websocket",description:"It\u2019s nice to see some data when playing with the debugging endpoint. Use",source:"@site/docs/quickstart/listen-web-socket.md",sourceDirName:"quickstart",slug:"/quickstart/listen-web-socket",permalink:"/docs/latest/quickstart/listen-web-socket",draft:!1,tags:[],version:"current",frontMatter:{title:"Receiving events over websocket",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Creating Streams with the Command Line Interface",permalink:"/docs/latest/quickstart/creating-streams"},next:{title:"Sending and receiving by hand",permalink:"/docs/latest/quickstart/sending-curl"}},p={},d=[{value:"The Hard Way",id:"wscat",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It\u2019s nice to see some data when playing with the debugging endpoint. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm sim run-random demo")," to generate random data on the ",(0,i.kt)("inlineCode",{parentName:"p"},"demo")," stream.\nstream."),(0,i.kt)("p",null,"In one terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"strm create stream demo --save\nstrm simulate random-events demo #(1)\n\nStarting to simulate random strmprivacy/demo/1.0.2 events to stream demo.\nSending one event every 1000 ms.\nSent 5 events\n...\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"you don\u2019t need to specify credentials because you created the stream\nwith the ",(0,i.kt)("inlineCode",{parentName:"li"},"--save")," flag.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"strm listen web-socket")," command is used for showing the events in\nreal time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ strm listen web-socket --help\nRead events via the web-socket (not for production purposes)\n\nUsage:\n  strm listen web-socket (stream-name) [flags]\n\nFlags:\n      --client-id string       Client id to be used for receiving data\n      --client-secret string   Client secret to be used for receiving data\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"client-id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client-secret")," are optional, but required if you didn\u2019t\ncreate the stream with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save")," option. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/cli-index#permanent"},"cli\ndocs"),"."),(0,i.kt)("p",null,"Now lets consume the events from the simulator; in another terminal do:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ strm listen web-socket demo\n{\n  "strmMeta": {\n    "eventContractRef": "strmprivacy/example/1.3.0",\n    "nonce": 159456216,\n    "timestamp": 1629202317371,\n    "keyLink": "1e3a47c9-2b4a-4820-b16c-975a63d69d9d",\n    "billingId": "demo8542234275",\n    "consentLevels": [ 0 ]\n  },\n  "uniqueIdentifier": "AW0ku+QlmuzFHUc5asuBS/S2aPhnJFRXMkd9Sl8Z",\n  "consistentValue": "AW0ku+SxBlO/YwVHZ8kbq7PbRiS9UqoafqYsGrYm2p8=",\n  "someSensitiveValue": "AW0ku+Tf+Plyd/WN6E4NEpEaBEGVBHReySSdbmrjacAe",\n  "notSensitiveValue": "not-sensitive-5"\n}\n...\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The debugging endpoint shows ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," values, even when the actual wire\nformat is Avro binary in this case. This is to make it easier to inspect\nthe values."))),(0,i.kt)("h2",{id:"wscat"},"The Hard Way"),(0,i.kt)("p",null,"We don\u2019t have to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"strm")," command, we can use any websocket client\nto interact with the STRM Privacy web-socket endpoint."),(0,i.kt)("p",null,"First generate an OAuth2 ",(0,i.kt)("inlineCode",{parentName:"p"},"idToken")," as described\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/sending-curl#idToken"},"here"),"."),(0,i.kt)("p",null,"Here we use ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wscat"},"wscat")," to connect to\nthe websocket endpoint."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'wscat -H "authorization:Bearer $idToken" -c wss://websocket.strmprivacy.io/ws\nConnected (press CTRL+C to quit)\n< {\n  "strmMeta": {\n    "eventContractRef": "strmprivacy/example/1.3.0",\n    "nonce": -1234364567,\n    "timestamp": 1629192610656,\n    "keyLink": "57ff8035-ae35-4e82-9bf2-a4d0a544c89d",\n    "billingId": "demo8542234275",\n    "consentLevels": [ 0, 1, 2, 3 ]\n  },\n  "uniqueIdentifier": "ARYe0czxEBMEC6jh5GWYicyvqBD0JBOMRoQSm2PO",\n  "consistentValue": "ARYe0cxg2b9W++VYEMYKbZXLzgQf+cAkcZuqUh82lMw=",\n  "someSensitiveValue": "ARYe0cwC5ImORtYRIzKPzaxKyjErTn/9fyGhVTseDxg=",\n  "notSensitiveValue": "not-sensitive-48"\n}\n')),(0,i.kt)("p",null,"Note the encryption of all fields labelled PII in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"strmprivacy/example/1.3.0")," event contract."))}u.isMDXComponent=!0}}]);