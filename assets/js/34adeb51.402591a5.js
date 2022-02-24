"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[718],{5320:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return b},default:function(){return j},frontMatter:function(){return y},metadata:function(){return N},toc:function(){return x}});var n=a(7462),r=a(3366),s=a(7294),i=a(3905),l=a(1736),o=a(2389);var p=function(e){var t=e.children,a=e.fallback;return(0,o.Z)()?s.createElement(s.Fragment,null,t()):a||null},c=function(e){var t=(0,s.useState)(""),a=t[0],n=t[1];return(0,s.useEffect)((function(){var t;(t=e.url,fetch(t).then((function(e){return e.text()}))).then((function(e){n(e)}))}),[e.url]),s.createElement(l.Z,{language:e.lang,title:e.title},a)},m=function(e){return s.createElement(p,{fallback:s.createElement("div",null,"Loading...")},(function(){return s.createElement(c,e)}))},d=a(9548),u=a(6010),v="tabItem_LplD";function h(e){var t,a,r,i=e.lazy,l=e.block,o=e.defaultValue,p=e.values,c=e.groupId,m=e.className,h=s.Children.map(e.children,(function(e){if((0,s.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,d.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===o?o:null!=(t=null!=o?o:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(r=h[0])?void 0:r.props.value;if(null!==f&&!g.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,d.UB)(),b=y.tabGroupChoices,N=y.setTabGroupChoices,x=(0,s.useState)(f),w=x[0],j=x[1],T=[],S=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var E=b[c];null!=E&&E!==w&&g.some((function(e){return e.value===E}))&&j(E)}var I=function(e){var t=e.currentTarget,a=T.indexOf(t),n=g[a].value;n!==w&&(S(t),j(n),null!=c&&N(c,n))},_=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=T.indexOf(e.currentTarget)+1;a=T[n]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;a=T[r]||T[T.length-1]}null==(t=a)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},m)},g.map((function(e){var t=e.value,a=e.label,r=e.attributes;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:_,onFocus:I,onClick:I},r,{className:(0,u.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),i?(0,s.cloneElement)(h.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function g(e){var t=(0,o.Z)();return s.createElement(h,(0,n.Z)({key:String(t)},e))}var k=function(e){var t=e.children,a=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:a,className:n},t)},f=["components"],y={title:"Examples in multiple languages",hide_table_of_contents:!1},b="Complete examples",N={unversionedId:"quickstart/full-example",id:"quickstart/full-example",title:"Examples in multiple languages",description:"This section helps you to set up a stream and start sending data to STRM Privacy.",source:"@site/docs/quickstart/full-example.md",sourceDirName:"quickstart",slug:"/quickstart/full-example",permalink:"/docs/latest/quickstart/full-example",tags:[],version:"current",frontMatter:{title:"Examples in multiple languages",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Sending and receiving by hand",permalink:"/docs/latest/quickstart/sending-curl"},next:{title:"Kafka consumer in Python",permalink:"/docs/latest/quickstart/exporting-kafka"}},x=[{value:"Setting up a stream",id:"setting-up-a-stream",children:[],level:2},{value:"Using the programming language examples.",id:"using-the-programming-language-examples",children:[],level:2},{value:"Receiving data",id:"receiving-data",children:[],level:2}],w={toc:x};function j(e){var t=e.components,a=(0,r.Z)(e,f);return(0,i.kt)("wrapper",(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"complete-examples"},"Complete examples"),(0,i.kt)("p",null,"This section helps you to set up a stream and start sending data to STRM Privacy."),(0,i.kt)("h2",{id:"setting-up-a-stream"},"Setting up a stream"),(0,i.kt)("p",null,"This section assumes that you have created an account on the\n",(0,i.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"console"),"."),(0,i.kt)("h2",{id:"using-the-programming-language-examples"},"Using the programming language examples."),(0,i.kt)("p",null,"In order to run these examples, you need the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An input stream to send data to (if you don\u2019t know how, ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/creating-streams"},"go here")," to learn how to create\nstreams)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The credentials for this stream (presented upon stream creation). Either keep note of the returned values from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm create stream")," command, or use ",(0,i.kt)("inlineCode",{parentName:"p"},"--save")," flag to store them in the ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.config/strmprivacy/Stream")," directory."))),(0,i.kt)("p",null,"The following demo applications show how dummy data can be sent with a certain frequency. The data that is sent is quite\nstatic and does not result in any useful patterns for analysis, however, it does show how data can be constructed and\ntransferred to STRM Privacy."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/listen-web-socket"},"strm listen web-socket (stream-name)")," to debug issues."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"}," Currently (Aug. 2021) every example language has a different configuration file format. This is inconvenient and will be fixed. We aim to standardize this to the format created with\n",(0,i.kt)("inlineCode",{parentName:"p"},"strm create stream (stream-name) --save"),", so that getting up-and-running becomes easier."))),(0,i.kt)(g,{mdxType:"Tabs"},(0,i.kt)(k,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.strmprivacy/java-driver"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.strmprivacy/java-driver.svg?label=Java%20Driver&color=F25C03",alt:"java-driver"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.strmprivacy.schemas/demo-avro"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.strmprivacy.schemas/demo-avro.svg?label=demo-avro%20schema&color=F25C03",alt:"java-avro"}))),(0,i.kt)("p",null,"This example is\nalso ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/java-examples/blob/master/src/main/java/io/strmprivacy/examples/Sender.java"},"available on GitHub"),"\n. Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/java-examples"},"repository")," for the readme."),(0,i.kt)("p",null,"Short steps to start sending data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/java-examples\ncd java-examples\nstrm create stream demo --save\nf=~/.config/strmprivacy/saved-entities/Stream/demo.json\nbillingId=$(cat $f | jq -r '.ref.billingId')\nclientId=$(cat $f | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')\nmvn package\njava -jar target/java-examples-0.0.1-SNAPSHOT-jar-with-dependencies.jar \\\n  $billingId $clientId $clientSecret\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.eclipse.jetty.util.log                  - Logging initialized ...\nio.strmprivacy.driver.client.AuthService  - Initializing a new Auth Provider\nio.strmprivacy.examples.Sender            - 204\nio.strmprivacy.examples.Sender            - 204\nio.strmprivacy.examples.Sender            - 204\n\n...\n")),(0,i.kt)(m,{url:"https://raw.githubusercontent.com/strmprivacy/java-examples/master/src/main/java/io/strmprivacy/examples/Sender.java",title:"Sender.java",lang:"java",mdxType:"ExternalCodeBlock"})),(0,i.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/strmprivacy-driver/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/strmprivacy-driver.svg?label=Python%20Driver&color=F25C03",alt:"python-driver"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypi.org/project/strmprivacy-schemas-demo-avro/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/strmprivacy-schemas-demo-avro.svg?label=demo+avro+schema&color=F25C03",alt:"python-avro"}))),(0,i.kt)("p",null,"This example is\nalso ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py"},"available on GitHub"),". Please\nsee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-examples"},"repository")," for the readme."),(0,i.kt)("p",null,"Short steps to start sending data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/python-examples\ncd python-examples\npython3 -m venv .venv\n. .venv/bin/activate\npython3 -m pip install -r requirements.txt\nstrm create stream demo --save\nf=~/.config/strmprivacy/saved-entities/Stream/demo.json\nbillingId=$(cat $f | jq -r '.ref.billingId')\nclientId=$(cat $f | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')\npython3 examples/sender_async.py --billing-id $billingId\\\n  --client-id $clientId --client-secret $clientSecret\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    DEBUG:strmprivacy.driver.client.auth:Initializing a new Auth Provider for SenderService\n    DEBUG:strmprivacy.driver.client.auth:authenticate\n    INFO:__main__:Event sent, response 204\n    INFO:__main__:Event sent, response 204\n    INFO:__main__:Event sent, response 204\n    ...\n")),(0,i.kt)(m,{url:"https://raw.githubusercontent.com/strmprivacy/python-examples/master/examples/sender_async.py",title:"sender_async.py",lang:"python",mdxType:"ExternalCodeBlock"})),(0,i.kt)(k,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strmprivacy.io/nodejs-driver"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/nodejs-driver.svg?label=NodeJS+Driver&color=F25C03",alt:"nodejs-driver"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strmprivacy.io/schemas-demo-avro"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03",alt:"nodejs-avro"}))),(0,i.kt)("p",null,"This example is also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/nodejs-examples/blob/master/src/sender.ts"},"available on GitHub"),".\nPlease see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/nodejs-examples"},"repository")," for the readme."),(0,i.kt)("p",null,"Quick steps getting started:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/nodejs-examples\ncd nodejs-examples\nstrm create stream demo --save\ncat ~/.config/strmprivacy/saved-entities/Stream/demo.json | jq \\\n    '{billingId:.ref.billingId,\n      clientId:.credentials[0].clientId,\n      clientSecret:.credentials[0].clientSecret}' \\\n      > assets/credentials.json\nnpm i\nnpm run sender\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> nodejs-driver-example@1.0.0 sender\n> ts-node ./src/sender.ts\n\nStatus 204\nStatus 204\n...\n")),(0,i.kt)(m,{url:"https://raw.githubusercontent.com/strmprivacy/nodejs-examples/master/src/sender.ts",title:"sender.ts",lang:"typescript",mdxType:"ExternalCodeBlock"})),(0,i.kt)(k,{value:"php",label:"Php",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://packagist.org/packages/strmprivacy/php-driver"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03",alt:"php-driver"}))),(0,i.kt)("p",null,"This example is also ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/php-examples/blob/master/examples/send.php"},"available on GitHub"),".\nPlease see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/php-examples"},"repository")," for the readme."),(0,i.kt)("p",null,"Quick steps getting started:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/php-examples\ncd php-examples\nstrm create stream demo --save\ncomposer install\n## send one DemoEvent to STRM Privacy:\nphp examples/send.php <billingId> <clientId> <clientSecret>\n")),(0,i.kt)(m,{url:"https://raw.githubusercontent.com/strmprivacy/php-examples/master/examples/send.php",title:"send.php",lang:"php",mdxType:"ExternalCodeBlock"}),(0,i.kt)("p",null,"For PHP there are no code generation tools (yet) available for schema classes. The DemoEvent class below has been\nmanually created. For every event schema, a similar class is needed. This class needs to implement\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"\\StrmPrivacy\\Driver\\Contracts\\Event")," contract."))),(0,i.kt)("h2",{id:"receiving-data"},"Receiving data"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/listen-web-socket"},"strm listen web-socket")," for a debugging view on the events."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/exporting-kafka"},"exporting to Kafka")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/receiving-s3"},"batch exporters")," for production event consuming."))}j.isMDXComponent=!0}}]);