import React, { useState } from 'react';
import { DDayAddButton } from './components/DDayAddButton';
import { Content } from './Content';
import { Header } from './Header';

export function Home() {
  const subMenus = ['디데이', '더보기'];
  const [selectSubMenu, setSelectSubMenu] = useState<string>('디데이');

  const menuClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;

    setSelectSubMenu(value);
  };

  return (
    <div className="w-full h-full min-h-screen bg-gray-600">
      <div className="flex flex-col p-12 w-full">
        <Header
          subMenus={subMenus}
          selectedMenu={selectSubMenu}
          menuClickHandler={menuClickHandler}
        />

        <div className="w-full flex flex-col gap-2 px-6">
          <Content
            selectedMenu={selectSubMenu}
          />
        </div>

        <DDayAddButton />
      </div>
    </div>
  );
}
