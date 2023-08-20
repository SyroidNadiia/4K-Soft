import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0;
    width: 1440px;
  }
`;
