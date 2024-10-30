import { chatType } from "types/chatType";

export function getLastMessages(chatData: chatType[]) {
  return chatData.map((chat) => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    return {
      userId: chat.userId,
      user: chat.user,
      lastText: lastMessage.text,
      lastTime: lastMessage.time,
    };
  });
}
