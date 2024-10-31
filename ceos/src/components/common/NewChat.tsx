import { rowFlex } from "style/commonStyle";
import styled from "styled-components";

export default function NewChat() {
  return <Container>새 채팅방입니다. 채팅을 시작해 보세요.</Container>;
}

const Container = styled.div`
  ${rowFlex}
  width: 343px;
  height: 32px;

  background-color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};

  border-radius: 16px;
`;
