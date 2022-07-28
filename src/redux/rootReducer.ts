import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./slices/auth";
import modalReducer from "./slices/modal";
import loaderReducer from "./slices/loader";
import HomeReducer from "./slices/Home/homeSlice";
import webTripReducer from "./slices/webTrip/webTripSlice";
// import productReducer from "./slices/product/productSlice";
// import categoryReducer from "./slices/category/categorySlice";
// import zipcodeReducer from "./slices/zipcode/zipcodeSlice";
// import storeReducer from "./slices/store/storeSlice";
// import faqReducer from "./slices/faq/faqSlice";
// import subCategoryReducer from "./slices/subcategory";
// import bannerSlice from "./slices/banner/bannerSlice";
// import campaignReducer from "./slices/campaign/campaignSlice";
import formLoaderReducer from "./slices/formLoader";
// import cityReducer from "./slices/city/citySlice";
// import roleReducer from "./slices/role/roleSlice";
// import orderReducer from "./slices/order/orderSlice";

const appReducer = combineReducers({
  form: formReducer,

  auth: authReducer,
  modal: modalReducer,
  loader: loaderReducer,
  home: HomeReducer,
  webTrip: webTripReducer,
  // city: cityReducer,
  // product: productReducer,
  // store: storeReducer,
  // zipcode: zipcodeReducer,
  // category: categoryReducer,
  // faq: faqReducer,
  // banner: bannerSlice,
  // campaign: campaignReducer,
  // role: roleReducer,
  formLoader: formLoaderReducer,
  // order: orderReducer
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "auth/logout") state = {};
  return appReducer(state, action);
};

export default rootReducer;
