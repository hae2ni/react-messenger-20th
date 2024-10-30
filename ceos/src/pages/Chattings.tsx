import List from "@components/chattings/List";
import Header from "@components/common/Header";
import styled from "styled-components";

export default function Chattings() {
  return (
    <Content>
      <Header />
      <List />
    </Content>
  );
}

const Content = styled.div`
  margin: 0 16px;
`;
