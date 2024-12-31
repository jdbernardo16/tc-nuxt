import{d as O,P as h,m as S,A as z,z as D,M as y,W,L as f,o as l,c as m,e as r,a as x,t as n,b as s,f as d,i as c,E as L,H as T,w as $,T as V,h as G,j as J,a8 as K,k as Q,I as X}from"./Dwb8sLJR.js";import{_ as Y}from"./CnzYnXEX.js";const Z={class:"max-w-lg mx-auto my-16 min-h-[600px] lg:my-24"},ee={class:"flex flex-col items-center"},se={class:"text-xl font-semibold lg:text-3xl"},te={key:0,class:"my-2 text-center"},oe={key:1,class:"my-2 text-center"},ae={key:0,for:"email"},re=["placeholder"],ne={key:1,class:"text-sm text-gray-500"},le={key:2},ie={for:"username"},ue=["placeholder"],me={for:"password"},de=["innerHTML"],ce=["innerHTML"],ge={class:"flex items-center justify-center gap-4 mt-4 text-lg"},pe=O({__name:"LoginAndRegister",setup(fe){const{t:a}=h(),b=S(),k=z(),{loginUser:R,isPending:U,registerUser:q,sendResetPasswordEmail:A}=D(),p=y({email:"",password:"",username:""}),t=y("login"),v=y(""),i=y("");W(b,()=>{b.query.action==="forgotPassword"?t.value="forgotPassword":b.query.action==="register"?t.value="register":t.value="login"},{immediate:!0});const _=async o=>{const{success:e,error:g}=await R(o);switch(g){case"invalid_username":i.value=a("messages.error.invalidUsername");break;case"incorrect_password":i.value=a("messages.error.incorrectPassword");break;default:i.value=g;break}e&&(i.value="",v.value=a("messages.account.loggingIn"))},C=async o=>{if(t.value==="register"){const{success:e,error:g}=await q(o);e?(i.value="",v.value=a("messages.account.accountCreated")+" "+a("messages.account.loggingIn"),setTimeout(()=>{_(o)},2e3)):i.value=g}else t.value==="forgotPassword"?M(o):_(o)},M=async o=>{const{success:e,error:g}=await A(o.email);e?(i.value="",v.value=a("messages.account.ifRegistered")):i.value=g},w=o=>{t.value=o,o==="forgotPassword"?k.push({query:{action:"forgotPassword"}}):o==="register"?k.push({query:{action:"register"}}):k.push({query:{}})},j=f(()=>{if(t.value==="login")return a("messages.account.loginToAccount");if(t.value==="register")return a("messages.account.accountRegister");if(t.value==="forgotPassword")return a("messages.account.forgotPassword")}),E=f(()=>{if(t.value==="login")return a("messages.account.login");if(t.value==="register")return a("messages.account.register");if(t.value==="forgotPassword")return a("messages.account.sendPasswordResetEmail")}),H=f(()=>t.value==="register"?a("messages.billing.email"):a("messages.account.emailOrUsername")),I=f(()=>t.value==="login"?a("messages.account.emailOrUsername"):a("messages.account.username")),N=f(()=>a("messages.account.password")),P=f(()=>({email:"johndoe@email.com",username:t.value==="login"?"johndoe@email.com":"johndoe",password:"********"}));return(o,e)=>{const g=K,B=Y,F=Q;return l(),m("div",Z,[r("div",ee,[x(g,{class:"mb-6 scale-125"}),r("h1",se,n(s(j)),1),s(t)==="login"?(l(),m("div",te,[d(n(o.$t("messages.account.noAccount"))+" ",1),r("a",{class:"font-semibold cursor-pointer text-primary",onClick:e[0]||(e[0]=u=>w("register"))},n(o.$t("messages.account.accountRegister")),1),e[8]||(e[8]=d(". "))])):c("",!0),s(t)==="register"?(l(),m("div",oe,[d(n(o.$t("messages.account.hasAccount"))+" ",1),r("a",{class:"font-semibold cursor-pointer text-primary",onClick:e[1]||(e[1]=u=>w("login"))},n(o.$t("messages.general.please"))+" "+n(o.$t("messages.account.accountLogin")),1),e[9]||(e[9]=d(" . "))])):c("",!0)]),r("form",{class:"mt-6",onSubmit:e[5]||(e[5]=J(u=>C(s(p)),["prevent"]))},[s(t)==="register"||s(t)==="forgotPassword"?(l(),m("label",ae,[d(n(s(H))+" ",1),e[10]||(e[10]=r("span",{class:"text-red-500"},"*",-1)),e[11]||(e[11]=d()),e[12]||(e[12]=r("br",null,null,-1)),L(r("input",{id:"email","onUpdate:modelValue":e[2]||(e[2]=u=>s(p).email=u),placeholder:s(P).email,autocomplete:"email",type:"text",required:""},null,8,re),[[T,s(p).email]])])):c("",!0),s(t)==="forgotPassword"?(l(),m("p",ne,n(o.$t("messages.account.enterEmailOrUsernameForReset")),1)):c("",!0),s(t)!=="forgotPassword"?(l(),m("div",le,[r("label",ie,[d(n(s(I))+" ",1),e[13]||(e[13]=r("span",{class:"text-red-500"},"*",-1)),e[14]||(e[14]=d()),e[15]||(e[15]=r("br",null,null,-1)),L(r("input",{id:"username","onUpdate:modelValue":e[3]||(e[3]=u=>s(p).username=u),placeholder:s(P).username,autocomplete:"username",type:"text",required:""},null,8,ue),[[T,s(p).username]])]),r("label",me,[d(n(s(N))+" ",1),e[16]||(e[16]=r("span",{class:"text-red-500"},"*",-1)),e[17]||(e[17]=d()),e[18]||(e[18]=r("br",null,null,-1)),x(B,{id:"password",className:"border rounded-lg w-full p-3 px-4 bg-white",modelValue:s(p).password,"onUpdate:modelValue":e[4]||(e[4]=u=>s(p).password=u),placeholder:s(P).password,autocomplete:s(t)==="login"?"current-password":"new-password",required:!0},null,8,["modelValue","placeholder","autocomplete"])])])):c("",!0),x(V,{name:"scale-y",mode:"out-in"},{default:$(()=>[s(v)?(l(),m("div",{key:0,class:"my-4 text-sm text-green-500",innerHTML:s(v)},null,8,de)):c("",!0)]),_:1}),x(V,{name:"scale-y",mode:"out-in"},{default:$(()=>[s(i)?(l(),m("div",{key:0,class:"my-4 text-sm text-red-500",innerHTML:s(i)},null,8,ce)):c("",!0)]),_:1}),r("button",ge,[s(U)?(l(),G(F,{key:0,stroke:"4",size:"16",color:"#fff"})):c("",!0),r("span",null,n(s(E)),1)])],32),s(t)==="login"?(l(),m("div",{key:0,class:"my-8 text-center cursor-pointer",onClick:e[6]||(e[6]=u=>w("forgotPassword"))},n(o.$t("messages.account.forgotPassword")),1)):c("",!0),s(t)==="forgotPassword"?(l(),m("div",{key:1,class:"my-8 text-center cursor-pointer",onClick:e[7]||(e[7]=u=>w("login"))},n(o.$t("messages.account.backToLogin")),1)):c("",!0)])}}}),xe=Object.assign(X(pe,[["__scopeId","data-v-191a9e7c"]]),{__name:"LoginAndRegister"});export{xe as default};