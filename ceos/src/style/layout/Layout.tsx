import { MemoizedPhoneHeader } from "@components/common/PhoneHeader";
import styled from "styled-components";
import HomeBar from "@assets/img/HomeBar.png";
import LightHomeBar from "@assets/img/Light.png";
import { isMobile } from "react-device-detect";
import { Outlet, useLocation } from "react-router";
import NavigateBar from "@components/common/NavigateBar";
import backgroundImg from "@assets/img/background_img.png";

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const isMessageRoom = pathname.includes("/message");
  const isMyPage = pathname.includes("/myprofile");

  return (
    <Container image={backgroundImg} $isMyPage={isMyPage} $isMessageRoom={isMessageRoom}>
      {!isMobile && <MemoizedPhoneHeader isMyPage={isMyPage} />}
      <Content>
        <Outlet />
      </Content>

      {!isMessageRoom && !isMyPage && <NavigateBar />}

      {!isMobile && (
        <footer>
          {isMyPage ? <HomeBarImg src={LightHomeBar} alt="light" /> : <HomeBarImg src={HomeBar} alt="HomeBar" />}
        </footer>
      )}
    </Container>
  );
}
interface ContainerProps {
  $isMessageRoom: boolean;
  $isMyPage: boolean;
  image: string;
}

const Container = styled.main<ContainerProps>`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: var(--app-max-width, 375px);
  height: 812px;
  margin-right: auto;
  margin-left: auto;

  background-color: ${(props) => (props.$isMessageRoom ? props.theme.colors.profile2 : props.theme.colors.white)};
  background-image: ${(props) => (props.$isMyPage ? `url(${props.image})` : "none")};
  background-size: 100%;
  border: none;
`;

const Content = styled.div`
  height: 730px;
`;

const HomeBarImg = styled.img`
  display: flex;
`;
