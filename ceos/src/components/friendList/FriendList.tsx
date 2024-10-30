import { FRIEND_LIST } from "constant/friends";
import styled from "styled-components";
import FriendProfile from "./friendProfile/FriendProfile";
import { Link } from "react-router-dom";

export default function FriendList() {
  return (
    <>
      <FriendNumber>친구 {FRIEND_LIST.length}명</FriendNumber>
      <Wrapper>
        {FRIEND_LIST.map((friend) => {
          const { userId, user, statusMessage, profile } = friend;

          return (
            <Link to={`/message/${userId}`}>
              <FriendProfile key={userId} user={user} statusMessage={statusMessage} profile={profile} />
            </Link>
          );
        })}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
`;

const FriendNumber = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.medium12};
  margin-bottom: 8px;
`;
