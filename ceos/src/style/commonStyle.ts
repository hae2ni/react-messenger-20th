import { FunctionComponent, SVGProps } from "react";
import styled, { css } from "styled-components";

export const rowFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const columnFlex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export type SVGComponent = FunctionComponent<SVGProps<SVGSVGElement>>;

export const Icon = (Component: SVGComponent) => styled(Component)`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;

export const SmallIcon = (Component: SVGComponent) => styled(Component)`
  cursor: pointer;
  width: 12px;
  height: 12px;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 343px;
`;

export const IsActiveIcon = (Component: SVGComponent) => styled(Component)`
  cursor: pointer;
  width: 48px;
  height: 32px;
`;
