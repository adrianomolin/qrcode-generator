import styled, { css } from 'styled-components';

interface InputProps {
  error?: string,
}

export default styled.input<InputProps>`
  padding: 1rem;
  border: 0;
  outline: 0;
  flex: 1;

  border-radius: 4px;
  height: 3.25rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.colors.inputBackground};

  border: 1px solid #fff;

  transition: border-color ease-in .2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger} !important;
  `}
`;
