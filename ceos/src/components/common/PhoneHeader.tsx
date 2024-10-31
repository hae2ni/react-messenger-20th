import styled from "styled-components";

import { rowFlex } from "style/commonStyle";
import NomalPhoneHeader from "./NormalPhoneHeader";
import WhitePhoneHeader from "./WhitePhoneHeader";
import React from "react";

interface PhoneHeaderProps {
  isMyPage: boolean;
}

function PhoneHeader({ isMyPage }: PhoneHeaderProps) {
  return (
    <Wrapper>
      <ContentWrapper>{isMyPage ? <WhitePhoneHeader /> : <NomalPhoneHeader />}</ContentWrapper>
    </Wrapper>
  );
}

export const MemoizedPhoneHeader = React.memo(PhoneHeader);

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 48px;
`;

const ContentWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 324px;
  height: 17px;
`;
