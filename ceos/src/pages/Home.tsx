import Favorites from "@components/friendList/Favorites";
import FriendList from "@components/friendList/FriendList";
import Header from "@components/friendList/Header";
import MyProfile from "@components/friendList/MyProfile";

export default function Home() {
  return (
    <>
      <Header />
      <MyProfile />
      <Favorites />
      <FriendList />
    </>
  );
}
