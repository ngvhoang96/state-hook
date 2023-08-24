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
      <Example1 {...{ defaultState }} />
      <Example2 {...{ defaultState }} />
    </>
  );
}

export default App;
