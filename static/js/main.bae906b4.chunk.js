(this["webpackJsonpholiday-ui"]=this["webpackJsonpholiday-ui"]||[]).push([[0],{26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),i=n(17),s=n.n(i),o=(n(26),n(7)),l=n.n(o),d=n(8),j=n(12),u=n(11),h=n(9),b=n(20),O=n(18),p=n(19),x=function(e){var t=e.text,n=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{navigator.clipboard.writeText(t)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(h.a,{variant:"outline-secondary",size:"sm",onClick:function(){return n(t)},children:Object(r.jsx)(O.a,{icon:p.a})})})},f=(n(33),function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{navigator.clipboard.writeText(t)}catch(n){console.log(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),m=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",n=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return r=e.sent,e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return(e.getMonth()+1).toString().padStart(2,"0")+"/"+e.getDate().toString().padStart(2,"0")+"/"+e.getFullYear()},g=function(){var e,t=new Date,n=new Date(t-10368e5),r={startDate:v(n),endDate:v(t),type:"HOURLY",status:"submitted,confirmed,preapproved",dateRangeType:"workDate"};return e=r,Object.keys(e).map((function(t){return t+"="+e[t]})).join("&")},y=function(e){var t=e.displayText;return Object(r.jsx)("a",{href:"https://www.snapnursebooker.com/admin/timecards?"+g(),target:"_blank",rel:"noreferrer",children:t})},w=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],O=s[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("output"),t=JSON.parse(localStorage.getItem("super_admin_list"));e&&a(e),t&&O(t)}),[]),Object(r.jsxs)("div",{className:"App",children:["Follow ",Object(r.jsx)(y,{displayText:"this link"}),' and click "Export CSV".',Object(r.jsx)(u.a,{children:Object(r.jsx)(u.a.Group,{children:Object(r.jsx)(u.a.File,{id:"fileChooser",label:"Select the downloaded text file in your Downloads folder.",multiple:!1,accept:".csv,.txt,text/csv,text/plain",onChange:function(e){return function(e){var t=e.target.files[0],n=new FileReader;try{n.readAsText(t)}catch(r){console.log(r)}n.onload=Object(d.a)(l.a.mark((function e(){var t,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("POSTING..."),e.next=4,m("https://lraulin.pythonanywhere.com/holiday",{date:"2021-01-01",csv:n.result});case 4:t=e.sent,r=t.csv,c=t.super_admin_list,a(r),localStorage.setItem("output",r),c.length&&(O(c),localStorage.setItem("super_admin_list",JSON.stringify(c)));case 10:case"end":return e.stop()}}),e)}))),n.onerror=function(){console.log(n.error)}}(e)}})})}),o.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:["Admin Approval Needed For (",o.length,"):"]}),o.map((function(e){return Object(r.jsxs)("span",{onClick:function(){return f(e)},children:[e,","]})}))]}):null,n?Object(r.jsxs)("div",{id:"outputDisplay",children:[Object(r.jsxs)("div",{className:"float-right",children:[Object(r.jsx)(h.a,{variant:"danger",onClick:function(){a(""),O(""),localStorage.removeItem("output"),localStorage.removeItem("super_admin_list")},children:"Reset"}),Object(r.jsx)(h.a,{variant:"info",onClick:function(){var e="Holiday Pay Adjustments"+(new Date).toISOString()+".csv";!function(e,t,n){var r=document.createElement("a"),c=new Blob([e],{type:n});r.href=URL.createObjectURL(c),r.download=t,r.click(),URL.revokeObjectURL(r.href)}(n,e,"text/csv")},children:"Download"})]}),Object(r.jsxs)(b.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Created At"}),Object(r.jsx)("th",{children:"Worker"}),Object(r.jsx)("th",{children:"Start Time"}),Object(r.jsx)("th",{children:"End Time"}),Object(r.jsx)("th",{children:"Total Hours"}),Object(r.jsx)("th",{children:"Overtime"}),Object(r.jsx)("th",{children:"Pay Rate"}),Object(r.jsx)("th",{children:"Memo"}),Object(r.jsx)("th",{children:"Adjustment"}),Object(r.jsx)("th",{children:"Total"})]})}),Object(r.jsx)("tbody",{children:n.split("\n").slice(1).map((function(e){var t=e.split(","),n=Object(j.a)(t,11),c=n[0],a=n[1],i=n[2],s=n[3],o=n[4],l=n[5],d=n[6],u=n[7],h=n[8],b=n[9],O=n[10],p=Number.parseFloat(O)>=2e3?{color:"red"}:{};return Object(r.jsx)("tr",{style:p,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("td",{children:c}),Object(r.jsx)("td",{children:a}),Object(r.jsxs)("td",{children:[i,Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(x,{text:i})})]}),Object(r.jsx)("td",{children:s}),Object(r.jsx)("td",{children:o}),Object(r.jsx)("td",{children:l}),Object(r.jsx)("td",{children:d}),Object(r.jsxs)("td",{children:["$",u]}),Object(r.jsxs)("td",{children:[h," HOL",Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(x,{text:h+" HOL"})})]}),Object(r.jsxs)("td",{children:["$",b,Object(r.jsx)("div",{className:"float-right",children:Object(r.jsx)(x,{text:Number.parseFloat(b).toFixed(2)})})]}),Object(r.jsxs)("td",{children:["$",O]})]})})}))})]})]}):null]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};n(35);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(w,{})}),document.getElementById("root")),S()}},[[36,1,2]]]);
//# sourceMappingURL=main.bae906b4.chunk.js.map