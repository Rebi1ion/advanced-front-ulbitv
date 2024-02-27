import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Profile, ProfileSchema } from "../types/profileSchema";
import { fetchProfileData } from "../services/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
  validateProfileError: undefined,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateProfileError = undefined;
    },
  },
  extraReducers: (build) => {
    // fetch profile data
    build.addCase(fetchProfileData.pending, (state) => {
      state.error = "";
      state.isLoading = true;
    });

    build.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      }
    );
    build.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    // update profile data
    build.addCase(updateProfileData.pending, (state) => {
      state.validateProfileError = undefined;
      state.isLoading = true;
    });

    build.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      }
    );
    build.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateProfileError = action.payload;
    });
  },
});

export const { reducer: profileReducer } = profileSlice;
export const { actions: profileActions } = profileSlice;
