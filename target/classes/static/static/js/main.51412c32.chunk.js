(this.webpackJsonpultrasound=this.webpackJsonpultrasound||[]).push([[0],{104:function(e,t,r){},225:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(41),a=r.n(n),c=r(6),o=r(29),i=r(89),l=r(90),u=r(2),d="REGISTER_SUCCESS",b="REGISTER_FAIL",j="LOGIN_SUCCESS",m="LOGIN_FAIL",h="LOGOUT",O="SET_MESSAGE",f="CLEAR_MESSAGE",p="SET_USER_DETAILS",g=JSON.parse(localStorage.getItem("user")),x=g?{isAuth:!0,user:g}:{isAuth:!1,user:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;console.log("%c Current action: %c".concat(JSON.stringify(t.type)," "),"font-size: 12px; color: black; background: lightGrey;","font-size: 12px; color: DarkGreen; background: lightGrey;");var r=t.type,s=t.payload;switch(r){case d:case b:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!1});case j:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!0,user:s});case m:case h:return Object(u.a)(Object(u.a)({},e),{},{isAuth:!1,user:null});default:return e}},y={},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=t.type,s=t.payload;switch(r){case O:return{message:s};case f:return{message:""};default:return e}},S={fullname:"",username:"",email:"",data:!1},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,r=t.type,s=t.payload;switch(r){case p:return Object(u.a)(Object(u.a)({},e),{},{fullname:s.fullname,username:s.username,email:s.email,data:!0});case h:return{state:S};default:return e}},k=Object(o.combineReducers)({auth:v,message:N,user:w}),A=Object(o.createStore)(k,Object(i.composeWithDevTools)(Object(o.applyMiddleware)(l.a))),E=(r(104),r(57),r(11)),G=Object(E.a)(),C=r(9),P=r(96),F=r(1),T=Object(C.h)((function(e){var t=e.component,r=Object(P.a)(e,["component"]);console.log("%c === Private route === ","font-size: 12px; color: black; background: lightGrey;");var s=Object(c.c)((function(e){return e.auth})).isAuth;return Object(F.jsx)(C.b,Object(u.a)(Object(u.a)({},r),{},{render:function(e){return s?Object(F.jsx)(t,Object(u.a)({},e)):Object(F.jsx)(C.a,{to:{pathname:"/",state:{from:e.history.location}}})}}))})),q=r(19),I=r(44),L=r(18),R=function(e){var t,r,s,n,a,c,o=e.onSubmit,i=e.errors,l=e.register,d=e.handleSubmit;return Object(F.jsxs)("div",{className:"form",children:[Object(F.jsx)("label",{htmlFor:"register-form",children:Object(F.jsx)("h4",{children:"Register"})}),Object(F.jsx)("div",{className:"register-form",children:Object(F.jsxs)("form",{id:"register",onSubmit:d(o),children:[Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"fullname",children:"Full Name"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"fullname",type:"text"},l("fullname")),{},{className:"form-control ".concat(i.fullname?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(t=i.fullname)||void 0===t?void 0:t.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Username"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"username",type:"text"},l("username")),{},{className:"form-control ".concat(i.username?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(r=i.username)||void 0===r?void 0:r.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Email"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"email",type:"text"},l("email")),{},{className:"form-control ".concat(i.email?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(s=i.email)||void 0===s?void 0:s.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Password"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"password",type:"password"},l("password")),{},{className:"form-control ".concat(i.password?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(n=i.password)||void 0===n?void 0:n.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Confirm Password"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"confirmPassword",type:"password"},l("confirmPassword")),{},{className:"form-control ".concat(i.confirmPassword?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(a=i.confirmPassword)||void 0===a?void 0:a.message})]}),Object(F.jsxs)("div",{className:"form-group form-check",children:[Object(F.jsx)("input",Object(u.a)(Object(u.a)({name:"acceptTerms",type:"checkbox"},l("acceptTerms")),{},{className:"form-check-input ".concat(i.acceptTerms?"is-invalid":"")})),Object(F.jsx)("label",{htmlFor:"acceptTerms",className:"form-check-label",children:"I have read and agree to the Terms"}),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(c=i.acceptTerms)||void 0===c?void 0:c.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(F.jsx)("button",{type:"button",onClick:function(){return document.getElementById("register").reset()},className:"btn btn-warning float-right",children:"Reset"})]})]})})]})},U=r(95),_=r(26),z=r.n(_),D="http://localhost:8080/",J={register:function(e){return z.a.post("".concat(D,"api/register"),e)},login:function(e){var t=new URLSearchParams;t.append("username",e.username),t.append("password",e.password);return z.a.post("".concat(D,"api/login"),t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},logout:function(){console.log("%c ==='Logged Out'=== ","font-size: 12px; color: DarkGreen; background: lightGrey;"),localStorage.removeItem("user"),localStorage.removeItem("token")}},V=function(){var e=JSON.parse(localStorage.getItem("tokens"));return console.log("%c Auth header token: %c".concat(e.access_token," "),"font-size: 12px; color: black; background: lightGrey;","font-size: 12px; color: DarkGreen; background: lightGrey;"),e&&e.access_token?{Authorization:"Bearer ".concat(JSON.stringify(e.access_token))}:{}},M="http://localhost:8080/",B={getPublicContent:function(){return z.a.get("".concat(M,"api/users"))},getUserContent:function(){var e={headers:{Authorization:V(),"Content-Type":"application/json",Accept:"*/*"}};return z.a.get("".concat(M,"api/user/details"),e)},getAdminContent:function(){return z.a.get("".concat(M,"api/admin"),{headers:V()})}},H=J.register,W=J.login,K=J.logout,Q=B.getUserContent,X=function(e){return function(t){return W(e).then((function(e){var r=e.data,s=Object(U.a)(r.access_token);return localStorage.setItem("tokens",JSON.stringify(r)),localStorage.setItem("user",JSON.stringify(s)),t({type:j,payload:r}),Q(r.access_token)}),(function(e){var r=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:m}),t({type:O,payload:r}),Promise.resolve(r)}))}},Y={auth:{registerAction:function(e){return function(t){return H(e).then((function(r){return t({type:d}),t({type:O,payload:r.data.message}),t(X({username:e.username,password:e.password}))}),(function(e){var r=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();return t({type:b}),t({type:O,payload:r}),Promise.resolve(r)}))}},loginAction:X,logoutAction:function(){return function(e){K(),e({type:h})}}},message:{setMessage:function(e){return{type:O,payload:e}},clearMessage:function(){return{type:f}}},user:{userDetails:function(e){return{type:p,payload:e}}}},Z=r(15),$=function(){return Object(F.jsx)(Z.a,{to:"/login",children:Object(F.jsx)("div",{className:"form-group",style:{marginLeft:"1rem"},children:Object(F.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Log in"})})})},ee=function(){return Object(F.jsx)(Z.a,{to:"/home",children:Object(F.jsx)("div",{className:"form-group",style:{marginLeft:"1rem"},children:Object(F.jsx)("button",{type:"button",className:"btn btn-primary",children:"Home"})})})},te=function(){var e=Object(c.c)((function(e){return e.message})).message,t=Object(c.c)((function(e){return e.auth})).isAuth,r=Object(c.b)(),n=Object(C.g)(),a=L.b().shape({fullname:L.d().required("Fullname is required"),username:L.d().required("Username is required").min(6,"Username must be at least 6 characters").max(20,"Username must not exceed 20 characters"),email:L.d().required("Email is required").email("Email is invalid"),password:L.d().required("Password is required").min(6,"Password must be at least 6 characters").max(40,"Password must not exceed 40 characters"),confirmPassword:L.d().required("Confirm Password is required").oneOf([L.c("password"),null],"Confirm Password does not match"),acceptTerms:L.a().oneOf([!0],"Accept Terms is required")}),o=Object(q.d)({resolver:Object(I.a)(a)}),i=o.register,l=o.handleSubmit,u=o.reset,d=o.formState.errors;return Object(s.useEffect)((function(){t&&n.push("/dashboard")}),[t,n]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"button-wrapper",children:[Object(F.jsx)($,{}),Object(F.jsx)(ee,{})]}),Object(F.jsx)(R,{message:e,onSubmit:function(e){r(Y.auth.registerAction(e)).then((function(e){r(Y.user.userDetails(e.data)),console.log("%c Submission response: %c".concat(e," "),"font-size: 12px; color: black; background: lightGrey;","font-size: 12px; color: DarkGreen; background: lightGrey;")}))},errors:d,register:i,handleSubmit:l,reset:u})]})},re=function(){return Object(F.jsx)("div",{className:"sidebar",children:"Sidebar"})},se=function(){return Object(F.jsx)("div",{className:"content",children:"Content"})},ne=function(){return Object(F.jsx)("div",{className:"footer",children:"caleb tracey 2021"})},ae=function(){var e=Object(c.b)();return Object(F.jsx)("button",{type:"button",style:{marginRight:"1rem"},className:"btn btn-primary",onClick:function(){return e(Y.auth.logoutAction())},children:"Logout"})},ce=r(13),oe=function(){var e=Object(s.useState)(null),t=Object(ce.a)(e,2),r=t[0],n=t[1],a=Object(c.c)((function(e){return e.auth})).isAuth,o=Object(c.c)((function(e){return e.user}));return Object(s.useEffect)((function(){a&&o.data&&n(o.fullname)}),[a,o]),Object(F.jsx)("div",{style:{padding:"1rem"},children:r})},ie=function(){return Object(F.jsx)("div",{className:"header",children:Object(F.jsxs)("div",{className:"wrapper",children:[Object(F.jsx)(oe,{}),Object(F.jsx)(ae,{})]})})},le=function(){return Object(F.jsxs)("div",{className:"body",children:[Object(F.jsx)(ie,{}),Object(F.jsx)(se,{}),Object(F.jsx)(ne,{})]})},ue=B.getUserContent,de=Object(C.h)((function(){var e=Object(c.c)((function(e){return e.auth})).isAuth,t=Object(c.c)((function(e){return e.user})).data,r=Object(c.b)();return Object(s.useEffect)((function(){e&&!t&&ue().then((function(e){r(Y.user.userDetails(e.data))}))}),[e,t,r]),Object(F.jsxs)("div",{className:"app",children:[Object(F.jsx)(re,{}),Object(F.jsx)(le,{})]})})),be=function(e){var t,r,s=e.onSubmit,n=e.errors,a=e.register,c=e.handleSubmit;return Object(F.jsxs)("div",{className:"form",children:[Object(F.jsx)("label",{htmlFor:"register-form",children:Object(F.jsx)("h4",{children:"Log in"})}),Object(F.jsx)("div",{className:"register-form",children:Object(F.jsxs)("form",{id:"login",onSubmit:c(s),children:[Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"username",children:"Username"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"username",type:"text"},a("username")),{},{className:"form-control ".concat(n.username?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(t=n.username)||void 0===t?void 0:t.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:"password",children:"Password"}),Object(F.jsx)("input",Object(u.a)(Object(u.a)({defaultValue:"",name:"password",type:"password"},a("password")),{},{className:"form-control ".concat(n.password?"is-invalid":"")})),Object(F.jsx)("div",{className:"invalid-feedback",children:null===(r=n.password)||void 0===r?void 0:r.message})]}),Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),Object(F.jsx)(Z.a,{to:"/register",children:Object(F.jsx)("button",{type:"button",className:"btn btn-secondary float-right",children:"Register"})})]})]})})]})},je=function(){return Object(F.jsx)(Z.a,{to:"/register",children:Object(F.jsx)("div",{className:"form-group",children:Object(F.jsx)("button",{type:"button",className:"btn btn-primary",children:"Register"})})})},me=function(){var e=Object(c.c)((function(e){return e.message})).message,t=Object(c.c)((function(e){return e.auth})).isAuth,r=Object(c.b)(),n=Object(C.g)(),a=L.b().shape({username:L.d().required("Username is required"),password:L.d().required("Password is required")}),o=Object(q.d)({resolver:Object(I.a)(a)}),i=o.register,l=o.handleSubmit,u=o.reset,d=o.formState.errors;return Object(s.useEffect)((function(){t&&n.push("/dashboard")}),[t,n]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("div",{className:"button-wrapper",children:[Object(F.jsx)(ee,{}),Object(F.jsx)(je,{})]}),Object(F.jsx)(be,{message:e,onSubmit:function(e){r(Y.auth.loginAction(e)).then((function(e){r(Y.user.userDetails(e.data)),console.log("%c Submission response: %c".concat(JSON.stringify(e.data)," "),"font-size: 12px; color: black; background: lightGrey;","font-size: 12px; color: DarkGreen; background: lightGrey;")}))},errors:d,register:i,handleSubmit:l,reset:u})]})},he=function(){var e=Object(c.c)((function(e){return e.auth})).isAuth;return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)("div",{className:"header",style:{left:"0",right:"0"},children:Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{className:"text-center",children:"Home"}),Object(F.jsx)("div",{className:"button-wrapper",children:e?Object(F.jsx)(ae,{}):Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)($,{}),Object(F.jsx)(je,{})]})})]})}),Object(F.jsx)("div",{className:"content",style:{left:"0",right:"0",marginLeft:"1rem",marginRight:"1rem"}}),Object(F.jsx)("div",{className:"footer",style:{left:"0",right:"0"}})]})},Oe=function(){return Object(F.jsx)(C.c,{history:G,children:Object(F.jsxs)(C.d,{children:[Object(F.jsx)(C.b,{exact:!0,path:["/","/home"],component:he}),Object(F.jsx)(C.b,{exact:!0,path:"/login",component:me}),Object(F.jsx)(C.b,{exact:!0,path:"/register",component:te}),Object(F.jsx)(T,{exact:!0,path:"/dashboard",component:de})]})})},fe=function(){var e=Object(c.c)((function(e){return e.auth})).isAuth,t=Object(c.b)();return Object(s.useEffect)((function(){G.listen((function(e){t({type:f})}))}),[t]),Object(F.jsx)("div",{className:"app",children:Object(F.jsx)(Oe,{isAuth:e})})};a.a.render(Object(F.jsx)(c.a,{store:A,children:Object(F.jsx)(fe,{})}),document.querySelector("#root"))},57:function(e,t,r){}},[[225,1,2]]]);
//# sourceMappingURL=main.51412c32.chunk.js.map