import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { getProfileReadonly } from "./getProfileReadonly";

const state: DeepPartial<StateSchema> = {
  profile: { isLoading: false, readonly: false },
};

describe("getProfileReadonly test", () => {
  test("should return readonly", () => {
    expect(getProfileReadonly(state as StateSchema)).toEqual(false);
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(emptyState as StateSchema)).toEqual(true);
  });
});
