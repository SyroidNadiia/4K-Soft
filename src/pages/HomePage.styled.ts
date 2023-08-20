import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 80px;
`;

export const RegisterLink = styled(NavLink)`
  padding: 14px 0;
  width: 100%;
  display: block;
  background-color: #161616;
  border-radius: 8px;
  background-color: #5255bc;
  margin-bottom: 14px;
  text-decoration: none;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    background-color: #7b7ede;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

export const RegisterImage = styled.img`
  width: 300px;
  height: 300px;
`;
