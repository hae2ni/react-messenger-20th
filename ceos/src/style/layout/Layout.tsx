import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
  width: 375px;
  height: 812px;
`;
