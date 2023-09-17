import { useZustand } from "./Example3";

export const Pet = () => {
  const pets = useZustand(({ pets }) => pets);

  const increasePet = useZustand(({ increasePet }) => increasePet);
  const decreasePet = useZustand(({ decreasePet }) => decreasePet);

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
