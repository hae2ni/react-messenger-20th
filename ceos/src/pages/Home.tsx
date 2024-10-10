import Favorites from "@components/friendList/Favorites";
import Header from "@components/friendList/Header";
import MyProfile from "@components/friendList/MyProfile";
import NavigateBar from "@components/friendList/NavigateBar";

export default function Home() {
  return (
    <>
      <Header />
      <MyProfile />
      <Favorites />
      <NavigateBar />
    </>
  );
}
