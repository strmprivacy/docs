"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={title:"stream",hide_title:!0},i=void 0,o={unversionedId:"reference/cli-reference/strm/create/stream",id:"reference/cli-reference/strm/create/stream",title:"stream",description:"strm create stream",source:"@site/docs/04-reference/01-cli-reference/strm/create/stream.md",sourceDirName:"04-reference/01-cli-reference/strm/create",slug:"/reference/cli-reference/strm/create/stream",permalink:"/docs/latest/reference/cli-reference/strm/create/stream",draft:!1,tags:[],version:"current",frontMatter:{title:"stream",hide_title:!0},sidebar:"docs",previous:{title:"project",permalink:"/docs/latest/reference/cli-reference/strm/create/project"},next:{title:"delete",permalink:"/docs/latest/reference/cli-reference/strm/delete/"}},c={},l=[{value:"strm create stream",id:"strm-create-stream",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-create-stream"},"strm create stream"),(0,a.kt)("p",null,"Create a Stream"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"A stream is a pipeline implementation in STRM Privacy using streaming technology (Kafka)."),(0,a.kt)("p",null,'Events are sent through the "Event Gateway" to a "Source Stream", where ',(0,a.kt)("em",{parentName:"p"},"all"),' sensitive (personal) data event attributes are encrypted\nafter validating that the event conforms to a data contract. "Privacy Streams" are derived from source streams.'),(0,a.kt)("p",null,'A derived "Privacy Stream" is configured for one or more specific purposes. It only receives events that are allowed\nto be processed for the configured purposes. The sensitive attributes matching those purposes are decrypted, while\nnon-matching attributes remain encrypted.'),(0,a.kt)("p",null,"Every stream has its own set of access tokens. Connecting to a source stream (i.e. sending events) requires different\ncredentials than connecting to a derived Privacy Stream."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm create stream (name) [flags]\n")),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nstrm create stream test\n\nA name is not required for a derived stream; when absent a name will be created based on the source stream\nand the provided purposes.\n\nstrm create stream --derived-from test --purposes 1,3,8 test-marketing\n\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  -D, --derived-from string         name of stream that this stream is derived from\n      --description string          description of this stream\n  -h, --help                        help for stream\n      --mask-seed string            a seed used for masking\n  -M, --masked-fields stringArray   -M strmprivacy/example/1.5.0:sensitiveValue,consistentValue \\\n                                    -M strmprivacy/clickstream/1.0.0:sessionId\n                                    \n                                    Masks fields values in the output stream via hashing.\n                                        \n      --policy-id string            the uuid of the policy to attach\n      --policy-name string          the name of the policy to attach\n  -P, --purposes int32Slice         comma separated list of integers referring to purposes (only for derived streams) (default [])\n      --save                        if true, save the credentials in ~/.config/strmprivacy/saved-entities. (default true)\n      --tags strings                a list of tags for this stream\n")),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string   user authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string       api host and port (default "api.strmprivacy.io:443")\n  -o, --output string         output format [json, json-raw, table, plain] (default "table")\n  -p, --project string        project to use (defaults to context-configured project)\n      --token-file string     token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/reference/cli-reference/strm/create/"},"strm create"),"\t - Create an entity")))}m.isMDXComponent=!0}}]);