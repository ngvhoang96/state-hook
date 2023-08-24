import { StateModel } from "../App";
import { Consumer } from "./Comsumer";
import { useStore } from "../state-hook";
import { Name } from "./Name";
import { Age } from "./Age";

function Example1({ defaultState }: { defaultState: StateModel }) {
  const [Provider, ctxValue, useSlices] = useStore<StateModel>(defaultState);

  return (
    <Provider value={ctxValue}>
      <Consumer {...{ useSlices }} />
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <Name {...{ useSlices }} />
          <Age {...{ useSlices }} />
        </tbody>
      </table>
    </Provider>
  );
}

export default Example1;
