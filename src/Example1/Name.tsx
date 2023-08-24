import { ChangeEvent, useCallback } from "react";
import { StateModel } from "../App";
import { StoreConsumer } from "../state-hook";

export const Name: StoreConsumer<StateModel> = ({ useSlices }) => {
  const useSlice = useSlices();
  const [name, setName] = useSlice("name");

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, [setName]);

  return (
    <tr>
      <td>Name</td>
      <td>
        <input value={name} onChange={onChangeName} />
      </td>
    </tr>
  )
}
