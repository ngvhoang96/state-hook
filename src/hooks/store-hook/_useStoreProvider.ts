import {
  useMemo,
  useState,
  Context,
} from "react";
import { ContextType, UseStoreProviderHook } from "./types";

export function useStoreProvider<T>(store: Context<ContextType<T>>, defaultState: T): UseStoreProviderHook<T> {
  const [state, setState] = useState<T>(defaultState);
  const contextValue: ContextType<T> = useMemo(() => [state, setState], [state]);

  return [store.Provider, contextValue];
}

export default useStoreProvider;
