"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[2329],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,d=m["".concat(s,".").concat(h)]||m[h]||l[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5427:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={title:"Metrics and Monitoring",hide_table_of_contents:!1},s=void 0,u={unversionedId:"quickstart/ccd/monitoring",id:"quickstart/ccd/monitoring",title:"Metrics and Monitoring",description:"[prometheus]//prometheus.io/",source:"@site/docs/quickstart/ccd/monitoring.md",sourceDirName:"quickstart/ccd",slug:"/quickstart/ccd/monitoring",permalink:"/docs/latest/quickstart/ccd/monitoring",draft:!1,tags:[],version:"current",frontMatter:{title:"Metrics and Monitoring",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Interacting with a Customer Cloud Deployment",permalink:"/docs/latest/quickstart/ccd/interacting"},next:{title:"Batch Exporter",permalink:"/docs/latest/quickstart/batch-exporter"}},p={},l=[{value:"Monitoring the cluster via Prometheus",id:"monitoring-the-cluster-via-prometheus",level:2},{value:"Prometheus server",id:"prometheus-server",level:3},{value:"Grafana",id:"grafana",level:3}],m={toc:l};function h(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"monitoring-the-cluster-via-prometheus"},"Monitoring the cluster via Prometheus"),(0,o.kt)("p",null,"Most components of STRM Privacy expose ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," metrics and we've included the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts"},"Prometheus Cluster\nOperator")," Helm chart. In order to define ",(0,o.kt)("em",{parentName:"p"},"scrape targets")," to Prometheus, we deploy  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/blob/main/charts/kube-prometheus-stack/templates/prometheus-operator/servicemonitor.yaml"},"Service\nMonitors")," that expose the metrics endpoints in the Event Gateway."),(0,o.kt)("h3",{id:"prometheus-server"},"Prometheus server"),(0,o.kt)("p",null,"Access the Prometheus server either via ","[telepresence][telepresence]"," or via a port-forward"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward service/strmprivacy-kube-prometheu-prometheus 9090:9090&\n")),(0,o.kt)("p",null,"You should see the Event Gateway in the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/service-discovery"},"service discovery")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"serviceMonitor/strmprivacy/event-gateway-envoy-service-monitor/0"),(0,o.kt)("li",{parentName:"ul"},"serviceMonitor/strmprivacy/event-gateway-service-monitor/0")),(0,o.kt)("p",null,"and the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:9090/targets"},"targets")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"http://localhost:9090/targets",src:r(7767).Z,width:"1461",height:"541"})),(0,o.kt)("p",null,"If you have the simulator running, you could have somewhat interesting timing data:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"latency-timing",src:r(5922).Z,width:"1908",height:"434"})),(0,o.kt)("h3",{id:"grafana"},"Grafana"),(0,o.kt)("p",null,"The CCD quickstart also includes a Grafana instance, that we can port-forward"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward service/strmprivacy-grafana 4000:80&\n")),(0,o.kt)("p",null,"Log in to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:4000/dashboards"},"Grafana")," with username ",(0,o.kt)("inlineCode",{parentName:"p"},"admin")," and password ",(0,o.kt)("inlineCode",{parentName:"p"},"prom-operator")," (the value of\nthe secret named ",(0,o.kt)("inlineCode",{parentName:"p"},"strmprivacy-grafana"),")."),(0,o.kt)("p",null,"I've added two panels for the very simple dashboard we show here:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"grafana",src:r(362).Z,width:"976",height:"696"})))}h.isMDXComponent=!0},362:function(e,t,r){t.Z=r.p+"assets/images/grafana-9a01cfe81e0338f5ef1525ee918c2f54.png"},7767:function(e,t,r){t.Z=r.p+"assets/images/prometheus-targets-15a77d6c3aaf831a384ffb441171eb66.png"},5922:function(e,t,r){t.Z=r.p+"assets/images/prometheus-timing-bucket-a4efce5db1b2cc3369da9cbeb2f73af6.png"}}]);