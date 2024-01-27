import renderWithRouter from "shared/lib/helpers/tests/renderWithRouter";
import { Counter } from "./Counter";
import { type DeepPartial } from "@reduxjs/toolkit";
import { type StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("render test", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    renderWithRouter(<Counter />, { initialState: state as StateSchema });
    expect(screen.getByTestId("counter-title")).toHaveTextContent("10");
  });

  test("increment button test", async () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    renderWithRouter(<Counter />, { initialState: state as StateSchema });

    const button = screen.getByTestId("increment-btn");
    await userEvent.click(button);

    expect(screen.getByTestId("counter-title")).toHaveTextContent("11");
  });

  test("decrement button test", async () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } };
    renderWithRouter(<Counter />, { initialState: state as StateSchema });

    const button = screen.getByTestId("decrement-btn");
    await userEvent.click(button);

    expect(screen.getByTestId("counter-title")).toHaveTextContent("9");
  });
});
