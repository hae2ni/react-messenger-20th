import { Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import MenuIC from "@/assets/icons/menu_ic.svg?react";
import ArrowIC from "@/assets/icons/arrow_ic.svg?react";
import SearchIC from "@/assets/icons/search_ic.svg?react";

export default function ChattingRoomHeader() {
  return (
    <Wrapper>
      <ContentContainer>
        <LeftWrapper>
          <Icon>
            <ArrowIC />
          </Icon>
          <Text>이름</Text>
        </LeftWrapper>

        <RightWrapper>
          <Icon>
            <SearchIC />
          </Icon>
          <Icon>
            <MenuIC />
          </Icon>
        </RightWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 64px;
`;

const ContentContainer = styled.div`
  ${rowFlex};

  justify-content: space-between;
  width: 343px;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.bold18};
`;

const LeftWrapper = styled.div`
  ${rowFlex}
  gap: 16px;
`;

const RightWrapper = styled.div`
  ${rowFlex}
  gap: 20px;
`;
