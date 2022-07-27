import http from "./http.service";
import { AppDispatch } from "redux/store";
import Promisable from "./promisable.service";
// import { formLoaderActions } from "redux/slices/formLoader";
import { webTripActions } from "redux/slices/webTrip/webTripSlice";

const webTripService = {
  // getCitybyID: async (id: any, dispatch?: AppDispatch) => {
  //   dispatch?.(formLoaderActions.setLoading(true));

  //   http.setJWT();

  //   const [success, error]: any = await Promisable.asPromise(
  //     http.get(`${url}/${id}`)
  //   );

  //   if (success) {
  //     const { city } = success.data.data;
  //     dispatch?.(cityActions.setCity(city));
  //   }

  //   dispatch?.(formLoaderActions.setLoading(false));

  //   return [success, error];
  // },

  GetAllWebTrips: async (dispatch?: AppDispatch) => {
    dispatch?.(webTripActions.setLoading(true));

    http.setJWT();

    const [success, error]: any = await Promisable.asPromise(
      http.post(`GetAllWebTrips`)
    );

    if (success) {
      const { Trips } = success.data.data;
      dispatch?.(webTripActions.setGetAllWebTrips(Trips));
    }

    dispatch?.(webTripActions.setLoading(false));

    return [success, error];
  },
};

export default webTripService;
