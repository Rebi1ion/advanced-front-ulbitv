import { Currency } from "entities/SelectCurrency";
import { getProfileData } from "./getProfileData";
import { Countries } from "entities/SelectCountry";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";

const data = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

const state: DeepPartial<StateSchema> = {
  profile: { isLoading: false, readonly: true, data },
};

describe("getProfileData test", () => {
  test("should return data", () => {
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getProfileData(emptyState as StateSchema)).toEqual(undefined);
  });
});
