/* eslint-disable @typescript-eslint/no-dynamic-delete */
import { combineReducers, type ReducersMapObject } from "@reduxjs/toolkit";
import type {
  ReducerManager,
  StateSchema,
  StateSchemaKeys
} from "./StateSchema";

export const createReducerManager = (
  initialReducers: ReducersMapObject<StateSchema>
): ReducerManager => {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKeys[] = [];

  return {
    getReducerMap: () => reducers,

    // Функция корневого редюсера
    // Она будет передана в стор
    reduce: (state, action) => {
      // очищает стэйт редюсеров, которые были удалены
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    // добавляет новый редюсер с указанным ключом

    add: (key, reducer) => {
      if (key === undefined || Boolean(reducers[key])) {
        return null;
      }

      // добавляется редюсер в объект остальных редюсеров
      reducers[key] = reducer;

      // создается новый combineReducer
      combinedReducer = combineReducers(reducers);
    },

    remove: (key) => {
      if (key === undefined || reducers[key] === undefined) {
        return null;
      }

      // удаляется редюсер из объекта редюсеров
      delete reducers[key];

      // добавляется ключ в список ключей для очистки
      keysToRemove.push(key);

      // создается новый combineReducer
      combinedReducer = combineReducers(reducers);
    },
  };
};
