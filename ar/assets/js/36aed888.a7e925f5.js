"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[3108],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4588:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>T,frontMatter:()=>w,metadata:()=>b,toc:()=>x});var n=a(7462),o=(a(7294),a(3905));const i=a.p+"assets/images/rockets_dalle_1-6656520679a8fd8bd582962d583c5d98.webp",r=a.p+"assets/images/rockets_dalle_2-0c37c6ca98f43ebe236c06bc433cc1ef.webp",s=a.p+"assets/images/computer_dalle_1-e50bfbe642519e140a597572c8b7886d.webp",l=a.p+"assets/images/astronaut_dalle_1-409d20cf242af6292d56b35345d0d68a.webp",p=a.p+"assets/images/astronaut_sd_1-0c10b896c8f0e81d47eb1f3e49ec8c47.webp",d=a.p+"assets/images/rocket_sd_1-4abeb5a0ae6d9240bce119c7fbab3e3e.webp",m=a.p+"assets/images/rocket-82a7808bafd33692f107b00364498a6d.webp",c=a.p+"assets/images/laptop_sd_1-c84b4f0ae5041d54d1d773863b237d5f.webp",u=a.p+"assets/images/gemstone_sd_1-793a929dc29f0c6d4cf21a7c3a6e8bc0.webp",h=a.p+"assets/images/gemstone_sd_2-3791af0dc9268a2c8b6fdd9706c690c4.webp",g=a.p+"assets/images/gemstone_sd_3-c02d44793eb309956fc827702e9e1a64.webp",f=a.p+"assets/images/computer-a7650711abd417cd70885fd9ea55e816.webp",y=a.p+"assets/images/astronaut-0a68ed878831172c3b548a982f1e601f.webp",w={sidebar_position:1},k="\ud83d\udfe2 Introduction",b={unversionedId:"image_prompting/intro",id:"image_prompting/intro",title:"\ud83d\udfe2 Introduction",description:"Figuring out the best prompt to create a perfect image is a particular challenge.",source:"@site/docs/image_prompting/intro.md",sourceDirName:"image_prompting",slug:"/image_prompting/intro",permalink:"/ar/docs/image_prompting/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/image_prompting/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddbc\ufe0f Image Prompting",permalink:"/ar/docs/category/\ufe0f-image-prompting"},next:{title:"\ud83d\udfe2 Style Modifiers",permalink:"/ar/docs/image_prompting/style_modifiers"}},v={},x=[{value:"Example",id:"example",level:2}],I=(L="LazyLoadImage",function(e){return console.warn("Component "+L+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var L;const N={toc:x},A="wrapper";function T(e){let{components:t,...a}=e;return(0,o.kt)(A,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83d\udfe2 Introduction"),(0,o.kt)("p",null,"Figuring out the best prompt to create a perfect image is a particular challenge.\nResearch into methods to do so is not quite as developed as text prompting. This\nmay be due to inherent challenges in creating objects which are fundamentally subjective\nand often lack good accuracy metrics. However, fear not, as the image prompting\ncommunity",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," has made great discoveries about how to prompt various image models",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),"."),(0,o.kt)("p",null,"This guide covers basic image prompting techniques, and we highly encourage\nthat you look at the great resources at the end of the chapter.\nAdditionally, we provide an example of the end-to-end image prompting process below."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here I will go through an example of how I created the images for the front page of this course.\nI had been experimenting with low poly style for a deep reinforcement learning\nneural radiance field project. I liked the low poly style, and wanted to use it\nfor this course's images. "),(0,o.kt)("p",null,"I wanted an astronaut, a rocket, and a computer for the images on the front page."),(0,o.kt)("p",null,"I did a bunch of research into how to create low poly images, on ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/"},"r/StableDiffusion"),"\nand other sites, but couldn't find anything super helpful."),(0,o.kt)("p",null,"I decided to just start with DALLE and the prompt ",(0,o.kt)("inlineCode",{parentName:"p"},"Low poly white and blue rocket shooting to the moon in front of a sparse green meadow")," and see what happened."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:i,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:r,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"I thought these results were pretty decent for a first try; I particularly liked\nthe bottom left rocket."),(0,o.kt)("p",null,"Next, I wanted a computer in the same style: ",(0,o.kt)("inlineCode",{parentName:"p"},"Low poly white and blue computer sitting in a sparse green meadow")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:s,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"Finally, I needed an astronaut! ",(0,o.kt)("inlineCode",{parentName:"p"},"Low poly white and blue astronaut sitting in a sparse green meadow with low poly mountains in the background")," seemed to do the trick."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:l,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"I thought the second one was decent."),(0,o.kt)("p",null,"Now I had an astronaut, a rocket, and a computer. I was happy with them,\nso I put them on the front page. After a few days and input from my friends I\nrealized the style just wasn't consistent \ud83d\ude14."),(0,o.kt)("p",null,"I did some more research on ",(0,o.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/StableDiffusion/"},"r/StableDiffusion")," and found people using the word isometric. I decided to try that out, using Stable Diffusion instead of DALLE.\nI also realized that I needed to add more modifiers to my prompt\nto constrain the style. I tried this prompt:\n",(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with an astronaut in white suit and blue visor sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:p,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"These weren't great, so I decided to start on the rocket instead"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with a white and blue rocket blasting off from a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:d,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"These are not particularly good, but after a bit of iterating around here, I ended up with "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:m,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"Now I needed a better laptop"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with a white and blue laptop sitting in sparse green meadow with low poly mountains in the background. The screen is completely blue. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:c,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"I got some inconsistent results; I like the bottom right one, but I decided to go in a different direction."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing white and blue gemstone sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:u,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"This wasn't quite right. Let's try something magical and glowing."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing white and blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:h,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"I liked these, but wanted the stone in the middle of the screen."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with a glowing blue gemstone magically floating in the middle of the screen above a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:g,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"Somewhere around here, I used SD's ability to have a previous image provide some influence for future images.\nAnd thus I arrived at:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:f,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"Finally, I was on to the astronaut."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A low poly world, with an astronaut in white suite and blue visor is sitting in a sparse green meadow with low poly mountains in the background. Highly detailed, isometric, 4K")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)(I,{src:y,style:{width:"250px"},mdxType:"LazyLoadImage"})),(0,o.kt)("p",null,"At this point, I was sufficiently happy with the style consistency between my three images to use them\non the website. The main takeaways for me were that this was a very iterative, research heavy process,\nand I had to modify my expectations and ideas as I experimented with different prompts and models."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Parsons, G. (2022). The DALLE 2 Prompt Book. https://dallery.gallery/the-dalle-2-prompt-book/\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2021). High-Resolution Image Synthesis with Latent Diffusion Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Ramesh, A., Dhariwal, P., Nichol, A., Chu, C., & Chen, M. (2022). Hierarchical Text-Conditional Image Generation with CLIP Latents.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}T.isMDXComponent=!0}}]);