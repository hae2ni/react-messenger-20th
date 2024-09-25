import styled, { css } from "styled-components";

export const rowFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const columnFlex = css`
  ${rowFlex}

  flex-direction:column
`;

export const Icon = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
