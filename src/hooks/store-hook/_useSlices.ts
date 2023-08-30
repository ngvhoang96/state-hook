import {
  Dispatch,
  SetStateAction,
  useContext,
  useCallback,
  Context,
  useMemo,
} from "react";
import { ContextType, TObject, UseSlicesHook } from "./types";
import { getPropertyMap } from "./_getPropertyMap";

export function useSlices<T extends TObject>(
  store: Context<ContextType<T>>,
): UseSlicesHook<T> {
  const [ctxState, setCtxState] = useContext(store);
  const propertyMap = useMemo(() => getPropertyMap(ctxState), [ctxState]);

  const useSlice = useCallback(<K>(propSelector: (_: T) => K) => {
    const value = propSelector(ctxState);
    const propName = propSelector(propertyMap as T) as string;

    const setValue: Dispatch<SetStateAction<K>> = (arg) => {
      const isUsingFunction = arg instanceof Function;

      setCtxState((prevState) => ({
        ...prevState,
        [propName]: isUsingFunction ? arg(propSelector(prevState)) : arg,
      }));
    };
    return [value, setValue] as const;
  }, [ctxState, propertyMap, setCtxState]);

  return useSlice;
}

export default useSlices;
