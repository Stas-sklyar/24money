(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{115:function(e,n,s){},14:function(e,n,s){e.exports={ItemsExpenses:"itemsExpenses_ItemsExpenses__1gjH0","ItemsExpenses-Diagram":"itemsExpenses_ItemsExpenses-Diagram__2urdp","ItemsExpenses-Item":"itemsExpenses_ItemsExpenses-Item__3X2w8","ItemsExpenses-WrapForIcon":"itemsExpenses_ItemsExpenses-WrapForIcon__3pFdA","ItemsExpenses-Icon":"itemsExpenses_ItemsExpenses-Icon__3mS-l","ItemsExpenses-Money":"itemsExpenses_ItemsExpenses-Money__17uD2"}},16:function(e,n,s){e.exports={"AddExpensesWindow-Box":"AddExpensesWindow_AddExpensesWindow-Box__1pve6","AddExpensesWindow-CloseIcon":"AddExpensesWindow_AddExpensesWindow-CloseIcon__2odHN","AddExpensesWindow-Title":"AddExpensesWindow_AddExpensesWindow-Title__1nCzT"}},23:function(e,n,s){e.exports={"Header-Column":"Header_Header-Column__3cyC0","Header-Logo":"Header_Header-Logo__3Xbjx","Header-Btn":"Header_Header-Btn__3gWAT","Header-Label":"Header_Header-Label__MKTkm"}},261:function(e,n,s){"use strict";s.r(n);var t=s(0),a=s.n(t),c=s(10),i=s.n(c),o=(s(115),s(11)),d=s(24),r=s(100),p=s(22),l={addExpensesIsOpen:!1},u={isOpen:!1},m=s(37),x={incomes:[{moneyIncome:4e3,id:0,comment:"\u0417\u0430\u0440\u0430\u0431\u043e\u0442\u043d\u0430\u044f \u043f\u043b\u0430\u0442\u0430"},{moneyIncome:1300,id:1,comment:"\u0421\u0442\u0438\u043f\u0435\u043d\u0434\u0438\u044f"}]},j={inputExpenseAmountWindow:!1},b={itemsExpenses:[{expensesName:"\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",moneySpend:10,id:0,icon:"https://i.ibb.co/587QCcb/1.png",bgColor:"#FF6384"},{expensesName:"\u041a\u0430\u0444\u0435",moneySpend:20,id:1,icon:"https://i.ibb.co/K5vBxYX/2.png",bgColor:"#36A2EB"},{expensesName:"\u0414\u043e\u0441\u0443\u0433",moneySpend:100,id:2,icon:"https://i.ibb.co/DfSGjwY/3.png",bgColor:"#FFCE56"},{expensesName:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442",moneySpend:5,id:3,icon:"https://i.ibb.co/KwDCn5q/4.png",bgColor:"#FF1156"},{expensesName:"\u0417\u0434\u043e\u0440\u043e\u0432\u044c\u0435",moneySpend:45,id:4,icon:"https://i.ibb.co/2MwCWLZ/5.png",bgColor:"#FF9E56"},{expensesName:"\u041f\u043e\u0434\u0430\u0440\u043a\u0438",moneySpend:50,id:5,icon:"https://i.ibb.co/7gHHM1r/6.png",bgColor:"#e01a4b"},{expensesName:"\u0421\u0435\u043c\u044c\u044f",moneySpend:20,id:6,icon:"https://i.ibb.co/jz4N7kG/7.png",bgColor:"#197b94"},{expensesName:"\u041f\u043e\u043a\u0443\u043f\u043a\u0438",moneySpend:150,id:7,icon:"https://i.ibb.co/jrc4bwQ/8.png",bgColor:"#c2351f"}]},O=Object(d.combineReducers)({itemsExpenses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0,s=Object(m.a)(e.itemsExpenses);switch(n.type){case"ADD_EXPENSE_ITEM":return s.push(n.payload),{itemsExpenses:Object(m.a)(s)};case"INPUT_EXPENSE_SUM":return s.map((function(e){e.id===n.payload.id&&(e.moneySpend+=n.payload.sum)})),{itemsExpenses:Object(m.a)(s)};default:return e}},addExpensesIsOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_ADD_EXPENSES_WINDOW":return Object(p.a)(Object(p.a)({},e),{},{addExpensesIsOpen:n.payload});default:return e}},inputExpenseAmountWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW":return Object(p.a)(Object(p.a)({},e),{},{inputExpenseAmountWindow:n.payload});default:return e}},incomesWindow:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"TOGGLE_ADD_INCOMES_WINDOW":return Object(p.a)(Object(p.a)({},e),{},{isOpen:n.payload});default:return e}},incomesList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0,s=Object(m.a)(e.incomes);switch(n.type){case"ADD_INCOME":return s.push(n.payload),{incomes:Object(m.a)(s)};default:return e}}}),E=Object(d.createStore)(O,Object(r.composeWithDevTools)(Object(d.applyMiddleware)())),h=s(298),I=s(299),f=s(262),_=s(61),N=s.n(_),g=s(21),v=s(14),y=s.n(v),A=s(2),W=function(){return Object(A.jsxs)("div",{className:y.a["ItemsExpenses-Item"],children:[Object(A.jsx)("div",{className:y.a["ItemsExpenses-Name"],children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(A.jsx)("div",{className:y.a["ItemsExpenses-WrapForIcon"],children:Object(A.jsx)("img",{className:y.a["ItemsExpenses-Icon"],src:"https://i.ibb.co/gwF9wSm/plus.png",alt:"icon"})})]})},C=s(101),w=function(){var e=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),n=[],s=[],t=[];e.map((function(e){n.push(e.expensesName),s.push(e.moneySpend),t.push(e.bgColor)}));var a={labels:n,datasets:[{data:s,backgroundColor:t,hoverBackgroundColor:t}]};return Object(A.jsx)(C.Doughnut,{data:a,width:750,height:200,options:{legend:{display:!1}}})},S=s(305),D=s(294),T=s(303),B=s(304),H=s(16),k=s.n(H),F=function(e){return{type:"TOGGLE_ADD_EXPENSES_WINDOW",payload:e}},L=function(e){return{type:"TOGGLE_ADD_INCOMES_WINDOW",payload:e}},M=function(e){return{type:"TOGGLE_INPUT_EXPENSE_AMOUNT_WINDOW",payload:e}},P=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),s=Object(o.c)((function(e){return e.addExpensesIsOpen.addExpensesIsOpen})),a=Object(t.useState)(""),c=Object(g.a)(a,2),i=c[0],d=c[1],r=function(){i.length>3?(e({type:"ADD_EXPENSE_ITEM",payload:{expensesName:i,moneySpend:0,id:n.length,icon:"https://i.ibb.co/587QCcb/1.png",bgColor:"#dddddd"}}),e(F(!1))):alert("\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435! ")};return Object(A.jsx)("div",{className:k.a.AddExpensesWindow,onKeyPress:function(e){"Enter"===e.key&&r()},onClick:function(n){n.target.className||e(F(!1))},children:Object(A.jsx)(S.a,{className:k.a["AddExpensesWindow-Body"],open:s,children:Object(A.jsx)(D.a,{in:s,timeout:400,children:Object(A.jsxs)("div",{className:k.a["AddExpensesWindow-Box"],children:[Object(A.jsx)("div",{className:k.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(F(!1))},children:"\u2715"}),Object(A.jsx)("h1",{className:k.a["AddExpensesWindow-Title"],children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(A.jsx)(T.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",variant:"outlined",fullWidth:!0,required:!0,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u0425\u043e\u0431\u0431\u0438",margin:"normal",value:i,onChange:function(e){d(e.target.value)},autoFocus:!0}),Object(A.jsx)("div",{style:{marginTop:"25px"}}),Object(A.jsx)(B.a,{variant:"contained",size:"large",onClick:r,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044e"})]})})})})},G=s(296),X=s(38),U=s.n(X),z=function(e){var n=e.curentItemId,s=Object(o.b)(),a=Object(o.c)((function(e){return e.inputExpenseAmountWindow.inputExpenseAmountWindow})),c=Object(t.useState)(""),i=Object(g.a)(c,2),d=i[0],r=i[1],p=function(){var e,t;parseInt(d)<=0||isNaN(parseInt(d))?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f"):(s((e=n,t=parseInt(d),{type:"INPUT_EXPENSE_SUM",payload:{id:e,sum:t}})),s(M(!1)))};return Object(A.jsx)("div",{className:U.a.InputOfExpenseAmount,onKeyPress:function(e){"Enter"===e.key&&p()},onClick:function(e){e.target.className||s(M(!1))},children:Object(A.jsx)(S.a,{className:U.a["InputOfExpenseAmount-Body"],open:a,children:Object(A.jsx)(D.a,{in:!0,timeout:400,children:Object(A.jsxs)("div",{className:U.a["InputOfExpenseAmount-Box"],children:[Object(A.jsx)("div",{className:U.a["InputOfExpenseAmount-CloseIcon"],onClick:function(){return s(M(!1))},children:"\u2715"}),Object(A.jsx)("h1",{className:U.a["InputOfExpenseAmount-Title"],children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u043b\u0438"}),Object(A.jsx)(G.a,{className:U.a["InputOfExpenseAmount-Input"],placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",autoFocus:!0,type:"number",required:!0,value:d,onChange:function(e){r(e.target.value)}}),Object(A.jsx)(B.a,{variant:"contained",size:"large",onClick:p,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u0443\u043c\u043c\u0443"})]})})})})},K=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.incomesList.incomes})),s=Object(o.c)((function(e){return e.incomesWindow.isOpen})),a=Object(t.useState)(""),c=Object(g.a)(a,2),i=c[0],d=c[1],r=Object(t.useState)(""),p=Object(g.a)(r,2),l=p[0],u=p[1],m=function(){parseInt(i)<=0||isNaN(parseInt(i))?alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f"):(e({type:"ADD_INCOME",payload:{moneyIncome:parseInt(i),id:n.length,comment:l}}),e(L(!1)))};return Object(A.jsx)("div",{className:k.a.AddExpensesWindow,onKeyPress:function(e){"Enter"===e.key&&m()},onClick:function(n){n.target.className||e(L(!1))},children:Object(A.jsx)(S.a,{className:k.a["AddExpensesWindow-Body"],open:s,children:Object(A.jsx)(D.a,{in:s,timeout:400,style:{height:"350px"},children:Object(A.jsxs)("div",{className:k.a["AddExpensesWindow-Box"],children:[Object(A.jsx)("div",{className:k.a["AddExpensesWindow-CloseIcon"],onClick:function(){return e(L(!1))},children:"\u2715"}),Object(A.jsx)("h1",{className:k.a["AddExpensesWindow-Title"],children:"\u0414\u043e\u0445\u043e\u0434"}),Object(A.jsx)(T.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",variant:"outlined",fullWidth:!0,required:!0,placeholder:"\u0421\u0443\u043c\u043c\u0430",margin:"normal",value:i,onChange:function(e){d(e.target.value)},autoFocus:!0}),Object(A.jsx)(T.a,{id:"outlined-basic",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",variant:"outlined",fullWidth:!0,placeholder:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",margin:"normal",value:l,onChange:function(e){u(e.target.value)}}),Object(A.jsx)("div",{style:{marginTop:"25px"}}),Object(A.jsx)(B.a,{variant:"contained",size:"large",onClick:m,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434"})]})})})})},q=function(){var e=Object(o.b)(),n=Object(t.useState)(0),s=Object(g.a)(n,2),a=s[0],c=s[1],i=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),d=Object(o.c)((function(e){return e.addExpensesIsOpen.addExpensesIsOpen})),r=Object(o.c)((function(e){return e.inputExpenseAmountWindow.inputExpenseAmountWindow})),p=Object(o.c)((function(e){return e.incomesWindow.isOpen}));return Object(A.jsxs)("div",{className:y.a.ItemsExpenses,children:[i.length>0&&i.map((function(n){var s=n.expensesName,t=n.moneySpend,a=n.id,i=n.icon,o=n.bgColor;return Object(A.jsxs)("div",{className:y.a["ItemsExpenses-Item"],children:[Object(A.jsx)("div",{className:y.a["ItemsExpenses-Name"],children:s}),Object(A.jsx)("div",{className:y.a["ItemsExpenses-WrapForIcon"],style:{backgroundColor:o},onClick:function(){return function(n){c(n),e(M(!0))}(a)},children:Object(A.jsx)("img",{className:y.a["ItemsExpenses-Icon"],src:i,alt:"icon"})}),Object(A.jsxs)("div",{className:y.a["ItemsExpenses-Money"],children:[t,Object(A.jsx)("span",{children:" \u20b4"})]})]},a)})),r&&Object(A.jsx)(z,{curentItemId:a}),Object(A.jsx)("div",{className:y.a["ItemsExpenses-Diagram"],children:Object(A.jsx)(w,{})}),Object(A.jsx)("div",{onClick:function(){return e(F(!0))},children:i.length<9&&Object(A.jsx)(W,{})}),d&&Object(A.jsx)(P,{}),p&&Object(A.jsx)(K,{})]})},J=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(h.a,{}),Object(A.jsx)("div",{className:N.a.Expenses,children:Object(A.jsx)(I.a,{className:N.a["Expenses-Body"],maxWidth:"lg",children:Object(A.jsx)(f.a,{className:N.a["Expenses-Box"],elevation:2,variant:"outlined",children:Object(A.jsx)(q,{})})})})]})},Q=s(300),Y=s(301),Z=s(302),R=s(23),V=s.n(R),$=function(){var e=Object(o.b)(),n=Object(o.c)((function(e){return e.itemsExpenses.itemsExpenses})),s=0;n.map((function(e){var n=e.moneySpend;s+=n}));var t=Object(o.c)((function(e){return e.incomesList.incomes})),a=0;t.map((function(e){var n=e.moneyIncome;a+=n}));return Object(A.jsx)(Q.a,{color:"default",className:V.a.Header,children:Object(A.jsx)(Y.a,{children:Object(A.jsxs)(Z.a,{container:!0,justify:"space-between",alignItems:"center",children:[Object(A.jsxs)(Z.a,{item:!0,className:V.a["Header-Column"],children:[Object(A.jsxs)("span",{className:V.a["Header-Logo"],children:["24Money ",Object(A.jsx)("span",{children:"(demo)"})]}),Object(A.jsx)(B.a,{variant:"outlined",className:V.a["Header-Btn"],onClick:function(){e(L(!0))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u0445\u043e\u0434\u044b"}),Object(A.jsx)(B.a,{variant:"outlined",className:V.a["Header-Btn"],children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"})]}),Object(A.jsxs)(Z.a,{item:!0,className:V.a["Header-Column"],children:[Object(A.jsxs)("span",{className:V.a["Header-Label"],children:["\u0420\u0430\u0441\u0445\u043e\u0434\u044b: ",Object(A.jsxs)("b",{children:["-",s,"\u20b4"]})]}),Object(A.jsxs)("span",{className:V.a["Header-Label"],children:[" \u0414\u043e\u0445\u043e\u0434\u044b: ",Object(A.jsxs)("b",{children:["+",a,"\u20b4"]})," "]})]})]})})})},ee=function(){return Object(A.jsxs)(o.a,{store:E,children:[Object(A.jsx)($,{}),Object(A.jsx)(J,{})]})};i.a.render(a.a.createElement(ee),document.getElementById("root"))},38:function(e,n,s){e.exports={"InputOfExpenseAmount-Box":"InputOfExpenseAmount_InputOfExpenseAmount-Box__31nwi","InputOfExpenseAmount-CloseIcon":"InputOfExpenseAmount_InputOfExpenseAmount-CloseIcon__3c7hJ","InputOfExpenseAmount-Title":"InputOfExpenseAmount_InputOfExpenseAmount-Title__1DSkr","InputOfExpenseAmount-Input":"InputOfExpenseAmount_InputOfExpenseAmount-Input__3ZL3T"}},61:function(e,n,s){e.exports={Expenses:"Expenses_Expenses__1WDzg","Expenses-Body":"Expenses_Expenses-Body__2JdEa","Expenses-Box":"Expenses_Expenses-Box__27I4d"}}},[[261,1,2]]]);
//# sourceMappingURL=main.62d684c0.chunk.js.map