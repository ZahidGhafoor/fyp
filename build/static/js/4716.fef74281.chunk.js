"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[4716],{46849:function(n,e,t){t.d(e,{Z:function(){return d}});var r=t(1413),a=t(45987),o=t(85523),u=t(79174),i=t(80184),c=["label","FormControlLabelProps"];function s(n){var e=n.label,t=n.FormControlLabelProps,s=(0,a.Z)(n,c);return(0,i.jsx)(o.Z,(0,r.Z)((0,r.Z)({control:(0,i.jsx)(u.Z,(0,r.Z)({},s))},t),{},{label:e}))}var l=["input","handleBlur","handleFocus","CheckBoxProps"];function d(n){var e=n.input,t=n.handleBlur,o=n.handleFocus,u=n.CheckBoxProps,c=(0,a.Z)(n,l);return(0,i.jsx)(s,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},u),c),e),{},{checked:!0===e.value,onBlur:function(n){null===t||void 0===t||t(n),n.preventDefault()},onFocus:function(n){null===o||void 0===o||o(n),n.preventDefault()}}))}},24831:function(n,e,t){t.d(e,{Z:function(){return P}});var r=t(1413),a=t(70885),o=t(15861),u=t(45987),i=t(87757),c=t.n(i),s=t(62478),l=t(85001),d=t(80184),p=["value","accept","maxSize","onChange"];function v(n){n.value;var e=n.accept,t=n.maxSize,a=n.onChange,o=(0,u.Z)(n,p);return(0,d.jsx)(s.Z,(0,r.Z)((0,r.Z)({},o),{},{type:"file",inputProps:(0,r.Z)({accept:e},o.inputProps),InputLabelProps:(0,r.Z)({shrink:!0},o.InputLabelProps),onChange:function(n){var r,o=null===(r=n.target.files)||void 0===r?void 0:r[0];if(!o)return null===a||void 0===a?void 0:a(o);if(e){var u=o.name.split("."),i=u[u.length-1].toLowerCase();if(!e.includes(".".concat(i))){l.Z.showError("".concat(i," not allowed!"));var c={error:"".concat(i," not allowed!")};return null===a||void 0===a?void 0:a(c)}}if(t){var s=1024*t*1024;if(o.size>s){l.Z.showError("Max file size is ".concat(t," MB"));var d={error:"Max file size is ".concat(t," MB")};return null===a||void 0===a?void 0:a(d)}}null===a||void 0===a||a(o)}}))}var f=t(63153),Z=t(46227),m=t(33795),g=t(22134),h={upload:function(){var n=(0,o.Z)(c().mark((function n(e,t){var r,o,u,i;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(Z.Ay.setLoading(!0)),m.Z.setJWT(),m.Z.setMultiPart(),n.next=5,g.Z.asPromise(m.Z.post("".concat("/upload"),e));case 5:return r=n.sent,o=(0,a.Z)(r,2),u=o[0],i=o[1],null===t||void 0===t||t(Z.Ay.setLoading(!1)),n.abrupt("return",[u,i]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},y=h,x=["input","handleBlur","handleFocus","FileUploadProps","meta"];function P(n){var e=n.input,t=n.handleBlur,i=n.handleFocus,s=n.FileUploadProps,l=n.meta,p=l.error,Z=l.touched,m=l.invalid,g=(0,u.Z)(n,x),h=(0,f.T)();return(0,d.jsx)(v,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},s),g),e),{},{helperText:Z&&m&&p,error:Z&&m&&p&&!0,onChange:function(){var n=(0,o.Z)(c().mark((function n(t){var r,o,u,i,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=13;break}if(!t.error){n.next=3;break}return n.abrupt("return",e.onChange(t));case 3:return(r=new FormData).append("file",t),n.next=7,y.upload(r,h);case 7:o=n.sent,u=(0,a.Z)(o,1),(i=u[0])?(s=i.data.data,e.onChange({images:s,name:t.name,type:t.type,blob:URL.createObjectURL(t)})):e.onChange(""),n.next=14;break;case 13:e.onChange("");case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onBlur:function(n){null===t||void 0===t||t(n),n.preventDefault()},onFocus:function(n){null===i||void 0===i||i(n),n.preventDefault()}}))}},97340:function(n,e,t){t.d(e,{Z:function(){return s}});var r=t(1413),a=t(72791),o=t(6118),u=t(63153),i=t(3153),c=t(80184);function s(n){var e=(0,u.T)(),t=(0,u.C)((function(n){return n.category.categoriesOptions}));return(0,a.useEffect)((function(){i.Z.getCategories({},e)}),[e]),(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({},n),{},{options:t}))}},34716:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r=t(1413),a=t(26445),o=t(29435),u=t(94240),i=t(1821),c=t(52933),s=t(16871),l=t(63153),d=t(13161),p=t(8935),v=t(46849),f=t(24831),Z=t(62534),m=t(6118),g=t(74661),h=t(69756),y=t(90704),x=t(4535),P=t(61889),b=t(72791),L=t(2318),T=t(21768),w=t(80184);function C(n){var e=(0,l.T)(),t=(0,l.C)((function(n){return n.product.productOptions}));return(0,b.useEffect)((function(){return L.Z.getProducts(e),function(){e(T.Jh.clear())}}),[e]),(0,w.jsx)(m.Z,(0,r.Z)((0,r.Z)({},n),{},{options:t}))}var A=t(97340),k=(0,y.Z)({form:"AddHomePageBannerForm"})((function(n){var e=n.handleSubmit,t=(0,l.C)((function(n){var e,t,r;return null===(e=n.form)||void 0===e||null===(t=e.AddHomePageBannerForm)||void 0===t||null===(r=t.values)||void 0===r?void 0:r.type}));return(0,w.jsxs)("form",{onSubmit:e,children:[(0,w.jsxs)(P.ZP,{container:!0,spacing:2,children:[(0,w.jsx)(P.ZP,{item:!0,md:12,children:(0,w.jsx)(g.ZP,{fields:j})}),"PRODUCT_DETAIL"===t?(0,w.jsx)(P.ZP,{item:!0,md:12,children:(0,w.jsx)(h.Z,{name:"product",label:"Product",validate:[p.C1],component:C})}):"CATEGORY"===t?(0,w.jsx)(P.ZP,{item:!0,md:12,children:(0,w.jsx)(h.Z,{name:"category",label:"Category",validate:[p.C1],component:A.Z})}):"BLANK_PAGE"===t?(0,w.jsx)(P.ZP,{item:!0,md:12,children:(0,w.jsx)(h.Z,{name:"url",label:"Url",validate:[p.C1],component:Z.Z})}):""]}),(0,w.jsx)("br",{}),(0,w.jsx)(x.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),j=[{label:"Is Published",name:"isPublished",component:v.Z,cellProps:{md:12}},{label:"Redirect To Referrer Page?",name:"redirectToReferrerPage",component:v.Z,cellProps:{md:12}},{label:"Media (997x378 - jpg)",name:"image",component:f.Z,validate:[p.C1,p.tP],cellProps:{md:6},FileUploadProps:{maxSize:5,accept:[".jpg",".jpeg",".png"]}},{label:"Display Order",name:"displayOrder",component:Z.Z,cellProps:{md:6},validate:[p.C1]},{label:"Type",name:"type",component:m.Z,validate:[p.C1],SelectProps:{options:[{value:"PRODUCT_DETAIL",label:"Product Detail"},{value:"CATEGORY",label:"Category"},{value:"BLANK_PAGE",label:"Blank Page"}]},cellProps:{md:12}}],B=t(92381),J=t(12917);function R(n){var e=n.id,t="AddHomePageBannerForm",r=(0,s.s0)(),a=(0,l.T)(),o=(0,l.C)((function(n){return n.banner.banner}));return(0,b.useEffect)((function(){return d.Z.getBannerbyID("".concat(e),a),function(){a(J.R2.setBanner(null))}}),[e,a]),(0,b.useEffect)((function(){if(o&&"Not Found"!==(null===o||void 0===o?void 0:o.data)){var n=o.isPublished,e=o.redirectToReferrerPage,r=o.image,u=o.displayOrder,i=o.type,c=o.product,s=o.category,l=o.url;a((0,B.m)(t,"isPublished",n)),a((0,B.m)(t,"redirectToReferrerPage",e)),a((0,B.m)(t,"image",r)),a((0,B.m)(t,"displayOrder",u)),a((0,B.m)(t,"type",i)),a((0,B.m)(t,"product",c)),a((0,B.m)(t,"category",s)),a((0,B.m)(t,"url",l))}}),[o,r,a]),null}function W(){var n=(0,s.UO)().id,e=(0,s.s0)(),t=(0,l.T)(),p=(0,l.C)((function(n){return n.formLoader.loading}));return(0,w.jsxs)(a.Z,{maxWidth:"lg",children:[(0,w.jsx)(u.Z,{path:"/home-page-banner",title:"HomePageBanner"}),(0,w.jsx)(i.Z,{heading:"".concat(n?"Update":"Add New"," Banner")}),(0,w.jsxs)(c.Z,{children:[p&&(0,w.jsx)(o.Z,{}),(0,w.jsx)(k,{onSubmit:function(a){var o,u,i=(0,r.Z)({},a);i.image=null===(o=i.image)||void 0===o||null===(u=o.images)||void 0===u?void 0:u[0].path,n?d.Z.updateBanner(n,i,t,e):d.Z.createBanner(i,t,e)}}),n&&(0,w.jsx)(R,{id:n})]})]})}},13161:function(n,e,t){var r=t(70885),a=t(15861),o=t(87757),u=t.n(o),i=t(33795),c=t(22134),s=t(99954),l=t(12917),d=t(46227),p="/banner",v={getBannerbyID:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,s,v,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(d.Ay.setLoading(!0)),i.Z.setJWT(),n.next=4,c.Z.asPromise(i.Z.get("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),s=o[0],v=o[1],s&&(f=s.data.data.banner,null===t||void 0===t||t(l.R2.setBanner(f))),null===t||void 0===t||t(d.Ay.setLoading(!1)),n.abrupt("return",[s,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getBanners:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,s,d,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(l.R2.setLoading(!0)),i.Z.setJWT(),n.next=4,c.Z.asPromise(i.Z.post("".concat(p,"/filter"),e));case 4:return a=n.sent,o=(0,r.Z)(a,2),s=o[0],d=o[1],s&&(v=s.data.data.banners,null===t||void 0===t||t(l.R2.setBanners(v))),null===t||void 0===t||t(l.R2.setLoading(!1)),n.abrupt("return",[s,d]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),deletebanner:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,d,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(s.nT.setLoading(!0)),i.Z.setJWT(),n.next=4,c.Z.asPromise(i.Z.delete("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),d=o[0],v=o[1],d&&(null===t||void 0===t||t(s.nT.closeModal()),null===t||void 0===t||t(l.R2.filterbanner(e))),null===t||void 0===t||t(s.nT.setLoading(!1)),n.abrupt("return",[d,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),createBanner:function(){var n=(0,a.Z)(u().mark((function n(e,t,a){var o,s,l,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(d.Ay.setLoading(!0)),i.Z.setJWT(),n.next=4,c.Z.asPromise(i.Z.post("".concat(p),e));case 4:return o=n.sent,s=(0,r.Z)(o,2),l=s[0],v=s[1],l&&(null===a||void 0===a||a("/home-page-banner")),null===t||void 0===t||t(d.Ay.setLoading(!1)),n.abrupt("return",[l,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),updateBanner:function(){var n=(0,a.Z)(u().mark((function n(e,t,a,o){var s,v,f,Z,m;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===a||void 0===a||a(d.Ay.setLoading(!0)),i.Z.setJWT(),n.next=4,c.Z.asPromise(i.Z.put("".concat(p,"/").concat(e),t));case 4:return s=n.sent,v=(0,r.Z)(s,2),f=v[0],Z=v[1],f&&(m=f.data.data,null===a||void 0===a||a(l.R2.updateBanner({id:e,banner:m})),null===o||void 0===o||o("/home-page-banner")),null===a||void 0===a||a(d.Ay.setLoading(!1)),n.abrupt("return",[f,Z]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r,a){return n.apply(this,arguments)}}()};e.Z=v},3153:function(n,e,t){var r=t(70885),a=t(15861),o=t(87757),u=t.n(o),i=t(46812),c=t(77834),s=t(33795),l=t(22134),d=t(63804),p="/categories",v={getCategorybyID:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,c,v,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(i.Ay.setLoading(!0)),s.Z.setJWT(),n.next=4,l.Z.asPromise(s.Z.get("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),c=o[0],v=o[1],c&&(f=c.data.data.category,null===t||void 0===t||t(d.X$.setCategory(f))),null===t||void 0===t||t(i.Ay.setLoading(!1)),n.abrupt("return",[c,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getCategories:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,i,c,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(d.X$.setLoading(!0)),s.Z.setJWT(),n.next=4,l.Z.asPromise(s.Z.post("".concat(p,"/filter"),e));case 4:return a=n.sent,o=(0,r.Z)(a,2),i=o[0],c=o[1],i&&(v=i.data.data,null===t||void 0===t||t(d.X$.setCategories(v))),null===t||void 0===t||t(d.X$.setLoading(!1)),n.abrupt("return",[i,c]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),addCategory:function(){var n=(0,a.Z)(u().mark((function n(e,t,a){var o,c,v,f,Z;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(i.Ay.setLoading(!0)),s.Z.setJWT(),n.next=4,l.Z.asPromise(s.Z.post("".concat(p),e));case 4:return o=n.sent,c=(0,r.Z)(o,2),v=c[0],f=c[1],v&&(Z=v.data.data,null===t||void 0===t||t(d.X$.addCategory(Z)),null===a||void 0===a||a("/category-management")),null===t||void 0===t||t(i.Ay.setLoading(!1)),n.abrupt("return",[v,f]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),deleteCategory:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,i,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(c.nT.setLoading(!0)),s.Z.setJWT(),n.next=4,l.Z.asPromise(s.Z.delete("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),i=o[0],v=o[1],i&&(null===t||void 0===t||t(c.nT.closeModal()),null===t||void 0===t||t(d.X$.filterCategory(e))),null===t||void 0===t||t(c.nT.setLoading(!1)),n.abrupt("return",[i,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),updateCategory:function(){var n=(0,a.Z)(u().mark((function n(e,t,a,o){var c,v,f,Z,m;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===a||void 0===a||a(i.Ay.setLoading(!0)),s.Z.setJWT(),n.next=4,l.Z.asPromise(s.Z.put("".concat(p,"/").concat(e),t));case 4:return c=n.sent,v=(0,r.Z)(c,2),f=v[0],Z=v[1],f&&(m=f.data.data.category,null===a||void 0===a||a(d.X$.updateCategory({id:e,category:m})),null===o||void 0===o||o("/category-management")),null===a||void 0===a||a(i.Ay.setLoading(!1)),n.abrupt("return",[f,Z]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r,a){return n.apply(this,arguments)}}()};e.Z=v},2318:function(n,e,t){var r=t(70885),a=t(15861),o=t(87757),u=t.n(o),i=t(33795),c=t(21768),s=t(22134),l=t(99954),d=t(46227),p="/product",v={getProductbyID:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,l,v,f;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(d.Ay.setLoading(!0)),i.Z.setJWT(),n.next=4,s.Z.asPromise(i.Z.get("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),l=o[0],v=o[1],l&&(f=l.data.data.product,null===t||void 0===t||t(c.Jh.setProduct(f))),null===t||void 0===t||t(d.Ay.setLoading(!1)),n.abrupt("return",[l,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),getProducts:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,l,d,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(c.Jh.setLoading(!0)),i.Z.setJWT(),n.next=4,s.Z.asPromise(i.Z.post("".concat(p,"/filter"),e));case 4:return a=n.sent,o=(0,r.Z)(a,2),l=o[0],d=o[1],l&&(v=l.data.data.products,null===t||void 0===t||t(c.Jh.setProducts(v))),null===t||void 0===t||t(c.Jh.setLoading(!1)),n.abrupt("return",[l,d]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),addProduct:function(){var n=(0,a.Z)(u().mark((function n(e,t,a){var o,l,v,f,Z;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(d.Ay.setLoading(!0)),i.Z.setJWT(),n.next=4,s.Z.asPromise(i.Z.post("".concat(p),e));case 4:return o=n.sent,l=(0,r.Z)(o,2),v=l[0],f=l[1],v&&(Z=v.data.data.product,null===t||void 0===t||t(c.Jh.addProduct(Z)),null===a||void 0===a||a("/product-management")),null===t||void 0===t||t(d.Ay.setLoading(!1)),n.abrupt("return",[v,f]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),updateProduct:function(){var n=(0,a.Z)(u().mark((function n(e,t,a){var o,v,f,Z,m;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===a||void 0===a||a(d.Ay.setLoading(!0)),null===a||void 0===a||a(l.nT.setLoading(!0)),i.Z.setJWT(),n.next=5,s.Z.asPromise(i.Z.put("".concat(p,"/").concat(e),t));case 5:return o=n.sent,v=(0,r.Z)(o,2),f=v[0],Z=v[1],f&&(m=f.data.data.updated_product,null===a||void 0===a||a(c.Jh.updateProduct(m)),null===a||void 0===a||a(c.Jh.setShow("list")),null===a||void 0===a||a(l.nT.closeModal())),null===a||void 0===a||a(d.Ay.setLoading(!1)),null===a||void 0===a||a(l.nT.setLoading(!1)),n.abrupt("return",[f,Z]);case 13:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),deleteProduct:function(){var n=(0,a.Z)(u().mark((function n(e,t){var a,o,d,v;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return null===t||void 0===t||t(l.nT.setLoading(!0)),i.Z.setJWT(),n.next=4,s.Z.asPromise(i.Z.delete("".concat(p,"/").concat(e)));case 4:return a=n.sent,o=(0,r.Z)(a,2),d=o[0],v=o[1],d&&(null===t||void 0===t||t(l.nT.closeModal()),null===t||void 0===t||t(c.Jh.deleteProduct(e))),null===t||void 0===t||t(l.nT.setLoading(!1)),n.abrupt("return",[d,v]);case 11:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()};e.Z=v}}]);
//# sourceMappingURL=4716.fef74281.chunk.js.map