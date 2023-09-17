import { useZustand } from "./Example3"

export const Consumer = () => {
  const name = useZustand((state) => state.name);
  const pets = useZustand((state) => state.pets);

  return (
    <div>{name} has {pets} pets.</div>
  )
}
