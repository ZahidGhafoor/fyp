
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeState } from ".";

const initialState: HomeState = {
  
  tab: 0,
 
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
   
    setTab: (state, action) => {
      state.tab = action.payload;
    },
  },
});

const HomeReducer = homeSlice.reducer;

export const homeActions = homeSlice.actions;
export default HomeReducer;
