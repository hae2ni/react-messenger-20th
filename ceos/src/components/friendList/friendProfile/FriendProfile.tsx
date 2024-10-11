import styled from "styled-components";
import { friendListType } from "types/friendListType";

type ImgProps = Pick<friendListType, "profile">;
type FriendProfileProps = Omit<friendListType, "id">;

export default function FriendProfile(props: FriendProfileProps) {
  const { user, statusMessage, profile } = props;
  return (
    <Wrapper>
      <ProfileImg profile={profile} />
      <TextWrapper>
        <FriendName>{user}</FriendName>
        <StatusMessage>{statusMessage}</StatusMessage>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 343px;
`;

const ProfileImg = styled.img.attrs<ImgProps>((props) => ({
  src: props.profile,
  alt: "profileImg",
}))`
  width: 48px;
  height: 48px;
  border-radius: 20px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const FriendName = styled.h2`
  ${({ theme }) => theme.fonts.medium16};
`;

const StatusMessage = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;
