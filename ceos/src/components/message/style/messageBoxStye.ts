import { rowFlex } from "style/commonStyle";
import styled from "styled-components";

export const MessageBoxStyle = styled.p`
  max-width: fit-content;
  max-height: fit-content;
  padding: 10px;

  ${({ theme }) => theme.fonts.medium16};
  color: ${({ theme }) => theme.colors.black};

  border-radius: 16px;
`;

export const TextWrapper = styled.div`
  ${rowFlex}
  max-width: 185px;
  min-height: 39px;
  padding: 10px;
`;
