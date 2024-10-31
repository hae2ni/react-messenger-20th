import Favorites from "@components/friendList/FavFriends/Favorites";
import FriendList from "@components/friendList/FriendList";
import Header from "@components/common/Header";
import MyProfile from "@components/friendList/MyProfile";

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Content>
      <Header />
      <Link to={"/myprofile"}>
        <MyProfile />
      </Link>
      <Favorites />
      <FriendList />
    </Content>
  );
}

const Content = styled.div`
  margin: 0 16px;
`;
