import RegisterForm from '../components/RegisterForm/RegisterForm';
import React from 'react';

import { Background, Container, AuthContainer } from './RegisterPage.styled';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
 
  
  return (
    <Background>
      <Container>
        <AuthContainer>
          <h1>Welcome to My App</h1>
          <RegisterForm  />
        </AuthContainer>
      </Container>
    </Background>
  );
};

export default RegisterPage;
