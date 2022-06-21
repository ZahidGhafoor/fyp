import { AuthState } from ".";
import LocalStorage from "utils/localstorage.util";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const user = LocalStorage.getItem("user");
const initialState: AuthState = {
  user,
  users: [],
  loading: false,
  refreshLoader: false,
  filter: {},
  singleUser: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {},
    setUser: (state, action) => {
      state.user = action.payload;
      LocalStorage.setItem("user", state.user);
    },

    setSingleUser: (state, action) => {
      state.singleUser = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
      state.refreshLoader = false;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.refreshLoader = true;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.users = state.users.filter((user) => {
        return user._id !== id;
      });
    },
    updateUser: (state, action) => {
      const { id, user } = action.payload;
      state.users.every(({ _id }, i) => {
        if (id === _id) {
          state.users[i] = user;
          return false;
        }
        return true;
      });
    },
  },
});

const authReducer = authSlice.reducer;

export const authActions = authSlice.actions;
export default authReducer;
