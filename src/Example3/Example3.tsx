import { Consumer } from "./Comsumer";
import { Name } from "./Name";
import { Pet } from "./Pet";
import { StateModel } from "../App";
import { StoreApi, create } from "zustand";

const defaultState: StateModel = {
  name: "Hoang",
  pets: 2,
}; 

interface StateActions {
  setName: (name: string) => void;
  increasePet: () => void;
  decreasePet: () => void;
}

export const useZustand = create<StateModel & StateActions>((set: StoreApi<StateModel>['setState']) => ({
  ...defaultState,
  setName: (name: string) => set({ name }),
  increasePet: () => set(({ pets }) => ({ pets: pets + 1 })),
  decreasePet: () => set(({ pets }) => ({ pets: pets - 1 })),
}));

function Zustand() {
  return (
    <>
      <Consumer />
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <Name />
          <Pet />
        </tbody>
      </table>
    </>
  );
}

export default Zustand;
