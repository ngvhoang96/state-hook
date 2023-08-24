import Example1 from "./Example1/Example1";
import Example2 from "./Example2/Example2";

export interface StateModel {
  name: string;
  age: number;
}

const defaultState = {
  name: "Hoang",
  age: 26,
};

function App() {
  return (
    <>
      <h2>Using new createStore</h2>
      <Example1 />
      <h2>Using React context API</h2>
      <Example2 {...{ defaultState }} />
    </>
  );
}

export default App;
