"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[3886],{992:(e,t,a)=>{a.d(t,{i:()=>o});var r=a(7294),n=a(814),s=a(2389);function l(e){let{children:t,fallback:a}=e;return(0,s.Z)()?r.createElement(r.Fragment,null,null==t?void 0:t()):null!=a?a:null}const i=e=>{let[t,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{var t;(t=e.url,fetch(t).then((e=>e.text()))).then((e=>{a(e)}))}),[e.url]),r.createElement(n.Z,{language:e.lang,title:e.title},t)},o=e=>r.createElement(l,{fallback:r.createElement("div",null,"Loading...")},(()=>r.createElement(i,e)))},5861:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>w,frontMatter:()=>b,metadata:()=>f,toc:()=>N});var r=a(7462),n=a(7294),s=a(3905),l=(a(814),a(992)),i=a(6010),o=a(2389),p=a(7392),m=a(7094),c=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function h(e){var t,a;const{lazy:s,block:l,defaultValue:o,values:h,groupId:v,className:g}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:k.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),y=(0,p.l)(b,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===o?o:null!=(t=null!=o?o:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:N}=(0,m.U)(),[j,w]=(0,n.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=v){const e=x[v];null!=e&&e!==j&&b.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,a=S.indexOf(t),r=b[a].value;r!==j&&(T(t),w(r),null!=v&&N(v,String(r)))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=S.indexOf(e.currentTarget)+1;a=null!=(r=S[t])?r:S[0];break}case"ArrowLeft":{var n;const t=S.indexOf(e.currentTarget)-1;a=null!=(n=S[t])?n:S[S.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,i.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},g)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>S.push(e),onKeyDown:I,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":j===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(k.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function v(e){const t=(0,o.Z)();return n.createElement(h,(0,r.Z)({key:String(t)},e))}const g="tabItem_Ymn6";function k(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(g,r),hidden:a},t)}const b={title:"Examples in multiple languages",hide_table_of_contents:!1},y="Complete examples",f={unversionedId:"quickstart/streaming/full-example",id:"quickstart/streaming/full-example",title:"Examples in multiple languages",description:"This section helps you to set up a stream and start sending data to STRM Privacy.",source:"@site/docs/quickstart/streaming/full-example.md",sourceDirName:"quickstart/streaming",slug:"/quickstart/streaming/full-example",permalink:"/docs/latest/quickstart/streaming/full-example",draft:!1,tags:[],version:"current",frontMatter:{title:"Examples in multiple languages",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"Exporting Keys",permalink:"/docs/latest/quickstart/streaming/exporting-keys"},next:{title:"Receiving events over websocket",permalink:"/docs/latest/quickstart/streaming/listen-web-socket"}},x={},N=[{value:"Setting up a stream",id:"setting-up-a-stream",level:2},{value:"Using the programming language examples.",id:"using-the-programming-language-examples",level:2},{value:"Receiving data",id:"receiving-data",level:2}],j={toc:N};function w(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,r.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"complete-examples"},"Complete examples"),(0,s.kt)("p",null,"This section helps you to set up a stream and start sending data to STRM Privacy."),(0,s.kt)("h2",{id:"setting-up-a-stream"},"Setting up a stream"),(0,s.kt)("p",null,"This section assumes that you have created an account on the\n",(0,s.kt)("a",{parentName:"p",href:"https://console.strmprivacy.io"},"console"),"."),(0,s.kt)("h2",{id:"using-the-programming-language-examples"},"Using the programming language examples."),(0,s.kt)("p",null,"In order to run these examples, you need the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"An input stream to send data to (if you don\u2019t know how, ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/creating-streams"},"go here")," to learn how to create\nstreams)")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The credentials for this stream (presented upon stream creation). Either keep note of the returned values from the\n",(0,s.kt)("inlineCode",{parentName:"p"},"strm create stream")," command, or use ",(0,s.kt)("inlineCode",{parentName:"p"},"--save")," flag to store them in the ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.config/strmprivacy/Stream")," directory."))),(0,s.kt)("p",null,"The following demo applications show how dummy data can be sent with a certain frequency. The data that is sent is quite\nstatic and does not result in any useful patterns for analysis, however, it does show how data can be constructed and\ntransferred to STRM Privacy."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Use ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/listen-web-socket"},"strm listen web-socket (stream-name)")," to debug issues.")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"}," Currently (Aug. 2021) every example language has a different configuration file format. This is inconvenient and will be fixed. We aim to standardize this to the format created with\n",(0,s.kt)("inlineCode",{parentName:"p"},"strm create stream (stream-name) --save"),", so that getting up-and-running becomes easier.")),(0,s.kt)(v,{mdxType:"Tabs"},(0,s.kt)(k,{value:"java",label:"Java",default:!0,mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.strmprivacy/java-driver"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.strmprivacy/java-driver.svg?label=Java%20Driver&color=F25C03",alt:"java-driver"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://search.maven.org/artifact/io.strmprivacy.schemas/demo-avro"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/maven-central/v/io.strmprivacy.schemas/demo-avro.svg?label=demo-avro%20schema&color=F25C03",alt:"java-avro"}))),(0,s.kt)("p",null,"This example is\nalso ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/java-examples/blob/master/src/main/java/io/strmprivacy/examples/Sender.java"},"available on GitHub"),"\n. Please see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/java-examples"},"repository")," for the readme."),(0,s.kt)("p",null,"Short steps to start sending data:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/java-examples\ncd java-examples\nstrm create stream demo --save\nf=$( strm context info Stream/demo )\nbillingId=$(cat $f | jq -r '.ref.billingId')\nclientId=$(cat $f | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')\nmvn package\njava -jar target/java-examples-0.0.1-SNAPSHOT-jar-with-dependencies.jar \\\n  $billingId $clientId $clientSecret\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"org.eclipse.jetty.util.log                  - Logging initialized ...\nio.strmprivacy.driver.client.AuthService  - Initializing a new Auth Provider\nio.strmprivacy.examples.Sender            - 204\nio.strmprivacy.examples.Sender            - 204\nio.strmprivacy.examples.Sender            - 204\n\n...\n")),(0,s.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/java-examples/master/src/main/java/io/strmprivacy/examples/Sender.java",title:"Sender.java",lang:"java",mdxType:"ExternalCodeBlock"})),(0,s.kt)(k,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/strmprivacy-driver/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/strmprivacy-driver.svg?label=Python%20Driver&color=F25C03",alt:"python-driver"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://pypi.org/project/strmprivacy-schemas-demo-avro/"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/strmprivacy-schemas-demo-avro.svg?label=demo+avro+schema&color=F25C03",alt:"python-avro"}))),(0,s.kt)("p",null,"This example is\nalso ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py"},"available on GitHub"),". Please\nsee the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-examples"},"repository")," for the readme."),(0,s.kt)("p",null,"Short steps to start sending data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/python-examples\ncd python-examples\npython3 -m venv .venv\n. .venv/bin/activate\npython3 -m pip install -r requirements.txt\nstrm create stream demo --save\nf=$( strm context info Stream/demo )\nbillingId=$(cat $f | jq -r '.ref.billingId')\nclientId=$(cat $f | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')\npython3 examples/sender_async.py --billing-id $billingId\\\n  --client-id $clientId --client-secret $clientSecret\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"    DEBUG:strmprivacy.driver.client.auth:Initializing a new Auth Provider for SenderService\n    DEBUG:strmprivacy.driver.client.auth:authenticate\n    INFO:__main__:Event sent, response 204\n    INFO:__main__:Event sent, response 204\n    INFO:__main__:Event sent, response 204\n    ...\n")),(0,s.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/python-examples/master/examples/sender_async.py",title:"sender_async.py",lang:"python",mdxType:"ExternalCodeBlock"})),(0,s.kt)(k,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/strm-privacy-driver"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/strm-privacy-driver.svg?label=Rust%20Driver&color=F25C03",alt:"rust-driver"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://crates.io/crates/strmprivacy_schema_strmprivacy_demo"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/strmprivacy_schema_strmprivacy_demo.svg?label=demo+avro+schema&color=F25C03",alt:"rust-avro"}))),(0,s.kt)("p",null,"This example is\nalso ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/rust-examples/blob/main/src/main.rs"},"available on GitHub"),". Please\nsee the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/rust-examples"},"repository")," for the readme."),(0,s.kt)("p",null,"Short steps to start sending data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:strmprivacy/rust-examples.git\ncd rust-examples\nstrm create stream demo --save\nf=$( strm context info Stream/demo )\nbillingId=$(cat $f | jq -r '.ref.billingId')\nclientId=$(cat $f | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $f | jq -r '.credentials[0].clientSecret')\ncargo run $billingId $clientId $clientSecret\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"initializing client\nsending events..\nEvent sent: 204 No Content\nEvent sent: 204 No Content\nEvent sent: 204 No Content\nEvent sent: 204 No Content\nEvent sent: 204 No Content\n...\n")),(0,s.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/rust-examples/master/src/main.rs",title:"main.rs",lang:"rust",mdxType:"ExternalCodeBlock"})),(0,s.kt)(k,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strmprivacy.io/nodejs-driver"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/nodejs-driver.svg?label=NodeJS+Driver&color=F25C03",alt:"nodejs-driver"})),"\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@strmprivacy.io/schemas-demo-avro"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03",alt:"nodejs-avro"}))),(0,s.kt)("p",null,"This example is also ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/nodejs-examples/blob/master/src/sender.ts"},"available on GitHub"),".\nPlease see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/nodejs-examples"},"repository")," for the readme."),(0,s.kt)("p",null,"Quick steps getting started:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/nodejs-examples\ncd nodejs-examples\nstrm create stream demo --save\ncat $( strm context info Stream/demo ) | jq \\\n    '{billingId:.ref.billingId,\n      clientId:.credentials[0].clientId,\n      clientSecret:.credentials[0].clientSecret}' \\\n      > assets/credentials.json\nnpm i\nnpm run sender\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"> nodejs-driver-example@1.0.0 sender\n> ts-node ./src/sender.ts\n\nStatus 204\nStatus 204\n...\n")),(0,s.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/nodejs-examples/master/src/sender.ts",title:"sender.ts",lang:"typescript",mdxType:"ExternalCodeBlock"})),(0,s.kt)(k,{value:"php",label:"Php",mdxType:"TabItem"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://packagist.org/packages/strmprivacy/php-driver"},(0,s.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@strmprivacy/schemas-demo-avro.svg?label=Avro+demo+schema&color=F25C03",alt:"php-driver"}))),(0,s.kt)("p",null,"This example is also ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/php-examples/blob/master/examples/send.php"},"available on GitHub"),".\nPlease see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/php-examples"},"repository")," for the readme."),(0,s.kt)("p",null,"Quick steps getting started:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/strmprivacy/php-examples\ncd php-examples\nstrm create stream demo --save\ncomposer install\n## send one DemoEvent to STRM Privacy:\nphp examples/send.php <billingId> <clientId> <clientSecret>\n")),(0,s.kt)(l.i,{url:"https://raw.githubusercontent.com/strmprivacy/php-examples/master/examples/send.php",title:"send.php",lang:"php",mdxType:"ExternalCodeBlock"}),(0,s.kt)("p",null,"For PHP there are no code generation tools (yet) available for schema classes. The DemoEvent class below has been\nmanually created. For every event schema, a similar class is needed. This class needs to implement\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"\\StrmPrivacy\\Driver\\Contracts\\Event")," contract."))),(0,s.kt)("h2",{id:"receiving-data"},"Receiving data"),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/listen-web-socket"},"strm listen web-socket")," for a debugging view on the events."),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/exporting-kafka"},"exporting to Kafka")," or ",(0,s.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/batch/batch-exporter"},"batch exporters")," for production event consuming."))}w.isMDXComponent=!0}}]);