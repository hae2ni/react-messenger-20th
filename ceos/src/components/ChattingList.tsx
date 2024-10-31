import styled from "styled-components";
import ChatBubble from "./ChatBubble";
import { RefObject } from "react";

interface ChattingListPropTypes {
  scrollRef: RefObject<HTMLDivElement>;
  userId: string | undefined;
}

export default function ChattingList({ scrollRef, userId }: ChattingListPropTypes) {
  return (
    <Wrapper ref={scrollRef}>
      <ChatBubble userId={userId} />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow-y: scroll;
  width: 375px;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;
