(this["webpackJsonpmeakle-image-hosting"]=this["webpackJsonpmeakle-image-hosting"]||[]).push([[9],{137:function(e,t,n){"use strict";var c=n(4),s=n(0),i=n(58),a=n(22),r=n(1920),l=n(107),o=n(1912),j=n(138),d=n.n(j),p=Object(i.a)((function(e){var t=a.a.img.withConfig({displayName:"ResultLink__Img",componentId:"sc-1ll0dsg-0"})(["margin-top:20px;max-width:200px;max-height:200px;box-shadow:3px 3px 10px #d9d9d9;"]),n=a.a.div.withConfig({displayName:"ResultLink__Wrapper",componentId:"sc-1ll0dsg-1"})(["margin-top:20px;padding:50px;background-color:#fff;border:1px dashed #d9d9d9;"]),i=a.a.div.withConfig({displayName:"ResultLink__Container",componentId:"sc-1ll0dsg-2"})(["display:flex !important;flex-wrap:wrap;margin-top:30px;justify-content:space-between;"]),j=Object(a.a)(r.a).withConfig({displayName:"ResultLink__StyleInput",componentId:"sc-1ll0dsg-3"})(["width:550px;"]),p=e.url;console.log(e);var x,b=Object(s.useRef)(null),h=Object(s.useRef)(null),u=function(e,t){return function(){"URL"===t?(d()(e.current.state.value),l.b.success("\u62f7\u8d1d\u6210\u529f!")):"HTML"===t?(d()('<img src="'.concat(e.current.state.value,'" alt=""/>')),l.b.success("\u62f7\u8d1d\u6210\u529f!")):"Markdown"===t&&(d()("![](".concat(e.current.state.value,")")),l.b.success("\u62f7\u8d1d\u6210\u529f!"))}};return Object(c.jsx)("div",{children:Object(c.jsx)(n,{children:Object(c.jsxs)(i,{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u9884\u89c8\u56fe\u7247"}),Object(c.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:Object(c.jsx)(t,{src:p,alt:""})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"\u7ed3\u679c\u94fe\u63a5"}),Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:Object(c.jsx)(o.a,{title:"\u662f\u5426\u8981\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\uff1f",okText:"\u662f",cancelText:"\u5426",onConfirm:u(b,"URL"),children:Object(c.jsx)("a",{children:"\ud83d\udc49\xa0URL(\u590d\u5236):"})})}),Object(c.jsx)(j,{type:"text",value:p,ref:b})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:Object(c.jsx)(o.a,{title:"\u662f\u5426\u8981\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\uff1f",okText:"\u662f",cancelText:"\u5426",onConfirm:u(b,"HTML"),children:Object(c.jsx)("a",{children:"\ud83d\udc49\xa0HTML(\u590d\u5236):"})})}),Object(c.jsx)(j,{type:"text",value:(x=p,'<img src="'.concat(x,'" alt=""/>')),ref:h})]}),Object(c.jsxs)("li",{children:[Object(c.jsx)("h4",{children:Object(c.jsx)(o.a,{title:"\u662f\u5426\u8981\u590d\u5236\u5185\u5bb9\u5230\u526a\u8d34\u677f\uff1f",okText:"\u662f",cancelText:"\u5426",onConfirm:u(b,"Markdown"),children:Object(c.jsx)("a",{children:"\ud83d\udc49\xa0Markdown(\u590d\u5236):"})})}),Object(c.jsx)(j,{type:"text",value:function(e){return"![](".concat(e,")")}(p)})]})]})]})]})})})}));t.a=p},1921:function(e,t,n){"use strict";n.r(t);var c=n(4),s=(n(0),n(58)),i=n(22),a=n(60),r=n(1913),l=n(1917),o=n(107),j=n(105),d=n(1924),p=n(137),x=Object(s.a)((function(){var e=Object(a.a)(),t=e.ImageStore,n=e.UserStore,s=l.a.Dragger,i={beforeUpload:function(e){return null===n.currentUser?(o.b.error("\u8bf7\u5148\u767b\u5f55!"),!1):/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?(e.size>1038336&&o.b.error("\u56fe\u7247\u6700\u59271M"),t.setFile(e),t.setFilename(e.name),t.upload().then((function(){console.log("\u4e0a\u4f20\u6210\u529f"),o.b.success("This is a success message")})).catch((function(){console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(o.b.error("\u53ea\u80fd\u4e0a\u4f20svg, png, jpg, jpeg, gif\u683c\u5f0f\u7684\u6587\u4ef6"),!1)}};return Object(c.jsxs)("div",{children:[Object(c.jsx)(j.a,{tip:"\u4e0a\u4f20\u4e2d...",spinning:t.isUploading,children:Object(c.jsxs)(s,Object(r.a)(Object(r.a)({},i),{},{children:[Object(c.jsx)("p",{className:"ant-upload-drag-icon",children:Object(c.jsx)(d.a,{})}),Object(c.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u56fe\u7247\u5230\u8fd9\u91cc\u4e0a\u4f20"}),Object(c.jsx)("p",{className:"ant-upload-hint",children:"\u53ea\u80fd\u4e0a\u4f20svg, png, jpg, jpeg, gif\u683c\u5f0f\u7684\u6587\u4ef6, \u56fe\u7247\u6700\u59271M"})]}))}),t.serverFile?Object(c.jsx)(p.a,{url:t.serverFile.attributes.url.attributes.url}):Object(c.jsx)(c.Fragment,{})]})})),b=n(1911),h=n(9);function u(){var e=Object(i.b)(["0%{transform:scale(1);}50%{transform:scale(1.1);}100%{transform:scale(1);}"]),t=i.a.a.withConfig({displayName:"Start__A",componentId:"sc-1h0qxon-0"})(["display:inline-block;font-size:20px;animation:"," 2000ms 700ms 2;transition:all 1s;:hover{transform:scale(1.1);}"],e),n=Object(h.f)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(t,{onClick:function(){n.push("/login")},children:[Object(c.jsx)(b.a,{}),"\xa0\xa0\xa0\u5f00\u59cb\u4f7f\u7528"]})})}var m=Object(s.a)((function(){var e=i.a.p.withConfig({displayName:"Welcome__Title",componentId:"eqt1ya-0"})(["font-size:70px;letter-spacing:40px;line-height:90px;margin-bottom:0.5em;"]),t=i.a.p.withConfig({displayName:"Welcome__SubTitle",componentId:"eqt1ya-1"})(["font-size:30px;line-height:40px;letter-spacing:10px;color:#9e9e9e;"]),n=i.a.div.withConfig({displayName:"Welcome__Container",componentId:"eqt1ya-2"})(["display:flex;flex-direction:column;height:70vh;justify-content:center;align-items:center;"]);return Object(c.jsxs)(n,{children:[Object(c.jsx)(e,{children:"\u6709\u4e00\u4e2a\u56fe\u5e8a"}),Object(c.jsx)(t,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u56fe\u5e8a"}),Object(c.jsx)(u,{})]})})),g=Object(s.a)((function(e){var t=Object(i.b)(["from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0px);}"]),n=i.a.div.withConfig({displayName:"Home",componentId:"xrk7ol-0"})(["animation:"," 1500ms ease;"],t),s=Object(a.a)().UserStore;return Object(c.jsx)(n,{children:s.currentUser?Object(c.jsx)(x,{}):Object(c.jsx)(m,{})})}));t.default=g}}]);
//# sourceMappingURL=9.cd05d88e.chunk.js.map