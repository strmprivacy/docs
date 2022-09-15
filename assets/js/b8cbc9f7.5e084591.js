"use strict";(self.webpackChunkend_user_docs=self.webpackChunkend_user_docs||[]).push([[1303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=m(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const r={title:"Simple Schema",hide_table_of_contents:!1,sidebar_position:4},o=void 0,s={unversionedId:"quickstart/simple-schema",id:"quickstart/simple-schema",title:"Simple Schema",description:"This is a hands-on session where we create a Simple Schema and see how",source:"@site/docs/quickstart/simple-schema.md",sourceDirName:"quickstart",slug:"/quickstart/simple-schema",permalink:"/docs/latest/quickstart/simple-schema",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Simple Schema",hide_table_of_contents:!1,sidebar_position:4},sidebar:"docs",previous:{title:"Authenticated Kafka",permalink:"/docs/latest/quickstart/ccd/authenticated"},next:{title:"Authentication via the CLI",permalink:"/docs/latest/quickstart/authentication-cli"}},l={},m=[{value:"Creating a Simple Schema",id:"creating-a-simple-schema",level:2},{value:"Creating an associated Event Contract",id:"creating-an-associated-event-contract",level:2},{value:"Send some data with Python",id:"send-some-data-with-python",level:2},{value:"Simple Schemas Technical definition",id:"simple-schemas-technical-definition",level:2}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a hands-on session where we create a Simple Schema and see how\nto use it. Simple schemas are a much easier way of adding serialization\nschemas, as they can be based on widely adopted and probably familiar\nformats over the (complex) Avro and Json-schema formats. Especially for\nlarge schemas, simple schemas help to define your data shape much\nquicker."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The web console will have a graphical user-interface to define these,\nand will also have tools to automatically create schemas from for\ninstance a csv file.")),(0,i.kt)("h2",{id:"creating-a-simple-schema"},"Creating a Simple Schema"),(0,i.kt)("p",null,"I have created the following yaml file that defines a simple event\nschema that I want to use."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{target:"_blank",href:n(6786).Z},"simple-schema.yaml"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'name: Clicks\nnodes:\n  - name: SessionId\n    type: STRING\n    doc: the string value that connects events to a single sequence\n    required: true\n    repeated: false\n  - name: User Name\n    type: STRING\n    doc:  we use an event contract to define that this is private\n  - name: url\n    type: STRING\n    doc:  the URL of the current page\n  - name: mouse positions\n    repeated: true\n    type: NODE\n    nodes:\n      - name: x\n        type: INTEGER\n      - name: "y"  ## warning. Put quotes around y, or it is a boolean true\n        type: INTEGER\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note ",(0,i.kt)("inlineCode",{parentName:"p"},"Session Id")," has two additional arguments: ",(0,i.kt)("inlineCode",{parentName:"p"},"required")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"repeated"),". They are necessary for fields you want to mark as the ",(0,i.kt)("inlineCode",{parentName:"p"},"key field"),".")),(0,i.kt)("p",null,"To install this schema into STRM Privacy ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," we execute the following\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"strm create schema \\\n  --definition=simple-schema.yaml  \\ #(2)\n  quickstart/demo/1.0.0 #(1)\nSCHEMA                  TYPE   PUBLIC   FINGERPRINT\nquickstart/demo/1.0.0   AVRO   false    5923838772183777456\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the simple schema file we just created."),(0,i.kt)("li",{parentName:"ol"},"the schema reference which is ",(0,i.kt)("inlineCode",{parentName:"li"},"<handle>/<schema-name>/<schema-version>"),". You need to set your\n",(0,i.kt)("inlineCode",{parentName:"li"},"handle")," in the ",(0,i.kt)("a",{parentName:"li",href:"https://console.strmprivacy.io/profile"},"STRM Privacy\nconsole"))),(0,i.kt)("p",null,"We can read back the schema as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'strm get schema quickstart/demo/1.0.0 -o json\n{\n    "schema": {\n        "ref": {\n            "handle": "quickstart",\n            "name": "demo",\n            "version": "1.0.0",\n            "schemaType": "AVRO"\n        },\n        "state": "PENDING",\n        "definition": "{\\"type\\":\\"record\\",\\"name\\":\\"Clicks\\",\\"namespace\\":\\"com.....\n        "simpleSchema": {\n            "name": "Clicks",\n            "avroName": "Clicks",\n            "nodes": [\n                {\n                    "type": "STRING",\n                    "name": "Session Id",\n                    "avroName": "SessionId",\n                    "doc": "the string value that connects events to a single sequence"\n                },\n                {\n                    "type": "STRING",\n                    "name": "User Name",\n                    "avroName": "UserName",\n                    "doc": "we use an event contract to define that this is private"\n                },\n                {\n                    "type": "STRING",\n                    "name": "url",\n                    "avroName": "url",\n                    "doc": "the url on the website"\n                },\n                {\n                    "type": "FLOAT",\n                    "name": "Prijs in GB\xa3",\n                    "avroName": "PrijsInGb",\n                    "doc": "price in UK pounds"\n                },\n                ...\n            ]\n        }\n    },\n...\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We see that fields ",(0,i.kt)("inlineCode",{parentName:"p"},"avroName")," were created that look similar to our\noriginal ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". These names are subject to the ",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#names"},"Avro name\nconstraints"),"\nwhereas the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attributes in a Simple Schema are not ",(0,i.kt)("sup",{parentName:"p",id:"fnref-2"},(0,i.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We see in the returned ",(0,i.kt)("inlineCode",{parentName:"p"},"definition")," field an actual ",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#schemas"},"Avro avsc\ndefinition\nstring"),". This\ndefinition is what is actually being used by the STRM Privacy engine,\nthe Simple Schema is ",(0,i.kt)("em",{parentName:"p"},"only a way to create it"),".")),(0,i.kt)("p",null,"If we\u2019re interested in the actual Avro Schema we can make it a little\nmore visible by using some ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," magic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm get schema quickstart/demo/1.0.0 -o json | jq -r .schema.definition | jq .fields[1]\n{\n  "name": "SessionId",\n  "type": [\n    "null",\n    "string"\n  ],\n  "doc": "the string value that connects events to a single sequence",\n  "default": null\n}\n')),(0,i.kt)("p",null,"Avoiding this complexity is why we created Simple Schema. We expect that\na large majority of usecases on STRM Privacy will use Simple Schemas."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Avro definition contains a\n",(0,i.kt)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html#schema_complex"},(0,i.kt)("inlineCode",{parentName:"a"},"namespace")),"\nattribute.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm get schema quickstart/demo/1.0.0 -o json | jq -r .schema.definition | jq .namespace\n"quickstart.demo.v1_0_0"\n')),(0,i.kt)("p",null,"You ",(0,i.kt)("em",{parentName:"p"},"can")," set this in the Simple Schema yaml file, but when absent it\nwill be created from the event contracts ",(0,i.kt)("inlineCode",{parentName:"p"},"<handle>/<name>/<version>"),"\ntriple. Its value will generally only be interesting when you want to\nuse generated programming language code to create events ",(0,i.kt)("sup",{parentName:"p",id:"fnref-3"},(0,i.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". In the\nexample that follows we will use Python generated code to create some\nevents."),(0,i.kt)("h2",{id:"creating-an-associated-event-contract"},"Creating an associated Event Contract"),(0,i.kt)("p",null,"We want to create an event contract on this schema that will define\nthat:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SessionId")," is the event sequence identifier, the attribute that\nties events together.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UserName")," is a PII field, level 1"))),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("p",{parentName:"admonition"},"these names currently are the ",(0,i.kt)("inlineCode",{parentName:"p"},"avroNames"),", not the names in the simple\nschema.")),(0,i.kt)("p",null,"Checking ",(0,i.kt)("inlineCode",{parentName:"p"},"strm create event-contract --help")," tells us what we need to\ncreate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{target:"_blank",href:n(2031).Z},"event-contract.json"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "keyField" : "SessionId",\n  "piiFields" : { "UserName": 1 }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"strm create event-contract \\\n  -S quickstart/demo/1.0.0  \\ #(1)\n  -F event-contract.json  \\  #(2)\n  quickstart/demo-event-contract/2.0.0 #(3)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the schema that we want to refer to in this eventcontract"),(0,i.kt)("li",{parentName:"ol"},"the definition of the eventcontract"),(0,i.kt)("li",{parentName:"ol"},"I want to demonstrate that the eventcontract reference does ",(0,i.kt)("em",{parentName:"li"},"not"),"\nhave to be equal to the schema reference. You can have as many\neventcontracts as you need on one schema.")),(0,i.kt)("h2",{id:"send-some-data-with-python"},"Send some data with Python"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv venv\n. venv/bin/activate\nstrm get schema-code quickstart/demo/1.0.0 --language=python #(1)\nunzip python-avro-demo-1.0.0.zip\ncd python-avro-demo-1.0.0/\nmake install #(2)\npip install strmprivacy-driver #(3)\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"generates Python code that knows how to serialize data that are\nvalid for the Simple Schema you just created."),(0,i.kt)("li",{parentName:"ol"},"you could also do ",(0,i.kt)("inlineCode",{parentName:"li"},"make dev-install"),". See the ",(0,i.kt)("inlineCode",{parentName:"li"},"Makefile")," contents."),(0,i.kt)("li",{parentName:"ol"},"the STRM Privacy Python driver is accidentally excluded.")),(0,i.kt)("p",null,"Now I\u2019m going to follow along with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/quickstart/streaming/full-example"},"full Python\nexample")," except that I\u2019m going to modify the example\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/strmprivacy/python-examples/blob/master/examples/sender_async.py"},(0,i.kt)("inlineCode",{parentName:"a"},"sender_async.py")),"\ncode to use the schema-code we just generated."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{target:"_blank",href:n(2585).Z},"sender.py"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'## This code is somewhat simplified. Use the link above to download the full version.\n\n...\nfrom strmprivacy.driver import SerializationType, ClientConfig, StrmPrivacyClient\nfrom strmprivacy_quickstart_demo_v1_0_0.quickstart.demo.v1_0_0 import Clicks, mousepositions\n\nclass Sender(object):\n  async def __anext__(self):\n    event = create_avro_event()\n    return await self._client.send(event, SerializationType.AVRO_BINARY)\n\ndef create_avro_event():\n  event = Clicks()\n\n  event.strmMeta.eventContractRef = "quickstart/demo-event-contract/2.0.0"\n  event.strmMeta.consentLevels = [random.randint(0, 3)]\n\n  ## note the avro names instead of the Simple Schema names\n  event.SessionId = f"session-{random.randint(0,10)}"\n  event.UserName = f"user-{random.randint(0,10)}"\n  event.url = f"url-{random.randint(0,10)}"\n  event.PrijsInGb = random.random()*100.0\n  event.MousePositions = [\n    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)}),\n    mousepositions.MousePositions({"x": random.randint(0,1000), "y": random.randint(0,1000)})\n  ]\n  return event\n\n\nasync def main(config=ClientConfig()):\n  client = StrmPrivacyClient(sys.argv[1], sys.argv[2], sys.argv[3], config)\n  sender = Sender(client)\n  await sender.start_timers()  ## re-authorization jwt tokens\n\n  async for response in sender:\n    if response == 204:  ## event correctly accepted by endpoint\n      log.info(f"Event sent, response {response}")\n    else:\n      log.error(f"Something went wrong while trying to send event to STRM privacy response: {response}")\n    await asyncio.sleep(1)\n\n\nif __name__ == \'__main__\':\n  logging.basicConfig(stream=sys.stderr)\n  asyncio.run(main())\n')),(0,i.kt)("p",null,"Create two streams"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"strm create stream demo --save\nstrm create stream --derived-from demo --save --levels 1\n")),(0,i.kt)("p",null,"Create a few environment variables that we will use to start up the\nPython code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"saveFile=$(strm context info Stream/demo)\nbillingId=$(cat $saveFile | jq -r '.ref.billingId')\nclientId=$(cat $saveFile | jq -r '.credentials[0].clientId')\nclientSecret=$(cat $saveFile | jq -r '.credentials[0].clientSecret')\n")),(0,i.kt)("p",null,"Start sending events with this python code. The ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"},"204 http status\ncode"),"\nindicates the event was accepted and processed by the STRM Privacy event\ngateway with no issues."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 sender.py $billingId $clientId $clientSecret\n\nINFO:__main__:Event sent, response 204\nINFO:__main__:Event sent, response 204\n")),(0,i.kt)("p",null,"since Python 3.10 we find an warning from the http client\n",(0,i.kt)("inlineCode",{parentName:"p"},"charset_normalizer:Encoding detection on empty bytes, assuming utf_8 intention."),"\non our 204 empty response. This is annoying but no more."),(0,i.kt)("p",null,"And receive some data on the input stream."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm listen web-socket demo | jq \n{\n  "strmMeta": {\n    "eventContractRef": "quickstart/demo-event-contract/2.0.0",\n    "nonce": 1606491963,\n    "timestamp": 1640870686866,\n    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",\n    "billingId": "strmquickstart1585470330",\n    "consentLevels": [ 3 ]\n  },\n  "SessionId": "session-0",\n  "UserName": "ASSPO2VhVDtRvZD+8yDkrJwwm8wEvnuXtSD6", \n  "url": "url-0",\n  "PrijsInGb": 41.33574,\n  "MousePositions": [ { "x": 353, "y": 188 }, { "x": 60, "y": 938 } ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"we don\u2019t need explicit credentials because we used the ",(0,i.kt)("inlineCode",{parentName:"p"},"--save"),"\noption to create the streams.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"UserName")," is encrypted."))),(0,i.kt)("p",null,"we receive the ",(0,i.kt)("inlineCode",{parentName:"p"},"avroName")," attributes, and not our original ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),". A\nfuture version of our tooling will optionally return json with the\noriginal simple names."),(0,i.kt)("p",null,"And on the derived stream. Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"UserName")," is now decrypted, and\nyou would only receive events with ",(0,i.kt)("em",{parentName:"p"},"at least")," consent level 1 in the\nevent."),(0,i.kt)("p",null,"We can also listen on the derived stream with consent level 1. We will\nreceive only events with ",(0,i.kt)("em",{parentName:"p"},"at least")," consent level 1 in them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'strm listen web-socket demo-1\n\n{\n  "strmMeta": {\n    "eventContractRef": "quickstart/demo-event-contract/2.0.0", #(1)\n    "nonce": -2105288911,\n    "timestamp": 1640870774948,\n    "keyLink": "08ad5b5c-f71a-46ea-88b3-41e2facb6211",\n    "billingId": "strmquickstart1585470330",\n    "consentLevels": [ 1 ]\n  },\n  "SessionId": "session-0",\n  "UserName": "user-7", \n  "url": "url-2",\n  "PrijsInGb": 3.3405764,\n  "MousePositions": [ { "x": 252, "y": 992 }, { "x": 940, "y": 265 } ]\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UserName")," is now decrypted")),(0,i.kt)("h2",{id:"simple-schemas-technical-definition"},"Simple Schemas Technical definition"),(0,i.kt)("p",null,"A simple schema is defined via the following\n",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Protobuf")," definitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message SimpleSchemaDefinition {\n  string name #(1)\n  string avro_name #(2) \n  string namespace #(3) \n  string doc #(4) \n  repeated SimpleSchemaNode nodes #(5)  \n}\n\nSimpleSchemaNode {\n  SimpleSchemaNodeType type #(6) \n  string name #(7) \n  string avro_name #(2)  \n  bool repeated #(8)\n  bool required #(9)\n  repeated SimpleSchemaNode nodes #(10)\n  string doc #(4)\n}\n\nenum SimpleSchemaNodeType {\n  STRING\n  BOOLEAN\n  FLOAT\n  INTEGER\n  LONG\n  NODE #(6)\n}\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the name of the top level entity."),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://avro.apache.org/docs/current/spec.html#names"},"Avro compatible name"),". This\nfield is heuristically derived from ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," ",(0,i.kt)("em",{parentName:"li"},"unless")," you explicitly\nset its value in the SimpleSchema you provide. In that case it\u2019s up\nto you to make sure it is valid."),(0,i.kt)("li",{parentName:"ol"},"the namespace of the top level entity. This affects generated source\ncode. It is generated from ",(0,i.kt)("inlineCode",{parentName:"li"},"<handle>/<name>/<version>")," ",(0,i.kt)("em",{parentName:"li"},"unless")," you\nexplicitly set it, in which case you must make sure it\u2019s a valid\n",(0,i.kt)("a",{parentName:"li",href:"https://avro.apache.org/docs/current/spec.html#schema_complex"},"Avro namespace")),(0,i.kt)("li",{parentName:"ol"},"optional documentation that describes the meaning of the attribute\nor event"),(0,i.kt)("li",{parentName:"ol"},"a list of ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaNode")," entities describing attributes of the\nevent."),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaNodeType")," of an attribute. Simple ones are ",(0,i.kt)("inlineCode",{parentName:"li"},"STRING"),"\netc\u2026 The type can also be ",(0,i.kt)("inlineCode",{parentName:"li"},"NODE")," in which case the schema has a\nnested structure. In that case the ",(0,i.kt)("inlineCode",{parentName:"li"},"nodes")," field must hold ",(0,i.kt)("strong",{parentName:"li"},"at\nleast 1")," child ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaNode"),"."),(0,i.kt)("li",{parentName:"ol"},"the name of the attribute."),(0,i.kt)("li",{parentName:"ol"},"whether or not the entry is repeated, so it is either a single node\nor a list of nodes"),(0,i.kt)("li",{parentName:"ol"},"whether or not this attribute is required. When required your\nsending software ",(0,i.kt)("em",{parentName:"li"},"must")," fill in this value."),(0,i.kt)("li",{parentName:"ol"},"when ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is equal to ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaNodeType")," you can add 1 or more\n",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleSchemaNodes")," here")),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},(0,i.kt)("inlineCode",{parentName:"li"},"Strm")," versions before 1.15 need a json version of this file that you can convert ",(0,i.kt)("a",{parentName:"li",href:"https://onlineyamltools.com/convert-yaml-to-json"},"online"),(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-2"},"the only constraint is that the names must not contain ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Unicode_control_characters"},"Unicode control characters"),(0,i.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,i.kt)("li",{parentName:"ol",id:"fn-3"},(0,i.kt)("inlineCode",{parentName:"li"},"strm get schema-code ..."),(0,i.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}p.isMDXComponent=!0},2585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/sender-ba1d052ae94656eb6da2d212f358d365.py"},2031:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/event-contract-e64a6d71bb693e1c463b318984140e70.json"},6786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/simple-schema-86194133796062d7f015006399346933.yaml"}}]);