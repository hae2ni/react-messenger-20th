import { ProfileImg } from "@components/common/ProfileImg";
import { formattedTime } from "@utils/formattedTime";
import { FRIEND_LIST } from "constant/friends";
import styled from "styled-components";

export default function OneChat(props) {
  const { lastText, lastTime, user, userId } = props;
  const formatTime = formattedTime(lastTime);

  const friendProfile = FRIEND_LIST.find((friend) => friend.userId === userId)?.profile;

  return (
    <Container>
      <Wrapper>
        <ProfileImg profile={friendProfile} />

        <NameText>
          <UserName>{user}</UserName>
          <LastMessage>{lastText}</LastMessage>
        </NameText>
      </Wrapper>
      <Time>{formatTime}</Time>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 343px;
  height: 56px;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

const NameText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 203px;
`;

const UserName = styled.p`
  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.black};
`;

const LastMessage = styled.p`
  ${({ theme }) => theme.fonts.medium14};
  color: ${({ theme }) => theme.colors.gray500};
`;

const Time = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;
