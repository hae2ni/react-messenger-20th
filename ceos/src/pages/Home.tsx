import Favorites from "@components/friendList/FavFriends/Favorites";
import FriendList from "@components/friendList/FriendList";
import Header from "@components/common/Header";
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
