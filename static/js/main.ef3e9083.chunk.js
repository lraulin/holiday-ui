(this["webpackJsonpholiday-ui"]=this["webpackJsonpholiday-ui"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(3),i=n(0),r=n.n(i),o=n(13),l=n.n(o),s=(n(22),n(10)),a=n.n(s),d=n(11),j=n(14),h=n(6),u=n(16),p=n(15);n(24);function b(){return(b=Object(j.a)(a.a.mark((function e(){var t,n,c,i=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"",n=i.length>1&&void 0!==i[1]?i[1]:{},e.next=4,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return c=e.sent,e.abrupt("return",c.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(){var e=Object(i.useState)(""),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(i.useState)(""),l=Object(d.a)(o,2),s=l[0],a=l[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(h.a,{children:[Object(c.jsxs)(h.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)(h.a.Label,{children:Object(c.jsx)("em",{children:"Paste Booker export here:"})}),Object(c.jsx)(h.a.Control,{as:"textarea",rows:3,value:n,onChange:function(e){return r(e.target.value)}})]}),Object(c.jsx)(u.a,{variant:"primary",onClick:function(){console.log("POSTING..."),function(){return b.apply(this,arguments)}("https://lraulin.pythonanywhere.com/holiday",{date:"2021-01-01",csv:n}).then((function(e){a(e),console.log(e)}))},children:"Submit"})]}),Object(c.jsx)("h3",{children:"Instructions (If using Windows):"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:"Export Timecards from Booker."}),Object(c.jsx)("li",{children:"Open downloaded file with Notepad; select all and copy."}),Object(c.jsx)("li",{children:"Paste into textbox above and click button."})]}),Object(c.jsx)("h4",{children:"Optional (If you want to view it in Excel)"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:['Scroll down to "Raw Output (CSV Text)" at bottom. Double-click output text; copy ',"&"," paste into empty Notepad file."]}),Object(c.jsxs)("li",{children:["File ",">",' Save as... Click on "Save as type" dropdown, select "All files (*.*)"']}),Object(c.jsx)("li",{children:"Enter filename (anything you want).csv"}),Object(c.jsx)("li",{children:"Now you can open the file with MS Excel (or LibreOffice Calc or other spreadsheet app)!"}),Object(c.jsxs)("li",{children:["(If double-clicking on the file doesn't work, try Right Click ",">"," ","Open With... and selecting a spreadsheet program.)"]})]}),Object(c.jsx)("h3",{children:"Table"}),Object(c.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,children:[Object(c.jsx)("thead",{children:Object(c.jsx)("tr",{children:s.split("\n")[0].split(",").map((function(e){return Object(c.jsx)("th",{children:e})}))})}),Object(c.jsx)("tbody",{children:s.split("\n").slice(1).map((function(e){return Object(c.jsx)("tr",{children:e.split(",").map((function(e){return Object(c.jsx)("td",{children:e})}))})}))})]}),Object(c.jsx)("h3",{children:"Raw Output (CSV text)"}),Object(c.jsx)("p",{children:s})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};n(28);l.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.ef3e9083.chunk.js.map