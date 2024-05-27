(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[105],{105:function(e,t,a){Promise.resolve().then(a.bind(a,6214)),Promise.resolve().then(a.bind(a,6039)),Promise.resolve().then(a.bind(a,6933)),Promise.resolve().then(a.bind(a,1134)),Promise.resolve().then(a.bind(a,3267))},6214:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var r=a(7437),s=a(8481),l=a(1786);a(6978),a(7644),a(501);var i=a(2265),n=a(8792);async function c(e){let t=await fetch(e);if(!t.ok)throw Error("Failed to fetch categories");return await t.json()}var o=e=>{let{apiEndpoint:t}=e,[a,o]=(0,i.useState)([]);(0,i.useEffect)(()=>{(async()=>{try{let e=await c(t);o(e)}catch(e){console.error("Error fetching categories:",e)}})()},[t]);let d=[];for(let e=0;e<a.length;e+=10)d.push(a.slice(e,e+10));return(0,r.jsx)(l.tq,{modules:[s.W_,s.tl],navigation:!0,pagination:{clickable:!0},children:d.map((e,t)=>(0,r.jsx)(l.o5,{children:(0,r.jsx)("div",{className:"grid grid-cols-5 gap-4 p-2",children:e.map(e=>(0,r.jsx)(n.default,{href:"/category/".concat(e.name),children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("img",{src:e.image,alt:e.name,className:"w-full h-auto size-6"}),(0,r.jsx)("h1",{className:"mt-1 text-center",children:e.name})]})},e.id))})},t))})}},6039:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(7437),s=a(2265),l=a(765),i=a(7874),n=a(6995),c=a(4065),o=a(1213),d=a(3984),h=a(8792),u=a(6093),m=a(9303),g=a.n(m),x=a(2273);function p(){let e=(0,u._)(['<>\n                <li class="group" id="product#1430691" role="option" aria-selected="false" dir="rtl">\n                <a href="','"\n                   class="flex items-center justify-between bg-white px-4 py-3 hover:bg-gray-300 focus:bg-gray-300 md:p-4">\n                  <div class="flex flex-1 items-center justify-between">\n                    <div class="flex flex-col items-center">\n                      <span class="mb-1 w-16 rounded-full bg-green-100 p-1 text-center text-xs font-medium text-green-700">خصم ','%</span>\n                      <span class="font-bold text-primary">',' د.ع</span>\n                    </div>\n                    <span class="line-clamp-3 flex-3/4">','</span>\n                  </div>\n                  <div class="relative ms-3 flex h-18 w-18 items-center overflow-hidden rounded-xl border border-gray-400">\n                    <img alt="','" \n                         loading="lazy" \n                         width="59.4px" \n                         height="59.4px" \n                         decoding="async" \n                         data-nimg="1" \n                         sizes="59.4px" \n                         srcset="','" \n                         src="','"\n                         style="color: transparent; object-fit: contain; width: 59.4px; height: 59.4px;">\n                  </div>\n                </a>\n            </li>\n            \n              \n              \n\n                </>']);return p=function(){return e},e}a(783);let f=g()("BHHXVEKGFH","59327a638018a363eace1923b8cb9c81");var b=()=>{let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{if(!e.current)return;let t=(0,x.H)({container:e.current,placeholder:"ما الذي تبحث عنه...",getSources(e){let{query:t}=e;return[{sourceId:"products",getItems:()=>f.initIndex("shopify_products").search(t).then(e=>(console.log(e.hits),e.hits)),templates:{item(e){let{item:t,html:a}=e;return a(p(),t.handle,t.discount,t.price,t.title,t.alt,t.imageSrcset,t.image)}}}]}});return()=>{t.destroy()}},[]),(0,r.jsx)("div",{ref:e,style:{position:"relative",zIndex:1e3,flexGrow:1},className:"autocomplete-container"})};function j(){let[e,t]=(0,s.useState)(""),a=[{icon:(0,r.jsx)(l.Z,{}),label:"",ariaLabel:"Cart",role:"button"},{icon:(0,r.jsx)(i.Z,{}),label:"",ariaLabel:"Wishlist",role:"button"},{label:"Log in",icon:(0,r.jsx)(n.Z,{}),ariaLabel:"Log in",role:"login"}];return(0,r.jsx)("header",{className:"flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-white border-b border-neutral-200",children:(0,r.jsxs)("div",{className:"flex flex-wrap lg:flex-nowrap items-center flex-row-reverse justify-end h-full max-w-[1536px] w-full",children:[(0,r.jsx)(h.default,{href:"/Home","aria-label":"SF Homepage",className:"inline-block ml-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0",children:(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:"https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo.svg",media:"(min-width: 768px)"}),(0,r.jsx)("img",{src:"https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign.svg",alt:"Sf Logo",className:"w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"})]})}),(0,r.jsx)(c.Z,{"aria-label":"Open categories",className:"hidden lg:flex lg:ml-4",variant:"tertiary",slotSuffix:(0,r.jsx)(o.Z,{className:"hidden lg:block"}),children:(0,r.jsx)("span",{className:"hidden lg:flex whitespace-nowrap",children:"الأقسام"})}),(0,r.jsx)("form",{role:"search",className:"flex flex-[100%] order-last lg:order-3 mt-2 lg:mt-0 pb-2 lg:pb-0",onSubmit:t=>{t.preventDefault(),alert("Successfully found 10 results for ".concat(e))},children:(0,r.jsx)(b,{})}),(0,r.jsx)(c.Z,{"aria-label":"Open categories",className:"lg:hidden order-first lg:order-last ml-4",square:!0,variant:"tertiary",children:(0,r.jsx)(d.Z,{})}),(0,r.jsx)("nav",{className:"flex-1 flex justify-start lg:order-last lg:mr-4",children:(0,r.jsx)("div",{className:"flex flex-row flex-nowrap",children:a.map(e=>(0,r.jsx)(c.Z,{className:"ml-2 -mr-0.5 rounded-md text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700","aria-label":e.ariaLabel,variant:"tertiary",square:!0,slotPrefix:e.icon,children:"login"===e.role&&(0,r.jsx)("p",{className:"hidden xl:inline-flex whitespace-nowrap",children:e.label})},e.ariaLabel))})})]})})}},6933:function(e,t,a){"use strict";a.r(t);var r=a(7437);a(2265);var s=a(4065),l=a(4254),i=a(9410),n=a(5825),c=a(4712),o=a(7874),d=a(6480),h=a.n(d),u=a(703);function m(e){let{disabled:t=!1,...a}=e;return(0,r.jsx)(s.Z,{className:h()("absolute !rounded-full z-10 left-4 bg-white",{"!hidden":t}),variant:"secondary",size:"lg",square:!0,...a,children:(0,r.jsx)(l.Z,{})})}function g(e){let{disabled:t=!1,...a}=e;return(0,r.jsx)(s.Z,{className:h()("absolute !rounded-full z-10 right-4 bg-white",{"!hidden":t}),variant:"secondary",size:"lg",square:!0,...a,children:(0,r.jsx)(i.Z,{})})}t.default=e=>{let{products:t}=e,a=t.map(e=>({id:e.id.toString(),name:e.title,price:"د.ع ".concat(e.price.toFixed(2)),handle:e.handle,img:{src:e.imagePaths&&e.imagePaths.length>0?e.imagePaths[0]:"https://assets.qa.amalcloud.net/amal-akeneo/7/3/3/a/733aa30f576b935a743254366931795bc87fdc0a_AM00064198P_1.jpg",alt:e.description}}));return(0,r.jsxs)("div",{className:"gallery-container relative",children:[(0,r.jsxs)("div",{className:"header flex justify-between items-center mb-4 pl-4 pr-4 py-4",children:[(0,r.jsx)(s.Z,{variant:"secondary",children:"عرض كل المنتجات"}),(0,r.jsx)("h2",{className:"text-2xl font-semibold",children:"الأفضل مبيعاً"})]}),(0,r.jsx)(n.Z,{className:"relative m-auto items-center w-full overflow-x-auto scrollbar-hide","buttons-placement":"floating",drag:!0,slotPreviousButton:(0,r.jsx)(m,{}),slotNextButton:(0,r.jsx)(g,{}),children:a.map(e=>{let{id:t,name:a,price:l,img:i,handle:n}=e;return(0,r.jsxs)("div",{className:"product-card first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg lg:w-[192px]",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(c.Z,{href:"/product/".concat(n),className:"block",children:(0,r.jsx)(u.default,{src:i.src,alt:"img.alt",className:"block object-cover h-auto rounded-md aspect-square lg:w-[190px] lg:h-[190px]",width:190,height:190})}),(0,r.jsx)(s.Z,{variant:"tertiary",size:"sm",square:!0,className:"absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full","aria-label":"Add to wishlist",children:(0,r.jsx)(o.Z,{size:"sm"})})]}),(0,r.jsxs)("div",{className:"p-2 border-t border-neutral-200 typography-text-sm",children:[(0,r.jsx)(c.Z,{href:"/product/".concat(n),variant:"secondary",className:"no-underline productName",children:a}),(0,r.jsx)("span",{className:"block mt-2 font-bold",style:{color:"#fe4960"},children:l})]})]},t)})})]})}},3267:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return j}});var r=a(7437),s=a(2265),l=a(1786),i=a(8020),n=a(4272),c=a(1193),o=a(6840),d=a(9835),h=a(2508),u=a(8481),m=a(703),g=a(4712),x=a(4065),p=a(7874),f=e=>{let{product:t}=e,a={id:t.id.toString(),name:t.title,price:"د.ع ".concat(t.price.toFixed(2)),handle:t.handle,img:{src:t.imagePaths&&t.imagePaths.length>0?t.imagePaths[0]:"https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:t.description||"Product Image"}};return(0,r.jsxs)("div",{className:"product-card first:ms-auto last:me-auto ring-1 ring-inset ring-neutral-200 shrink-0 rounded-md hover:shadow-lg lg:w-[25vw]",children:[(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(g.Z,{href:"/product/"+a.handle,className:"block",children:(0,r.jsx)(m.default,{src:a.img.src,alt:a.img.alt,className:"block object-cover h-auto rounded-md aspect-square lg:w-[90%] lg:h-[90%]",width:146,height:146})}),(0,r.jsx)(x.Z,{variant:"tertiary",size:"sm",square:!0,className:"absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full","aria-label":"Add to wishlist",children:(0,r.jsx)(p.Z,{size:"sm"})})]}),(0,r.jsxs)("div",{className:"p-2 border-t border-neutral-200 typography-text-sm",children:[(0,r.jsx)(g.Z,{href:"/product/"+a.handle,variant:"secondary",className:"no-underline productName",children:a.name}),(0,r.jsx)("span",{className:"block mt-2 font-bold",style:{color:"#fe4960"},children:a.price})]})]})},b=a(2652);function j(){let[e,t]=(0,s.useState)(0),[a,i]=(0,s.useState)([]),u=["الملابس","الإلكترونيات","الكتب","الألعاب","المنزل"],[m,g]=(0,s.useState)(1),[x,p]=(0,s.useState)(!0);(0,s.useEffect)(()=>{g(1),i([]),j(0)},[]),(0,s.useEffect)(()=>{g(1),i([]),j(e)},[e]);let j=async e=>{let t=u[e].toLowerCase();try{let e=await fetch("http://localhost:5187/api/ProductsController21/ByCategoryName/".concat(t,"?pageNumber=1&pageSize=4")),a=await e.json();i(a),p(4===a.length)}catch(e){console.error("Error fetching products:",e),i([]),p(!1)}},v=async()=>{let t=m+1,r=u[e].toLowerCase();try{let e=await fetch("http://localhost:5187/api/ProductsController21/ByCategoryName/".concat(r,"?pageNumber=").concat(t,"&pageSize=4")),s=await e.json();i([...a,...s]),g(t),p(4===s.length)}catch(e){console.error("Error fetching more products:",e)}};return(0,r.jsxs)(n.Z,{sx:{width:"100%"},children:[(0,r.jsx)(c.Z,{value:e,onChange:(e,a)=>{g(1),i([]),t(a)},indicatorColor:"primary",textColor:"primary",variant:"fullWidth",children:u.map((e,t)=>(0,r.jsx)(o.Z,{label:e},t))}),(0,r.jsx)(l.tq,{onSlideChange:e=>{let a=e.activeIndex;t(a),j(a)},slidesPerView:1,pagination:{clickable:!1},navigation:!1,children:u.map((e,t)=>(0,r.jsx)(l.o5,{children:(0,r.jsx)(b.Z,{dataLength:a.length,next:v,hasMore:x,loader:(0,r.jsx)(d.Z,{children:"Loading..."}),endMessage:(0,r.jsx)(d.Z,{children:"No more products"}),children:(0,r.jsx)(h.ZP,{container:!0,rowSpacing:1,justifyContent:"center",alignItems:"center",columnSpacing:{xs:1,sm:2,md:3},children:a.length>0?a.map((e,t)=>(0,r.jsx)(h.ZP,{item:!0,xs:12,sm:6,md:4,lg:3,style:{flex:"0 0 auto"},children:(0,r.jsx)(f,{product:{...e,imagePaths:e.imagePaths.length?e.imagePaths:["https://assets.qa.amalcloud.net/amal-akeneo/7/3/3/a/733aa30f576b935a743254366931795bc87fdc0a_AM00064198P_1.jpg"]}})},t)):(0,r.jsx)(h.ZP,{item:!0,xs:12,children:(0,r.jsx)(d.Z,{variant:"body1",color:"textSecondary",children:"لا توجد منتجات في هذا القسم حاليًا."})})})})},t))})]})}i.Z.use([u.tl,u.W_])},1134:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var r=a(7437),s=a(8481),l=a(1786);function i(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(l.tq,{dir:"rtl",spaceBetween:30,centeredSlides:!0,autoplay:{delay:5500,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,modules:[s.pt,s.tl,s.W_],className:"mySwiper",children:[(0,r.jsx)(l.o5,{children:(0,r.jsx)("img",{src:"https://lzd-img-global.slatic.net/g/ot/homepage/64ca81166adca0b3a9c393ce3d0a86ab.png_760x760q80.png_.webp",alt:"عرض ترويجي للمنتجات",width:"100%",height:"100%"})}),(0,r.jsx)(l.o5,{children:(0,r.jsx)("img",{src:"https://lzd-img-global.slatic.net/g/ot/homepage/e47223931ffa90bd37c5e047950c45e2.png_760x760q80.png_.webp",alt:"تخفيضات على الأجهزة الإلكترونية",width:"100%",height:"100%"})}),(0,r.jsx)(l.o5,{children:(0,r.jsx)("img",{src:"https://lzd-img-global.slatic.net/g/ot/homepage/3feb7d42e7ca9002b41d34ba999dbdab.png_760x760q80.png_.webp",alt:"عروض خاصة على الأزياء",width:"100%",height:"100%"})})]})})}a(6978),a(7644),a(501)}}]);