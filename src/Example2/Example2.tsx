import { createContext, useContext, useMemo, useState } from "react";
import { Pet } from "./Pet";
import { Name } from "./Name";
import { Consumer } from "./Comsumer";
import { ContextType } from "../hooks/store-hook";
import { StateModel } from "../App";
import { Demo } from "./demo";

const defaultState = {
  name: "Hoang",
  pets: 2,
};

const Context = createContext<ContextType<StateModel>>([defaultState, () => { }])

function Example2() {
  const [state, setState] = useState<StateModel>(defaultState);

  const ctxValue: ContextType<StateModel> = useMemo(() => [state, setState], [state, setState]);

  return (
    <Context.Provider value={ctxValue}>
      <Consumer />
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <Name />
          <Pet />
          <Demo />
        </tbody>
      </table>
    </Context.Provider>
  );
}

export const useAppContext = () => useContext(Context);

export default Example2;
