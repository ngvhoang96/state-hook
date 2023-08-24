import { StateModel } from "../App";
import { StoreConsumer } from "../state-hook";

export const Consumer: StoreConsumer<StateModel> = ({ useSlices }) => {
  const useSlice = useSlices();
  const [name] = useSlice("name");
  const [age] = useSlice("age");

  return (
    <div>Hello {name}, {age} years old.</div>
  )
}
