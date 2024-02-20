import {
  type ReducersMapObject,
  configureStore,
  type AnyAction,
  type ThunkDispatch,
  type Dispatch
} from "@reduxjs/toolkit";
import { type ThunkExtraArgs, type StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "shared/api/api";
import { type NavigateFunction } from "react-router-dom";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
): ReturnType<typeof configureStore> => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
  });

  // @ts-expect-error fix types of store later
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ThunkDispatch<
StateSchema,
ThunkExtraArgs,
AnyAction
> &
Dispatch<AnyAction>;
