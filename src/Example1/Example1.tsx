import { Consumer } from "./Comsumer";
import { createStore } from "../state-hook";
import { Name } from "./Name";
import { Age } from "./Age";
import { StateModel } from "../App";

const defaultState: StateModel = {
  name: "Hoang",
  age: 26,
};

export const [useStore, useSlices] = createStore(defaultState);

function Example1() {
  const [StoreProvider, storeValue] = useStore();

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
