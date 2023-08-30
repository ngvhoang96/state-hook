import {
  Dispatch,
  SetStateAction,
  Provider,
} from "react";
import { ActionMapper } from "./_useActions";

export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];

export type Action<M> = (state: M, setState: Dispatch<SetStateAction<M>>) => any;
export type ActionsWrapper<M> = Record<string, Action<M>>;

export type UseStoreProviderHook<T> = [Provider<ContextType<T>>, ContextType<T>];
export type UseSlicesHook<T> = <K>(propSelector: (_: T) => K) => readonly [K, Dispatch<SetStateAction<K>>];
export type UseActionsHook<T, A extends ActionsWrapper<T>> = ActionMapper<T, A>;

export type StoreType<T> = [
  () => UseStoreProviderHook<T>,
  () => UseSlicesHook<T>,
];
export type StoreTypeWithAction<T, A extends ActionsWrapper<T>> = [
  () => UseStoreProviderHook<T>,
  () => UseSlicesHook<T>,
  () => UseActionsHook<T, A>,
];
