import { TestAsyncThunk } from "shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk";
import { fetchProfileData } from "./fetchProfileData";
import { type Profile } from "../../types/profileSchema";
import { Currency } from "entities/SelectCurrency";
import { Countries } from "entities/SelectCountry";

const data: Profile = {
  first: "Qwerty",
  lastname: "Asdfgh",
  age: 19,
  currency: Currency.RUB,
  country: Countries.Russia,
  city: "Moscow",
  username: "admin",
};

describe("fetchProfileData test", () => {
  test("fulfilled response", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk(undefined);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("rejected response", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
