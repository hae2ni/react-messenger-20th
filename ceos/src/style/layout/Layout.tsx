import { MemoizedPhoneHeader } from "@components/common/PhoneHeader";
import styled from "styled-components";
import HomeBar from "@assets/img/HomeBar.png";
import { isMobile } from "react-device-detect";
import { Outlet, useLocation } from "react-router";
import NavigateBar from "@components/common/NavigateBar";

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;
  const isMessageRoom = pathname.includes("/message");

  return (
    <Container $isMessageRoom={isMessageRoom}>
      {!isMobile && <MemoizedPhoneHeader />}
      <Content>
        <Outlet />
      </Content>

      {!isMessageRoom && <NavigateBar />}
      {!isMobile && (
        <footer>
          <HomeBarImg src={HomeBar} alt="HomeBar" />
        </footer>
      )}
    </Container>
  );
}
interface ContainerProps {
  $isMessageRoom: boolean;
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
  border: none;
`;

const Content = styled.div`
  height: 730px;
`;

const HomeBarImg = styled.img`
  display: flex;
`;
