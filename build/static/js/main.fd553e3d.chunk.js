(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),c=t.n(u),o=t(4),l=t(2),i=t(3),m=t.n(i),s=function(e){var n=e.name,t=e.phone,a=e.deletePhoneNumber;return r.a.createElement("li",null,n," ",t,r.a.createElement("button",{onClick:a},"Delete Phone"))},d=function(e){var n=e.people,t=e.deletePhoneNumber;return console.log(n),r.a.createElement("ul",null,n.map((function(e){return r.a.createElement(s,{key:e.name,name:e.name,phone:e.number,deletePhoneNumber:function(){return t(e.id)}})})))},f=function(e){return r.a.createElement("form",{onSubmit:e.addPerson},r.a.createElement("div",null,"name:"," ",r.a.createElement("input",{value:e.newName,onChange:e.handlePersonChange}),r.a.createElement("div",null,"number:"," ",r.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},h=function(e){var n=e.search,t=e.handler;return r.a.createElement("div",null,"Search: ",r.a.createElement("input",{value:n,onChange:t}))},b="/api/persons",p=function(){return m.a.get(b).then((function(e){return e.data}))},E=function(e){return m.a.post(b,e).then((function(e){return e.data}))},v=function(e,n){return m.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},g=function(e){return m.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},j=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},O=function(){var e,n=Object(a.useState)([]),t=Object(l.a)(n,2),u=t[0],c=t[1],i=Object(a.useState)(""),m=Object(l.a)(i,2),s=m[0],b=m[1],O=Object(a.useState)(""),w=Object(l.a)(O,2),N=w[0],C=w[1],P=Object(a.useState)(""),y=Object(l.a)(P,2),S=y[0],k=y[1],D=Object(a.useState)(""),T=Object(l.a)(D,2),J=T[0],U=T[1],x=Object(a.useState)(""),A=Object(l.a)(x,2),B=A[0],I=A[1];Object(a.useEffect)((function(){p().then((function(e){c(e)}))}),[]);return e=u.filter((function(e){return console.log(u),e.name?e.name.toUpperCase().includes(S.toUpperCase()):null})),r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(j,{message:J,type:B}),r.a.createElement(h,{search:S,handler:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(f,{handlePersonChange:function(e){b(e.target.value)},handleNumberChange:function(e){C(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:s,number:N};if(u.filter((function(e){return e.name===s})).length>0){if(window.confirm("Would you like to edit ".concat(s))){var t=u.find((function(e){return e.name===s})),a=Object(o.a)(Object(o.a)({},t),{},{number:N});v(a.id,a).then((function(e){c(u.map((function(n){return n.id!==a.id?n:e}))),U("".concat(n.name," had his details updated")),setTimeout((function(){U(null)}),5e3),I("success")})).catch((function(e){U("".concat(e.response.data.error)),I("error")}))}}else E(n).then((function(e){c(u.concat(e)),b(""),C(""),U("".concat(n.name," was added to the server")),setTimeout((function(){U(null)}),5e3),I("success")})).catch((function(e){U("".concat(e.response.data.error)),I("error")}))},newName:s,newNumber:N}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{people:e,deletePhoneNumber:function(e){window.confirm("Do you really want to delte the user?")&&g(e).then((function(n){c(u.map((function(t){return t.id!==e?t:n})))})).catch((function(n){U("that person was already removed from the server"),setTimeout((function(){U(null)}),5e3),I("error"),c(u.filter((function(n){return n.id!==e})))}))}}))};t(37);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fd553e3d.chunk.js.map