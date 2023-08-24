import { Consumer } from "./Comsumer";
import { Name } from "./Name";
import { Age } from "./Age";
import { StateModel } from "../App";
import { createStore } from "../hooks/store-hook";

const defaultState: StateModel = {
  name: "Hoang",
  age: 26,
};

export const [useStore, useSlices] = createStore(defaultState);

function Example1() {
  const [StoreProvider, storeValue] = useStore();

  const [state] = storeValue;
  console.log(state);

  return (
    <StoreProvider value={storeValue}>
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
    </StoreProvider>
  );
}

export default Example1;
