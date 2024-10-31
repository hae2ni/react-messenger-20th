import styled, { keyframes } from "styled-components";
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
    <Wrapper isOpen={isFavListOpen}>
      <ArrangeContainer>
        <Container>
          <Text>즐겨찾기</Text>
          {isFavListOpen ? <DownIcon onClick={handleFavList} /> : <UpIcon onClick={handleFavList} />}
        </Container>
        <FavListContainer isOpen={isFavListOpen}>
          {isFavListOpen && (
            <>
              <FavFriendList />
            </>
          )}
        </FavListContainer>
      </ArrangeContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  width: 343px;
  height: 12px;
  margin-top: 8px;
`;

const ArrangeContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const FavListContainer = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  min-height: ${(props) => (props.isOpen ? "68px" : 0)};
  margin-top: 8px;
  animation: ${(props) => (props.isOpen ? slideDown : slideUp)} 3s;
`;

const slideDown = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 300px;
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    max-height: 300px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;
