import { useSlices } from "./Example1";

export const Consumer = () => {
  const useSlice = useSlices();
  const [name] = useSlice("name");
  const [age] = useSlice("age");

  return (
    <div>Hello {name}, {age} years old.</div>
  )
}
