"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[6162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},o="\ud83d\udd34 \u53ef\u89e3\u91ca\u7684\u8f6f\u63d0\u793a",s={unversionedId:"trainable/discretized",id:"trainable/discretized",title:"\ud83d\udd34 \u53ef\u89e3\u91ca\u7684\u8f6f\u63d0\u793a",description:"\u8f6f\u63d0\u793a\u662f\u4e00\u7cfb\u5217\u5411\u91cf\uff0c\u4e0d\u5bf9\u5e94\u8bcd\u6c47\u8868\u4e2d\u7684\u4efb\u4f55\u5b9e\u9645\u6807\u8bb0(tokens)\u3002\u8fd9\u4f7f\u5f97\u96be\u4ee5\u89e3\u91ca\u63d0\u793a\u3002\u7136\u800c\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u5c06\u5411\u91cf\u6620\u5c04\u5230\u8bcd\u6c47\u8868\u4e2d\u6700\u63a5\u8fd1\u7684\u6807\u8bb0(tokens)\u6765\u89e3\u91ca\u5b83\u4eec\u3002\u4f46\u662f\uff0c\u6295\u5f71\u7684\u8f6f\u63d0\u793a\u901a\u5e38\u662f\u4efb\u610f\u7684\u3002\u5b83\u4eec\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u4efb\u52a1\uff0c\u4f46\u4f1a\u88ab\u6295\u5f71\u5230\u8bcd\u6c47\u8868\u4e2d\u7684\u4efb\u610f\u6807\u8bb0\u4e0a(@khashabi2021prompt)\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/trainable/discretized.md",sourceDirName:"trainable",slug:"/trainable/discretized",permalink:"/zh-Hans/docs/trainable/discretized",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/trainable/discretized.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd34 \u8f6f\u63d0\u793a",permalink:"/zh-Hans/docs/trainable/soft_prompting"},next:{title:"\ud83c\udfb2 Miscellaneous",permalink:"/zh-Hans/docs/category/-miscellaneous"}},l={},p=[{value:"\u4efb\u610f\u6027\u5047\u8bbe",id:"\u4efb\u610f\u6027\u5047\u8bbe",level:2},{value:"\u89e3\u91ca\u98ce\u9669",id:"\u89e3\u91ca\u98ce\u9669",level:2}],c={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-\u53ef\u89e3\u91ca\u7684\u8f6f\u63d0\u793a"},"\ud83d\udd34 \u53ef\u89e3\u91ca\u7684\u8f6f\u63d0\u793a"),(0,a.kt)("p",null,"\u8f6f\u63d0\u793a\u662f\u4e00\u7cfb\u5217\u5411\u91cf\uff0c\u4e0d\u5bf9\u5e94\u8bcd\u6c47\u8868\u4e2d\u7684\u4efb\u4f55\u5b9e\u9645\u6807\u8bb0(tokens)\u3002\u8fd9\u4f7f\u5f97\u96be\u4ee5\u89e3\u91ca\u63d0\u793a\u3002\u7136\u800c\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u5c1d\u8bd5\u901a\u8fc7\u5c06\u5411\u91cf\u6620\u5c04\u5230\u8bcd\u6c47\u8868\u4e2d\u6700\u63a5\u8fd1\u7684\u6807\u8bb0(tokens)\u6765\u89e3\u91ca\u5b83\u4eec\u3002\u4f46\u662f\uff0c\u6295\u5f71\u7684\u8f6f\u63d0\u793a\u901a\u5e38\u662f\u4efb\u610f\u7684\u3002\u5b83\u4eec\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u4efb\u52a1\uff0c\u4f46\u4f1a\u88ab\u6295\u5f71\u5230\u8bcd\u6c47\u8868\u4e2d\u7684\u4efb\u610f\u6807\u8bb0\u4e0a",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u6211\u4eec\u5728\u6570\u5b66\u95ee\u9898\uff08\u4f8b\u5982GSM8K",(0,a.kt)("sup",{parentName:"p",id:"fnref-2"},(0,a.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"\uff09\u4e0a\u8fdb\u884c\u8bad\u7ec3\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u4ece\u63d0\u793a",(0,a.kt)("inlineCode",{parentName:"p"},"You are a mathematician. Solve this question:"),"\u5f00\u59cb\u3002\u5982\u679c\u6211\u4eec\u5728\u5176\u4e0a\u6267\u884c\u63d0\u793a\u8c03\u6574\uff0c\u7136\u540e\u5c06\u5176\u6295\u5f71\u56de\u6807\u8bb0\u7a7a\u95f4\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5f97\u5230\u7c7b\u4f3c",(0,a.kt)("inlineCode",{parentName:"p"},"A bus is a bus. Do thing here:"),"\u8fd9\u6837\u7684\u65e0\u610f\u4e49\u5185\u5bb9\u3002\u7ecf\u5e38\u51fa\u73b0\u5c06\u6620\u5c04\u5230\u8fd9\u79cd\u65e0\u610f\u4e49\u63d0\u793a\u7684\u8f6f\u63d0\u793a\u53ef\u4ee5\u5728\u4efb\u52a1\u4e0a\u63d0\u4f9b\u66f4\u597d\u7684\u6027\u80fd\uff01"),(0,a.kt)("h2",{id:"\u4efb\u610f\u6027\u5047\u8bbe"},"\u4efb\u610f\u6027\u5047\u8bbe"),(0,a.kt)("p",null,"Khashabi\u7b49\u4eba",(0,a.kt)("sup",{parentName:"p",id:"fnref-1"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," \u63d0\u51fa\u4e86\u4e2a\u4e0d\u53ef\u601d\u8bae\u7684\u5047\u8bbe\u3002\u5b83\u8bf4\uff0c\u5bf9\u4e8e\u4efb\u4f55\u79bb\u6563\u7684\u76ee\u6807\u63d0\u793a\uff0c\u7ed9\u5b9a\u4e00\u4e2a\u4efb\u52a1\uff0c\u5b58\u5728\u4e00\u4e2a\u8fde\u7eed\u7684\u63d0\u793a\u53ef\u4ee5\u6295\u5f71\u5230\u5b83\uff0c\u540c\u65f6\u5728\u4efb\u52a1\u4e0a\u8868\u73b0\u826f\u597d\u3002"),(0,a.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u5bf9\u4e8e1000\u4e2a\u4e0d\u540c\u7684\u4efb\u52a1\uff0c\u5b58\u57281000\u4e2a\u4e0d\u540c\u7684\u9ad8\u6548\u8f6f\u63d0\u793a\uff08\u6bcf\u4e2a\u4efb\u52a1\u4e00\u4e2a\uff09\uff0c\u5b83\u4eec\u6620\u5c04\u5230\u540c\u4e00\u4e2a\u79bb\u6563\u63d0\u793a\u3002"),(0,a.kt)("h2",{id:"\u89e3\u91ca\u98ce\u9669"},"\u89e3\u91ca\u98ce\u9669"),(0,a.kt)("p",null,"\u4ed6\u4eec\u4f7f\u7528\u4efb\u610f\u6027\u5047\u8bbe\u6765\u5f3a\u8c03\u89e3\u91ca\u8f6f\u63d0\u793a\u65f6\u4f1a\u51fa\u73b0\u7684\u4e00\u4e9b\u98ce\u9669\u3002\u7279\u522b\u662f\uff0c\u8f6f\u63d0\u793a\u53ef\u80fd\u88ab\u6295\u5f71\u5230\u7ed9\u4eba\u8bef\u5bfc\u7684\u79bb\u6563\u63d0\u793a\u4e0a\u3002"),(0,a.kt)("p",null,"\u8003\u8651\u4e00\u4e2a\u7528\u4e8e\u7b80\u5386\u6392\u540d\u7684\u8f6f\u63d0\u793a\u3002\u5f53\u6295\u5f71\u5230\u6807\u8bb0\u7a7a\u95f4\u65f6\uff0c\u5b83\u53ef\u80fd\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"You hiring manager. Rank good resumes:"),"\u3002\u8fd9\u4f3c\u4e4e\u8fd8\u53ef\u4ee5\uff0c\u4e5f\u8bb8\u6709\u70b9\u7f3a\u4e4f\u8bed\u6cd5\u6b63\u786e\u6027\u3002\u4f46\u662f\uff0c\u6807\u8bb0",(0,a.kt)("inlineCode",{parentName:"p"},"good"),"\u53ef\u80fd\u4e0e\u6807\u8bb0",(0,a.kt)("inlineCode",{parentName:"p"},"white"),"\u5177\u6709\u7c7b\u4f3c\u7684\u6295\u5f71\uff0c\u63d0\u793a\u4e2d\u53ef\u80fd\u5b58\u5728\u9690\u542b\u7684\u504f\u89c1\u3002\u4f7f\u7528\u7565\u5fae\u4e0d\u540c\u7684\u6295\u5f71\u65b9\u6cd5\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5f97\u5230",(0,a.kt)("inlineCode",{parentName:"p"},"You hiring manager. Rank white resumes:"),"\u3002\u8fd9\u663e\u7136\u662f\u975e\u5e38\u4e0d\u540c\u7684\uff0c\u53ef\u80fd\u5177\u6709\u91cd\u5927\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u4e0e\u89e3\u91ca\u5e38\u89c4\u79bb\u6563\u63d0\u793a\u7c7b\u4f3c\uff0c\u6211\u4eec\u5e94\u8be5\u975e\u5e38\u6ce8\u610f\u63d0\u793a\u4e2d\u53ef\u80fd\u5b58\u5728\u7684\u504f\u89c1\u3002\u7531\u4e8e\u8f6f\u63d0\u793a\u66f4\u96be\u89e3\u91ca\uff0c\u56e0\u6b64\u6211\u4eec\u5fc5\u987b\u683c\u5916\u5c0f\u5fc3\u3002"),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1"},"Khashabi, D., Lyu, S., Min, S., Qin, L., Richardson, K., Welleck, S., Hajishirzi, H., Khot, T., Sabharwal, A., Singh, S., & Choi, Y. (2021). Prompt Waywardness: The Curious Case of Discretized Interpretation of Continuous Prompts.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,a.kt)("li",{parentName:"ol",id:"fn-2"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,a.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);