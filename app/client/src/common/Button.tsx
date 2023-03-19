import React, { ReactNode } from 'react';

interface Iprops {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  noHover?: boolean;
}

export function Button(props: Iprops) {
  return (
    <button
      className={`btn ${props.className} 
        ${!props.noHover ? 'hover:bg-gray-500' : ''}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
