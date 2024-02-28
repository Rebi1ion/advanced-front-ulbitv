import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { type DeepPartial } from "@reduxjs/toolkit";
import { getValidateProfileErorrs } from "./getValidateProfileErorrs";
import { ValidateProfileErrors } from "../../types/profileSchema";

const state: DeepPartial<StateSchema> = {
  profile: {
    isLoading: false,
    readonly: true,
    validateProfileError: [
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ],
  },
};

describe("getValidateProfileErorrs test", () => {
  test("should return validate errors", () => {
    expect(getValidateProfileErorrs(state as StateSchema)).toEqual([
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });

  test("should work with empty state", () => {
    const emptyState: DeepPartial<StateSchema> = {};
    expect(getValidateProfileErorrs(emptyState as StateSchema)).toEqual(
      undefined
    );
  });
});
