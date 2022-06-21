export { default, authActions, authSlice } from "./authSlice";

export interface AuthState {
  user: any;
  loading: boolean;
  refreshLoader: boolean;
  filter: {};
  users: any[];
  singleUser: any;
}
