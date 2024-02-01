import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword test", () => {
  test("return password", () => {
    const state: DeepPartial<StateSchema> = {
      login: { isLoading: true, username: "", password: "qwerty" },
    };

    expect(getLoginPassword(state as StateSchema)).toBe("qwerty");
  });

  test("empty object", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toBe("");
  });
});
