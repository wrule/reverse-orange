import { ReactNode } from 'react';

interface IButtonProps {
  children?: ReactNode;
}

export default function Button({ children }: IButtonProps) {
  return <button>{children}</button>;
}
