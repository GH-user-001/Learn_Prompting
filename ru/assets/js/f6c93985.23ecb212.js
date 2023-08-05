"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(g,i(i({ref:t},h),{},{components:a})):n.createElement(g,i({ref:t},h))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:30},i="\ud83d\udfe2 Blogs",s={unversionedId:"basic_applications/blog_generation",id:"basic_applications/blog_generation",title:"\ud83d\udfe2 Blogs",description:"What if you could write a blog post in 5 seconds?",source:"@site/docs/basic_applications/blog_generation.md",sourceDirName:"basic_applications",slug:"/basic_applications/blog_generation",permalink:"/ru/docs/basic_applications/blog_generation",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/blog_generation.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Writing An Email",permalink:"/ru/docs/basic_applications/writing_emails"},next:{title:"\ud83d\udfe2 Study Buddy",permalink:"/ru/docs/basic_applications/study_tool"}},l={},p=[{value:"Takeaways",id:"takeaways",level:2}],h={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-blogs"},"\ud83d\udfe2 Blogs"),(0,r.kt)("p",null,"What if you could write a blog post in 5 seconds?"),(0,r.kt)("p",null,"Frankly, you can't. But AI can ",(0,r.kt)("strong",{parentName:"p"},"significantly")," reduce the time it takes to write a blog post."),(0,r.kt)("p",null,"This page covers the basics of using AI to help you write a blog. The process should be iterative: you should be writing prompts, seeing what the model outputs, taking pieces of the output, and repeating this."),(0,r.kt)("p",null,'As an example, pretend you work at a nursery and are drafting an article about "Why Christmas Cacti are a great buy". I always like to start with an outline, so let\'s begin with the following prompt:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Write an outline for a short blog post about why Christmas Cacti are a great buy.\n\nThere are many products which attempt to do this, but you can often get consistent results doing it yourself. \n\n// highlight-start\nI. Introduction\nA. Overview of Christmas Cacti\nB. Benefits of owning a Christmas Cacti\n\nII. Christmas Cacti Are Affordable\nA. Cost of Christmas Cacti\nB. Comparison to Other Houseplants\n\nIII. Christmas Cacti Have Long Lifespans\nA. Average Lifespan of Christmas Cacti\nB. Low Maintenance Requirements\n\nIV. Christmas Cacti Make Great Gifts\nA. Unique Color and Shape of Blooms\nB. Easy to Care for and Long Lasting\n\nV. Conclusion\nA. Summary of Benefits of Owning a Christmas Cacti \nB. Where to Find a Christmas Cacti \nC. Suggestions for Care and Maintenance\n\n//highlight-end\n")),(0,r.kt)("p",null,"Wow, that's quite comprehensive. Maybe we want a slightly shorter post, so let's ask the AI to write a shorter version using this prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"That's a great outline, but a bit long. Condense it to the main points:\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We are assuming that you are using ChatGPT (if not, just put the outline before this new prompt)")),(0,r.kt)("p",null,"Here is the model output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nI. Introduction \nA. Overview of Christmas Cacti \n\nII. Benefits \nA. Affordable \nB. Long Lifespan \nC. Great Gifts \n\nIII. Conclusion \nA. Summary of Benefits \nB. Where to Find \nC. Suggestions for Care and Maintenance\n//highlight-end\n")),(0,r.kt)("p",null,"Perfect! Now let's ask it to use this outline to write a full blog post:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Write a short blog post using this outline about why Christmas Cacti are a great buy.\n\n// highlight-start\nChristmas Cacti are a great buy for the holiday season! They are an affordable and long-lasting option that make great gifts. Christmas Cacti are easy to find in most garden and plant stores, and they range in price from a few dollars to more expensive, depending on the size and shape of the plant.\n\nThese plants are also known for their long lifespan. If cared for properly, they can last for many years, providing your friends and family with an evergreen reminder of the holiday spirit. Christmas Cacti are fairly low maintenance and require minimal care, making them a great option for someone who does not have a lot of experience with plants. They should be placed in a bright and sunny spot, watered regularly, and given plant food every month or so. \n\nOverall, Christmas Cacti are a great buy for the holidays. They are affordable, have a long lifespan, and make great gifts. With minimal care and attention, these plants can provide a beautiful reminder of the holiday season for years to come.\n//highlight-end\n")),(0,r.kt)("p",null,"Alright, that seems pretty good. We probably want to add some information about our company and our pricing on Christmas Cacti, so let's use the following prompt:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Perfect! Add a paragraph at the end about our company and pricing on Christmas Cacti.\nCompany: Prickly Point Nursery\nPrice for a Christmas Cacti: $10-$25\n")),(0,r.kt)("p",null,"Here is the model output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nChristmas Cacti are a great buy for the holiday season! They are an affordable and long-lasting option that make great gifts. Christmas Cacti are easy to find in most garden and plant stores, and they range in price from a few dollars to more expensive, depending on the size and shape of the plant.\n\nThese plants are also known for their long lifespan. If cared for properly, they can last for many years, providing your friends and family with an evergreen reminder of the holiday spirit. Christmas Cacti are fairly low maintenance and require minimal care, making them a great option for someone who does not have a lot of experience with plants. They should be placed in a bright and sunny spot, watered regularly, and given plant food every month or so. \n\nOverall, Christmas Cacti are a great buy for the holidays. They are affordable, have a long lifespan, and make great gifts. With minimal care and attention, these plants can provide a beautiful reminder of the holiday season for years to come.\n\nAt Prickly Point Nursery, we specialize in providing high quality plants and flowers for everyone's needs. We are proud to offer an extensive range of Christmas Cacti at great prices. Prices range from $10 for smaller plants to $25 for larger ones, so you're sure to find the perfect one for any budget. Our staff is always on hand to provide helpful advice and tips on how to care for your plants, so you can keep your Christmas Cacti looking fresh and beautiful for years to come. Thank you for considering Prickly Point Nursery for your holiday plant needs!\n//highlight-end\n")),(0,r.kt)("p",null,"This is a pretty good blog post!"),(0,r.kt)("p",null,"When I write content, I usually just use ChatGPT or GPT-3, but there are a number of other tools that can help you write blogs, like ",(0,r.kt)("a",{parentName:"p",href:"https://www.jasper.ai/"},"Jasper.ai")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.copy.ai/"},"Copy.ai"),". These usually rely on GPT-3 behind the scenes, but they have a number of other features that can help you write content."),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AI can help you write high quality blog posts in a fraction of the time it would take you to write them yourself. This process is not completely automated, so it requires you to be actively involved in the process.")))}c.isMDXComponent=!0}}]);