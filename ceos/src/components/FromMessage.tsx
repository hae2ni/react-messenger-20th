import { TextContainer } from "style/commonStyle";
import styled from "styled-components";
import { textTypes } from "types/textType";

export default function FromMessage({ text }: textTypes) {
  return <Wrapper>{text}</Wrapper>;
}

const Wrapper = styled(TextContainer)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  ${({ theme }) => theme.fonts.medium16};
`;
