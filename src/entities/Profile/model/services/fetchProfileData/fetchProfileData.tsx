import { createAsyncThunk } from "@reduxjs/toolkit";
import { type ThunkApiConfig } from "app/providers/StoreProvider";
import { type Profile } from "../../types/profileSchema";

export const fetchProfileData = createAsyncThunk<
Profile,
undefined,
ThunkApiConfig<string>
>("profile/fetchProfileData", async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Profile>("/profile");

    if (response.data === undefined) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
