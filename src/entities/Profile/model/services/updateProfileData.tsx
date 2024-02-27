import { createAsyncThunk } from "@reduxjs/toolkit";
import { ValidateProfileErrors, type Profile } from "../types/profileSchema";
import { type ThunkApiConfig } from "app/providers/StoreProvider";
import { getProfileForm } from "../selectors/getProfileForm";
import { validateProfileData } from "./validateProfileData";

export const updateProfileData = createAsyncThunk<
Profile,
undefined,
ThunkApiConfig<ValidateProfileErrors[]>
>("profile/updateProfileData", async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;
  try {
    const formData = getProfileForm(getState());
    const validateErrors = validateProfileData(formData);

    if (validateErrors.length > 0) {
      return rejectWithValue(validateErrors);
    }

    const response = await extra.api.put<Profile>("/profile", formData);
    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
