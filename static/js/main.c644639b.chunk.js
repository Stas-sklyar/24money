(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{118:function(e,n,s){},12:function(e,n,s){e.exports={"AddExpensesWindow-Box":"AddExpensesWindow_AddExpensesWindow-Box__1pve6","AddExpensesWindow-CloseIcon":"AddExpensesWindow_AddExpensesWindow-CloseIcon__2odHN","AddExpensesWindow-Title":"AddExpensesWindow_AddExpensesWindow-Title__1nCzT"}},17:function(e,n,s){e.exports={ItemsExpenses:"itemsExpenses_ItemsExpenses__1gjH0","ItemsExpenses-Diagram":"itemsExpenses_ItemsExpenses-Diagram__2urdp","ItemsExpenses-Item":"itemsExpenses_ItemsExpenses-Item__3X2w8","ItemsExpenses-WrapForIcon":"itemsExpenses_ItemsExpenses-WrapForIcon__3pFdA","ItemsExpenses-Icon":"itemsExpenses_ItemsExpenses-Icon__3mS-l","ItemsExpenses-Money":"itemsExpenses_ItemsExpenses-Money__17uD2"}},23:function(e,n,s){e.exports={"Header-Column":"Header_Header-Column__3cyC0","Header-Logo":"Header_Header-Logo__3Xbjx","Header-Btn":"Header_Header-Btn__3gWAT","Header-Label":"Header_Header-Label__MKTkm"}},264:function(e,n,s){"use strict";s.r(n);var t=s(0),c=s.n(t),a=s(11),i=s.n(a),o=(s(118),s(7)),r=s(26),d=s(102),l=s(19),p={addExpensesIsOpen:!1},u={isOpen:!1},j=s(16),x={historyExpensesList:[]},m={historyIncomesList:[]},b={isOpen:"none"},O={incomes:[{moneyIncome:4e3,id:0,comment:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430"},{moneyIncome:1300,id:1,comment:"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f"}]},h={inputExpenseAmountWindow:!1},E={itemsExpenses:[{expensesName:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",moneySpend:10,id:0,icon:"https://i.ibb.co/587QCcb/1.png",bgColor:"#FF6384"},{expensesName:"\u041a\u0430\u0444\u0435",moneySpend:20,id:1,icon:"https://i.ibb.co/K5vBxYX/2.png",bgColor:"#36A2EB"},{expensesName:"\u0414\u043e\u0441\u0443\u0433",moneySpend:100,id:2,icon:"https://i.ibb.co/DfSGjwY/3.png",bgColor:"#FFCE56"},{expensesName:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",moneySpend:5,id:3,icon:"https://i.ibb.co/KwDCn5q/4.png",bgColor:"#FF1156"},{expensesName:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",moneySpend:45,id:4,icon:"https://i.ibb.co/2MwCWLZ/5.png",bgColor:"#FF9E56"},{expensesName:"\u041f\u043e\u0434\u0430\u0440\u043a\u0438",moneySpend:50,id:5,icon:"https://i.ibb.co/7gHHM1r/6.png",bgColor:"#e01a4b"},{expensesName:"\u0421\u0435\u043c\u044c\u044f",moneySpend:20,id:6,icon:"https://i.ibb.co/jz4N7kG/7.png",bgColor:"#197b94"},{expensesName:"\u041f\u043e\u043a\u0443\u043f\u043a\u0438",moneySpend:150,id:7,icon:"https://i.ibb.co/jrc4bwQ/8.png",bgColor:"#c2351f"}]},f=Object(r.combineReducers)({itemsExpenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0,s=Object(j.a)(e.itemsExpenses);switch(n.type){case"ADD_EXPENSE_ITEM":return s.push(n.payload),{itemsExpenses:Object(j.a)(s)};case"INPUT_EXPENSE_SUM":return s.map((function(e){e.id===n.payload.id&&(e.moneySpend+=n.payload.sum)})),{itemsExpenses:Object(j.a)(s)};default:return e}},addExpensesIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_ADD_EXPENSES_WINDOW":return Object(l.a)(Object(l.a)({},e),{},{addExpensesIsOpen:n.payload});default:return e}},inputExpenseAmountWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW":return Object(l.a)(Object(l.a)({},e),{},{inputExpenseAmountWindow:n.payload});default:return e}},incomesWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_ADD_INCOMES_WINDOW":return Object(l.a)(Object(l.a)({},e),{},{isOpen:n.payload});default:return e}},incomesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,n=arguments.length>1?arguments[1]:void 0,s=Object(j.a)(e.incomes);switch(n.type){case"ADD_INCOME":return s.push(n.payload),{incomes:Object(j.a)(s)};default:return e}},historyWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_HISTORY_WINDOW":return Object(l.a)(Object(l.a)({},e),{},{isOpen:n.payload});default:return e}},historyExpenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0,s=Object(j.a)(e.historyExpensesList);switch(n.type){case"ADD_NEW_EXPENSES_HISTORY_ITEM":return s.push(n.payload),{historyExpensesList:Object(j.a)(s)};default:return e}},historyIncomes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0,s=Object(j.a)(e.historyIncomesList);switch(n.type){case"ADD_NEW_INCOMES_HISTORY_ITEM":return s.push(n.payload),{historyIncomesList:Object(j.a)(s)};default:return e}}}),I=Object(r.createStore)(f,Object(d.composeWithDevTools)(Object(r.applyMiddleware)())),g=s(309),y=s(310),_=s(265),N=s(64),v=s.n(N),W=s(21),A=s(17),w=s.n(A),C=s(2),S=function(){return Object(C.jsxs)("div",{className:w.a["ItemsExpenses-Item"],children:[Object(C.jsx)("div",{className:w.a["ItemsExpenses-Name"],children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(C.jsx)("div",{className:w.a["ItemsExpenses-WrapForIcon"],children:Object(C.jsx)("img",{className:w.a["ItemsExpenses-Icon"],src:"https://i.ibb.co/gwF9wSm/plus.png",alt:"icon"})})]})},D=s(103),T=function(){var e=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),n=[],s=[],t=[];e.map((function(e){n.push(e.expensesName),s.push(e.moneySpend),t.push(e.bgColor)}));var c={labels:n,datasets:[{data:s,backgroundColor:t,hoverBackgroundColor:t}]};return Object(C.jsx)(D.Doughnut,{data:c,width:750,height:200,options:{legend:{display:!1}}})},H=s(316),B=s(298),L=s(314),k=s(315),M=s(12),F=s.n(M),G=function(e){return{type:"TOGGLE_ADD_EXPENSES_WINDOW",payload:e}},P=function(e){return{type:"TOGGLE_ADD_INCOMES_WINDOW",payload:e}},X=function(e){return{type:"TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW",payload:e}},Y=function(e){return{type:"TOGGLE_HISTORY_WINDOW",payload:e}},U=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),s=Object(o.c)((function(e){return e.addExpensesIsOpen.addExpensesIsOpen})),c=Object(t.useState)(""),a=Object(W.a)(c,2),i=a[0],r=a[1],d=function(){i.length>3?(e({type:"ADD_EXPENSE_ITEM",payload:{expensesName:i,moneySpend:0,id:n.length,icon:"https://i.ibb.co/587QCcb/1.png",bgColor:"#dddddd"}}),e(G(!1))):alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435! ")};return Object(C.jsx)("div",{className:F.a.AddExpensesWindow,onKeyPress:function(e){"Enter"===e.key&&d()},onClick:function(n){n.target.className||e(G(!1))},children:Object(C.jsx)(H.a,{className:F.a["AddExpensesWindow-Body"],open:s,children:Object(C.jsx)(B.a,{in:s,timeout:400,children:Object(C.jsxs)("div",{className:F.a["AddExpensesWindow-Box"],children:[Object(C.jsx)("div",{className:F.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(G(!1))},children:"\u2715"}),Object(C.jsx)("h1",{className:F.a["AddExpensesWindow-Title"],children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(C.jsx)(L.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",fullWidth:!0,required:!0,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0425\u043e\u0431\u0431\u0438",margin:"normal",value:i,onChange:function(e){r(e.target.value)},autoFocus:!0}),Object(C.jsx)("div",{style:{marginTop:"25px"}}),Object(C.jsx)(k.a,{variant:"contained",size:"large",onClick:d,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})]})})})})},R=s(300),z=s(39),K=s.n(z),q=function(e){var n=e.curentItemId,s=e.curentCategory,c=Object(o.b)(),a=Object(o.c)((function(e){return e.inputExpenseAmountWindow.inputExpenseAmountWindow})),i=Object(o.c)((function(e){return e.historyExpenses.historyExpensesList})),r=Object(t.useState)(""),d=Object(W.a)(r,2),l=d[0],p=d[1],u=function(){if(parseInt(l)<=0||isNaN(parseInt(l)))alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f");else if(parseInt(l)>1e6)alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0441\u0443\u043c\u043c\u0430");else{c((o=n,r=parseInt(l),{type:"INPUT_EXPENSE_SUM",payload:{id:o,sum:r}}));var e=new Date,t=e.getMonth()+1,a=e.getDate()+" "+t+" "+e.getFullYear();c(function(e,n,s,t){return{type:"ADD_NEW_EXPENSES_HISTORY_ITEM",payload:{category:e,sum:n,id:s,date:t}}}(s,parseInt(l),i.length,a)),c(X(!1))}var o,r};return Object(C.jsx)("div",{className:K.a.InputOfExpenseAmount,onKeyPress:function(e){"Enter"===e.key&&u()},onClick:function(e){e.target.className||c(X(!1))},children:Object(C.jsx)(H.a,{className:K.a["InputOfExpenseAmount-Body"],open:a,children:Object(C.jsx)(B.a,{in:!0,timeout:400,children:Object(C.jsxs)("div",{className:K.a["InputOfExpenseAmount-Box"],children:[Object(C.jsx)("div",{className:K.a["InputOfExpenseAmount-CloseIcon"],onClick:function(){return c(X(!1))},children:"\u2715"}),Object(C.jsx)("h1",{className:K.a["InputOfExpenseAmount-Title"],children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438"}),Object(C.jsx)(R.a,{className:K.a["InputOfExpenseAmount-Input"],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",autoFocus:!0,type:"number",required:!0,value:l,onChange:function(e){p(e.target.value)}}),Object(C.jsx)(k.a,{variant:"contained",size:"large",onClick:u,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u043c\u043c\u0443"})]})})})})},J=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.incomesList.incomes})),s=Object(o.c)((function(e){return e.incomesWindow.isOpen})),c=Object(t.useState)(""),a=Object(W.a)(c,2),i=a[0],r=a[1],d=Object(t.useState)(""),l=Object(W.a)(d,2),p=l[0],u=l[1],j=function(){if(parseInt(i)<=0||isNaN(parseInt(i)))alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f");else if(parseInt(i)>1e6)alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u0441\u0443\u043c\u043c\u0430");else{var s=new Date,t=s.getMonth()+1,c=s.getDate()+" "+t+" "+s.getFullYear();e({type:"ADD_INCOME",payload:{moneyIncome:parseInt(i),id:n.length,comment:p}}),e(function(e,n,s,t){return{type:"ADD_NEW_INCOMES_HISTORY_ITEM",payload:{sum:e,comment:n,id:s,date:t}}}(parseInt(i),p,n.length,c)),e(P(!1))}};return Object(C.jsx)("div",{className:F.a.AddExpensesWindow,onKeyPress:function(e){"Enter"===e.key&&j()},onClick:function(n){n.target.className||e(P(!1))},children:Object(C.jsx)(H.a,{className:F.a["AddExpensesWindow-Body"],open:s,children:Object(C.jsx)(B.a,{in:s,timeout:400,style:{height:"350px"},children:Object(C.jsxs)("div",{className:F.a["AddExpensesWindow-Box"],children:[Object(C.jsx)("div",{className:F.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(P(!1))},children:"\u2715"}),Object(C.jsx)("h1",{className:F.a["AddExpensesWindow-Title"],children:"\u0414\u043e\u0445\u043e\u0434"}),Object(C.jsx)(L.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",variant:"outlined",fullWidth:!0,required:!0,placeholder:"\u0421\u0443\u043c\u043c\u0430",margin:"normal",value:i,onChange:function(e){r(e.target.value)},autoFocus:!0}),Object(C.jsx)(L.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",variant:"outlined",fullWidth:!0,placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",margin:"normal",value:p,onChange:function(e){u(e.target.value)}}),Object(C.jsx)("div",{style:{marginTop:"25px"}}),Object(C.jsx)(k.a,{variant:"contained",size:"large",onClick:j,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434"})]})})})})},Q=s(302),Z=s(303),V=s(304),$=s(305),ee=s(306),ne=s(307),se=s(308),te=Object(Q.a)({table:{minWidth:650}}),ce=function(){var e=te(),n=Object(o.c)((function(e){return e.historyExpenses.historyExpensesList})),s=n;return Object(C.jsx)(Z.a,{component:_.a,children:Object(C.jsxs)(V.a,{className:e.table,"aria-label":"simple table",children:[Object(C.jsx)($.a,{children:Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(ne.a,{align:"left",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(C.jsx)(ne.a,{align:"left",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(C.jsx)(ne.a,{align:"left",children:"\u0414\u0430\u0442\u0430"})]})}),Object(C.jsxs)(se.a,{children:[n.length>0&&s.map((function(e){return Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(ne.a,{component:"th",scope:"row",children:e.category}),Object(C.jsxs)(ne.a,{align:"left",children:["-",e.sum]}),Object(C.jsx)(ne.a,{align:"left",children:e.date})]},e.id)})),0===n.length&&Object(C.jsx)("h4",{style:{display:"flex",margin:0,padding:"10px"},children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430  \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442\u0443, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u0435\u0440\u0432\u0443\u044e \u0442\u0440\u0430\u0442\u0443"})]})]})})},ae=Object(Q.a)({table:{minWidth:650}}),ie=function(){var e=ae(),n=Object(o.c)((function(e){return e.historyIncomes.historyIncomesList})),s=n;return Object(C.jsx)(Z.a,{component:_.a,children:Object(C.jsxs)(V.a,{className:e.table,"aria-label":"simple table",children:[Object(C.jsx)($.a,{children:Object(C.jsxs)(ee.a,{children:[Object(C.jsx)(ne.a,{align:"left",children:"\u0421\u0443\u043c\u043c\u0430"}),Object(C.jsx)(ne.a,{align:"left",children:"\u0414\u0430\u0442\u0430"}),Object(C.jsx)(ne.a,{align:"left",children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})}),Object(C.jsxs)(se.a,{children:[n.length>0&&s.map((function(e){return Object(C.jsxs)(ee.a,{children:[Object(C.jsxs)(ne.a,{align:"left",children:["+",e.sum]}),Object(C.jsx)(ne.a,{align:"left",children:e.date}),Object(C.jsx)(ne.a,{align:"left",children:e.comment})]},e.id)})),0===n.length&&Object(C.jsx)("h4",{style:{display:"flex",margin:0,padding:"10px"},children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430  \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442\u0443, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u0435\u0440\u0432\u0443\u044e \u0442\u0440\u0430\u0442\u0443"})]})]})})},oe=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.historyWindow.isOpen}));return Object(C.jsxs)("div",{className:F.a.AddExpensesWindow,onClick:function(n){n.target.className||e(Y("none"))},children:[Object(C.jsx)(H.a,{className:F.a["AddExpensesWindow-Body"],open:"expenses"===n,children:Object(C.jsx)(B.a,{in:"expenses"===n,timeout:400,style:{height:"auto",width:"800px"},children:Object(C.jsxs)("div",{className:F.a["AddExpensesWindow-Box"],children:[Object(C.jsx)("div",{className:F.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(Y("none"))},children:"\u2715"}),Object(C.jsx)("h1",{className:F.a["AddExpensesWindow-Title"],children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u0440\u0430\u0442"}),Object(C.jsx)(ce,{})]})})}),Object(C.jsx)(H.a,{className:F.a["AddExpensesWindow-Body"],open:"incomes"===n,children:Object(C.jsx)(B.a,{in:"incomes"===n,timeout:400,style:{height:"auto",width:"800px"},children:Object(C.jsxs)("div",{className:F.a["AddExpensesWindow-Box"],children:[Object(C.jsx)("div",{className:F.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(Y("none"))},children:"\u2715"}),Object(C.jsx)("h1",{className:F.a["AddExpensesWindow-Title"],children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u043e\u0445\u043e\u0434\u043e\u0432"}),Object(C.jsx)(ie,{})]})})})]})},re=function(){var e=Object(o.b)(),n=Object(t.useState)(0),s=Object(W.a)(n,2),c=s[0],a=s[1],i=Object(t.useState)(""),r=Object(W.a)(i,2),d=r[0],l=r[1],p=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),u=Object(o.c)((function(e){return e.addExpensesIsOpen.addExpensesIsOpen})),j=Object(o.c)((function(e){return e.inputExpenseAmountWindow.inputExpenseAmountWindow})),x=Object(o.c)((function(e){return e.incomesWindow.isOpen})),m=Object(o.c)((function(e){return e.historyWindow.isOpen}));return Object(C.jsxs)("div",{className:w.a.ItemsExpenses,children:[p.length>0&&p.map((function(n){var s=n.expensesName,t=n.moneySpend,c=n.id,i=n.icon,o=n.bgColor;return Object(C.jsxs)("div",{className:w.a["ItemsExpenses-Item"],children:[Object(C.jsx)("div",{className:w.a["ItemsExpenses-Name"],children:s}),Object(C.jsx)("div",{className:w.a["ItemsExpenses-WrapForIcon"],style:{backgroundColor:o},onClick:function(){return function(n,s){a(n),l(s),e(X(!0))}(c,s)},children:Object(C.jsx)("img",{className:w.a["ItemsExpenses-Icon"],src:i,alt:"icon"})}),Object(C.jsxs)("div",{className:w.a["ItemsExpenses-Money"],children:[t,Object(C.jsx)("span",{children:" \u20b4"})]})]},c)})),j&&Object(C.jsx)(q,{curentItemId:c,curentCategory:d}),Object(C.jsx)("div",{className:w.a["ItemsExpenses-Diagram"],children:Object(C.jsx)(T,{})}),Object(C.jsx)("div",{onClick:function(){return e(G(!0))},children:p.length<9&&Object(C.jsx)(S,{})}),u&&Object(C.jsx)(U,{}),x&&Object(C.jsx)(J,{}),m&&Object(C.jsx)(oe,{})]})},de=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(g.a,{}),Object(C.jsx)("div",{className:v.a.Expenses,children:Object(C.jsx)(y.a,{className:v.a["Expenses-Body"],maxWidth:"lg",children:Object(C.jsx)(_.a,{className:v.a["Expenses-Box"],elevation:2,variant:"outlined",children:Object(C.jsx)(re,{})})})})]})},le=s(311),pe=s(312),ue=s(313),je=s(23),xe=s.n(je),me=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),s=0;n.map((function(e){var n=e.moneySpend;s+=n}));var t=Object(o.c)((function(e){return e.incomesList.incomes})),c=0;return t.map((function(e){var n=e.moneyIncome;c+=n})),Object(C.jsx)(le.a,{color:"default",className:xe.a.Header,children:Object(C.jsx)(pe.a,{children:Object(C.jsxs)(ue.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(C.jsxs)(ue.a,{item:!0,className:xe.a["Header-Column"],children:[Object(C.jsxs)("span",{className:xe.a["Header-Logo"],children:["24Money ",Object(C.jsx)("span",{children:"(demo)"})]}),Object(C.jsx)(k.a,{variant:"outlined",className:xe.a["Header-Btn"],onClick:function(){return e(P(!0))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434\u044b"})]}),Object(C.jsxs)(ue.a,{item:!0,className:xe.a["Header-Column"],children:[Object(C.jsx)(k.a,{variant:"outlined",className:xe.a["Header-Btn"],onClick:function(){return e(Y("expenses"))},children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0442\u0440\u0430\u0442"}),Object(C.jsx)(k.a,{variant:"outlined",className:xe.a["Header-Btn"],onClick:function(){return e(Y("incomes"))},children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u043e\u0445\u043e\u0434\u043e\u0432"}),Object(C.jsxs)("span",{className:xe.a["Header-Label"],children:["\u0420\u0430\u0441\u0445\u043e\u0434\u044b: ",Object(C.jsxs)("b",{children:["-",s,"\u20b4"]})]}),Object(C.jsxs)("span",{className:xe.a["Header-Label"],children:[" \u0414\u043e\u0445\u043e\u0434\u044b: ",Object(C.jsxs)("b",{children:["+",c,"\u20b4"]})," "]})]})]})})})},be=function(){return Object(C.jsxs)(o.a,{store:I,children:[Object(C.jsx)(me,{}),Object(C.jsx)(de,{})]})};i.a.render(c.a.createElement(be),document.getElementById("root"))},39:function(e,n,s){e.exports={"InputOfExpenseAmount-Box":"InputOfExpenseAmount_InputOfExpenseAmount-Box__31nwi","InputOfExpenseAmount-CloseIcon":"InputOfExpenseAmount_InputOfExpenseAmount-CloseIcon__3c7hJ","InputOfExpenseAmount-Title":"InputOfExpenseAmount_InputOfExpenseAmount-Title__1DSkr","InputOfExpenseAmount-Input":"InputOfExpenseAmount_InputOfExpenseAmount-Input__3ZL3T"}},64:function(e,n,s){e.exports={Expenses:"Expenses_Expenses__1WDzg","Expenses-Body":"Expenses_Expenses-Body__2JdEa","Expenses-Box":"Expenses_Expenses-Box__27I4d"}}},[[264,1,2]]]);
//# sourceMappingURL=main.c644639b.chunk.js.map