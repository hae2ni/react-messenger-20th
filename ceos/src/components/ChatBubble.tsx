import styled from "styled-components";
import ProfileImg from "@assets/profile/chatting_profile.svg?react";
import FromBox from "./message/FromBox";
import { useStore } from "@core/useStore";
import ToBox from "./message/ToBox";

export default function ChatBubble() {
  const newDummyText = useStore((state) => state.dummyText);

  return (
    <>
      {newDummyText.map((data) => {
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
            <ToWrapper key={Math.random()}>
              <ToBox id={id} message={message} time={time} />
            </ToWrapper>
          );
        }
      })}
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

const ToWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
