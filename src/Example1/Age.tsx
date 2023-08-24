import { StateModel } from "../App";
import { StoreConsumer } from "../state-hook";

export const Age: StoreConsumer<StateModel> = ({ useSlices }) => {
  const useSlice = useSlices();
  const [age, setAge] = useSlice("age");

  const increaseAge = () => setAge((a) => a + 1);
  const decreaseAge = () => setAge((a) => a - 1);

  return (
    <tr>
      <td>Age</td>
      <td>
        <button onClick={increaseAge}>-</button>
        {" "}
        {age}
        {" "}
        <button onClick={decreaseAge}>+</button>
      </td>
    </tr>
  )
}
