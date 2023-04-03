import { ReactNode } from 'react';

import { Container } from './styles';

interface InputGroupProps {
  title: string,
  children: ReactNode,
  error?: string,
}

export function InputGroup({ children, title, error }: InputGroupProps) {
  return (
    <Container>
      <div className="title">{title}</div>
      {children}
      {error && <small>* {error}</small>}
    </Container>
  );
}
