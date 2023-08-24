import { useStore } from "./Example2";

export const Age = () => {
  const [state, setState] = useStore();

  const increaseAge = () => setState((prev) => ({ ...prev, age: prev.age + 1 }));
  const decreaseAge = () => setState((prev) => ({ ...prev, age: prev.age - 1 }));

  return (
    <tr>
      <td>Age</td>
      <td>
        <button onClick={increaseAge}>-</button>
        {" "}
        {state.age}
        {" "}
        <button onClick={decreaseAge}>+</button>
      </td>
    </tr>
  )
}
