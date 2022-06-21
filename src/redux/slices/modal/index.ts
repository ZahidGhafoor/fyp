export { default, modalActions, modalSlice } from "./modalSlice";

export enum MODAL {
  DELETE_CITY = "DELETE_CITY",
  DELETE_ZIPCODE = "DELETE_ZIPCODE",
  DELETE_BANNER = "DELETE_BANNER",
  DELETE_FAQ = "DELETE_FAQ",
  CONFIRMATION_FORM = "CONFIRMATION_FORM",
  DELETE_CATEGORY = "DELETE_CATEGORY",
  DELETE_SUBCATEGORY = "DELETE_SUBCATEGORY",
  DELETE_CAMPAIGN = "DELETE_CAMPAIGN",
  DELETE_PRODUCT_TAG = "DELETE_PRODUCT_TAG",
  DELETE_PRODUCT_MEDIA = "DELETE_PRODUCT_MEDIA",
  DELETE_PRODUCT_CATEGORY = "DELETE_PRODUCT_CATEGORY",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  DELETE_ROLE = "DELETE_ROLE",
  DELETE_STORE = "DELETE_STORE",
  DELETE_USER = "DELETE_USER",
}

export type ModalType = "" | keyof typeof MODAL;

export interface OpenModalState {
  data: any;
  width: any;
  type: ModalType;
  loading?: boolean;
}

export type ModalState = OpenModalState & {
  open: boolean;
};
