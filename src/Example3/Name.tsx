import { ChangeEvent, useCallback } from "react";
import { useZustand } from "./Example3";

export const Name = () => {
  const name = useZustand(({ name }) => name);
  const setName = useZustand(({ setName }) => setName);

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
