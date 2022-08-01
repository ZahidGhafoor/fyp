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
    console.log("data", data.ownerId);
    let data2 = data.ownerId.toString();
    console.log("data2", data2);

    http.setJWT();

    // const query = `ownerId=${data.ownerId.toString()}&ownerType=${
    //   data.ownerType
    // }`;

    const [success, error]: any = await Promisable.asPromise(
      // http.post(`GetAllPublicWebTrips`)
      // http.post(`GetAllPublicWebTrips?${query}`)
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
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
  GetAllPublicWebGroups: async (data: any, dispatch?: AppDispatch) => {
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`GetAllPublicWebGroups`, data)
    );

    if (success) {
      const { Groups } = success.data;

      dispatch?.(webTripActions.setAllPulicWebGroups(Groups));
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
  GetPublicWebGroup: async (data: any, dispatch?: AppDispatch) => {
    let data2 = { GroupGuid: data, shareType: 32 };
    dispatch?.(formLoaderActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`GetPublicWebGroup`, data2)
    );

    if (success) {
      const Group = success.data;

      dispatch?.(webTripActions.SetPublicWebGroup(Group));
    }

    dispatch?.(formLoaderActions.setLoading(false));

    return [success, error];
  },
};

export default webTripService;
