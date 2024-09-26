import { ContentContainer, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import MenuIC from "@/assets/icons/menu_ic.svg?react";
import ArrowIC from "@/assets/icons/arrow_ic.svg?react";
import SearchIC from "@/assets/icons/search_ic.svg?react";
import { RED_CHAT } from "constant/chatRed";

export default function ChattingRoomHeader() {
  const name = RED_CHAT?.find((data) => data.id !== "나");
  return (
    <Wrapper>
      <ContentContainer>
        <LeftWrapper>
          <ArrowICon />
          <Text>{name?.id}</Text>
        </LeftWrapper>

        <RightWrapper>
          <SearchICon />
          <MenuIcon />
        </RightWrapper>
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  ${rowFlex}
  width: 100vw;
  height: 64px;
`;

const MenuIcon = Icon(MenuIC);
const ArrowICon = Icon(ArrowIC);
const SearchICon = Icon(SearchIC);

const Text = styled.p`
  ${({ theme }) => theme.fonts.bold18};
`;

const LeftWrapper = styled.div`
  ${rowFlex}
  gap: 16px;
`;

const RightWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 68px;
`;
