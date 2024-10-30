import Favorites from "@components/friendList/FavFriends/Favorites";
import FriendList from "@components/friendList/FriendList";
import Header from "@components/common/Header";
import MyProfile from "@components/friendList/MyProfile";

import styled from "styled-components";

export default function Home() {
  return (
    <Content>
      <Header />
      <MyProfile />
      <Favorites />
      <FriendList />
    </Content>
  );
}

const Content = styled.div`
  margin: 0 16px;
`;
