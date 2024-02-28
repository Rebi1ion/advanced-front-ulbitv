import { type DeepPartial } from "@reduxjs/toolkit";
import { profileActions, profileReducer } from "./profileSlices";
import {
  ValidateProfileErrors,
  type ProfileSchema,
  type Profile
} from "../types/profileSchema";
import { Currency } from "entities/SelectCurrency";
import { Countries } from "entities/SelectCountry";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data: Profile = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

describe("loginSlice test", () => {
  test("set readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(false))
    ).toEqual({ readonly: false });
  });

  test("cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateProfileError: [ValidateProfileErrors.INCORRECT_AGE],
      form: { ...data, first: "123" },
      data,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      validateProfileError: undefined,
      form: data,
      data,
    });
  });

  test("update profile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: data,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ first: "123" })
      )
    ).toEqual({
      form: { ...data, first: "123" },
    });
  });

  test("update profile data pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateProfileError: [ValidateProfileErrors.INCORRECT_AGE],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({
      isLoading: true,
      validateProfileError: undefined,
    });
  });

  test("update profile data fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, "", undefined)
      )
    ).toEqual({
      isLoading: false,
      validateProfileError: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
