import { useSlices } from "./Example1";

export const Consumer = () => {
  const useSlice = useSlices();
  const [name] = useSlice(state => state.name);
  const [pets] = useSlice(state => state.pets);

  return (
    <div>{name} has {pets} pets.</div>
  )
}
