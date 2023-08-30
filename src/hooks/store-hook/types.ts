import {
  Dispatch,
  SetStateAction,
  Provider,
} from "react";
import { Action, ActionMapper } from "./_useCustomActions";

export type PropertyMap<T> = {
  [P in keyof T]: P;
}

export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];

export type UseSliceHook<T> = <K>(propSelector: (_: T) => K) => readonly [K, Dispatch<SetStateAction<K>>];

export type UseStoreHook<T> = [Provider<ContextType<T>>, ContextType<T>];

export type UseCustomActionsHook<T, A extends Action<T>> = ActionMapper<T, A>;

export type StoreType<T> = [() => UseStoreHook<T>, () => UseSliceHook<T>];

export type StoreTypeWithAction<T, A extends Action<T>> = [() => UseStoreHook<T>, () => UseSliceHook<T>, () => UseCustomActionsHook<T, A>];
