import { ContentContainer, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import MenuIC from "@/assets/icons/menu_ic.svg?react";
import ArrowIC from "@/assets/icons/arrow_ic.svg?react";
import SearchIC from "@/assets/icons/search_ic.svg?react";
import { useNavigate } from "react-router";
import { FRIEND_LIST } from "constant/friends";
import { UserIdType } from "types/userIdType";

export default function ChattingRoomHeader({ userId }: UserIdType) {
  const friendIndex = FRIEND_LIST.findIndex((friend) => friend.userId === userId);
  const friendName = friendIndex !== -1 && FRIEND_LIST[friendIndex].user;
  console.log(typeof userId);

  const navigate = useNavigate();

  function handleGoBackButton() {
    navigate(-1);
  }

  return (
    <Wrapper>
      <ContentContainer>
        <LeftWrapper>
          <ArrowICon onClick={handleGoBackButton} />
          <Text>{friendName}</Text>
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
