"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[8961],{8961:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var r=n(26445),o=n(1821),a=n(52933),i=n(72791),s=n(63153),u=n(62534),c=n(1413),d=n(33577),l=n(60596),p=n(92381),Z=n(80184);function f(){var e=(0,s.T)(),t="zipFiltersForm";return(0,Z.jsx)(d.Z,{onSubmit:function(t){var n=(0,c.Z)({},t);n.code&&(n.code=Number(n.code)),n.pageSize&&(n.pageSize=Number(n.pageSize)),e(l.DH.setFilter({filters:n}))},myFields:v,form:t,onClickReset:function(){e((0,p.mc)(t)),e(l.DH.setFilter({}))}})}var v=[{label:"Zip Code",name:"code",component:u.Z,cellProps:{md:6}},{label:"Page Size",name:"pageSize",component:u.Z,cellProps:{md:6}}],m=n(70885),h=n(42982),g=n(15861),x=n(87757),C=n.n(x),b=n(55878),T=n(39281),S=n(79836),w=n(56890),y=n(35855),z=n(53382),j=n(37894),k=n(16871),L=n(93892),P=n(61889),D=n(4535),W=n(6118),H=n(69756),J=n(90704),_=n(8935),A=(0,J.Z)({})((function(e){var t=e.handleSubmit,n=(0,s.C)((function(e){return e.store.storeOptions}));return(0,Z.jsx)("form",{onSubmit:t,children:(0,Z.jsxs)(P.ZP,{container:!0,columnSpacing:2,children:[(0,Z.jsx)(P.ZP,{item:!0,md:8,children:(0,Z.jsx)(H.Z,{name:"store_id",validate:[_.C1],component:W.Z,SelectProps:{options:n}})}),(0,Z.jsx)(P.ZP,{item:!0,md:4,children:(0,Z.jsx)(D.Z,{type:"submit",variant:"contained",color:"secondary",disableElevation:!0,fullWidth:!0,sx:{height:"100%"},children:"Update Zip Code"})})]})})})),q=n(65240),F=n(2160);function I(){(0,k.s0)();var e=(0,s.T)(),t=(0,s.C)((function(e){return e.store.stores})),n=(0,s.C)((function(e){return e.zipcode.filter})),r=(0,s.C)((function(e){return e.zipcode.loading})),o=(0,s.C)((function(e){return e.store.storeMap})),a=(0,s.C)((function(e){return e.zipcode.zipcodes})),u=(0,s.C)((function(e){return e.zipcode.refreshLoader}));return(0,i.useEffect)((function(){q.Z.getStores(e),L.Z.getZipCodes(n,e)}),[n,e]),(0,i.useEffect)((function(){0!==t.length&&a.forEach((function(t,n){var r=t.storeId;r&&e((0,p.m)("UpdateStoreZipCodesForm".concat(n),"store_id",r))}))}),[e,t,a]),(0,Z.jsx)(T.Z,{children:(0,Z.jsx)(S.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,Z.jsxs)(j.Z,{container:!0,coloumns:2,loading:r,message:"No zipcodes available",length:u?0:a.length,children:[(0,Z.jsx)(w.Z,{children:(0,Z.jsxs)(y.Z,{children:[(0,Z.jsx)(b.Yk,{children:"Zip Code"}),(0,Z.jsx)(b.Yk,{children:"Store"})]})}),(0,Z.jsx)(z.Z,{children:a.map((function(t,n){return(0,Z.jsxs)(b.AF,{children:[(0,Z.jsx)(b.Yk,{children:t.code}),(0,Z.jsx)(b.Yk,{children:(0,Z.jsx)(A,{form:"UpdateStoreZipCodesForm".concat(n),onSubmit:function(){var n=(0,g.Z)(C().mark((function n(r){var a,i,s,u,d;return C().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=r.store_id,!(i=o[a].zipCodes||[]).includes(t._id)){n.next=4;break}return n.abrupt("return");case 4:return s={zipCodes:[].concat((0,h.Z)(i),[t._id])},n.next=7,q.Z.updateStore("".concat(a),s,e);case 7:u=n.sent,d=(0,m.Z)(u,1),d[0]&&(t.storeId&&e(F.Tt.filterStoreZipcode({id:t.storeId,zipcode_id:t._id})),e(l.DH.updateZipCode({id:t._id,zipcode:(0,c.Z)((0,c.Z)({},t),{},{storeId:a,store:o[a].name})})));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})})]},n)}))})]})})})}function R(){var e=(0,s.C)((function(e){return e.zipcode.zipcodes}));return(0,Z.jsxs)(r.Z,{maxWidth:"lg",children:[(0,Z.jsx)(o.Z,{heading:"Store Zip Codes (".concat(e.length,")")}),(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(f,{})}),(0,Z.jsx)(a.Z,{children:(0,Z.jsx)(I,{})})]})}},65240:function(e,t,n){var r=n(70885),o=n(15861),a=n(87757),i=n.n(a),s=n(46227),u=n(33795),c=n(2160),d=n(22134),l=n(99954),p="/store",Z={getStorebyID:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,l,Z,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(s.Ay.setLoading(!0)),u.Z.setJWT(),e.next=4,d.Z.asPromise(u.Z.get("".concat(p,"/").concat(t)));case 4:return o=e.sent,a=(0,r.Z)(o,2),l=a[0],Z=a[1],l&&(f=l.data.data.store,null===n||void 0===n||n(c.Tt.setStore(f))),null===n||void 0===n||n(s.Ay.setLoading(!1)),e.abrupt("return",[l,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getStores:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,s,l,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(c.Tt.setLoading(!0)),u.Z.setJWT(),e.next=4,d.Z.asPromise(u.Z.post("".concat(p,"/filter"),t));case 4:return o=e.sent,a=(0,r.Z)(o,2),s=a[0],l=a[1],s&&(Z=s.data.data.stores,null===n||void 0===n||n(c.Tt.setStores(Z))),null===n||void 0===n||n(c.Tt.setLoading(!1)),e.abrupt("return",[s,l]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),addStore:function(){var e=(0,o.Z)(i().mark((function e(t,n,o){var a,s,l,Z,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(c.Tt.setLoading(!0)),u.Z.setJWT(),e.next=4,d.Z.asPromise(u.Z.post("".concat(p),t));case 4:return a=e.sent,s=(0,r.Z)(a,2),l=s[0],Z=s[1],l&&(f=l.data.data.store,null===n||void 0===n||n(c.Tt.addStore(f)),null===o||void 0===o||o("/store-management")),null===n||void 0===n||n(c.Tt.setLoading(!1)),e.abrupt("return",[l,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),deleteStore:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,s,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(l.nT.setLoading(!0)),u.Z.setJWT(),e.next=4,d.Z.asPromise(u.Z.delete("".concat(p,"/").concat(t)));case 4:return o=e.sent,a=(0,r.Z)(o,2),s=a[0],Z=a[1],s&&(null===n||void 0===n||n(l.nT.closeModal()),null===n||void 0===n||n(c.Tt.deleteStore(t))),null===n||void 0===n||n(l.nT.setLoading(!1)),e.abrupt("return",[s,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateStore:function(){var e=(0,o.Z)(i().mark((function e(t,n,o,a){var l,Z,f,v,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===o||void 0===o||o(s.Ay.setLoading(!0)),u.Z.setJWT(),e.next=4,d.Z.asPromise(u.Z.put("".concat(p,"/").concat(t),n));case 4:return l=e.sent,Z=(0,r.Z)(l,2),f=Z[0],v=Z[1],f&&(m=f.data.data,null===o||void 0===o||o(c.Tt.updateStore({id:t,store:m})),null===a||void 0===a||a("/store-management")),null===o||void 0===o||o(s.Ay.setLoading(!1)),e.abrupt("return",[f,v]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()};t.Z=Z},93892:function(e,t,n){var r=n(70885),o=n(15861),a=n(87757),i=n.n(a),s=n(60596),u=n(33795),c=n(22134),d=n(99954),l=n(46227),p="/zipcode",Z={getZipCodebyID:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,d,Z,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(l.Ay.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.get("".concat(p,"/").concat(t)));case 4:return o=e.sent,a=(0,r.Z)(o,2),d=a[0],Z=a[1],d&&(f=d.data.data.zipcode,null===n||void 0===n||n(s.DH.setZipCode(f))),null===n||void 0===n||n(l.Ay.setLoading(!1)),e.abrupt("return",[d,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getZipCodes:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,d,l,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(s.DH.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.post("".concat(p,"/filter"),t));case 4:return o=e.sent,a=(0,r.Z)(o,2),d=a[0],l=a[1],d&&(Z=d.data.data.zipcodes,null===n||void 0===n||n(s.DH.setZipCodes(Z))),null===n||void 0===n||n(s.DH.setLoading(!1)),e.abrupt("return",[d,l]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getZipCodesRequest:function(){var e=(0,o.Z)(i().mark((function e(t){var n,o,a,d,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(s.DH.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.get("".concat(p,"/all-requested-zipcodes")));case 4:return n=e.sent,o=(0,r.Z)(n,2),a=o[0],d=o[1],a&&(l=a.data.data.requestedZipCodes,null===t||void 0===t||t(s.DH.setZipCodesRequest(l))),null===t||void 0===t||t(s.DH.setLoading(!1)),e.abrupt("return",[a,d]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getMostRequestedZipCodes:function(){var e=(0,o.Z)(i().mark((function e(t){var n,o,a,d,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===t||void 0===t||t(s.DH.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.get("".concat(p,"/requested-zipcodes-group")));case 4:return n=e.sent,o=(0,r.Z)(n,2),a=o[0],d=o[1],a&&(l=a.data.data.requestedZipCodes,null===t||void 0===t||t(s.DH.setmostRequestZipCodes(l)),console.log("our bje are ======",l)),null===t||void 0===t||t(s.DH.setLoading(!1)),e.abrupt("return",[a,d]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createZipCodes:function(){var e=(0,o.Z)(i().mark((function e(t,n,o){var a,s,d,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(l.Ay.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.post("".concat(p),t));case 4:return a=e.sent,s=(0,r.Z)(a,2),d=s[0],Z=s[1],d&&(null===o||void 0===o||o("/zip-code-management")),null===n||void 0===n||n(l.Ay.setLoading(!1)),e.abrupt("return",[d,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),deleteZipCodes:function(){var e=(0,o.Z)(i().mark((function e(t,n){var o,a,l,Z;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===n||void 0===n||n(d.nT.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.delete("".concat(p,"/").concat(t)));case 4:return o=e.sent,a=(0,r.Z)(o,2),l=a[0],Z=a[1],l&&(null===n||void 0===n||n(d.nT.closeModal()),null===n||void 0===n||n(s.DH.filterZipCode(t))),null===n||void 0===n||n(d.nT.setLoading(!1)),e.abrupt("return",[l,Z]);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),updateZipCode:function(){var e=(0,o.Z)(i().mark((function e(t,n,o,a){var d,Z,f,v,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===o||void 0===o||o(l.Ay.setLoading(!0)),u.Z.setJWT(),e.next=4,c.Z.asPromise(u.Z.put("".concat(p,"/").concat(t),n));case 4:return d=e.sent,Z=(0,r.Z)(d,2),f=Z[0],v=Z[1],f&&(m=f.data.data,null===o||void 0===o||o(s.DH.updateZipCode({id:t,zipcode:m})),null===a||void 0===a||a("/zip-code-management")),null===o||void 0===o||o(l.Ay.setLoading(!1)),e.abrupt("return",[f,v]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()};t.Z=Z}}]);
//# sourceMappingURL=8961.cbe51c25.chunk.js.map