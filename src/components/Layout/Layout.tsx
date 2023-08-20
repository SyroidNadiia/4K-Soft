import React, { Suspense, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {children}
    </Container>
  );
};

export default Layout;
