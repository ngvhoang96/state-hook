import { useAppContext } from "./Example2";

export const Consumer = () => {
  const [state] = useAppContext();
  return (
    <div>Hello {state.name}, {state.pets} pets.</div>
  )
}
