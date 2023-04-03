import styled from 'styled-components';

export default styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.25rem;

  outline: 0;
  border: 0;

  background: ${({ theme }) => theme.colors.primary.main};

  transition: background-color ease-in .2s;

  font-weight: 600;
`;
