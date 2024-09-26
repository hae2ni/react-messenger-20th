import styled from "styled-components";
import ProfileImg from "@assets/profile/chatting_profile.svg?react";
import { DUMMY_CHAT } from "constant/chat";
import MessageBox from "./message/MessageBox";
import FromBox from "./message/FromBox";

export default function ChatBubble() {
  return (
    <>
      {DUMMY_CHAT.map((data) => {
        const { id, message, time } = data;

        if (id != "나") {
          return (
            <FromContainer key={Math.random()}>
              <Profile />
              <FromBox id={id} message={message} time={time} />
            </FromContainer>
          );
        } else {
          return (
            <ToWrapper>
              <MessageBox id={id} text={message} />
            </ToWrapper>
          );
        }
      })}
      <Name />
    </>
  );
}

const Profile = styled(ProfileImg)`
  width: 48px;
  height: 48px;
`;

const FromContainer = styled.div`
  display: flex;
  width: 100%;
  padding-left: 10px;
`;

const Name = styled.p`
  padding-left: 10px;

  ${({ theme }) => theme.fonts.medium12};
`;

const ToWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
