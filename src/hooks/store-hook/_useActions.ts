import {
  Context,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { ActionsWrapper, ContextType } from "./types";

export type ActionMapper<M, T extends ActionsWrapper<M>> = {
  [P in keyof T]: ReturnType<T[P]>;
}

function getActions<M, T extends ActionsWrapper<M>>(actionsWrapper: T, state: M, setState: Dispatch<SetStateAction<M>>) {
  const keys: Array<keyof T> = Object.keys(actionsWrapper);

  const mapper = {} as ActionMapper<M, T>;
  keys.forEach((key) => {
    mapper[key] = actionsWrapper[key](state, setState);
  })

  return mapper;
}

export function useActions<M, T extends ActionsWrapper<M>>(store: Context<ContextType<M>>, actionsWrapper: T): ActionMapper<M, T> {
  const [ctxState, setCtxState] = useContext(store);

  return getActions(actionsWrapper, ctxState, setCtxState);
}

export default useActions;
