(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{103:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(19),u=n.n(a),s=n(16),o=n(5),i=n(40),l=n(4),b=n(15),j=(n(58),n(41)),f=n.n(j),d=n(3),O=n(47),p=n(10),h=(Object(l.b)("contacts/fetchContactsRequest"),Object(l.b)("contacts/fetchContactsSuccess"),Object(l.b)("contacts/fetchContactsError"),Object(l.b)("contacts/addContactRequest"),Object(l.b)("contacts/addContactSuccess"),Object(l.b)("contacts/addContactError"),Object(l.b)("contacts/deleteContactRequest"),Object(l.b)("contacts/deleteContactSuccess"),Object(l.b)("contacts/deleteContactError"),Object(l.b)("contacts/changeFilter")),m=n(9),x=n.n(m),v=n(14),g=n(13),_=n.n(g);_.a.defaults.baseURL="https://connections-api.herokuapp.com";var C,w,k=Object(l.c)("contacts/fetchContacts",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.get("/contacts").then((function(t){return t.data}));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),y=Object(l.c)("contacts/addContact",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.post("/contacts",e).then((function(t){return t.data}));case 4:return t.abrupt("return",t.sent);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(l.c)("contacts/deleteContact",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),L=Object(l.d)([],(C={},Object(d.a)(C,k.fulfilled,(function(t,e){return e.payload})),Object(d.a)(C,y.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(O.a)(t),[n])})),Object(d.a)(C,N.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),C)),S=Object(l.d)(!1,(w={},Object(d.a)(w,k.pending,(function(){return!0})),Object(d.a)(w,k.fulfilled,(function(){return!1})),Object(d.a)(w,k.rejected,(function(){return!1})),Object(d.a)(w,y.pending,(function(){return!0})),Object(d.a)(w,y.fulfilled,(function(){return!1})),Object(d.a)(w,y.rejected,(function(){return!1})),Object(d.a)(w,N.pending,(function(){return!0})),Object(d.a)(w,N.fulfilled,(function(){return!1})),Object(d.a)(w,N.rejected,(function(){return!1})),w)),A=Object(l.d)("",Object(d.a)({},h,(function(t,e){return e.payload}))),E=Object(p.b)({items:L,filter:A,loading:S});_.a.defaults.baseURL="https://connections-api.herokuapp.com";var F,B,R,I,P=function(t){_.a.defaults.headers.common.Authorization="Bearer ".concat(t)},V=function(){_.a.defaults.headers.common.Authorization=""},W=Object(l.c)("auth/register",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c,r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.post("/users/signup",e);case 4:return r=t.sent,a=r.data,P(a.token),t.abrupt("return",a);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),z=Object(l.c)("auth/login",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c,r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.post("/users/login",e);case 4:return r=t.sent,a=r.data,P(a.token),t.abrupt("return",a);case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),T=Object(l.c)("auth/logout",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,_.a.post("/users/logout");case 4:V(),t.next=10;break;case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),q=Object(l.c)("auth/refresh",function(){var t=Object(v.a)(x.a.mark((function t(e,n){var c,r,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState().auth.token,console.log(n),null!==c){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return P(c),t.prev=5,t.next=8,_.a.get("/users/current");case 8:return r=t.sent,a=r.data,t.abrupt("return",a);case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",n.rejectWithValue(t.t0));case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),J={name:null,email:null},D=Object(l.d)(J,(F={},Object(d.a)(F,W.fulfilled,(function(t,e){return e.payload.user})),Object(d.a)(F,z.fulfilled,(function(t,e){return e.payload.user})),Object(d.a)(F,T.fulfilled,(function(){return J})),Object(d.a)(F,q.fulfilled,(function(t,e){return e.payload})),F)),M=Object(l.d)(null,(B={},Object(d.a)(B,W.fulfilled,(function(t,e){return e.payload.token})),Object(d.a)(B,z.fulfilled,(function(t,e){return e.payload.token})),Object(d.a)(B,T.fulfilled,(function(){return null})),B)),U=Object(l.d)(!1,(R={},Object(d.a)(R,W.pending,(function(){return!1})),Object(d.a)(R,W.fulfilled,(function(){return!0})),Object(d.a)(R,W.rejected,(function(){return!1})),Object(d.a)(R,z.pending,(function(){return!1})),Object(d.a)(R,z.fulfilled,(function(){return!0})),Object(d.a)(R,z.rejected,(function(){return!1})),Object(d.a)(R,T.pending,(function(){return!0})),Object(d.a)(R,T.fulfilled,(function(){return!1})),Object(d.a)(R,T.rejected,(function(){return!0})),Object(d.a)(R,q.pending,(function(){return!1})),Object(d.a)(R,q.fulfilled,(function(){return!0})),Object(d.a)(R,q.rejected,(function(){return!1})),R)),Z=Object(l.d)(!1,(I={},Object(d.a)(I,q.pending,(function(){return!0})),Object(d.a)(I,q.fulfilled,(function(){return!1})),Object(d.a)(I,q.rejected,(function(){return!1})),I)),G=Object(p.b)({user:D,token:M,isLoggedIn:U,isCurrentUser:Z}),H={key:"user-token",storage:f.a,whitelist:["token"]},Q=Object(l.a)({reducer:{contacts:E,auth:Object(b.g)(H,G)},middleware:function(t){return t({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e]}})},devTools:!1}),$=Object(b.h)(Q),K=(n(81),n(2)),X=n(17),Y=n(42),tt=n.n(Y),et=function(t){return t.auth.isLoggedIn},nt=n(23),ct=n.n(nt),rt=n(1);function at(){var t=Object(o.c)(et);return Object(rt.jsx)("div",{children:Object(rt.jsxs)("nav",{children:[Object(rt.jsx)(s.b,{exact:"true",to:"/",className:ct.a.link,children:"Home"}),t&&Object(rt.jsx)(s.b,{to:"contacts",className:ct.a.link,children:"Contacts"}),Object(rt.jsx)(s.b,{to:"/register",className:ct.a.link,children:"Register"}),Object(rt.jsx)(s.b,{to:"/login",className:ct.a.link,children:"Login"})]})})}function ut(){return Object(rt.jsx)("h1",{children:"Home Page!"})}var st=n(7);function ot(){var t=Object(o.b)(),e=Object(c.useState)(""),n=Object(st.a)(e,2),r=n[0],a=n[1],u=Object(c.useState)(""),s=Object(st.a)(u,2),i=s[0],l=s[1],b=Object(c.useState)(""),j=Object(st.a)(b,2),f=j[0],d=j[1],O=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":return a(c);case"email":return l(c);case"password":return d(c);default:return}};return Object(rt.jsxs)("div",{children:[Object(rt.jsx)("h1",{children:"Registration Form"}),Object(rt.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(W({name:r,email:i,password:f})),a(""),l(""),d("")},autoComplete:"off",children:[Object(rt.jsxs)("label",{children:["Name",Object(rt.jsx)("br",{}),Object(rt.jsx)("input",{type:"text",name:"name",value:r,onChange:O})]}),Object(rt.jsx)("br",{}),Object(rt.jsxs)("label",{children:["E-mail",Object(rt.jsx)("br",{}),Object(rt.jsx)("input",{type:"email",name:"email",value:i,onChange:O})]}),Object(rt.jsx)("br",{}),Object(rt.jsxs)("label",{children:["Password",Object(rt.jsx)("br",{}),Object(rt.jsx)("input",{type:"password",name:"password",value:f,onChange:O})]}),Object(rt.jsx)("br",{}),Object(rt.jsx)("button",{type:"submit",children:"Register Now"})]})]})}function it(){var t=Object(o.b)(),e=Object(c.useState)(""),n=Object(st.a)(e,2),r=n[0],a=n[1],u=Object(c.useState)(""),s=Object(st.a)(u,2),i=s[0],l=s[1],b=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"email":return a(c);case"password":return l(c);default:return}};return Object(rt.jsxs)("div",{children:[Object(rt.jsx)("h1",{children:"Please Login"}),Object(rt.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(z({email:r,password:i})),a(""),l("")},autoComplete:"off",children:[Object(rt.jsxs)("label",{children:["E-mail",Object(rt.jsx)("br",{}),Object(rt.jsx)("input",{type:"email",name:"email",value:r,onChange:b})]}),Object(rt.jsx)("br",{}),Object(rt.jsxs)("label",{children:["Password",Object(rt.jsx)("br",{}),Object(rt.jsx)("input",{type:"password",name:"password",value:i,onChange:b})]}),Object(rt.jsx)("br",{}),Object(rt.jsx)("button",{type:"submit",children:"Enter"})]})]})}var lt=n(27),bt=n.n(lt),jt=(n(83),n(43)),ft=n(44),dt=n(48),Ot=n(46),pt=n(45),ht=n.n(pt),mt=(n(102),function(t){Object(dt.a)(n,t);var e=Object(Ot.a)(n);function n(){return Object(jt.a)(this,n),e.apply(this,arguments)}return Object(ft.a)(n,[{key:"render",value:function(){return Object(rt.jsx)(ht.a,{type:"Rings",color:"#3f51b5",height:80,width:80,style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})}}]),n}(c.Component)),xt=n(26),vt=function(t){return t.contacts.items},gt=function(t){return t.contacts.filter},_t=function(t){return t.contacts.loading},Ct=Object(xt.a)([vt,gt],(function(t,e){var n=e.toLowerCase().trim(" ");return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),wt=n(18),kt=n.n(wt);function yt(){var t=Object(c.useState)(""),e=Object(st.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),u=Object(st.a)(a,2),s=u[0],i=u[1],l=Object(o.c)(vt),b=Object(o.c)(_t),j=Object(o.b)(),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":i(c);break;default:return}};return Object(rt.jsxs)("form",{className:kt.a.form,onSubmit:function(t){t.preventDefault(),function(t,e){l.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?X.b.warn("".concat(t," is already exist!")):(j(y({name:t,number:e})),X.b.success("".concat(t," successfully added to Phonebook!")))}(n,s),r(""),i("")},children:[Object(rt.jsxs)("label",{className:kt.a.label,children:["Name",Object(rt.jsx)("input",{className:kt.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:n,onChange:f,required:!0})]}),Object(rt.jsxs)("label",{className:kt.a.label,children:["Number",Object(rt.jsx)("input",{className:kt.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:s,onChange:f,required:!0})]}),Object(rt.jsx)("button",{className:kt.a.submitButton,type:"submit",children:"Add contact"}),b&&Object(rt.jsx)(mt,{})]})}var Nt=n(21),Lt=n.n(Nt);function St(){var t=Object(o.b)(),e=Object(o.c)(_t),n=Object(o.c)(Ct);return Object(c.useEffect)((function(){return t(k())}),[t]),Object(rt.jsxs)(rt.Fragment,{children:[0!==n.length?Object(rt.jsx)("ul",{className:Lt.a.contactList,children:n.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(rt.jsxs)("li",{className:Lt.a.contactItem,children:[Object(rt.jsxs)("p",{className:Lt.a.contactInfo,children:[c,": ",r]}),Object(rt.jsx)("button",{className:Lt.a.deleteButton,id:n,onClick:function(){return t(N(n))},children:"Delete"})]},n)}))}):Object(rt.jsx)("p",{className:Lt.a.notification,children:"There are no contacts..."}),e&&Object(rt.jsx)(mt,{})]})}var At=n(28),Et=n.n(At);function Ft(){var t=Object(o.c)(_t),e=Object(o.b)(),n=Object(o.c)(gt);return Object(rt.jsxs)("div",{className:Et.a.filter,children:[Object(rt.jsxs)("label",{className:Et.a.label,children:["Find contacts by name",Object(rt.jsx)("input",{className:Et.a.input,type:"text",value:n,onChange:function(t){return e(h(t.currentTarget.value))}})]}),t&&Object(rt.jsx)(mt,{})]})}function Bt(){return Object(rt.jsxs)("div",{className:bt.a.app,children:[Object(rt.jsx)("h1",{className:bt.a.title,children:"Phonebook"}),Object(rt.jsx)(yt,{}),Object(rt.jsx)("h2",{className:bt.a.title,children:"Contacts"}),Object(rt.jsx)(Ft,{}),Object(rt.jsx)(St,{}),Object(rt.jsx)(X.a,{autoClose:3e3,position:"top-center",theme:"colored"})]})}function Rt(){var t=Object(o.b)();return Object(c.useEffect)((function(){return t(q())}),[t]),Object(rt.jsxs)("div",{className:tt.a.app,children:[Object(rt.jsx)(at,{}),Object(rt.jsxs)(K.c,{children:[Object(rt.jsx)(K.a,{exact:"true",path:"/",element:Object(rt.jsx)(ut,{})}),Object(rt.jsx)(K.a,{path:"/register",element:Object(rt.jsx)(ot,{})}),Object(rt.jsx)(K.a,{path:"/login",element:Object(rt.jsx)(it,{})}),Object(rt.jsx)(K.a,{path:"/contacts",element:Object(rt.jsx)(Bt,{})}),Object(rt.jsx)(K.a,{path:"*",element:Object(rt.jsx)("h1",{children:"Error 404: Page not found."})})]}),Object(rt.jsx)(X.a,{autoClose:3e3,position:"top-center",theme:"colored"})]})}u.a.render(Object(rt.jsx)(r.a.StrictMode,{children:Object(rt.jsx)(o.a,{store:Q,children:Object(rt.jsx)(i.a,{loading:null,persistor:$,children:Object(rt.jsx)(s.a,{children:Object(rt.jsx)(Rt,{})})})})}),document.getElementById("root"))},18:function(t,e,n){t.exports={form:"ContactForm_form__1CLtc",label:"ContactForm_label__rfloG",input:"ContactForm_input__3Ms3S",submitButton:"ContactForm_submitButton__2E8la"}},21:function(t,e,n){t.exports={contactList:"ContactList_contactList__HkvO3",contactItem:"ContactList_contactItem__3xmnW",contactInfo:"ContactList_contactInfo__3pGyM",deleteButton:"ContactList_deleteButton__1bFhZ",notification:"ContactList_notification__Bn3U8"}},23:function(t,e,n){t.exports={link:"AppBar_link__9A32T"}},27:function(t,e,n){t.exports={app:"ContactsPage_app__1VjiJ",title:"ContactsPage_title__23vO9"}},28:function(t,e,n){t.exports={filter:"Filter_filter__3m1Gi",label:"Filter_label__2QEQi",input:"Filter_input__2mjTR"}},42:function(t,e,n){t.exports={app:"App_app__3z8sr",title:"App_title__1ChaJ"}},81:function(t,e,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.910c73c1.chunk.js.map