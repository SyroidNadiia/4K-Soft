import styled from '@emotion/styled';


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

export const CommerceImage = styled.img`
  width: 300px;
  height: 300px;

`;