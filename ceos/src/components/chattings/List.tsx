import styled from "styled-components";
import { useStore } from "@core/useStore";
import { chatType } from "types/chatType";
import OneChat from "./OneChat";
import { Link } from "react-router-dom";

export default function List() {
  const newDummyText = useStore((state) => state.dummyText);

  function getLastMessages(chatData: chatType[]) {
    return chatData.map((chat) => {
      const lastMessage = chat.messages[chat.messages.length - 1];
      return {
        userId: chat.userId,
        user: chat.user,
        lastText: lastMessage.text,
        lastTime: lastMessage.time,
      };
    });
  }

  const lastMessages = getLastMessages(newDummyText);

  return (
    <Container>
      {lastMessages.map((message) => {
        const { lastText, lastTime, user, userId } = message;

        return (
          <Link to={`/message/${userId}`}>
            <OneChat key={userId} lastText={lastText} lastTime={lastTime} user={user} userId={userId} />
          </Link>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 343px;
`;
