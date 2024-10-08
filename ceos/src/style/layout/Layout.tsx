import { MemoizedPhoneHeader } from "@components/PhoneHeader";
import styled from "styled-components";
import HomeBar from "@assets/img/HomeBar.png";
import { isMobile } from "react-device-detect";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <Container>
      {!isMobile && <MemoizedPhoneHeader />}
      <Content>
        <Outlet />
      </Content>
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

  background-color: ${({ theme }) => theme.colors.profile2};
  border: none;
`;

const Content = styled.div`
  height: 730px;
  margin: 0 16px;
`;

const HomeBarImg = styled.img`
  display: flex;
`;
