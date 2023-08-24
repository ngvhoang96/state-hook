import { useStore } from "./Example2";

export const Consumer = () => {
  const [state] = useStore();
  return (
    <div>Hello {state.name}, {state.age} years old.</div>
  )
}
