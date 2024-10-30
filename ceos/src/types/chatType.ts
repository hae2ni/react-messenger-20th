export interface chatType {
  user: string;
  message: string;
  userId: string;

  messages: MessageType[];
}

export interface MessageType {
  sender: string;
  text: string;
  time: string;
}
