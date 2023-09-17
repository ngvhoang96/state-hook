/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Context,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
} from "react";
import { ActionMapper, ActionsWrapper, ContextType } from "./types";

function getActions<M, T extends ActionsWrapper<M>>(
  actionsWrapper: T,
  state: M,
  setState: Dispatch<SetStateAction<M>>,
) {
  const keys: Array<keyof T> = Object.keys(actionsWrapper);

  const mapper = {} as ActionMapper<M, T>;
  keys.forEach((key) => {
    mapper[key] = actionsWrapper[key](state, setState);
  });

  return mapper;
}

export function useActions<M, T extends ActionsWrapper<M>>(
  store: Context<ContextType<M>>,
  actionsWrapper: T,
): ActionMapper<M, T> {
  const [ctxState, setCtxState] = useContext(store);

  return useMemo(() => getActions(actionsWrapper, ctxState, setCtxState), [actionsWrapper, ctxState, setCtxState]);
}

export default useActions;
