import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  gap: 4rem;

  height: 100%;
  padding: 3rem;
`;

export const Header = styled.header`
  font-family: 'Montserrat';
  font-size: 48px;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Content = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
