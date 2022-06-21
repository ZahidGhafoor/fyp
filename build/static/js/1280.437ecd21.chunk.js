"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[1280],{46849:function(e,n,l){l.d(n,{Z:function(){return u}});var o=l(1413),r=l(45987),a=l(85523),t=l(79174),i=l(80184),s=["label","FormControlLabelProps"];function c(e){var n=e.label,l=e.FormControlLabelProps,c=(0,r.Z)(e,s);return(0,i.jsx)(a.Z,(0,o.Z)((0,o.Z)({control:(0,i.jsx)(t.Z,(0,o.Z)({},c))},l),{},{label:n}))}var d=["input","handleBlur","handleFocus","CheckBoxProps"];function u(e){var n=e.input,l=e.handleBlur,a=e.handleFocus,t=e.CheckBoxProps,s=(0,r.Z)(e,d);return(0,i.jsx)(c,(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({},t),s),n),{},{checked:!0===n.value,onBlur:function(e){null===l||void 0===l||l(e),e.preventDefault()},onFocus:function(e){null===a||void 0===a||a(e),e.preventDefault()}}))}},1280:function(e,n,l){l.r(n),l.d(n,{default:function(){return A}});var o=l(26445),r=l(53767),a=l(4535),t=l(1821),i=l(52933),s=l(16871),c=l(55878),d=l(39281),u=l(79836),m=l(56890),p=l(35855),h=l(53382),x=l(39126),Z=l(78820),b=l(37894),j=l(63153),f=l(19601),v=l(72791),g=l(99954),k=l(80184),P=function(){var e=(0,s.s0)(),n=(0,j.T)(),l=(0,j.C)((function(e){return e.auth.users})),o=(0,j.C)((function(e){return e.auth.loading}));return(0,v.useEffect)((function(){f.Z.getUsers(n)}),[n]),console.log("our user are=======",l),(0,k.jsx)("div",{children:(0,k.jsx)(d.Z,{children:(0,k.jsx)(u.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,k.jsxs)(b.Z,{container:!0,coloumns:4,loading:o,message:"No user available",length:l.length,children:[(0,k.jsx)(m.Z,{children:(0,k.jsxs)(p.Z,{children:[(0,k.jsx)(c.Yk,{children:"First Name"}),(0,k.jsx)(c.Yk,{children:"Last Name"}),(0,k.jsx)(c.Yk,{children:"Email"}),(0,k.jsx)(c.Yk,{children:"Roles"})]})}),(0,k.jsx)(h.Z,{children:l.map((function(l,o){return(0,k.jsxs)(c.AF,{children:[(0,k.jsx)(c.Yk,{children:l.firstName}),(0,k.jsx)(c.Yk,{children:l.lastName}),(0,k.jsx)(c.Yk,{children:l.email}),(0,k.jsx)(c.Yk,{children:l.role}),(0,k.jsx)(c.Yk,{}),(0,k.jsx)(c.Yk,{align:"right",children:(0,k.jsxs)(r.Z,{direction:"row",spacing:2,justifyContent:"right",children:[(0,k.jsx)(a.Z,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){return n(g.nT.openModal({width:"500px",type:g.zr.CONFIRMATION_FORM,data:{id:l._id,type:g.zr.DELETE_USER,heading:"Delete USER",message:"Do you really want to delete this USER?"}}))},sx:{minWidth:"auto"},children:(0,k.jsx)(x.dnY,{})}),(0,k.jsx)(a.Z,{variant:"contained",color:"secondary",disableElevation:!0,onClick:function(){return e("/update-Account/".concat(l._id))},sx:{minWidth:"auto"},children:(0,k.jsx)(Z.$iz,{})}),(0,k.jsx)(a.Z,{variant:"contained",color:"success",disableElevation:!0,onClick:function(){return e("/points")},sx:{minWidth:"auto"},children:"POINT USAGE"})]})})]},o)}))})]})})})})},C=l(46849),E=l(62534),S=l(6118),_=l(54510),N=l(33577);function Y(){return(0,k.jsx)(N.Z,{onSubmit:function(e){},myFields:y})}var y=[{name:"role",label:"Role",component:S.Z,SelectProps:{options:[{value:"admin",label:"Admin"},{value:"store_Admin",label:"Store Admin"},{value:"store_Order_Shopper",label:"Store Order Shopper"}]},cellProps:{md:4}},{name:"fname",label:"First Name",component:E.Z,cellProps:{md:4}},{name:"lname",label:"Last Name",component:E.Z,cellProps:{md:4}},{name:"email",label:"Email",component:E.Z,cellProps:{md:4}},{name:"phone",label:"Phone",component:E.Z,cellProps:{md:4}},{name:"email_com",label:"Allow Email Communication",component:S.Z,SelectProps:{options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]},cellProps:{md:4}},{name:"sms_com",label:"Allow Sms Communication",component:S.Z,SelectProps:{options:[{value:"yes",label:"Yes"},{value:"no",label:"No"}]},cellProps:{md:4}},{label:"Registration Date Start",name:"start_date",component:_.Z,cellProps:{md:4}},{label:"Registration Date End",name:"end_date",component:_.Z,cellProps:{md:4}},{label:"Page Size",name:"page_size",component:E.Z,cellProps:{md:4}},{label:"Referral User",name:"referral",component:C.Z,cellProps:{md:12}},{label:"Hava No Order",name:"order",component:C.Z,cellProps:{md:12}}],A=function(){var e=(0,s.s0)(),n=(0,j.C)((function(e){return e.auth.users}));return(0,k.jsxs)(o.Z,{maxWidth:"lg",children:[(0,k.jsx)(t.Z,{heading:"Account Management (".concat(n.length,")"),children:(0,k.jsxs)(r.Z,{direction:"row",spacing:2,children:[(0,k.jsx)(a.Z,{color:"secondary",variant:"contained",sx:{borderRadius:"25px"},children:"Export"}),(0,k.jsx)(a.Z,{color:"primary",variant:"contained",sx:{borderRadius:"25px"},onClick:function(){return e("/add-newAccount")},children:"+ Add New"})]})}),(0,k.jsx)(i.Z,{children:(0,k.jsx)(Y,{})}),(0,k.jsx)(i.Z,{children:(0,k.jsx)(P,{})})]})}}}]);
//# sourceMappingURL=1280.437ecd21.chunk.js.map