import {
  Dispatch,
  SetStateAction,
  useContext,
  useCallback,
  Context,
} from "react";
import { ContextType, UseSlicesHook } from "./types";

export function useSlices<T>(store: Context<ContextType<T>>): UseSlicesHook<T> {
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

export default useSlices;
