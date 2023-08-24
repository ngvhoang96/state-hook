import { ChangeEvent, useCallback } from "react";
import { useSlices } from "./Example1";

export const Name = () => {
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
