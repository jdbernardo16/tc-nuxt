import{d as m,M as p,o as n,c as f,e as _,b as o,J as y,h as r,_ as g}from"./Dwb8sLJR.js";const h={class:"relative flex items-center w-full"},v=["type","value","placeholder","autocomplete","required"],w=m({__name:"PasswordInput",props:{modelValue:{type:String,required:!0},className:{type:String,default:""},placeholder:{type:String,default:""},autocomplete:{type:String,default:"new-password"},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:u}){const e=p(!1),c=u,i=l=>{const t=l.target;c("update:modelValue",t.value)};return(l,t)=>{const s=g;return n(),f("div",h,[_("input",{type:o(e)?"text":"password",class:y(["flex items-center flex-1",a.className]),value:a.modelValue,onInput:i,placeholder:a.placeholder,autocomplete:a.autocomplete,required:a.required},null,42,v),o(e)?(n(),r(s,{key:0,name:"ion:eye-outline",size:"20",class:"absolute cursor-pointer right-4",onClick:t[0]||(t[0]=d=>e.value=!o(e))})):(n(),r(s,{key:1,name:"ion:eye-off-outline",size:"20",class:"absolute cursor-pointer right-4",onClick:t[1]||(t[1]=d=>e.value=!o(e))}))])}}}),k=Object.assign(w,{__name:"PasswordInput"});export{k as _};