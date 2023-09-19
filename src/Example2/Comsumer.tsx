import { useContextApi } from "./useContextApi";

export const Consumer = () => {
  const [state] = useContextApi();

  return (
    <div>{state.name} has {state.pets} pets.</div>
  )
}
