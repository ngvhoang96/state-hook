/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dispatch,
  SetStateAction,
  Provider,
} from "react";

export type TObject = Record<string, any>;
export type ContextType<T> = readonly [T, Dispatch<SetStateAction<T>>];

export type Action<M> = (state: M, setState: Dispatch<SetStateAction<M>>) => any;
export type ActionsWrapper<M> = Record<string, Action<M>>;

export type ActionMapper<M, T extends ActionsWrapper<M>> = {
  [P in keyof T]: ReturnType<T[P]>;
};

export type UseStoreProviderHook<T> = [Provider<ContextType<T>>, ContextType<T>];
export type UseSlicesHook<T> = <K>(propSelector: (_: T) => K)
  => readonly [K, Dispatch<SetStateAction<K>>];
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
