(this.webpackJsonppublicapis=this.webpackJsonppublicapis||[]).push([[0],{151:function(n,t,e){},241:function(n,t,e){"use strict";e.r(t);var i=e(33),a=e(0),o=e.n(a),r=e(23),c=e.n(r),u=(e(151),e(99)),d=e(102),l=e(244),s=e(245),v=e(101),b=e(135),j=e(123),p=e.n(j),f=e(243),O=[{title:"Category",dataIndex:"cat"}],g=function(n){var t=n.rowKey,e=n.dataSource,a=void 0===e?[]:e,o=n.isLoading;return Object(i.jsx)(f.a,{rowKey:t,columns:O,dataSource:a,loading:o})};function x(){var n=Object(u.a)(["\n  margin-bottom: 25px;\n\n  input {\n    width: 400px;\n  }\n"]);return x=function(){return n},n}function h(){var n=Object(u.a)(["\n  padding: 40px 200px;\n"]);return h=function(){return n},n}var w=v.a.div(h()),C=v.a.div(x()),m=function(){var n=Object(b.a)("https://api.publicapis.org/categories",p.a,{revalidateOnFocus:!1}),t=n.data,e=n.error,o=Object(a.useState)(!1),r=Object(d.a)(o,2),c=r[0],u=r[1],v=Object(a.useState)(""),j=Object(d.a)(v,2),f=j[0],O=j[1];Object(a.useEffect)((function(){e&&u(!0)}),[e]);var x=function(){u(!1)},h=Object(a.useMemo)((function(){var n,e;return null===t||void 0===t||null===(n=t.data)||void 0===n||null===(e=n.filter((function(n){var t;return null===n||void 0===n||null===(t=n.toLowerCase())||void 0===t?void 0:t.includes(null===f||void 0===f?void 0:f.toLowerCase())})))||void 0===e?void 0:e.map((function(n,t){return{id:t,cat:n}}))}),[t,f]);return Object(i.jsxs)(w,{children:[Object(i.jsx)(C,{children:Object(i.jsx)(l.a,{onChange:function(n){var t;O(null===n||void 0===n||null===(t=n.target)||void 0===t?void 0:t.value)},value:f})}),Object(i.jsx)(g,{rowKey:"id",dataSource:h,isLoading:!t&&!e}),Object(i.jsx)(s.a,{visible:c,onCancel:x,onOk:x,children:"API server is down please try again later !"})]})},S=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,246)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),i(n),a(n),o(n),r(n)}))};c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),S()}},[[241,1,2]]]);
//# sourceMappingURL=main.c03cc521.chunk.js.map