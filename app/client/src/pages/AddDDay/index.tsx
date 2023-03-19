import React from 'react';
import { Content } from './Content';
import { Header } from './Header';

export function AddDDay() {
  return (
    <div
      className="w-full h-full min-h-screen bg-gray-600 text-rose-500
      flex flex-col
    "
    >
      <Header />
      <Content />
    </div>
  );
}
