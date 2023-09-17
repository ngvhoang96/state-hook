import { ChangeEvent, useState } from "react";

export const CustomActionsConsumer = () => {
  const [newPets, setNewPets] = useState(0);
  const setPetsAndUpdateName = (newPets: number) => undefined;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newPetsAsString = e.target.value;

    setNewPets(parseInt(newPetsAsString));
  }

  return (
    <tr>
      <td>New pets</td>
      <td><input value={newPets} onChange={onChangeInput} /></td>
      <td>
        <button onClick={() => setPetsAndUpdateName(newPets)}>Update</button>
      </td>
    </tr>
  )
}
