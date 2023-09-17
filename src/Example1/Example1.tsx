import { Consumer } from "./Comsumer";
import { Name } from "./Name";
import { Pet } from "./Pet";
import { StateModel } from "../App";
import { createStore } from "../hooks/store-hook";
import { Demo } from "./demo";

const defaultState: StateModel = {
  name: "Hoang",
  pets: 2,
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
          <Pet />
          <Demo />
        </tbody>
      </table>
    </StoreProvider>
  );
}

export default Example1;
