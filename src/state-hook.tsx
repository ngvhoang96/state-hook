import {
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
  // ReactElement,
  useCallback,
  Context,
  FC,
  createContext,
  Provider,
} from "react";

// interface WithChildren { children: ReactElement | ReactElement[] }


// start here
export type ContextType<T> = [T, Dispatch<SetStateAction<T>>];
export type UseSliceType<T> = <K extends keyof T>(prop: K) => readonly [T[K], Dispatch<SetStateAction<T[K]>>];
export type StoreConsumer<T> = FC<{ useSlices: () => UseSliceType<T> }>;

export function useSlices<T>(localStore: Context<ContextType<T>>): UseSliceType<T> {
  const [state, setState] = useContext(localStore);

  const useStoreContext = useCallback(<K extends keyof T>(prop: K) => {
    const setValue: Dispatch<SetStateAction<T[K]>> = (arg) => {
      const isUsingFunction = arg instanceof Function;

      setState((prevState) => ({
        ...prevState,
        [String(prop)]: isUsingFunction ? arg(prevState[prop]) : arg,
      }));
    }
    return [
      state[prop],
      setValue,
    ] as const;
  }, [state, setState]);

  return useStoreContext;
}

type UseStoreHook<T> = [
  Provider<ContextType<T>>,
  ContextType<T>,
  () => UseSliceType<T>,
]

export function useStore<T>(defaultState: T): UseStoreHook<T> {
  const [state, setState] = useState<T>(defaultState);

  const Context = createContext<ContextType<T>>([defaultState, () => { }]);
  const contextValue: ContextType<T> = [state, setState];
  // const contextValue: ContextType<T> = useMemo(() => [state, setState], [state]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const getSlices = useCallback(() => useSlices(Context), [Context]);

  return [Context.Provider, contextValue, getSlices];
}
