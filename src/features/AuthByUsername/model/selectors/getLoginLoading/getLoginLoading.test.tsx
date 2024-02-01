import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginLoading } from "./getLoginLoading";

describe("getLoginLoading test", () => {
  test("return loading true", () => {
    const state: DeepPartial<StateSchema> = {
      login: { isLoading: true, username: "", password: "" },
    };

    expect(getLoginLoading(state as StateSchema)).toBe(true);
  });

  test("return loading false", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginLoading(state as StateSchema)).toBe(false);
  });
});
