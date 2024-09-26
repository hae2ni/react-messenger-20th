import { RED_CHAT } from "constant/chatRed";
import { YELLOW_CHAT } from "constant/chatYellow";
import { chatType } from "types/chatType";
import { create } from "zustand";

interface StoreState {
  inputValue: string;
  setInputValue: (text: string) => void;
  setDummyText: () => void;
  dummyText1: chatType[];
  dummyText: chatType[];
  dummyText2: chatType[];
  addNewText: () => void;
}

export const useStore = create<StoreState>((set) => ({
  dummyText: RED_CHAT,
  dummyText1: RED_CHAT,
  dummyText2: YELLOW_CHAT,

  setDummyText: () =>
    set((state) => {
      const newDummyText = state.dummyText === state.dummyText1 ? state.dummyText2 : state.dummyText1;
      return { dummyText: newDummyText };
    }),

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
