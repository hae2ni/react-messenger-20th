import styled from "styled-components";
import MessageBox from "./MessageBox";
import { chatType } from "types/chatType";
import MessageTime from "./MessageTime";

export default function ToBox({ id, message, time }: chatType) {
  return (
    <Wrapper>
      <MessageTime time={time} />
      <MessageBox id={id} text={message} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
