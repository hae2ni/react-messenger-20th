import LinksList from "@components/mypage/LinksList";
import Profile from "@components/mypage/Profile";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import BackIc from "@assets/icons/arrow_white_ic.svg?react";
import { useNavigate } from "react-router";

export default function MyProfile() {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <BackIcon
          onClick={() => {
            navigate(-1);
          }}
        />
      </Header>
      <Container>
        <Profile />
        <LinksList />
      </Container>
    </>
  );
}

const Header = styled.header`
  height: 34px;
`;

const Container = styled.div`
  gap: 120px;
  ${columnFlex}
  margin-top: 98px;
`;

const BackIcon = styled(BackIc)`
  cursor: pointer;

  width: 24px;
  height: 24px;
  margin-top: 20px;
  margin-left: 16px;
`;
