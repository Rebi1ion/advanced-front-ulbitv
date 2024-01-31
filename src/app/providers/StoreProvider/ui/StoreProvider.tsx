import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { type StateSchema } from "../config/StateSchema";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = ({
  children,
  initialState,
  asyncReducers,
}: StoreProviderProps): JSX.Element => {
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
