import { NavigateFunction } from "react-router-dom";
import http from "./http.service";
import { AppDispatch } from "redux/store";
import Promisable from "./promisable.service";
import { modalActions } from "redux/slices/modal";
import { formLoaderActions } from "redux/slices/formLoader";
import { cityActions } from "redux/slices/city/citySlice";

const url = `/city`;

const CityService = {
  getCitybyID: async (id: any, dispatch?: AppDispatch) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.get(`${url}/${id}`)
    );

    if (success) {
      const { city } = success.data.data;
      dispatch?.(cityActions.setCity(city));
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
  getCities: async (dispatch?: AppDispatch) => {
    dispatch?.(cityActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.get(`${url}`)
    );

    if (success) {
      const { cities } = success.data.data;
      dispatch?.(cityActions.setCities(cities));
    }

    dispatch?.(cityActions.setLoading(false));

    return [success, error];
  },
  createCity: async (
    data: any,
    dispatch?: AppDispatch,
    navigate?: NavigateFunction
  ) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`${url}`, data)
    );

    if (success) {
      navigate?.("/city-management");
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
  deleteCity: async (id: any, dispatch?: AppDispatch) => {
    dispatch?.(modalActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.delete(`${url}/${id}`)
    );

    if (success) {
      dispatch?.(modalActions.closeModal());
      dispatch?.(cityActions.filterCity(id));
    }

    dispatch?.(modalActions.setLoading(false));

    return [success, error];
  },
  updateCity: async (
    id: string,
    data: any,
    dispatch?: AppDispatch,
    navigate?: NavigateFunction
  ) => {
    dispatch?.(formLoaderActions.setLoading(true));
    http.setJWT();
    const [success, error]: any = await Promisable.asPromise(
      http.put(`${url}/${id}`, data)
    );
    if (success) {
      const city = success.data.data;
      dispatch?.(cityActions.updateCity({ id, city }));
      navigate?.("/city-management");
    }
    dispatch?.(formLoaderActions.setLoading(false));
    return [success, error];
  },
};

export default CityService;
