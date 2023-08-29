import {
  Dispatch,
  SetStateAction,
  Provider,
} from "react";

export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];

export type UseSliceHook<T> = <K extends keyof T>(prop: K) => readonly [T[K], Dispatch<SetStateAction<T[K]>>];

export type UseStoreHook<T> = [Provider<ContextType<T>>, ContextType<T>];

export type StoreType<T> = [() => UseStoreHook<T>, () => UseSliceHook<T>];
