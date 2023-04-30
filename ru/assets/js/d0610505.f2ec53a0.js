"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),g=o,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86046:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="Contribute",s={type:"mdx",permalink:"/ru/contribute",source:"@site/src/pages/contribute.md",title:"Contribute",description:"This site is open source and contributions are extremely welcome.",frontMatter:{}},p=[{value:"1. Site design and layout",id:"1-site-design-and-layout",level:2},{value:"2. Content",id:"2-content",level:2},{value:"Prompt Engineering Techniques",id:"prompt-engineering-techniques",level:3},{value:"Adding Papers",id:"adding-papers",level:4},{value:"Anecdotal and Other Content (e.g. Applied, Products, More)",id:"anecdotal-and-other-content-eg-applied-products-more",level:3},{value:"3. Translation",id:"3-translation",level:2},{value:"4. Miscl.",id:"4-miscl",level:2}],l={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute"},"Contribute"),(0,o.kt)("p",null,"This site is ",(0,o.kt)("strong",{parentName:"p"},"open source")," and contributions are extremely welcome.\nYou can find the source code on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting"},"GitHub"),",\nalong with many ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues"},"open issues"),".\nIf you want to get involved, but don't know how, reach out to ",(0,o.kt)("a",{parentName:"p",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")," and I will help you get started."),(0,o.kt)("p",null,"In particular, we are looking for help with:"),(0,o.kt)("h2",{id:"1-site-design-and-layout"},"1. Site design and layout"),(0,o.kt)("p",null,"We have a number of open issues on ease of use feature for the site, tagged with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues?q=is%3Aissue+is%3Aopen+label%3Aweb-dev+"},"web-dev"),"."),(0,o.kt)("h2",{id:"2-content"},"2. Content"),(0,o.kt)("p",null,"This could be reading new prompt engineering papers and writing pages about them,\nor writing articles on more anecdotal topics. Most all content is welcome. See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/issues"},"open\nissues")," for content we have yet to add."),(0,o.kt)("h3",{id:"prompt-engineering-techniques"},"Prompt Engineering Techniques"),(0,o.kt)("p",null,"We write articles on PE techniques, not entire papers. This means that multiple techniques used in a paper could be spread across multiple articles. The reasoning for this is, in part, that papers often reuse techniques, and we want to avoid repeating ourselves. Additionally, articles on bite sized, single techniques are easier to read and understand. ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/instructions"},"Here")," is a good example this."),(0,o.kt)("p",null,"When taking content from a paper, article, or even tweet, make sure to update the bibliography files ",(0,o.kt)("inlineCode",{parentName:"p"},"bibliography.bib")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/bibliography.md"),". Most papers have autogenerated BibTex citations that you can find online (e.g. on arxiv). You can then use the citation in a md files by typing ",(0,o.kt)("inlineCode",{parentName:"p"},"(@citation_name)"),". See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/blob/main/docs/intermediate/chain_of_thought.md"},"CoT")," page for a good example of this. Citation lists will then autogenerate at the bottom of pages. Also see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/pull/283"},"this PR")," about how to add vocabulary tooltips."),(0,o.kt)("h4",{id:"adding-papers"},"Adding Papers"),(0,o.kt)("p",null,"When considering a paper, make sure it uses PE. Some papers in open issues would not\nmake for good articles, but are good to link to as additional resources. If you have\nfound a good paper, synthesize it's different techniques into short articles, and put them in the appropriate sections. The ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/advanced_applications/pal"},"PAL article")," is a good example of this. "),(0,o.kt)("h3",{id:"anecdotal-and-other-content-eg-applied-products-more"},"Anecdotal and Other Content (e.g. Applied, Products, More)"),(0,o.kt)("p",null,"We are always looking for more content. If you have a story to tell, or a product to recommend, please make a PR! We are also looking for more content on the applied side of prompt engineering, such as how to use prompts in your own research. ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/applied_prompting/build_chatgpt"},"Here"),"."),(0,o.kt)("h2",{id:"3-translation"},"3. Translation"),(0,o.kt)("p",null,"We are looking for help translating the site into other languages. If you are interested, please join the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/discord"},"Discord")," and mention you are interested in the respective language channel. If the channel does not exist, please message @Trigaten. You don't need to ask us to start translating files! Just make a PR with translated files whenever you would like. If you don't know how to use Github, please message @Trigaten in the Discord."),(0,o.kt)("p",null,"Make sure to read the Docusaurus ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/introduction"},"translation guide"),". Translations will go ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/trigaten/Learn_Prompting/tree/main/i18n"},"here"),". Around 7 languages are currently being translated, so you will likely find people to work with! "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"When you run the website locally, make sure to follow ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/i18n/tutorial#start-your-site"},"Docusaurus instructions")," on running it in your language (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start -- --locale fr"),").")),(0,o.kt)("h2",{id:"4-miscl"},"4. Miscl."),(0,o.kt)("p",null,"Everything from fixing typos to recommendations for the site (suggest papers,\nlayout changes, tell us what you want to learn about, etc.)"),(0,o.kt)("p",null,"We need help maintaining the list of prompt engineering tools and products that use prompting."),(0,o.kt)("p",null,"Email ",(0,o.kt)("a",{parentName:"p",href:"mailto:learnprompting@gmail.com"},"learnprompting@gmail.com")," with any questions."))}c.isMDXComponent=!0}}]);