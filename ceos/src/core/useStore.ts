import { CHAT_DATA } from "constant/chatData";
import { chatType } from "types/chatType";
import { create } from "zustand";

interface StoreState {
  inputValue: string;
  setInputValue: (text: string) => void;
  setDummyText: () => void;
  dummyText: chatType[];
  addNewText: () => void;
}

export const useStore = create<StoreState>((set) => ({
  dummyText: CHAT_DATA,
  inputValue: "",

  setInputValue: (text) => set({ inputValue: text }),

  addNewText: () =>
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
