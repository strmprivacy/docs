"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[6896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={title:"event-contract",hide_title:!0},o=void 0,c={unversionedId:"reference/cli-reference/strm/create/event-contract",id:"reference/cli-reference/strm/create/event-contract",title:"event-contract",description:"strm create event-contract",source:"@site/docs/04-reference/01-cli-reference/strm/create/event-contract.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/event-contract",permalink:"/docs/latest/reference/cli-reference/strm/create/event-contract",draft:!1,tags:[],version:"current",frontMatter:{title:"event-contract",hide_title:!0},sidebar:"docs",previous:{title:"s3",permalink:"/docs/latest/reference/cli-reference/strm/create/data-connector/s3"},next:{title:"kafka-exporter",permalink:"/docs/latest/reference/cli-reference/strm/create/kafka-exporter"}},s={},l=[{value:"strm create event-contract",id:"strm-create-event-contract",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-create-event-contract"},"strm create event-contract"),(0,a.kt)("p",null,"Create an event-contract with reference 'handle/name/version'"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"An Event Contract defines the rules that are to be applied to events."),(0,a.kt)("p",null,"The Event Contract defines:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the Schema to use via a full Schema reference (handle/name/version)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the key field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"the PII fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"any validations on fields (e.g. a regex to validate an email address)"))),(0,a.kt)("p",null,"Like Schemas, Event Contracts can be private or public, allowing them to be found and used by others than the owning\nclient. Be careful, public Event Contracts cannot be deleted."),(0,a.kt)("p",null,"Also like Schemas, Event Contracts are versioned using a versioning scheme that can be fully determined by the client.\nThe only restrictions are that version numbers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST follow the semantic version format (major/minor/patch),")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MUST always be ascending"))),(0,a.kt)("p",null,"An Event Contract is uniquely identified by its Event Contract reference, in the format (organization handle/event\ncontract name/version)."),(0,a.kt)("p",null,"An Event Contract MUST have the state ACTIVE to be used for processing events."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm create event-contract (handle/name/version) [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -F, --definition-file string   The path to the file with the keyField, and possibly piiFields and validations. Example JSON definition file:\n                                 {\n                                     "keyField": "sessionId",\n                                     "piiFields": {\n                                         "sessionId": 2,\n                                         "referrerUrl": 1\n                                     },\n                                     "validations": [\n                                         {\n                                             "field": "referrerUrl",\n                                             "type": "regex",\n                                             "value": "^.*strmprivacy.*$"\n                                         }\n                                     ]\n                                 }\n  -h, --help                     help for event-contract\n  -P, --public                   Public visibility of the Event Contract (allow others to use this contract)\n  -S, --schema-ref string        The Serialization Schema to which this Event Contract is linked\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --project string                 Project to use (defaults to context-configured project)\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/"},"strm create"),"\t - Create an entity")))}u.isMDXComponent=!0}}]);