import {
  Context,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { ContextType } from "./types";

export type Action<M> = {
  [actionName: string]: (state: M, setState: Dispatch<SetStateAction<M>>) => any;
}

export type ActionMapper<M, T extends Action<M>> = {
  [P in keyof T]: ReturnType<T[P]>;
}

function getCustomActions<M, T extends Action<M>>(actions: T, state: M, setState: Dispatch<SetStateAction<M>>) {
  const keys: Array<keyof T> = Object.keys(actions);

  const mapper = {} as ActionMapper<M, T>;
  keys.forEach((key) => {
    mapper[key] = actions[key](state, setState);
  })

  return mapper;
}

export function useCustomActions<M, T extends Action<M>>(store: Context<ContextType<M>>, customActions: T): ActionMapper<M, T> {
  const [ctxState, setCtxState] = useContext(store);

  return getCustomActions(customActions, ctxState, setCtxState);
}

export default useCustomActions;
