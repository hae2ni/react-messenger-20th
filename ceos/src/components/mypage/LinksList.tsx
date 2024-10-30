import { LINK_LIST } from "constant/links";
import LinkComponent from "./LinkComponent";
import styled from "styled-components";

export default function LinksList() {
  return (
    <Container>
      {LINK_LIST.map((link) => {
        const { sitename, url } = link;

        return <LinkComponent key={sitename} sitename={sitename} url={url} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
