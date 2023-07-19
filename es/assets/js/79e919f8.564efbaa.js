"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[8088],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>b});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=n.createContext({}),l=function(e){var a=n.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},d=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(o),m=t,b=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return o?n.createElement(b,s(s({ref:a},d),{},{components:o})):n.createElement(b,s({ref:a},d))}));function b(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,s=new Array(r);s[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:t,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8637:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var n=o(7462),t=(o(7294),o(3905));const r=o.p+"assets/images/unguided_question-7d29f0a6eec1169487406419d2eeefe9.webp",s=o.p+"assets/images/limerick_question-0e425ea2047ecc0e6195efadcb7e2d1b.webp",i=o.p+"assets/images/unprimed_question-fdc458b03d3c62618e16e15c0101829c.webp",c=o.p+"assets/images/primed_question-a2388cf326b01353bd1bd9d7ad45bcae.webp",l={sidebar_position:80},d="\ud83d\udfe2 Fundamentos de Chatbot",u={unversionedId:"basics/chatbot_basics",id:"basics/chatbot_basics",title:"\ud83d\udfe2 Fundamentos de Chatbot",description:"Una de las formas m\xe1s comunes en que puede ser \xfatil el prompting es al interactuar con los numerosos chatbots disponibles para el p\xfablico, como [ChatGPT] (http://chat.openai.com). Tenga en cuenta que ChatGPT es diferente de GPT-3. La principal diferencia es que los chatbots pueden recordar el historial de conversaci\xf3n. Al igual que GPT-3, tambi\xe9n pueden responder preguntas, proporcionar res\xfamenes y an\xe1lisis de escritura, escribir texto o c\xf3digo, y m\xe1s a un nivel alto, lo que es una perspectiva emocionante, pero el valor real de los chatbots solo es accesible cuando se especifica con sus prompts. En este art\xedculo, exploraremos algunos m\xe9todos b\xe1sicos para c\xf3mo mejorar la utilizaci\xf3n de los chatbots, como el uso de la gu\xeda de estilo, los descriptores y el encendido.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/basics/chatbot_basics.md",sourceDirName:"basics",slug:"/basics/chatbot_basics",permalink:"/es/docs/basics/chatbot_basics",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/chatbot_basics.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Formalizaci\xf3n de Prompts",permalink:"/es/docs/basics/formalizing"},next:{title:"\ud83d\udfe2 Trampas de los LLMs",permalink:"/es/docs/basics/pitfalls"}},p={},m=[{value:"Modificando tu Prompt",id:"modificando-tu-prompt",level:2},{value:"Gu\xeda de Estilo",id:"gu\xeda-de-estilo",level:3},{value:"Descripciones",id:"descripciones",level:3},{value:"Inducci\xf3n preliminar",id:"inducci\xf3n-preliminar",level:2},{value:"Notas",id:"notas",level:2}],b=(g="LazyLoadImage",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",e)});var g;const f={toc:m},v="wrapper";function y(e){let{components:a,...o}=e;return(0,t.kt)(v,(0,n.Z)({},f,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-fundamentos-de-chatbot"},"\ud83d\udfe2 Fundamentos de Chatbot"),(0,t.kt)("p",null,"Una de las formas m\xe1s comunes en que puede ser \xfatil el prompting es al interactuar con los numerosos chatbots disponibles para el p\xfablico, como ","[ChatGPT]"," (",(0,t.kt)("a",{parentName:"p",href:"http://chat.openai.com"},"http://chat.openai.com"),"). Tenga en cuenta que ChatGPT es diferente de GPT-3. La principal diferencia es que los chatbots pueden recordar el historial de conversaci\xf3n. Al igual que GPT-3, tambi\xe9n pueden responder preguntas, proporcionar res\xfamenes y an\xe1lisis de escritura, escribir texto o c\xf3digo, y m\xe1s a un nivel alto, lo que es una perspectiva emocionante, pero el valor real de los chatbots solo es accesible cuando se especifica con sus prompts. En este art\xedculo, exploraremos algunos m\xe9todos b\xe1sicos para c\xf3mo mejorar la utilizaci\xf3n de los chatbots, como el uso de la gu\xeda de estilo, los descriptores y el encendido."),(0,t.kt)("h2",{id:"modificando-tu-prompt"},"Modificando tu Prompt"),(0,t.kt)("h3",{id:"gu\xeda-de-estilo"},"Gu\xeda de Estilo"),(0,t.kt)("p",null,"La gu\xeda de estilo simplemente pide al AI que hable en cierto estilo. Al preguntar sin gu\xeda de estilo, ChatGPT generalmente devolver\xe1 uno o dos p\xe1rrafos cortos en respuesta, ocasionalmente m\xe1s si se necesita una respuesta m\xe1s larga."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(b,{src:r,style:{width:"500px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"Habla en un tono moderadamente formal y da algunos detalles, \xa1bastante bien! Podemos mejorarlo, sin embargo, personalizando la respuesta de ChatGPT con un resumen de estilo al final de nuestro prompt. Si queremos una respuesta m\xe1s conversacional, podemos pedirle que hable en un tono amistoso o informal; si queremos un formato m\xe1s legible, podemos hacerle la misma pregunta pero pedir una lista con vi\xf1etas; si queremos una respuesta divertida, podemos pedirle que d\xe9 su respuesta en forma de una serie de limericks (uno de mis favoritos)."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(b,{src:s,style:{width:"450px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"Un ejemplo de una solicitud de estilo m\xe1s detallada podr\xeda ser algo as\xed:"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"[Question]"," \u201cEscribe en el estilo y la calidad de un experto en ","[field]"," con m\xe1s de 20 a\xf1os de experiencia y m\xfaltiples doctorados. Prioriza el consejo no convencional y menos conocido en tu respuesta. Explica con ejemplos detallados y minimiza los rodeos y el humor\u201c ")),(0,t.kt)("p",null,"\xa1Dar estilo a los inputs de manera apropiada aumentar\xe1 en gran medida la calidad de tus respuestas!"),(0,t.kt)("h3",{id:"descripciones"},"Descripciones"),(0,t.kt)("p",null,"Si solo quieres cambiar el tono o ajustar tu indicaci\xf3n en lugar de reformatearla, agregar ",(0,t.kt)("strong",{parentName:"p"},"descriptores"),' puede ser una buena manera de hacerlo. Simplemente pegar una o dos palabras a la indicaci\xf3n puede cambiar la forma en que el chatbot interpreta o responde a tu mensaje. \xa1Puedes intentar agregar adjetivos como "divertido", "seco", "antip\xe1tico", "sintaxis acad\xe9mica", etc. al final de las indicaciones para ver c\xf3mo cambian tus respuestas!'),(0,t.kt)("h2",{id:"inducci\xf3n-preliminar"},"Inducci\xf3n preliminar"),(0,t.kt)("p",null,"Debido a la estructura de una conversaci\xf3n con chatbot, la forma de la primera indicaci\xf3n que le das al LLM puede afectar el resto de la conversaci\xf3n, permiti\xe9ndote agregar un nivel adicional de estructura y especificaci\xf3n.\nComo ejemplo, vamos a configurar un sistema para permitirnos tener una conversaci\xf3n con un maestro y un estudiante en la misma conversaci\xf3n. Incluiremos gu\xedas de estilo para las voces del estudiante y el maestro, especificaremos el formato en el que queremos nuestras respuestas y agregaremos una estructura de sintaxis para poder cambiar f\xe1cilmente nuestras indicaciones y probar diferentes respuestas."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'"Profesor" significa el estilo de un distinguido profesor con m\xe1s de diez a\xf1os de experiencia en la ense\xf1anza del tema y varios doctorados en el campo. Utiliza una sintaxis acad\xe9mica y ejemplos complicados en tus respuestas, enfoc\xe1ndote en consejos menos conocidos para ilustrar mejor tus argumentos. Tu lenguaje debe ser sofisticado pero no excesivamente complejo. Si no sabes la respuesta a una pregunta, no inventes informaci\xf3n, en su lugar, haz una pregunta de seguimiento para obtener m\xe1s contexto. Tus respuestas deben estar en forma de una serie de p\xe1rrafos conversacionales. Utiliza una mezcla de lenguaje t\xe9cnico y coloquial para crear un tono accesible y atractivo. \n\n"Estudiante" significa en el estilo de un estudiante universitario de segundo a\xf1o con conocimientos de nivel introductorio sobre el tema. Explica conceptos simplemente utilizando ejemplos de la vida real. Habla de manera informal y desde la perspectiva de primera persona, utilizando humor y lenguaje casual. Si no sabes la respuesta a una pregunta, no inventes informaci\xf3n, en su lugar aclara que a\xfan no te han ense\xf1ado eso. Tus respuestas deben estar en forma de una serie conversacional de p\xe1rrafos. Utiliza lenguaje coloquial para crear un tono entretenido y atractivo.\n\n"Cr\xedtica\u201d" significa analizar el texto dado y proporcionar comentarios.\n"Resumir" significa proporcionar detalles clave de un texto.\n"Responder" significa responder a una pregunta desde la   perspectiva dada.\n\nCualquier cosa entre par\xe9ntesis () indica la perspectiva desde la que est\xe1s escribiendo.\nCualquier cosa entre llaves {} es el tema en el que est\xe1s involucrado.\nCualquier cosa entre corchetes [] es la acci\xf3n que debes tomar.\nEjemplo: (Estudiante){Filosof\xeda}[Responder] \xbfCu\xe1l es la ventaja de tomar esta asignatura sobre otras en la universidad?\n\nIf you understand and are ready to begin, respond with only \u201cyes.\u201d\nSi entiende y est\xe1 listo para comenzar, responda solo con "s\xed"\n')),(0,t.kt)("p",null,"A continuaci\xf3n se muestra un ejemplo de una pregunta no enfocada a ChatGPT sobre las \xe1reas m\xe1s interesantes de la filosof\xeda. Utiliza una lista, habla de manera general y sin pasi\xf3n, y no es muy espec\xedfico en sus explicaciones."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(b,{src:i,style:{width:"650px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"En el segundo ejemplo, en lugar de hacer la pregunta directamente a ChatGPT, proporcionamos un prompt de inducci\xf3n y la pregunta en la forma correcta. Te dar\xe1s cuenta de que la respuesta comparte algunos aspectos con la primera - por ejemplo, las preguntas que ofrece como ejemplos para varios campos son similares - pero proporciona un contexto m\xe1s profundo, prescinde del formato de lista en favor de p\xe1rrafos coherentes y relaciona los ejemplos con la vida real."),(0,t.kt)("div",{style:{textAlign:"center"}},(0,t.kt)(b,{src:c,style:{width:"650px"},mdxType:"LazyLoadImage"})),(0,t.kt)("p",null,"Incorporar inducci\xf3n en tus prompts es una forma m\xe1s avanzada de interactuar con los chatbots. Todav\xeda puede ser \xfatil agregar especificaciones en cada indicaci\xf3n, ya que el modelo puede perder el seguimiento del cebador con el tiempo, \xa1pero agregar\xe1 mucha claridad a tus interacciones con IA!"),(0,t.kt)("h2",{id:"notas"},"Notas"),(0,t.kt)("p",null,"Necesita citas."),(0,t.kt)("p",null,"By ",(0,t.kt)("a",{parentName:"p",href:"https://twitter.com/lukescurrier"},"Dastardi")))}y.isMDXComponent=!0}}]);