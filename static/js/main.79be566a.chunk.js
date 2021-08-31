(this["webpackJsonpsweet-bakery"]=this["webpackJsonpsweet-bakery"]||[]).push([[0],{27:function(e,n,t){e.exports={openModal:"Modal_openModal__1njJq",closeModal:"Modal_closeModal__3-6HS"}},34:function(e,n,t){e.exports={loader:"Loader_loader__atRRs",rotation:"Loader_rotation__2WuFc"}},42:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),r=t(21),i=t.n(r),o=t(29),s=t(13),d=t(6),l=t(16),u=t(30),p=t(4),j="OPEN_MENU",b="CLOSE_MENU",x="OPEN_BASKET",h="CLOSE_BASKET",O="GET_ALL_PASTRY",f="ADD_PASTRY_TO_BASKET",m="COUNT_TOTAL",v="GET_COUNT",g="GET_PASTRY_VALUE",y="SET_PASTRY_VALUE",w="EDIT_PASTRY_VALUE",k="DELETE_PASTRY",E="OPEN_CREATE_PASTRY_MODAL",T="CLOSE_CREATE_PASTRY_MODAL",S="EDIT_INPUT_VALUE",C="EDIT_CHECKBOX_VALUE",M="ADD_NEW_ITEM",_="SHOW_LOADER",A="HIDE_LOADER",P={isOpenMenu:!1,isOpenBasket:!1};var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,n=arguments.length>1?arguments[1]:void 0,t=n.type;switch(t){case j:return Object(p.a)(Object(p.a)({},e),{},{isOpenMenu:!0});case b:return Object(p.a)(Object(p.a)({},e),{},{isOpenMenu:!1});case x:return Object(p.a)(Object(p.a)({},e),{},{isOpenBasket:!0});case h:return Object(p.a)(Object(p.a)({},e),{},{isOpenBasket:!1});default:return e}},z={isOpenCreatePastryModal:!1,bodyOverflowHidden:!1};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,n=arguments.length>1?arguments[1]:void 0,t=n.type;switch(t){case E:return Object(p.a)(Object(p.a)({},e),{},{isOpenCreatePastryModal:!0,bodyOverflowHidden:!0});case T:return Object(p.a)(Object(p.a)({},e),{},{isOpenCreatePastryModal:!1,bodyOverflowHidden:!1});default:return e}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1?arguments[1]:void 0,t=n.type;switch(t){case _:return!0;case A:return!1;default:return e}},I=Object(l.combineReducers)({navigation:D,modals:B,loader:N}),V=t(19),L={basket:[],total:0,count:0};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case f:var c=Object(V.a)(e.basket),r=c.find((function(e){return e.id===a.id}));return r?(r.inStock+=1,r.cost=Math.round(a.cost*r.inStock*100)/100):c.push(a),Object(p.a)(Object(p.a)({},e),{},{basket:c});case m:var i=Object(V.a)(e.basket),o=0;return i.forEach((function(e){o+=e.cost})),o=Math.round(100*o)/100,Object(p.a)(Object(p.a)({},e),{},{total:o});case v:var s=Object(V.a)(e.basket),d=0;return s.forEach((function(e){d+=e.inStock})),Object(p.a)(Object(p.a)({},e),{},{count:d});default:return e}},U={changedValue:"",changedInput:{}};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case g:return Object(p.a)(Object(p.a)({},e),{},{changedValue:a.value,changedInput:a.type});case y:return Object(p.a)(Object(p.a)({},e),{},{changedValue:a});case w:return Object(p.a)(Object(p.a)({},e),{},{changedInput:{type:"edit"}});case k:return Object(p.a)(Object(p.a)({},e),{},{changedInput:{type:"delete"}});default:return e}},Y=t(14),G={formData:[{id:Object(Y.a)(),elementType:"input",placeholder:"Name",name:"name",value:""},{id:Object(Y.a)(),elementType:"input",placeholder:"Image url",name:"image",value:""},{id:Object(Y.a)(),elementType:"input",placeholder:"Ingredients",name:"ingredients",value:""},{id:Object(Y.a)(),elementType:"input",placeholder:"In stock",type:"number",name:"inStock",value:""},{id:Object(Y.a)(),elementType:"input",placeholder:"Cost",type:"number",name:"cost",value:""},{id:Object(Y.a)(),elementType:"checkbox",title:"Has delivery?",name:"hasDelivery",checked:!1},{id:Object(Y.a)(),elementType:"subtitle",title:"Address"},{id:Object(Y.a)(),elementType:"input",placeholder:"Street",name:"street",value:""},{id:Object(Y.a)(),elementType:"input",placeholder:"House number",type:"number",name:"house",value:""}],formError:""};var J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case S:var c=Object(V.a)(e.formData),r=c.find((function(e){return e.name===a.name}));return r&&(r.value=a.value),Object(p.a)(Object(p.a)({},e),{},{formData:c});case C:var i=Object(V.a)(e.formData),o=i.find((function(e){return e.name===a.name}));return o&&(o.checked=a.checked),Object(p.a)(Object(p.a)({},e),{},{formData:i});case M:if(!a){var s=e.formData.map((function(e){return Object(p.a)(Object(p.a)({},e),{},{value:""})}));return Object(p.a)(Object(p.a)({},e),{},{formData:s,formError:""})}return Object(p.a)(Object(p.a)({},e),{},{formError:a});default:return e}};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case O:return a;default:return e}},W=Object(l.combineReducers)({pastry:K,form:J,basket:R,editPastry:H,app:I}),X=t(2),$=(t(42),t(3)),F=t.p+"static/media/burger.56bc903d.svg",q=t.p+"static/media/basket.2b71940e.svg",Q=t.p+"static/media/SweetBakery.0186f892.svg";function Z(){return{type:b}}function ee(){return{type:h}}function ne(){return{type:T}}var te,ae,ce,re,ie,oe,se,de=t.p+"static/media/close.d4259eda.svg",le=t(7),ue=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return"\n  column-gap: ".concat(e,";\n  -webkit-column-gap: ").concat(e,";\n  -o-column-gap: ").concat(e,";\n  -moz-column-gap: ").concat(e,";\n  -ms-column-gap: ").concat(e,";\n  row-gap: ").concat(n,";\n  -webkit-row-gap: ").concat(n,";\n  -o-row-gap: ").concat(n,";\n  -moz-row-gap: ").concat(n,";\n  -ms-row-gap: ").concat(n,";\n")},pe=function(){return"\n  width: 316px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  position: fixed;\n  top: 0;\n  z-index: 10;\n  transition: transform 0.5s;\n"},je=function(){return"\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 0.3s;\n  &:hover{\n    transform: rotate(90deg);\n  }\n"},be=function(){return"\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n"},xe=t(0),he=$.a.div(te||(te=Object(X.a)(["\n  ","\n  padding: 29px 0 73px;\n  left: 0;\n  font-size: 18px;\n  background: var(--main-white);\n  box-shadow: 4px 4px 10px var(--main-shadow-black);\n  transform: translateX(-110%);\n"])),pe),Oe=$.a.button(ae||(ae=Object(X.a)(["\n  ","\n  margin: 0 29px 60px auto;\n"])),je),fe=$.a.nav(ce||(ce=Object(X.a)(["\n  ","\n  padding: 0 62px;\n"])),be),me=$.a.div(re||(re=Object(X.a)(["\n  margin: 0 0 76px;\n  display: flex;\n  flex-flow: column;\n  ","\n"])),ue("18px")),ve=$.a.a(ie||(ie=Object(X.a)(["\n  color: var(--main-black);\n  font-weight: 700;\n  &:hover{\n    text-decoration: underline;\n  }\n"]))),ge=$.a.div(oe||(oe=Object(X.a)(["\n  width: 170px;\n"]))),ye=$.a.div(se||(se=Object(X.a)(["\n  margin: auto 0 0;\n  text-align: center;\n  &>a{\n    color: var(--main-blue);\n    font-size: 16px;\n    font-weight: 700;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n"])));var we,ke,Ee,Te={closeMenu:Z},Se=Object(d.b)((function(e){return{isOpenMenu:e.app.navigation.isOpenMenu}}),Te)(Object(le.g)((function(e){var n=e.isOpenMenu,t=e.closeMenu,a=e.location;return Object(xe.jsxs)(he,{style:n?{transform:"translateX(0)"}:{},children:[Object(xe.jsx)(Oe,{onClick:t,children:Object(xe.jsx)("img",{src:de,alt:"Close"})}),Object(xe.jsxs)(fe,{children:[Object(xe.jsxs)(me,{children:[Object(xe.jsx)("div",{children:"Contact us"}),Object(xe.jsx)(ve,{href:"tel:+11478344778999",children:"+11 4783 4477 8999"})]}),Object(xe.jsx)(ge,{children:"Our delivery working from 09:00 to 23:00"}),Object(xe.jsx)(ye,{children:"/admin"!==a.pathname?Object(xe.jsx)(s.b,{to:"/admin",children:"Go to admin page"}):Object(xe.jsx)(s.b,{to:"/",children:"Go to main page"})})]})]})}))),Ce=t.p+"static/media/close-white.c6c8f39f.svg",Me=$.a.li(we||(we=Object(X.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),_e=$.a.div(ke||(ke=Object(X.a)(["\n  max-width: 150px;\n"]))),Ae=$.a.div(Ee||(Ee=Object(X.a)(["\n  font-size: 18px;\n  font-weight: 700;\n"])));var Pe,De,ze,Be=function(e){var n=e.name,t=e.inStock,a=e.cost;return Object(xe.jsxs)(Me,{children:[Object(xe.jsxs)(_e,{children:[n,Object(xe.jsx)("br",{}),t," items"]}),Object(xe.jsxs)(Ae,{children:["$ ",a]})]})},Ne=$.a.ul(Pe||(Pe=Object(X.a)(["\n  display: flex;\n  flex-flow: column;\n  ","\n"])),ue("29px")),Ie=$.a.hr(De||(De=Object(X.a)(["\n  width: 100%;\n  height: 1px;\n  margin: 36px 0 17px;\n  background: var(--main-white);\n"]))),Ve=$.a.div(ze||(ze=Object(X.a)(["\n  display: flex;\n  justify-content: space-between;\n  font-size: 18px;\n  font-weight: 700;\n"])));var Le,Re,Ue,He,Ye=Object(d.b)((function(e){return{basket:e.basket.basket,total:e.basket.total}}))((function(e){var n=e.basket,t=e.total;return Object(xe.jsxs)("div",{children:[Object(xe.jsx)(Ne,{children:n.map((function(e){var n=e.id,t=e.name,a=e.inStock,c=e.cost;return Object(xe.jsx)(Be,{name:t,inStock:a,cost:c},n)}))}),Object(xe.jsx)(Ie,{}),Object(xe.jsxs)(Ve,{children:[Object(xe.jsx)("span",{children:"Total:"}),Object(xe.jsxs)("span",{children:["$ ",t]})]})]})})),Ge=$.a.div(Le||(Le=Object(X.a)(["\n  ","\n  padding: 35px 0 50px;\n  right: 0;\n  color: var(--main-white);\n  background: var(--main-purple);\n  box-shadow: -4px 4px 10px var(--main-shadow-black);\n  transform: translateX(110%);\n"])),pe),Je=$.a.button(Re||(Re=Object(X.a)(["\n  ","\n  margin: 0 auto 36px 27px;\n"])),je),Ke=$.a.nav(Ue||(Ue=Object(X.a)(["\n  ","\n  padding: 0 35px;\n"])),be),We=$.a.div(He||(He=Object(X.a)(["\n  text-align: center;\n"])));var Xe,$e,Fe,qe,Qe,Ze,en,nn={closeBasket:ee},tn=Object(d.b)((function(e){return{isOpenBasket:e.app.navigation.isOpenBasket,count:e.basket.count}}),nn)((function(e){var n=e.isOpenBasket,t=e.closeBasket,a=e.count;return Object(xe.jsxs)(Ge,{style:n?{transform:"translateX(0)"}:{},children:[Object(xe.jsx)(Je,{onClick:t,children:Object(xe.jsx)("img",{src:Ce,alt:"Close"})}),Object(xe.jsx)(Ke,{children:a?Object(xe.jsx)(Ye,{}):Object(xe.jsx)(We,{children:"Cart  is  empty"})})]})})),an=$.a.header(Xe||(Xe=Object(X.a)(["\n  width: 100%;\n  height: 101px;\n  margin: 0 0 105px;\n  background: var(--main-purple);\n  @media screen and (max-width: 610px){\n    &{\n      height: 75px;\n    }\n  }\n"]))),cn=$.a.div($e||($e=Object(X.a)(["\n  height: 100%;\n  padding: 0 45px 0 73px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  @media screen and (max-width: 610px){\n    &{\n      padding: 0 16px 0 18px;\n    }\n  }\n"]))),rn=$.a.button(Fe||(Fe=Object(X.a)(["\n  @media screen and (max-width: 610px){\n    &{\n      margin: 0 27px 0 0;\n    }\n  }\n"]))),on=$.a.button(qe||(qe=Object(X.a)(["\n  width: 53px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),sn=$.a.img(Qe||(Qe=Object(X.a)(["\n  height: 55px;\n  @media screen and (max-width: 610px){\n    &{\n      height: 42px;\n    }\n  }\n"]))),dn=$.a.span(Ze||(Ze=Object(X.a)(["\n  color: var(--main-white);\n  font-size: 18px;\n  font-weight: 700;\n"]))),ln=$.a.div(en||(en=Object(X.a)(["\n  color: var(--main-white);\n  font-size: 18px;\n  font-weight: 700;\n"])));var un,pn={openMenu:function(){return function(e){e({type:j}),e(ee())}},openBasket:function(){return function(e){e({type:x}),e(Z())}}},jn=Object(d.b)((function(e){return{count:e.basket.count}}),pn)(Object(le.g)((function(e){var n=e.openMenu,t=e.openBasket,a=e.count,c=e.location;return Object(xe.jsx)(an,{children:Object(xe.jsxs)(cn,{children:[Object(xe.jsx)(rn,{onClick:n,children:Object(xe.jsx)("img",{src:F,alt:"Menu"})}),Object(xe.jsx)(Se,{}),Object(xe.jsx)(s.b,{to:"/",children:Object(xe.jsx)(sn,{src:Q,alt:"Sweet Bakery"})}),"/admin"!==c.pathname?Object(xe.jsxs)(on,{onClick:t,children:[Object(xe.jsx)("img",{src:q,alt:"Basket"}),Object(xe.jsx)(dn,{children:a})]}):Object(xe.jsx)(ln,{children:"admin  page"}),Object(xe.jsx)(tn,{})]})})}))),bn=$.a.h1(un||(un=Object(X.a)(["\n  text-align: center;\n  margin: 0 0 28px;\n  font-size: 28px;\n"])));var xn=function(){return Object(xe.jsx)(bn,{children:"Avaliable sweets"})},hn=t(22),On=t(8),fn=t.n(On),mn=t(15),vn="http://localhost:1717/pastry";function gn(){return function(){var e=Object(mn.a)(fn.a.mark((function e(n){var t,a;return fn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:_}),e.next=3,fetch("".concat(vn));case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n({type:O,payload:a}),n({type:A});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}var yn,wn=t.p+"static/media/edit.ff3cbc0a.svg",kn=t.p+"static/media/plus.a952e908.svg",En=t.p+"static/media/minus.03f3dcd9.svg",Tn=t.p+"static/media/delete.4db00560.svg",Sn=t.p+"static/media/save.3c4726c9.svg",Cn=$.a.input(yn||(yn=Object(X.a)(["\n  width: 202px;\n  height: 30px;\n  padding: 4px 9px;\n  background: var(--main-white);\n  border: 1px solid var(--main-purple);\n"])));var Mn,_n,An,Pn,Dn,zn,Bn=function(e){return Object(xe.jsx)(Cn,Object(p.a)({},e))},Nn=$.a.li(Mn||(Mn=Object(X.a)(["\n  width: 100%;\n  height: 62px;\n  padding: 0 19px 0 35px;\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  background: var(--main-bg-grey);\n"]))),In=$.a.h3(_n||(_n=Object(X.a)(["\n  width: 45%;\n  display: flex;\n  align-items: center;\n  &>button{\n    margin: 0 0 0 20px;\n  }\n"]))),Vn=$.a.button(An||(An=Object(X.a)(["\n  width: 24px;\n  height: 24px;\n"]))),Ln=$.a.div(Pn||(Pn=Object(X.a)(["\n  width: 25%;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n"]))),Rn=$.a.h5(Dn||(Dn=Object(X.a)(["\n  margin: 0 0 0 16px;\n  font-size: 18px;\n  &>button{\n    margin: 0 0 0 18px;\n  }\n"]))),Un=$.a.h5(zn||(zn=Object(X.a)(["\n  width: 75px;\n  display: flex;\n  margin: 0 48px 0 17px;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 18px;\n"])));var Hn,Yn={getValue:function(e,n){return function(){var t=Object(mn.a)(fn.a.mark((function t(a){var c,r;return fn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(vn,"/detail/").concat(e));case 2:return c=t.sent,t.next=5,c.json();case 5:r=t.sent,a({type:g,payload:{value:r[n],type:{id:r.id,type:n}}});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setValue:function(e){return{type:y,payload:e}},editValue:function(e,n,t){return function(){var a=Object(mn.a)(fn.a.mark((function a(c){return fn.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("".concat(vn,"/update/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(hn.a)({},n,"cost"===n?Number(t)>0?Number(t):.01:"inStock"===n?Number(t)>0?Number(t):0:t))});case 2:c({type:w});case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},deletePasty:function(e){return function(){var n=Object(mn.a)(fn.a.mark((function n(t){return fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(vn,"/delete/").concat(e),{method:"DELETE"});case 2:t({type:k});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},Gn=Object(d.b)((function(e){return{changedValue:e.editPastry.changedValue,changedInput:e.editPastry.changedInput}}),Yn)((function(e){var n=e.id,t=e.name,a=e.inStock,c=e.cost,r=e.getValue,i=e.setValue,o=e.changedValue,s=e.changedInput,d=e.editValue,l=e.deletePasty;function u(e){r(n,e)}function p(e,t){d(n,t,e)}function j(e){i(e.target.value)}return Object(xe.jsxs)(Nn,{children:["name"===s.type&&s.id===n?Object(xe.jsxs)(In,{children:[Object(xe.jsx)(Bn,{type:"text",value:o||"",onChange:j}),Object(xe.jsx)(Vn,{onClick:function(){return p(o,s.type)},children:Object(xe.jsx)("img",{src:Sn,alt:"Save"})})]}):Object(xe.jsxs)(In,{children:[t,Object(xe.jsx)(Vn,{onClick:function(){return u("name")},children:Object(xe.jsx)("img",{src:wn,alt:"Edit"})})]}),Object(xe.jsxs)(Ln,{children:["price:","cost"===s.type&&s.id===n?Object(xe.jsxs)(Rn,{children:[Object(xe.jsx)(Bn,{type:"number",value:o,onChange:j,style:{width:"70px"}}),Object(xe.jsx)(Vn,{onClick:function(){return p(o,s.type)},children:Object(xe.jsx)("img",{src:Sn,alt:"Save"})})]}):Object(xe.jsxs)(Rn,{children:["$ ",c,Object(xe.jsx)(Vn,{onClick:function(){return u("cost")},children:Object(xe.jsx)("img",{src:wn,alt:"Edit"})})]})]}),Object(xe.jsxs)(Ln,{children:["in stock:",Object(xe.jsxs)(Un,{children:[Object(xe.jsx)(Vn,{onClick:function(){return p(a-1,"inStock")},children:Object(xe.jsx)("img",{src:En,alt:"Remove"})}),a,Object(xe.jsx)(Vn,{onClick:function(){return p(a+1,"inStock")},children:Object(xe.jsx)("img",{src:kn,alt:"Add"})})]})]}),Object(xe.jsx)(Vn,{onClick:function(){l(n)},children:Object(xe.jsx)("img",{src:Tn,alt:"Delete"})})]})})),Jn=$.a.div(Hn||(Hn=Object(X.a)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n"])));var Kn,Wn=function(){return Object(xe.jsx)(Jn,{children:"Sweets out of stock"})},Xn=$.a.ul(Kn||(Kn=Object(X.a)(["\n  margin: 0 0 36px;\n  display: flex;\n  flex-flow: column;\n  ","\n"])),ue("7px"));var $n,Fn={getAllPastry:gn},qn=Object(d.b)((function(e){return{pastry:e.pastry}}),Fn)((function(e){var n=e.pastry,t=e.getAllPastry;return Object(a.useEffect)((function(){t()}),[t]),Object(xe.jsx)(Xn,{children:n.length?n.map((function(e){var n=e.id,t=e.name,a=e.inStock,c=e.cost;return Object(xe.jsx)(Gn,{id:n,name:t,inStock:a,cost:c},n)})):Object(xe.jsx)(Wn,{})})})),Qn=$.a.button($n||($n=Object(X.a)(["\n  width: 257px;\n  height: 56px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--main-white);\n  font-size: 20px;\n  background: var(--main-purple);\n  transition: background 0.3s;\n  &:hover{\n    background: var(--main-dark-purple);\n  }\n"])));var Zn,et,nt=function(e){return Object(xe.jsx)(Qn,Object(p.a)(Object(p.a)({},e),{},{children:e.children}))},tt=t(27),at=t.n(tt),ct=$.a.div(Zn||(Zn=Object(X.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 100px 0;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: var(--main-dark-bg);\n  z-index: 100;\n  overflow-y: auto;\n  transition: visibility 0.3s, opacity 0.3s;\n"]))),rt=$.a.div(et||(et=Object(X.a)(["\n  max-width: 468px;\n  width: 100%;\n  height: min-content;\n  padding: 55px 62px 60px;\n  background: var(--main-bg-grey);\n"])));var it=function(e){return Object(xe.jsx)(ct,{onClick:function(n){return n.target===n.currentTarget?e.closeModal():""},className:e.isOpenModal?at.a.openModal:at.a.closeModal,children:Object(xe.jsx)(rt,{children:e.children})})},ot=t(34),st=t.n(ot);var dt,lt,ut,pt=Object(d.b)((function(e){return{loader:e.app.loader}}))((function(e){var n=e.loader;return Object(xe.jsx)("div",{className:st.a.loader,style:n?{display:"block"}:{display:"none"}})})),jt=t.p+"static/media/check.c0293c05.svg",bt=$.a.div(dt||(dt=Object(X.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  ","\n"])),ue("15px")),xt=$.a.label(lt||(lt=Object(X.a)(["\n  width: 20px;\n  height: 20px;\n  position: relative;\n  background: var(--main-white);\n  border: 1px solid var(--main-border-grey);\n  cursor: pointer;\n"]))),ht=$.a.input(ut||(ut=Object(X.a)(["\n  display: none;\n  &:checked+label{\n    background: var(--main-purple);\n    background-image: url(",");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 14px;\n  }\n"])),jt);var Ot,ft=function(e){var n=e.id,t=e.name,a=e.checked,c=e.toggleCheckbox,r=e.title;return Object(xe.jsxs)(bt,{children:[Object(xe.jsx)("h5",{children:r}),Object(xe.jsx)(ht,{id:n,name:t,type:"checkbox",checked:a,onChange:c}),Object(xe.jsx)(xt,{htmlFor:n})]})},mt=$.a.h6(Ot||(Ot=Object(X.a)(["\n  margin: 15px 0 -4px;\n"])));var vt,gt=function(e){return Object(xe.jsx)(mt,{children:e.children})},yt=$.a.input(vt||(vt=Object(X.a)(["\n  width: 100%;\n  padding: 6px 10px;\n  background: var(--main-white);\n  border: 1px solid var(--main-border-grey);\n"])));var wt,kt,Et,Tt=function(e){var n=e.name,t=e.placeholder,a=e.type,c=e.value,r=e.editInputValue;return Object(xe.jsx)(yt,{name:n,placeholder:t,type:a,value:c,onChange:r})},St=$.a.form(wt||(wt=Object(X.a)(["\n  display: flex;\n  flex-flow: column;\n  ","\n"])),ue("14px")),Ct=$.a.h4(kt||(kt=Object(X.a)(["\n  margin: 0 0 16px;\n  font-size: 20px;\n  text-align: center;\n"]))),Mt=$.a.div(Et||(Et=Object(X.a)(["\n  margin: 10px 0;\n  color: var(--main-red);\n  text-align: center;\n"])));var _t={editValue:function(e,n){return{type:S,payload:{name:e,value:n}}},editCheckbox:function(e,n){return{type:C,payload:{name:e,checked:n}}},addNewItem:function(e){return function(){var n=Object(mn.a)(fn.a.mark((function n(t){var a,c;return fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((e=e.filter((function(e){return void 0!==e}))).forEach((function(e){void 0!==e.value&&""===e.value&&(a="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f!")})),c=e.reduce((function(e,n){return"house"===n.name||"inStock"===n.name||"cost"===n.name?(e[n.name]=Number(n.value),e[n.name]<0&&(a="\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ".concat(n.name," \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043d\u0438\u0436\u0435 \u043d\u0443\u043b\u044f"))):"ingredients"===n.name?e[n.name]=n.value.split(", "):e[n.name]=n.value,e}),{}),a){n.next=8;break}return n.next=6,fetch("".concat(vn,"/create"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:c.name,image:c.image,ingredients:c.ingredients,inStock:c.inStock,cost:c.cost,hasDelivery:c.hasDelivery,address:{street:c.street,houseNumber:c.house}})});case 6:t({type:M,payload:a}),t(ne());case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}},At=Object(d.b)((function(e){return{formData:e.form.formData,error:e.form.formError}}),_t)((function(e){var n=e.title,t=e.formData,a=e.editValue,c=e.editCheckbox,r=e.addNewItem,i=e.error;function o(e){a(e.target.name,e.target.value)}function s(e){c(e.target.name,e.target.checked)}return Object(xe.jsxs)(St,{onSubmit:function(e){e.preventDefault();var n=t.map((function(e){return"input"===e.elementType?{name:e.name,value:e.value}:"checkbox"===e.elementType?{name:e.name,value:e.checked}:void 0}));r(n)},children:[Object(xe.jsx)(Ct,{children:n}),t&&t.length?t.map((function(e){return"input"===e.elementType?Object(xe.jsx)(Tt,{placeholder:e.placeholder,name:e.name,value:e.value,type:e.type,editInputValue:o},e.id):"checkbox"===e.elementType?Object(xe.jsx)(ft,{id:e.id,name:e.name,title:e.title,checked:e.checked,toggleCheckbox:s},e.id):"subtitle"===e.elementType?Object(xe.jsx)(gt,{children:e.title},e.id):""})):"",Object(xe.jsx)(Mt,{children:i}),Object(xe.jsx)(nt,{type:"submit",children:"Add new item"})]})}));var Pt,Dt,zt,Bt={openModal:function(){return{type:E}},closeModal:ne},Nt=Object(d.b)((function(e){return{isOpenModal:e.app.modals.isOpenCreatePastryModal}}),Bt)((function(e){var n=e.isOpenModal,t=e.openModal,a=e.closeModal;return Object(xe.jsxs)("div",{children:[Object(xe.jsx)(xn,{}),Object(xe.jsx)(qn,{}),Object(xe.jsx)(pt,{}),Object(xe.jsx)(nt,{onClick:t,children:"Add new shop item"}),Object(xe.jsx)(it,{closeModal:a,isOpenModal:n,children:Object(xe.jsx)(At,{title:"Create new item in shop"})})]})})),It=$.a.div(Pt||(Pt=Object(X.a)(["\n  display: flex;\n  flex-flow: column;\n  ","\n"])),ue("40px")),Vt=$.a.h1(Dt||(Dt=Object(X.a)(["\n  font-size: 48px;\n  font-weight: 700;\n"]))),Lt=$.a.h1(zt||(zt=Object(X.a)(["\n  font-size: 20px;\n  & a{\n    color: var(--main-blue);\n    font-weight: 700;\n    &:hover{\n      text-decoration: underline;\n    }\n  }\n"])));var Rt=function(e){var n=e.errorCode,t=e.body;return Object(xe.jsxs)(It,{children:[Object(xe.jsxs)(Vt,{children:[n," error"]}),Object(xe.jsxs)(Lt,{children:[Object(xe.jsx)("b",{children:"Error:"})," ",t()]})]})};var Ut,Ht,Yt,Gt,Jt,Kt,Wt,Xt=function(){return Object(xe.jsx)("div",{children:Object(xe.jsx)(Rt,{errorCode:"404",body:function(){return Object(xe.jsxs)("span",{children:["Page not found. Go to ",Object(xe.jsx)(s.b,{to:"/",children:"main page"})]})}})})},$t=$.a.li(Ut||(Ut=Object(X.a)(["\n  width: 257px;\n  height: 445px;\n  padding: 13px;\n  display: flex;\n  flex-flow: column;\n  ","\n  background: var(--main-bg-grey);\n  @media screen and (max-width: 610px){\n    &{\n      width: 325px;\n      height: 520px;\n      ","\n    }\n  }\n"])),ue("12px"),ue("15px")),Ft=$.a.img(Ht||(Ht=Object(X.a)(["\n  width: 100%;\n  height: 230px;\n  object-fit: cover;\n  object-position: center;\n  @media screen and (max-width: 610px){\n    &{\n      height: 290px;\n    }\n  }\n"]))),qt=$.a.div(Yt||(Yt=Object(X.a)(["\n  display: flex;\n  flex-flow: column;\n  ","\n  @media screen and (max-width: 610px){\n    &{\n      ","\n    }\n  }\n"])),ue("11px"),ue("14px")),Qt=$.a.h3(Gt||(Gt=Object(X.a)(["\n  font-size: 18px;\n  font-weight: 500;\n  white-space: no-wrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n"]))),Zt=$.a.p(Jt||(Jt=Object(X.a)(["\n  margin: 0 0 1px;\n  font-size: 14px;\n  @media screen and (max-width: 610px){\n    &{\n      margin: 0 0 4px;\n    }\n  }\n"]))),ea=$.a.div(Kt||(Kt=Object(X.a)(["\n  font-size: 18px;\n  font-weight: 700;\n"]))),na=$.a.button(Wt||(Wt=Object(X.a)(["\n  width: 100%;\n  height: 30px;\n  margin: auto 0 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--main-white);\n  font-size: 14px;\n  font-weight: 700;\n  background: var(--main-purple);\n  transition: background 0.3s;\n  &:hover{\n    background: var(--main-dark-purple);\n  }\n"])));var ta,aa={addToBasket:function(e){return function(){var n=Object(mn.a)(fn.a.mark((function n(t){var a,c,r;return fn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(vn,"/detail/").concat(e));case 2:return a=n.sent,n.next=5,a.json();case 5:return c=n.sent,r={id:c.id,name:c.name,inStock:1,cost:c.cost},n.next=9,fetch("".concat(vn,"/update/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({inStock:c.inStock<0?0:c.inStock-1})});case 9:t({type:f,payload:r}),t({type:m}),t({type:v,payload:c.cost});case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getAllPastry:gn},ca=Object(d.b)(null,aa)((function(e){var n=e.id,t=e.name,a=e.image,c=e.ingredients,r=e.inStock,i=e.cost,o=e.addToBasket;return e.getAllPastry,Object(xe.jsxs)($t,{children:[Object(xe.jsx)(Ft,{src:a}),Object(xe.jsxs)(qt,{children:[Object(xe.jsx)(Qt,{children:t}),Object(xe.jsx)(Zt,{children:c.join(", ")}),Object(xe.jsxs)(ea,{children:["$",i]})]}),Object(xe.jsx)(na,{style:r<=0?{background:"var(--main-grey)"}:{},disabled:r<=0,onClick:function(){return o(n)},children:r<=0?"Not avaliable":"Add to cart"})]})})),ra=$.a.ul(ta||(ta=Object(X.a)(["\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n  ","\n"])),ue("26px","28px"));var ia={getAllPastry:gn},oa=Object(d.b)((function(e){return{pastry:e.pastry}}),ia)((function(e){var n=e.pastry,t=e.getAllPastry;return Object(a.useEffect)((function(){t()}),[t]),Object(xe.jsx)(ra,{children:n.length?n.map((function(e){return Object(xe.jsx)(ca,Object(p.a)({},e),e.id)})):Object(xe.jsx)(Wn,{})})}));var sa=[{path:"/",component:function(){return Object(xe.jsxs)("div",{children:[Object(xe.jsx)(xn,{}),Object(xe.jsx)(oa,{}),Object(xe.jsx)(pt,{})]})},exact:!0},{path:"/admin",component:Nt,exact:!0},{path:"/error/404",component:Xt,exact:!0}];var da,la,ua,pa,ja,ba=function(){return Object(xe.jsxs)(le.d,{children:[sa.map((function(e,n){var t=e.path,a=e.component,c=e.exact;return Object(xe.jsx)(le.b,{path:t,component:a,exact:c},n)})),Object(xe.jsx)(le.a,{to:"/error/404"})]})},xa=$.a.footer(da||(da=Object(X.a)(["\n  width: 100%;\n  height: 250px;\n  padding: 39px 0;\n  margin: auto 0 0;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  color: var(--main-white);\n  font-size: 18px;\n  background: var(--main-dark-purple);\n"]))),ha=$.a.h2(la||(la=Object(X.a)(["\n  margin: 0 0 21px;\n  font-size: 28px;\n  text-transform: uppercase;\n"]))),Oa=$.a.a(ua||(ua=Object(X.a)(["\n  margin: 0 0 20px;\n  color: var(--main-white);\n  &:hover{\n    text-decoration: underline;\n  }\n"]))),fa=$.a.address(pa||(pa=Object(X.a)(["\n  margin: 0 0 39px;\n  font-style: normal;\n"]))),ma=$.a.div(ja||(ja=Object(X.a)(["\n  color: var(--main-grey);\n  font-size: 16px;\n"])));var va,ga,ya=function(){return Object(xe.jsxs)(xa,{children:[Object(xe.jsx)(ha,{children:"SWEET BAKERY inc"}),Object(xe.jsx)(Oa,{href:"tel:+11478344778999",children:"+11 4783 4477 8999"}),Object(xe.jsx)(fa,{children:"UK Privet  Drive 4, 226 788-11"}),Object(xe.jsx)(ma,{children:"\xa9 Sweet Bakery 2021"})]})},wa=$.a.div(va||(va=Object(X.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n"]))),ka=$.a.div(ga||(ga=Object(X.a)(["\n  ","\n  margin-bottom: 150px;\n"])),"\n  max-width: 875px;\n  width: 100%;\n  padding: 0 25px;\n  margin: 0 auto;\n");var Ea={closeMenu:Z,closeBasket:ee},Ta=Object(d.b)((function(e){return{bodyOverflowHidden:e.app.modals.bodyOverflowHidden}}),Ea)(Object(le.g)((function(e){var n=e.location,t=e.closeMenu,c=e.closeBasket,r=e.bodyOverflowHidden;return Object(a.useEffect)((function(){t(),c()}),[n,t,c]),Object(xe.jsxs)(wa,{style:r?{height:"100vh",overflow:"hidden"}:{overflow:"auto"},children:[Object(xe.jsx)(jn,{}),Object(xe.jsx)(ka,{children:Object(xe.jsx)(ba,{})}),"/admin"!==n.pathname?Object(xe.jsx)(ya,{}):""]})})));t(48);var Sa=Object(l.createStore)(W,Object(u.composeWithDevTools)(Object(l.applyMiddleware)(o.a,(function(e){var n=e.dispatch;return function(e){return function(){var t=Object(mn.a)(fn.a.mark((function t(a){return fn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.type!==f&&a.type!==w&&a.type!==k&&a.type!==M){t.next=3;break}return e(a),t.abrupt("return",n(gn()));case 3:e(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))));i.a.render(Object(xe.jsx)(d.a,{store:Sa,children:Object(xe.jsx)(c.a.StrictMode,{children:Object(xe.jsx)(s.a,{children:Object(xe.jsx)(Ta,{})})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.79be566a.chunk.js.map