var L=Object.defineProperty;var R=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var u=(e,t,r)=>R(e,typeof t!="symbol"?t+"":t,r);import{C as m,f as O,V as j,I as C,_ as f,r as v,o as a,c as p,e as c,t as b,F as d,b as P,d as g,g as w}from"./index-Bp7y6C4B.js";var D=Object.defineProperty,T=Object.getOwnPropertyDescriptor,$=(e,t,r,i)=>{for(var o=i>1?void 0:i?T(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&D(t,r,o),o};let h=class extends j{constructor(){super(...arguments);u(this,"project")}};$([O({required:!0})],h.prototype,"project",2);h=$([m({components:{Icon:C}})],h);const y={class:"project-card"},M=["href"],W={class:"bottom"},F={class:"description"},S={class:"links"},B=["href"],I=["href"];function K(e,t,r,i,o,n){const s=v("Icon");return a(),p("div",y,[c("a",{class:"title",href:e.project.url,target:"_blank"},b(e.project.title),9,M),c("div",W,[c("p",F,b(e.project.description),1),c("div",S,[(a(!0),p(d,null,P(e.project.links,(l,k)=>(a(),p("a",{key:k,class:"link",href:l.url,target:"_blank"},[g(s,{class:"icon",icon:l.icon},null,8,["icon"])],8,B))),128)),c("a",{class:"link",href:e.project.url,target:"_blank"},[g(s,{class:"icon",icon:"mynaui:link-solid"})],8,I)])])])}const N=f(h,[["render",K]]),V=[{title:"MeowLanguage-Reborn",description:"谨此纪念 坊洛",url:"https://ls-kr.github.io/MeowLanguage-Reborn",links:[{icon:"iconoir:github-circle",url:"https://github.com/LS-KR/MeowLanguage-Reborn"}]},{title:"openrouter-ai",description:"A router for LLMs, based on OpenRouter",url:"https://ls-kr.github.io/openrouter-ai",links:[{icon:"iconoir:github-circle",url:"https://github.com/LS-KR/openrouter-ai"}]},{title:"TDP-FT",description:"No description, website, or topics provided.",url:"https://ovoneko.github.io/TDP-FT/",links:[{icon:"iconoir:github-circle",url:"https://github.com/OvONeko/TDP-FT"}]},{title:"Rosmontis2333.github.io",description:"Rosmontis 的主页...是我写的没错(",url:"http://rosmontis.rhodes-island.work/",links:[{icon:"iconoir:github-circle",url:"https://github.com/Rosmontis2333/Rosmontis2333.github.io"},{icon:"mynaui:grid-solid",url:"https://rosmontis2333.github.io/"}]},{title:"WeatherWeb",description:"白嫖中国天气网的数据x",url:"https://github.com/LS-KR/WeatherWeb",links:[{icon:"iconoir:github-circle",url:"https://github.com/LS-KR/WeatherWeb"}]}],H="";var x=Object.defineProperty,q=Object.getOwnPropertyDescriptor,A=(e,t,r,i)=>{for(var o=i>1?void 0:i?q(t,r):t,n=e.length-1,s;n>=0;n--)(s=e[n])&&(o=(i?s(t,r,o):s(o))||o);return i&&o&&x(t,r,o),o};let _=class extends j{constructor(){super(...arguments);u(this,"projects",V);u(this,"html",H)}};_=A([m({components:{ProjectCard:N}})],_);const E={class:"container"},z=["innerHTML"];function G(e,t,r,i,o,n){const s=v("ProjectCard");return a(),p(d,null,[t[0]||(t[0]=c("div",{class:"project-placeholder"},null,-1)),c("div",E,[(a(!0),p(d,null,P(e.projects,l=>(a(),w(s,{project:l,index:l.title,key:l.title},null,8,["project","index"]))),128))]),c("div",{innerHTML:e.html},null,8,z)],64)}const Y=f(_,[["render",G]]);export{Y as default};