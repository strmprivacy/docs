"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8959],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=s,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8311:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),s=n(3366),a=(n(7294),n(3905)),i=["components"],o={title:"random-events",hide_title:!0},l=void 0,c={unversionedId:"cli-reference/strm/simulate/random-events",id:"cli-reference/strm/simulate/random-events",title:"random-events",description:"strm simulate random-events",source:"@site/docs/cli-reference/strm/simulate/random-events.md",sourceDirName:"cli-reference/strm/simulate",slug:"/cli-reference/strm/simulate/random-events",permalink:"/docs/latest/cli-reference/strm/simulate/random-events",tags:[],version:"current",frontMatter:{title:"random-events",hide_title:!0},sidebar:"docs",previous:{title:"simulate",permalink:"/docs/latest/cli-reference/strm/simulate/"},next:{title:"Reach out to us",permalink:"/docs/latest/contact/"}},u=[{value:"strm simulate random-events",id:"strm-simulate-random-events",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"strm-simulate-random-events"},"strm simulate random-events"),(0,a.kt)("p",null,"Run a simulator that will send random events to a stream"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"The global ",(0,a.kt)("inlineCode",{parentName:"p"},"simulate")," command runs a simulation with random events against a given Source Stream, using the ClickStream\nschema."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"strm simulate random-events [stream-name] [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --client-id string         Client id to be used for sending data\n      --client-secret string     Client secret to be used for sending data\n      --consent-levels strings   consent levels to be simulated (default [,0,0/1,0/1/2,0/1/2/3])\n      --events-api-url string    Endpoint to send events to (default "https://events.strmprivacy.io/event")\n  -h, --help                     help for random-events\n      --interval int             Interval in ms. between simulated events (default 1000)\n      --quiet                    don\'t spam stderr\n      --session-prefix string    Prefix string for sessions (default "session")\n      --session-range int        Number of different sessions being generated (default 1000)\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --schema string                  Which schema to use for creating simulated events (default "strmprivacy/demo/1.0.2")\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/cli-reference/strm/simulate/"},"strm simulate"),"\t - Send simulated events with a predefined demo schema (not for production purposes)")))}d.isMDXComponent=!0}}]);