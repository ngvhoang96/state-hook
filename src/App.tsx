import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";

export interface StateModel {
  name: string;
  age: number;
}

function App() {
  return (
    <>
      <h2>Using new createStore</h2>
      <Example1 />
      <br />
      <h2>Using React context API</h2>
      <Example2 />
    </>
  );
}

export default App;
