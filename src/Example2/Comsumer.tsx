import { useAppContext } from "./Example2";

export const Consumer = () => {
  const [state] = useAppContext();

  return (
    <div>{state.name} has {state.pets} pets.</div>
  )
}
