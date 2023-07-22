"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(y,i(i({ref:t},l),{},{components:r})):n.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8477:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a=r.p+"assets/images/dyno-8cdf99c23d45048dca6b9906d2d2f2c2.webp",i={sidebar_position:4},s="Dyno",c={unversionedId:"tooling/IDEs/dyno",id:"tooling/IDEs/dyno",title:"Dyno",description:"Dyno es un entorno de desarrollo integrado para la creaci\xf3n de prompts que se centra en iterar sobre un solo prompt. Proporcionan una interfaz web profesional con la capacidad de dividir un prompt en varias vistas para una iteraci\xf3n adicional.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/tooling/IDEs/dyno.md",sourceDirName:"tooling/IDEs",slug:"/tooling/IDEs/dyno",permalink:"/es/docs/tooling/IDEs/dyno",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/tooling/IDEs/dyno.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Soaked",permalink:"/es/docs/tooling/IDEs/soaked"},next:{title:"Everyprompt",permalink:"/es/docs/tooling/IDEs/everyprompt"}},p={},l=[{value:"Caracter\xedsticas",id:"caracter\xedsticas",level:2}],d={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dyno"},"Dyno"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://trydyno.com/login"},"Dyno")," es un entorno de desarrollo integrado para la creaci\xf3n de prompts que se centra en iterar sobre un solo prompt. Proporcionan una interfaz web profesional con la capacidad de dividir un prompt en varias vistas para una iteraci\xf3n adicional."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:a,style:{width:"750px"}})),(0,o.kt)("h2",{id:"caracter\xedsticas"},"Caracter\xedsticas"),(0,o.kt)("p",null,"Dyno permite la creaci\xf3n de varios proyectos. La edici\xf3n de m\xfaltiples vistas es la caracter\xedstica m\xe1s destacada de Dyno. Actualmente admiten GPT-3 y requieren una clave de OpenAI para su uso."),(0,o.kt)("p",null,"Dyno tambi\xe9n proporciona una fant\xe1stica funci\xf3n de incrustaci\xf3n:"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Si John tiene 5 peras, luego se come 2, y compra 5 m\xe1s, luego regala 3 a su amigo, \xbfcu\xe1ntas peras tiene?\\n\\nPensemos paso a paso.","initial-response":"John empieza con 5 peras. Se come 2 peras, lo que le deja con 3 peras. Compra 5 peras m\xe1s, lo que le da un total de 8 peras. Regala 3 peras a su amigo, lo que le deja solo con 5 peras.","max-tokens":"256","box-rows":"5","model-temp":"0.7","top-p":"1"}))}m.isMDXComponent=!0}}]);