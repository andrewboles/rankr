import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import uniqid from "uniqid";

interface GameStatus {
  gameActive: boolean;
  voteActive: boolean;
}

interface GlobalState {
  userId: string | null;
  status: GameStatus;
}

export const useStore = create<GlobalState>()(
  devtools(
    persist(
      (set) => ({
        userId: null,
        status: {
          gameActive: false,
          voteActive: false,
        },
      }),
      {
        name: "socket-storage",
      }
    )
  )
);
