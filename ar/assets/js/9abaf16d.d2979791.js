"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a=r.p+"assets/images/dreamstudio-4ad52a45ebc0b4886aad7cbfe05d37cb.webp",i={sidebar_position:19},s="Dream Studio",l={unversionedId:"tooling/IDEs/dream_studio",id:"tooling/IDEs/dream_studio",title:"Dream Studio",description:"Dream Studio is a website for generating images with Stable Diffusion,",source:"@site/docs/tooling/IDEs/dream_studio.md",sourceDirName:"tooling/IDEs",slug:"/tooling/IDEs/dream_studio",permalink:"/ar/docs/tooling/IDEs/dream_studio",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/IDEs/dream_studio.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"OpenAI DALLE IDE",permalink:"/ar/docs/tooling/IDEs/DALLE"},next:{title:"Patience",permalink:"/ar/docs/tooling/IDEs/patience"}},p={},c=[{value:"Features",id:"features",level:2}],u=(d="LazyLoadImage",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var d;const m={toc:c},f="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dream-studio"},"Dream Studio"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://beta.dreamstudio.ai/dream"},"Dream Studio")," is a website for generating images with Stable Diffusion,\na text to image model."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(u,{src:a,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Dream studio's main feature is the ability to adjust various configuration parameters\nof the model, such as height/width of the generated image and steps/sampling algorithm. It allows for in/outpainting."),(0,o.kt)("p",null,"It currently has an underdeveloped history view (it appears to save pixelated versions of the images to a browser cache, but there is no way to view them)."))}g.isMDXComponent=!0}}]);