import type { Countries, Currency } from "shared/const/common";

export interface Profile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Countries;
  city: string;
  username: string;
  avatar: string;
}

export interface ProfileSchema {
  isLoading: boolean;
  data?: Profile;
  error?: string;
  readonly: boolean;
}
