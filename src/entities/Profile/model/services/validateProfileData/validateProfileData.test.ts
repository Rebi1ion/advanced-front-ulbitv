import { Currency } from "entities/SelectCurrency";
import { ValidateProfileErrors, type Profile } from "../../types/profileSchema";
import { Countries } from "entities/SelectCountry";
import { validateProfileData } from "./validateProfileData";

const data: Profile = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

describe("validateProfileData test", () => {
  test("success", () => {
    expect(validateProfileData(data)).toEqual([]);
  });

  test("should return incorrect user data", () => {
    expect(
      validateProfileData({
        ...data,
        first: "",
      })
    ).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test("should return incorrect age", () => {
    expect(
      validateProfileData({
        ...data,
        age: 228,
      })
    ).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test("should return incorrect city", () => {
    expect(
      validateProfileData({
        ...data,
        city: undefined,
      })
    ).toEqual([ValidateProfileErrors.INCORRECT_CITY]);
  });

  test("should return all errors", () => {
    expect(validateProfileData({})).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_CITY,
    ]);
  });
});
