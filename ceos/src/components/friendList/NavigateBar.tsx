import { columnFlex, Icon, rowFlex } from "style/commonStyle";
import styled from "styled-components";

import UserIc from "@assets/icons/user_default_ic.svg?react";
import MoreIc from "@assets/icons/more_ic.svg?react";
import ChatIc from "@assets/icons/chat_ic.svg?react";

export default function NavigateBar() {
  return (
    <Wrapper>
      <BottonWrapper>
        <UserIcon />
        <NavText>친구</NavText>
      </BottonWrapper>
      <BottonWrapper>
        <ChatIcon />
        <NavText>채팅</NavText>
      </BottonWrapper>
      <BottonWrapper>
        <MoreIcon />
        <NavText>더보기</NavText>
      </BottonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  ${rowFlex}
  justify-content: space-between;
  height: 64px;
`;

const BottonWrapper = styled.button`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

const NavText = styled.p`
  ${({ theme }) => theme.fonts.medium12};
`;

const UserIcon = Icon(UserIc);
const MoreIcon = Icon(MoreIc);
const ChatIcon = Icon(ChatIc);
