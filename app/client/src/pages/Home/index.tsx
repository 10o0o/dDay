import React from 'react';
import { Header } from './Header';

export function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col p-12 w-full">
        <Header />
        <div>title</div>
      </div>
    </div>
  );
}
