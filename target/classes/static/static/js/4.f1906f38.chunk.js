(this.webpackJsonpultrasound=this.webpackJsonpultrasound||[]).push([[4],{107:function(e,s,a){"use strict";a(0);var r=a(18),t=a(1);s.a=function(){return Object(t.jsx)(r.a,{to:"/home",children:Object(t.jsx)("div",{className:"form-group",style:{marginLeft:"1rem"},children:Object(t.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Home"})})})}},238:function(e,s,a){"use strict";a.r(s);var r=a(29),t=a(0),c=a(88),i=a(8),n=a(132),l=a(131),m=a(5),o=a(1),d=function(e){var s,a,r,t,c,i,n=e.successful,l=e.onSubmit,d=e.errors,u=e.register,j=e.handleSubmit,b=e.message,h=e.reset;return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("label",{htmlFor:"signup",children:Object(o.jsx)("h4",{children:"Register"})}),Object(o.jsx)("div",{id:"signup",className:"register-form",children:Object(o.jsxs)("form",{id:"signup",onSubmit:j(l),children:[Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({defaultValue:"",name:"fullName",type:"text"},u("fullName")),{},{className:"form-control ".concat(d.fullName?"is-invalid":"")})),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(s=d.fullName)||void 0===s?void 0:s.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Username"}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({defaultValue:"",name:"username",type:"text"},u("username")),{},{className:"form-control ".concat(d.username?"is-invalid":"")})),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(a=d.username)||void 0===a?void 0:a.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Email"}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({defaultValue:"",name:"email",type:"email"},u("email")),{},{className:"form-control ".concat(d.email?"is-invalid":"")})),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(r=d.email)||void 0===r?void 0:r.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Password"}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({defaultValue:"",name:"password",type:"password"},u("password")),{},{className:"form-control ".concat(d.password?"is-invalid":"")})),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(t=d.password)||void 0===t?void 0:t.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"username",children:"Confirm Password"}),Object(o.jsx)("input",Object(m.a)(Object(m.a)({defaultValue:"",name:"confirmPassword",type:"password"},u("confirmPassword")),{},{className:"form-control ".concat(d.confirmPassword?"is-invalid":"")})),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(c=d.confirmPassword)||void 0===c?void 0:c.message})]}),Object(o.jsxs)("div",{className:"form-group form-check",children:[Object(o.jsx)("input",Object(m.a)(Object(m.a)({name:"acceptTerms",type:"checkbox"},u("acceptTerms")),{},{className:"form-check-input ".concat(d.acceptTerms?"is-invalid":"")})),Object(o.jsx)("label",{htmlFor:"acceptTerms",className:"form-check-label",children:"I have read and agree to the Terms"}),Object(o.jsx)("div",{className:"invalid-feedback",children:null===(i=d.acceptTerms)||void 0===i?void 0:i.message})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:Object(o.jsx)("span",{children:"Register"})}),Object(o.jsx)("button",{type:"button",onClick:function(){return h()},className:"btn btn-warning float-right",style:{marginTop:"2rem"},children:Object(o.jsx)("span",{children:"Reset"})})]}),b&&Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("div",{className:n?"alert alert-success":"alert alert-danger",role:"alert",children:b})})]})})]})},u=a(13),j=a(96),b=a(107);s.default=function(){var e=Object(t.useState)(!1),s=Object(r.a)(e,2),a=s[0],m=s[1],h=Object(i.c)((function(e){return e.message})).message,f=Object(i.b)(),O=l.b().shape({fullName:l.d().required("Fullname is required"),username:l.d().required("Username is required").min(6,"Username must be at least 6 characters").max(20,"Username must not exceed 20 characters"),email:l.d().required("Email is required").email("Email is invalid"),password:l.d().required("Password is required").min(6,"Password must be at least 6 characters").max(40,"Password must not exceed 40 characters"),confirmPassword:l.d().required("Confirm Password is required").oneOf([l.c("password"),null],"Confirm Password does not match"),acceptTerms:l.a().oneOf([!0],"Accept Terms is required")}),p=Object(c.d)({resolver:Object(n.a)(O)}),x=p.register,v=p.handleSubmit,g=p.reset,N=p.formState.errors;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"button-wrapper",children:[Object(o.jsx)(j.a,{}),Object(o.jsx)(b.a,{})]}),Object(o.jsx)(d,{successful:a,message:h,onSubmit:function(e){0===Array.from(N).length&&f(u.a.auth.register(e)).then((function(){m(!0)})).catch((function(){m(!1)}))},errors:N,register:x,handleSubmit:v,reset:g})]})}},96:function(e,s,a){"use strict";a(0);var r=a(18),t=a(1);s.a=function(){return Object(t.jsx)(r.a,{to:"/login",children:Object(t.jsx)("div",{className:"form-group",style:{marginLeft:"1rem"},children:Object(t.jsx)("button",{type:"button",className:"btn btn-outline-primary",children:"Log in"})})})}}}]);
//# sourceMappingURL=4.f1906f38.chunk.js.map