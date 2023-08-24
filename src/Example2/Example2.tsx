import { createContext, useContext, useState } from "react";
import { Age } from "./Age";
import { Name } from "./Name";
import { Consumer } from "./Comsumer";
import { StateModel } from "../App";
import { ContextType } from "../state-hook";

const Context = createContext<ContextType<StateModel>>([{ age: 0, name: "hoang" }, () => { }])

function Example2({ defaultState }: { defaultState: StateModel }) {
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
