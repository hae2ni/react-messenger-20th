import { Icon, SmallIcon } from "style/commonStyle";
import styled from "styled-components";
import LinkIc from "@assets/icons/link_ic.svg?react";
import ArrowIc from "@assets/icons/arrow_right.svg?react";

export default function LinkComponent() {
  return (
    <Container>
      <LinkIcon />
      <SiteName></SiteName>
      <ArrowIcon />
    </Container>
  );
}

const Container = styled.div`
  width: 343px;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 16px;
`;

const LinkIcon = Icon(LinkIc);
const ArrowIcon = SmallIcon(ArrowIc);

const SiteName = styled.p`
  ${({ theme }) => theme.fonts.medium12};
  color: ${({ theme }) => theme.colors.gray500};
`;
