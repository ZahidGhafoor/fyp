"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[5705],{65705:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r=e(26445),a=e(29435),s=e(94240),i=e(1821),o=e(52933),u=e(16871),c=e(63153),d=e(84034),l=e(62534),f=e(8935),p=e(74661),v=e(90704),m=e(4535),Z=e(80184),q=(0,v.Z)({form:"AddFaqItemsForm"})((function(n){var t=n.handleSubmit;return(0,Z.jsxs)("form",{onSubmit:t,children:[(0,Z.jsx)(p.ZP,{fields:h}),(0,Z.jsx)("br",{}),(0,Z.jsx)(m.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),h=[{label:"Question",name:"question",validate:[f.C1],component:l.Z,cellProps:{md:6}},{label:"Answer",name:"answer",component:l.Z,validate:[f.C1],cellProps:{md:6}},{label:"Display Order",name:"displayOrder",validate:[f.Rx],component:l.Z,cellProps:{md:6}}],x=e(72791),F=e(92381),b=e(38720);function k(n){var t=n.id,e="AddFaqItemsForm",r=(0,u.s0)(),a=(0,c.T)(),s=(0,c.C)((function(n){return n.faq.faq}));return(0,x.useEffect)((function(){return d.Z.getFaqbyID("".concat(t),a),function(){a(b.ks.setFaq(null))}}),[t,a]),(0,x.useEffect)((function(){if(s&&"Not Found"!==(null===s||void 0===s?void 0:s.data)){var n=s.question,t=s.answer,r=s.displayOrder;a((0,F.m)(e,"question",n)),a((0,F.m)(e,"answer",t)),a((0,F.m)(e,"displayOrder",r))}}),[s,r,a]),null}function y(){var n=(0,u.UO)().id,t=(0,u.s0)(),e=(0,c.T)(),l=(0,c.C)((function(n){return n.formLoader.loading}));return(0,Z.jsxs)(r.Z,{maxWidth:"lg",children:[(0,Z.jsx)(s.Z,{path:"/faq-items",title:"Faq Items"}),(0,Z.jsx)(i.Z,{heading:"".concat(n?"Update":"Add"," Faq Item")}),(0,Z.jsx)("div",{style:{position:"relative"},children:(0,Z.jsxs)(o.Z,{children:[l&&(0,Z.jsx)(a.Z,{}),(0,Z.jsx)(q,{onSubmit:function(r){n?d.Z.updateFaq("".concat(n),r,e,t):d.Z.createFaq(r,e,t)}}),n&&(0,Z.jsx)(k,{id:n})]})})]})}},84034:function(n,t,e){var r=e(70885),a=e(15861),s=e(87757),i=e.n(s),o=e(46812),u=e(38720),c=e(33795),d=e(22134),l=e(99954),f="/FAQ",p={getFaqbyID:function(){var n=(0,a.Z)(i().mark((function n(t,e){var a,s,l,p,v;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===e||void 0===e||e(o.Ay.setLoading(!0)),c.Z.setJWT(),n.next=4,d.Z.asPromise(c.Z.get("".concat(f,"/").concat(t)));case 4:return a=n.sent,s=(0,r.Z)(a,2),l=s[0],p=s[1],l&&(v=l.data.data.faq,null===e||void 0===e||e(u.ks.setFaq(v))),null===e||void 0===e||e(o.Ay.setLoading(!1)),n.abrupt("return",[l,p]);case 11:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),getFaqs:function(){var n=(0,a.Z)(i().mark((function n(t,e){var a,s,o,l,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===e||void 0===e||e(u.ks.setLoading(!0)),c.Z.setJWT(),n.next=4,d.Z.asPromise(c.Z.post("".concat(f,"/filter"),t));case 4:return a=n.sent,s=(0,r.Z)(a,2),o=s[0],l=s[1],o&&(p=o.data.data.FAQs,null===e||void 0===e||e(u.ks.setFaqs(p))),null===e||void 0===e||e(u.ks.setLoading(!1)),n.abrupt("return",[o,l]);case 11:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),createFaq:function(){var n=(0,a.Z)(i().mark((function n(t,e,a){var s,o,u,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===e||void 0===e||e(l.nT.setLoading(!0)),c.Z.setJWT(),n.next=4,d.Z.asPromise(c.Z.post("".concat(f),t));case 4:return s=n.sent,o=(0,r.Z)(s,2),u=o[0],p=o[1],u&&(null===a||void 0===a||a("/faq-items")),null===e||void 0===e||e(l.nT.setLoading(!1)),n.abrupt("return",[u,p]);case 11:case"end":return n.stop()}}),n)})));return function(t,e,r){return n.apply(this,arguments)}}(),deleteFaq:function(){var n=(0,a.Z)(i().mark((function n(t,e){var a,s,o,p;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===e||void 0===e||e(l.nT.setLoading(!0)),c.Z.setJWT(),n.next=4,d.Z.asPromise(c.Z.delete("".concat(f,"/").concat(t)));case 4:return a=n.sent,s=(0,r.Z)(a,2),o=s[0],p=s[1],o&&(null===e||void 0===e||e(l.nT.closeModal()),null===e||void 0===e||e(u.ks.filterfaq(t))),null===e||void 0===e||e(l.nT.setLoading(!1)),n.abrupt("return",[o,p]);case 11:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),updateFaq:function(){var n=(0,a.Z)(i().mark((function n(t,e,a,s){var l,p,v,m,Z;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===a||void 0===a||a(o.Ay.setLoading(!0)),c.Z.setJWT(),n.next=4,d.Z.asPromise(c.Z.put("".concat(f,"/").concat(t),e));case 4:return l=n.sent,p=(0,r.Z)(l,2),v=p[0],m=p[1],v&&(Z=v.data.data,null===a||void 0===a||a(u.ks.updateFaq({id:t,faq:Z})),null===s||void 0===s||s("/faq-items")),null===a||void 0===a||a(o.Ay.setLoading(!1)),n.abrupt("return",[v,m]);case 11:case"end":return n.stop()}}),n)})));return function(t,e,r,a){return n.apply(this,arguments)}}()};t.Z=p}}]);
//# sourceMappingURL=5705.19388873.chunk.js.map