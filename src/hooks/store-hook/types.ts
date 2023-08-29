import {
  Dispatch,
  SetStateAction,
  Provider,
} from "react";

export type PropertyMap<T> = {
  [P in keyof T]: P;
}

export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];

export type UseSliceHook<T> = <K>(propSelector: (_: T) => K) => readonly [K, Dispatch<SetStateAction<K>>];

export type UseStoreHook<T> = [Provider<ContextType<T>>, ContextType<T>];

export type StoreType<T> = [() => UseStoreHook<T>, () => UseSliceHook<T>];
