import { Container } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
};
