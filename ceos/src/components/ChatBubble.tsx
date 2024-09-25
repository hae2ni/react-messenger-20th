import styled from "styled-components";
import ProfileImg from "@assets/profile/chatting_profile.svg?react";
import { DUMMY_CHAT } from "constant/chat";

export default function ChatBubble() {
  return (
    <>
      <Profile />
      {DUMMY_CHAT.map((data) => {
        const { id, message, time } = data;

        return (
          <div>
            {id}
            {message}
            {time}
          </div>
        );
      })}
      <Name />
    </>
  );
}

const Profile = styled(ProfileImg)`
  width: 48px;
  height: 48px;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.medium12};
`;
