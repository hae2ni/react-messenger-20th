import { FRIEND_LIST } from "constant/friends";
import styled from "styled-components";
import FavProfile from "./FavProfile";

export default function FavFriendList() {
  const FAVFRIEND_LIST = FRIEND_LIST.filter((friend) => friend.isFavorite);
  return (
    <Wrapper>
      {FAVFRIEND_LIST.map((data) => {
        const { user, profile, id } = data;
        return <FavProfile user={user} profile={profile} key={id} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  gap: 12px;
`;
