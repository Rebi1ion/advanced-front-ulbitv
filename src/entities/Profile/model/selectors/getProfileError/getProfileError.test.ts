import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileError } from "./getProfileError";

const state: DeepPartial<StateSchema> = {
  profile: { isLoading: false, readonly: true, error: "error" },
};

describe("getProfileError test", () => {
  test("should return error", () => {
    expect(getProfileError(state as StateSchema)).toEqual("error");
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getProfileError(emptyState as StateSchema)).toEqual("");
  });
});
