(this.webpackJsonpfitnessTrackr=this.webpackJsonpfitnessTrackr||[]).push([[0],{24:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(3),c=(n(23),n(24),n(1)),a=n(21),s=n.n(a),i=n(11),o=n(2),l=n.n(o),u=n(4),j="https://fitnesstrac-kr.herokuapp.com";function b(e){localStorage.setItem("token",e)}function d(){return localStorage.getItem("token")}function h(){return d()?{"Content-Type":"Application/JSON",Authorization:"Bearer ".concat(d())}:{"Content-Type":"Application/JSON"}}function p(e,t){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/users/register"),{method:"POST",headers:h(),body:JSON.stringify({username:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return(c=e.sent)&&c.token&&b(c.token),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function x(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/users/login"),{method:"POST",headers:h(),body:JSON.stringify({username:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return(c=e.sent)&&c.token&&b(c.token),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function O(){return(O=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/users/me"),{method:"GET",headers:h()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function f(){return(f=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/users/").concat(t,"/routines"),{method:"GET",headers:h()});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function y(){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/activities"),{method:"GET",headers:h()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function g(e,t){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(l.a.mark((function e(t,n){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/activities"),{method:"POST",headers:h(),body:JSON.stringify({name:t,description:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function k(){return(k=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routines"),{method:"GET",headers:h()});case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function S(e,t,n){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routines"),{method:"POST",headers:h(),body:JSON.stringify({name:t,goal:n,isPublic:r})});case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function A(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routines/").concat(t),{method:"PATCH",headers:h(),body:JSON.stringify({name:n,goal:r})});case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function D(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routines/").concat(t),{method:"DELETE",headers:h()});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function P(e,t,n,r){return R.apply(this,arguments)}function R(){return(R=Object(u.a)(l.a.mark((function e(t,n,r,c){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routines/").concat(t,"/activities"),{method:"POST",headers:h(),body:JSON.stringify({activityId:n,count:r,duration:c})});case 3:return a=e.sent,e.next=6,a.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function F(e,t,n){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function e(t,n,r){var c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routine_activities/").concat(t),{method:"PATCH",headers:h(),body:JSON.stringify({count:n,duration:r})});case 3:return c=e.sent,e.next=6,c.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function U(e){return Y.apply(this,arguments)}function Y(){return(Y=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(j,"/api/routine_activities/").concat(t),{method:"DELETE",headers:h()});case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var G=n(0),H=void 0,I=function(){localStorage.clear(),b(""),location.href="/home/",SweetAlert,H.onConfirm,H.onCancel},L=function(e){var t=e.token,n=e.setToken,r=e.userData,a=e.setUserData;return Object(c.useEffect)((function(){var e=d();e&&n(e),function(){return O.apply(this,arguments)}().then(a)}),[]),Object(G.jsx)("div",{children:t?Object(G.jsx)("div",{children:Object(G.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(G.jsx)("a",{className:"navbar-brand",href:"#",children:"Fitness Trackr"}),Object(G.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(G.jsx)("span",{className:"navbar-toggler-icon"})}),Object(G.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(G.jsxs)("ul",{className:"navbar-nav",children:[Object(G.jsx)("li",{className:"nav-item active",children:Object(G.jsxs)("a",{className:"nav-link",children:["Home ",Object(G.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(i.b,{className:"nav-link",to:"/routines",children:"Routines"})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(i.b,{className:"nav-link",to:"/myroutines",children:"My Routines"})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)(i.b,{className:"nav-link",to:"/activities",children:"Activities"})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsxs)("a",{className:"navbar-brand",children:["Hi ",r.username]})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)("button",{className:"btn btn-primary",onClick:I,children:"Logout"})})]})})]})}):Object(G.jsx)("div",{children:Object(G.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(G.jsx)("a",{className:"navbar-brand",href:"#",children:"Fitness Trackr"}),Object(G.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(G.jsx)("span",{className:"navbar-toggler-icon"})}),Object(G.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(G.jsxs)("ul",{className:"navbar-nav",children:[Object(G.jsx)("li",{className:"nav-item active",children:Object(G.jsxs)("a",{className:"nav-link",href:"/home",children:["Home ",Object(G.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)("a",{className:"nav-link",href:"/routines",children:"Routines"})}),Object(G.jsx)("li",{className:"nav-item",children:Object(G.jsx)("a",{className:"nav-link",href:"/activities",children:"Activities"})})]}),Object(G.jsxs)("div",{className:"justify-content-end",children:[Object(G.jsx)("a",{className:"btn btn-light my-2 my-sm-0",href:"/login",children:"Login"}),Object(G.jsx)("a",{className:"btn btn-light my-2 my-sm-0",href:"/register",children:"Register"})]})]})]})})})},B=(n(35),function(){return Object(G.jsxs)("div",{className:"Home",children:[Object(G.jsxs)("div",{className:"lander",children:[Object(G.jsx)("h1",{children:"Fitness Trackr"}),Object(G.jsx)("p",{children:"A performance tracking app for Fitness Junkies"})]}),Object(G.jsx)("div",{})]})}),_=n(7),M=n.n(_),z=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],d=function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,x(n,o);case 4:(r=e.sent).error?(a(""),j(""),M()({title:"Sorry!",text:"Username or password is incorrect. Please try again",icon:"error",button:"Try again"})):(b(r.token),r.user&&r.user.username&&(a(r.user.username),location.href="/home/",M()({title:"Success",text:"You are now logged in!",icon:"success"}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:"form-signin",children:Object(G.jsxs)("form",{onSubmit:d,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("h1",{className:"sign-up",children:"Please Sign Up"}),Object(G.jsx)("label",{children:" Username "}),Object(G.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:" Password "}),Object(G.jsx)("input",{type:"text",value:o,onChange:function(e){j(e.target.value)}})]}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},q=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],j=i[1],d=function(){var e=Object(u.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(o.length<8)){e.next=5;break}return j(""),swal({title:"Sorry",text:"Password needs to be at least 8 characters long. Please try again with a different username and password combinaison",icon:"error",button:"Try again"}),e.abrupt("return");case 5:return e.prev=5,t.preventDefault(),e.next=9,p(n,o);case 9:(r=e.sent).error?(a(""),j(""),swal({title:"Sorry",text:"Username already taken please try again",icon:"error",button:"Try again"})):(b(r.token),r.user&&r.user.username&&(a(r.user.username),location.href="/home/",swal({title:"Success",text:"You successfully created an account!",icon:"success"}))),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(G.jsx)("div",{className:"form-signup",children:Object(G.jsxs)("form",{id:"cover",onSubmit:d,children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Username"}),Object(G.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Password"}),Object(G.jsx)("input",{type:"text",value:o,onChange:function(e){j(e.target.value)}})]}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},K=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){(function(){return k.apply(this,arguments)})().then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[]),Object(G.jsxs)(G.Fragment,{children:[" ",Object(G.jsx)("h1",{children:"Routines"}),n&&n.map((function(e){var t=e.activities,n=e.id,r=e.creatorName,c=e.name,a=e.goal;return Object(G.jsx)("div",{className:"row",children:Object(G.jsx)("div",{className:"col-sm-6",children:Object(G.jsx)("div",{className:"card",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h3",{className:"card-title",children:c}),Object(G.jsxs)("p",{className:"card-text",children:["By ",r]}),Object(G.jsxs)("p",{className:"card-text",children:["Goal: ",a]}),t.map((function(e){var t=e.id,n=e.name,r=e.description,c=e.count,a=e.duration;return Object(G.jsx)("div",{className:"card",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h4",{children:"Activity"}),Object(G.jsx)("h5",{className:"card-title",children:n}),Object(G.jsx)("p",{className:"card-text",children:r}),Object(G.jsxs)("p",{className:"card-text",children:["Count: ",c]}),Object(G.jsxs)("p",{className:"card-text",children:["Duration: ",a," min"]})]})},t)}))]})})})},n)}))]})},Q=n(5),V=function(e){var t=e.token,n=e.setToken,a=e.allActivities,s=e.setAllActivities,i=Object(c.useState)(!1),o=Object(r.a)(i,2),j=o[0],b=o[1],h=Object(c.useState)(""),p=Object(r.a)(h,2),m=p[0],x=p[1],v=Object(c.useState)(""),O=Object(r.a)(v,2),f=O[0],N=O[1],w=Object(Q.f)();Object(c.useEffect)((function(){y().then((function(e){return s(e)})).catch((function(e){return console.log(e)}));var e=d();e&&n(e)}),[]);var k=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,event.preventDefault(),e.next=4,g(m,f);case 4:e.sent.error?M()({title:"Oh no!",text:"An activity with this name already exists",icon:"warning",button:"error"}):(w.push("/activities"),window.location.reload(!0),M()({title:"Success!",text:"You created a new activity!",icon:"success"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(G.jsx)(G.Fragment,{children:t?Object(G.jsxs)("div",{children:[Object(G.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:b,children:"Create Activity"}),Object(G.jsx)("div",{className:"container",children:j?Object(G.jsxs)("form",{className:"activityForm",children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Name"}),Object(G.jsx)("input",{type:"email",className:"form-control",value:m,onChange:function(e){x(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Description"}),Object(G.jsx)("input",{type:"email",className:"form-control",value:f,onChange:function(e){N(e.target.value)}}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:k,children:"Submit"})]})]}):" "}),Object(G.jsxs)("div",{className:"container",children:[Object(G.jsx)("h1",{children:"Activities"}),a&&a.map((function(e){var t=e.id,n=e.name,r=e.description;return Object(G.jsx)("div",{className:"row",children:Object(G.jsx)("div",{className:"col-sm-6",children:Object(G.jsx)("div",{className:"card",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h5",{className:"card-title",children:n}),Object(G.jsx)("p",{className:"card-text",children:r})]})})})},t)}))]})]}):a&&a.map((function(e){var t=e.id,n=e.name,r=e.description;return Object(G.jsx)("div",{className:"container",children:Object(G.jsx)("div",{className:"row justify_content-center",children:Object(G.jsx)("div",{className:"col-3 mr-auto",children:Object(G.jsx)("div",{className:"card card-body mb-2",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h5",{className:"card-title",children:n}),Object(G.jsx)("p",{className:"card-text",children:r})]})})})},t)})}))})},W=function(e){var t=e.userData,n=e.allActivities,a=e.setAllActivities,s=Object(c.useState)([]),i=Object(r.a)(s,2),o=i[0],j=i[1],b=Object(c.useState)(!1),d=Object(r.a)(b,2),h=d[0],p=d[1],m=Object(c.useState)(!1),x=Object(r.a)(m,2),v=x[0],O=x[1],N=Object(c.useState)(!1),g=Object(r.a)(N,2),w=g[0],k=g[1],C=Object(c.useState)(!1),T=Object(r.a)(C,2),E=T[0],R=T[1],J=Object(c.useState)(!1),Y=Object(r.a)(J,2),H=Y[0],I=Y[1],L=Object(c.useState)(""),B=Object(r.a)(L,2),_=B[0],z=B[1],q=Object(c.useState)(""),K=Object(r.a)(q,2),V=K[0],W=K[1],X=Object(c.useState)(""),Z=Object(r.a)(X,2),$=Z[0],ee=Z[1],te=Object(c.useState)(""),ne=Object(r.a)(te,2),re=ne[0],ce=ne[1],ae=Object(c.useState)(""),se=Object(r.a)(ae,2),ie=se[0],oe=se[1],le=Object(c.useState)(""),ue=Object(r.a)(le,2),je=ue[0],be=ue[1],de=Object(c.useState)(""),he=Object(r.a)(de,2),pe=he[0],me=he[1],xe=Object(c.useState)(""),ve=Object(r.a)(xe,2),Oe=ve[0],fe=ve[1],ye=Object(Q.f)(),Ne=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,event.preventDefault(),e.next=4,S(_,V,E);case 4:e.sent.error?M()({title:"Oh no!",text:"A routine with this name already exists",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You created a new routine!",icon:"success"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D(t);case 3:e.sent.error?M()({title:"Oh No!",text:"Something went wrong when deleting the routine",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You successfully deleted your routine!",icon:"success"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U(t);case 3:e.sent.error?M()({title:"Oh No!",text:"Something went wrong when deleting the routine activity",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You successfully deleted your routine activity!",icon:"success"})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,event.preventDefault(),e.next=4,A(t,n,r);case 4:e.sent.error?M()({title:"Oh No!",text:"Something went wrong when editing the routine",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You successfully edited your routine!",icon:"success"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),Se=function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,event.preventDefault(),e.next=4,F(t,n,r);case 4:e.sent.error?M()({title:"Oh No!",text:"Something went wrong when editing the routine",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You successfully edited your routine!",icon:"success"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n,r){return e.apply(this,arguments)}}(),Ce=function(e){be(e.target.value)},Ae=function(){var e=Object(u.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,event.preventDefault(),e.next=4,P(t,n,$,re);case 4:e.sent.error?M()({title:"Oh No!",text:"An activity with this name already exists",icon:"'error'",button:"Try Again"}):(ye.push("/myRoutines"),window.location.reload(!0),M()({title:"Success!",text:"You created a new activity!",icon:"success"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){t.username&&function(e){return f.apply(this,arguments)}(t.username).then((function(e){return j(e)})).catch((function(e){return console.log(e)})),0===n.length&&y().then((function(e){return a(e)})).catch((function(e){return console.log(e)}))}),[t]),Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)("button",{type:"button",className:"btn btn-primary btn-lg btn-block",onClick:p,children:"Create Routine"}),h?Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("form",{className:"activityForm",children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Name"}),Object(G.jsx)("input",{type:"text",className:"form-control",value:_,onChange:function(e){z(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Goal"}),Object(G.jsx)("input",{type:"text",className:"form-control",value:V,onChange:function(e){W(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-check",children:[Object(G.jsx)("input",{className:"form-check-input",type:"checkbox",value:E,onClick:function(){return R(!0)}}),Object(G.jsx)("label",{className:"form-check-label",children:"Is Public"})]}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:Ne,children:"Submit"})})]})}):" ",v?Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("form",{className:"activityForm",style:{marginLeft:"5em",marginRight:"5em",lineHeight:1},children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("h3",{children:"Update the Name and Goal for the routine"}),Object(G.jsx)("label",{children:"Name"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:_,value:_,onChange:function(e){z(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Goal"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:V,value:V,onChange:function(e){W(e.target.value)}})]}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return ke(ie,_,V)},children:"Submit"})})]})}):" ",H?Object(G.jsx)("div",{className:"container",children:Object(G.jsxs)("form",{className:"activityForm",children:[Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsxs)("h3",{children:["Update the Count and Duration for the activity ",Oe," "]}),Object(G.jsx)("label",{children:"Count"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:$,value:$,onChange:function(e){ee(e.target.value)}})]}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Duration"}),Object(G.jsx)("input",{type:"text",className:"form-control",placeholder:re,value:re,onChange:function(e){ce(e.target.value)}})]}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return Se(pe,$,re)},children:"Submit"})})]})}):" ",Object(G.jsxs)("div",{class:"container",children:[" ",Object(G.jsx)("h1",{class:"mb-0",children:"My Routines"}),o&&o.map((function(e){var t=e.id,r=(e.creatorId,e.isPublic,e.name),c=e.goal,a=e.creatorName,s=e.activities;return Object(G.jsx)("div",{className:"row",children:Object(G.jsx)("div",{className:"col-sm-6",children:Object(G.jsx)("div",{className:"card",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h5",{className:"card-title",children:r}),Object(G.jsx)("p",{className:"card-text",children:c}),Object(G.jsxs)("p",{className:"card-text",children:["By: ",a]}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{className:"btn btn-danger",onClick:function(){return ge(t)},children:"Delete"})}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{id:t,className:"btn btn-secondary",onClick:function(){O(!0),z(r),W(c),oe(t)},children:"Edit"})}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{id:t,type:"button",className:"btn btn-primary",onClick:function(){k(!0),oe(t)},children:"Add Activity"})}),s.map((function(e){var t=e.id,n=e.routineActivityId,r=e.name,c=e.description,a=e.count,s=e.duration;return Object(G.jsx)("div",{className:"card",children:Object(G.jsxs)("div",{className:"card-body",children:[Object(G.jsx)("h4",{children:"Activity"}),Object(G.jsx)("h5",{className:"card-title",children:r}),Object(G.jsx)("p",{className:"card-text",children:c}),Object(G.jsxs)("p",{className:"card-text",children:["Count: ",a]}),Object(G.jsxs)("p",{className:"card-text",children:["Duration: ",s," min"]}),Object(G.jsx)("a",{href:"#",className:"btn btn-danger",onClick:function(){return we(n)},children:"Delete"}),Object(G.jsx)("a",{href:"#",className:"btn btn-secondary",onClick:function(){I(n),me(n),fe(r),ee(a),ce(s)},children:"Edit"})]})},t)})),w&&ie==t?Object(G.jsxs)("form",{className:"activityForm",children:[Object(G.jsx)("select",{onChange:Ce,children:n.map((function(e){return Object(G.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(G.jsxs)("div",{className:"form-group",children:[Object(G.jsx)("label",{children:"Count"}),Object(G.jsx)("input",{type:"text",className:"form-control",value:$,onChange:function(e){ee(e.target.value)}}),Object(G.jsx)("label",{children:"Duration"}),Object(G.jsx)("input",{type:"email",className:"form-control",value:re,onChange:function(e){ce(e.target.value)}}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(){return Ae(ie,je)},children:"Submit"})})]})]}):" "]})})})},t)}))]})]})},X=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(r.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)([]),j=Object(r.a)(u,2),b=j[0],d=j[1];return Object(G.jsxs)("div",{id:"App",children:[Object(G.jsx)(L,{token:n,setToken:a,userData:o,setUserData:l}),Object(G.jsxs)(Q.c,{children:[Object(G.jsx)(Q.a,{exact:!0,path:"/",children:Object(G.jsx)(B,{})}),Object(G.jsx)(Q.a,{exact:!0,path:"/home",children:Object(G.jsx)(B,{})}),Object(G.jsx)(Q.a,{exact:!0,path:"/login",children:Object(G.jsx)(z,{})}),Object(G.jsx)(Q.a,{exact:!0,path:"/register",children:Object(G.jsx)(q,{})}),Object(G.jsx)(Q.a,{exact:!0,path:"/routines",children:Object(G.jsx)(K,{})}),Object(G.jsx)(Q.a,{exact:!0,path:"/myroutines",children:Object(G.jsx)(W,{userData:o,setUserData:l,allActivities:b,setAllActivities:d})}),Object(G.jsx)(Q.a,{exact:!0,path:"/activities",children:Object(G.jsx)(V,{token:n,setToken:a,allActivities:b,setAllActivities:d})})]})]})};s.a.render(Object(G.jsx)(i.a,{children:Object(G.jsx)(X,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.f9c61769.chunk.js.map