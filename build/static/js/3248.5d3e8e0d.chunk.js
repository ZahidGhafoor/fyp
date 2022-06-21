"use strict";(self.webpackChunkhimonk_admin_front=self.webpackChunkhimonk_admin_front||[]).push([[3248,843],{46849:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(1413),o=r(45987),a=r(85523),i=r(79174),l=r(80184),s=["label","FormControlLabelProps"];function c(e){var n=e.label,r=e.FormControlLabelProps,c=(0,o.Z)(e,s);return(0,l.jsx)(a.Z,(0,t.Z)((0,t.Z)({control:(0,l.jsx)(i.Z,(0,t.Z)({},c))},r),{},{label:n}))}var u=["input","handleBlur","handleFocus","CheckBoxProps"];function d(e){var n=e.input,r=e.handleBlur,a=e.handleFocus,i=e.CheckBoxProps,s=(0,o.Z)(e,u);return(0,l.jsx)(c,(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},i),s),n),{},{checked:!0===n.value,onBlur:function(e){null===r||void 0===r||r(e),e.preventDefault()},onFocus:function(e){null===a||void 0===a||a(e),e.preventDefault()}}))}},24831:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(1413),o=r(70885),a=r(15861),i=r(45987),l=r(87757),s=r.n(l),c=r(62478),u=r(85001),d=r(80184),p=["value","accept","maxSize","onChange"];function m(e){e.value;var n=e.accept,r=e.maxSize,o=e.onChange,a=(0,i.Z)(e,p);return(0,d.jsx)(c.Z,(0,t.Z)((0,t.Z)({},a),{},{type:"file",inputProps:(0,t.Z)({accept:n},a.inputProps),InputLabelProps:(0,t.Z)({shrink:!0},a.InputLabelProps),onChange:function(e){var t,a=null===(t=e.target.files)||void 0===t?void 0:t[0];if(!a)return null===o||void 0===o?void 0:o(a);if(n){var i=a.name.split("."),l=i[i.length-1].toLowerCase();if(!n.includes(".".concat(l))){u.Z.showError("".concat(l," not allowed!"));var s={error:"".concat(l," not allowed!")};return null===o||void 0===o?void 0:o(s)}}if(r){var c=1024*r*1024;if(a.size>c){u.Z.showError("Max file size is ".concat(r," MB"));var d={error:"Max file size is ".concat(r," MB")};return null===o||void 0===o?void 0:o(d)}}null===o||void 0===o||o(a)}}))}var f=r(63153),h=r(46227),v=r(33795),Z=r(22134),x={upload:function(){var e=(0,a.Z)(s().mark((function e(n,r){var t,a,i,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(h.Ay.setLoading(!0)),v.Z.setJWT(),v.Z.setMultiPart(),e.next=5,Z.Z.asPromise(v.Z.post("".concat("/upload"),n));case 5:return t=e.sent,a=(0,o.Z)(t,2),i=a[0],l=a[1],null===r||void 0===r||r(h.Ay.setLoading(!1)),e.abrupt("return",[i,l]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()},g=x,b=["input","handleBlur","handleFocus","FileUploadProps","meta"];function j(e){var n=e.input,r=e.handleBlur,l=e.handleFocus,c=e.FileUploadProps,u=e.meta,p=u.error,h=u.touched,v=u.invalid,Z=(0,i.Z)(e,b),x=(0,f.T)();return(0,d.jsx)(m,(0,t.Z)((0,t.Z)((0,t.Z)((0,t.Z)({},c),Z),n),{},{helperText:h&&v&&p,error:h&&v&&p&&!0,onChange:function(){var e=(0,a.Z)(s().mark((function e(r){var t,a,i,l,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=13;break}if(!r.error){e.next=3;break}return e.abrupt("return",n.onChange(r));case 3:return(t=new FormData).append("file",r),e.next=7,g.upload(t,x);case 7:a=e.sent,i=(0,o.Z)(a,1),(l=i[0])?(c=l.data.data,n.onChange({images:c,name:r.name,type:r.type,blob:URL.createObjectURL(r)})):n.onChange(""),e.next=14;break;case 13:n.onChange("");case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onBlur:function(e){null===r||void 0===r||r(e),e.preventDefault()},onFocus:function(e){null===l||void 0===l||l(e),e.preventDefault()}}))}},33107:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(1413),o=r(42982),a=r(72791),i=r(74661),l=r(80184);function s(e){var n=e.fields,r=e.fieldsArray,s=e.FieldsProps;return(0,a.useEffect)((function(){((null===s||void 0===s?void 0:s.languages)||["en","de","tr"]).forEach((function(e){n.push({lang:e})}))}),[]),(0,l.jsx)(l.Fragment,{children:n.map((function(e,c){return(0,l.jsxs)(a.Fragment,{children:[(null===s||void 0===s?void 0:s.showLabelInHeading)&&(0,l.jsx)("h3",{children:i.Oq[n.get(c).lang]}),(0,l.jsx)(i.ZP,{member:e,fields:null!==s&&void 0!==s&&s.showLabelInHeading?(0,o.Z)(r):r.map((function(e){return"translation"===e.name?(0,t.Z)((0,t.Z)({},e),{},{label:"".concat(e.label," (").concat(i.Oq[n.get(c).lang],")")}):e}))})]},c)}))})}},78340:function(e,n,r){r.d(n,{Z:function(){return f}});var t=r(1413),o=r(45987),a=r(61963),i=r(64554),l=r(20890),s=r(13400),c=r(25228),u=r(43896),d=r(80184),p=["children","value","index"];function m(e){var n=e.children,r=e.value,a=e.index,s=(0,o.Z)(e,p);return(0,d.jsx)("div",(0,t.Z)((0,t.Z)({role:"tabpanel",hidden:r!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},s),{},{children:r===a&&(0,d.jsx)(i.Z,{sx:{pt:2,pb:2},children:(0,d.jsx)(l.Z,{component:"div",children:n})})}))}function f(e){var n=e.value,r=e.tabs,o=e.onChange,l=e.onRefresh,p=e.showRefresh;return(0,d.jsxs)("div",{style:{position:"relative"},children:[p&&(0,d.jsx)(s.Z,{edge:"end","aria-label":"refresh",onClick:function(){return null===l||void 0===l?void 0:l()},sx:{zIndex:2,top:"5px",right:"12px",cursor:"pointer",position:"absolute"},children:(0,d.jsx)(a.Z,{color:"primary"})}),(0,d.jsx)(i.Z,{sx:{borderBottom:1,borderColor:"divider","& .MuiButtonBase-root":{padding:"6px 12px",minWidth:"unset"}},children:(0,d.jsx)(c.Z,{value:n,onChange:function(e,n){return o(n)},"aria-label":"basic tabs example",children:r.map((function(e,n){var r=e.label;return(0,d.jsx)(u.Z,(0,t.Z)({label:r,sx:{textTransform:"capitalize"}},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(n)),n)}))})}),r.map((function(e,r){var t=e.element;return(0,d.jsx)(m,{value:n,index:r,children:t},r)}))]})}},60843:function(e,n,r){r.r(n),r.d(n,{default:function(){return E}});var t=r(45987),o=r(1413),a=r(26445),i=r(94240),l=r(94925),s=r(72791),c=r(66770),u=r.n(c),d=(r(86009),r(80184)),p=["label","input","handleBlur","handleFocus","meta"],m={toolbar:[[{header:[1,2,!1]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]]},f=["header","font","size","bold","italic","underline","align","strike","script","blockquote","background","list","bullet","indent","link","image","video","color","code-block"];var h=r(46849),v=r(62534),Z=r(6118),x=r(8935),g=r(33107),b=r(4535),j=r(74661),y=(0,r(90704).Z)({form:"AddProductForm"})((function(e){var n=e.handleSubmit;return(0,d.jsxs)("form",{onSubmit:n,children:[(0,d.jsx)(j.ZP,{fields:P}),(0,d.jsx)("br",{}),(0,d.jsx)(b.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),P=[{label:"Is Published",name:"isPublished",component:h.Z,cellProps:{md:12}},{label:"Prevent Under 16",name:"preventUnder16",component:h.Z,cellProps:{md:12}},{label:"Prevent Under 18",name:"preventUnder18",component:h.Z,cellProps:{md:12}},{label:"Sku",name:"SKU",component:v.Z,cellProps:{md:4}},{label:"Barcode",name:"barcode",component:v.Z,cellProps:{md:4}},{label:"Gtin",name:"gtin",component:v.Z,cellProps:{md:4}},{label:"Maximum Buyable Count",name:"maximumBuyableCount",component:v.Z,cellProps:{md:6}},{label:"Critical Stock Amount",name:"criticalStock",component:v.Z,cellProps:{md:6}},{label:"Stock Type",name:"stockType",component:Z.Z,SelectProps:{options:[{value:"INFINITE_STOCK",label:"Infinite Stock"},{value:"KEEP_STOCK",label:"Keep Stock"}]},cellProps:{md:12}},{label:"Purchase Price",name:"purchasedPrice",component:v.Z,cellProps:{md:3}},{label:"Old Price",name:"oldPrice",component:v.Z,cellProps:{md:3}},{label:"Price",name:"newPrice",component:v.Z,cellProps:{md:3}},{label:"Tax (Percentage)",name:"taxPercentage",component:v.Z,cellProps:{md:3}},{label:"Display Order",name:"displayOrder",component:v.Z,cellProps:{md:6}},{name:"translations",label:"Translations",reduxFormComponent:"FieldArray",component:g.Z,FieldsProps:{showLabelInHeading:!0},fieldsArray:[{label:"Name",name:"name",component:v.Z,cellProps:{md:4}},{label:"Short Name",name:"shortName",component:v.Z,cellProps:{md:4}},{label:"Primary Property",name:"primaryProperty",component:v.Z,cellProps:{md:4}},{label:"Short Description",name:"shortDesc",component:v.Z,cellProps:{md:12}},{label:"Long Description",name:"longDesc",component:function(e){var n=e.label,r=e.input,a=(e.handleBlur,e.handleFocus,e.meta),i=a.error,c=a.touched,h=(0,t.Z)(e,p),v=(0,s.useRef)(!1);return(0,s.useEffect)((function(){r.value&&!v.current&&(r.onChange(r.value.replaceAll("&lt;","<")),v.current=!0)}),[r]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.Z,{shrink:!0,htmlFor:h.name,sx:{fontWeight:"bold"},children:n}),(0,d.jsx)(u(),(0,o.Z)((0,o.Z)({id:h.name,error:c&&i},h),{},{theme:"snow",onChange:function(e){r.onChange(e)},value:r.value,defaultValue:r.value,formats:f,modules:m}))]})},validate:[x.C1]}]}],C=r(1821),S=r(52933),k=r(2318),T=r(16871),w=r(63153),L=r(29435),A=r(92381),F=["_id"];function _(e){e.id;var n="AddProductForm",r=(0,T.s0)(),a=(0,w.T)(),i=(0,w.C)((function(e){return e.product.product}));return(0,s.useEffect)((function(){if(i&&"Not Found"!==(null===i||void 0===i?void 0:i.data)){var e=i.isPublished,r=i.preventUnder16,l=i.preventUnder18,s=i.SKU,c=i.barcode,u=i.gtin,d=i.categories,p=i.maximumBuyableCount,m=i.criticalStock,f=i.stockType,h=i.purchasedPrice,v=i.oldPrice,Z=i.newPrice,x=i.taxPercentage,g=i.displayOrder,b=i.translations;a((0,A.m)(n,"isPublished",e)),a((0,A.m)(n,"preventUnder16",r)),a((0,A.m)(n,"preventUnder18",l)),a((0,A.m)(n,"SKU",s)),a((0,A.m)(n,"barcode",c)),a((0,A.m)(n,"gtin",u)),a((0,A.m)(n,"categories",d)),a((0,A.m)(n,"maximumBuyableCount",p)),a((0,A.m)(n,"criticalStock",m)),a((0,A.m)(n,"stockType",f)),a((0,A.m)(n,"purchasedPrice",h)),a((0,A.m)(n,"oldPrice",v)),a((0,A.m)(n,"newPrice",Z)),a((0,A.m)(n,"taxPercentage",x)),a((0,A.m)(n,"displayOrder",g)),a((0,A.m)(n,"translations",b.map((function(e){e._id;var n=(0,t.Z)(e,F);return(0,o.Z)({},n)}))))}}),[i,r,a]),null}var O=["_id"];function E(){var e=(0,T.UO)().id,n=(0,T.s0)(),r=(0,w.T)(),l=(0,w.C)((function(e){return e.formLoader.loading})),s=function(a){var i=(0,o.Z)({},a);i.categories=i.categories.map((function(e){e._id;var n=(0,t.Z)(e,O);return(0,o.Z)({},n)})),e?k.Z.updateProduct("".concat(e),i,r):k.Z.addProduct(i,r,n)};return(0,d.jsx)(d.Fragment,{children:e?(0,d.jsxs)(S.Z,{children:[l&&(0,d.jsx)(L.Z,{}),(0,d.jsx)(y,{onSubmit:s}),(0,d.jsx)(_,{id:e})]}):(0,d.jsxs)(a.Z,{maxWidth:"lg",children:[(0,d.jsx)(i.Z,{path:"/product-management",title:"Products"}),(0,d.jsx)(C.Z,{heading:"Add New Product"}),(0,d.jsxs)(S.Z,{children:[l&&(0,d.jsx)(L.Z,{}),(0,d.jsx)(y,{onSubmit:s})]})]})})}},93248:function(e,n,r){r.r(n),r.d(n,{default:function(){return he}});var t=r(26445),o=r(94240),a=r(1821),i=r(78340),l=r(60843),s=r(63153),c=r(21768),u=r(4535),d=r(52933),p=r(45987),m=r(42982),f=r(1413),h=r(29435),v=r(2318),Z=r(62534),x=r(24831),g=r(74661),b=r(90704),j=r(80184),y=(0,b.Z)({form:"AddMediaForm"})((function(e){var n=e.handleSubmit;return(0,j.jsxs)("form",{onSubmit:n,children:[(0,j.jsx)(g.ZP,{fields:P}),(0,j.jsx)("br",{}),(0,j.jsx)(u.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),P=[{label:"Media (600*600 -jpg)",name:"image",component:x.Z,cellProps:{md:12}},{label:"Display Order",name:"displayOrder",component:Z.Z,cellProps:{md:12}}],C=r(72791),S=r(92381);function k(e){var n=e.id,r="AddMediaForm",t=(0,s.T)(),o=(0,s.C)((function(e){return e.product.product}));return(0,C.useEffect)((function(){o&&o.images.every((function(e){var o=e._id,a=e.image,i=e.displayOrder;return n!==o||(t((0,S.m)(r,"image",a)),t((0,S.m)(r,"displayOrder",i)),!1)}))}),[n,o,t]),null}var T=["_id"];function w(e){var n=e.id,r=(0,s.T)(),t=(0,s.C)((function(e){return e.product.product})),o=(0,s.C)((function(e){return e.formLoader.loading}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(d.Z,{children:[o&&(0,j.jsx)(h.Z,{}),(0,j.jsx)(y,{onSubmit:function(e){var o=(0,f.Z)({},e);o.image=o.image.images[0].path;var a=(0,f.Z)({},t),i=(0,m.Z)(a.images);n?i=i.map((function(e){return n===e._id?(0,f.Z)((0,f.Z)({},e),o):e})):i.push(o),i=i.map((function(e){e._id;var n=(0,p.Z)(e,T);return(0,f.Z)({},n)})),v.Z.updateProduct("".concat(null===t||void 0===t?void 0:t._id),{images:i},r)}}),n&&(0,j.jsx)(k,{id:n})]})})}var L=r(55878),A=r(39281),F=r(79836),_=r(56890),O=r(35855),E=r(53382),J=r(53767),W=r(37894),D=r(78820),M=r(39126),Y=r(99954),B=["_id"];function z(){var e,n=(0,s.T)(),r=(0,s.C)((function(e){return e.product.product}));return(0,j.jsx)(A.Z,{children:(0,j.jsx)(F.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,j.jsxs)(W.Z,{container:!0,coloumns:4,loading:!1,length:null===r||void 0===r?void 0:r.images.length,message:"No media available",children:[(0,j.jsx)(_.Z,{children:(0,j.jsxs)(O.Z,{children:[(0,j.jsx)(L.Yk,{children:"Media"}),(0,j.jsx)(L.Yk,{children:"Display Order"}),(0,j.jsx)(L.Yk,{})]})}),(0,j.jsx)(E.Z,{children:null===r||void 0===r||null===(e=r.images)||void 0===e?void 0:e.map((function(e,t){return(0,j.jsxs)(L.AF,{children:[(0,j.jsx)(L.Yk,{children:(0,j.jsx)("img",{src:e.image,alt:"",style:{maxWidth:"60px"}})}),(0,j.jsx)(L.Yk,{children:e.displayOrder}),(0,j.jsx)(L.Yk,{align:"right",children:(0,j.jsxs)(J.Z,{direction:"row",spacing:2,justifyContent:"right",children:[(0,j.jsx)(u.Z,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){n(Y.nT.openModal({width:"500px",type:Y.zr.CONFIRMATION_FORM,data:{id:r._id,images:r.images.filter((function(n){return n._id!==e._id})).map((function(e){e._id;var n=(0,p.Z)(e,B);return(0,f.Z)({},n)})),type:Y.zr.DELETE_PRODUCT_MEDIA,heading:"Delete Media",message:"Do you really want to delete this Media?"}}))},sx:{minWidth:"auto"},children:(0,j.jsx)(M.dnY,{})}),(0,j.jsx)(u.Z,{variant:"contained",color:"secondary",disableElevation:!0,sx:{minWidth:"auto"},onClick:function(){return n(c.Jh.setShow(e._id))},children:(0,j.jsx)(D.$iz,{})})]})})]},t)}))})]})})})}var I=(0,r(74223).Z)((0,j.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");function N(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.product.show}));return(0,C.useEffect)((function(){return function(){e(c.Jh.setShow("list"))}}),[e]),(0,j.jsxs)(j.Fragment,{children:["list"!==n&&(0,j.jsx)(I,{style:{cursor:"pointer"},onClick:function(){return e(c.Jh.setShow("list"))}}),"list"===n&&(0,j.jsx)(a.Z,{children:(0,j.jsx)(u.Z,{color:"primary",variant:"contained",onClick:function(){return e(c.Jh.setShow("add"))},children:"+ Add New"})}),(0,j.jsx)(d.Z,{children:"list"===n?(0,j.jsx)(z,{}):(0,j.jsx)(w,{id:"add"!==n&&n})})]})}var U=r(96086),R=r(6118);var G=(0,b.Z)({form:"AddCategoryForm"})((function(e){var n=e.handleSubmit;return(0,j.jsxs)("form",{onSubmit:n,children:[(0,j.jsx)(g.ZP,{fields:H}),(0,j.jsx)("br",{}),(0,j.jsx)(u.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),H=[{label:"Category",name:"category",component:function(e){var n=(0,s.T)(),r=(0,s.C)((function(e){return e.subCategory.subCategoriesOptions}));return(0,C.useEffect)((function(){U.Q.getAllSubCategories(n)}),[n]),(0,j.jsx)(R.Z,(0,f.Z)((0,f.Z)({},e),{},{options:r}))},cellProps:{md:12}},{label:"Display Order",name:"displayOrder",component:Z.Z,cellProps:{md:12}}];function K(e){var n=e.id,r="AddCategoryForm",t=(0,s.T)(),o=(0,s.C)((function(e){return e.product.product}));return(0,C.useEffect)((function(){o&&o.categories.every((function(e){var o=e._id,a=e.category,i=e.displayOrder;return n!==o||(t((0,S.m)(r,"category",a)),t((0,S.m)(r,"displayOrder",i)),!1)}))}),[n,o,t]),null}var q=r(85001),$=["_id"];function Q(e){var n=e.id,r=(0,s.T)(),t=(0,s.C)((function(e){return e.product.product})),o=(0,s.C)((function(e){return e.formLoader.loading}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(d.Z,{children:[o&&(0,j.jsx)(h.Z,{}),(0,j.jsx)(G,{onSubmit:function(e){var o=(0,m.Z)(t.categories);if(n){if((o=o.map((function(r){return n===r._id?(0,f.Z)((0,f.Z)({},r),e):r}))).filter((function(n){return n.category===e.category})).length>1)return q.Z.showError("Category already exist!")}else{if(o.find((function(n){return n.category===e.category})))return q.Z.showError("Category already exist!");o.push(e)}o=o.map((function(e){e._id;var n=(0,p.Z)(e,$);return(0,f.Z)({},n)})),v.Z.updateProduct("".concat(null===t||void 0===t?void 0:t._id),{categories:o},r)}}),n&&(0,j.jsx)(K,{id:n})]})})}var V=["_id"];function X(){var e,n=(0,s.T)(),r=(0,s.C)((function(e){return e.product.product}));return(0,j.jsx)(A.Z,{children:(0,j.jsx)(F.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,j.jsxs)(W.Z,{container:!0,coloumns:4,loading:!1,length:null===r||void 0===r?void 0:r.categories.length,message:"No categories available",children:[(0,j.jsx)(_.Z,{children:(0,j.jsxs)(O.Z,{children:[(0,j.jsx)(L.Yk,{children:"Category"}),(0,j.jsx)(L.Yk,{children:"Display Order"}),(0,j.jsx)(L.Yk,{})]})}),(0,j.jsx)(E.Z,{children:null===r||void 0===r||null===(e=r.categories)||void 0===e?void 0:e.map((function(e,t){return(0,j.jsxs)(L.AF,{children:[(0,j.jsx)(L.Yk,{children:e.category}),(0,j.jsx)(L.Yk,{children:e.displayOrder}),(0,j.jsx)(L.Yk,{align:"right",children:(0,j.jsxs)(J.Z,{direction:"row",spacing:2,justifyContent:"right",children:[(0,j.jsx)(u.Z,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){n(Y.nT.openModal({width:"500px",type:Y.zr.CONFIRMATION_FORM,data:{id:r._id,categories:r.categories.filter((function(n){return n._id!==e._id})).map((function(e){e._id;var n=(0,p.Z)(e,V);return(0,f.Z)({},n)})),type:Y.zr.DELETE_PRODUCT_CATEGORY,heading:"Delete Category",message:"Do you really want to delete this Category?"}}))},sx:{minWidth:"auto"},children:(0,j.jsx)(M.dnY,{})}),(0,j.jsx)(u.Z,{variant:"contained",color:"secondary",disableElevation:!0,sx:{minWidth:"auto"},onClick:function(){return n(c.Jh.setShow(e._id))},children:(0,j.jsx)(D.$iz,{})})]})})]},t)}))})]})})})}function ee(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.product.show}));return(0,C.useEffect)((function(){return function(){e(c.Jh.setShow("list"))}}),[e]),(0,j.jsxs)(j.Fragment,{children:["list"!==n&&(0,j.jsx)(I,{style:{cursor:"pointer"},onClick:function(){return e(c.Jh.setShow("list"))}}),"list"===n&&(0,j.jsx)(a.Z,{children:(0,j.jsx)(u.Z,{color:"primary",variant:"contained",onClick:function(){return e(c.Jh.setShow("add"))},children:"+ Add New"})}),(0,j.jsx)(d.Z,{children:"list"===n?(0,j.jsx)(X,{}):(0,j.jsx)(Q,{id:"add"!==n&&n})})]})}function ne(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.product.product}));return(0,j.jsx)(A.Z,{children:(0,j.jsx)(F.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,j.jsxs)(W.Z,{container:!0,coloumns:4,loading:!1,length:null===n||void 0===n?void 0:n.tags.length,message:"No search tags available",children:[(0,j.jsx)(_.Z,{children:(0,j.jsxs)(O.Z,{children:[(0,j.jsx)(L.Yk,{children:"Tag Name"}),(0,j.jsx)(L.Yk,{})]})}),(0,j.jsx)(E.Z,{children:null===n||void 0===n?void 0:n.tags.map((function(r,t){return(0,j.jsxs)(L.AF,{children:[(0,j.jsx)(L.Yk,{children:r}),(0,j.jsx)(L.Yk,{align:"right",children:(0,j.jsxs)(J.Z,{direction:"row",spacing:2,justifyContent:"right",children:[(0,j.jsx)(u.Z,{variant:"contained",color:"primary",disableElevation:!0,onClick:function(){var r=(0,m.Z)(n.tags);r.splice(t,1),e(Y.nT.openModal({width:"500px",type:Y.zr.CONFIRMATION_FORM,data:{tags:r,id:n._id,type:Y.zr.DELETE_PRODUCT_TAG,heading:"Delete Tag",message:"Do you really want to delete this Tag?"}}))},sx:{minWidth:"auto"},children:(0,j.jsx)(M.dnY,{})}),(0,j.jsx)(u.Z,{variant:"contained",color:"secondary",disableElevation:!0,sx:{minWidth:"auto"},onClick:function(){return e(c.Jh.setShow(t))},children:(0,j.jsx)(D.$iz,{})})]})})]},t)}))})]})})})}var re=(0,b.Z)({form:"AddSearchTagsForm"})((function(e){var n=e.handleSubmit;return(0,j.jsxs)("form",{onSubmit:n,children:[(0,j.jsx)(g.ZP,{fields:te}),(0,j.jsx)("br",{}),(0,j.jsx)(u.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),te=[{label:"Tag Name",name:"tag",component:Z.Z,cellProps:{md:6}}];function oe(e){var n=e.index,r=(0,s.T)(),t=(0,s.C)((function(e){return e.product.product}));return(0,C.useEffect)((function(){t&&t.tags.every((function(e,t){return n!==t||(r((0,S.m)("AddSearchTagsForm","tag",e)),!1)}))}),[t,r,n]),null}function ae(e){var n=e.id,r=(0,s.T)(),t=(0,s.C)((function(e){return e.product.product})),o=(0,s.C)((function(e){return e.formLoader.loading}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(d.Z,{children:[o&&(0,j.jsx)(h.Z,{}),(0,j.jsx)(re,{onSubmit:function(e){var o=(0,f.Z)({},t);console.log("product",t);var a=(0,m.Z)(o.tags);n?console.log("Values",e):a.push(e.tag),a=a.map((function(r,t){return n===t?e.tag:r})),v.Z.updateProduct("".concat(null===t||void 0===t?void 0:t._id),{tags:a},r)}}),n>=0&&(0,j.jsx)(oe,{index:n})]})})}function ie(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.product.show}));return(0,C.useEffect)((function(){return function(){e(c.Jh.setShow("list"))}}),[e]),(0,j.jsxs)(j.Fragment,{children:["list"!==n&&(0,j.jsx)(I,{style:{cursor:"pointer"},onClick:function(){return e(c.Jh.setShow("list"))}}),"list"===n&&(0,j.jsx)(a.Z,{children:(0,j.jsx)(u.Z,{color:"primary",variant:"contained",onClick:function(){return e(c.Jh.setShow("add"))},children:"+ Add New"})}),(0,j.jsx)(d.Z,{children:"list"===n?(0,j.jsx)(ne,{}):(0,j.jsx)(ae,{id:"add"!==n&&n})})]})}var le=r(46849),se=r(69756);var ce=(0,b.Z)({form:"StoreTabForm"})((function(e){var n=e.form,r=e.handleSubmit,t=(0,s.T)(),o=(0,s.C)((function(e){return e.store.stores})),a=(0,s.C)((function(e){return e.product.product}));return(0,C.useEffect)((function(){if(a){var e={};a.currentStock.forEach((function(n){return e[n.store]=n}));var r=o.map((function(n){var r,t,o,a,i=n._id;return{name:n.name,store:i,stock:null===(r=e[i])||void 0===r?void 0:r.stock,hideOnList:null===(t=e[i])||void 0===t?void 0:t.hideOnList,isPublished:null===(o=e[i])||void 0===o?void 0:o.isPublished,hideOnSearch:null===(a=e[i])||void 0===a?void 0:a.hideOnSearch}}));t((0,S.m)(n,"stores",r))}}),[t,n,o,a]),(0,j.jsxs)("form",{onSubmit:r,children:[(0,j.jsx)(g.ZP,{fields:ue}),(0,j.jsx)("br",{}),(0,j.jsx)(u.Z,{color:"primary",variant:"contained",type:"submit",children:"Submit"})]})})),ue=[{name:"stores",label:"Stores",reduxFormComponent:"FieldArray",component:function(e){var n=e.fields,r=e.fieldsArray;return(0,j.jsx)(A.Z,{children:(0,j.jsx)(F.Z,{"aria-label":"customized table",sx:{minWidth:"100%",borderSpacing:"0 10px",borderBottomWidth:"0px",borderCollapse:"separate"},children:(0,j.jsxs)(W.Z,{container:!0,coloumns:4,loading:!1,length:null===n||void 0===n?void 0:n.length,message:"No stores available",children:[(0,j.jsx)(_.Z,{children:(0,j.jsxs)(O.Z,{children:[(0,j.jsx)(L.Yk,{children:"Store"}),(0,j.jsx)(L.Yk,{children:"Hide on List"}),(0,j.jsx)(L.Yk,{children:"Hide on Search"}),(0,j.jsx)(L.Yk,{children:"Available"}),(0,j.jsx)(L.Yk,{children:"Stock Amount"})]})}),(0,j.jsx)(E.Z,{children:n.map((function(e,t){return(0,j.jsxs)(L.AF,{children:[(0,j.jsx)(L.Yk,{children:n.get(t).name}),r.map((function(n,r){return(0,j.jsx)(L.Yk,{children:(0,j.jsx)(se.Z,(0,f.Z)((0,f.Z)({id:n.name},n),{},{name:e?"".concat(e,".").concat(n.name):n.name}))},r)}))]},t)}))})]})})})},fieldsArray:[{label:"Hide on List",name:"hideOnList",component:le.Z,cellProps:{md:12}},{label:"Hide on Search",name:"hideOnSearch",component:le.Z,cellProps:{md:12}},{label:"Available",name:"isPublished",component:le.Z,cellProps:{md:12}},{label:"",name:"stock",component:Z.Z,cellProps:{md:12}}]}],de=["_id","name"];function pe(){var e=(0,s.T)(),n=(0,s.C)((function(e){return e.product.product})),r=(0,s.C)((function(e){return e.formLoader.loading}));return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(d.Z,{children:[r&&(0,j.jsx)(h.Z,{}),(0,j.jsx)(ce,{onSubmit:function(r){console.log("Stores",r);var t=r.stores.map((function(e){e._id,e.name;var n=(0,p.Z)(e,de);return(0,f.Z)({},n)}));v.Z.updateProduct("".concat(null===n||void 0===n?void 0:n._id),{currentStock:t},e)}})]})})}var me=r(16871),fe=r(65240);function he(){var e=(0,me.UO)().id,n=(0,s.T)(),r=(0,s.C)((function(e){return e.product.tab}));return(0,C.useEffect)((function(){fe.Z.getStores(n),v.Z.getProductbyID("".concat(e),n)}),[e,n]),(0,C.useEffect)((function(){return function(){n(c.Jh.setTab(0)),n(c.Jh.setProduct(null))}}),[n]),(0,j.jsx)("div",{children:(0,j.jsxs)(t.Z,{maxWidth:"lg",children:[(0,j.jsx)(o.Z,{path:"/product-management",title:"Products"}),(0,j.jsx)(a.Z,{heading:"Update Product"}),(0,j.jsx)(i.Z,{value:r,onChange:function(e){return n(c.Jh.setTab(e))},tabs:[{label:"Edit",element:(0,j.jsx)(l.default,{})},{label:"Media",element:(0,j.jsx)(N,{})},{label:"Categories",element:(0,j.jsx)(ee,{})},{label:"Stores",element:(0,j.jsx)(pe,{})},{label:"Search Tags",element:(0,j.jsx)(ie,{})}]})]})})}},2318:function(e,n,r){var t=r(70885),o=r(15861),a=r(87757),i=r.n(a),l=r(33795),s=r(21768),c=r(22134),u=r(99954),d=r(46227),p="/product",m={getProductbyID:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,u,m,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(d.Ay.setLoading(!0)),l.Z.setJWT(),e.next=4,c.Z.asPromise(l.Z.get("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),u=a[0],m=a[1],u&&(f=u.data.data.product,null===r||void 0===r||r(s.Jh.setProduct(f))),null===r||void 0===r||r(d.Ay.setLoading(!1)),e.abrupt("return",[u,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),getProducts:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,u,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(s.Jh.setLoading(!0)),l.Z.setJWT(),e.next=4,c.Z.asPromise(l.Z.post("".concat(p,"/filter"),n));case 4:return o=e.sent,a=(0,t.Z)(o,2),u=a[0],d=a[1],u&&(m=u.data.data.products,null===r||void 0===r||r(s.Jh.setProducts(m))),null===r||void 0===r||r(s.Jh.setLoading(!1)),e.abrupt("return",[u,d]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),addProduct:function(){var e=(0,o.Z)(i().mark((function e(n,r,o){var a,u,m,f,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(d.Ay.setLoading(!0)),l.Z.setJWT(),e.next=4,c.Z.asPromise(l.Z.post("".concat(p),n));case 4:return a=e.sent,u=(0,t.Z)(a,2),m=u[0],f=u[1],m&&(h=m.data.data.product,null===r||void 0===r||r(s.Jh.addProduct(h)),null===o||void 0===o||o("/product-management")),null===r||void 0===r||r(d.Ay.setLoading(!1)),e.abrupt("return",[m,f]);case 11:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),updateProduct:function(){var e=(0,o.Z)(i().mark((function e(n,r,o){var a,m,f,h,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===o||void 0===o||o(d.Ay.setLoading(!0)),null===o||void 0===o||o(u.nT.setLoading(!0)),l.Z.setJWT(),e.next=5,c.Z.asPromise(l.Z.put("".concat(p,"/").concat(n),r));case 5:return a=e.sent,m=(0,t.Z)(a,2),f=m[0],h=m[1],f&&(v=f.data.data.updated_product,null===o||void 0===o||o(s.Jh.updateProduct(v)),null===o||void 0===o||o(s.Jh.setShow("list")),null===o||void 0===o||o(u.nT.closeModal())),null===o||void 0===o||o(d.Ay.setLoading(!1)),null===o||void 0===o||o(u.nT.setLoading(!1)),e.abrupt("return",[f,h]);case 13:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),deleteProduct:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(u.nT.setLoading(!0)),l.Z.setJWT(),e.next=4,c.Z.asPromise(l.Z.delete("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),d=a[0],m=a[1],d&&(null===r||void 0===r||r(u.nT.closeModal()),null===r||void 0===r||r(s.Jh.deleteProduct(n))),null===r||void 0===r||r(u.nT.setLoading(!1)),e.abrupt("return",[d,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()};n.Z=m},65240:function(e,n,r){var t=r(70885),o=r(15861),a=r(87757),i=r.n(a),l=r(46227),s=r(33795),c=r(2160),u=r(22134),d=r(99954),p="/store",m={getStorebyID:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,d,m,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(l.Ay.setLoading(!0)),s.Z.setJWT(),e.next=4,u.Z.asPromise(s.Z.get("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),d=a[0],m=a[1],d&&(f=d.data.data.store,null===r||void 0===r||r(c.Tt.setStore(f))),null===r||void 0===r||r(l.Ay.setLoading(!1)),e.abrupt("return",[d,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),getStores:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,l,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(c.Tt.setLoading(!0)),s.Z.setJWT(),e.next=4,u.Z.asPromise(s.Z.post("".concat(p,"/filter"),n));case 4:return o=e.sent,a=(0,t.Z)(o,2),l=a[0],d=a[1],l&&(m=l.data.data.stores,null===r||void 0===r||r(c.Tt.setStores(m))),null===r||void 0===r||r(c.Tt.setLoading(!1)),e.abrupt("return",[l,d]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),addStore:function(){var e=(0,o.Z)(i().mark((function e(n,r,o){var a,l,d,m,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(c.Tt.setLoading(!0)),s.Z.setJWT(),e.next=4,u.Z.asPromise(s.Z.post("".concat(p),n));case 4:return a=e.sent,l=(0,t.Z)(a,2),d=l[0],m=l[1],d&&(f=d.data.data.store,null===r||void 0===r||r(c.Tt.addStore(f)),null===o||void 0===o||o("/store-management")),null===r||void 0===r||r(c.Tt.setLoading(!1)),e.abrupt("return",[d,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),deleteStore:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,l,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(d.nT.setLoading(!0)),s.Z.setJWT(),e.next=4,u.Z.asPromise(s.Z.delete("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),l=a[0],m=a[1],l&&(null===r||void 0===r||r(d.nT.closeModal()),null===r||void 0===r||r(c.Tt.deleteStore(n))),null===r||void 0===r||r(d.nT.setLoading(!1)),e.abrupt("return",[l,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),updateStore:function(){var e=(0,o.Z)(i().mark((function e(n,r,o,a){var d,m,f,h,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===o||void 0===o||o(l.Ay.setLoading(!0)),s.Z.setJWT(),e.next=4,u.Z.asPromise(s.Z.put("".concat(p,"/").concat(n),r));case 4:return d=e.sent,m=(0,t.Z)(d,2),f=m[0],h=m[1],f&&(v=f.data.data,null===o||void 0===o||o(c.Tt.updateStore({id:n,store:v})),null===a||void 0===a||a("/store-management")),null===o||void 0===o||o(l.Ay.setLoading(!1)),e.abrupt("return",[f,h]);case 11:case"end":return e.stop()}}),e)})));return function(n,r,t,o){return e.apply(this,arguments)}}()};n.Z=m},96086:function(e,n,r){r.d(n,{Q:function(){return m}});var t=r(70885),o=r(15861),a=r(87757),i=r.n(a),l=r(46812),s=r(33795),c=r(22134),u=r(48013),d=r(99954),p="/subcategories",m={getSubCategorybyID:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,d,m,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(l.Ay.setLoading(!0)),s.Z.setJWT(),e.next=4,c.Z.asPromise(s.Z.get("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),d=a[0],m=a[1],d&&(f=d.data.data.SubCategory,null===r||void 0===r||r(u.tG.setSubCategory(f))),null===r||void 0===r||r(l.Ay.setLoading(!1)),e.abrupt("return",[d,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),getAllSubCategories:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,l,d,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(u.tG.setLoading(!0)),s.Z.setJWT(),e.next=4,c.Z.asPromise(s.Z.post("".concat(p,"/filter"),n));case 4:return o=e.sent,a=(0,t.Z)(o,2),l=a[0],d=a[1],l&&(m=l.data.data,null===r||void 0===r||r(u.tG.setSubCategories(m))),null===r||void 0===r||r(u.tG.setLoading(!1)),e.abrupt("return",[l,d]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),addSubCategory:function(){var e=(0,o.Z)(i().mark((function e(n,r,o){var a,d,m,f,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(l.Ay.setLoading(!0)),s.Z.setJWT(),e.next=4,c.Z.asPromise(s.Z.post("".concat(p),n));case 4:return a=e.sent,d=(0,t.Z)(a,2),m=d[0],f=d[1],m&&(h=m.data.data,null===r||void 0===r||r(u.tG.addSubCategory(h)),null===o||void 0===o||o("/subcategory-management")),null===r||void 0===r||r(l.Ay.setLoading(!1)),e.abrupt("return",[m,f]);case 11:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),deleteSubCategory:function(){var e=(0,o.Z)(i().mark((function e(n,r){var o,a,l,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===r||void 0===r||r(d.nT.setLoading(!0)),s.Z.setJWT(),e.next=4,c.Z.asPromise(s.Z.delete("".concat(p,"/").concat(n)));case 4:return o=e.sent,a=(0,t.Z)(o,2),l=a[0],m=a[1],l&&(null===r||void 0===r||r(d.nT.closeModal()),null===r||void 0===r||r(u.tG.filterSubCategory(n))),null===r||void 0===r||r(d.nT.setLoading(!1)),e.abrupt("return",[l,m]);case 11:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),updateSubCategory:function(){var e=(0,o.Z)(i().mark((function e(n,r,o,a){var d,m,f,h,v;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===o||void 0===o||o(l.Ay.setLoading(!0)),s.Z.setJWT(),e.next=4,c.Z.asPromise(s.Z.put("".concat(p,"/").concat(n),r));case 4:return d=e.sent,m=(0,t.Z)(d,2),f=m[0],h=m[1],f&&(v=f.data.data.SubCategory,null===o||void 0===o||o(u.tG.updateSubCategory({id:n,SubCategory:v})),null===a||void 0===a||a("/subcategory-management")),null===o||void 0===o||o(l.Ay.setLoading(!1)),e.abrupt("return",[f,h]);case 11:case"end":return e.stop()}}),e)})));return function(n,r,t,o){return e.apply(this,arguments)}}()}}}]);
//# sourceMappingURL=3248.5d3e8e0d.chunk.js.map