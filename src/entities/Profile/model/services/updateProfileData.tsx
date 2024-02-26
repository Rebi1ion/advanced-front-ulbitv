import { createAsyncThunk } from "@reduxjs/toolkit";
import { type Profile } from "../types/profileSchema";
import { type ThunkApiConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../selectors/getProfileForm";

export const updateProfileData = createAsyncThunk<
Profile,
undefined,
ThunkApiConfig<string>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  try {
    const formData = getProfileForm(getState());
    const response = await extra.api.put<Profile>("/profile", formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("update profile data error");
  }
});
