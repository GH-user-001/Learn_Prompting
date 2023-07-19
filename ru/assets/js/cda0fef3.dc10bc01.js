"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[5228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||f[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2e5},i="\ud83d\udd25 Hot Topics",s={unversionedId:"hot_topics",id:"hot_topics",title:"\ud83d\udd25 Hot Topics",description:"GPT-4",source:"@site/docs/hot_topics.md",sourceDirName:".",slug:"/hot_topics",permalink:"/ru/docs/hot_topics",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/hot_topics.md",tags:[],version:"current",sidebarPosition:2e5,frontMatter:{sidebar_position:2e5},sidebar:"tutorialSidebar",previous:{title:"\u2728 Credits",permalink:"/ru/docs/credits"}},p={},l=[{value:"GPT-4",id:"gpt-4",level:2},{value:"Agents",id:"agents",level:2},{value:"Auto-GPT",id:"auto-gpt",level:3},{value:"Baby AGI",id:"baby-agi",level:3},{value:"AgentGPT",id:"agentgpt",level:3}],c={toc:l},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-hot-topics"},"\ud83d\udd25 Hot Topics"),(0,r.kt)("h2",{id:"gpt-4"},"GPT-4"),(0,r.kt)("p",null,"GPT-4",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," is the next LLM in OpenAI's GPT series. It improves upon GPT-3 in a number of ways, including better reasoning and longer context length. Currently, we do not directly cover it in this course since 1) not everyone has access to it yet and 2) most of the prompting strategies we cover in this website work for GPT-4 as well. We encourage you to read the ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/research/gpt-4"},"OpenAI page")," on GPT-4 for more details."),(0,r.kt)("h2",{id:"agents"},"Agents"),(0,r.kt)("p",null,"Agents are AI systems that can take actions and perform tasks, which often include the use of tools."),(0,r.kt)("h3",{id:"auto-gpt"},"Auto-GPT"),(0,r.kt)("p",null,"Imagine having a personal assistant that can do anything you want with the power of AI. Auto-GPT is that, an open-source application that uses OpenAI\u2019s GPT-4 to perform autonomous tasks. Created by Toran Bruce Richards, it works by breaking down a given goal into sub-tasks and then using the internet and other tools to complete those sub-tasks",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". For example, if you ask Auto-GPT to ''write a blog post about the latest news in artificial intelligence,\u201d it will first find the latest news articles about artificial intelligence, read them, and then write a blog post about what it learned. To use Auto-GPT, you need to follow the setup instructions ",(0,r.kt)("a",{parentName:"p",href:"https://significant-gravitas.github.io/Auto-GPT/setup/"},"here"),". Once you have installed Auto-GPT, you can start using it by typing a goal into the prompt bar. Auto-GPT will then try to achieve that goal."),(0,r.kt)("h3",{id:"baby-agi"},"Baby AGI"),(0,r.kt)("p",null,"BabyAGI is an AI-powered task management system created by Yohei Nakajima",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". The system uses OpenAI and Pinecone APIs to create and execute tasks based on the priority and difficulty of previous tasks and a predefined objective. BabyAGI works by running a loop that does the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pulls the first task from the task list."),(0,r.kt)("li",{parentName:"ol"},"Sends the task to the execution agent, which uses OpenAI's API to complete the task based on the context."),(0,r.kt)("li",{parentName:"ol"},"Enriches the result and stores it in Chroma."),(0,r.kt)("li",{parentName:"ol"},"Creates new tasks and reprioritizes the task list based on the objective and the result of the previous task.")),(0,r.kt)("h3",{id:"agentgpt"},"AgentGPT"),(0,r.kt)("p",null,"Reworkd\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://agentgpt.reworkd.ai/"},"AgentGPT")," is a platform that unleashes users to craft and deploy self-reliant AI agents, ranging from customer service to data analysis",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),". It educates an AI agent on a distinct task and then endows it to accomplish a preordained goal. Agents can exploit diverse APIs to access and process real-world information, and they can also converse with humans and other agents. To use AgentGPT, users need to register and select a goal for their agent. Then, they can instruct their agent by supplying it data and instructions."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"OpenAI. (2023). GPT-4 Technical Report.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Significant-Gravitas. (2023). https://news.agpt.co/\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Nakajima, Y. (2023). https://github.com/yoheinakajima/babyagi\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Reworkd.ai. (2023). https://github.com/reworkd/AgentGPT\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);