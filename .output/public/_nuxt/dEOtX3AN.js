import{d as u,B as g,o as x,h,w as b,a as f,b as i,e as d,i as _,v as p,g as y,I as C}from"./Dwb8sLJR.js";const v=["innerHTML"],t=220,w=u({__name:"CategoryCard",props:{node:{type:Object,required:!0},imageLoading:{type:String,default:"lazy"}},setup(e){const{FALLBACK_IMG:l}=g(),r=Math.round(t*1.125);return(L,n)=>{const c=p,m=y;return e.node?(x(),h(m,{key:0,to:`/product-category/${decodeURIComponent(e.node.slug)}`,class:"relative flex justify-center overflow-hidden border border-white rounded-xl item snap-mandatory snap-x"},{default:b(()=>{var a,o,s;return[f(c,{width:t,height:i(r),class:"absolute inset-0 object-cover w-full h-full",src:((a=e.node.image)==null?void 0:a.sourceUrl)||i(l),alt:((o=e.node.image)==null?void 0:o.altText)||e.node.name,title:((s=e.node.image)==null?void 0:s.title)||e.node.name,loading:e.imageLoading,sizes:`sm:${t/2}px md:${t}px`,placeholder:"","placeholder-class":"blur-xl"},null,8,["height","src","alt","title","loading","sizes"]),n[0]||(n[0]=d("div",{class:"absolute inset-x-0 bottom-0 opacity-50 bg-gradient-to-t from-black to-transparent h-1/2"},null,-1)),d("span",{class:"relative z-10 mt-auto mb-2 text-sm font-semibold text-white capitalize md:text-base md:mb-4",innerHTML:e.node.name},null,8,v)]}),_:1},8,["to"])):_("",!0)}}}),z=Object.assign(C(w,[["__scopeId","data-v-179e775f"]]),{__name:"CategoryCard"});export{z as _};