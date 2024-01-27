import { type DeepPartial } from "@reduxjs/toolkit";
import { counterReducer, counterActions } from "./counterSlice";
import { type CounterSchema } from "../types/counterSchema";

describe("counterSlice", () => {
  test("increment counter test", () => {
    const state: DeepPartial<CounterSchema> = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.increment())
    ).toEqual({ value: 11 });
  });

  test("decrement counter test", () => {
    const state: DeepPartial<CounterSchema> = { value: 10 };
    expect(
      counterReducer(state as CounterSchema, counterActions.decrement())
    ).toEqual({ value: 9 });
  });

  test("undefined state counter test", () => {
    expect(
      counterReducer(undefined, counterActions.decrement())
    ).toEqual({ value: -1 });
  });
});
