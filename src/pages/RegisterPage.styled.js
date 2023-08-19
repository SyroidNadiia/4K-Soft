import styled from '@emotion/styled';


export const Background = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

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


export const AuthContainer = styled.div`
  width: 100%;
  padding: 24px;

  background-color: var(--bgColorAuth);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    padding: 40px;
    width: 424px;
  }
`;

export const TabsContainer = styled.div`
  padding-bottom: 40px;
  list-style: none;
  text-decoration: none;
  color: white;
`;
export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  margin-top: 24px;
`;
