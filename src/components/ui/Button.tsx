import { ReactNode } from 'react';

interface IButtonProps {
  children?: ReactNode;
}

export default function Button({ children }: IButtonProps) {
  return <button className="bg-blue-500 text-white rounded-sm px-2 py-1">{children}</button>;
}
