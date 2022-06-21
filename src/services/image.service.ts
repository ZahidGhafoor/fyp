import { formLoaderActions } from "redux/slices/formLoader";
import { modalActions } from "redux/slices/modal";
import { AppDispatch } from "redux/store";
import http from "./http.service";
import Promisable from "./promisable.service";

const url = "/upload";

const ImageService = {
  upload: async (data: any, dispatch?: AppDispatch) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();
    http.setMultiPart();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`${url}`, data)
    );

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
};

export default ImageService;
