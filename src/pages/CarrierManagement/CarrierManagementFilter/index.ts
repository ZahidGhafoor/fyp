import  CheckboxRedux  from 'components/molecules/CheckboxRedux';
import  InputRedux from 'components/molecules/InputRedux';
import { ReduxFormField } from 'components/molecules/ReduxFormFields';
import SelectRedux from 'components/molecules/SelectRedux';
import  DatePickerRedux from 'components/molecules/DatePickerRedux';




export { default } from "./CarrierManagementFilter";

export const fields: ReduxFormField[] = [
  
  {
    name: "role",
    label: "Role",
    component: SelectRedux,
    SelectProps: {
      options: [
        { value: "admin", label: "Admin" },
        { value: "store_Admin", label: "Store Admin" },
        { value: "store_Order_Shopper", label: "Store Order Shopper" },

      ],
    },
    cellProps: { md: 4 },
  },

  {
    name: "fname",
    label: "First Name",
    component: InputRedux,
    cellProps: { md: 4 },
  },

  {
    name: "lname",
    label: "Last Name",
    component: InputRedux,
    cellProps: { md: 4 },
  },

  {
    name: "email",
    label: "Email",
    component: InputRedux,
    cellProps: { md: 4 },
  },

  {
    name: "phone",
    label: "Phone",
    component: InputRedux,
    cellProps: { md: 4 },
  },

  {
    name: "email_com",
    label: "Allow Email Communication",
    component: SelectRedux,
    SelectProps: {
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },

        

      ],
    },
    cellProps: { md: 4 },
  },

  {
    name: "sms_com",
    label: "Allow Sms Communication",
    component: SelectRedux,
    SelectProps: {
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },

        

      ],
    },
    cellProps: { md: 4 },
  },

  {
    label: "Registration Date Start",
    name: "start_date",
    component: DatePickerRedux,
    cellProps: { md: 4 },
  },


  {
    label: "Registration Date End",
    name: "end_date",
    component: DatePickerRedux,
    cellProps: { md: 4 },
  },
  {
    label: "Page Size",
    name: "page_size",
    component: InputRedux,
    cellProps: { md: 4 },
  },

  {
    label: "Referral User",
    name: "referral",
    component: CheckboxRedux,
    cellProps: { md: 12 },
  },
  {
    label: "Hava No Order",
    name: "order",
    component: CheckboxRedux,
    cellProps: { md: 12 },
  },


 
 
  
];
