import ChattingInput from "@components/ChattingInput";
import ChattingRoomHeader from "@components/ChattingRoomHeader";
import Layout from "style/layout/Layout";
import styled from "styled-components";

export default function ChattingRoom() {
  return (
    <Layout>
      <ChattingMain>
        <ChattingRoomHeader />
        <ChattingInput />
      </ChattingMain>
    </Layout>
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
