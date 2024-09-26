import styled from "styled-components";
import ProfileImg from "@assets/profile/chatting_profile.svg?react";
import { DUMMY_CHAT } from "constant/chat";
import MessageTime from "./message/MessageTime";
import MessageBox from "./message/MessageBox";

export default function ChatBubble() {
  return (
    <>
      {DUMMY_CHAT.map((data) => {
        const { id, message, time } = data;

        if (id != "나") {
          return (
            <FromContainer>
              <Profile />
              <FromWrapper>
                <Name>{id}</Name>
                <MessageTimeWrapper>
                  <MessageBox id={id} text={message} />
                  <MessageTime time={time} />
                </MessageTimeWrapper>
              </FromWrapper>
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

const FromWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageTimeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  padding-left: 10px;
`;

const ToWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
