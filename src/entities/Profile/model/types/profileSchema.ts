import type { Countries } from "entities/SelectCountry/model/types/country";
import type { Currency } from "entities/SelectCurrency/model/types/currency";

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
}
