import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useStoreApp = create(
  persist(
    (set: any) => ({
      color: "#B922E2",
      page: "HOME",
      skillDisplayed: "Threejs / React Three Fiber",
      contentCard: "about",
      visibility: true,
      liked: false,
      setLiked: (payload: boolean) => set({ liked: payload }),
      setVisibility: (payload: boolean) => set({ visibility: payload }),
      setContentCard: (payload: string) => set({ contentCard: payload }),
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
