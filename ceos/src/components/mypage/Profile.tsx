import styled from "styled-components";
import ChatProfile from "@assets/profile/chatting_profile.svg?react";
import { columnFlex, SVGComponent } from "style/commonStyle";

export default function Profile() {
  return (
    <Container>
      <MyImg />
      <Name>권혜인</Name>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
  gap: 32px;
`;

const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.bold18};
`;

const ProfileImg = (Component: SVGComponent) => styled(Component)`
  width: 96px;
  height: 96px;
  border-radius: 16px;
`;
const MyImg = ProfileImg(ChatProfile);
