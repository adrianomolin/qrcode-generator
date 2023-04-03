import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  gap: 3rem;

  width: 100%;
  flex-direction: column;

  .input-form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }

  .size-type {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }

  button {
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.light};
    }

    &:active {
      background-color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
