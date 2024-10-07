import { MemoizedPhoneHeader } from "@components/PhoneHeader";
import styled from "styled-components";
import HomeBar from "@assets/img/HomeBar.png";
import { isMobile } from "react-device-detect";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <MainContainer>
      {!isMobile && <MemoizedPhoneHeader />}
      <Outlet />
      {!isMobile && (
        <footer>
          <HomeBarImg src={HomeBar} alt="HomeBar" />
        </footer>
      )}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: var(--app-max-width, 375px);
  min-height: 812px;
  margin-right: auto;
  margin-left: auto;

  background-color: ${({ theme }) => theme.colors.profile2};
  border: none;
`;

const HomeBarImg = styled.img`
  display: flex;
`;
