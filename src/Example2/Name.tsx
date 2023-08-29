import { ChangeEvent, useCallback } from "react";
import { useAppContext } from "./Example2";

export const Name = () => {
  const [state, setState] = useAppContext();

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }, [setState]);

  return (
    <tr>
      <td>Name</td>
      <td>
        <input value={state.name} onChange={onChangeName} />
      </td>
    </tr>
  )
}
