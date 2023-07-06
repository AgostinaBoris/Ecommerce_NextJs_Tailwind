(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{6429:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(4759)}])},1116:function(e,s,r){"use strict";r.d(s,{Z:function(){return f}});var t=r(5893),a=r(7294),n=r(9008),l=r.n(n),i=r(1664),c=r.n(i),o=r(2920),d=r(45),m=r(2331),u=r(1955),x=e=>{let{href:s,children:r,...a}=e;return(0,t.jsx)(c(),{href:s,...a,children:r})},h=r(3299);function f(e){let{title:s,children:r}=e,{status:n,data:i}=(0,h.useSession)(),{state:f,dispatch:j}=(0,a.useContext)(m.y),{cart:p}=f,[g,N]=(0,a.useState)(0);return(0,a.useEffect)(()=>{N(p.cartItems.reduce((e,s)=>e+s.quantity,0))},[p.cartItems]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l(),{children:[(0,t.jsx)("title",{children:s?s+" -Sugar momma":"Sugar momma"}),(0,t.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(o.Ix,{position:"bottom-center",limit:1}),(0,t.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,t.jsx)("header",{children:(0,t.jsxs)("nav",{className:"flex h-12 items-center p-12 text-black text-xl shadow-2xl justify-between ",children:[(0,t.jsx)(c(),{href:"/",className:"text-2xl text-red-200 font-bold",children:"Sugar Momma"}),(0,t.jsxs)("div",{className:"flex px-12 text-gray-300 font-bold",children:[(0,t.jsx)(c(),{href:"/",className:"p-4",children:"Home"}),(0,t.jsx)(c(),{href:"/about",className:"p-4",children:"About"}),(0,t.jsxs)(c(),{href:"/cart",className:"p-4",children:["Cart",g>0&&(0,t.jsx)("div",{className:" flex ml-3 w-6 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:g})]}),"loading"===n?"Loading":(null==i?void 0:i.user)?(0,t.jsxs)(d.v,{as:"div",className:"relative mt-4 px-4 inline-block",children:[(0,t.jsx)(d.v.Button,{className:"text-red-600",children:i.user.name}),(0,t.jsxs)(d.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white shadow-lg",children:[(0,t.jsx)(d.v.Item,{children:(0,t.jsx)(x,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,t.jsx)(d.v.Item,{children:(0,t.jsx)(x,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,t.jsx)(d.v.Item,{children:(0,t.jsx)(c(),{className:"dropdown-link",href:"#",onClick:()=>{u.Z.remove("cart"),j({type:"CART_RESET"}),(0,h.signOut)({callbbackUrl:"/login"})},children:"Logout"})})]})]}):(0,t.jsx)(c(),{href:"/login",className:"p-4",children:"Login"}),(0,t.jsx)(c(),{href:"/contact",className:"p-4",children:"Contact"})]})]})}),(0,t.jsx)("main",{className:"container m-auto mt-4 px-4",children:r}),(0,t.jsx)("footer",{children:"footer"})]})]})}r(1399)},4759:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return x}});var t=r(5893),a=r(1664),n=r.n(a),l=r(7294),i=r(3299),c=r(7536),o=r(1116),d=r(9998),m=r(2920),u=r(1163);function x(){let{data:e}=(0,i.useSession)(),s=(0,u.useRouter)(),{redirect:r}=s.query;(0,l.useEffect)(()=>{(null==e?void 0:e.user)&&s.push(r||"/")},[s,e,r]);let{handleSubmit:a,register:x,formState:{errors:h}}=(0,c.cI)(),f=async e=>{let{email:s,password:r}=e;try{let e=await (0,i.signIn)("credentials",{redirect:!1,email:s,password:r});e.error&&m.Am.error(e.error)}catch(e){m.Am.error((0,d.b)(e))}};return(0,t.jsx)(o.Z,{title:"Login",children:(0,t.jsxs)("form",{className:"mx-auto max-w-screen-md",onSubmit:a(f),children:[(0,t.jsx)("h1",{className:"flex mb-4 py-8 my-4 justify-center bg-red-500 text-white text-3xl",children:"Login"}),(0,t.jsxs)("div",{className:"mb-4 my-8",children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{type:"email",...x("email",{required:"Please enter email",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,message:"Please enter valid email"}}),className:"w-full",id:"email",autoFocus:!0}),h.email&&(0,t.jsx)("div",{className:"text-red-500",children:h.email.message})]}),(0,t.jsxs)("div",{className:"mb-4 my-8",children:[(0,t.jsx)("label",{htmlFor:"password",children:"Password"}),(0,t.jsx)("input",{type:"password",...x("password",{required:"Please enter password",minLength:{value:6,message:"password is more than 5 chars"}}),className:"w-full",id:"password",autoFocus:!0}),h.password&&(0,t.jsx)("div",{className:"text-red-500 ",children:h.password.message})]}),(0,t.jsx)("div",{className:" mb-4 my-8",children:(0,t.jsx)("button",{className:"primary-button",children:"Login"})}),(0,t.jsxs)("div",{className:"mb-4",children:["Don't have an account? \xa0",(0,t.jsx)(n(),{href:"/register?redirect=".concat(r||"/"),children:"Register"})]})]})})}},9998:function(e,s,r){"use strict";r.d(s,{b:function(){return t}});let t=e=>e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},function(e){e.O(0,[912,536,774,888,179],function(){return e(e.s=6429)}),_N_E=e.O()}]);