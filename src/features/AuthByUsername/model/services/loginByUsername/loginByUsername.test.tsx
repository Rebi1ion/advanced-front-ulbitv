import { loginByUsername } from "./loginByUsername";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/helpers/tests/TestAsyncThunk/TestAsyncThunk";

describe("loginByUsername test", () => {
  test("fulfilled response", async () => {
    const userValue = { username: "admin", id: 1 };
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue(Promise.resolve({ data: userValue }));
    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    expect(thunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.payload).toEqual(userValue);
  });

  test("rejected response", async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockResolvedValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      username: "admin",
      password: "123",
    });

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("rejected");
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toBe("error");
  });

  //   let dispatch: Dispatch;
  //   let getState: () => StateSchema;
  //   beforeEach(() => {
  //     dispatch = jest.fn();
  //     getState = jest.fn();
  //   });
  //   test("fulfilled response", async () => {
  //     const userValue = { username: "admin", id: 1 };
  //     thunk.api.post.mockResolvedValue(Promise.resolve({ data: userValue }));
  //     const action = loginByUsername({ username: "admin", password: "123" });
  //     const result = await action(dispatch, getState, undefined);
  //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //     // eslint-disable-next-line @typescript-eslint/unbound-method
  //     expect(thunk.api.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("fulfilled");
  //     expect(dispatch).toHaveBeenCalledTimes(3);
  //     expect(result.payload).toEqual(userValue);
  //   });
  //   test("rejected response", async () => {
  //     thunk.api.post.mockResolvedValue(Promise.resolve({ status: 403 }));
  //     const action = loginByUsername({ username: "admin", password: "123" });
  //     const result = await action(dispatch, getState, undefined);
  //     // eslint-disable-next-line @typescript-eslint/unbound-method
  //     expect(thunk.api.post).toHaveBeenCalled();
  //     expect(result.meta.requestStatus).toBe("rejected");
  //     expect(dispatch).toHaveBeenCalledTimes(2);
  //     expect(result.payload).toBe("error");
  //   });
});
