import { modalActions } from "redux/slices/modal";
import { formLoaderActions } from "redux/slices/formLoader";
import { NavigateFunction } from "react-router-dom";
import http from "./http.service";
import { AppDispatch } from "redux/store";
import Promisable from "./promisable.service";
import { authActions } from "redux/slices/auth";

const url = "/auth";

const AuthService = {
  login: async (data: any, dispatch?: AppDispatch) => {
    dispatch?.(authActions.setLoading(true));

    const [success, error]: any = await Promisable.asPromise(
      http.post(`${url}/login`, data)
    );

    if (success) {
      const { token } = success.data.data;

      dispatch?.(authActions.setUser(data));
      localStorage.setItem("token", `Bearer ${token}`);
    }

    dispatch?.(authActions.setLoading(false));
    return [success, error];
  },

  logout: (dispatch?: AppDispatch) => {
    localStorage.removeItem("token");

    dispatch?.(authActions.logout());
    dispatch?.(authActions.setUser(null));
  },

  createUser: async (
    data: any,
    dispatch?: AppDispatch,
    navigate?: NavigateFunction
  ) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();
    const [success, error]: any = await Promisable.asPromise(
      http.post(`${url}/register`, data)
    );
    if (success) {
      navigate?.("/account-management");
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },

  updateUser: async (
    id: string,
    data: any,
    dispatch?: AppDispatch,
    navigate?: NavigateFunction
  ) => {
    dispatch?.(formLoaderActions.setLoading(true));
    http.setJWT();
    const [success, error]: any = await Promisable.asPromise(
      http.put(`user/${id}`, data)
    );
    if (success) {
      const user = success.data.data;
      dispatch?.(authActions.updateUser({ id, user }));
      navigate?.("/account-management");
    }
    dispatch?.(formLoaderActions.setLoading(false));
    return [success, error];
  },
};
export default AuthService;
