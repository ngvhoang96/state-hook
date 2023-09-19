import { Pet } from "./Pet";
import { Name } from "./Name";
import { Consumer } from "./Comsumer";
import { Demo } from "./demo";
import { ContextProvider } from "./useContextApi";

function Example2() {
  return (
    <ContextProvider>
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
    </ContextProvider>
  );
}

export default Example2;
