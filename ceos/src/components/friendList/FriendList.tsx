import { FRIEND_LIST } from "constant/friends";
import styled from "styled-components";
import FriendProfile from "./friendProfile/FriendProfile";
import { Link } from "react-router-dom";

export default function FriendList() {
  return (
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
  );
}

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
`;
