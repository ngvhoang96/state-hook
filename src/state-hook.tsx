import {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
  useCallback,
  Context,
  createContext,
  Provider,
} from "react";

// types
export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];
export type UseSliceType<T> = <K extends keyof T>(prop: K) => readonly [T[K], Dispatch<SetStateAction<T[K]>>];
export type UseStoreHook<T> = [Provider<ContextType<T>>, ContextType<T>]

type StoreReturn<T> = [() => UseStoreHook<T>, () => UseSliceType<T>];

export function createStore<T>(defaultState: T): StoreReturn<T> {
  const store = createContext<ContextType<T>>([defaultState, () => { }]);

  return [
    () => useStore(store, defaultState),
    () => useSlices(store),
  ]
}

export function useStore<T>(store: Context<ContextType<T>>, defaultState: T): UseStoreHook<T> {
  const [state, setState] = useState<T>(defaultState);
  const contextValue: ContextType<T> = useMemo(() => [state, setState], [state]);

  return [store.Provider, contextValue];
}

export function useSlices<T>(store: Context<ContextType<T>>): UseSliceType<T> {
  const [ctxState, setCtxState] = useContext(store);

  const useStoreContext = useCallback(<K extends keyof T>(prop: K) => {
    const value = ctxState[prop];

    const setValue: Dispatch<SetStateAction<T[K]>> = (arg) => {
      const isUsingFunction = arg instanceof Function;

      setCtxState((prevState) => ({
        ...prevState,
        [String(prop)]: isUsingFunction ? arg(prevState[prop]) : arg,
      }));
    }
    return [value, setValue] as const;
  }, [ctxState, setCtxState]);

  return useStoreContext;
}
