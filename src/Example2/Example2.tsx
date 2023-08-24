import { createContext, useContext, useState } from "react";
import { Age } from "./Age";
import { Name } from "./Name";
import { Consumer } from "./Comsumer";
import { ContextType } from "../hooks/store-hook";
import { StateModel } from "../App";

const defaultState = {
  name: "Hoang",
  age: 26,
};

const Context = createContext<ContextType<StateModel>>([defaultState, () => { }])

function Example2() {
  const [state, setState] = useState<StateModel>(defaultState);

  return (
    <Context.Provider value={[state, setState]}>
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
          <Age />
        </tbody>
      </table>
    </Context.Provider>
  );
}

export const useStore = () => useContext(Context);

export default Example2;
