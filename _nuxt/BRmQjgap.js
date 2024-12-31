import{d as Y,u as V,B as z,L as h,M as L,W as R,o as k,c as C,e as y,a as b,b as n,E as G,H,N as J,_ as U,I as X,X as K,Y as Z,Z as B,J as N,O as ee,$ as te,i as M,a0 as ne,h as oe,w as A,f as se,t as D,v as ae,g as re}from"./Dwb8sLJR.js";import{_ as ie}from"./BRcODKMk.js";import{u as le}from"./CVo1uqYq.js";const ce={class:"flex rounded bg-white text-sm leading-none shadow-sm shadow-gray-200 isolate"},ue=["disabled"],de=["max"],pe=["disabled"],me=Y({__name:"QuantityInput",props:{item:{type:Object,required:!0}},setup(e){const{updateItemQuantity:s,isUpdatingCart:a,cart:d}=V(),{debounce:f}=z(),t=h(()=>{var r,i;return e.item.variation?(r=e.item.variation)==null?void 0:r.node:(i=e.item.product)==null?void 0:i.node}),o=L(e.item.quantity),g=h(()=>t.value.stockQuantity?t.value.stockQuantity<=o.value:!1),_=()=>o.value++,m=()=>o.value--;R(o,f(()=>{o.value!==""&&s(e.item.key,o.value)},250));const c=()=>{var r,i,u;if(o.value===""){const p=(u=(i=(r=d.value)==null?void 0:r.contents)==null?void 0:i.nodes)==null?void 0:u.find(v=>v.key===e.item.key);p&&(o.value=p.quantity)}};return(r,i)=>{const u=U;return k(),C("div",ce,[y("button",{title:"Decrease Quantity","aria-label":"Decrease Quantity",onClick:m,type:"button",class:"focus:outline-none border-r w-6 h-6 border rounded-l border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed",disabled:n(a)||n(o)<=0},[b(u,{name:"ion:remove",size:"14"})],8,ue),G(y("input",{"onUpdate:modelValue":i[0]||(i[0]=p=>J(o)?o.value=p:null),type:"number",min:"0",max:n(t).stockQuantity,"aria-label":"Quantity",onFocusout:c,class:"flex items-center justify-center w-8 px-2 text-right text-xs focus:outline-none border-y border-gray-300"},null,40,de),[[H,n(o),void 0,{number:!0}]]),y("button",{title:"Increase Quantity","aria-label":"Increase Quantity",onClick:_,type:"button",class:"focus:outline-none border-l w-6 h-6 border rounded-r hover:bg-gray-50 border-gray-300 disabled:cursor-not-allowed disabled:bg-gray-100",disabled:n(a)||n(g)},[b(u,{name:"ion:add",size:"14"})],8,pe)])}}}),ve=Object.assign(X(me,[["__scopeId","data-v-754b6da6"]]),{__name:"QuantityInput"}),fe={},he={xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 512 512"};function _e(e,s){return k(),C("svg",he,s[0]||(s[0]=[y("path",{d:"M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),y("path",{stroke:"currentColor","stroke-linecap":"round","stroke-miterlimit":"10","stroke-width":"32",d:"M80 112h352"},null,-1),y("path",{d:"M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1)]))}const ye=Object.assign(X(fe,[["render",_e]]),{__name:"TrashIcon"});function ge(e){return K()?(Z(e),!0):!1}function q(e){return typeof e=="function"?e():n(e)}const xe=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const be=Object.prototype.toString,we=e=>be.call(e)==="[object Object]",W=()=>{},F=xe?window:void 0;function ke(e){var s;const a=q(e);return(s=a==null?void 0:a.$el)!=null?s:a}function O(...e){let s,a,d,f;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,d,f]=e,s=F):[s,a,d,f]=e,!s)return W;Array.isArray(a)||(a=[a]),Array.isArray(d)||(d=[d]);const t=[],o=()=>{t.forEach(c=>c()),t.length=0},g=(c,r,i,u)=>(c.addEventListener(r,i,u),()=>c.removeEventListener(r,i,u)),_=R(()=>[ke(s),q(f)],([c,r])=>{if(o(),!c)return;const i=we(r)?{...r}:r;t.push(...a.flatMap(u=>d.map(p=>g(c,u,p,i))))},{immediate:!0,flush:"post"}),m=()=>{_(),o()};return ge(m),m}function Se(e,s={}){const{threshold:a=50,onSwipe:d,onSwipeEnd:f,onSwipeStart:t,passive:o=!0,window:g=F}=s,_=B({x:0,y:0}),m=B({x:0,y:0}),c=h(()=>_.x-m.x),r=h(()=>_.y-m.y),{max:i,abs:u}=Math,p=h(()=>i(u(c.value),u(r.value))>=a),v=L(!1),S=h(()=>p.value?u(c.value)>u(r.value)?c.value>0?"left":"right":r.value>0?"up":"down":"none"),I=l=>[l.touches[0].clientX,l.touches[0].clientY],j=(l,w)=>{_.x=l,_.y=w},Q=(l,w)=>{m.x=l,m.y=w};let x;const E=Ce(g==null?void 0:g.document);o?x=E?{passive:!0}:{capture:!1}:x=E?{passive:!1,capture:!0}:{capture:!0};const $=l=>{v.value&&(f==null||f(l,S.value)),v.value=!1},T=[O(e,"touchstart",l=>{if(l.touches.length!==1)return;const[w,P]=I(l);j(w,P),Q(w,P),t==null||t(l)},x),O(e,"touchmove",l=>{if(l.touches.length!==1)return;const[w,P]=I(l);Q(w,P),x.capture&&!x.passive&&Math.abs(c.value)>Math.abs(r.value)&&l.preventDefault(),!v.value&&p.value&&(v.value=!0),v.value&&(d==null||d(l))},x),O(e,["touchend","touchcancel"],$,x)];return{isPassiveEventSupported:E,isSwiping:v,direction:S,coordsStart:_,coordsEnd:m,lengthX:c,lengthY:r,stop:()=>T.forEach(l=>l())}}function Ce(e){if(!e)return!1;let s=!1;const a={get passive(){return s=!0,!1}};return e.addEventListener("x",W,a),e.removeEventListener("x",W),s}const Ie={key:0,class:"rounded-lg flex h-16 w-full overflow-hidden relative items-center"},Ee={__name:"SwipeCard",emits:["remove"],setup(e,{emit:s}){const a=s,d=L(!0),f=L(null),{isSwiping:t,lengthX:o}=Se(f,{passive:!0,onSwipeEnd(){o.value>80&&(d.value=!1,a("remove"))}});return(g,_)=>{const m=ye;return n(d)?(k(),C("div",Ie,[b(m,{class:N(["transform transition-all right-0 w-6 scale-0 absolute",{"scale-100":n(o)>40,"delete-ready":n(o)>80}])},null,8,["class"]),y("div",{class:N(["rounded-lg inset-0 absolute",{"transition-all":!n(t)}]),ref_key:"el",ref:f,style:te({transform:n(t)?`translateX(-${n(o)}px)`:"none"})},[ee(g.$slots,"default")],6)])):M("",!0)}}},Me={key:0,class:"flex items-center gap-3 group"},Qe={class:"flex-1"},$e={class:"flex gap-x-2 gap-y-1 flex-wrap items-center"},Te={key:0,class:"text-[10px] border-green-200 leading-none bg-green-100 inline-block p-0.5 rounded text-green-600 border"},Pe={key:1,class:"text-[10px] border-yellow-200 leading-none bg-yellow-100 inline-block p-0.5 rounded text-orange-500 border"},Le={class:"inline-flex gap-2 flex-col items-end"},je={class:"text-xs text-gray-400 group-hover:text-gray-700 flex leading-none items-center"},Ne={__name:"CartCard",props:{item:{type:Object,required:!0}},setup(e){const{updateItemQuantity:s}=V(),{addToWishlist:a}=le(),{FALLBACK_IMG:d}=z(),{storeSettings:f}=ne(),t=h(()=>{var p,v;return e.item.variation?(p=e.item.variation)==null?void 0:p.node:(v=e.item.product)==null?void 0:v.node}),o=h(()=>`/product/${decodeURIComponent(e.item.product.node.slug)}`),g=h(()=>t.value.stockQuantity?t.value.lowStockAmount>=t.value.stockQuantity:!1),_=h(()=>{var p,v,S;return((p=t.value.image)==null?void 0:p.cartSourceUrl)||((v=t.value.image)==null?void 0:v.sourceUrl)||((S=e.item.product.image)==null?void 0:S.sourceUrl)||d}),m=h(()=>parseFloat(t.value.rawRegularPrice)),c=h(()=>parseFloat(t.value.rawSalePrice)),r=h(()=>Math.round((m.value-c.value)/m.value*100)+"%"),i=()=>{s(e.item.key,0)},u=()=>{a(e.item.product.node),i()};return(p,v)=>{const S=ae,I=re,j=ie,Q=ve,x=U,E=Ee;return k(),oe(E,{onRemove:i},{default:A(()=>[n(t)?(k(),C("div",Me,[b(I,{to:n(o)},{default:A(()=>{var $,T;return[b(S,{width:"64",height:"64",class:"w-16 h-16 rounded-md skeleton",src:n(_),alt:(($=n(t).image)==null?void 0:$.altText)||n(t).name,title:((T=n(t).image)==null?void 0:T.title)||n(t).name,loading:"lazy"},null,8,["src","alt","title"])]}),_:1},8,["to"]),y("div",Qe,[y("div",$e,[b(I,{class:"leading-tight",to:n(o)},{default:A(()=>[se(D(n(t).name),1)]),_:1},8,["to"]),n(t).salePrice?(k(),C("span",Te," Save "+D(n(r)),1)):M("",!0),n(g)?(k(),C("span",Pe," Low Stock ")):M("",!0)]),b(j,{class:"mt-1 text-xs","sale-price":n(t).salePrice,"regular-price":n(t).regularPrice},null,8,["sale-price","regular-price"])]),y("div",Le,[b(Q,{item:e.item},null,8,["item"]),y("div",je,[n(f).showMoveToWishlist?(k(),C("button",{key:0,class:"mr-2 pr-2 border-r",onClick:u,type:"button"}," Move to Wishlist ")):M("",!0),y("button",{title:"Remove Item","aria-label":"Remove Item",onClick:i,type:"button",class:"flex items-center gap-1 hover:text-red-500 cursor-pointer"},[b(x,{name:"ion:trash",class:"hidden md:inline-block",size:"12"})])])])])):M("",!0)]),_:1})}}};export{ye as _,Ne as a};