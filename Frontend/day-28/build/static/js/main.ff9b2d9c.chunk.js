(this["webpackJsonpday-28"]=this["webpackJsonpday-28"]||[]).push([[0],{10:function(e,c,t){},12:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),n=t(4),a=t.n(n),d=t(3),l=(t(9),t(10),t(0));var r=function(){var e=Object(s.useState)(""),c=Object(d.a)(e,2),t=c[0],i=c[1],n=Object(s.useState)({}),a=Object(d.a)(n,2),r=a[0],j=a[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col-12 form",children:[Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){fetch("https://api.weatherapi.com/v1/current.json?key=ebf9e31012374671a0c172826211509&q=".concat(t)).then((function(e){return e.json()})).then((function(e){j(e)}))},children:"Submit"})]}),Object(l.jsx)("div",{className:"offset-md-4 col-12 col-md-4 weather",children:Object(l.jsx)("div",{className:"card",children:r.location?Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:r.current.condition.icon}),Object(l.jsxs)("div",{className:"temp",children:[r.current.temp_c,"\xb0"]}),Object(l.jsx)("div",{className:"desc",children:r.current.condition.text}),Object(l.jsx)("div",{className:"place",children:r.location.name}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row whp",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"titile",children:"Wind Now"}),Object(l.jsxs)("div",{className:"data",children:[r.current.wind_kph,Object(l.jsx)("spna",{className:"unit",children:"KM"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"titile",children:"Humidity"}),Object(l.jsxs)("div",{className:"data",children:[r.current.humidity,Object(l.jsx)("spna",{className:"unit",children:"%"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("div",{className:"titile",children:"Precipitation"}),Object(l.jsxs)("div",{className:"data",children:[r.current.precip_in,Object(l.jsx)("spna",{className:"unit",children:"%"})]})]})]})})]}):Object(l.jsx)("h2",{children:"Place Not Found"})})})]})})})};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ff9b2d9c.chunk.js.map