import { DUMMY_CHAT } from "constant/chat";
import { create } from "zustand";

interface StoreState {
  inputValue: string;
  setInputValue: (text: string) => void;
  dummyText: typeof DUMMY_CHAT;
  setDummyText: () => void;
}

export const useStore = create<StoreState>((set) => ({
  dummyText: DUMMY_CHAT,
  inputValue: "",
  setInputValue: (text) => set({ inputValue: text }),

  setDummyText: () =>
    set((state) => {
      const newText = {
        id: "나",
        message: state.inputValue,
        time: new Date().toISOString(),
      };

      const newDummyText = [...state.dummyText, newText];

      return {
        dummyText: newDummyText,
      };
    }),
}));
