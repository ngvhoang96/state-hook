import { useSlices } from "./Example1";

export const Age = () => {
  const useSlice = useSlices();
  const [age, setAge] = useSlice("age");

  const increaseAge = () => setAge((a) => a + 1);
  const decreaseAge = () => setAge((a) => a - 1);

  return (
    <tr>
      <td>Age</td>
      <td>
        <button onClick={decreaseAge}>-</button>
        {" "}
        {age}
        {" "}
        <button onClick={increaseAge}>+</button>
      </td>
    </tr>
  )
}
