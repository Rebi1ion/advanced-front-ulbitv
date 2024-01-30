import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type User, type UserSchema } from "../types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initUserData: (state) => {
      const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (userData !== null) state.authData = JSON.parse(userData);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
