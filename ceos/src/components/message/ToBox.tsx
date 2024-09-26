import MessageBox from "./MessageBox";
import { chatType } from "types/chatType";
import MessageTime from "./MessageTime";

export default function ToBox({ id, message, time }: chatType) {
  return (
    <>
      <MessageTime time={time} />
      <MessageBox id={id} text={message} />
    </>
  );
}
