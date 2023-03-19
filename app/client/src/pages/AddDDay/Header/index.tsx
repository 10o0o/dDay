import React from 'react';
import { ControlMenu } from './ControlMenu';
import { Title } from './Title';

export function Header() {
  return (
    <div className="bg-gray-600 h-52 flex flex-col p-6">
      <ControlMenu />
      <Title />
    </div>
  );
}
