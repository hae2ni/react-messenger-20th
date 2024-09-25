import PhoneHeader from "@components/PhoneHeader";
import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <MainContainer>
      <PhoneHeader />
      {children}
    </MainContainer>
  );
}

const MainContainer = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  max-width: var(--app-max-width, 375px);
  min-height: 812px;
  margin-right: auto;
  margin-left: auto;

  background-color: ${({ theme }) => theme.colors.profile2};
  border: none;
`;
