"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[8750],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3617:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),c=["components"],i={title:"azure-blob-storage",hide_title:!0},s=void 0,l={unversionedId:"cli-reference/strm/create/data-connector/azure-blob-storage",id:"cli-reference/strm/create/data-connector/azure-blob-storage",title:"azure-blob-storage",description:"strm create data-connector azure-blob-storage",source:"@site/docs/cli-reference/strm/create/data-connector/azure-blob-storage.md",sourceDirName:"cli-reference/strm/create/data-connector",slug:"/cli-reference/strm/create/data-connector/azure-blob-storage",permalink:"/docs/latest/cli-reference/strm/create/data-connector/azure-blob-storage",tags:[],version:"current",frontMatter:{title:"azure-blob-storage",hide_title:!0},sidebar:"docs",previous:{title:"data-connector",permalink:"/docs/latest/cli-reference/strm/create/data-connector/"},next:{title:"gcs",permalink:"/docs/latest/cli-reference/strm/create/data-connector/gcs"}},u={},p=[{value:"strm create data-connector azure-blob-storage",id:"strm-create-data-connector-azure-blob-storage",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Usage",id:"usage",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"strm-create-data-connector-azure-blob-storage"},"strm create data-connector azure-blob-storage"),(0,o.kt)("p",null,"Create a Data Connector for an Azure Blob Storage Container"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Creates a data connector for an Azure Blob Storage container. Authentication is based on\nClient Secret Credentials, i.e. of an Application Principal."),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"strm create data-connector azure-blob-storage [data-connector-name] [container-name] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --client-id string             client ID of the application principal's client secret credentials\n      --client-secret string         client secret of the application principal's client secret credentials\n  -h, --help                         help for azure-blob-storage\n      --storage-account-uri string   full URI of the Azure Storage account, e.g. \"https://myaccount.blob.core.windows.net\"\n      --tenant-id string             tenant ID of the application principal's client secret credentials\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --api-auth-url string            User authentication host (default "https://accounts.strmprivacy.io")\n      --api-host string                API host and port (default "api.strmprivacy.io:443")\n      --events-auth-url string         Event authentication host (default "https://sts.strmprivacy.io")\n      --kafka-bootstrap-hosts string   Kafka bootstrap brokers, separated by comma (default "export-bootstrap.kafka.strmprivacy.io:9092")\n  -o, --output string                  Output format [json, json-raw, table, plain] (default "table")\n      --token-file string              Token file that contains an access token (default is $HOME/.config/strmprivacy/credentials-<api-auth-url>.json)\n      --web-socket-url string          Websocket to receive events from (default "wss://websocket.strmprivacy.io/ws")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli-reference/strm/create/data-connector.md"},"strm create data-connector"),"\t - Create a Data Connector")))}f.isMDXComponent=!0}}]);