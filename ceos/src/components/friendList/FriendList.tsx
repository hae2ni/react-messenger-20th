import { FRIEND_LIST } from "constant/friends";
import styled from "styled-components";
import FriendProfile from "./friendProfile/FriendProfile";

export default function FriendList() {
  return (
    <Wrapper>
      {FRIEND_LIST.map((friend) => {
        const { id, user, statusMessage, profile } = friend;

        return <FriendProfile key={id} user={user} statusMessage={statusMessage} profile={profile} />;
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
