(this["webpackJsonpholiday-ui"]=this["webpackJsonpholiday-ui"]||[]).push([[0],{12:function(t,e,n){"use strict";var c=n(1),r=n(7),i=n.n(r),a=n(8),s=n(20),o=n(21),l=n(9);e.a=function(t){var e=t.text,n=function(){var t=Object(a.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{navigator.clipboard.writeText(e)}catch(n){console.log(n)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(l.a,{variant:"outline-secondary",size:"sm",onClick:function(){return n(e)},children:Object(c.jsx)(s.a,{icon:o.a})})})}},19:function(t,e,n){"use strict";(function(t){var c=n(1),r=n(16),i=n(7),a=n.n(i),s=n(8),o=n(0),l=n(13),j=n(9),d=n(22),h=n(12),u=(n(35),t.URL),b=u.createObjectURL,x=u.revokeObjectURL,O=function(){var t=Object(s.a)(a.a.mark((function t(){var e,n,c,r=arguments;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},t.next=4,fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return c=t.sent,t.abrupt("return",c.json());case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e.a=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],i=e[1];return Object(o.useEffect)((function(){var t=localStorage.getItem("output");t&&i(t)}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l.a,{children:Object(c.jsx)(l.a.Group,{children:Object(c.jsx)(l.a.File,{id:"fileChooser",label:"Select exported Booker txt file.",multiple:!1,accept:".csv,.txt,text/csv,text/plain",onChange:function(t){return function(t){var e=t.target.files[0],n=new FileReader;n.readAsText(e),n.onload=Object(s.a)(a.a.mark((function t(){var e;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("POSTING..."),t.next=3,O("https://lraulin.pythonanywhere.com/holiday",{date:"2021-01-01",csv:n.result});case 3:e=t.sent,i(e),localStorage.setItem("output",e),console.log(e);case 7:case"end":return t.stop()}}),t)}))),n.onerror=function(){console.log(n.error)}}(t)}})})}),n?Object(c.jsxs)("div",{id:"outputDisplay",children:[Object(c.jsxs)("div",{className:"float-right",children:[Object(c.jsx)(j.a,{variant:"danger",onClick:function(){i(""),localStorage.removeItem("output")},children:"Reset"}),Object(c.jsx)(j.a,{variant:"info",onClick:function(){var t="Holiday Pay Adjustments"+(new Date).toISOString()+".csv";!function(t,e,n){var c=document.createElement("a"),r=new Blob([t],{type:n});c.href=b(r),c.download=e,c.click(),x(c.href)}(n,t,"text/csv")},children:"Download"})]}),Object(c.jsxs)(d.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Created At"}),Object(c.jsx)("th",{children:"Worker"}),Object(c.jsx)("th",{children:"Start Time"}),Object(c.jsx)("th",{children:"End Time"}),Object(c.jsx)("th",{children:"Total Hours"}),Object(c.jsx)("th",{children:"Overtime"}),Object(c.jsx)("th",{children:"Pay Rate"}),Object(c.jsx)("th",{children:"Memo"}),Object(c.jsx)("th",{children:"Adjustment"})]})}),Object(c.jsx)("tbody",{children:n.split("\n").slice(1).map((function(t){return Object(c.jsx)("tr",{children:function(){var e=t.split(","),n=Object(r.a)(e,10),i=n[0],a=n[1],s=n[2],o=n[3],l=n[4],j=n[5],d=n[6],u=n[7],b=n[8],x=n[9];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("td",{children:i}),Object(c.jsx)("td",{children:a}),Object(c.jsxs)("td",{children:[s,Object(c.jsx)("div",{className:"float-right",children:Object(c.jsx)(h.a,{text:s})})]}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:l}),Object(c.jsx)("td",{children:j}),Object(c.jsx)("td",{children:d}),Object(c.jsxs)("td",{children:["$",u]}),Object(c.jsxs)("td",{children:[b," HOL",Object(c.jsx)("div",{className:"float-right",children:Object(c.jsx)(h.a,{text:b+" HOL"})})]}),Object(c.jsxs)("td",{children:["$",x,Object(c.jsx)("div",{className:"float-right",children:Object(c.jsx)(h.a,{text:Number.parseFloat(x).toFixed(2)})})]})]})}()})}))})]})]}):null]})}}).call(this,n(11))},28:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(0),i=n.n(r),a=n(18),s=n.n(a),o=(n(28),n(19)),l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),r(t),i(t),a(t)}))};n(37);s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(o.a,{})}),document.getElementById("root")),l()}},[[38,1,2]]]);
//# sourceMappingURL=main.05c1a32c.chunk.js.map