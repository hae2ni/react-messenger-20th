import styled from "styled-components";

import BatteryIC from "@assets/statusBar/phbattery_ic.svg?react";
import SignalIC from "@assets/statusBar/phsignal_ic.svg?react";
import WifiIC from "@assets/statusBar/phwifi_ic.svg?react";
import TimeIC from "@assets/statusBar/phTime.svg?react";
import { rowFlex } from "style/commonStyle";

export default function PhoneHeader() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TimeIcon />

        <RightWrapper>
          <SignalICon />
          <WifiIcon />
          <BatteryICon />
        </RightWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${rowFlex}
  width: 100%;
  height: 48px;
`;

const RightWrapper = styled.div`
  ${rowFlex}
  gap: 5px;
`;

const ContentWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 324.8px;
  height: 17px;
`;

const BatteryICon = styled(BatteryIC)`
  width: 27px;
  height: 13px;
`;

const WifiIcon = styled(WifiIC)`
  width: 17px;
  height: 13px;
`;

const SignalICon = styled(SignalIC)`
  width: 20px;
  height: 12px;
`;

const TimeIcon = styled(TimeIC)`
  width: 31.5px;
  height: 21px;
`;
