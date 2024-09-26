import styled from "styled-components";
import ChatBubble from "./ChatBubble";
import { RefObject } from "react";

interface ChattingListPropTypes {
  scrollRef: RefObject<HTMLDivElement>;
}

export default function ChattingList({ scrollRef }: ChattingListPropTypes) {
  return (
    <Wrapper ref={scrollRef}>
      <ChatBubble />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow-y: scroll;
  width: 375px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
