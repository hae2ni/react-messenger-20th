import styled from "styled-components";
import SettingIc from "@assets/icons/settings_ic.svg?react";
import SearchIc from "@assets/icons/search_ic.svg?react";
import UserIc from "@assets/icons/user_ic.svg?react";

import { Icon, rowFlex } from "style/commonStyle";
import { useLocation } from "react-router";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    console.log(pathname);
  }, [location]);

  return (
    <Wrapper>
      <HeaderText>{pathname === "/chattinglist" ? "채팅" : "친구"}</HeaderText>
      <IconWrapper>
        <SearchIcon />
        <UserIcon />
        <SettingIcon />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  ${rowFlex};
  width: 343px;
  height: 48px;
  justify-content: space-between;
  padding: 20px 0;
`;

const HeaderText = styled.h1`
  ${({ theme }) => theme.fonts.bold24};
  color: ${({ theme }) => theme.colors.black};
`;

const IconWrapper = styled.div`
  ${rowFlex}
  width: 112px;
  height: 24px;
  gap: 20px;
`;

const SearchIcon = Icon(SearchIc);
const SettingIcon = Icon(SettingIc);
const UserIcon = Icon(UserIc);
