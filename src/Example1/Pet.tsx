import { useSlices } from "./Example1";

export const Pet = () => {
  const useSlice = useSlices();
  const [pets, setPets] = useSlice("pets");

  const increasePet = () => setPets((a) => a + 1);
  const decreasePet = () => setPets((a) => a - 1);

  return (
    <tr>
      <td>Pet</td>
      <td>
        <button onClick={decreasePet}>-</button>
        {" "}
        {pets}
        {" "}
        <button onClick={increasePet}>+</button>
      </td>
    </tr>
  )
}
