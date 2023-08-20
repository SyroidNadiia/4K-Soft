import RegisterForm from '../components/RegisterForm/RegisterForm';
import React from 'react';
import Packets from '../images/Packets.png';
import { AuthContainer, CommerceImage } from './RegisterPage.styled';

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <AuthContainer>
      <RegisterForm />
      <CommerceImage src={Packets} alt="Commerce" width={300} height={300} />
    </AuthContainer>
  );
};

export default RegisterPage;
