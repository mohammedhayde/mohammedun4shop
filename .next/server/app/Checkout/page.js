(()=>{var e={};e.id=642,e.ids=[642],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7850:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(482),a=r(9108),l=r(2563),i=r.n(l),n=r(8300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let c=["",{children:["Checkout",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,955)),"C:\\n\\my-next-store\\my-next-store22\\src\\app\\Checkout\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1342)),"C:\\n\\my-next-store\\my-next-store22\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\n\\my-next-store\\my-next-store22\\src\\app\\Checkout\\page.tsx"],u="/Checkout/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/Checkout/page",pathname:"/Checkout",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6020:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},3812:(e,t,r)=>{Promise.resolve().then(r.bind(r,5126))},4507:()=>{},8428:(e,t,r)=>{"use strict";var s=r(4767);r.o(s,"useParams")&&r.d(t,{useParams:function(){return s.useParams}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}}),r.o(s,"useSearchParams")&&r.d(t,{useSearchParams:function(){return s.useSearchParams}})},5126:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(5344),a=r(3729),l=r(7943),i=r(8428);let n=()=>{let[e,t]=(0,a.useState)({name:"",address:"",city:"",phoneNumber:""}),[r,n]=(0,a.useState)([]),[o,c]=(0,a.useState)(!1),d=(0,i.useRouter)();(0,a.useEffect)(()=>{let e=localStorage.getItem("cart");try{let t=e?JSON.parse(e):{},r=Object.values(t);console.log("Parsed cart items:",r),n(Array.isArray(r)?r:[])}catch(e){console.error("Error parsing cart from localStorage",e),n([])}},[]);let u=r=>{let{name:s,value:a}=r.target;t({...e,[s]:a})},m=async t=>{t.preventDefault(),c(!0);let s=r.map(e=>({productId:e.id,quantity:e.quantity,productName:e.title}));console.log("Order details to be submitted:",s),console.log("Submitting order with details:",{name:e.name,address:e.address,city:e.city,phoneNumber:e.phoneNumber,orderDetails:s});let a=await fetch("http://localhost:5187/api/Orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,address:e.address,city:e.city,phoneNumber:e.phoneNumber,orderDetails:s})});a.ok?(alert("شكراً لطلبك! تم إكمال الشراء بنجاح."),localStorage.removeItem("cart"),n([]),setTimeout(()=>{c(!1),d.push("/")},1e3)):(console.error("Error placing order:",await a.json()),alert("حدث خطأ أثناء إكمال الشراء. يرجى المحاولة مرة أخرى."),c(!1))};return s.jsx(l.Z,{children:(0,s.jsxs)("div",{className:"container mx-auto p-4",children:[s.jsx("h1",{className:"text-2xl font-bold mb-4",children:"إتمام الشراء"}),(0,s.jsxs)("form",{onSubmit:m,children:[(0,s.jsxs)("div",{className:"mb-4",children:[s.jsx("h2",{className:"text-xl font-semibold mb-2",children:"معلومات الشحن"}),(0,s.jsxs)("div",{className:"mb-2",children:[s.jsx("label",{className:"block",children:"الاسم:"}),s.jsx("input",{type:"text",name:"name",value:e.name,onChange:u,className:"border rounded p-2 w-full",required:!0})]}),(0,s.jsxs)("div",{className:"mb-2",children:[s.jsx("label",{className:"block",children:"العنوان:"}),s.jsx("input",{type:"text",name:"address",value:e.address,onChange:u,className:"border rounded p-2 w-full",required:!0})]}),(0,s.jsxs)("div",{className:"mb-2",children:[s.jsx("label",{className:"block",children:"المدينة:"}),s.jsx("input",{type:"text",name:"city",value:e.city,onChange:u,className:"border rounded p-2 w-full",required:!0})]}),(0,s.jsxs)("div",{className:"mb-2",children:[s.jsx("label",{className:"block",children:"رقم الهاتف:"}),s.jsx("input",{type:"text",name:"phoneNumber",value:e.phoneNumber,onChange:u,className:"border rounded p-2 w-full",required:!0})]})]}),s.jsx("button",{type:"submit",className:"mt-4 p-2 bg-blue-500 text-white rounded",disabled:o,children:o?"جاري إتمام الشراء...":"إتمام الشراء"})]}),o&&s.jsx("div",{className:"mt-4 text-center text-green-500",children:"جاري معالجة طلبك..."})]})})}},7943:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(5344);r(3729);var a=r(1829);let l=({children:e})=>(0,s.jsxs)("div",{children:[s.jsx(a.default,{}),e]})},1829:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var s=r(5344),a=r(3729),l=r(8498),i=r(8742),n=r(4757),o=r(2899),c=r(9781),d=r(6056),u=r(6506),m=r(8697),p=r.n(m),x=r(2654);r(6474);let h=p()("BHHXVEKGFH","59327a638018a363eace1923b8cb9c81"),f=()=>{let e=(0,a.useRef)(null);return(0,a.useEffect)(()=>{if(!e.current)return;let t=(0,x.H)({container:e.current,placeholder:"ما الذي تبحث عنه...",getSources:({query:e})=>[{sourceId:"products",getItems:()=>h.initIndex("shopify_products").search(e).then(e=>(console.log(e.hits),e.hits)),templates:{item:({item:e,html:t})=>t`<>
                <li class="group" id="product#1430691" role="option" aria-selected="false" dir="rtl">
                <a href="${e.handle}"
                   class="flex items-center justify-between bg-white px-4 py-3 hover:bg-gray-300 focus:bg-gray-300 md:p-4">
                  <div class="flex flex-1 items-center justify-between">
                    <div class="flex flex-col items-center">
                      <span class="mb-1 w-16 rounded-full bg-green-100 p-1 text-center text-xs font-medium text-green-700">خصم ${e.discount}%</span>
                      <span class="font-bold text-primary">${e.price} د.ع</span>
                    </div>
                    <span class="line-clamp-3 flex-3/4">${e.title}</span>
                  </div>
                  <div class="relative ms-3 flex h-18 w-18 items-center overflow-hidden rounded-xl border border-gray-400">
                    <img alt="${e.alt}" 
                         loading="lazy" 
                         width="59.4px" 
                         height="59.4px" 
                         decoding="async" 
                         data-nimg="1" 
                         sizes="59.4px" 
                         srcset="${e.imageSrcset}" 
                         src="${e.image}"
                         style="color: transparent; object-fit: contain; width: 59.4px; height: 59.4px;">
                  </div>
                </a>
            </li>
            
              
              

                </>`}}]});return()=>{t.destroy()}},[]),s.jsx("div",{ref:e,style:{position:"relative",zIndex:1e3,flexGrow:1},className:"autocomplete-container"})};function b(){let[e,t]=(0,a.useState)(""),r=[{icon:s.jsx(l.Z,{}),label:"",ariaLabel:"Cart",role:"button"},{icon:s.jsx(i.Z,{}),label:"",ariaLabel:"Wishlist",role:"button"},{label:"Log in",icon:s.jsx(n.Z,{}),ariaLabel:"Log in",role:"login"}];return s.jsx("header",{className:"flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200",children:(0,s.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap items-center flex-row-reverse justify-end h-full max-w-[1536px] w-full",children:[s.jsx(u.default,{href:"/Home","aria-label":"SF Homepage",className:"inline-block ml-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0",children:(0,s.jsxs)("picture",{children:[s.jsx("source",{srcSet:"https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo.svg",media:"(min-width: 768px)"}),s.jsx("img",{src:"https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign.svg",alt:"Sf Logo",className:"w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"})]})}),s.jsx(o.Z,{"aria-label":"Open categories",className:"hidden lg:flex lg:ml-4",variant:"tertiary",slotSuffix:s.jsx(c.Z,{className:"hidden lg:block"}),children:s.jsx("span",{className:"hidden lg:flex whitespace-nowrap",children:"الأقسام"})}),s.jsx("form",{role:"search",className:"flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0",onSubmit:t=>{t.preventDefault(),alert(`Successfully found 10 results for ${e}`)},children:s.jsx(f,{})}),s.jsx(o.Z,{"aria-label":"Open categories",className:"lg:hidden order-first lg:order-last ml-4",square:!0,variant:"tertiary",children:s.jsx(d.Z,{})}),s.jsx("nav",{className:"flex-1 flex justify-start lg:order-last lg:mr-4",children:s.jsx("div",{className:"flex flex-row flex-nowrap",children:r.map(e=>s.jsx(o.Z,{className:"ml-2 -mr-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700","aria-label":e.ariaLabel,variant:"tertiary",square:!0,slotPrefix:e.icon,children:"login"===e.role&&s.jsx("p",{className:"hidden xl:inline-flex whitespace-nowrap",children:e.label})},e.ariaLabel))})})]})})}},955:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>l,__esModule:()=>a,default:()=>i});let s=(0,r(6843).createProxy)(String.raw`C:\n\my-next-store\my-next-store22\src\app\Checkout\page.tsx`),{__esModule:a,$$typeof:l}=s,i=s.default},1342:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>i});var s=r(5036),a=r(5524),l=r.n(a);r(5023);let i={title:"Create Next App",description:"Generated by create next app"};function n({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:l().className,children:e})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(337);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,764,30,639],()=>r(7850));module.exports=s})();