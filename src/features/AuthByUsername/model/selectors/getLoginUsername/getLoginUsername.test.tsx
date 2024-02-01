import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername test", () => {
  test("return username", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: false,
        password: "",
        username: "qwerty",
      },
    };

    expect(getLoginUsername(state as StateSchema)).toBe("qwerty");
  });
  test("empty state", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toBe("");
  });
});
