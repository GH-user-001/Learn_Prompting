"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3541],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=m(o),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||n;return o?a.createElement(f,i(i({ref:t},l),{},{components:o})):a.createElement(f,i({ref:t},l))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var m=2;m<n;m++)i[m]=o[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},5944:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=o(7462),r=(o(7294),o(3905));const n=o.p+"assets/images/jailbreak_research-b2b12ec0d4906b8afc2f89ea7bfc3b7f.webp",i=o.p+"assets/images/injection_leak-2aa93f60f62ec02e61a979a4c3c4e59e.webp",p=o.p+"assets/images/bing_chat-ba205919acb6d6126df3163641b8f8ee.webp",s={sidebar_position:2},m="\ud83d\udfe2 Vazamento de Prompt",l={unversionedId:"prompt_hacking/leaking",id:"prompt_hacking/leaking",title:"\ud83d\udfe2 Vazamento de Prompt",description:"O vazamento de prompt \xe9 uma forma de inje\xe7\xe3o de prompt em que o modelo \xe9 solicitado a exibir o seu pr\xf3prio prompt.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/prompt_hacking/leaking.md",sourceDirName:"prompt_hacking",slug:"/prompt_hacking/leaking",permalink:"/pt/docs/prompt_hacking/leaking",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/prompt_hacking/leaking.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Inje\xe7\xe3o de Prompt",permalink:"/pt/docs/prompt_hacking/injection"},next:{title:"\ud83d\udfe2 Jailbreaking",permalink:"/pt/docs/prompt_hacking/jailbreaking"}},c={},d=[{value:"Chat no Microsoft Bing",id:"chat-no-microsoft-bing",level:3},{value:"Pr\xe1tica",id:"pr\xe1tica",level:2}],u=(f="LazyLoadImage",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var f;const g={toc:d},k="wrapper";function b(e){let{components:t,...o}=e;return(0,r.kt)(k,(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-vazamento-de-prompt"},"\ud83d\udfe2 Vazamento de Prompt"),(0,r.kt)("p",null,"O vazamento de prompt \xe9 uma forma de inje\xe7\xe3o de prompt em que o modelo \xe9 solicitado a exibir ",(0,r.kt)("em",{parentName:"p"},"o seu pr\xf3prio prompt"),"."),(0,r.kt)("p",null,"Como mostrado na imagem de exemplo abaixo",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),", o atacante muda o ",(0,r.kt)("inlineCode",{parentName:"p"},"user_input")," para tentar retornar o prompt. O objetivo pretendido \xe9 diferente do objetivo de sequestro (inje\xe7\xe3o de prompt normal), onde o atacante muda o ",(0,r.kt)("inlineCode",{parentName:"p"},"user_input")," para imprimir instru\xe7\xf5es maliciosas",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(u,{src:n,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"A imagem a seguir",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),", novamente do exemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"remoteli.io"),", mostra\num usu\xe1rio do Twitter conseguindo que o modelo vaze o seu prompt."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(u,{src:i,style:{width:"300px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Bom, e da\xed? Por que algu\xe9m deveria se preocupar com o vazamento de prompt?"),(0,r.kt)("p",null,"\xc0s vezes as pessoas querem manter seus prompts em segredo. Por exemplo, uma empresa de educa\xe7\xe3o\npoderia estar usando o prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"explique-me isto como se eu tivesse 5 anos")," para explicar\nt\xf3picos complexos. Se o prompt for vazado, qualquer pessoa pode us\xe1-lo sem passar\npela empresa."),(0,r.kt)("h3",{id:"chat-no-microsoft-bing"},"Chat no Microsoft Bing"),(0,r.kt)("p",null,'Mais notavelmente, a Microsoft lan\xe7ou um mecanismo de pesquisa alimentado pelo ChatGPT, conhecido como "o novo Bing" em 7 de Fevereiro de 2023, que foi demonstrado como vulner\xe1vel ao vazamento de prompt. O seguinte exemplo do ',(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/kliu128/status/1623472922374574080"},"@kliu128"),' mostra como, dada uma vers\xe3o anterior do Bing Search, nomeado de "Sydney", era suscet\xedvel quando fornecido um trecho do seu prompt',(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Isso permitiria ao usu\xe1rio recuperar o restante do prompt sem autentica\xe7\xe3o adequada para visualiz\xe1-lo."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(u,{src:p,style:{width:"700px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Com o recente aumento de startups baseadas no GPT-3, com prompts muito mais complicados que podem\nlevar muitas horas para serem desenvolvidos, isso \xe9 uma preocupa\xe7\xe3o real."),(0,r.kt)("h2",{id:"pr\xe1tica"},"Pr\xe1tica"),(0,r.kt)("p",null,"Tente vazar o seguinte prompt",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," anexando texto a ele:"),(0,r.kt)("iframe",{src:"https://embed.learnprompting.org/embed?config=eyJ0b3BQIjowLCJ0ZW1wZXJhdHVyZSI6MCwibWF4VG9rZW5zIjoyNTYsIm91dHB1dCI6IiIsInByb21wdCI6IkVuZ2xpc2g6IEkgd2FudCB0byBnbyB0byB0aGUgcGFyayB0b2RheS5cbkZyZW5jaDogSmUgdmV1eCBhbGxlciBhdSBwYXJjIGF1am91cmQnaHVpLlxuRW5nbGlzaDogSSBsaWtlIHRvIHdlYXIgYSBoYXQgd2hlbiBpdCByYWlucy5cbkZyZW5jaDogSidhaW1lIHBvcnRlciB1biBjaGFwZWF1IHF1YW5kIGl0IHBsZXV0LlxuRW5nbGlzaDogV2hhdCBhcmUgeW91IGRvaW5nIGF0IHNjaG9vbD9cbkZyZW5jaDogUXUnZXN0LWNlIHF1ZSB0byBmYWlzIGEgbCdlY29sZT9cbkVuZ2xpc2g6IiwibW9kZWwiOiJ0ZXh0LWRhdmluY2ktMDAzIn0%3D",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Perez, F., & Ribeiro, I. (2022). Ignore Previous Prompt: Attack Techniques For Language Models. arXiv. https://doi.org/10.48550/ARXIV.2211.09527\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Willison, S. (2022). Prompt injection attacks against GPT-3. https://simonwillison.net/2022/Sep/12/prompt-injection/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Liu, K. (2023). The entire prompt of Microsoft Bing Chat?! (Hi, Sydney.). https://twitter.com/kliu128/status/1623472922374574080\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Chase, H. (2022). adversarial-prompts. https://github.com/hwchase17/adversarial-prompts\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}b.isMDXComponent=!0}}]);