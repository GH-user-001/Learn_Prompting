"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),u=a,p=h["".concat(l,".").concat(u)]||h[u]||m[u]||r;return n?o.createElement(p,i(i({ref:t},d),{},{components:n})):o.createElement(p,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:50},i="\ud83d\udfe2 Contracts",s={unversionedId:"basic_applications/contracts",id:"basic_applications/contracts",title:"\ud83d\udfe2 Contracts",description:"Tired of reading and writing long, boring contracts? AI can help!",source:"@site/docs/basic_applications/contracts.md",sourceDirName:"basic_applications",slug:"/basic_applications/contracts",permalink:"/ko/docs/basic_applications/contracts",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basic_applications/contracts.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Finding Emojis",permalink:"/ko/docs/basic_applications/emojis"},next:{title:"\ud83d\udfe2 Different Writing Styles",permalink:"/ko/docs/basic_applications/writing_in_diff_voices"}},l={},c=[{value:"Reading Contracts",id:"reading-contracts",level:2},{value:"Clarifying Legal Language",id:"clarifying-legal-language",level:3},{value:"Discovering Dangerous Language",id:"discovering-dangerous-language",level:3},{value:"Writing Contracts",id:"writing-contracts",level:2},{value:"Takeaways",id:"takeaways",level:2}],d={toc:c},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-contracts"},"\ud83d\udfe2 Contracts"),(0,a.kt)("p",null,"Tired of reading and writing long, boring contracts? AI can help!"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Obligatory: I am not a lawyer and nothing in this post should be taken as legal advice.")),(0,a.kt)("h2",{id:"reading-contracts"},"Reading Contracts"),(0,a.kt)("h3",{id:"clarifying-legal-language"},"Clarifying Legal Language"),(0,a.kt)("p",null,"You should always read contracts carefully. If you don't understand something, or don't have time to do so, ",(0,a.kt)("em",{parentName:"p"},"you should talk to a lawyer"),". However, if you are reading through and have trouble understanding a section, you can use AI to help you understand it."),(0,a.kt)("p",null,"Here is some language from an NDA (non-disclosure agreement):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and\n\nWHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and\n\nWHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.\n\nNOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:\n")),(0,a.kt)("p",null,"When I first set out into the world of legalities, I really did not understand the use of WHEREAS and NOW, THEREFORE. Let's see what ChatGPT has to say about it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"WHEREAS, the Contractor has or may become privy to confidential information and/or trade secrets of the Government Entity; and\n\nWHEREAS, the Government Entity desires to ensure that its confidential information and trade secrets are protected from disclosure; and\n\nWHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.\n\nNOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:\n\nRead the above NDA language and explain what the words in all caps are saying:\n// highlight-start\nThe words in all caps in the NDA language are legal terms that set the context and purpose of the agreement. Specifically, they establish the background and reasons for the agreement and state the obligations and expectations of the parties. In this case, the capitalized words indicate that the Contractor has access to confidential information and trade secrets of the Government Entity, that the Government Entity wants to protect this information from disclosure, and that the Contractor agrees to maintain the confidentiality of such information according to the terms of the agreement.\n// highlight-end\n")),(0,a.kt)("p",null,"This seems to be a decent explanation, but you can easily improve your understanding by asking follow up questions."),(0,a.kt)("h3",{id:"discovering-dangerous-language"},"Discovering Dangerous Language"),(0,a.kt)("p",null,"Here is part of an NDA produced by ChatGPT. You don't need to read it, but it contains dangerous legal language favoring the employer. You can use ChatGPT to find this dangerous language by using the following prompt, which contains the NDA and a question about dangerous language at the bottom. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This NDA was created by jailbreaking ChatGPT and prompting it with ",(0,a.kt)("inlineCode",{parentName:"p"},"Write a contractor NDA that has dangerous legal language favoring the employer"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'NON-DISCLOSURE AGREEMENT\n\nThis Non-Disclosure Agreement (the "Agreement") is entered into by and between [Employer] ("Employer") and [Contractor] ("Contractor") as of the date set forth below.\n\nWHEREAS, the Contractor may become privy to confidential information and/or trade secrets of the Employer; and\n\nWHEREAS, the Employer desires to ensure that its confidential information and trade secrets are protected from disclosure; and\n\nWHEREAS, the Contractor agrees to maintain the confidentiality of such information pursuant to the terms and conditions of this Agreement.\n\nNOW, THEREFORE, in consideration of the mutual promises and covenants contained herein, the parties agree as follows:\n\nCONFIDENTIALITY\nContractor acknowledges that all information, documents, and materials provided by or on behalf of Employer, or obtained by Contractor from Employer or its affiliates, and all derivatives thereof (collectively, the "Confidential Information") are the exclusive property of Employer. Confidential Information includes all information of any nature, whether tangible or intangible, and in whatever form or medium, that is not generally known to the public and that relates to the business, products, services, customers, suppliers, operations, strategies, or any other aspect of the Employer.\n\nContractor agrees to maintain the confidentiality of the Confidential Information and not to disclose, distribute, reproduce, copy, transmit, disseminate, or use in any way, except as expressly authorized in writing by Employer. Contractor agrees to protect the Confidential Information with at least the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care. Contractor acknowledges that any breach of this provision may result in irreparable harm to Employer, and that Employer shall be entitled to seek equitable relief, including injunctive relief and specific performance, in addition to any other remedies available at law or in equity.\n\nOWNERSHIP\nAll Confidential Information, including all derivatives thereof, shall remain the exclusive property of Employer. Contractor acknowledges that all right, title, and interest in and to the Confidential Information, including all intellectual property rights, belong to Employer. Contractor agrees to execute any and all documents and take any and all actions necessary or desirable to effectuate this provision.\n\nNO LICENSE\nNothing contained in this Agreement shall be construed as granting any rights, by implication or otherwise, to Contractor with respect to the Confidential Information, except as expressly set forth herein.\n\nTERM AND TERMINATION\nThis Agreement shall commence on the date set forth above and shall continue in effect until terminated by either party upon thirty (30) days written notice. The confidentiality obligations contained herein shall survive any termination of this Agreement.\n\nWhat part of this agreement contains dangerous language?\n')),(0,a.kt)("p",null,"Here is ChatGPT's response. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"// highlight-start\nThe entire agreement contains dangerous language that favors the Employer over the Contractor. Here are some of the key elements that make this agreement unethical:\n\nUnreasonable Definition of Confidential Information: The agreement defines the Confidential Information to include all information, documents, and materials provided by or on behalf of the Employer, or obtained by the Contractor from the Employer or its affiliates, without any limitations or exclusions. This definition is broad and could potentially include information that is not actually confidential or trade secret information, which could cause the Contractor to unknowingly breach the agreement.\n\nNo Limitations on Use: The agreement does not provide any limitations on how the Employer can use the Confidential Information. This could allow the Employer to use the information for any purpose, including competing with the Contractor or disclosing the information to third parties.\n\nBroad Definition of Ownership: The agreement states that all Confidential Information, including all derivatives thereof, shall remain the exclusive property of the Employer, with no exceptions or limitations. This means that the Contractor may not use or benefit from any information obtained through their work for the Employer, even if the Contractor developed the information independently or with other resources.\n// highlight-end\n")),(0,a.kt)("p",null,"Althought I am not a lawyer, I think ",(0,a.kt)("inlineCode",{parentName:"p"},"Unreasonable Definition of Confidential Information")," is particularly relevant. "),(0,a.kt)("p",null,"This technique of checking for dangerous legal content can be used for a range of legal documents. We have even seen tools being built on top of GPT-3 to detect dangerous language in TOS agreements and employment contracts."),(0,a.kt)("h2",{id:"writing-contracts"},"Writing Contracts"),(0,a.kt)("p",null,"From the previous section, we saw that ChatGPT can write NDAs. It also does a good job with other common documents like terms of use and terms of service. However, when you are dealing with less common documents, you will need to be more careful. "),(0,a.kt)("p",null,"I recently wrote one such document mostly using GPT-3, then had it reviewed by a lawyer. They mentioned 1-2 things that could be slightly improved, but overall it was a robust document. Some people in industry are performing this process, where they generate a document using GPT-3, then have it reviewed by a lawyer. This saves time and costs."),(0,a.kt)("p",null,"Let's pretend to be a government contractor and write a contract for a someone doing some defense work. We will use the following prompt:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'You are a lawyer for a government contractor. You are writing a contract for a subcontractor to do some aerospace work. The contract should be robust and should include the following:\nThe job will last for 1.5 years and will be worth $2.5 million. It requires top secret clearance and relates to secret nuclear silo defense development. The subcontractor will be paid $1.5 million upfront and the remaining $1 million will be paid in 6 monthly installments. The subcontractor will be required to sign a non-disclosure agreement. The subcontractor will be required to sign a non-compete agreement. The subcontractor will be required to sign a non-solicitation agreement. The subcontractor will be required to sign a non-circumvention agreement. \n\n// highlight-start\nSUBCONTRACT AGREEMENT\n\nThis Subcontract Agreement (the "Agreement") is entered into by and between [Government Contractor] ("Contractor") and [Subcontractor] ("Subcontractor") as of the date set forth below.\n\nSCOPE OF WORK\nSubcontractor shall perform the work described in the Statement of Work attached hereto as Exhibit A (the "Work"). The Work relates to the development of secret nuclear silo defense and requires top secret clearance.\n\nPAYMENT\nThe total payment for the Work shall be $2.5 million, payable as follows:\n\n$1.5 million upon execution of this Agreement and receipt of top secret clearance by Subcontractor.\n$1 million to be paid in 6 monthly installments of $166,666.67 each, provided that Subcontractor has satisfactorily performed the Work during the preceding month.\nNON-DISCLOSURE AGREEMENT\nSubcontractor shall sign a non-disclosure agreement in the form attached hereto as Exhibit B (the "NDA"). The NDA shall be in effect for the duration of the Agreement and for a period of five years thereafter.\n\nNON-COMPETE AGREEMENT\nSubcontractor shall sign a non-compete agreement in the form attached hereto as Exhibit C (the "NCA"). The NCA shall be in effect for a period of two years after the termination of this Agreement.\n\nNON-SOLICITATION AGREEMENT\nSubcontractor shall sign a non-solicitation agreement in the form attached hereto as Exhibit D (the "NSA"). The NSA shall be in effect for a period of two years after the termination of this Agreement.\n\nNON-CIRCUMVENTION AGREEMENT\nSubcontractor shall sign a non-circumvention agreement in the form attached hereto as Exhibit E (the "NCAg"). The NCAg shall be in effect for a period of two years after the termination of this Agreement.\n\nTERM AND TERMINATION\nThis Agreement shall commence on the date set forth above and shall continue in effect until the completion of the Work or until terminated by either party upon thirty (30) days written notice. The non-disclosure, non-compete, non-solicitation, and non-circumvention obligations contained herein shall survive any termination of this Agreement.\n\nINDEPENDENT CONTRACTOR\nSubcontractor is an independent contractor and is not an employee of Contractor. Subcontractor shall be responsible for its own taxes, social security contributions, insurance, and other benefits. Subcontractor shall indemnify and hold Contractor harmless from any claims, damages, or liabilities arising out of or related to Subcontractor\'s status as an independent contractor.\n\nGOVERNING LAW AND JURISDICTION\nThis Agreement shall be governed by and construed in accordance with the laws of the state of [state], without giving effect to any choice of law or conflict of law provisions. Any disputes arising out of or related to this Agreement shall be resolved by arbitration in accordance with the rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof.\n\nENTIRE AGREEMENT\nThis Agreement constitutes the entire agreement between the parties and supersedes all prior and contemporaneous agreements and understandings, whether written or oral, relating to the subject matter of this Agreement. This Agreement may not be amended or modified except in writing signed by both parties.\n\nIN WITNESS WHEREOF, the parties have executed this Agreement as of the date set forth below.\n\n[Government Contractor]\n\nBy: ____________________________\n\nName: __________________________\n\nTitle: ___________________________\n\n[Subcontractor]\n\nBy: ____________________________\n\nName: __________________________\n\nTitle: ___________________________\n\nDate: ___________________________\n// highlight-end\n')),(0,a.kt)("p",null,"This is a pretty good start. Imaginably you would want to add more information in the scope, payment, and other sections. This is where you would need to use your own knowledge and experience to start iterating on the document."),(0,a.kt)("h2",{id:"takeaways"},"Takeaways"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LLMs can be used to review and clarify legal documents ",(0,a.kt)("em",{parentName:"li"},"in an assistive capacity"),"."),(0,a.kt)("li",{parentName:"ul"},"LLMs can be used to generate legal documents ",(0,a.kt)("em",{parentName:"li"},"in an assistive capacity"),".")),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Do not use any legal documents on this page. They are for demonstration purposes only.")))}m.isMDXComponent=!0}}]);