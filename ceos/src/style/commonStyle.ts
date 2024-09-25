import { FunctionComponent, SVGProps } from "react";
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

type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export const Icon = (Component: SVGComponent) => styled(Component)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 343px;
`;
