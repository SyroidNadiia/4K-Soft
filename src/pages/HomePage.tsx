import React from 'react';
import { RegisterLink, StyledHome, RegisterImage } from './HomePage.styled';
import registerNow from '../images/registerNow.png';

const HomePage: React.FC = () => {
  return (
      <StyledHome>
        <h1>Welcome to Our Online Store</h1>
        <p>Shop with ease and efficiency. Register in Our Online Store</p>
        <RegisterImage src={registerNow} alt="registerNow"></RegisterImage>
        <RegisterLink to="/auth/register">Registration</RegisterLink>
      </StyledHome>
  );
};

export default HomePage;
