import { ContentContainer, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import MenuIC from "@/assets/icons/menu_ic.svg?react";
import ArrowIC from "@/assets/icons/arrow_ic.svg?react";
import SearchIC from "@/assets/icons/search_ic.svg?react";
import { useStore } from "@core/useStore";

export default function ChattingRoomHeader() {
  const dummyChat = useStore((state) => state.dummyText);
  const setDummyChat = useStore((state) => state.setDummyText);
  const name = dummyChat?.find((data) => data.id !== "나");

  function handleChangeDummyText() {
    setDummyChat();
  }

  return (
    <Wrapper>
      <ContentContainer>
        <LeftWrapper>
          <ArrowICon />
          <Text onClick={handleChangeDummyText}>{name?.id}</Text>
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
  cursor: pointer;
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
