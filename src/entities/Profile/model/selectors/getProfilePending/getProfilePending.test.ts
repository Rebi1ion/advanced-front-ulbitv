import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfilePending } from "./getProfilePending";

const state: DeepPartial<StateSchema> = {
  profile: { isLoading: true, readonly: true },
};

describe("getProfilePending test", () => {
  test("should return isLoading", () => {
    expect(getProfilePending(state as StateSchema)).toEqual(true);
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getProfilePending(emptyState as StateSchema)).toEqual(false);
  });
});
