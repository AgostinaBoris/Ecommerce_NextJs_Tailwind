(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{7607:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[slug]",function(){return t(6631)}])},1116:function(e,s,t){"use strict";t.d(s,{Z:function(){return j}});var n=t(5893),r=t(7294),i=t(9008),l=t.n(i),c=t(1664),a=t.n(c),d=t(2920),o=t(45),h=t(2331),x=t(1955),u=e=>{let{href:s,children:t,...r}=e;return(0,n.jsx)(a(),{href:s,...r,children:t})},m=t(3299);function j(e){let{title:s,children:t}=e,{status:i,data:c}=(0,m.useSession)(),{state:j,dispatch:f}=(0,r.useContext)(h.y),{cart:p}=j,[N,v]=(0,r.useState)(0);return(0,r.useEffect)(()=>{v(p.cartItems.reduce((e,s)=>e+s.quantity,0))},[p.cartItems]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:s?s+" -Sugar momma":"Sugar momma"}),(0,n.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(d.Ix,{position:"bottom-center",limit:1}),(0,n.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,n.jsx)("header",{children:(0,n.jsxs)("nav",{className:"flex h-12 items-center p-12 text-black text-xl shadow-2xl justify-between ",children:[(0,n.jsx)(a(),{href:"/",className:"text-2xl text-red-200 font-bold",children:"Sugar Momma"}),(0,n.jsxs)("div",{className:"flex px-12 text-gray-300 font-bold",children:[(0,n.jsx)(a(),{href:"/",className:"p-4",children:"Home"}),(0,n.jsx)(a(),{href:"/about",className:"p-4",children:"About"}),(0,n.jsxs)(a(),{href:"/cart",className:"p-4",children:["Cart",N>0&&(0,n.jsx)("div",{className:" flex ml-3 w-6 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:N})]}),"loading"===i?"Loading":(null==c?void 0:c.user)?(0,n.jsxs)(o.v,{as:"div",className:"relative mt-4 px-4 inline-block",children:[(0,n.jsx)(o.v.Button,{className:"text-red-600",children:c.user.name}),(0,n.jsxs)(o.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white shadow-lg",children:[(0,n.jsx)(o.v.Item,{children:(0,n.jsx)(u,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,n.jsx)(o.v.Item,{children:(0,n.jsx)(u,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),(0,n.jsx)(o.v.Item,{children:(0,n.jsx)(a(),{className:"dropdown-link",href:"#",onClick:()=>{x.Z.remove("cart"),f({type:"CART_RESET"}),(0,m.signOut)({callbbackUrl:"/login"})},children:"Logout"})})]})]}):(0,n.jsx)(a(),{href:"/login",className:"p-4",children:"Login"}),(0,n.jsx)(a(),{href:"/contact",className:"p-4",children:"Contact"})]})]})}),(0,n.jsx)("main",{className:"container m-auto mt-4 px-4",children:t}),(0,n.jsx)("footer",{children:"footer"})]})]})}t(1399)},6631:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return x},default:function(){return u}});var n=t(5893),r=t(1116),i=t(1664),l=t.n(i),c=t(7294),a=t(5675),d=t.n(a),o=t(1163),h=t(2331),x=!0;function u(e){let{product:s}=e,{state:t,dispatch:i}=(0,c.useContext)(h.y),a=(0,o.useRouter)();return s?(0,n.jsxs)(r.Z,{title:s.name,children:[(0,n.jsx)("div",{className:"py-2",children:(0,n.jsx)(l(),{href:"/",children:"back to products"})}),(0,n.jsxs)("div",{className:"grid md:grid-cols-4 md:gap-3",children:[(0,n.jsx)("div",{className:"md:col-span-2",children:(0,n.jsx)(d(),{src:s.image,alt:s.name,width:640,height:640})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("h1",{className:"text-lg",children:s.name})}),(0,n.jsxs)("li",{children:["Category: ",s.category]}),(0,n.jsxs)("li",{children:["Brand: ",s.brand]}),(0,n.jsxs)("li",{children:[s.rating," of ",s.numReviews," reviews"]}),(0,n.jsxs)("li",{children:["Description: ",s.description]})]})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"card p-5",children:[(0,n.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,n.jsx)("div",{children:"Price"}),(0,n.jsxs)("div",{children:["$",s.price]})]}),(0,n.jsxs)("div",{className:"mb-2 flex justify-between",children:[(0,n.jsx)("div",{children:"Status"}),(0,n.jsx)("div",{children:s.countInStock>0?"In Stock":"Unavailable"})]}),(0,n.jsx)("button",{className:"primary-button w-full",onClick:()=>{let e=t.cart.cartItems.find(e=>e.slug===s.slug),n=e?e.quantity+1:1;if(s.countInStock<n){alert("Sorry. Product is out of stock");return}i({type:"CART_ADD_ITEM",payload:{...s,quantity:n}}),a.push("/cart")},children:"Add to cart"})]})})]})]}):(0,n.jsx)(r.Z,{title:"Product Not Found",children:"Product Not Found"})}}},function(e){e.O(0,[912,675,774,888,179],function(){return e(e.s=7607)}),_N_E=e.O()}]);