import React, { Suspense } from 'react';
import { Container } from './Layout.styled';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <Container>
      <Suspense fallback={null}></Suspense>
    </Container>
  );
};

export default Layout;
