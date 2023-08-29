import { createContext } from "react";
import { ContextType, StoreType } from "./types";
import { useStore } from "./_useStore";
import { useSlices } from "./_useSlices";

export function createStore<T extends Record<string, any>>(defaultState: T): StoreType<T> {
  const store = createContext<ContextType<T>>([defaultState, () => { }]);

  return [
    () => useStore(store, defaultState),
    () => useSlices(store),
  ]
}

export default createStore;
