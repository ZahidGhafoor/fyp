import { ZipCodeState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectOption } from "components/atoms/Select";

const initialState: ZipCodeState = {
  cities: [],
  loading: true,
  city: null,
  cityOptions: [],
};

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    clear: (state) => {
      state.cityOptions = [];
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCities: (state, action) => {
      const cities = action.payload;
      let options: SelectOption[] = [];
      cities.forEach(({ _id, name }: any) =>
        options.push({ value: _id, label: name })
      );
      state.cities = cities;
      state.cityOptions = options;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    filterCity: (state, action) => {
      const id = action.payload;
      state.cities = state.cities.filter(({ _id }) => _id !== id);
    },
    updateCity: (state, action) => {
      const { id, city } = action.payload;
      state.cities.every(({ _id }, i) => {
        if (id === _id) {
          state.cities[i] = city;
          return false;
        }
        return true;
      });
    },
  },
});

const cityReducer = citySlice.reducer;

export const cityActions = citySlice.actions;
export default cityReducer;
