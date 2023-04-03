import styled from 'styled-components';

export default styled.select`
  height: 3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.125rem;

  outline: 0;
  border: 0;

  box-shadow: ${({ theme }) => theme.boxShadow};

  background: ${({ theme }) => theme.colors.inputBackground};

  border: 1px solid #fff;

  transition: border-color ease-in .2s;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
