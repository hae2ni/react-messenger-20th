import styled from "styled-components";
import MessageTime from "./MessageTime";
import ToMessageBox from "./ToMessageBox";
import { BoxProps } from "./types/messageBoxProps";

export default function ToBox({ showProfile, message, time }: BoxProps) {
  return (
    <Wrapper>
      <MessageTime time={time} />
      <ToMessageBox showProfile={showProfile} message={message} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
