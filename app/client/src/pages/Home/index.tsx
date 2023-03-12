import React from 'react';
import { ContentMenu } from '../ContentMenu';
import { Header } from './Header';

export function Home() {
  return (
    <div className="w-full h-full min-h-screen bg-gray-600">
      <div className="flex flex-col p-12 w-full">
        <Header />

        <div className="w-full flex flex-col gap-2 px-6">
          <ContentMenu />
          <div>리스트 컴포넌트</div>

          <div>플러스 버튼(absolute)</div>
        </div>
      </div>
    </div>
  );
}
