import { useContextApi } from "./useContextApi";

export const Pet = () => {
  const [state, setState] = useContextApi();

  const increasePet = () => setState((prev) => ({ ...prev, pets: prev.pets + 1 }));
  const decreasePet = () => setState((prev) => ({ ...prev, pets: prev.pets - 1 }));

  return (
    <tr>
      <td>Pets</td>
      <td>
        <button onClick={decreasePet}>-</button>
        {" "}
        {state.pets}
        {" "}
        <button onClick={increasePet}>+</button>
      </td>
    </tr>
  )
}
