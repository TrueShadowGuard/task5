(this.webpackJsonptask5=this.webpackJsonptask5||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(27),o=n.n(a),s=(n(34),n(12)),i=(n(35),n(15)),l=n(2),u=n(8),p=n.n(u),h=n(9),d=n(1),b=function(e){var t=c.a.createRef(),n=Object(l.g)();return Object(d.jsxs)("form",{className:"container mt-5",onSubmit:function(e){return e.preventDefault()},ref:t,children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"username",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter username"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password"})}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark",onClick:function(){return function(e,t,n){return j.apply(this,arguments)}(t,e.setAuthorization,n)},children:"Submit"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-dark ml-1",onClick:function(){return function(e,t){return m.apply(this,arguments)}(t,e.setAuthorization)},children:"Register"})]})};function j(){return(j=Object(h.a)(p.a.mark((function e(t,n,r){var c,a,o,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("log"),c=t.current.querySelector("#email").value,a=t.current.querySelector("#password").value,e.prev=3,e.next=6,fetch("http://localhost:3001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:a})});case 6:return o=e.sent,e.next=9,o.json();case 9:s=e.sent,n(s.token),localStorage.setItem("authorization",s.token),r.push("/"),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(3);case 17:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function m(){return(m=Object(h.a)(p.a.mark((function e(t,n){var r,c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("reg"),r=t.current.parentNode.querySelector("#email").value,c=t.current.parentNode.querySelector("#password").value,console.log(r,c),e.next=7,fetch("http://localhost:3001/register",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({username:r,password:c})});case 7:return a=e.sent,e.next=10,a.json();case 10:o=e.sent,n(o.token),localStorage.setItem("authorization",o.token),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}var f=function(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("table",{className:"table table-hover table-sm table-bordered",children:[Object(d.jsx)("thead",{className:"thead-dark",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"#"}),Object(d.jsx)("th",{scope:"col",children:"name"}),Object(d.jsx)("th",{scope:"col",children:"banned"}),Object(d.jsx)("th",{scope:"col",children:"select"})]})}),Object(d.jsx)("tbody",{children:e.data.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e._id}),Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:""+e.banned}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"checkbox",onChange:function(t){e.selected=t.target.checked,console.log(e)}})})]})}))})]})})},x=n(29),O=(n(43),function(e){return Object(d.jsxs)("div",{className:"m-1",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-dark",onClick:function(){return g("block",e)},children:"block selected"}),Object(d.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(){return g("unblock",e)},children:"unblock selected"}),Object(d.jsx)(x.a,{size:"1.5rem",onClick:function(){return g("delete",e)}})]})});function g(e,t){return v.apply(this,arguments)}function v(){return(v=Object(h.a)(p.a.mark((function e(t,n){var r,c,a,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,c=n.setRows,e.prev=1,console.log("DATA TO SEND",r),e.next=5,fetch("http://localhost:3001/getData",{method:"POST",headers:{Authorization:localStorage.getItem("authorization"),"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({action:t,data:r})});case 5:return a=e.sent,e.next=8,a.json();case 8:o=e.sent,console.log(o),c(o),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})))).apply(this,arguments)}var y=[];function k(){return(k=Object(h.a)(p.a.mark((function e(t,n){var r,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/getData",{method:"GET",headers:{Authorization:localStorage.getItem("authorization")}});case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,console.log(c),JSON.stringify(t)!==JSON.stringify(c)){e.next=9;break}return e.abrupt("return");case 9:console.log(c),n(c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=[{path:"/login",component:b}],N=[{path:"/",component:function(e){var t=Object(r.useState)(y),n=Object(s.a)(t,2),c=n[0],a=n[1];return function(e,t){k.apply(this,arguments)}(c,a),Object(d.jsxs)("div",{children:[Object(d.jsx)(O,{data:c,setRows:a}),Object(d.jsx)(f,{data:c})]})}}];var w=function(){var e=Object(r.useState)(localStorage.getItem("authorization")),t=Object(s.a)(e,2),n=t[0],c=t[1];return console.log(n),Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.d,{children:[n&&N.map((function(e){return Object(d.jsx)(l.b,{exact:!0,path:e.path,component:function(){return e.component({setAuthorization:c})}})})),S.map((function(e){return Object(d.jsx)(l.b,{exact:!0,path:e.path,component:function(){return e.component({setAuthorization:c})}})})),Object(d.jsx)(l.a,{to:"/login"})]})})};n(62);o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6cc0be66.chunk.js.map