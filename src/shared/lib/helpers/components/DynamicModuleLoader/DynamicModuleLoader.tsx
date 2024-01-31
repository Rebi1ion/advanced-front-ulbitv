import { type Reducer } from "@reduxjs/toolkit";
import {
  type StateSchemaKeys,
  type ReduxStoreWithManager
} from "app/providers/StoreProvider/config/StateSchema";
import { useEffect, type FC, type ReactElement } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [key in StateSchemaKeys]?: Reducer;
};

type ReducersListEntry = [StateSchemaKeys, Reducer];

interface DynamicModuleLoaderProps {
  children: ReactElement;
  reducers: ReducersList;
  removeAfterUnmount?: true;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
      store.reducerManager.add(name, reducer);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@REMOVE ${name} reducer` });
        });
      }
    };
  }, []);
  return children;
};
