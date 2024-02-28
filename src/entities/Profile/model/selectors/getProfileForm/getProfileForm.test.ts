import { Currency } from "entities/SelectCurrency";
import { Countries } from "entities/SelectCountry";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileForm } from "./getProfileForm";

const form = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

const state: DeepPartial<StateSchema> = {
  profile: { isLoading: false, readonly: true, form },
};

describe("getProfileForm test", () => {
  test("should return form", () => {
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getProfileForm(emptyState as StateSchema)).toEqual(undefined);
  });
});
