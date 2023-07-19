"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=o,g=c["".concat(p,".").concat(f)]||c[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},u),{},{components:r})):n.createElement(g,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7404:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i=r.p+"assets/images/dust-2d613495f6ed482e50d5f6a3e0589477.webp",a={sidebar_position:3},s="Dust",p={unversionedId:"tooling/IDEs/dust",id:"tooling/IDEs/dust",title:"Dust",description:"Dust is a prompt engineering tool built for chaining prompts together. They provide",source:"@site/docs/tooling/IDEs/dust.md",sourceDirName:"tooling/IDEs",slug:"/tooling/IDEs/dust",permalink:"/fr/docs/tooling/IDEs/dust",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/IDEs/dust.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GPT-3 Playground",permalink:"/fr/docs/tooling/IDEs/playground"},next:{title:"Soaked",permalink:"/fr/docs/tooling/IDEs/soaked"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Notes",id:"notes",level:2}],c=(d="LazyLoadImage",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const f={toc:u},g="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dust"},"Dust"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dust.tt/"},"Dust")," is a prompt engineering tool built for chaining prompts together. They provide\na web interface for writing prompts and chaining them together. "),(0,o.kt)("p",null,"At the moment, it has a steep learning curve compared to other prompt engineering\nIDEs."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(c,{src:i,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,'Dust provides robust tooling in the form of a number of composable "blocks", for\nfunctions like LLM querying, code snippets, and internet searches. Dust also supports\nthe use of datasets and automatically testing prompts against datasets. '),(0,o.kt)("p",null,"Current Dust functionality focuses on chaining prompts rather than iterating on a single prompt."),(0,o.kt)("p",null,"Dust supports multiple model providers: (OpenAI, Cohere), and has planned support for HuggingFace and Replicate. API keys are required for all providers."),(0,o.kt)("p",null,"You can deploy LLM apps built in Dust."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Dust has recently reached 1,000 active users."))}m.isMDXComponent=!0}}]);