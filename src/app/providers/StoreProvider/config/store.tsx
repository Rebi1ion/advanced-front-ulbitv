import {
  type ReducersMapObject,
  configureStore,
  type AnyAction,
  type ThunkDispatch,
  type Dispatch
} from "@reduxjs/toolkit";
import { type StateSchema } from "./StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "./reducerManager";

export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): ReturnType<typeof configureStore> => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error fix types of store later
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ThunkDispatch<StateSchema, undefined, AnyAction> &
Dispatch<AnyAction>;
