import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 50rem;
  padding: 1.5rem;

  text-align: justify;
  font-weight: 400;
  line-height: 1.375rem;

  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.text.primary};

  border-radius: 1rem;
`;
