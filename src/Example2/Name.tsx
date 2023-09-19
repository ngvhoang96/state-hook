import { ChangeEvent, useCallback } from "react";
import { useContextApi } from "./useContextApi";

export const Name = () => {
  const [state, setState] = useContextApi();

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
