import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { type StateSchema } from "../config/StateSchema";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";

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
  //   const navigate = useNavigate();
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>
    //  navigate
  );

  return <Provider store={store}>{children}</Provider>;
};
