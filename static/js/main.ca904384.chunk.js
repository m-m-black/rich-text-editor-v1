(this["webpackJsonprich-text-editor-v1"]=this["webpackJsonprich-text-editor-v1"]||[]).push([[0],{37:function(t,e){},46:function(t,e,n){},82:function(t,e){},83:function(t,e){},84:function(t,e){},85:function(t,e){},86:function(t,e){},90:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),c=n(38),a=n.n(c),l=(n(46),n(6)),r=n(13),s=n.n(r),u=n(39),d=n(40),j=n.n(d),b=n(14),f=n(2),h={appContainer:{margin:20,height:"100vh"},buttonContainer:{display:"flex",marginBottom:20},mainContainer:{display:"flex"},editorContainer:{marginRight:10,width:"50%",height:"100%"},displayContainer:{marginLeft:10,width:"50%"}},g=function(){var t=Object(i.useState)(""),e=Object(l.a)(t,2),n=e[0],o=e[1],c=Object(i.useState)(""),a=Object(l.a)(c,2),r=a[0],d=a[1],g=Object(i.useState)(null),p=Object(l.a)(g,2),O=p[0],C=p[1],x=Object(i.useState)(null),y=Object(l.a)(x,2),m=y[0],v=y[1],k=Object(i.useRef)(null),S="https://ipchgmr3va.execute-api.ap-southeast-2.amazonaws.com/prod";return Object(f.jsxs)("div",{style:h.appContainer,children:[Object(f.jsxs)("div",{style:h.buttonContainer,children:[Object(f.jsx)("textarea",{placeholder:"Enter file name",onChange:function(t){d(t.target.value)}}),Object(f.jsx)("button",{onClick:function(){console.log("Creating file "+r),s.a.post("".concat(S,"/?name=").concat(r),{content:n}).then((function(t){console.log(t)}))},children:"Create file"}),Object(f.jsx)("button",{onClick:function(){console.log("Getting file "+r),s.a.get("".concat(S,"/?name=").concat(r)).then((function(t){console.log(t.data.body),m.setData(t.data.body)}))},children:"Get file"}),Object(f.jsx)("button",{onClick:function(){k.current.click()},children:"Upload PDF"}),Object(f.jsx)("input",{type:"file",ref:k,style:{display:"none"},onChange:function(t){C(t.target.files[0])}})]}),Object(f.jsxs)("div",{style:h.mainContainer,children:[Object(f.jsx)("div",{style:h.editorContainer,children:Object(f.jsx)(u.CKEditor,{onReady:function(t){console.log("Editor is ready"),v(t)},editor:j.a,onChange:function(t,e){o(e.getData())}})}),Object(f.jsx)("div",{style:h.displayContainer,children:O&&Object(f.jsx)(b.a,{file:O,children:Object(f.jsx)(b.b,{pageNumber:1})})})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),i(t),o(t),c(t),a(t)}))};a.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),p()}},[[90,1,2]]]);
//# sourceMappingURL=main.ca904384.chunk.js.map