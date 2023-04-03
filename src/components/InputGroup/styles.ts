import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;

  flex: 1;

  .title {
    font-weight: 400;
    font-size: 1.125rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text.label}
  }

  small {
    color: ${({ theme }) => theme.colors.danger}
  }
`;
