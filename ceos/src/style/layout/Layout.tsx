import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.main`
  display: flex;
  height: 100vh;
`;
