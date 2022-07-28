import http from "./http.service";
import { AppDispatch } from "redux/store";
import Promisable from "./promisable.service";
import { formLoaderActions } from "redux/slices/formLoader";
import { webTripActions } from "redux/slices/webTrip/webTripSlice";
import { NavigateFunction } from "react-router-dom";
import { homeActions } from "redux/slices/Home/homeSlice";

const webTripService = {
  GetAllWebTrips: async (data: any, dispatch?: AppDispatch) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`GetAllPublicWebTrips`, data)
    );

    if (success) {
      const { Trips } = success.data;

      dispatch?.(webTripActions.setGetAllWebTrips(Trips));
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
  GetPublicWebTrip: async (data: any, dispatch?: AppDispatch) => {
    let data2 = { tripGuid: data };
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`GetPublicWebTrip`, data2)
    );

    if (success) {
      const Trips = success.data;

      dispatch?.(webTripActions.SetPublicWebTrip(Trips));
      dispatch?.(homeActions.setTab(0));
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
};

export default webTripService;
