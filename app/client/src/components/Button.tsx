import React, { ReactNode } from 'react';

interface Iprops {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
}

export function Button(props: Iprops) {
  return (
    <button
      className={`btn hover:bg-gray-500 ${props.className}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
