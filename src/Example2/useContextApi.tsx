import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { ContextType } from "../hooks/store-hook";
import { StateModel } from "../App";

const defaultState = {
  name: "Hoang",
  pets: 2,
};

const Context = createContext<ContextType<StateModel>>([defaultState, () => { }])

export function ContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<StateModel>(defaultState);

  const ctxValue: ContextType<StateModel> = useMemo(() => [state, setState], [state, setState]);

  return (
    <Context.Provider value={ctxValue}>
      {children}
    </Context.Provider>
  );
}

export const useContextApi = () => useContext(Context);
