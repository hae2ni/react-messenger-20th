import ChattingInput from "@components/ChattingInput";
import ChattingList from "@components/ChattingList";
import ChattingRoomHeader from "@components/ChattingRoomHeader";
import { useStore } from "@core/useStore";
import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

export default function ChattingRoom() {
  const newDummyText = useStore((state) => state.dummyText);
  const { userId } = useParams();

  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [newDummyText]);

  function scrollToBottom() {
    if (scrollRef.current) {
      const { scrollHeight, clientHeight } = scrollRef.current;
      scrollRef.current.scrollTop = scrollHeight - clientHeight;
    }
  }

  return (
    <ChattingMain>
      <ChattingRoomHeader userId={userId} />
      <ChattingList userId={userId} scrollRef={scrollRef} />
      <ChattingInput />
    </ChattingMain>
  );
}

const ChattingMain = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 730px;
`;
