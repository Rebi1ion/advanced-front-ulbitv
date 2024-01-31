import { type CounterSchema } from "entities/Counter";
import type { UserSchema } from "entities/User";
import { type LoginSchema } from "features/AuthByUsername";
import type {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from "@reduxjs/toolkit";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  // асинхронный редюсер
  login?: LoginSchema;
}

export type StateSchemaKeys = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKeys, reducer: Reducer) => void;
  remove: (key: StateSchemaKeys) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
