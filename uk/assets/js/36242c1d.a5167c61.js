"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5646],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return o?n.createElement(h,s(s({ref:t},d),{},{components:o})):n.createElement(h,s({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},88473:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r=o.p+"assets/images/openai_playground-80fcb2440e8e3cd8822b33ef1b68b29f.webp",s="data:image/webp;base64,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",i=o.p+"assets/images/openai_model-bff2f3f5a0310cd938be104280744b83.webp",l={sidebar_position:97},p="\ud83d\udfe2 OpenAI Playground",d={unversionedId:"basics/openai_playground",id:"basics/openai_playground",title:"\ud83d\udfe2 OpenAI Playground",description:"- Set up the OpenAI Playground",source:"@site/docs/basics/openai_playground.md",sourceDirName:"basics",slug:"/basics/openai_playground",permalink:"/uk/docs/basics/openai_playground",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/openai_playground.md",tags:[],version:"current",sidebarPosition:97,frontMatter:{sidebar_position:97},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Priming Chatbots",permalink:"/uk/docs/basics/priming_prompt"},next:{title:"\ud83d\udfe2 \u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0412\u041c\u041c",permalink:"/uk/docs/basics/configuration_hyperparameters"}},c={},u=[{value:"Get Set Up",id:"get-set-up",level:2},{value:"The Interface",id:"the-interface",level:2},{value:"System Prompts",id:"system-prompts",level:3},{value:"Mode",id:"mode",level:3},{value:"Model",id:"model",level:3},{value:"Conclusion",id:"conclusion",level:2}],m={toc:u},h="wrapper";function f(e){let{components:t,...o}=e;return(0,a.kt)(h,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-openai-playground"},"\ud83d\udfe2 OpenAI Playground"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:r,className:"img-docs",style:{width:"80%"}})),(0,a.kt)("admonition",{type:"takeaways"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Set up the OpenAI Playground"),(0,a.kt)("li",{parentName:"ul"},"Learn about basic Playground configuration"))),(0,a.kt)("p",null,"OpenAI provides another interface, besides the ChatGPT website, for prompting. It is called OpenAI Playground, and gives you even more control over ChatGPT. It also allows you to access other AIs, including different versions of ChatGPT, GPT-4, and older models like GPT-3."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"OpenAI Playground is the tool that the maintainer of this course uses most frequently.")),(0,a.kt)("h2",{id:"get-set-up"},"Get Set Up"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"http://platform.openai.com"},"http://platform.openai.com")),(0,a.kt)("li",{parentName:"ul"},"Sign in, and start testing prompts!")),(0,a.kt)("p",null,"Or watch this video:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/6OD14rpokRw",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,a.kt)("h2",{id:"the-interface"},"The Interface"),(0,a.kt)("p",null,"At first, this interface seems very complex. There are many drop downs and sliders that allow you to configure models. We will cover System Prompts, Mode, and Model selection in this video. We will cover the rest in the next lesson."),(0,a.kt)("h3",{id:"system-prompts"},"System Prompts"),(0,a.kt)("p",null,"The first thing that you may notice is the SYSTEM area on the left side of the page. So far, we have seen two types of messages, USER messages, which are just the messages you send to the chatbot, and ASSISTANT messages, which are the chatbot's replies. There is a third type of message, the system prompt, that can be used to configure how the AI responds. This is the best place to put a priming prompt."),(0,a.kt)("h3",{id:"mode"},"Mode"),(0,a.kt)("div",{className:"flex flex-col sm:flex-row justify-between"},(0,a.kt)("div",null,"Click the Mode dropdown on the top right of the page. This dropdown allows you to change the type of model that you are using. OpenAI has three different Modes: ",(0,a.kt)("code",null,"Chat"),", ",(0,a.kt)("code",null,"Complete"),", and ",(0,a.kt)("code",null,"Edit"),". We have already learned about the first two; ",(0,a.kt)("code",null,"Edit")," models modify the prompt you give them to, for example, fix typos. We will only use ",(0,a.kt)("code",null,"Chat")," and occasionally ",(0,a.kt)("code",null,"Complete")," models in this course."),(0,a.kt)("div",{className:"mt-4 sm:mt-0 sm:ml-auto"},(0,a.kt)("img",{src:s,className:"img-docs w-20 sm:w-auto"}))),(0,a.kt)("h3",{id:"model"},"Model"),(0,a.kt)("div",{className:"flex flex-col sm:flex-row justify-between"},(0,a.kt)("div",null,"Click the Model dropdown on the right of the page. This dropdown allows you to change the model that you are using. Each mode has multiple models, but we will focus on the chat ones. This list appears to be very complicated (*what does gpt-3.5-turbo mean?*), but these are just technical names for different models. Anything that starts with gpt-3.5-turbo is a version of ChatGPT, while anything that starts with gpt-4 is a version of GPT-4."),(0,a.kt)("div",{className:"mt-4 sm:mt-0 sm:ml-auto"},(0,a.kt)("img",{src:i,className:"img-docs w-20 sm:w-auto"}))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may not see GPT-4 versions in your interface.")),(0,a.kt)("p",null,'The numbers like 16K or 32K in the model names represent the context length. If it\'s not specified, the default context length is 4K. OpenAI regularly updates both ChatGPT (gpt-3.5-turbo) and GPT-4, and older versions are kept available on the platform for a limited period. These older models have additional numbers at the end of their name, such as "0613". For instance, the model "gpt-3.5-turbo-16k-0613" is a ChatGPT model with a 16K context length, released on June 13th, 2023. However, it\'s recommended to use the most recent versions of models, which don\'t contain any date information. A comprehensive list of model versions can be found ',(0,a.kt)("a",{parentName:"p",href:"https://platform.openai.com/docs/models/gpt-4"},"here"),"."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The OpenAI Playground is a powerful tool that provides a more advanced interface for interacting with ChatGPT and other AI models. It offers a range of configuration options, including the ability to select different models and modes. We will learn about the rest of the settings in the next lesson. The Playground also supports system prompts, which can be used to guide the AI's responses. While the interface may seem complex at first, with practice, it becomes a valuable resource for exploring the capabilities of OpenAI's models. Whether you're using the latest versions of ChatGPT or GPT-4, or exploring older models, the Playground offers a flexible and robust platform for AI interaction and experimentation."))}f.isMDXComponent=!0}}]);