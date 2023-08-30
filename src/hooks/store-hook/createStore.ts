import { createContext } from "react";
import { ContextType, StoreType, StoreTypeWithAction } from "./types";
import { useStore } from "./_useStore";
import { useSlices } from "./_useSlices";
import useCustomActions, { Action } from "./_useCustomActions";

export function createStore<T extends Record<string, any>>(
  defaultState: T,
): StoreType<T>; // overload #1
export function createStore<T extends Record<string, any>, A extends Action<T>>(
  defaultState: T,
  customActions: A,
): StoreTypeWithAction<T, A>; // overload #2
export function createStore<T extends Record<string, any>, A extends Action<T>>(
  defaultState: T,
  customActions?: A,
): StoreType<T> | StoreTypeWithAction<T, A> { //base function
  const store = createContext<ContextType<T>>([defaultState, () => { }]);

  if (customActions !== undefined) {
    return [
      () => useStore(store, defaultState),
      () => useSlices(store),
      () => useCustomActions(store, customActions),
    ];
  }

  return [
    () => useStore(store, defaultState),
    () => useSlices(store),
  ];
}

export default createStore;
