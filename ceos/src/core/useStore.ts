import { CHAT_DATA } from "constant/chatData";
import { chatType } from "types/chatType";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
  inputValue: string;
  setInputValue: (text: string) => void;
  dummyText: chatType[];
  addNewText: (userId: string) => void;
}

interface StoreState {
  inputValue: string;
  setInputValue: (text: string) => void;
  dummyText: chatType[];
  addNewText: (userId: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      dummyText: CHAT_DATA,
      inputValue: "",

      setInputValue: (text) => set({ inputValue: text }),

      addNewText: (userId) =>
        set((state) => {
          const newText = {
            sender: "me",
            text: state.inputValue,
            time: new Date().toISOString(),
          };

          const updatedDummyText = state.dummyText.map((friend) =>
            friend.userId === userId
              ? {
                  ...friend,
                  messages: [...friend.messages, newText],
                }
              : friend,
          );

          return {
            dummyText: updatedDummyText,
            inputValue: "",
          };
        }),
    }),
    {
      name: "chat-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
