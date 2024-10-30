import { Icon, rowFlex, SmallIcon } from "style/commonStyle";
import styled from "styled-components";
import LinkIc from "@assets/icons/link_ic.svg?react";
import ArrowIc from "@assets/icons/arrow_right.svg?react";
import { LinklistType } from "types/linkListType";

export default function LinkComponent(props: LinklistType) {
  const { sitename, url } = props;

  return (
    <Container>
      <Content onClick={() => window.open(url)}>
        <Wrapper>
          <LinkIcon />
          <TextWrapper>
            <SiteName>{sitename}</SiteName>
            <LinkUrl>{sitename}.com</LinkUrl>
          </TextWrapper>
        </Wrapper>
        <ArrowIcon />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  ${rowFlex}
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

const LinkUrl = styled.div`
  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.white};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  width: 98px;
  height: 35px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 205px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 311px;
`;
