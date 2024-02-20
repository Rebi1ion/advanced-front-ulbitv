import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Profile, ProfileSchema } from "../types/profileSchema";
import { fetchProfileData } from "../services/fetchProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchProfileData.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });

    build.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    build.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
