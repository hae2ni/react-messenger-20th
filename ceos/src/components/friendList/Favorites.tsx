import styled from "styled-components";
import UpIc from "@assets/icons/up_ic.svg?react";
import DowwnIc from "@assets/icons/down_ic.svg?react";
import { Icon } from "style/commonStyle";

export default function Favorites() {
  return (
    <Wrapper>
      <Stroke />
      <Container>
        <Text>즐겨찾기</Text>
        <UpIcon />
      </Container>
      <Stroke />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
`;

const UpIcon = Icon(UpIc);
const DownIcon = Icon(DowwnIc);

const Text = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;

const Stroke = styled.div`
  width: 343px;
  border-bottom: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray500};
`;
