export interface chatType {
  user: string;
  userId: string;

  messages: MessageType[];
}

export interface MessageType {
  sender: string;
  text: string;
  time: string;
}
