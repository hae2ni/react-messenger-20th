import styled from "styled-components";

import UserIc from "@assets/icons/user_default_ic.svg?react";
import MoreIc from "@assets/icons/more_ic.svg?react";
import ChatIc from "@assets/icons/chat_ic.svg?react";
import { Link } from "react-router-dom";
import { Icon, rowFlex } from "style/commonStyle";

export default function NavigateBar() {
  return (
    <Wrapper>
      <BottonWrapper to="/">
        <UserIcon />
        <NavText>친구</NavText>
      </BottonWrapper>
      <BottonWrapper to="/chattinglist">
        <ChatIcon />
        <NavText>채팅</NavText>
      </BottonWrapper>
      <DisabledButton>
        <MoreIcon />
        <NavText>더보기</NavText>
      </DisabledButton>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  ${rowFlex}
  justify-content: space-between;
  height: 64px;
  margin: 0 16px;
`;

const DisabledButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const BottonWrapper = styled(Link)`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  text-decoration: none;
`;

const NavText = styled.p`
  ${({ theme }) => theme.fonts.medium12};
`;

const UserIcon = Icon(UserIc);
const MoreIcon = Icon(MoreIc);
const ChatIcon = Icon(ChatIc);
