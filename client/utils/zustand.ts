import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import uniqid from 'uniqid'

interface BearState {
    userId: string | null;
    setId: () => void;
    status: GameStatus;
    setStatus: (newStatus: GameStatus) => void;
}

export interface GameStatus {
    gameActive: boolean;
    voteActive: boolean;
}

export const useStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        userId: null,
        setId: () => set({ userId: uniqid()}),
        status: {
            gameActive: false,
            voteActive: false
        },
        setStatus: (newStatus: GameStatus) => set({status: newStatus})
      }),
      {
        name: "bear-storage",
      }
    )
  )
);

