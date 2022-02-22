"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2278],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6780:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"usage",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/strm/get/usage",id:"cli-reference/strm/get/usage",title:"usage",description:"strm get usage",source:"@site/docs/cli-reference/strm/get/usage.md",sourceDirName:"cli-reference/strm/get",slug:"/cli-reference/strm/get/usage",permalink:"/docs/latest/cli-reference/strm/get/usage",tags:[],version:"current",frontMatter:{title:"usage",hide_title:!0},sidebar:"docs",previous:{title:"stream",permalink:"/docs/latest/cli-reference/strm/get/stream"},next:{title:"list",permalink:"/docs/latest/cli-reference/strm/list/"}},u=[{value:"strm get usage",id:"strm-get-usage",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-get-usage"},"strm get usage"),(0,o.kt)("p",null,"Get Usage for a certain stream name"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Usage allows you to see how many events were sent on a certain stream. This is currently only the events received on the\nevent-gateway. Extracting events via Kafka or Batch exporters is not included."),(0,o.kt)("p",null,"The values are interpolated from cumulative event accounts, and sampled over intervals\n(the --by option). The default output is csv, but json is also available."),(0,o.kt)("p",null,"The default range is over the last 24 hours, with a default interval of 15 minutes."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm get usage bart --by 15m --from 2021/7/27-10:00  --until 2021/7/27-12:00\n\nfrom,count,duration,change,rate\n2021-07-27T10:00:00.000000+0200,173478,900,NaN,NaN\n2021-07-27T10:15:00.000000+0200,182422,900,8944,9.94\n2021-07-27T10:30:00.000000+0200,191363,900,8941,9.93\n2021-07-27T10:45:00.000000+0200,200305,900,8942,9.94\n2021-07-27T11:00:00.000000+0200,209248,900,8943,9.94\n2021-07-27T11:15:00.000000+0200,218192,900,8944,9.94\n2021-07-27T11:30:00.000000+0200,227134,900,8942,9.94\n2021-07-27T11:45:00.000000+0200,236078,900,8944,9.94\n2021-07-27T12:00:00.000000+0200,245023,900,8945,9.94\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm get usage (stream-name) [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --by string      aggregate by (seconds|..m|..h|..d)\n      --from string    from YYYY/M/D-HH:mm\n  -h, --help           help for usage\n      --until string   until YYYY/M/D-HH:mm\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n  -r, --recursive                      Retrieve entities and their dependents\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/get/"},"strm get"),"\t - Get an entity")))}m.isMDXComponent=!0}}]);