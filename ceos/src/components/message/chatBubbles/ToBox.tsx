import styled from "styled-components";
import ToMessageBox from "./ToMessageBox";
import { BoxPropType } from "../types/messageBoxProps";
import MessageTime from "./MessageTime";

export default function ToBox({ lastMessage, isSameTime, showProfile, message, time }: BoxPropType) {
  return (
    <Wrapper>
      {!isSameTime || lastMessage ? <MessageTime time={time} /> : null}
      <ToMessageBox showProfile={showProfile} message={message} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
`;
