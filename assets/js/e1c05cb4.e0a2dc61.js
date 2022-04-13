"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[1347],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40186:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:"This is the template that should be used when adding documentation for a new connector."},p="Connector Doc Template",c={unversionedId:"contributing-to-airbyte/templates/integration-documentation-template",id:"contributing-to-airbyte/templates/integration-documentation-template",title:"Connector Doc Template",description:"This is the template that should be used when adding documentation for a new connector.",source:"@site/../docs/contributing-to-airbyte/templates/integration-documentation-template.md",sourceDirName:"contributing-to-airbyte/templates",slug:"/contributing-to-airbyte/templates/integration-documentation-template",permalink:"/contributing-to-airbyte/templates/integration-documentation-template",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/contributing-to-airbyte/templates/integration-documentation-template.md",tags:[],version:"current",frontMatter:{description:"This is the template that should be used when adding documentation for a new connector."},sidebar:"mySidebar",previous:{title:"Templates",permalink:"/contributing-to-airbyte/templates/"},next:{title:"Understanding Airbyte",permalink:"/understanding-airbyte/"}},s={},u=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Data type mapping",id:"data-type-mapping",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-doc-template"},"Connector Doc Template"),(0,i.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,i.kt)("h3",{id:"output-schema"},"Output schema"),(0,i.kt)("p",null,"Is the output schema fixed ","(","e.g: for an API like Stripe",")","? If so, point to the connector's schema ","(","e.g: link to Stripe\u2019s documentation",")"," or describe the schema here directly ","(","e.g: include a diagram or paragraphs describing the schema",")","."),(0,i.kt)("p",null,"Describe how the connector's schema is mapped to Airbyte concepts. An example description might be: \u201cMagicDB tables become Airbyte Streams and MagicDB columns become Airbyte Fields. In addition, an extracted","_","at column is appended to each row being read.\u201d"),(0,i.kt)("h3",{id:"data-type-mapping"},"Data type mapping"),(0,i.kt)("p",null,"This section should contain a table mapping each of the connector's data types to Airbyte types. At the moment, Airbyte uses the same types used by ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org/understanding-json-schema/reference/index.html"},"JSONSchema"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"date-time"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"array"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"integer"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," are the most commonly used data types."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes")))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("p",null,"This section should contain a table with the following format:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"For databases, WAL/Logical replication"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SSH Tunnel Support"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"(","Any other source-specific features",")"),(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,i.kt)("p",null,"Could this connector hurt the user's database/API/etc... or put too much strain on it in certain circumstances? For example, if there are a lot of tables or rows in a table? What is the breaking point ","(","e.g: 100mm",">"," records",")","? What can the user do to prevent this? ","(","e.g: use a read-only replica, or schedule frequent syncs, etc..",")"),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What versions of this connector does this implementation support? ","(","e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"postgres v3.14 and above"),")"," "),(0,i.kt)("li",{parentName:"ul"},"What configurations, if any, are required on the connector? ","(","e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"buffer_size > 1024"),")"),(0,i.kt)("li",{parentName:"ul"},"Network accessibility requirements"),(0,i.kt)("li",{parentName:"ul"},"Credentials/authentication requirements? ","(","e.g: A  DB user with read permissions on certain tables",")"," ")),(0,i.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,i.kt)("p",null,"For each of the above high-level requirements as appropriate, add or point to a follow-along guide. See existing source or destination guides for an example."),(0,i.kt)("p",null,"For each major cloud provider we support, also add a follow-along guide for setting up Airbyte to connect to that destination. See the Postgres destination guide for an example of what this should look like."))}m.isMDXComponent=!0}}]);