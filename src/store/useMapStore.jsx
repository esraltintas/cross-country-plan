import { create } from "zustand";

const useMapStore = create((set) => ({
  waypoints: [],
  setWaypoints: (newWaypoints) => set({ waypoints: newWaypoints }),
}));

export default useMapStore;
