import { useSlices } from "./Example1";

export const Consumer = () => {
  const useSlice = useSlices();
  const [name] = useSlice("name");
  const [pets] = useSlice("pets");

  return (
    <div>Hello {name}, {pets} pets.</div>
  )
}
