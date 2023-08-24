import {
  useMemo,
  useState,
  Context,
} from "react";
import { ContextType, UseStoreHook } from "./types";

export function useStore<T>(store: Context<ContextType<T>>, defaultState: T): UseStoreHook<T> {
  const [state, setState] = useState<T>(defaultState);
  const contextValue: ContextType<T> = useMemo(() => [state, setState], [state]);

  return [store.Provider, contextValue];
}

export default useStore;
