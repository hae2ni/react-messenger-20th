import styled from "styled-components";
import TimeWhiteIc from "@assets/statusBar/time_white.svg?react";
import IndicatorWhite from "@assets/statusBar/Indicators_white.svg?react";

export default function WhitePhoneHeader() {
  return (
    <>
      <TimeWhite />
      <Indicator />
    </>
  );
}

const TimeWhite = styled(TimeWhiteIc)`
  width: 46px;
  height: 17px;
`;

const Indicator = styled(IndicatorWhite)`
  width: 78px;
  height: 13px;
`;
