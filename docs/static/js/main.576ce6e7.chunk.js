(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(c,e,n){},5:function(c,e,n){"use strict";n.r(e);var t=n(2),i=n(1),a=n.n(i),s=n(4),l=n.n(s),o=(n(10),n(0));function d(c){console.log("call App");var e=function(){return.4*((window.innerHeight-20)/8)},n=Object(i.useState)(e()),s=Object(t.a)(n,2),l=s[0],d=s[1],r=Object(i.useState)(0),j=Object(t.a)(r,2),b=j[0],u=j[1],h=Object(i.useState)("none"),O=Object(t.a)(h,2),v=O[0],x=O[1],f=Object(i.useState)("0"),m=Object(t.a)(f,2),k=m[0],C=m[1],p=Object(i.useState)("0"),N=Object(t.a)(p,2),w=N[0],g=N[1];console.log("isze ".concat(window.innerWidth," ").concat(window.innerHeight)),a.a.useEffect((function(){function c(){console.log("resze ".concat(window.innerWidth," ").concat(window.innerHeight)),d(e())}return window.addEventListener("resize",c),function(){window.removeEventListener("resize",c)}}));var y=function(){console.log("[doAction] ".concat(v," ").concat(b," ").concat(k," ").concat(w));var c=Number(w);return"+"==v||"+"==v?(u(b+c),C("".concat(b+c)),g("0")):"-"==v?(u(b-c),C("".concat(b-c)),g("0")):"*"==v?(u(b*c),C("".concat(b*c)),g("0")):"/"==v?(u(b/c),C("".concat(b/c)),g("0")):(u(c),C("".concat(b)),g("0")),c},S=function(c){switch(c){case"AC":console.log("AC"),u(0),C("0"),g("0");break;case"C":console.log("C"),C("0"),g("0");break;case"=":y(),x("none");break;case"+":y(),x(c);break;case"+/-":"0"==w?(C("0"),g("0")):w.startsWith("-")?(C(w.replace("-","")),g(w.replace("-",""))):(C("-"+w),g("-"+w));break;case"-":case"*":case"/":y(),x(c);break;case".":C(w+c),g(w+c);break;default:console.log("[call default] ".concat(v," ").concat(b," ").concat(k," ").concat(w)),"0"==w?(C(c),g(c)):(C(w+c),g(w+c))}};return Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsxs)("div",{className:"grid gap-4 items-center justify-items-center m-1",style:{gridTemplateColumns:"repeat(4, 1fr)",gridTemplateRows:"2fr repeat(5, 1fr)",width:"100%",height:"100vh",gap:"auto",fontSize:"".concat(l,"px")},children:[Object(o.jsx)("div",{className:"flex col-start-1 col-end-5 row-start-1 items-end justify-end h-full w-full bg-gray-900 text-white",children:Object(o.jsx)("div",{className:"",children:k})}),Object(o.jsx)("div",{className:"calc-button-b items-center justify-center",onClick:function(){S("AC")},children:Object(o.jsx)("div",{children:"AC"})}),Object(o.jsx)("div",{className:"calc-button-b",onClick:function(){S("C")},children:Object(o.jsx)("div",{children:"C"})}),Object(o.jsx)("div",{className:"calc-button-b",onClick:function(){S("+/-")},children:Object(o.jsx)("div",{children:"+/-"})}),Object(o.jsx)("div",{className:"calc-button-a",onClick:function(){S("/")},children:Object(o.jsx)("div",{children:"/"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("7")},children:Object(o.jsx)("div",{children:"7"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("8")},children:Object(o.jsx)("div",{children:"8"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("9")},children:Object(o.jsx)("div",{children:"9"})}),Object(o.jsx)("div",{className:"calc-button-a",onClick:function(){S("*")},children:Object(o.jsx)("div",{children:"*"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("4")},children:Object(o.jsx)("div",{children:"4"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("5")},children:Object(o.jsx)("div",{children:"5"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("6")},children:Object(o.jsx)("div",{children:"6"})}),Object(o.jsx)("div",{className:"calc-button-a",onClick:function(){S("-")},children:Object(o.jsx)("div",{children:"-"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("1")},children:Object(o.jsx)("div",{children:"1"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("2")},children:Object(o.jsx)("div",{children:"2"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S("3")},children:Object(o.jsx)("div",{children:"3"})}),Object(o.jsx)("div",{className:"calc-button-a",onClick:function(){S("+")},children:Object(o.jsx)("div",{children:"+"})}),Object(o.jsx)("div",{className:"col-span-2 calc-button-c",onClick:function(){S("0")},children:Object(o.jsx)("div",{children:"0"})}),Object(o.jsx)("div",{className:"calc-button-c",onClick:function(){S(".")},children:Object(o.jsx)("div",{children:"."})}),Object(o.jsx)("div",{className:"calc-button-a",onClick:function(){S("=")},children:Object(o.jsx)("div",{children:"="})})]})})}document.addEventListener("touchmove",(function(c){c.preventDefault()}),{passive:!1}),l.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[5,1,2]]]);
//# sourceMappingURL=main.576ce6e7.chunk.js.map