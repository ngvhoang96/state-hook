import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";
import Zustand from "./Example3/Example3";

export interface StateModel {
  name: string;
  pets: number;
}

function App() {
  return (
    <>
      <h2>Using new createStore</h2>
      <Example1 />
      <br />
      <h2>Using React context API</h2>
      <Example2 />
      <br />
      <h2>Using zustand</h2>
      <Zustand />
    </>
  );
}

export default App;
