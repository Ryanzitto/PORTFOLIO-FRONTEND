import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreApp = create(
  persist(
    (set: any) => ({
      color: "#B922E2",
      page: "HOME",
      skillDisplayed: "Threejs / React Three Fiber",
      setSkillDisplayed: (payload: string) => set({ skillDisplayed: payload }),
      setColor: (payload: string) => set({ color: payload }),
      setPage: (payload: string) => set({ page: payload }),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
