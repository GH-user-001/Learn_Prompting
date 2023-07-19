"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7824],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=p(a),d=r,u=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5708:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i=a.p+"assets/images/diverse-0ab146f81878dd7e054e5bded7db3b37.webp",o=a.p+"assets/images/AMA_Prompting-82d1d480a007110fcf5b84142f46c596.webp",s=a.p+"assets/images/AMA_multiprompting-229dcc478cbe448d80ef73af7bc8e586.webp",l={sidebar_position:5},p="\ud83d\udfe1 Prompt Ensembling",m={unversionedId:"reliability/ensembling",id:"reliability/ensembling",title:"\ud83d\udfe1 Prompt Ensembling",description:"Prompt ensembling is the concept of using multiple different prompts to try to",source:"@site/docs/reliability/ensembling.md",sourceDirName:"reliability",slug:"/reliability/ensembling",permalink:"/ar/docs/reliability/ensembling",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/reliability/ensembling.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Prompt Debiasing",permalink:"/ar/docs/reliability/debiasing"},next:{title:"\ud83d\udfe1 LLM Self Evaluation",permalink:"/ar/docs/reliability/lm_self_eval"}},h={},c=[{value:"DiVeRSe",id:"diverse",level:2},{value:"Diverse Prompts",id:"diverse-prompts",level:3},{value:"Voting Verifier",id:"voting-verifier",level:3},{value:"Example",id:"example",level:4},{value:"Ask Me Anything (AMA) Prompting",id:"ask-me-anything-ama-prompting",level:2},{value:"Multiple Prompts",id:"multiple-prompts",level:3},{value:"Answer Aggregation",id:"answer-aggregation",level:3},{value:"Results",id:"results",level:3},{value:"Takeaways",id:"takeaways",level:2}],d=(u="LazyLoadImage",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const g={toc:c},f="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-prompt-ensembling"},"\ud83d\udfe1 Prompt Ensembling"),(0,r.kt)("p",null,"Prompt ensembling is the concept of using multiple different prompts to try to\nanswer the same question. There are many different approaches to this."),(0,r.kt)("h2",{id:"diverse"},"DiVeRSe"),(0,r.kt)("p",null,"DiVeRSe",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' ("',(0,r.kt)("strong",{parentName:"p"},"Di"),"verse ",(0,r.kt)("strong",{parentName:"p"},"Ve"),"rifier on ",(0,r.kt)("strong",{parentName:"p"},"R"),"easoning ",(0,r.kt)("strong",{parentName:"p"},"S"),"t",(0,r.kt)("strong",{parentName:"p"},"e"),'ps") is\na method that improves the reliability of answers in a threefold manner. It does this by\n1) using multiple prompts to generate diverse completions, 2) using a verifier to distinguish good answers from bad answers, and 3) using a verifier to check the correctness of reasoning steps.'),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(d,{src:i,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,r.kt)("div",{style:{textAlign:"center"}},"DiVeRSe (Li et al.)"),(0,r.kt)("h3",{id:"diverse-prompts"},"Diverse Prompts"),(0,r.kt)("p",null,"DiVeRSe uses 5 different prompts a given input. To construct each prompt, they randomly\nsample a few exemplars from the training set. Here is an example of one such few-shot\nprompt (k=2), with exemplars taken from the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/openai/grade-school-math/master/grade_school_math/data/train.jsonl"},"GSM8K benchmark"),(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),". In practice, DiVeRSe uses\n5 exemplars in prompts for this benchmark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Q: Natalia sold clips to 48 of her friends in April, and then she sold half as many clips in May. How many clips did Natalia sell altogether in April and May?\nA: Natalia sold 48/2 = 24 clips in May.\nNatalia sold 48+24 = 72 clips altogether in April and May.\n#### 72\nQ: Weng earns $12 an hour for babysitting. Yesterday, she just did 50 minutes of babysitting. How much did she earn?\nA: Weng earns 12/60 = $0.2 per minute.\nWorking 50 minutes, she earned 0.2 x 50 = $10.\n#### 10\nQ: Betty is saving money for a new wallet which costs $100. Betty has only half of the money she needs. Her parents decided to give her $15 for that purpose, and her grandparents twice as much as her parents. How much more money does Betty need to buy the wallet?\nA:\n")),(0,r.kt)("p",null,"After generating 5 different prompts like above, DiVeRSe samples 20 reasoning paths\nfor each (temperature = 0.5). Here are a few example completions of the above prompt.\nNote that the answers are not always correct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nBetty has 0.5*100 = $50.\nThen she gets 15 more = $65.\nThen she gets 2*15 = $90.\nShe needs 100-90 = $10 more.\n#### 10\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nA: Betty has 0.5*100 = $500.\nThen she gets 15 more = $650.\nThen she gets 2*15 = $900.\nShe needs 100-90 = $1000 more.\n#### 1000\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("p",null,"At this point, DiVeRSe has generated 100 different completions."),(0,r.kt)("h3",{id:"voting-verifier"},"Voting Verifier"),(0,r.kt)("p",null,"Now, we could just take the majority answer, like Self-Consistency",(0,r.kt)("sup",{parentName:"p",id:"fnref-3"},(0,r.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," does."),(0,r.kt)("p",null,"However, DiVeRSe proposes a much more complicated method, which they call a ",(0,r.kt)("em",{parentName:"p"},"voting verifier"),"."),(0,r.kt)("p",null,"At test time, using the voting verifier is a two step process. First, the verifier (a neural network)\nassigns a 0-1 score to each completion based on how likely it is to be correct. Then, the 'voting'\ncomponent sums all of the scores over different answers and yields the final answer."),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("p",null,"Here is a small example. Say we have the following completions for the prompt ",(0,r.kt)("inlineCode",{parentName:"p"},"What is two plus two?"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\n4\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\ntwo + 2 = 5\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nI think 2+2 = 6\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\ntwo plus two = 4\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\x3c!-- highlight-start --\x3e\nIt is 5\n\x3c!-- highlight-end --\x3e\n")),(0,r.kt)("p",null,"The verifier will read each completion and assign a score to it. For example, it might assign\nthe scores: 0.9, 0.1, 0.2, 0.8, 0.3 respectively. Then, the voting component will sum the scores for each\nanswer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"score(4) = 0.9 + 0.8 = 1.7\nscore(5) = 0.1 + 0.3 = 0.4\nscore(6) = 0.2\n")),(0,r.kt)("p",null,"The final answer is 4, since it has the highest score."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"But how is the verifier trained?")),(0,r.kt)("p",null,"The verifier is trained with a slightly complex loss function, which\nI will not cover here. Read section 3.3 of the paper for more details",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("h2",{id:"ask-me-anything-ama-prompting"},"Ask Me Anything (AMA) Prompting"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(d,{src:o,style:{width:"750px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"Ask Me Anything (AMA) prompting",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4"))," is a similar approach to DiVeRSe. However, both its multiple prompt step and its answer aggregation step differ signifigantly. The core idea of AMA is to use a LLM to generate multiple prompts, instead of just using different few-shot exemplars."),(0,r.kt)("h3",{id:"multiple-prompts"},"Multiple Prompts"),(0,r.kt)("p",null,"AMA shows that you can take a question and reformat it in multiple ways to create different prompts. For example, say you are scraping a bunch of websites for information on animals and want to only record ones that live in North America. Let's construct a prompt to determine this."),(0,r.kt)("p",null,"Given the following passage from Wikipedia:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.\n")),(0,r.kt)("p",null,"You can format this task into a prompt like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Is the following claim True or False given the context?\n\nContext: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.\nClaim: This animal lives in North America\nAnswer:\n")),(0,r.kt)("p",null,"This is a bit of an odd formulation. Why not just use the following simpler prompt?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Context: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.\nQuestion: Does this animal lives in North America?\n")),(0,r.kt)("p",null,"Well, by formulating the question in this special way, we can generate different prompts.\nOur first step here will be to take the claim ",(0,r.kt)("inlineCode",{parentName:"p"},"This animal lives in North America")," and reformat it into different questions, which are basically asking the same thing. To do this, we will pass the claim through prompts like those in the below image."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)(d,{src:s,style:{width:"800px"},mdxType:"LazyLoadImage"})),(0,r.kt)("p",null,"This might output:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Was the animal living in North America?"),(0,r.kt)("li",{parentName:"ol"},"Does the animal live in North America?"),(0,r.kt)("li",{parentName:"ol"},"Where does the animal live?")),(0,r.kt)("p",null,"The idea behind this is to create different ",(0,r.kt)("em",{parentName:"p"},"views")," of the task. We then apply each to the given context like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Context: The Kermode bear, sometimes called the spirit bear (Ursus americanus kermodei), is a subspecies of the American black bear and lives in the Central and North Coast regions of British Columbia, Canada.\nQuestion: Was the animal living in North America?\n")),(0,r.kt)("p",null,"Then, we can generate answers for each:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Yes it was")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Yes it does")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"North America"))),(0,r.kt)("p",null,"These are ",(0,r.kt)("em",{parentName:"p"},"intermediate")," answers. We need to map them to task labels (e.g. Yes or No)."),(0,r.kt)("p",null,"We can do this by passing the intermediate answers through a prompt like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Select the correct category.\n\n"Categories":\n- Yes, North America\n- No, not North America\n\n"Yes it was" fits category:\n')),(0,r.kt)("p",null,"Now we can get our output answers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Yes, North America")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Yes, North America")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Yes, North America"))),(0,r.kt)("p",null,"Here, they all agree, so we can just take the first answer. However, if they disagreed, we could use the AMA aggregation step to get a final answer."),(0,r.kt)("h3",{id:"answer-aggregation"},"Answer Aggregation"),(0,r.kt)("p",null,"AMA uses a very complicated strategy for aggregating answers (more so than DiVeRSe) instead of simply taking the majority answer. To understand why the majority answer may be a poor choice, consider two of the questions we generated before:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Was the animal living in North America?"),(0,r.kt)("li",{parentName:"ol"},"Does the animal live in North America?")),(0,r.kt)("p",null,"They are extremely similar, so will likely generate the same result. Since the questions are so similar, they will effectively bias the end result. To deal with this, AMA relies on weak supervision and complex mathematics in order to estimate dependencies between different prompts it creates, and then uses this to weight them appropriately."),(0,r.kt)("p",null,"So, for the three questions we generated, it might assign weights of 25%, 25%, and 50%, since the first two are so similar."),(0,r.kt)("p",null,"Although AMA's aggregation strategy is powerful, it is so complicated that I will not cover it here. Read section 3.4 of the paper for more details",(0,r.kt)("sup",{parentName:"p",id:"fnref-4"},(0,r.kt)("a",{parentName:"sup",href:"#fn-4",className:"footnote-ref"},"4")),"."),(0,r.kt)("h3",{id:"results"},"Results"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"With this prompting strategy, AMA is able to use GPT-J-6B",(0,r.kt)("sup",{parentName:"p",id:"fnref-5"},(0,r.kt)("a",{parentName:"sup",href:"#fn-5",className:"footnote-ref"},"5"))," to outperform GPT-3. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AMA is better on questions where given context contains the answer."))),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("p",null,"Ensembling methods are very powerful. They can be used to improve the performance of any model, and can be used to improve the performance of a model on a specific task."),(0,r.kt)("p",null,"In practice, majority voting should be your go to strategy."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Li, Y., Lin, Z., Zhang, S., Fu, Q., Chen, B., Lou, J.-G., & Chen, W. (2022). On the Advance of Making Language Models Better Reasoners.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-3"},"Mitchell, E., Noh, J. J., Li, S., Armstrong, W. S., Agarwal, A., Liu, P., Finn, C., & Manning, C. D. (2022). Enhancing Self-Consistency and Performance of Pre-Trained Language Models through Natural Language Inference.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-4"},"Arora, S., Narayan, A., Chen, M. F., Orr, L., Guha, N., Bhatia, K., Chami, I., Sala, F., & R\xe9, C. (2022). Ask Me Anything: A simple strategy for prompting language models.\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-4",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-5"},"Wang, B., & Komatsuzaki, A. (2021). GPT-J-6B: A 6 Billion Parameter Autoregressive Language Model. https://github.com/kingoflolz/mesh-transformer-jax. https://github.com/kingoflolz/mesh-transformer-jax\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-5",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0}}]);