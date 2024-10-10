import styled from "styled-components";
import ChatProfile from "@assets/profile/chatting_profile.svg?react";
import { rowFlex } from "style/commonStyle";
import { FunctionComponent, SVGProps } from "react";

export default function MyProfile() {
  return (
    <Wrapper>
      <ProfileImg />
      <TextWrapper>
        <Myname>권혜인</Myname>
        <StatusMessage>상태 메세지</StatusMessage>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  gap: 12px;
  justify-content: flex-start;
  height: 72px;
`;

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

const Profile = (Component: SVGComponent) => styled(Component)`
  width: 72px;
  height: 72px;
  border-radius: 16px;
`;
const ProfileImg = Profile(ChatProfile);

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Myname = styled.p`
  ${({ theme }) => theme.fonts.medium16};
`;

const StatusMessage = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;
