"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[5280],{45280:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var a=t(26445),o=t(94240),r=t(1821),i=t(52933),l=t(19601),c=t(16871),s=t(63153),m=t(62534),u=t(1413),d=t(72791),f=t(6118),p=t(76763),Z=t(80184);var h=t(8935),v=t(4535),b=t(74661),x=(0,t(90704).Z)({form:"AddAccountMangForm"})((function(e){var n=e.handleSubmit;return(0,Z.jsxs)("form",{onSubmit:n,children:[(0,Z.jsx)(b.ZP,{fields:j}),(0,Z.jsx)("br",{}),(0,Z.jsx)(v.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),j=[{name:"firstName",label:"First Name",component:m.Z,cellProps:{md:6},validate:[h.C1]},{name:"lastName",label:"Last Name",component:m.Z,cellProps:{md:6},validate:[h.C1]},{name:"email",label:"Email",component:m.Z,cellProps:{md:6},validate:[h.C1,h.Do]},{name:"phone",label:"Phone",component:m.Z,cellProps:{md:6},validate:[h.C1,h.NB]},{name:"roleId",label:"Role",component:function(e){var n=(0,s.T)(),t=(0,s.C)((function(e){return e.role.roleOptions}));return(0,d.useEffect)((function(){p.Z.getRoles(n)}),[n]),(0,Z.jsx)(f.Z,(0,u.Z)((0,u.Z)({},e),{},{options:t}))},validate:[h.C1],cellProps:{md:6}}],N=t(29435),g=t(92381),C=t(76314);function P(e){var n=e.id,t="AddAccountMangForm",a=(0,c.s0)(),o=(0,s.T)(),r=(0,s.C)((function(e){return e.auth.singleUser}));return(0,d.useEffect)((function(){return l.Z.getUserbyID("".concat(n),o),function(){o(C.YV.setSingleUser(null))}}),[n,o]),(0,d.useEffect)((function(){if(r&&"Not Found"!==(null===r||void 0===r?void 0:r.data)){var e=r.email,n=r.firstName,a=r.lastName,i=r.roleId,l=r.phone;o((0,g.m)(t,"email",e)),o((0,g.m)(t,"firstName",n)),o((0,g.m)(t,"lastName",a)),o((0,g.m)(t,"roleId",i)),o((0,g.m)(t,"phone",l))}}),[r,a,o]),null}function U(){var e=(0,c.s0)(),n=(0,s.T)(),t=(0,c.UO)().id,m=(0,s.C)((function(e){return e.formLoader.loading}));return(0,Z.jsxs)(a.Z,{maxWidth:"lg",children:[(0,Z.jsx)(o.Z,{path:"/account-management",title:"List"}),(0,Z.jsx)(r.Z,{heading:"".concat(t?"Update":"Add New"," Account")}),(0,Z.jsxs)(i.Z,{children:[m&&(0,Z.jsx)(N.Z,{}),(0,Z.jsx)(x,{onSubmit:function(a){t?l.Z.updateUser("".concat(t),a,n,e):l.Z.createUser(a,n,e)}}),t&&(0,Z.jsx)(P,{id:t})]})]})}}}]);
//# sourceMappingURL=5280.51f11b73.chunk.js.map