"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[7740],{78340:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(1413),i=t(45987),o=t(61963),s=t(64554),a=t(20890),c=t(13400),u=t(25228),d=t(43896),l=t(80184),p=["children","value","index"];function Z(e){var n=e.children,t=e.value,o=e.index,c=(0,i.Z)(e,p);return(0,l.jsx)("div",(0,r.Z)((0,r.Z)({role:"tabpanel",hidden:t!==o,id:"simple-tabpanel-".concat(o),"aria-labelledby":"simple-tab-".concat(o)},c),{},{children:t===o&&(0,l.jsx)(s.Z,{sx:{pt:2,pb:2},children:(0,l.jsx)(a.Z,{component:"div",children:n})})}))}function x(e){var n=e.value,t=e.tabs,i=e.onChange,a=e.onRefresh,p=e.showRefresh;return(0,l.jsxs)("div",{style:{position:"relative"},children:[p&&(0,l.jsx)(c.Z,{edge:"end","aria-label":"refresh",onClick:function(){return null===a||void 0===a?void 0:a()},sx:{zIndex:2,top:"5px",right:"12px",cursor:"pointer",position:"absolute"},children:(0,l.jsx)(o.Z,{color:"primary"})}),(0,l.jsx)(s.Z,{sx:{borderBottom:1,borderColor:"divider","& .MuiButtonBase-root":{padding:"6px 12px",minWidth:"unset"}},children:(0,l.jsx)(u.Z,{value:n,onChange:function(e,n){return i(n)},"aria-label":"basic tabs example",children:t.map((function(e,n){var t=e.label;return(0,l.jsx)(d.Z,(0,r.Z)({label:t,sx:{textTransform:"capitalize"}},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(n)),n)}))})}),t.map((function(e,t){var r=e.element;return(0,l.jsx)(Z,{value:n,index:t,children:r},t)}))]})}},37740:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var r=t(70885),i=t(26445),o=t(1821),s=t(78340),a=t(72791),c=t(63153),u=t(52933),d=t(55878),l=t(39281),p=t(79836),Z=t(56890),x=t(35855),h=t(53382),f=t(37894),v=t(16871),m=t(93892),g=t(80184),j=function(){(0,v.s0)();var e=(0,c.T)(),n=(0,c.C)((function(e){return e.zipcode.loading})),t=(0,c.C)((function(e){return e.zipcode.mostRequestedZipCodes}));return console.log("our bje are ======",t),(0,a.useEffect)((function(){m.Z.getMostRequestedZipCodes(e)}),[e]),(0,g.jsx)("div",{children:(0,g.jsx)(l.Z,{children:(0,g.jsx)(p.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,g.jsxs)(f.Z,{container:!0,coloumns:2,loading:n,message:"No most requested zip codes available",length:t.length,children:[(0,g.jsx)(Z.Z,{children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(d.Yk,{children:"Zipcode"}),(0,g.jsx)(d.Yk,{children:"Count"})]})}),(0,g.jsx)(h.Z,{children:t.map((function(e,n){return(0,g.jsxs)(d.AF,{children:[(0,g.jsx)(d.Yk,{children:e._id}),(0,g.jsx)(d.Yk,{children:e.count})]},n)}))})]})})})})};function b(){return(0,g.jsx)("div",{children:(0,g.jsx)(u.Z,{children:(0,g.jsx)(j,{})})})}var C=t(62534),z=t(33577);function k(){return(0,g.jsx)(z.Z,{onSubmit:function(e){},myFields:q})}var q=[{label:"Page Size",name:"page_size",component:C.Z,cellProps:{md:4}}],y=function(){(0,v.s0)();var e=(0,c.T)(),n=(0,c.C)((function(e){return e.zipcode.loading})),t=(0,c.C)((function(e){return e.zipcode.zipCodesRequest}));return(0,a.useEffect)((function(){m.Z.getZipCodesRequest(e)}),[e]),(0,g.jsx)("div",{children:(0,g.jsx)(l.Z,{children:(0,g.jsx)(p.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,g.jsxs)(f.Z,{container:!0,coloumns:3,loading:n,message:"No zip code requests available",length:t.length,children:[(0,g.jsx)(Z.Z,{children:(0,g.jsxs)(x.Z,{children:[(0,g.jsx)(d.Yk,{children:"Email"}),(0,g.jsx)(d.Yk,{children:"Zipcode"}),(0,g.jsx)(d.Yk,{children:"Count"})]})}),(0,g.jsx)(h.Z,{children:t.map((function(e,n){return(0,g.jsxs)(d.AF,{children:[(0,g.jsx)(d.Yk,{children:e._id.email}),(0,g.jsx)(d.Yk,{children:e._id.zipcode}),(0,g.jsx)(d.Yk,{children:e.count})]},n)}))})]})})})})};function w(){return(0,g.jsxs)("div",{children:[(0,g.jsx)(u.Z,{children:(0,g.jsx)(k,{})}),(0,g.jsx)(u.Z,{children:(0,g.jsx)(y,{})})]})}function R(){var e=(0,a.useState)(0),n=(0,r.Z)(e,2),t=n[0],u=n[1],d=(0,c.C)((function(e){return e.zipcode.zipCodesRequest})),l=(0,c.C)((function(e){return e.zipcode.mostRequestedZipCodes})),p=0==t?"Zipcode Request Management (".concat(d.length,")"):"Most Requested Zipcodes (".concat(l.length,")");return(0,g.jsx)("div",{children:(0,g.jsxs)(i.Z,{maxWidth:"lg",children:[(0,g.jsx)(o.Z,{heading:p}),(0,g.jsx)(s.Z,{value:t,onChange:function(e){return u(e)},tabs:[{label:"Zip Code Requests",element:(0,g.jsx)(w,{})},{label:"Most Requested Zip Codes",element:(0,g.jsx)(b,{})}]})]})})}},93892:function(e,n,t){var r=t(70885),i=t(15861),o=t(87757),s=t.n(o),a=t(60596),c=t(33795),u=t(22134),d=t(99954),l=t(46227),p="/zipcode",Z={getZipCodebyID:function(){var e=(0,i.Z)(s().mark((function e(n,t){var i,o,d,Z,x;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(l.Ay.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.get("".concat(p,"/").concat(n)));case 4:return i=e.sent,o=(0,r.Z)(i,2),d=o[0],Z=o[1],d&&(x=d.data.data.zipcode,null===t||void 0===t||t(a.DH.setZipCode(x))),null===t||void 0===t||t(l.Ay.setLoading(!1)),e.abrupt("return",[d,Z]);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),getZipCodes:function(){var e=(0,i.Z)(s().mark((function e(n,t){var i,o,d,l,Z;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(a.DH.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.post("".concat(p,"/filter"),n));case 4:return i=e.sent,o=(0,r.Z)(i,2),d=o[0],l=o[1],d&&(Z=d.data.data.zipcodes,null===t||void 0===t||t(a.DH.setZipCodes(Z))),null===t||void 0===t||t(a.DH.setLoading(!1)),e.abrupt("return",[d,l]);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),getZipCodesRequest:function(){var e=(0,i.Z)(s().mark((function e(n){var t,i,o,d,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(a.DH.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.get("".concat(p,"/all-requested-zipcodes")));case 4:return t=e.sent,i=(0,r.Z)(t,2),o=i[0],d=i[1],o&&(l=o.data.data.requestedZipCodes,null===n||void 0===n||n(a.DH.setZipCodesRequest(l))),null===n||void 0===n||n(a.DH.setLoading(!1)),e.abrupt("return",[o,d]);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getMostRequestedZipCodes:function(){var e=(0,i.Z)(s().mark((function e(n){var t,i,o,d,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(a.DH.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.get("".concat(p,"/requested-zipcodes-group")));case 4:return t=e.sent,i=(0,r.Z)(t,2),o=i[0],d=i[1],o&&(l=o.data.data.requestedZipCodes,null===n||void 0===n||n(a.DH.setmostRequestZipCodes(l)),console.log("our bje are ======",l)),null===n||void 0===n||n(a.DH.setLoading(!1)),e.abrupt("return",[o,d]);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),createZipCodes:function(){var e=(0,i.Z)(s().mark((function e(n,t,i){var o,a,d,Z;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(l.Ay.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.post("".concat(p),n));case 4:return o=e.sent,a=(0,r.Z)(o,2),d=a[0],Z=a[1],d&&(null===i||void 0===i||i("/zip-code-management")),null===t||void 0===t||t(l.Ay.setLoading(!1)),e.abrupt("return",[d,Z]);case 11:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),deleteZipCodes:function(){var e=(0,i.Z)(s().mark((function e(n,t){var i,o,l,Z;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(d.nT.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.delete("".concat(p,"/").concat(n)));case 4:return i=e.sent,o=(0,r.Z)(i,2),l=o[0],Z=o[1],l&&(null===t||void 0===t||t(d.nT.closeModal()),null===t||void 0===t||t(a.DH.filterZipCode(n))),null===t||void 0===t||t(d.nT.setLoading(!1)),e.abrupt("return",[l,Z]);case 11:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),updateZipCode:function(){var e=(0,i.Z)(s().mark((function e(n,t,i,o){var d,Z,x,h,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===i||void 0===i||i(l.Ay.setLoading(!0)),c.Z.setJWT(),e.next=4,u.Z.asPromise(c.Z.put("".concat(p,"/").concat(n),t));case 4:return d=e.sent,Z=(0,r.Z)(d,2),x=Z[0],h=Z[1],x&&(f=x.data.data,null===i||void 0===i||i(a.DH.updateZipCode({id:n,zipcode:f})),null===o||void 0===o||o("/zip-code-management")),null===i||void 0===i||i(l.Ay.setLoading(!1)),e.abrupt("return",[x,h]);case 11:case"end":return e.stop()}}),e)})));return function(n,t,r,i){return e.apply(this,arguments)}}()};n.Z=Z}}]);
//# sourceMappingURL=7740.0e711132.chunk.js.map