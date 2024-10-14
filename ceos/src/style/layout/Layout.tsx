import { MemoizedPhoneHeader } from "@components/common/PhoneHeader";
import styled from "styled-components";
import HomeBar from "@assets/img/HomeBar.png";
import { isMobile } from "react-device-detect";
import { Outlet, useLocation } from "react-router";
import NavigateBar from "@components/common/NavigateBar";

export default function Layout() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container>
      {!isMobile && <MemoizedPhoneHeader />}
      <Content>
        <Outlet />
      </Content>
      {!pathname.includes("/message") && <NavigateBar />}
      {!isMobile && (
        <footer>
          <HomeBarImg src={HomeBar} alt="HomeBar" />
        </footer>
      )}
    </Container>
  );
}

const Container = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: var(--app-max-width, 375px);
  height: 812px;
  margin-right: auto;
  margin-left: auto;

  border: none;
`;

const Content = styled.div`
  height: 730px;
  margin: 0 16px;
`;

const HomeBarImg = styled.img`
  display: flex;
`;
