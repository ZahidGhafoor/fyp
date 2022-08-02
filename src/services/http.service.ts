import axios from "axios";
import AuthService from "./auth.service";
import { log } from "../utils/logger.util";
import ToasterService from "../utils/toaster.util";
import { environment } from "environments";

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWdtZW50MSI6IjEwMDAwMDAwMDE2MCIsInNlZ21lbnQyIjoiODc5YmExNmUtNzg1Yi00ZGM3LWEzZDEtYjRiMjk5MmI0NjA4IiwibmJmIjoxNjUwNDk3NDE0LCJleHAiOjE2NTA1MDEwMTQsImlhdCI6MTY1MDQ5NzQxNH0.wMbOdaEN6cysqxrXEqYez-wKAtK-txDkPF1Qlg87NQI";

axios.defaults.baseURL = environment.API_END_URL;

axios.interceptors.request.use(
  function (config: any) {
    log("http request", config.url, config.data);
    return { ...config, cancelToken: source.token };
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res: any) => {
    log("http response", res.config.url, res.data);
    ToasterService.showSuccess(res.data.message);
    return res;
  },
  (err: any) => {
    log("http err", err);

    if (err.message === "Network Error") {
      ToasterService.showError(err.message);
      throw err;
    }

    const { code, message } = err.response.data;
    ToasterService.showError(message);

    if (
      code === 401 &&
      (message === "Unauthorized" ||
        message === "Password has been changed, Login again" ||
        message === "Login session has been expired, Login again")
    ) {
      AuthService.logout();
      source.cancel(message);

      setTimeout(() => {
        source = CancelToken.source();

        if (window.location.pathname !== "/") window.location.assign("/");
      }, 300);
    }

    throw err;
  }
);

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
  setJWT: () => {
    axios.defaults.headers.common["Authorization"] = token;
    // localStorage.getItem("token") || "";
  },
  setMultiPart: () => {
    axios.defaults.headers.common["Content-Type"] = "multipart/form-data";
  },
};

export default http;
