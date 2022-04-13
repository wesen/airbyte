"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[3585],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||l;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17512:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={},p="Recharge",s={unversionedId:"integrations/sources/recharge",id:"integrations/sources/recharge",title:"Recharge",description:"Overview",source:"@site/../docs/integrations/sources/recharge.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/recharge",permalink:"/integrations/sources/recharge",editUrl:"https://github.com/airbytehq/airbyte/docs/../docs/integrations/sources/recharge.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"QuickBooks",permalink:"/integrations/sources/quickbooks"},next:{title:"Recurly",permalink:"/integrations/sources/recurly"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:u};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"recharge"},"Recharge"),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Recharge supports full refresh and incremental sync."),(0,l.kt)("p",null,"This source can sync data for the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.rechargepayments.com/"},"Recharge API"),"."),(0,l.kt)("h3",{id:"output-schema"},"Output schema"),(0,l.kt)("p",null,"Several output streams are available from this source:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-addresses"},"Addresses")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-charges"},"Charges")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify"},"Collections")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-customers"},"Customers")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-discounts"},"Discounts")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-metafields"},"Metafields")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-onetimes"},"Onetimes")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-orders"},"Orders")," ","(","Incremental sync",")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-products"},"Products")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#shop"},"Shop")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://developer.rechargepayments.com/v1-shopify?python#list-subscriptions"},"Subscriptions")," ","(","Incremental sync",")")),(0,l.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,l.kt)("h3",{id:"features"},"Features"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes")))),(0,l.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,l.kt)("p",null,"The Recharge connector should gracefully handle Recharge API limitations under normal usage. Please ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,l.kt)("h2",{id:"getting-started"},"Getting started"),(0,l.kt)("h3",{id:"requirements"},"Requirements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Recharge API Token")),(0,l.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,l.kt)("p",null,"Please read ",(0,l.kt)("a",{parentName:"p",href:"https://support.rechargepayments.com/hc/en-us/articles/360008829993-ReCharge-API"},"How to generate your API token"),"."),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2022-01-26"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9808"},"9808")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-11-05"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7626"},"7626")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Improve 'backoff' for HTTP requests")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6149"},"6149")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Update ",(0,l.kt)("inlineCode",{parentName:"td"},"discount")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"order")," schema")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,l.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6149"},"6149")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Change ",(0,l.kt)("inlineCode",{parentName:"td"},"cursor_field")," for Incremental streams")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}h.isMDXComponent=!0}}]);