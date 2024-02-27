import type { Countries } from "entities/SelectCountry/model/types/country";
import type { Currency } from "entities/SelectCurrency/model/types/currency";

export enum ValidateProfileErrors {
  NO_DATA = "NO_DATA",
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_CITY = "INCORRECT_CITY",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Countries;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  isLoading: boolean;
  data?: Profile;
  form?: Profile;
  error?: string;
  readonly: boolean;
  validateProfileError?: ValidateProfileErrors[];
}
