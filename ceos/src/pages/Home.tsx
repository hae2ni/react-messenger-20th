import Favorites from "@components/friendList/FavFriends/Favorites";
import FriendList from "@components/friendList/FriendList";
import Header from "@components/common/Header";
import MyProfile from "@components/friendList/MyProfile";

import styled from "styled-components";
import { Link } from "react-router-dom";

import StrokeIc from "@assets/icons/line_ic.svg?react";

export default function Home() {
  return (
    <Content>
      <Header />
      <Link to={"/myprofile"}>
        <MyProfile />
      </Link>
      <Stroke />
      <Favorites />
      <Stroke />
      <FriendList />
    </Content>
  );
}

const Content = styled.div`
  margin: 0 16px;
`;

const Stroke = styled(StrokeIc)`
  width: 343px;
`;
