import { createContext } from "react";
import {
  ContextType,
  ActionsWrapper,
  StoreType,
  StoreTypeWithAction,
  TObject,
} from "./types";
import { useStoreProvider } from "./_useStoreProvider";
import { useSlices } from "./_useSlices";
import { useActions } from "./_useActions";

export function createStore<T extends TObject>(
  defaultState: T,
): StoreType<T>; // overload #1
export function createStore<T extends TObject, A extends ActionsWrapper<T>>(
  defaultState: T,
  actionsWrapper: A,
): StoreTypeWithAction<T, A>; // overload #2
export function createStore<T extends TObject, A extends ActionsWrapper<T>>(
  defaultState: T,
  actionsWrapper?: A,
): StoreType<T> | StoreTypeWithAction<T, A> { // base function
  const store = createContext<ContextType<T>>([defaultState, () => { }]);

  if (actionsWrapper) {
    return [
      () => useStoreProvider(store, defaultState),
      () => useSlices(store),
      () => useActions(store, actionsWrapper),
    ];
  }

  return [
    () => useStoreProvider(store, defaultState),
    () => useSlices(store),
  ];
}

export default createStore;
