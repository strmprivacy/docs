"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"STRM Privacy CLI reference",hide_table_of_contents:!1},l=void 0,o={unversionedId:"reference/cli-reference/index",id:"reference/cli-reference/index",title:"STRM Privacy CLI reference",description:"The STRM Privacy CLI (strm) is the primary tool for managing your STRM",source:"@site/docs/04-reference/01-cli-reference/index.md",sourceDirName:"04-reference/01-cli-reference",slug:"/reference/cli-reference/",permalink:"/docs/latest/reference/cli-reference/",draft:!1,tags:[],version:"current",frontMatter:{title:"STRM Privacy CLI reference",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Example notebook",permalink:"/docs/latest/quickstart/data-team"},next:{title:"strm",permalink:"/docs/latest/reference/cli-reference/strm/"}},s={},p=[{value:"Principles",id:"principles",level:2},{value:"Verbs first",id:"verbs-first",level:3},{value:"Sensible defaults",id:"sensible-defaults",level:3},{value:"Global commands",id:"global-commands",level:2},{value:"Global flags",id:"global-flags",level:2},{value:"Entities",id:"entities",level:2},{value:"Making some options permanent",id:"permanent",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The STRM Privacy CLI (strm) is the primary tool for managing your STRM\nPrivacy resources."),(0,a.kt)("p",null,"The CLI follows the same structure as many other popular CLI tools, like\n",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl"),". This is visible in the following way:"),(0,a.kt)("h2",{id:"principles"},"Principles"),(0,a.kt)("h3",{id:"verbs-first"},"Verbs first"),(0,a.kt)("p",null,"Most commands in the CLI start with a verb, and then a noun, for\nexample: ",(0,a.kt)("inlineCode",{parentName:"p"},"create stream"),"."),(0,a.kt)("p",null,"The currently supported verbs are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"create"),": Create a new resource. An error is returned if the\nresource already exists")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"update"),": Update an existing resource. An error is returned if the\nresource does not exist.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"delete"),": Delete an existing resource. An error is returned if the\nresource does not exist.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"list"),": List resources of a given type, with optional filters. An\nempty list is returned if nothing is found.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"get"),': Get a resource by its primary key (usually a "name" or "ref"\nattribute). An error is returned if the resource does not exist.'))),(0,a.kt)("h3",{id:"sensible-defaults"},"Sensible defaults"),(0,a.kt)("p",null,"Not every attribute needs to be specified when creating resources, so\ntypically only one or two options are needed to create a resource."),(0,a.kt)("h2",{id:"global-commands"},"Global commands"),(0,a.kt)("p",null,"The following commands that are not directly tied to a resource are\navailable in the CLI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"help"),": The general help page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"version"),": Displays the current version and build information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"auth"),": Various authentication commands for the CLI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"completion"),": generates completions for a given terminal (bash, zsh,\nfish, PowerShell)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"simulate"),": Runs a simulation with events on a given stream.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"listen"),": Connects to an endpoint to listen for events."))),(0,a.kt)("h2",{id:"global-flags"},"Global flags"),(0,a.kt)("p",null,"--api-auth-url --api-host --web-socket-url --events-auth-url --output\n--token-file"),(0,a.kt)("p",null,"--api-auth-url",(0,a.kt)("br",{parentName:"p"}),"\n",'Auth URL for user logins (default "',(0,a.kt)("a",{parentName:"p",href:"https://accounts.strmprivacy.io%22"},'https://accounts.strmprivacy.io"'),")"),(0,a.kt)("p",null,"--api-host",(0,a.kt)("br",{parentName:"p"}),"\n",'API host name (default "apis.strmprivacy.io:443")'),(0,a.kt)("p",null,"--web-socket-url",(0,a.kt)("br",{parentName:"p"}),"\n",'Websocket to receive events from (default\n"wss://websocket.strmprivacy.io/ws").'),(0,a.kt)("p",null,"--events-auth-url",(0,a.kt)("br",{parentName:"p"}),"\n",'Security Token Service for events (default "',(0,a.kt)("a",{parentName:"p",href:"https://sts.strmprivacy.io%22"},'https://sts.strmprivacy.io"'),")"),(0,a.kt)("p",null,"--help",(0,a.kt)("br",{parentName:"p"}),"\n","Displays the help page"),(0,a.kt)("p",null,"--recursive",(0,a.kt)("br",{parentName:"p"}),"\n","Available on many ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," commands. Displays the\ndependents of an entity in the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," .Deletes the\nentity along with its dependents in the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),"."),(0,a.kt)("p",null,"--save",(0,a.kt)("br",{parentName:"p"}),"\n","Available on many create commands. Saves the entity details to a JSON\nfile in the config directory."),(0,a.kt)("p",null,"--token-file",(0,a.kt)("br",{parentName:"p"}),"\n","config file (default is\n$HOME/.config/strmprivacy/strm-creds-","<","api-auth-host",">",".json)"),(0,a.kt)("h2",{id:"entities"},"Entities"),(0,a.kt)("p",null,"The following entities are available in the CLI:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"batch-exporter"),(0,a.kt)("li",{parentName:"ul"},"data-connector"),(0,a.kt)("li",{parentName:"ul"},"data contract"),(0,a.kt)("li",{parentName:"ul"},"kafka-cluster"),(0,a.kt)("li",{parentName:"ul"},"kafka-exporter"),(0,a.kt)("li",{parentName:"ul"},"kafka-user"),(0,a.kt)("li",{parentName:"ul"},"key-stream"),(0,a.kt)("li",{parentName:"ul"},"schema"),(0,a.kt)("li",{parentName:"ul"},"schema-code"),(0,a.kt)("li",{parentName:"ul"},"stream"),(0,a.kt)("li",{parentName:"ul"},"usage")),(0,a.kt)("h2",{id:"permanent"},"Making some options permanent"),(0,a.kt)("p",null,"Assume you always want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--save")," on stream creation commands."),(0,a.kt)("p",null,"Edit the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," in the configuration directory, and\nuncomment the line ",(0,a.kt)("inlineCode",{parentName:"p"},"save: true")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"~/.config/strmprivacy/config.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"save: true\n")),(0,a.kt)("p",null,"This works similarly for any of the other ",(0,a.kt)("em",{parentName:"p"},"flags"),"."),(0,a.kt)("p",null,"Note that the flag ",(0,a.kt)("inlineCode",{parentName:"p"},"interval")," is used both by the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/reference/cli-reference/strm/simulate/random-events"},"sim")," and\n",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/reference/cli-reference/strm/create/batch-exporter"},"batch-exporter")," entities but in one case with a\nmeaning of seconds, and in the other of milliseconds, so this one is\nprobably not a good one to make permanent. Although you can override the\nvalue if the configuration file with one on the command line."))}u.isMDXComponent=!0}}]);