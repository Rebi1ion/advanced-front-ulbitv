import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginError } from "./getLoginError";
import { type DeepPartial } from "@reduxjs/toolkit";

describe("getLoginError test", () => {
  test("return error", () => {
    const state: DeepPartial<StateSchema> = {
      login: { error: "error", username: "", password: "", isLoading: false },
    };
    expect(getLoginError(state as StateSchema)).toBe("error");
  });

  test("undefined error state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toBe(undefined);
  });
});
