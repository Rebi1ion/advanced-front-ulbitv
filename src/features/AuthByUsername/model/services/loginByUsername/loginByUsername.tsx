import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  type ThunkApiConfig
} from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { type User } from "entities/User/model/types/userSchema";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkApiConfig<string>
>("login/loginByUsername", async (loginData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;
  try {
    //  const response = await axios.post<User>(
    //    "http://localhost:8000/login",
    //    loginData
    //  );

    const response = await extra.api.post<User>("/login", loginData);

    if (response.data === undefined) throw Error();

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error");
  }
});
