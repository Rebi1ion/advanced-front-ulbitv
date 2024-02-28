import { TestAsyncThunk } from "shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk";
import { ValidateProfileErrors, type Profile } from "../../types/profileSchema";
import { Currency } from "entities/SelectCurrency";
import { Countries } from "entities/SelectCountry";
import { updateProfileData } from "./updateProfileData";

const data: Profile = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

describe("updateProfileData test", () => {
  test("fulfilled response", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        isLoading: false,
        readonly: true,
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("rejected response", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        isLoading: false,
        readonly: true,
        form: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });
});
