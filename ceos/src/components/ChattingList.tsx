import styled from "styled-components";
import ChatBubble from "./ChatBubble";

export default function ChattingList() {
  return (
    <Wrapper>
      <ChatBubble />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow-y: scroll;
  width: 375px;
`;
