import { type DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "./loginSlice";
import { type LoginSchema } from "../types/loginSchema";

describe("loginSlice test", () => {
  test("set username", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("qwerty"))
    ).toEqual({
      username: "qwerty",
    });
  });

  test("set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "",
    };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("qwerty"))
    ).toEqual({
      password: "qwerty",
    });
  });
});
