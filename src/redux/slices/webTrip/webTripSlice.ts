import { webTripState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: webTripState = {
  GetAllWebTrips: null,
  GetAllPulicWebGroups: null,
  GetPublicWebTrip: {},
  GetPublicWebGroup: {},
  loading: true,
  city: null,
};

export const webTripSlice = createSlice({
  name: "webTrip",
  initialState,
  reducers: {
    setGetAllWebTrips: (state, action) => {
      const GetAllWebTrips = action.payload;
      state.GetAllWebTrips = GetAllWebTrips;
    },
    setAllPulicWebGroups: (state, action) => {
      const GetAllPulicWebGroups = action.payload;
      state.GetAllPulicWebGroups = GetAllPulicWebGroups;
    },
    SetPublicWebTrip: (state, action) => {
      const GetPublicWebTrip = action.payload;
      state.GetPublicWebTrip = GetPublicWebTrip;
    },
    SetPublicWebGroup: (state, action) => {
      const GetPublicWebGroup = action.payload;
      state.GetPublicWebGroup = GetPublicWebGroup;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

const webTripReducer = webTripSlice.reducer;

export const webTripActions = webTripSlice.actions;
export default webTripReducer;
