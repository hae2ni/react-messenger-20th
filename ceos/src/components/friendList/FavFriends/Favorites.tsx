import styled from "styled-components";
import UpIc from "@assets/icons/up_ic.svg?react";
import DowwnIc from "@assets/icons/down_ic.svg?react";
import { SVGComponent } from "style/commonStyle";
import { useState } from "react";
import FavFriendList from "./FavFriendList";

export default function Favorites() {
  const [isFavListOpen, setIsFavListOpen] = useState(false);

  function handleFavList() {
    setIsFavListOpen(!isFavListOpen);
  }

  return (
    <Wrapper>
      <Stroke />
      <ArrangeContainer>
        <Container>
          <Text>즐겨찾기</Text>
          {isFavListOpen ? <DownIcon onClick={handleFavList} /> : <UpIcon onClick={handleFavList} />}
        </Container>
        {isFavListOpen && <FavFriendList />}
      </ArrangeContainer>
      <Stroke />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 343px;
`;

const ArrangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FavIcon = (Component: SVGComponent) => styled(Component)`
  cursor: pointer;
  width: 12px;
  height: 12px;
`;

const UpIcon = FavIcon(UpIc);
const DownIcon = FavIcon(DowwnIc);

const Text = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;

const Stroke = styled.div`
  width: 343px;
  border-bottom: solid;
  border-bottom-color: ${({ theme }) => theme.colors.gray500};
`;
