import styled from "styled-components";

import BatteryIC from "@assets/icons/phbattery_ic.svg?react";
import SignalIC from "@assets/icons/phsignal_ic.svg";
import WifiIC from "@assets/icons/phwifi_ic.svg";
import { rowFlex } from "style/commonStyle";

export default function PhoneHeader() {
  return (
    <Wrapper>
      <ContentWrapper>
        <SignalIC />
        <WifiIC />
        <BatteryIC />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 48px;
`;

const ContentWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 324.8px;
  height: 17px;
`;
