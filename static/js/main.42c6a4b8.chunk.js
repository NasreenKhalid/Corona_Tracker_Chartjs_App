(this.webpackJsonpcorona_tracker_chartjs_app=this.webpackJsonpcorona_tracker_chartjs_app||[]).push([[0],{203:function(t,e,a){"use strict";a.r(e);var c=a(0),n=a.n(c),o=a(66),r=a.n(o),s=(a(76),a(3)),l=(a(77),a(71)),i=a(1);var u=function(t){return Object(i.jsx)("div",{style:{width:"600px",height:"600px",margin:"50px auto"},children:Object(i.jsx)(l.a,{data:{labels:["Jan","Feb","Mar","Apr","May","June"],datasets:[{label:"# of Cases",data:t.yAxis,lineTension:.1,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 0.2)",pointRadius:1}]}})})},j=a(69);function d(t){var e=t.title,a=t.card;return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("span",{children:["Total ",e," : ",Object(i.jsx)(j.a,{value:a,displayType:"text",thousandSeparator:!0})]})})}var b=function(t){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("h1",{children:[" ",""===t.country?"WorldWide":t.country.charAt(0).toUpperCase()+t.country.slice(1)," Covid-19 Report"]}),Object(i.jsx)(d,{title:"Confirmed",card:t.totalConfirmed}),Object(i.jsx)(d,{title:"Recovered",card:t.totalRecovered}),Object(i.jsx)(d,{title:"Deaths",card:t.totalDeaths})]})},h=a(70),O=a.n(h).a.create({baseURL:"https://api.covid19api.com"});var v=function(){var t=Object(c.useState)(0),e=Object(s.a)(t,2),a=e[0],n=e[1],o=Object(c.useState)(0),r=Object(s.a)(o,2),l=r[0],j=r[1],d=Object(c.useState)(0),h=Object(s.a)(d,2),v=h[0],f=h[1],p=Object(c.useState)(!1),x=Object(s.a)(p,2),g=x[0],y=x[1],m=Object(c.useState)({}),C=Object(s.a)(m,2),D=C[0],S=C[1],T=Object(c.useState)(7),R=Object(s.a)(T,2),w=R[0],A=R[1],_=Object(c.useState)(""),k=Object(s.a)(_,2),J=k[0],L=k[1],M=Object(c.useState)([]),G=Object(s.a)(M,2),E=G[0],F=G[1];Object(c.useEffect)((function(){y(!0),O.get("/summary").then((function(t){y(!1),200===t.status&&(n(t.data.Global.TotalConfirmed),j(t.data.Global.TotalRecovered),f(t.data.Global.TotalDeaths),S(t.data)),console.log(t)})).catch((function(t){return console.log(console.error())}))}),[]);var I=function(t,e,a){O.get("/country/".concat(t,"/status/confirmed?from=").concat(e,"T00:00:00Z&to=").concat(a,"T00:00:00Z")).then((function(e){console.log(e);var a=e.data.map((function(t){return t.Cases})),c=D.Countries.find((function(e){return e.Slug===t}));F(a),n(c.TotalConfirmed),j(c.TotalRecovered),f(c.TotalDeaths)})).catch((function(t){return console.log(t)}))},N=function(t){var e=new Date(t),a=e.getFullYear(),c="0".concat(e.getMonth()+1).slice(-2),n=e.getDate();return"".concat(a,"-").concat(c,"-").concat(n)};return g?Object(i.jsx)("p",{children:"fetching data from server..."}):Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:Object(i.jsx)(b,{totalConfirmed:a,totalRecovered:l,totalDeaths:v,country:J})}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{value:J,onChange:function(t){L(t.target.value);var e=new Date,a=N(e),c=N(e.setDate(e.getDate()-w));I(t.target.value,c,a)},children:[Object(i.jsx)("option",{value:"",children:"All"}),D.Countries&&D.Countries.map((function(t){return Object(i.jsx)("option",{value:t.Slug,children:t.Country},t.Slug)}))]}),Object(i.jsxs)("select",{value:w,onChange:function(t){A(t.target.value);var e=new Date,a=N(e),c=N(e.setDate(e.getDate()-t.target.value));I(J,c,a)},children:[Object(i.jsx)("option",{value:"7",children:"Last 7 Days"}),Object(i.jsx)("option",{value:"30",children:"Last 30 days"}),Object(i.jsx)("option",{value:"90",children:"Last 90 days"})]})]})]})}),Object(i.jsx)(u,{yAxis:E})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))},76:function(t,e,a){},77:function(t,e,a){}},[[203,1,2]]]);
//# sourceMappingURL=main.42c6a4b8.chunk.js.map